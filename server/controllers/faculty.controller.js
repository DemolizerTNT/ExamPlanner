const {
  listFaculties,
  facultySchema,
  facultyTable,
} = require('../repositories/faculty.repository');

const normalizeFacultyResponse = (faculty) => ({
  id: faculty.id,
  name: faculty.name,
  shortName: faculty.nameShort || faculty.shortName || faculty.short_name || null,
});

const getFaculties = async (req, res, next) => {
  try {
    const { data, error } = await listFaculties();

    if (error) {
      return res.status(500).json({
        message: `Failed to read faculties from ${facultySchema}.${facultyTable}`,
      });
    }

    return res.status(200).json({
      message: 'Faculties retrieved successfully.',
      faculties: Array.isArray(data) ? data.map(normalizeFacultyResponse) : [],
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getFaculties,
};