const express = require('express');
const { getKnowledgePoints } = require('../controllers/knowledgePoint.controller');

const router = express.Router();

// Publiczny endpoint listy knowledge points z opcjonalnym filtrem po przedmiocie.
router.get('/', getKnowledgePoints);

module.exports = router;