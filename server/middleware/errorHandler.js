// Globalny handler błędów zwraca spójny format odpowiedzi JSON.
function errorHandler(err, req, res, _next) {
  const statusCode = err.statusCode || 500;

  if (statusCode >= 500) {
    // Loguj pełny błąd po stronie serwera
    console.error('[SERVER_ERROR]', err);
  }

  const payload = {
    message: err.message || 'Wystąpił nieoczekiwany błąd serwera',
  };

  // Jeżeli błąd zawiera szczegóły walidacji, dołącz je do odpowiedzi
  if (err.errors && typeof err.errors === 'object') {
    payload.errors = err.errors;
  }

  res.status(statusCode).json(payload);
}

module.exports = errorHandler;

