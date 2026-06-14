const express = require('express');
const {
  getSubjects,
  updateExamDates,
} = require('../controllers/subject.controller');

const router = express.Router();

router.patch('/exam-dates', updateExamDates);

// Publiczny endpoint listy przedmiotow z opcjonalnymi filtrami.
router.get('/', getSubjects);

module.exports = router;