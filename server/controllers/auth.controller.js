const { supabaseAuthClient } = require('../configs/supabaseClient');
const User = require('../models/User');
const {
  upsertUserProfile,
  profileSchema,
  profileTable,
} = require('../repositories/profile.repository');

const ensureProfile = async ({ userId, firstName, lastName, email }) => {
  const userModel = User.fromRegistration({ firstName, lastName, email });
  const profileRow = userModel.toProfileRow(userId);

  const { error: profileError } = await upsertUserProfile(profileRow);

  if (profileError) {
    return {
      ok: false,
      statusCode: 500,
      body: {
        message: `Account created, but failed to save profile in ${profileSchema}.${profileTable}`,
        reason: profileError.message,
      },
    };
  }

  return { ok: true };
};

// Mapuje techniczne błędy Supabase na czytelne komunikaty API.
const mapSupabaseError = (error) => {
  const message = error?.message || '';

  if (/already registered|user already registered/i.test(message)) {
    return {
      statusCode: 409,
      message: 'This email address is already registered',
    };
  }

  if (/invalid login credentials|invalid email|password/i.test(message)) {
    return {
      statusCode: 401,
      message: 'Invalid email or password',
    };
  }

  if (/refresh token|jwt|token is invalid|invalid token|session not found/i.test(message)) {
    return {
      statusCode: 401,
      message: 'Session expired. Please log in again.',
    };
  }

  if (/rate limit|over_email_send_rate_limit|too many requests/i.test(message)) {
    return {
      statusCode: 429,
      message: 'Too many attempts in a short time. Please try again later.',
    };
  }

  return {
    statusCode: 500,
    message: 'Supabase communication error',
  };
};

const formatAuthResponse = (data, fallbackEmail = null) => ({
  user: {
    id: data?.user?.id || null,
    email: data?.user?.email || fallbackEmail,
  },
  session: data?.session || null,
});

// Rejestruje konto w auth.users i tworzy rekord profilu 1:1.
const register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const userModel = User.fromRegistration({ firstName, lastName, email });

    const signUpOptions = {};

    if (process.env.SUPABASE_EMAIL_REDIRECT_URL) {
      signUpOptions.emailRedirectTo = process.env.SUPABASE_EMAIL_REDIRECT_URL;
    }

    const { data, error } = await supabaseAuthClient.auth.signUp({
      email: userModel.email,
      password,
      options: signUpOptions,
    });

    if (error) {
      const mapped = mapSupabaseError(error);
      return res.status(mapped.statusCode).json({ message: mapped.message });
    }

    if (data?.user?.id) {
      const profileResult = await ensureProfile({
        userId: data.user.id,
        firstName,
        lastName,
        email: data?.user?.email || email,
      });
      if (!profileResult.ok) {
        return res.status(profileResult.statusCode).json(profileResult.body);
      }
    }

    return res.status(201).json({
      message: 'Account created successfully.',
      user: {
        id: data?.user?.id || null,
        email: data?.user?.email || email,
      },
    });
  } catch (err) {
    return next(err);
  }
};

// Logowanie e-mail + hasło i zwrot sesji do klienta mobilnego.
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { data, error } = await supabaseAuthClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      const mapped = mapSupabaseError(error);
      return res.status(mapped.statusCode).json({ message: mapped.message });
    }

    return res.status(200).json({
      message: 'Login successful.',
      ...formatAuthResponse(data, email),
    });
  } catch (err) {
    return next(err);
  }
};

// Odświeżenie sesji na podstawie refresh tokena zapisnego w aplikacji.
const refreshSession = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    const { data, error } = await supabaseAuthClient.auth.refreshSession({
      refresh_token: refreshToken,
    });

    if (error) {
      const mapped = mapSupabaseError(error);
      return res.status(mapped.statusCode).json({ message: mapped.message });
    }

    return res.status(200).json({
      message: 'Session refreshed successfully.',
      ...formatAuthResponse(data),
    });
  } catch (err) {
    return next(err);
  }
};

// Wylogowanie: unieważnia wszystkie sesje użytkownika po zweryfikowaniu access tokena.
const logout = async (req, res, next) => {
  try {
    const { accessToken } = req.body;

    const { data: userData, error: userError } = await supabaseAuthClient.auth.getUser(accessToken);

    if (userError || !userData?.user?.id) {
      const mapped = mapSupabaseError(userError || new Error('Brak poprawnego tokena'));
      return res.status(mapped.statusCode).json({ message: mapped.message });
    }

    const { error: signOutError } = await supabaseAuthClient.auth.admin.signOut(userData.user.id);

    if (signOutError) {
      const mapped = mapSupabaseError(signOutError);
      return res.status(mapped.statusCode).json({ message: mapped.message });
    }

    return res.status(200).json({
      message: 'Logged out successfully.',
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  register,
  login,
  refreshSession,
  logout,
};
