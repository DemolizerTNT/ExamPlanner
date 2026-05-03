const express = require('express');
const { getFaculties } = require('../controllers/faculty.controller');

const router = express.Router();

// Publiczny endpoint listy wydziałów.
router.get('/', getFaculties);

module.exports = router;