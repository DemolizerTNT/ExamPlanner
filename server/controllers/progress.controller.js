const { supabaseAuthClient } = require('../configs/supabaseClient');
const {
  listProgressByUserId,
  upsertUserProgress,
  progressSchema,
  progressTable,
} = require('../repositories/progress.repository');

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

const normalizeProgressResponse = (row) => ({
  userId: row.user_id,
  pointId: row.point_id,
  status: row.status,
  completionDate: row.completion_date || null,
  updatedAt: row.updated_at || null,
});

const getMyProgress = async (req, res, next) => {
  try {
    const user = await resolveAuthenticatedUser(req, res);

    if (!user) {
      return;
    }

    const { data, error } = await listProgressByUserId(user.id);

    if (error) {
      return res.status(500).json({
        message: `Failed to read progress from ${progressSchema}.${progressTable}`,
      });
    }

    return res.status(200).json({
      message: 'Progress retrieved successfully.',
      progress: Array.isArray(data) ? data.map(normalizeProgressResponse) : [],
    });
  } catch (err) {
    return next(err);
  }
};

const updateMyProgressPoint = async (req, res, next) => {
  try {
    const user = await resolveAuthenticatedUser(req, res);

    if (!user) {
      return;
    }

    const pointId = typeof req.params?.pointId === 'string' ? req.params.pointId.trim() : '';
    const status = typeof req.body?.status === 'string' ? req.body.status.trim() : '';
    const allowedStatuses = ['pending', 'completed', 'skipped'];

    if (!pointId) {
      return res.status(400).json({ message: 'Point id is required' });
    }

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid progress status' });
    }

    const completionDate = status === 'pending' ? null : new Date().toISOString().split('T')[0];
    const { data, error } = await upsertUserProgress({
      userId: user.id,
      pointId,
      status,
      completionDate,
    });

    if (error) {
      return res.status(500).json({
        message: `Failed to save progress in ${progressSchema}.${progressTable}`,
      });
    }

    return res.status(200).json({
      message: 'Progress saved successfully.',
      progress: normalizeProgressResponse(data),
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getMyProgress,
  updateMyProgressPoint,
};
