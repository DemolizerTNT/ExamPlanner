const express = require('express');
const {
  getMyProfile,
  updateMyProfile,
  uploadMyAvatar,
  resetMyStudyChoices,
} = require('../controllers/profile.controller');
const {
  validateProfileUpdate,
  validateAvatarUpload,
} = require('../middleware/validateProfile');

const router = express.Router();

// Endpointy profilu zalogowanego uzytkownika.
router.get('/me', getMyProfile);
router.patch('/me', validateProfileUpdate, updateMyProfile);
router.post('/me/reset-study-choices', resetMyStudyChoices);
router.post('/avatar', validateAvatarUpload, uploadMyAvatar);

module.exports = router;

