const express = require('express');
const {
  getMyCalendarEvents,
  createMyCalendarEvent,
  updateMyCalendarEvent,
  deleteMyCalendarEvent,
} = require('../controllers/calendarEvent.controller');

const router = express.Router();

router.get('/', getMyCalendarEvents);
router.post('/', createMyCalendarEvent);
router.patch('/:eventId', updateMyCalendarEvent);
router.delete('/:eventId', deleteMyCalendarEvent);

module.exports = router;
