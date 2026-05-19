const express = require('express');
const {
  getMyProgress,
  updateMyProgressPoint,
} = require('../controllers/progress.controller');

const router = express.Router();

router.get('/', getMyProgress);
router.put('/:pointId', updateMyProgressPoint);

module.exports = router;
