const { supabaseDbClient } = require('../configs/supabaseClient');

const knowledgePointSchema = process.env.KNOWLEDGE_POINT_SCHEMA || 'public';
const knowledgePointTable = process.env.KNOWLEDGE_POINT_TABLE || 'KnowledgePoint';

const getKnowledgePointQuery = () => {
  if (knowledgePointSchema === 'public') {
    return supabaseDbClient.from(knowledgePointTable);
  }

  return supabaseDbClient.schema(knowledgePointSchema).from(knowledgePointTable);
};

const listKnowledgePointsBySubjectId = async (subjectId) => {
  const query = getKnowledgePointQuery()
    .select('id, subject_id, order, description, estimated_minutes')
    .order('order', { ascending: true });

  if (subjectId) {
    query.eq('subject_id', subjectId);
  }

  const { data, error } = await query;

  return { data, error };
};

module.exports = {
  listKnowledgePointsBySubjectId,
  knowledgePointSchema,
  knowledgePointTable,
};