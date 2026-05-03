const express = require('express');
const { getSpecializations } = require('../controllers/specialization.controller');

const router = express.Router();

// Publiczny endpoint listy specjalizacji z opcjonalnym filtrem po kierunku.
router.get('/', getSpecializations);

module.exports = router;
