const express = require('express');
const { getDirections } = require('../controllers/direction.controller');

const router = express.Router();

// Publiczny endpoint listy kierunkow filtrowanej po wydziale.
router.get('/', getDirections);

module.exports = router;