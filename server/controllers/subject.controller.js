const { supabaseAuthClient } = require('../configs/supabaseClient');
const {
  listSubjects,
  getSubjectById,
  updateSubjectExamDate,
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

const isValidExamDate = (value) => {
  if (value === null) {
    return true;
  }

  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const parsed = new Date(`${value}T00:00:00`);

  return !Number.isNaN(parsed.getTime());
};

const subjectMatchesScope = (subject, scope) => {
  if (scope.facultyId && subject.faculty_id !== scope.facultyId) {
    return false;
  }

  if (scope.directionId && subject.direction_id && subject.direction_id !== scope.directionId) {
    return false;
  }

  if (scope.specializationId && subject.specialization_id && subject.specialization_id !== scope.specializationId) {
    return false;
  }

  if (typeof scope.semester === 'number' && subject.semester !== scope.semester) {
    return false;
  }

  return true;
};

const updateExamDates = async (req, res, next) => {
  try {
    const user = await resolveAuthenticatedUser(req, res);

    if (!user) {
      return undefined;
    }

    const updates = Array.isArray(req.body?.updates) ? req.body.updates : null;
    const facultyId = typeof req.body?.facultyId === 'string' ? req.body.facultyId.trim() : '';
    const directionId = typeof req.body?.directionId === 'string' ? req.body.directionId.trim() : '';
    const specializationId = typeof req.body?.specializationId === 'string' ? req.body.specializationId.trim() : '';
    const semester = parseSemester(
      typeof req.body?.semester === 'number' ? String(req.body.semester) : req.body?.semester
    );

    if (!updates || updates.length === 0) {
      return res.status(400).json({
        message: 'Provide at least one exam date update.',
      });
    }

    if (!facultyId || semester === null) {
      return res.status(400).json({
        message: 'facultyId and semester are required.',
      });
    }

    const scope = {
      facultyId,
      directionId: directionId || undefined,
      specializationId: specializationId || undefined,
      semester,
    };

    const savedSubjects = [];

    for (const item of updates) {
      const subjectId = typeof item?.subjectId === 'string' ? item.subjectId.trim() : '';
      const hasExamDateField = Object.prototype.hasOwnProperty.call(item || {}, 'examDate');

      if (!subjectId || !hasExamDateField) {
        return res.status(400).json({
          message: 'Each update must include subjectId and examDate.',
        });
      }

      if (!isValidExamDate(item.examDate)) {
        return res.status(400).json({
          message: `Invalid exam date for subject ${subjectId}. Use YYYY-MM-DD or null.`,
        });
      }

      const { data: existingSubject, error: readError } = await getSubjectById(subjectId);

      if (readError) {
        return res.status(500).json({
          message: `Failed to read subject ${subjectId} from ${subjectSchema}.${subjectTable}`,
        });
      }

      if (!existingSubject) {
        return res.status(404).json({
          message: `Subject ${subjectId} was not found.`,
        });
      }

      if (!existingSubject.has_exam) {
        return res.status(400).json({
          message: `Subject ${existingSubject.name} does not have an exam.`,
        });
      }

      if (!subjectMatchesScope(existingSubject, scope)) {
        return res.status(403).json({
          message: `Subject ${existingSubject.name} is outside the selected semester scope.`,
        });
      }

      const { data, error } = await updateSubjectExamDate(subjectId, item.examDate);

      if (error) {
        return res.status(500).json({
          message: `Failed to update exam date for subject ${subjectId}.`,
        });
      }

      savedSubjects.push(data);
    }

    return res.status(200).json({
      message: 'Exam dates updated successfully.',
      subjects: savedSubjects.map(normalizeSubjectResponse),
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getSubjects,
  updateExamDates,
};