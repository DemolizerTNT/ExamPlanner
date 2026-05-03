const { supabaseDbClient } = require('../configs/supabaseClient');

const facultySchema = process.env.FACULTY_SCHEMA || 'public';
const facultyTable = process.env.FACULTY_TABLE || 'Faculty';

const getFacultyQuery = () => {
  if (facultySchema === 'public') {
    return supabaseDbClient.from(facultyTable);
  }

  return supabaseDbClient.schema(facultySchema).from(facultyTable);
};

const listFaculties = async () => {
  const { data, error } = await getFacultyQuery()
    .select('id, name, nameShort')
    .order('name', { ascending: true });

  return { data, error };
};

module.exports = {
  listFaculties,
  facultySchema,
  facultyTable,
};