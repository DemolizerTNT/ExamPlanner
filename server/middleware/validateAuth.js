const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Walidacja danych rejestracji
const validateRegister = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const errors = {};

  if (firstName === undefined || typeof firstName !== 'string' || !firstName.trim()) {
    errors.firstName = 'Podaj imię';
  } else if (firstName.trim().length > 80) {
    errors.firstName = 'Imię jest za długie (maks. 80 znaków)';
  }

  if (lastName === undefined || typeof lastName !== 'string' || !lastName.trim()) {
    errors.lastName = 'Podaj nazwisko';
  } else if (lastName.trim().length > 80) {
    errors.lastName = 'Nazwisko jest za długie (maks. 80 znaków)';
  }

  if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
    errors.email = 'Podaj poprawny adres e-mail';
  }

  if (password === undefined || typeof password !== 'string' || password.length < 6) {
    errors.password = 'Hasło musi mieć co najmniej 6 znaków';
  } else if (password.length > 128) {
    errors.password = 'Hasło jest za długie';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      message: 'Nieprawidłowe dane rejestracji',
      errors,
    });
  }

  return next();
};

// Walidacja danych logowania
const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = {};

  if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
    errors.email = 'Podaj poprawny adres e-mail';
  }

  if (!password || typeof password !== 'string' || password.length < 6) {
    errors.password = 'Podaj poprawne hasło (min. 6 znaków)';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      message: 'Błąd logowania',
      errors,
    });
  }

  return next();
};

// Walidacja tokena odświeżania
const validateRefresh = (req, res, next) => {
  const { refreshToken } = req.body;

  if (!refreshToken || typeof refreshToken !== 'string') {
    return res.status(400).json({ message: 'Brakuje lub nieprawidłowy refreshToken' });
  }

  return next();
};

// Walidacja tokenu dostępu przy wylogowaniu
const validateLogout = (req, res, next) => {
  const { accessToken } = req.body;

  if (!accessToken || typeof accessToken !== 'string') {
    return res.status(400).json({ message: 'Brakuje lub nieprawidłowy accessToken' });
  }

  return next();
};

module.exports = {
  validateRegister,
  validateLogin,
  validateRefresh,
  validateLogout,
};

