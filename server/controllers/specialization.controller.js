const {
  listSpecializations,
  specializationSchema,
  specializationTable,
} = require('../repositories/specialization.repository');

const normalizeSpecializationResponse = (specialization) => ({
  id: specialization.id,
  directionId: specialization.direction_id,
  name: specialization.name,
  minSemester: specialization.min_semester,
});

const getSpecializations = async (req, res, next) => {
  try {
    const directionId = typeof req.query?.directionId === 'string' ? req.query.directionId.trim() : '';

    const { data, error } = await listSpecializations({
      directionId: directionId || undefined,
    });

    if (error) {
      return res.status(500).json({
        message: `Failed to read specializations from ${specializationSchema}.${specializationTable}`,
      });
    }

    return res.status(200).json({
      message: 'Specializations retrieved successfully.',
      specializations: Array.isArray(data) ? data.map(normalizeSpecializationResponse) : [],
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getSpecializations,
};
