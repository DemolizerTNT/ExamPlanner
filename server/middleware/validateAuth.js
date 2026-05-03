const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate registration input data.
const validateRegister = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const errors = {};

  if (!firstName || typeof firstName !== 'string' || !firstName.trim()) {
    errors.firstName = 'Please provide a first name';
  }

  if (!lastName || typeof lastName !== 'string' || !lastName.trim()) {
    errors.lastName = 'Please provide a last name';
  }

  if (!email || !emailRegex.test(email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (!password || password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      message: 'Invalid registration data',
      errors,
    });
  }

  return next();
};

// Validate login input data.
const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !emailRegex.test(email) || !password || typeof password !== 'string') {
    return res.status(400).json({
      message: 'Please provide a valid email and password',
    });
  }

  return next();
};

// Validate refresh token when restoring a session.
const validateRefresh = (req, res, next) => {
  const { refreshToken } = req.body;

  if (!refreshToken || typeof refreshToken !== 'string') {
    return res.status(400).json({
      message: 'Missing or invalid refresh token',
    });
  }

  return next();
};

// Validate tokens when logging out.
const validateLogout = (req, res, next) => {
  const { accessToken, refreshToken } = req.body;

  if (!accessToken || typeof accessToken !== 'string') {
    return res.status(400).json({
      message: 'Missing or invalid access token',
    });
  }

  if (!refreshToken || typeof refreshToken !== 'string') {
    return res.status(400).json({
      message: 'Missing or invalid refresh token',
    });
  }

  return next();
};

module.exports = {
  validateRegister,
  validateLogin,
  validateRefresh,
  validateLogout,
};

