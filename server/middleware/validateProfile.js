const validateProfileUpdate = (req, res, next) => {
  const { firstName, lastName, facultyId, directionId, specializationId, semester } = req.body;
  const errors = {};

  if (firstName !== undefined) {
    if (typeof firstName !== 'string') {
      errors.firstName = 'First name must be a string';
    } else if (firstName.trim().length === 0) {
      errors.firstName = 'First name cannot be empty';
    } else if (firstName.trim().length > 80) {
      errors.firstName = 'First name is too long (max 80 characters)';
    }
  }

  if (lastName !== undefined) {
    if (typeof lastName !== 'string') {
      errors.lastName = 'Last name must be a string';
    } else if (lastName.trim().length === 0) {
      errors.lastName = 'Last name cannot be empty';
    } else if (lastName.trim().length > 80) {
      errors.lastName = 'Last name is too long (max 80 characters)';
    }
  }

  if (facultyId !== undefined && typeof facultyId !== 'string') {
    errors.facultyId = 'Faculty id must be a string';
  }

  if (directionId !== undefined && typeof directionId !== 'string') {
    errors.directionId = 'Direction id must be a string';
  }

  if (specializationId !== undefined && specializationId !== null && typeof specializationId !== 'string') {
    errors.specializationId = 'Specialization id must be a string or null';
  }

  if (semester !== undefined) {
    if (typeof semester !== 'number' || !Number.isInteger(semester) || semester < 1 || semester > 10) {
      errors.semester = 'Semester must be an integer from 1 to 10';
    }
  }

  if (
    firstName === undefined &&
    lastName === undefined &&
    facultyId === undefined &&
    directionId === undefined &&
    specializationId === undefined &&
    semester === undefined
  ) {
    return res.status(400).json({
      message: 'Provide profile data to update',
    });
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      message: 'Invalid profile data',
      errors,
    });
  }

  return next();
};

const validateAvatarUpload = (req, res, next) => {
  let { base64Data, mimeType } = req.body;
  const errors = {};

  if (!base64Data || typeof base64Data !== 'string') {
    errors.base64Data = 'Avatar data is missing';
  } else {
    // Handle data URI: data:<mime>;base64,<data>
    const dataUriMatch = base64Data.match(/^data:([^;]+);base64,(.+)$/);
    if (dataUriMatch) {
      mimeType = mimeType || dataUriMatch[1];
      base64Data = dataUriMatch[2];
    }

    // Simple base64 shape check (without validating image contents)
    if (!/^[A-Za-z0-9+/=\n\r]+$/.test(base64Data)) {
      errors.base64Data = 'Avatar data is not valid base64';
    }

    // Size limit (roughly ~8MB in base64) to avoid oversized uploads
    const MAX_BASE64_LENGTH = 8_000_000;
    if (base64Data.length > MAX_BASE64_LENGTH) {
      errors.base64Data = 'Avatar file is too large';
    }
  }

  const allowedMime = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
  if (!mimeType || typeof mimeType !== 'string') {
    errors.mimeType = 'Avatar file type is missing';
  } else if (!allowedMime.includes(mimeType.toLowerCase())) {
    errors.mimeType = 'Unsupported avatar file type';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      message: 'Invalid avatar data',
      errors,
    });
  }

  return next();
};

module.exports = {
  validateProfileUpdate,
  validateAvatarUpload,
};

