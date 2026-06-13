const { supabaseDbClient } = require('../configs/supabaseClient');

const noteSchema = process.env.NOTE_SCHEMA || 'public';
const noteTable = process.env.NOTE_TABLE || 'UserNote';

const getNoteQuery = () => {
  if (noteSchema === 'public') {
    return supabaseDbClient.from(noteTable);
  }

  return supabaseDbClient.schema(noteSchema).from(noteTable);
};

const selectColumns = `
  id,
  user_id,
  subject_id,
  content,
  is_pinned,
  created_at,
  updated_at
`;

const listNotesByUserId = async (userId, limit = 20) => {
  const safeLimit = Number.isFinite(limit) ? Math.min(Math.max(limit, 1), 50) : 20;

  const { data, error } = await getNoteQuery()
    .select(selectColumns)
    .eq('user_id', userId)
    .order('is_pinned', { ascending: false })
    .order('updated_at', { ascending: false })
    .limit(safeLimit);

  return { data, error };
};

const createNote = async (noteRow) => {
  const { data, error } = await getNoteQuery()
    .insert(noteRow)
    .select(selectColumns)
    .single();

  return { data, error };
};

const updateNoteById = async (userId, noteId, patch) => {
  const { data, error } = await getNoteQuery()
    .update({
      ...patch,
      updated_at: new Date().toISOString(),
    })
    .eq('id', noteId)
    .eq('user_id', userId)
    .select(selectColumns)
    .maybeSingle();

  return { data, error };
};

const deleteNoteById = async (userId, noteId) => {
  const { data, error } = await getNoteQuery()
    .delete()
    .eq('id', noteId)
    .eq('user_id', userId)
    .select('id')
    .maybeSingle();

  return { data, error };
};

module.exports = {
  listNotesByUserId,
  createNote,
  updateNoteById,
  deleteNoteById,
  noteSchema,
  noteTable,
};
