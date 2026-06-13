const { supabaseAuthClient } = require('../configs/supabaseClient');
const {
  listCalendarEventsByUserId,
  createCalendarEvent,
  updateCalendarEventById,
  deleteCalendarEventById,
  calendarEventSchema,
  calendarEventTable,
} = require('../repositories/calendarEvent.repository');

const allowedTypes = ['exam', 'study', 'assignment', 'reminder', 'consultation', 'personal'];
const allowedPriorities = ['low', 'medium', 'high'];

const parseAccessToken = (req) => {
  const header = req.headers.authorization;

  if (typeof header === 'string' && header.toLowerCase().startsWith('bearer ')) {
    return header.slice(7).trim();
  }

  return null;
};

const resolveAuthenticatedUser = async (req, res) => {
  const accessToken = parseAccessToken(req);

  if (!accessToken) {
    res.status(401).json({ message: 'Missing access token' });
    return null;
  }

  const { data, error } = await supabaseAuthClient.auth.getUser(accessToken);

  if (error || !data?.user?.id) {
    res.status(401).json({ message: 'Invalid or expired access token' });
    return null;
  }

  return data.user;
};

const normalizeTime = (value) => {
  if (typeof value !== 'string') {
    return null;
  }

  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  if (/^([01]\d|2[0-3]):[0-5]\d$/.test(trimmed)) {
    return `${trimmed}:00`;
  }

  if (/^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(trimmed)) {
    return trimmed;
  }

  return null;
};

const normalizeDate = (value) => {
  if (typeof value !== 'string') {
    return '';
  }

  const trimmed = value.trim();

  if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return '';
  }

  return trimmed;
};

const normalizeColor = (value, fallback) => {
  if (typeof value !== 'string') {
    return fallback;
  }

  const trimmed = value.trim();

  if (/^#[0-9a-fA-F]{6}$/.test(trimmed)) {
    return trimmed;
  }

  return fallback;
};

const normalizeCalendarEventResponse = (row) => ({
  id: row.id,
  userId: row.user_id,
  title: row.title,
  description: row.description || '',
  date: row.event_date,
  startTime: row.start_time ? row.start_time.slice(0, 5) : '',
  endTime: row.end_time ? row.end_time.slice(0, 5) : '',
  type: row.type,
  priority: row.priority,
  location: row.location || '',
  color: row.color,
  isCompleted: Boolean(row.is_completed),
  createdAt: row.created_at || null,
  updatedAt: row.updated_at || null,
});

const validateCalendarEventPayload = (body, partial = false) => {
  const errors = {};
  const patch = {};

  if (!partial || Object.prototype.hasOwnProperty.call(body, 'title')) {
    const title = typeof body?.title === 'string' ? body.title.trim() : '';

    if (!title || title.length < 2) {
      errors.title = 'Title must have at least 2 characters';
    } else if (title.length > 120) {
      errors.title = 'Title cannot be longer than 120 characters';
    } else {
      patch.title = title;
    }
  }

  if (!partial || Object.prototype.hasOwnProperty.call(body, 'date')) {
    const eventDate = normalizeDate(body?.date);

    if (!eventDate) {
      errors.date = 'Date must use YYYY-MM-DD format';
    } else {
      patch.event_date = eventDate;
    }
  }

  if (!partial || Object.prototype.hasOwnProperty.call(body, 'type')) {
    const type = typeof body?.type === 'string' ? body.type.trim() : '';

    if (!allowedTypes.includes(type)) {
      errors.type = 'Invalid event type';
    } else {
      patch.type = type;
    }
  }

  if (!partial || Object.prototype.hasOwnProperty.call(body, 'priority')) {
    const priority = typeof body?.priority === 'string' ? body.priority.trim() : 'medium';

    if (!allowedPriorities.includes(priority)) {
      errors.priority = 'Invalid priority';
    } else {
      patch.priority = priority;
    }
  }

  if (!partial || Object.prototype.hasOwnProperty.call(body, 'description')) {
    const description = typeof body?.description === 'string' ? body.description.trim() : '';
    patch.description = description || null;
  }

  if (!partial || Object.prototype.hasOwnProperty.call(body, 'location')) {
    const location = typeof body?.location === 'string' ? body.location.trim() : '';
    patch.location = location || null;
  }

  if (!partial || Object.prototype.hasOwnProperty.call(body, 'startTime')) {
    const startTime = normalizeTime(body?.startTime);
    patch.start_time = startTime;
  }

  if (!partial || Object.prototype.hasOwnProperty.call(body, 'endTime')) {
    const endTime = normalizeTime(body?.endTime);
    patch.end_time = endTime;
  }

  if (!partial || Object.prototype.hasOwnProperty.call(body, 'color')) {
    patch.color = normalizeColor(body?.color, '#003366');
  }

  if (Object.prototype.hasOwnProperty.call(body || {}, 'isCompleted')) {
    patch.is_completed = Boolean(body.isCompleted);
  } else if (!partial) {
    patch.is_completed = false;
  }

  if (patch.start_time && patch.end_time && patch.end_time < patch.start_time) {
    errors.endTime = 'End time cannot be earlier than start time';
  }

  return { patch, errors };
};

