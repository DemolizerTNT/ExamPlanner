const { supabaseDbClient } = require('../configs/supabaseClient');

const calendarEventSchema = process.env.CALENDAR_EVENT_SCHEMA || 'public';
const calendarEventTable = process.env.CALENDAR_EVENT_TABLE || 'UserCalendarEvent';

const getCalendarEventQuery = () => {
  if (calendarEventSchema === 'public') {
    return supabaseDbClient.from(calendarEventTable);
  }

  return supabaseDbClient.schema(calendarEventSchema).from(calendarEventTable);
};

const selectColumns = `
  id,
  user_id,
  title,
  description,
  event_date,
  start_time,
  end_time,
  type,
  priority,
  location,
  color,
  is_completed,
  created_at,
  updated_at
`;

const listCalendarEventsByUserId = async (userId) => {
  const { data, error } = await getCalendarEventQuery()
    .select(selectColumns)
    .eq('user_id', userId)
    .order('event_date', { ascending: true })
    .order('start_time', { ascending: true, nullsFirst: true });

  return { data, error };
};

const createCalendarEvent = async (eventRow) => {
  const { data, error } = await getCalendarEventQuery()
    .insert(eventRow)
    .select(selectColumns)
    .single();

  return { data, error };
};

const updateCalendarEventById = async (userId, eventId, patch) => {
  const { data, error } = await getCalendarEventQuery()
    .update({
      ...patch,
      updated_at: new Date().toISOString(),
    })
    .eq('id', eventId)
    .eq('user_id', userId)
    .select(selectColumns)
    .maybeSingle();

  return { data, error };
};

const deleteCalendarEventById = async (userId, eventId) => {
  const { data, error } = await getCalendarEventQuery()
    .delete()
    .eq('id', eventId)
    .eq('user_id', userId)
    .select('id')
    .maybeSingle();

  return { data, error };
};

module.exports = {
  listCalendarEventsByUserId,
  createCalendarEvent,
  updateCalendarEventById,
  deleteCalendarEventById,
  calendarEventSchema,
  calendarEventTable,
};
