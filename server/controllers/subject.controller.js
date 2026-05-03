const {
  listSubjects,
  subjectSchema,
  subjectTable,
} = require('../repositories/subject.repository');

const normalizeSubjectResponse = (subject) => ({
  id: subject.id,
  facultyId: subject.faculty_id,
  directionId: subject.direction_id,
  specializationId: subject.specialization_id,
  semester: subject.semester,
  name: subject.name,
  hasExam: subject.has_exam,
  examDate: subject.exam_date,
  color: subject.color,
});

const parseSemester = (value) => {
  if (typeof value !== 'string' || value.trim() === '') {
    return null;
  }

  const parsed = Number.parseInt(value, 10);

  return Number.isFinite(parsed) ? parsed : null;
};

const getSubjects = async (req, res, next) => {
  try {
    const facultyId = typeof req.query?.facultyId === 'string' ? req.query.facultyId.trim() : '';
    const directionId = typeof req.query?.directionId === 'string' ? req.query.directionId.trim() : '';
    const specializationId = typeof req.query?.specializationId === 'string' ? req.query.specializationId.trim() : '';
    const semester = parseSemester(req.query?.semester);

    const { data, error } = await listSubjects({
      facultyId: facultyId || undefined,
      directionId: directionId || undefined,
      specializationId: specializationId || undefined,
      semester: semester === null ? undefined : semester,
    });

    if (error) {
      return res.status(500).json({
        message: `Failed to read subjects from ${subjectSchema}.${subjectTable}`,
      });
    }

    return res.status(200).json({
      message: 'Subjects retrieved successfully.',
      subjects: Array.isArray(data) ? data.map(normalizeSubjectResponse) : [],
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getSubjects,
};