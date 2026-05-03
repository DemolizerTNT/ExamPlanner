const { supabaseDbClient } = require('../configs/supabaseClient');

const subjectSchema = process.env.SUBJECT_SCHEMA || 'public';
const subjectTable = process.env.SUBJECT_TABLE || 'Subject';

const getSubjectQuery = () => {
  if (subjectSchema === 'public') {
    return supabaseDbClient.from(subjectTable);
  }

  return supabaseDbClient.schema(subjectSchema).from(subjectTable);
};

const listSubjects = async ({ facultyId, directionId, specializationId, semester } = {}) => {
  const query = getSubjectQuery()
    .select('id, faculty_id, direction_id, specialization_id, semester, name, has_exam, exam_date, color')
    .order('semester', { ascending: true })
    .order('name', { ascending: true });

  if (facultyId) {
    query.eq('faculty_id', facultyId);
  }

  if (directionId) {
    query.eq('direction_id', directionId);
  }

  if (specializationId) {
    query.eq('specialization_id', specializationId);
  }

  if (typeof semester === 'number' && Number.isFinite(semester)) {
    query.eq('semester', semester);
  }

  const { data, error } = await query;

  return { data, error };
};

module.exports = {
  listSubjects,
  subjectSchema,
  subjectTable,
};