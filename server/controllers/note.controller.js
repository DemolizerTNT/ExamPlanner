const { supabaseAuthClient } = require('../configs/supabaseClient');
const {
  listNotesByUserId,
  createNote,
  updateNoteById,
  deleteNoteById,
  noteSchema,
  noteTable,
} = require('../repositories/note.repository');

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

const normalizeNoteResponse = (row) => ({
  id: row.id,
  userId: row.user_id,
  subjectId: row.subject_id || null,
  content: row.content || '',
  isPinned: Boolean(row.is_pinned),
  createdAt: row.created_at || null,
  updatedAt: row.updated_at || null,
});

const validateNotePayload = (body, partial = false) => {
  const errors = {};
  const patch = {};

  if (!partial || Object.prototype.hasOwnProperty.call(body || {}, 'content')) {
    const content = typeof body?.content === 'string' ? body.content.trim() : '';

    if (!content) {
      errors.content = 'Note cannot be empty';
    } else if (content.length > 1200) {
      errors.content = 'Note cannot be longer than 1200 characters';
    } else {
      patch.content = content;
    }
  }

  if (!partial || Object.prototype.hasOwnProperty.call(body || {}, 'subjectId')) {
    const subjectId = typeof body?.subjectId === 'string' ? body.subjectId.trim() : '';
    patch.subject_id = subjectId || null;
  }

  if (Object.prototype.hasOwnProperty.call(body || {}, 'isPinned')) {
    patch.is_pinned = Boolean(body.isPinned);
  } else if (!partial) {
    patch.is_pinned = false;
  }

  return { patch, errors };
};

const getMyNotes = async (req, res, next) => {
  try {
    const user = await resolveAuthenticatedUser(req, res);

    if (!user) {
      return;
    }

    const requestedLimit = Number(req.query?.limit);
    const limit = Number.isFinite(requestedLimit) ? requestedLimit : 20;
    const { data, error } = await listNotesByUserId(user.id, limit);

    if (error) {
      return res.status(500).json({
        message: `Failed to read notes from ${noteSchema}.${noteTable}`,
      });
    }

    return res.status(200).json({
      message: 'Notes retrieved successfully.',
      notes: Array.isArray(data) ? data.map(normalizeNoteResponse) : [],
    });
  } catch (err) {
    return next(err);
  }
};

const createMyNote = async (req, res, next) => {
  try {
    const user = await resolveAuthenticatedUser(req, res);

    if (!user) {
      return;
    }

    const { patch, errors } = validateNotePayload(req.body || {});

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ message: 'Invalid note data', errors });
    }

    const now = new Date().toISOString();
    const { data, error } = await createNote({
      ...patch,
      user_id: user.id,
      created_at: now,
      updated_at: now,
    });

    if (error) {
      return res.status(500).json({
        message: `Failed to save note in ${noteSchema}.${noteTable}`,
      });
    }

    return res.status(201).json({
      message: 'Note created successfully.',
      note: normalizeNoteResponse(data),
    });
  } catch (err) {
    return next(err);
  }
};

const updateMyNote = async (req, res, next) => {
  try {
    const user = await resolveAuthenticatedUser(req, res);

    if (!user) {
      return;
    }

    const noteId = typeof req.params?.noteId === 'string' ? req.params.noteId.trim() : '';

    if (!noteId) {
      return res.status(400).json({ message: 'Note id is required' });
    }

    const { patch, errors } = validateNotePayload(req.body || {}, true);

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ message: 'Invalid note data', errors });
    }

    if (Object.keys(patch).length === 0) {
      return res.status(400).json({ message: 'Nothing to update' });
    }

    const { data, error } = await updateNoteById(user.id, noteId, patch);

    if (error) {
      return res.status(500).json({
        message: `Failed to update note in ${noteSchema}.${noteTable}`,
      });
    }

    if (!data) {
      return res.status(404).json({ message: 'Note not found' });
    }

    return res.status(200).json({
      message: 'Note updated successfully.',
      note: normalizeNoteResponse(data),
    });
  } catch (err) {
    return next(err);
  }
};

const deleteMyNote = async (req, res, next) => {
  try {
    const user = await resolveAuthenticatedUser(req, res);

    if (!user) {
      return;
    }

    const noteId = typeof req.params?.noteId === 'string' ? req.params.noteId.trim() : '';

    if (!noteId) {
      return res.status(400).json({ message: 'Note id is required' });
    }

    const { data, error } = await deleteNoteById(user.id, noteId);

    if (error) {
      return res.status(500).json({
        message: `Failed to delete note from ${noteSchema}.${noteTable}`,
      });
    }

    if (!data) {
      return res.status(404).json({ message: 'Note not found' });
    }

    return res.status(200).json({ message: 'Note deleted successfully.' });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getMyNotes,
  createMyNote,
  updateMyNote,
  deleteMyNote,
};
