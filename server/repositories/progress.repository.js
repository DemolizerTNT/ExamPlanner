const { supabaseDbClient } = require('../configs/supabaseClient');

const progressSchema = process.env.PROGRESS_SCHEMA || 'public';
const progressTable = process.env.PROGRESS_TABLE || 'UserProgress';

const getProgressQuery = () => {
  if (progressSchema === 'public') {
    return supabaseDbClient.from(progressTable);
  }

  return supabaseDbClient.schema(progressSchema).from(progressTable);
};

const listProgressByUserId = async (userId) => {
  const { data, error } = await getProgressQuery()
    .select('user_id, point_id, status, completion_date, updated_at')
    .eq('user_id', userId);

  return { data, error };
};

const upsertUserProgress = async ({ userId, pointId, status, completionDate }) => {
  const { data, error } = await getProgressQuery()
    .upsert({
      user_id: userId,
      point_id: pointId,
      status,
      completion_date: completionDate,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id,point_id' })
    .select('user_id, point_id, status, completion_date, updated_at')
    .single();

  return { data, error };
};

module.exports = {
  listProgressByUserId,
  upsertUserProgress,
  progressSchema,
  progressTable,
};
