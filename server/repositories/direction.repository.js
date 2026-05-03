const { supabaseDbClient } = require('../configs/supabaseClient');

const directionSchema = process.env.DIRECTION_SCHEMA || 'public';
const directionTable = process.env.DIRECTION_TABLE || 'Direction';

const getDirectionQuery = () => {
  if (directionSchema === 'public') {
    return supabaseDbClient.from(directionTable);
  }

  return supabaseDbClient.schema(directionSchema).from(directionTable);
};

const listDirectionsByFacultyId = async (facultyId) => {
  const query = getDirectionQuery()
    .select('id, faculty_id, name')
    .order('name', { ascending: true });

  if (facultyId) {
    query.eq('faculty_id', facultyId);
  }

  const { data, error } = await query;

  return { data, error };
};

module.exports = {
  listDirectionsByFacultyId,
  directionSchema,
  directionTable,
};