const express = require('express');
const {
  getMyNotes,
  createMyNote,
  updateMyNote,
  deleteMyNote,
} = require('../controllers/note.controller');

const router = express.Router();

router.get('/', getMyNotes);
router.post('/', createMyNote);
router.patch('/:noteId', updateMyNote);
router.delete('/:noteId', deleteMyNote);

module.exports = router;
