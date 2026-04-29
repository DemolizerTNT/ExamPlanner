const validateProfileUpdate = (req, res, next) => {
  const { firstName, lastName } = req.body;
  const errors = {};

  if (firstName !== undefined) {
    if (typeof firstName !== 'string') {
      errors.firstName = 'Imię musi być tekstem';
    } else if (firstName.trim().length === 0) {
      errors.firstName = 'Imię nie może być puste';
    } else if (firstName.trim().length > 80) {
      errors.firstName = 'Imię jest za długie (maks. 80 znaków)';
    }
  }

  if (lastName !== undefined) {
    if (typeof lastName !== 'string') {
      errors.lastName = 'Nazwisko musi być tekstem';
    } else if (lastName.trim().length === 0) {
      errors.lastName = 'Nazwisko nie może być puste';
    } else if (lastName.trim().length > 80) {
      errors.lastName = 'Nazwisko jest za długie (maks. 80 znaków)';
    }
  }

  if (firstName === undefined && lastName === undefined) {
    return res.status(400).json({
      message: 'Podaj imię lub nazwisko do aktualizacji',
    });
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      message: 'Nieprawidłowe dane profilu',
      errors,
    });
  }

  return next();
};

const validateAvatarUpload = (req, res, next) => {
  let { base64Data, mimeType } = req.body;
  const errors = {};

  if (!base64Data || typeof base64Data !== 'string') {
    errors.base64Data = 'Brakuje danych avatara';
  } else {
    // obsłużenie data URI: data:<mime>;base64,<data>
    const dataUriMatch = base64Data.match(/^data:([^;]+);base64,(.+)$/);
    if (dataUriMatch) {
      mimeType = mimeType || dataUriMatch[1];
      base64Data = dataUriMatch[2];
    }

    // prosty check czy to wygląda na base64 (bez walidacji treści)
    if (!/^[A-Za-z0-9+/=\n\r]+$/.test(base64Data)) {
      errors.base64Data = 'Dane avatara nie są prawidłowym base64';
    }

    // limit rozmiaru (np. ~8MB w base64) aby zapobiec przesadnie dużym plikom
    const MAX_BASE64_LENGTH = 8_000_000;
    if (base64Data.length > MAX_BASE64_LENGTH) {
      errors.base64Data = 'Plik avatara jest zbyt duży';
    }
  }

  const allowedMime = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
  if (!mimeType || typeof mimeType !== 'string') {
    errors.mimeType = 'Brakuje typu pliku avatara';
  } else if (!allowedMime.includes(mimeType.toLowerCase())) {
    errors.mimeType = 'Nieobsługiwany typ pliku avatara';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      message: 'Nieprawidłowe dane avatara',
      errors,
    });
  }

  return next();
};

module.exports = {
  validateProfileUpdate,
  validateAvatarUpload,
};

