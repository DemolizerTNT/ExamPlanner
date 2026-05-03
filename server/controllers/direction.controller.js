const {
  listDirectionsByFacultyId,
  directionSchema,
  directionTable,
} = require('../repositories/direction.repository');

const normalizeDirectionResponse = (direction) => ({
  id: direction.id,
  facultyId: direction.faculty_id,
  name: direction.name,
});

const getDirections = async (req, res, next) => {
  try {
    const facultyId = typeof req.query?.facultyId === 'string' ? req.query.facultyId.trim() : '';

    if (!facultyId) {
      return res.status(400).json({
        message: 'Missing facultyId query parameter.',
      });
    }

    const { data, error } = await listDirectionsByFacultyId(facultyId);

    if (error) {
      return res.status(500).json({
        message: `Failed to read directions from ${directionSchema}.${directionTable}`,
      });
    }

    return res.status(200).json({
      message: 'Directions retrieved successfully.',
      directions: Array.isArray(data) ? data.map(normalizeDirectionResponse) : [],
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getDirections,
};