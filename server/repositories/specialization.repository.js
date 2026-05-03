const { supabaseDbClient } = require('../configs/supabaseClient');

const specializationSchema = process.env.SPECIALIZATION_SCHEMA || 'public';
const specializationTable = process.env.SPECIALIZATION_TABLE || 'Specialization';

const getSpecializationQuery = () => {
  if (specializationSchema === 'public') {
    return supabaseDbClient.from(specializationTable);
  }

  return supabaseDbClient.schema(specializationSchema).from(specializationTable);
};

const listSpecializations = async ({ directionId } = {}) => {
  const query = getSpecializationQuery()
    .select('id, direction_id, name, min_semester')
    .order('name', { ascending: true });

  if (directionId) {
    query.eq('direction_id', directionId);
  }

  const { data, error } = await query;

  return { data, error };
};

const listSpecializationsByDirectionId = async (directionId) => {
  const query = getSpecializationQuery()
    .select('id, direction_id, name, min_semester')
    .order('name', { ascending: true });

  if (directionId) {
    query.eq('direction_id', directionId);
  }

  const { data, error } = await query;

  return { data, error };
};

module.exports = {
  listSpecializations,
  listSpecializationsByDirectionId,
  specializationSchema,
  specializationTable,
};