const getMyCalendarEvents = async (req, res, next) => {
  try {
    const user = await resolveAuthenticatedUser(req, res);

    if (!user) {
      return;
    }

    const { data, error } = await listCalendarEventsByUserId(user.id);

    if (error) {
      return res.status(500).json({
        message: `Failed to read calendar events from ${calendarEventSchema}.${calendarEventTable}`,
      });
    }

    return res.status(200).json({
      message: 'Calendar events retrieved successfully.',
      events: Array.isArray(data) ? data.map(normalizeCalendarEventResponse) : [],
    });
  } catch (err) {
    return next(err);
  }
};

const createMyCalendarEvent = async (req, res, next) => {
  try {
    const user = await resolveAuthenticatedUser(req, res);

    if (!user) {
      return;
    }

    const { patch, errors } = validateCalendarEventPayload(req.body || {});

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ message: 'Invalid calendar event data', errors });
    }

    const { data, error } = await createCalendarEvent({
      ...patch,
      user_id: user.id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    if (error) {
      return res.status(500).json({
        message: `Failed to save calendar event in ${calendarEventSchema}.${calendarEventTable}`,
      });
    }

    return res.status(201).json({
      message: 'Calendar event created successfully.',
      event: normalizeCalendarEventResponse(data),
    });
  } catch (err) {
    return next(err);
  }
};

const updateMyCalendarEvent = async (req, res, next) => {
  try {
    const user = await resolveAuthenticatedUser(req, res);

    if (!user) {
      return;
    }

    const eventId = typeof req.params?.eventId === 'string' ? req.params.eventId.trim() : '';

    if (!eventId) {
      return res.status(400).json({ message: 'Event id is required' });
    }

    const { patch, errors } = validateCalendarEventPayload(req.body || {}, true);

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ message: 'Invalid calendar event data', errors });
    }

    const { data, error } = await updateCalendarEventById(user.id, eventId, patch);

    if (error) {
      return res.status(500).json({
        message: `Failed to update calendar event in ${calendarEventSchema}.${calendarEventTable}`,
      });
    }

    if (!data) {
      return res.status(404).json({ message: 'Calendar event not found' });
    }

    return res.status(200).json({
      message: 'Calendar event updated successfully.',
      event: normalizeCalendarEventResponse(data),
    });
  } catch (err) {
    return next(err);
  }
};

const deleteMyCalendarEvent = async (req, res, next) => {
  try {
    const user = await resolveAuthenticatedUser(req, res);

    if (!user) {
      return;
    }

    const eventId = typeof req.params?.eventId === 'string' ? req.params.eventId.trim() : '';

    if (!eventId) {
      return res.status(400).json({ message: 'Event id is required' });
    }

    const { data, error } = await deleteCalendarEventById(user.id, eventId);

    if (error) {
      return res.status(500).json({
        message: `Failed to delete calendar event from ${calendarEventSchema}.${calendarEventTable}`,
      });
    }

    if (!data) {
      return res.status(404).json({ message: 'Calendar event not found' });
    }

    return res.status(200).json({ message: 'Calendar event deleted successfully.' });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getMyCalendarEvents,
  createMyCalendarEvent,
  updateMyCalendarEvent,
  deleteMyCalendarEvent,
};
