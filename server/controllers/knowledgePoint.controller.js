const {
  listKnowledgePointsBySubjectId,
  knowledgePointSchema,
  knowledgePointTable,
} = require('../repositories/knowledgePoint.repository');

const normalizeKnowledgePointResponse = (knowledgePoint) => ({
  id: knowledgePoint.id,
  subjectId: knowledgePoint.subject_id,
  order: knowledgePoint.order,
  description: knowledgePoint.description,
  estimatedMinutes: knowledgePoint.estimated_minutes,
});

const getKnowledgePoints = async (req, res, next) => {
  try {
    const subjectId = typeof req.query?.subjectId === 'string' ? req.query.subjectId.trim() : '';

    const { data, error } = await listKnowledgePointsBySubjectId(subjectId || undefined);

    if (error) {
      return res.status(500).json({
        message: `Failed to read knowledge points from ${knowledgePointSchema}.${knowledgePointTable}`,
      });
    }

    return res.status(200).json({
      message: 'Knowledge points retrieved successfully.',
      knowledgePoints: Array.isArray(data) ? data.map(normalizeKnowledgePointResponse) : [],
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getKnowledgePoints,
};