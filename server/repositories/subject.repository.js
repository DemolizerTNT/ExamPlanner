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

const getSubjectById = async (subjectId) => {
  const { data, error } = await getSubjectQuery()
    .select('id, faculty_id, direction_id, specialization_id, semester, name, has_exam, exam_date, color')
    .eq('id', subjectId)
    .maybeSingle();

  return { data, error };
};

const updateSubjectExamDate = async (subjectId, examDate) => {
  const { data, error } = await getSubjectQuery()
    .update({ exam_date: examDate })
    .eq('id', subjectId)
    .select('id, faculty_id, direction_id, specialization_id, semester, name, has_exam, exam_date, color')
    .single();

  return { data, error };
};

module.exports = {
  listSubjects,
  getSubjectById,
  updateSubjectExamDate,
  subjectSchema,
  subjectTable,
};