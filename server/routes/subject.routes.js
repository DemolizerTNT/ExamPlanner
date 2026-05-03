const express = require('express');
const { getSubjects } = require('../controllers/subject.controller');

const router = express.Router();

// Publiczny endpoint listy przedmiotow z opcjonalnymi filtrami.
router.get('/', getSubjects);

module.exports = router;