export interface Faculty {
  id: string;
  name: string;
  shortName: string;
}

export interface Direction {
  id: string;
  faculty_id: string;
  name: string;
}

export interface Specialization {
  id: string;
  direction_id: string;
  name: string;
  min_semester: number;
}

export interface Subject {
  id: string;
  faculty_id: string;
  direction_id?: string;
  specialization_id?: string;
  semester: number;
  name: string;
  has_exam: boolean;
  exam_date?: string;
  color: string;
}

export interface KnowledgePoint {
  id: string;
  subject_id: string;
  order: number;
  description: string;
  estimated_minutes: number;
}

export type ProgressStatus = 'pending' | 'completed' | 'skipped';

export interface UserProgress {
  user_id: string;
  point_id: string;
  status: ProgressStatus;
  completion_date?: string;
}

// --- FACULTIES ---
export const FACULTIES: Faculty[] = [
  { id: 'weii', name: 'Faculty of Electrical Engineering & Computer Science', shortName: 'FEECS' },
  { id: 'wbmil', name: 'Faculty of Mechanical Engineering & Aeronautics', shortName: 'FMEA' },
  { id: 'wz', name: 'Faculty of Management', shortName: 'FoM' },
  { id: 'wb', name: 'Faculty of Civil & Environmental Engineering', shortName: 'FCEE' },
  { id: 'wch', name: 'Faculty of Chemistry', shortName: 'FCh' },
  { id: 'wm', name: 'Faculty of Mathematics & Applied Physics', shortName: 'FMAP' },
];

// --- DIRECTIONS ---
export const DIRECTIONS: Direction[] = [
  // FEECS
  { id: 'weii-cs',  faculty_id: 'weii',  name: 'Computer Science' },
  { id: 'weii-ee',  faculty_id: 'weii',  name: 'Electrical Engineering' },
  { id: 'weii-et',  faculty_id: 'weii',  name: 'Electronics & Telecommunications' },
  // FMEA
  { id: 'wbmil-me',   faculty_id: 'wbmil', name: 'Mechanical Engineering' },
  { id: 'wbmil-avia', faculty_id: 'wbmil', name: 'Aviation' },
  // FoM
  { id: 'wz-mgmt',    faculty_id: 'wz', name: 'Management' },
  { id: 'wz-logi',    faculty_id: 'wz', name: 'Logistics' },
  { id: 'wz-finance', faculty_id: 'wz', name: 'Finance & Accounting' },
  // FCEE
  { id: 'wb-civil', faculty_id: 'wb', name: 'Civil Engineering' },
  { id: 'wb-env',   faculty_id: 'wb', name: 'Environmental Engineering' },
  // FCh
  { id: 'wch-chem', faculty_id: 'wch', name: 'Chemical Technology' },
  { id: 'wch-bio',  faculty_id: 'wch', name: 'Biotechnology' },
  // FMAP
  { id: 'wm-math', faculty_id: 'wm', name: 'Mathematics' },
  { id: 'wm-phys', faculty_id: 'wm', name: 'Physics' },
  { id: 'wm-cs',   faculty_id: 'wm', name: 'Computer Science (Applied)' },
];

// --- SPECIALIZATIONS ---
export const SPECIALIZATIONS: Specialization[] = [
  // FEECS – CS
  { id: 'weii-cs-ai',    direction_id: 'weii-cs', name: 'Artificial Intelligence',   min_semester: 5 },
  { id: 'weii-cs-se',    direction_id: 'weii-cs', name: 'Software Engineering',       min_semester: 5 },
  { id: 'weii-cs-cyber', direction_id: 'weii-cs', name: 'Cybersecurity',              min_semester: 5 },
  // FEECS – EE
  { id: 'weii-ee-power', direction_id: 'weii-ee', name: 'Power Engineering',          min_semester: 5 },
  { id: 'weii-ee-auto',  direction_id: 'weii-ee', name: 'Industrial Automation',      min_semester: 5 },
  // FEECS – ET
  { id: 'weii-et-wireless', direction_id: 'weii-et', name: 'Wireless Communications', min_semester: 5 },
  { id: 'weii-et-embed',    direction_id: 'weii-et', name: 'Embedded Systems',         min_semester: 5 },
  // FMEA – ME
  { id: 'wbmil-me-manuf',  direction_id: 'wbmil-me',   name: 'Manufacturing Technology', min_semester: 5 },
  { id: 'wbmil-me-design', direction_id: 'wbmil-me',   name: 'Machine Design',           min_semester: 5 },
  // FMEA – Aviation
  { id: 'wbmil-avia-struct', direction_id: 'wbmil-avia', name: 'Aircraft Structures', min_semester: 5 },
  { id: 'wbmil-avia-avio',   direction_id: 'wbmil-avia', name: 'Avionics',             min_semester: 5 },
  // FoM – Management
  { id: 'wz-mgmt-project',  direction_id: 'wz-mgmt',    name: 'Project Management',    min_semester: 5 },
  { id: 'wz-mgmt-strategy', direction_id: 'wz-mgmt',    name: 'Strategic Management',  min_semester: 5 },
  // FoM – Logistics
  { id: 'wz-logi-supply',    direction_id: 'wz-logi',    name: 'Supply Chain Management',    min_semester: 5 },
  { id: 'wz-logi-transport', direction_id: 'wz-logi',    name: 'Transportation & Logistics', min_semester: 5 },
  // FoM – Finance
  { id: 'wz-finance-banking', direction_id: 'wz-finance', name: 'Banking & Financial Markets', min_semester: 5 },
  { id: 'wz-finance-tax',     direction_id: 'wz-finance', name: 'Tax & Auditing',               min_semester: 5 },
  // FCEE – Civil
  { id: 'wb-civil-struct', direction_id: 'wb-civil', name: 'Structural Engineering', min_semester: 5 },
  { id: 'wb-civil-road',   direction_id: 'wb-civil', name: 'Roads & Bridges',        min_semester: 5 },
  // FCEE – Environmental
  { id: 'wb-env-water',   direction_id: 'wb-env', name: 'Water & Waste Management', min_semester: 5 },
  { id: 'wb-env-climate', direction_id: 'wb-env', name: 'Environmental Protection',  min_semester: 5 },
  // FCh – Chemical
  { id: 'wch-chem-process', direction_id: 'wch-chem', name: 'Chemical Process Engineering', min_semester: 5 },
  { id: 'wch-chem-polymer', direction_id: 'wch-chem', name: 'Polymer Technology',            min_semester: 5 },
  // FCh – Biotechnology
  { id: 'wch-bio-pharma', direction_id: 'wch-bio', name: 'Pharmaceutical Biotechnology', min_semester: 5 },
  { id: 'wch-bio-food',   direction_id: 'wch-bio', name: 'Food Biotechnology',           min_semester: 5 },
  // FMAP – Math
  { id: 'wm-math-applied', direction_id: 'wm-math', name: 'Applied Mathematics',   min_semester: 5 },
  { id: 'wm-math-finance', direction_id: 'wm-math', name: 'Financial Mathematics', min_semester: 5 },
  // FMAP – Physics
  { id: 'wm-phys-nano',    direction_id: 'wm-phys', name: 'Nanophysics & Materials', min_semester: 5 },
  { id: 'wm-phys-medical', direction_id: 'wm-phys', name: 'Medical Physics',         min_semester: 5 },
  // FMAP – CS Applied
  { id: 'wm-cs-data', direction_id: 'wm-cs', name: 'Data Science',        min_semester: 5 },
  { id: 'wm-cs-sim',  direction_id: 'wm-cs', name: 'Computer Simulation', min_semester: 5 },
];

const SUBJECT_COLORS = ['#003366', '#1a6b3a', '#7c3aed', '#b45309', '#0369a1', '#be123c'];

// --- SUBJECTS ---
export const SUBJECTS: Subject[] = [
  // FEECS - Semester 1
  { id: 'weii-1-1', faculty_id: 'weii', semester: 1, name: 'Mathematics I', has_exam: true, exam_date: '2026-06-15', color: SUBJECT_COLORS[0] },
  { id: 'weii-1-2', faculty_id: 'weii', semester: 1, name: 'Physics I', has_exam: true, exam_date: '2026-06-17', color: SUBJECT_COLORS[1] },
  { id: 'weii-1-3', faculty_id: 'weii', semester: 1, name: 'Introduction to Computer Science', has_exam: false, color: SUBJECT_COLORS[2] },
  { id: 'weii-1-4', faculty_id: 'weii', semester: 1, name: 'Foreign Languages I', has_exam: false, color: SUBJECT_COLORS[3] },

  // FEECS - Semester 2
  { id: 'weii-2-1', faculty_id: 'weii', semester: 2, name: 'Mathematics II', has_exam: true, exam_date: '2026-06-14', color: SUBJECT_COLORS[0] },
  { id: 'weii-2-2', faculty_id: 'weii', semester: 2, name: 'Physics II', has_exam: true, exam_date: '2026-06-18', color: SUBJECT_COLORS[1] },
  { id: 'weii-2-3', faculty_id: 'weii', semester: 2, name: 'Electronics Fundamentals', has_exam: true, exam_date: '2026-06-20', color: SUBJECT_COLORS[2] },
  { id: 'weii-2-4', faculty_id: 'weii', semester: 2, name: 'Linear Algebra', has_exam: false, color: SUBJECT_COLORS[3] },

  // FEECS - Semester 3
  { id: 'weii-3-1', faculty_id: 'weii', semester: 3, name: 'Advanced Mathematics', has_exam: true, exam_date: '2026-06-12', color: SUBJECT_COLORS[0] },
  { id: 'weii-3-2', faculty_id: 'weii', semester: 3, name: 'Digital Systems', has_exam: true, exam_date: '2026-06-16', color: SUBJECT_COLORS[1] },
  { id: 'weii-3-3', faculty_id: 'weii', semester: 3, name: 'Object-Oriented Programming', has_exam: true, exam_date: '2026-06-19', color: SUBJECT_COLORS[2] },
  { id: 'weii-3-4', faculty_id: 'weii', semester: 3, name: 'Analog Electronics', has_exam: true, exam_date: '2026-06-22', color: SUBJECT_COLORS[3] },
  { id: 'weii-3-5', faculty_id: 'weii', semester: 3, name: 'Computer Networks', has_exam: false, color: SUBJECT_COLORS[4] },

  // FEECS - Semester 4 (CS direction)
  { id: 'weii-4-1', faculty_id: 'weii', direction_id: 'weii-cs', semester: 4, name: 'Operating Systems', has_exam: true, exam_date: '2026-06-13', color: SUBJECT_COLORS[0] },
  { id: 'weii-4-2', faculty_id: 'weii', direction_id: 'weii-cs', semester: 4, name: 'Databases', has_exam: true, exam_date: '2026-06-17', color: SUBJECT_COLORS[1] },
  { id: 'weii-4-3', faculty_id: 'weii', direction_id: 'weii-cs', semester: 4, name: 'Algorithms & Data Structures', has_exam: true, exam_date: '2026-06-20', color: SUBJECT_COLORS[2] },
  { id: 'weii-4-4', faculty_id: 'weii', direction_id: 'weii-cs', semester: 4, name: 'Computer Architecture', has_exam: false, color: SUBJECT_COLORS[3] },

  // FEECS - Semester 5 (CS direction)
  { id: 'weii-5-1', faculty_id: 'weii', direction_id: 'weii-cs', semester: 5, name: 'Software Engineering', has_exam: true, exam_date: '2026-06-11', color: SUBJECT_COLORS[0] },
  { id: 'weii-5-2', faculty_id: 'weii', direction_id: 'weii-cs', semester: 5, name: 'Artificial Intelligence', has_exam: true, exam_date: '2026-06-15', color: SUBJECT_COLORS[1] },
  { id: 'weii-5-3', faculty_id: 'weii', direction_id: 'weii-cs', semester: 5, name: 'Systems Security', has_exam: true, exam_date: '2026-06-18', color: SUBJECT_COLORS[2] },
  { id: 'weii-5-4', faculty_id: 'weii', direction_id: 'weii-cs', semester: 5, name: 'Network Programming', has_exam: false, color: SUBJECT_COLORS[3] },

  // FEECS - Semester 6 (CS direction)
  { id: 'weii-6-1', faculty_id: 'weii', direction_id: 'weii-cs', semester: 6, name: 'Big Data Processing', has_exam: true, exam_date: '2026-06-12', color: SUBJECT_COLORS[0] },
  { id: 'weii-6-2', faculty_id: 'weii', direction_id: 'weii-cs', semester: 6, name: 'Machine Learning', has_exam: true, exam_date: '2026-06-16', color: SUBJECT_COLORS[1] },
  { id: 'weii-6-3', faculty_id: 'weii', direction_id: 'weii-cs', semester: 6, name: 'Engineering Project', has_exam: false, color: SUBJECT_COLORS[2] },

  // FMEA - Semester 1
  { id: 'wbmil-1-1', faculty_id: 'wbmil', semester: 1, name: 'Mathematics I', has_exam: true, exam_date: '2026-06-15', color: SUBJECT_COLORS[0] },
  { id: 'wbmil-1-2', faculty_id: 'wbmil', semester: 1, name: 'Physics', has_exam: true, exam_date: '2026-06-17', color: SUBJECT_COLORS[1] },
  { id: 'wbmil-1-3', faculty_id: 'wbmil', semester: 1, name: 'Technical Drawing', has_exam: false, color: SUBJECT_COLORS[2] },
  { id: 'wbmil-1-4', faculty_id: 'wbmil', semester: 1, name: 'Fundamentals of Mechanics', has_exam: false, color: SUBJECT_COLORS[3] },

  // FMEA - Semester 2
  { id: 'wbmil-2-1', faculty_id: 'wbmil', semester: 2, name: 'Mathematics II', has_exam: true, exam_date: '2026-06-14', color: SUBJECT_COLORS[0] },
  { id: 'wbmil-2-2', faculty_id: 'wbmil', semester: 2, name: 'Chemistry', has_exam: true, exam_date: '2026-06-16', color: SUBJECT_COLORS[1] },
  { id: 'wbmil-2-3', faculty_id: 'wbmil', semester: 2, name: 'Mechanics I', has_exam: true, exam_date: '2026-06-19', color: SUBJECT_COLORS[2] },
  { id: 'wbmil-2-4', faculty_id: 'wbmil', semester: 2, name: 'Materials Science', has_exam: false, color: SUBJECT_COLORS[3] },

  // FMEA - Semester 3
  { id: 'wbmil-3-1', faculty_id: 'wbmil', semester: 3, name: 'Mechanics II', has_exam: true, exam_date: '2026-06-12', color: SUBJECT_COLORS[0] },
  { id: 'wbmil-3-2', faculty_id: 'wbmil', semester: 3, name: 'Materials Engineering', has_exam: true, exam_date: '2026-06-16', color: SUBJECT_COLORS[1] },
  { id: 'wbmil-3-3', faculty_id: 'wbmil', semester: 3, name: 'Engineering Thermodynamics', has_exam: true, exam_date: '2026-06-19', color: SUBJECT_COLORS[2] },
  { id: 'wbmil-3-4', faculty_id: 'wbmil', semester: 3, name: 'Advanced Mathematics', has_exam: false, color: SUBJECT_COLORS[3] },
  { id: 'wbmil-3-5', faculty_id: 'wbmil', semester: 3, name: 'Strength of Materials I', has_exam: false, color: SUBJECT_COLORS[4] },

  // FMEA - Semester 4 (Mechanical Engineering direction)
  { id: 'wbmil-4-1', faculty_id: 'wbmil', direction_id: 'wbmil-me', semester: 4, name: 'Strength of Materials II', has_exam: true, exam_date: '2026-06-13', color: SUBJECT_COLORS[0] },
  { id: 'wbmil-4-2', faculty_id: 'wbmil', direction_id: 'wbmil-me', semester: 4, name: 'Machines & Equipment', has_exam: true, exam_date: '2026-06-17', color: SUBJECT_COLORS[1] },
  { id: 'wbmil-4-3', faculty_id: 'wbmil', direction_id: 'wbmil-me', semester: 4, name: 'Control Systems Fundamentals', has_exam: false, color: SUBJECT_COLORS[2] },
  { id: 'wbmil-4-4', faculty_id: 'wbmil', direction_id: 'wbmil-me', semester: 4, name: 'Machining Technology', has_exam: false, color: SUBJECT_COLORS[3] },

  // FoM - Semester 1
  { id: 'wz-1-1', faculty_id: 'wz', semester: 1, name: 'General Mathematics', has_exam: true, exam_date: '2026-06-15', color: SUBJECT_COLORS[0] },
  { id: 'wz-1-2', faculty_id: 'wz', semester: 1, name: 'Microeconomics', has_exam: true, exam_date: '2026-06-17', color: SUBJECT_COLORS[1] },
  { id: 'wz-1-3', faculty_id: 'wz', semester: 1, name: 'Fundamentals of Management', has_exam: false, color: SUBJECT_COLORS[2] },
  { id: 'wz-1-4', faculty_id: 'wz', semester: 1, name: 'Foreign Languages I', has_exam: false, color: SUBJECT_COLORS[3] },

  // FoM - Semester 3 (Management direction)
  { id: 'wz-3-1', faculty_id: 'wz', direction_id: 'wz-mgmt', semester: 3, name: 'Management Accounting', has_exam: true, exam_date: '2026-06-12', color: SUBJECT_COLORS[0] },
  { id: 'wz-3-2', faculty_id: 'wz', direction_id: 'wz-mgmt', semester: 3, name: 'Corporate Finance', has_exam: true, exam_date: '2026-06-16', color: SUBJECT_COLORS[1] },
  { id: 'wz-3-3', faculty_id: 'wz', direction_id: 'wz-mgmt', semester: 3, name: 'Marketing', has_exam: true, exam_date: '2026-06-19', color: SUBJECT_COLORS[2] },
  { id: 'wz-3-4', faculty_id: 'wz', direction_id: 'wz-mgmt', semester: 3, name: 'Business Law', has_exam: false, color: SUBJECT_COLORS[3] },

  // ── FEECS – EE Direction ────────────────────────────────────────────────────
  // EE Semester 4
  { id: 'weii-ee-4-1', faculty_id: 'weii', direction_id: 'weii-ee', semester: 4, name: 'Power Electronics', has_exam: true, exam_date: '2026-06-13', color: SUBJECT_COLORS[0] },
  { id: 'weii-ee-4-2', faculty_id: 'weii', direction_id: 'weii-ee', semester: 4, name: 'Electric Machines', has_exam: true, exam_date: '2026-06-17', color: SUBJECT_COLORS[1] },
  { id: 'weii-ee-4-3', faculty_id: 'weii', direction_id: 'weii-ee', semester: 4, name: 'Control Systems I', has_exam: true, exam_date: '2026-06-20', color: SUBJECT_COLORS[2] },
  { id: 'weii-ee-4-4', faculty_id: 'weii', direction_id: 'weii-ee', semester: 4, name: 'Electrical Measurement Techniques', has_exam: false, color: SUBJECT_COLORS[3] },
  // EE Semester 5
  { id: 'weii-ee-5-1', faculty_id: 'weii', direction_id: 'weii-ee', semester: 5, name: 'Power Systems Analysis', has_exam: true, exam_date: '2026-06-11', color: SUBJECT_COLORS[0] },
  { id: 'weii-ee-5-2', faculty_id: 'weii', direction_id: 'weii-ee', semester: 5, name: 'Electric Drives & Applications', has_exam: true, exam_date: '2026-06-15', color: SUBJECT_COLORS[1] },
  { id: 'weii-ee-5-3', faculty_id: 'weii', direction_id: 'weii-ee', semester: 5, name: 'Renewable Energy Engineering', has_exam: true, exam_date: '2026-06-18', color: SUBJECT_COLORS[2] },
  { id: 'weii-ee-5-4', faculty_id: 'weii', direction_id: 'weii-ee', semester: 5, name: 'Power Quality & Protection', has_exam: false, color: SUBJECT_COLORS[3] },
  // EE Semester 6
  { id: 'weii-ee-6-1', faculty_id: 'weii', direction_id: 'weii-ee', semester: 6, name: 'Smart Grid Technologies', has_exam: true, exam_date: '2026-06-12', color: SUBJECT_COLORS[0] },
  { id: 'weii-ee-6-2', faculty_id: 'weii', direction_id: 'weii-ee', semester: 6, name: 'High Voltage Engineering', has_exam: true, exam_date: '2026-06-16', color: SUBJECT_COLORS[1] },
  { id: 'weii-ee-6-3', faculty_id: 'weii', direction_id: 'weii-ee', semester: 6, name: 'Power Engineering Project', has_exam: false, color: SUBJECT_COLORS[2] },

  // EE Specialization – Power Engineering (sem 5-6)
  { id: 'weii-ee-pow-5-1', faculty_id: 'weii', direction_id: 'weii-ee', specialization_id: 'weii-ee-power', semester: 5, name: 'Advanced Power Electronics', has_exam: true, exam_date: '2026-06-19', color: SUBJECT_COLORS[4] },
  { id: 'weii-ee-pow-5-2', faculty_id: 'weii', direction_id: 'weii-ee', specialization_id: 'weii-ee-power', semester: 5, name: 'Power Grid Design', has_exam: false, color: SUBJECT_COLORS[5] },
  { id: 'weii-ee-pow-6-1', faculty_id: 'weii', direction_id: 'weii-ee', specialization_id: 'weii-ee-power', semester: 6, name: 'Energy Storage Systems', has_exam: true, exam_date: '2026-06-19', color: SUBJECT_COLORS[4] },
  // EE Specialization – Industrial Automation (sem 5-6)
  { id: 'weii-ee-aut-5-1', faculty_id: 'weii', direction_id: 'weii-ee', specialization_id: 'weii-ee-auto', semester: 5, name: 'PLC Programming & SCADA', has_exam: true, exam_date: '2026-06-19', color: SUBJECT_COLORS[4] },
  { id: 'weii-ee-aut-5-2', faculty_id: 'weii', direction_id: 'weii-ee', specialization_id: 'weii-ee-auto', semester: 5, name: 'Industrial Robotics', has_exam: false, color: SUBJECT_COLORS[5] },
  { id: 'weii-ee-aut-6-1', faculty_id: 'weii', direction_id: 'weii-ee', specialization_id: 'weii-ee-auto', semester: 6, name: 'Industry 4.0 & Smart Manufacturing', has_exam: true, exam_date: '2026-06-19', color: SUBJECT_COLORS[4] },

  // ── FEECS – ET Direction ────────────────────────────────────────────────────
  // ET Semester 4
  { id: 'weii-et-4-1', faculty_id: 'weii', direction_id: 'weii-et', semester: 4, name: 'Signal Theory & Processing', has_exam: true, exam_date: '2026-06-13', color: SUBJECT_COLORS[0] },
  { id: 'weii-et-4-2', faculty_id: 'weii', direction_id: 'weii-et', semester: 4, name: 'RF & Microwave Circuits', has_exam: true, exam_date: '2026-06-17', color: SUBJECT_COLORS[1] },
  { id: 'weii-et-4-3', faculty_id: 'weii', direction_id: 'weii-et', semester: 4, name: 'Communication Systems', has_exam: true, exam_date: '2026-06-20', color: SUBJECT_COLORS[2] },
  { id: 'weii-et-4-4', faculty_id: 'weii', direction_id: 'weii-et', semester: 4, name: 'Microelectronics Design', has_exam: false, color: SUBJECT_COLORS[3] },
  // ET Semester 5
  { id: 'weii-et-5-1', faculty_id: 'weii', direction_id: 'weii-et', semester: 5, name: 'Wireless Communication Systems', has_exam: true, exam_date: '2026-06-11', color: SUBJECT_COLORS[0] },
  { id: 'weii-et-5-2', faculty_id: 'weii', direction_id: 'weii-et', semester: 5, name: 'Digital Signal Processing', has_exam: true, exam_date: '2026-06-15', color: SUBJECT_COLORS[1] },
  { id: 'weii-et-5-3', faculty_id: 'weii', direction_id: 'weii-et', semester: 5, name: 'Optical Fiber Technology', has_exam: true, exam_date: '2026-06-18', color: SUBJECT_COLORS[2] },
  { id: 'weii-et-5-4', faculty_id: 'weii', direction_id: 'weii-et', semester: 5, name: 'Advanced Antenna Systems', has_exam: false, color: SUBJECT_COLORS[3] },
  // ET Semester 6
  { id: 'weii-et-6-1', faculty_id: 'weii', direction_id: 'weii-et', semester: 6, name: '5G & Next-Gen Networks', has_exam: true, exam_date: '2026-06-12', color: SUBJECT_COLORS[0] },
  { id: 'weii-et-6-2', faculty_id: 'weii', direction_id: 'weii-et', semester: 6, name: 'IoT Architecture & Design', has_exam: true, exam_date: '2026-06-16', color: SUBJECT_COLORS[1] },
  { id: 'weii-et-6-3', faculty_id: 'weii', direction_id: 'weii-et', semester: 6, name: 'Telecommunications Engineering Project', has_exam: false, color: SUBJECT_COLORS[2] },

  // ET Specialization – Wireless Communications (sem 5-6)
  { id: 'weii-et-wir-5-1', faculty_id: 'weii', direction_id: 'weii-et', specialization_id: 'weii-et-wireless', semester: 5, name: 'Cellular Network Planning', has_exam: true, exam_date: '2026-06-19', color: SUBJECT_COLORS[4] },
  { id: 'weii-et-wir-6-1', faculty_id: 'weii', direction_id: 'weii-et', specialization_id: 'weii-et-wireless', semester: 6, name: 'Satellite Communication Systems', has_exam: true, exam_date: '2026-06-19', color: SUBJECT_COLORS[4] },
  // ET Specialization – Embedded Systems (sem 5-6)
  { id: 'weii-et-emb-5-1', faculty_id: 'weii', direction_id: 'weii-et', specialization_id: 'weii-et-embed', semester: 5, name: 'Real-Time Operating Systems', has_exam: true, exam_date: '2026-06-19', color: SUBJECT_COLORS[4] },
  { id: 'weii-et-emb-5-2', faculty_id: 'weii', direction_id: 'weii-et', specialization_id: 'weii-et-embed', semester: 5, name: 'Embedded Linux & Drivers', has_exam: false, color: SUBJECT_COLORS[5] },
  { id: 'weii-et-emb-6-1', faculty_id: 'weii', direction_id: 'weii-et', specialization_id: 'weii-et-embed', semester: 6, name: 'FPGA Design & Implementation', has_exam: true, exam_date: '2026-06-19', color: SUBJECT_COLORS[4] },

  // ── CS Specializations ──────────────────────────────────────────────────────
  // CS – AI Specialization (sem 5-6)
  { id: 'weii-cs-ai-5-1', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-ai', semester: 5, name: 'Advanced Machine Learning', has_exam: true, exam_date: '2026-06-13', color: SUBJECT_COLORS[4] },
  { id: 'weii-cs-ai-5-2', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-ai', semester: 5, name: 'Deep Learning Frameworks', has_exam: true, exam_date: '2026-06-16', color: SUBJECT_COLORS[5] },
  { id: 'weii-cs-ai-5-3', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-ai', semester: 5, name: 'Natural Language Processing', has_exam: false, color: SUBJECT_COLORS[0] },
  { id: 'weii-cs-ai-6-1', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-ai', semester: 6, name: 'Computer Vision & 3D Perception', has_exam: true, exam_date: '2026-06-13', color: SUBJECT_COLORS[4] },
  { id: 'weii-cs-ai-6-2', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-ai', semester: 6, name: 'Reinforcement Learning', has_exam: true, exam_date: '2026-06-17', color: SUBJECT_COLORS[5] },
  { id: 'weii-cs-ai-6-3', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-ai', semester: 6, name: 'AI Ethics & Responsible Systems', has_exam: false, color: SUBJECT_COLORS[0] },

  // CS – Software Engineering Specialization (sem 5-6)
  { id: 'weii-cs-se-5-1', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-se', semester: 5, name: 'Cloud-Native Architecture', has_exam: true, exam_date: '2026-06-13', color: SUBJECT_COLORS[4] },
  { id: 'weii-cs-se-5-2', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-se', semester: 5, name: 'Advanced DevOps & SRE', has_exam: true, exam_date: '2026-06-16', color: SUBJECT_COLORS[5] },
  { id: 'weii-cs-se-5-3', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-se', semester: 5, name: 'Mobile App Development', has_exam: false, color: SUBJECT_COLORS[0] },
  { id: 'weii-cs-se-6-1', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-se', semester: 6, name: 'Distributed Systems Design', has_exam: true, exam_date: '2026-06-13', color: SUBJECT_COLORS[4] },
  { id: 'weii-cs-se-6-2', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-se', semester: 6, name: 'Software Architecture Patterns', has_exam: true, exam_date: '2026-06-17', color: SUBJECT_COLORS[5] },
  { id: 'weii-cs-se-6-3', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-se', semester: 6, name: 'Product Engineering Capstone', has_exam: false, color: SUBJECT_COLORS[0] },

  // CS – Cybersecurity Specialization (sem 5-6)
  { id: 'weii-cs-cy-5-1', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-cyber', semester: 5, name: 'Advanced Cryptography', has_exam: true, exam_date: '2026-06-13', color: SUBJECT_COLORS[4] },
  { id: 'weii-cs-cy-5-2', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-cyber', semester: 5, name: 'Ethical Hacking & Penetration Testing', has_exam: true, exam_date: '2026-06-16', color: SUBJECT_COLORS[5] },
  { id: 'weii-cs-cy-5-3', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-cyber', semester: 5, name: 'Malware Analysis & Reverse Engineering', has_exam: false, color: SUBJECT_COLORS[0] },
  { id: 'weii-cs-cy-6-1', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-cyber', semester: 6, name: 'Digital Forensics', has_exam: true, exam_date: '2026-06-13', color: SUBJECT_COLORS[4] },
  { id: 'weii-cs-cy-6-2', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-cyber', semester: 6, name: 'Security Operations & SIEM', has_exam: true, exam_date: '2026-06-17', color: SUBJECT_COLORS[5] },
  { id: 'weii-cs-cy-6-3', faculty_id: 'weii', direction_id: 'weii-cs', specialization_id: 'weii-cs-cyber', semester: 6, name: 'Security Certification Project', has_exam: false, color: SUBJECT_COLORS[0] },

  // ── FMEA – Aviation Direction ───────────────────────────────────────────────
  // Aviation Semester 4
  { id: 'wbmil-avia-4-1', faculty_id: 'wbmil', direction_id: 'wbmil-avia', semester: 4, name: 'Aerodynamics I', has_exam: true, exam_date: '2026-06-13', color: SUBJECT_COLORS[0] },
  { id: 'wbmil-avia-4-2', faculty_id: 'wbmil', direction_id: 'wbmil-avia', semester: 4, name: 'Aircraft Structural Analysis', has_exam: true, exam_date: '2026-06-17', color: SUBJECT_COLORS[1] },
  { id: 'wbmil-avia-4-3', faculty_id: 'wbmil', direction_id: 'wbmil-avia', semester: 4, name: 'Flight Mechanics', has_exam: true, exam_date: '2026-06-20', color: SUBJECT_COLORS[2] },
  { id: 'wbmil-avia-4-4', faculty_id: 'wbmil', direction_id: 'wbmil-avia', semester: 4, name: 'Aviation Propulsion Systems', has_exam: false, color: SUBJECT_COLORS[3] },
  // Aviation Specialization – Aircraft Structures (sem 5)
  { id: 'wbmil-avia-str-5-1', faculty_id: 'wbmil', direction_id: 'wbmil-avia', specialization_id: 'wbmil-avia-struct', semester: 5, name: 'Composite Structures & Materials', has_exam: true, exam_date: '2026-06-13', color: SUBJECT_COLORS[4] },
  { id: 'wbmil-avia-str-5-2', faculty_id: 'wbmil', direction_id: 'wbmil-avia', specialization_id: 'wbmil-avia-struct', semester: 5, name: 'Finite Element Analysis for Aircraft', has_exam: true, exam_date: '2026-06-16', color: SUBJECT_COLORS[5] },
  // Aviation Specialization – Avionics (sem 5)
  { id: 'wbmil-avia-av-5-1', faculty_id: 'wbmil', direction_id: 'wbmil-avia', specialization_id: 'wbmil-avia-avio', semester: 5, name: 'Aircraft Electronics & Navigation', has_exam: true, exam_date: '2026-06-13', color: SUBJECT_COLORS[4] },
  { id: 'wbmil-avia-av-5-2', faculty_id: 'wbmil', direction_id: 'wbmil-avia', specialization_id: 'wbmil-avia-avio', semester: 5, name: 'Autopilot & Flight Control Systems', has_exam: true, exam_date: '2026-06-16', color: SUBJECT_COLORS[5] },

  // ── FoM – Logistics Direction ──────────────────────────────────────────────
  // Logistics Semester 3
  { id: 'wz-logi-3-1', faculty_id: 'wz', direction_id: 'wz-logi', semester: 3, name: 'Supply Chain Management', has_exam: true, exam_date: '2026-06-12', color: SUBJECT_COLORS[0] },
  { id: 'wz-logi-3-2', faculty_id: 'wz', direction_id: 'wz-logi', semester: 3, name: 'Transportation & Forwarding', has_exam: true, exam_date: '2026-06-16', color: SUBJECT_COLORS[1] },
  { id: 'wz-logi-3-3', faculty_id: 'wz', direction_id: 'wz-logi', semester: 3, name: 'Warehousing & Distribution', has_exam: true, exam_date: '2026-06-19', color: SUBJECT_COLORS[2] },
  { id: 'wz-logi-3-4', faculty_id: 'wz', direction_id: 'wz-logi', semester: 3, name: 'Logistics Information Systems', has_exam: false, color: SUBJECT_COLORS[3] },

  // ── FoM – Finance Direction ────────────────────────────────────────────────
  // Finance Semester 3
  { id: 'wz-fin-3-1', faculty_id: 'wz', direction_id: 'wz-finance', semester: 3, name: 'Financial Instruments & Markets', has_exam: true, exam_date: '2026-06-12', color: SUBJECT_COLORS[0] },
  { id: 'wz-fin-3-2', faculty_id: 'wz', direction_id: 'wz-finance', semester: 3, name: 'Banking & Credit Management', has_exam: true, exam_date: '2026-06-16', color: SUBJECT_COLORS[1] },
  { id: 'wz-fin-3-3', faculty_id: 'wz', direction_id: 'wz-finance', semester: 3, name: 'Financial Analysis & Valuation', has_exam: true, exam_date: '2026-06-19', color: SUBJECT_COLORS[2] },
  { id: 'wz-fin-3-4', faculty_id: 'wz', direction_id: 'wz-finance', semester: 3, name: 'Insurance & Risk Management', has_exam: false, color: SUBJECT_COLORS[3] },
];

// --- KNOWLEDGE POINTS ---
function kp(subjectId: string, order: number, description: string, estimated_minutes: number): KnowledgePoint {
  return { id: `${subjectId}-kp-${order}`, subject_id: subjectId, order, description, estimated_minutes };
}

export const KNOWLEDGE_POINTS: KnowledgePoint[] = [

  // ══════════════════════════════════════════
  // FEECS — Semester 1
  // ══════════════════════════════════════════

  // Mathematics I (weii-1-1)
  kp('weii-1-1', 1,  'Functions: domain, range & composition',              45),
  kp('weii-1-1', 2,  'Limits: definition, rules & computation',             60),
  kp('weii-1-1', 3,  'Continuity & types of discontinuities',               45),
  kp('weii-1-1', 4,  'Derivatives: definition & differentiation rules',     60),
  kp('weii-1-1', 5,  'Chain rule & implicit differentiation',               60),
  kp('weii-1-1', 6,  "L'Hopital's rule & indeterminate forms",              45),
  kp('weii-1-1', 7,  'Mean Value Theorem & applications',                   60),
  kp('weii-1-1', 8,  'Optimization: finding extrema on intervals',          75),
  kp('weii-1-1', 9,  'Curve sketching with first & second derivative',      60),
  kp('weii-1-1', 10, 'Indefinite integrals & antiderivative rules',         60),
  kp('weii-1-1', 11, 'Integration by substitution',                         60),
  kp('weii-1-1', 12, 'Integration by parts',                                75),
  kp('weii-1-1', 13, 'Definite integrals & Fundamental Theorem of Calculus',60),
  kp('weii-1-1', 14, 'Sequences & series: convergence tests',               90),
  kp('weii-1-1', 15, 'Taylor & Maclaurin series expansions',                75),

  // Physics I (weii-1-2)
  kp('weii-1-2', 1,  'Kinematics: motion in 1D & 2D, projectile motion',   45),
  kp('weii-1-2', 2,  "Newton's Laws of Motion & free-body diagrams",        60),
  kp('weii-1-2', 3,  'Friction, tension & dynamics on inclined planes',     45),
  kp('weii-1-2', 4,  'Work, kinetic energy & the work-energy theorem',      60),
  kp('weii-1-2', 5,  'Conservation of energy & potential energy',           60),
  kp('weii-1-2', 6,  'Linear momentum, impulse & conservation',             45),
  kp('weii-1-2', 7,  'Elastic & inelastic collisions',                      60),
  kp('weii-1-2', 8,  'Rotational motion: torque, angular velocity & accel', 75),
  kp('weii-1-2', 9,  'Angular momentum & conservation',                     60),
  kp('weii-1-2', 10, 'Simple harmonic motion: pendulum & spring',           60),
  kp('weii-1-2', 11, 'Mechanical waves: properties, speed & equations',     60),
  kp('weii-1-2', 12, 'Sound: resonance, interference & the Doppler effect', 45),
  kp('weii-1-2', 13, 'Temperature, heat & calorimetry',                     60),
  kp('weii-1-2', 14, 'Ideal gas law & kinetic theory of gases',             60),
  kp('weii-1-2', 15, 'Thermodynamic processes & the Second Law',            75),

  // Introduction to Computer Science (weii-1-3)
  kp('weii-1-3', 1,  'Introduction to algorithms & problem solving',        30),
  kp('weii-1-3', 2,  'Variables, data types & operators',                   30),
  kp('weii-1-3', 3,  'Control flow: conditionals & loops',                  45),
  kp('weii-1-3', 4,  'Functions, scope & modular programming',              45),
  kp('weii-1-3', 5,  'Arrays & basic string operations',                    45),
  kp('weii-1-3', 6,  'Sorting algorithms: bubble, insertion & selection',   60),
  kp('weii-1-3', 7,  'Searching: linear search & binary search',            45),
  kp('weii-1-3', 8,  'Recursion & the call stack',                          60),
  kp('weii-1-3', 9,  'Time complexity: Big-O notation & analysis',          60),
  kp('weii-1-3', 10, 'Linked lists: nodes, traversal & operations',         60),
  kp('weii-1-3', 11, 'Stacks & queues: implementation & use cases',         45),
  kp('weii-1-3', 12, 'Binary trees: structure & traversal algorithms',      60),
  kp('weii-1-3', 13, 'Graphs: representation & basic traversal',            45),
  kp('weii-1-3', 14, 'Hash tables: hashing & collision resolution',         45),
  kp('weii-1-3', 15, 'Introduction to object-oriented concepts',            60),

  // Foreign Languages I (weii-1-4)
  kp('weii-1-4', 1,  'Academic vocabulary & technical terminology',         30),
  kp('weii-1-4', 2,  'Reading technical texts & engineering articles',      45),
  kp('weii-1-4', 3,  'Grammar review: tenses & sentence structures',        45),
  kp('weii-1-4', 4,  'Professional writing: emails & formal letters',       45),
  kp('weii-1-4', 5,  'Listening comprehension: lectures & talks',           30),
  kp('weii-1-4', 6,  'Speaking: presentations & academic discussions',      60),
  kp('weii-1-4', 7,  'Academic writing: essays & argumentative texts',      60),
  kp('weii-1-4', 8,  'Research vocabulary & scientific language',           45),
  kp('weii-1-4', 9,  'Technical documentation & user manuals',              45),
  kp('weii-1-4', 10, 'Engineering & computing vocabulary expansion',         45),
  kp('weii-1-4', 11, 'Grammar: conditionals & modal verbs',                 45),
  kp('weii-1-4', 12, 'Reading comprehension strategies',                    30),
  kp('weii-1-4', 13, 'Oral presentations: structure & delivery',            60),
  kp('weii-1-4', 14, 'Writing: scientific abstracts & summaries',           45),
  kp('weii-1-4', 15, 'Exam preparation & language review',                  30),

  // ══════════════════════════════════════════
  // FEECS — Semester 2
  // ══════════════════════════════════════════

  // Mathematics II (weii-2-1)
  kp('weii-2-1', 1,  'Vector spaces: definition, axioms & examples',        45),
  kp('weii-2-1', 2,  'Basis, dimension & linear independence',              60),
  kp('weii-2-1', 3,  'Linear transformations & matrix representations',     60),
  kp('weii-2-1', 4,  'Determinants: properties & computation',              60),
  kp('weii-2-1', 5,  'Eigenvalues & eigenvectors: characteristic polynomial',75),
  kp('weii-2-1', 6,  'Diagonalization & matrix powers',                     75),
  kp('weii-2-1', 7,  'Multivariable functions: limits & continuity',        60),
  kp('weii-2-1', 8,  'Partial derivatives & the gradient vector',           60),
  kp('weii-2-1', 9,  'Directional derivatives & extrema of functions',      60),
  kp('weii-2-1', 10, 'Lagrange multipliers & constrained optimization',     75),
  kp('weii-2-1', 11, 'Double integrals: Cartesian & polar coordinates',     75),
  kp('weii-2-1', 12, 'Triple integrals & cylindrical/spherical coordinates',90),
  kp('weii-2-1', 13, 'Line integrals & conservative vector fields',         75),
  kp('weii-2-1', 14, "Green's theorem & applications",                      75),
  kp('weii-2-1', 15, "Stokes' theorem & Divergence theorem",                90),

  // Physics II (weii-2-2)
  kp('weii-2-2', 1,  "Electric charge & Coulomb's law",                     45),
  kp('weii-2-2', 2,  "Electric field & Gauss's law",                        60),
  kp('weii-2-2', 3,  'Electric potential & capacitance',                    60),
  kp('weii-2-2', 4,  "DC circuits: Ohm's & Kirchhoff's laws",               60),
  kp('weii-2-2', 5,  'RC & RL circuits: transient response',                60),
  kp('weii-2-2', 6,  'Magnetic fields & the Lorentz force',                 60),
  kp('weii-2-2', 7,  "Biot-Savart law & Ampere's law",                      75),
  kp('weii-2-2', 8,  "Faraday's law & electromagnetic induction",           75),
  kp('weii-2-2', 9,  'AC circuits: impedance, phase & resonance',           75),
  kp('weii-2-2', 10, "Maxwell's equations & electromagnetic waves",         90),
  kp('weii-2-2', 11, 'Geometric optics: reflection & refraction',           45),
  kp('weii-2-2', 12, 'Wave optics: interference, diffraction & polarization',60),
  kp('weii-2-2', 13, 'Quantum mechanics intro: photoelectric effect',       60),
  kp('weii-2-2', 14, 'Bohr atomic model & emission spectra',                60),
  kp('weii-2-2', 15, 'Nuclear physics & radioactive decay',                 60),

  // Electronics Fundamentals (weii-2-3)
  kp('weii-2-3', 1,  "Circuit elements: R, L, C & Ohm's law",              30),
  kp('weii-2-3', 2,  "Kirchhoff's laws: nodal & mesh analysis",            60),
  kp('weii-2-3', 3,  'Thevenin & Norton equivalent circuits',              60),
  kp('weii-2-3', 4,  'Capacitors & inductors in transient circuits',       45),
  kp('weii-2-3', 5,  'AC circuit analysis & phasor representation',        60),
  kp('weii-2-3', 6,  'Semiconductor physics & PN junction diodes',         60),
  kp('weii-2-3', 7,  'Diode characteristics, models & clipping circuits',  45),
  kp('weii-2-3', 8,  'Rectifier circuits: half-wave, full-wave & filters', 60),
  kp('weii-2-3', 9,  'BJT transistor: operating regions & biasing',        75),
  kp('weii-2-3', 10, 'Small-signal BJT amplifier: CE, CB & CC configs',    75),
  kp('weii-2-3', 11, 'MOSFET: n-channel, p-channel & biasing',             60),
  kp('weii-2-3', 12, 'Operational amplifiers: ideal model & virtual ground',60),
  kp('weii-2-3', 13, 'Op-amp circuits: inverting, non-inverting & summing', 60),
  kp('weii-2-3', 14, 'Active RC filters & frequency response',              75),
  kp('weii-2-3', 15, 'Feedback systems: stability & gain-bandwidth product',60),

  // Linear Algebra (weii-2-4)
  kp('weii-2-4', 1,  'Vectors in R2 & R3: operations & geometry',          30),
  kp('weii-2-4', 2,  'Dot product, cross product & projections',           45),
  kp('weii-2-4', 3,  'Lines, planes & geometric transformations in 3D',    45),
  kp('weii-2-4', 4,  'Systems of linear equations & matrix form',          60),
  kp('weii-2-4', 5,  'Gaussian elimination & row reduction',               60),
  kp('weii-2-4', 6,  'Matrix algebra: addition, multiplication & powers',  45),
  kp('weii-2-4', 7,  'Inverse matrices & computing determinants',          60),
  kp('weii-2-4', 8,  'Vector spaces, subspaces & closure',                 60),
  kp('weii-2-4', 9,  'Linear independence, span & basis',                  60),
  kp('weii-2-4', 10, 'Coordinates & change of basis',                      60),
  kp('weii-2-4', 11, 'Linear transformations: kernel & image',             60),
  kp('weii-2-4', 12, 'Eigenvalues & eigenvectors: characteristic polynomial',75),
  kp('weii-2-4', 13, 'Diagonalization & applications to difference equations',75),
  kp('weii-2-4', 14, 'Inner product spaces & orthogonality',               60),
  kp('weii-2-4', 15, 'Gram-Schmidt process & QR decomposition',            60),

  // ══════════════════════════════════════════
  // FEECS — Semester 3
  // ══════════════════════════════════════════

  // Advanced Mathematics (weii-3-1)
  kp('weii-3-1', 1,  'Double integrals: definition & geometric interpretation',60),
  kp('weii-3-1', 2,  'Changing integration order in double integrals',        75),
  kp('weii-3-1', 3,  'Triple integrals & their applications',                 60),
  kp('weii-3-1', 4,  'Change of variables & the Jacobian of transformation',  90),
  kp('weii-3-1', 5,  'Polar, cylindrical & spherical coordinate systems',     75),
  kp('weii-3-1', 6,  'Ordinary differential equations: types & solution methods',90),
  kp('weii-3-1', 7,  'First-order ODEs: separation of variables',             60),
  kp('weii-3-1', 8,  'n-th order linear ODEs with constant coefficients',     90),
  kp('weii-3-1', 9,  'Variation of parameters method',                        75),
  kp('weii-3-1', 10, 'Fourier series: definition & convergence conditions',   90),
  kp('weii-3-1', 11, 'Laplace transform: properties & transform tables',      75),
  kp('weii-3-1', 12, 'Applying the Laplace transform to solve ODEs',          90),
  kp('weii-3-1', 13, 'Vector calculus: gradient, divergence & curl',          60),
  kp('weii-3-1', 14, 'Line integrals & surface integrals',                    75),
  kp('weii-3-1', 15, "Gauss's, Green's & Stokes' theorems",                   90),

  // Digital Systems (weii-3-2)
  kp('weii-3-2', 1,  'Number systems: binary, octal & hexadecimal',           45),
  kp('weii-3-2', 2, "Number representation: two's complement & floating point",60),
  kp('weii-3-2', 3,  'Boolean algebra: laws & axioms',                        45),
  kp('weii-3-2', 4,  'Function minimization with Karnaugh maps',              60),
  kp('weii-3-2', 5,  'Logic gates & realization of combinational functions',  45),
  kp('weii-3-2', 6,  'Adders, comparators & multiplexers',                    60),
  kp('weii-3-2', 7,  'Sequential circuits: Moore & Mealy state machines',     75),
  kp('weii-3-2', 8,  'Flip-flops: RS, D, JK & T types',                      60),
  kp('weii-3-2', 9,  'Shift registers & synchronous counters',                60),
  kp('weii-3-2', 10, 'Synthesis of sequential circuits',                      75),
  kp('weii-3-2', 11, 'Memory: ROM, RAM & EEPROM — structure & characteristics',45),
  kp('weii-3-2', 12, 'FPGA & CPLD: VHDL programming',                         90),
  kp('weii-3-2', 13, 'ADC & DAC converters',                                  60),
  kp('weii-3-2', 14, 'Serial interfaces: SPI, I2C & UART',                    60),
  kp('weii-3-2', 15, 'Microcontrollers: architecture & low-level programming', 90),

  // Object-Oriented Programming (weii-3-3)
  kp('weii-3-3', 1,  'OOP paradigm: classes, objects, methods & fields',      45),
  kp('weii-3-3', 2,  'Encapsulation & access modifiers',                       45),
  kp('weii-3-3', 3,  'Single & multiple inheritance',                          60),
  kp('weii-3-3', 4,  'Polymorphism & virtual methods',                         60),
  kp('weii-3-3', 5,  'Interfaces & abstract classes',                          45),
  kp('weii-3-3', 6,  'Operator & method overloading',                          45),
  kp('weii-3-3', 7,  'Design patterns: Singleton, Factory & Observer',         90),
  kp('weii-3-3', 8,  'Design patterns: Strategy, Decorator & Command',         90),
  kp('weii-3-3', 9,  'Collections & generics / templates',                     60),
  kp('weii-3-3', 10, 'Exception handling: try / catch / finally',              45),
  kp('weii-3-3', 11, 'Functional programming in OOP: lambdas & streams',       75),
  kp('weii-3-3', 12, 'Memory management: garbage collection & RAII',           60),
  kp('weii-3-3', 13, 'Multithreading: synchronization & race conditions',       75),
  kp('weii-3-3', 14, 'Unit testing: JUnit / GTest frameworks',                 60),
  kp('weii-3-3', 15, 'SOLID principles & clean code practices',                60),

  // Analog Electronics (weii-3-4)
  kp('weii-3-4', 1,  "Circuit theory basics: Ohm's & Kirchhoff's laws",       45),
  kp('weii-3-4', 2,  'DC circuit analysis: nodal & mesh analysis methods',    60),
  kp('weii-3-4', 3,  'AC circuits: impedance, admittance & phasors',          60),
  kp('weii-3-4', 4,  'Series & parallel resonance circuits',                  45),
  kp('weii-3-4', 5,  'Frequency response & Bode plots',                       60),
  kp('weii-3-4', 6,  'Semiconductor diodes: I-V characteristics & models',    45),
  kp('weii-3-4', 7,  'Half-wave & full-wave rectifiers, filtering capacitors', 60),
  kp('weii-3-4', 8,  'BJT transistor: biasing & DC operating point',          75),
  kp('weii-3-4', 9,  'Small-signal BJT amplifier analysis',                   75),
  kp('weii-3-4', 10, 'MOSFET transistor: types & applications',               60),
  kp('weii-3-4', 11, 'Operational amplifiers: ideal & real characteristics',  60),
  kp('weii-3-4', 12, 'Op-amp circuits: summing, differentiating & integrating',60),
  kp('weii-3-4', 13, 'Active RC filters: low-pass & high-pass designs',       75),
  kp('weii-3-4', 14, 'RC & LC oscillators: startup & oscillation conditions', 75),
  kp('weii-3-4', 15, 'Voltage regulators: linear (LDO) & switching types',    60),

  // Computer Networks (weii-3-5)
  kp('weii-3-5', 1,  'OSI model: 7 layers & their functions',                 45),
  kp('weii-3-5', 2,  'TCP/IP model: layers & key protocols',                  45),
  kp('weii-3-5', 3,  'Physical layer: transmission media & line encoding',    45),
  kp('weii-3-5', 4,  'Data link layer: Ethernet frames & MAC addressing',     60),
  kp('weii-3-5', 5,  'Network switches: spanning tree & VLAN configuration',  45),
  kp('weii-3-5', 6,  'IP protocol: IPv4 addressing, subnetting & CIDR',       60),
  kp('weii-3-5', 7,  'Routing protocols: RIP, OSPF & BGP',                    75),
  kp('weii-3-5', 8,  'TCP protocol: reliable transmission & flow control',    60),
  kp('weii-3-5', 9,  'UDP protocol & real-time streaming applications',       30),
  kp('weii-3-5', 10, 'DNS, DHCP & NAT: operation & configuration',            60),
  kp('weii-3-5', 11, 'HTTP/HTTPS: methods, status codes & TLS',               60),
  kp('weii-3-5', 12, 'Wireless networks: IEEE 802.11 standards & WPA3',       60),
  kp('weii-3-5', 13, 'Firewalls, ACLs & network security policies',           45),
  kp('weii-3-5', 14, 'VPN: types & protocols (IPSec, OpenVPN)',               60),
  kp('weii-3-5', 15, 'IPv6: addressing, transition mechanisms & migration',   60),

  // ══════════════════════════════════════════
  // FEECS — Semester 4
  // ══════════════════════════════════════════

  // Operating Systems (weii-4-1)
  kp('weii-4-1', 1,  'OS concepts: kernel, user space & system calls',        45),
  kp('weii-4-1', 2,  'Processes: states, PCB, creation & termination',        60),
  kp('weii-4-1', 3,  'Threads & concurrency models',                          60),
  kp('weii-4-1', 4,  'CPU scheduling: FCFS, SJF, Round Robin & priority',    60),
  kp('weii-4-1', 5,  'Process synchronization: semaphores & mutexes',         75),
  kp('weii-4-1', 6,  'Classic problems: producer-consumer, dining philosophers',75),
  kp('weii-4-1', 7,  'Deadlock: detection, prevention & avoidance (banker)',  75),
  kp('weii-4-1', 8,  'Memory management: partitioning & fragmentation',       60),
  kp('weii-4-1', 9,  'Paging: page tables, TLB & address translation',       60),
  kp('weii-4-1', 10, 'Virtual memory: demand paging & page replacement',      75),
  kp('weii-4-1', 11, 'File systems: FAT, ext4, NTFS & inodes',               60),
  kp('weii-4-1', 12, 'I/O management: device drivers & interrupt handling',  45),
  kp('weii-4-1', 13, 'Security: authentication, authorization & access ctrl', 60),
  kp('weii-4-1', 14, 'Linux command line, bash scripting & process tools',   60),
  kp('weii-4-1', 15, 'Virtualization, containers & hypervisors',              60),

  // Databases (weii-4-2)
  kp('weii-4-2', 1,  'Relational model: tables, keys, constraints & integrity',45),
  kp('weii-4-2', 2,  'Entity-Relationship diagrams & data modeling',           60),
  kp('weii-4-2', 3,  'SQL basics: SELECT, WHERE, ORDER BY & DISTINCT',        60),
  kp('weii-4-2', 4,  'SQL joins: INNER, LEFT, RIGHT & FULL OUTER JOIN',       60),
  kp('weii-4-2', 5,  'Subqueries, CTEs & correlated queries',                 75),
  kp('weii-4-2', 6,  'SQL aggregations: GROUP BY, HAVING & window functions', 60),
  kp('weii-4-2', 7,  'Transactions: ACID properties & isolation levels',      75),
  kp('weii-4-2', 8,  'Indexing strategies & query execution plans',           75),
  kp('weii-4-2', 9,  'Database normalization: 1NF, 2NF, 3NF & BCNF',        90),
  kp('weii-4-2', 10, 'Stored procedures, functions & triggers',               60),
  kp('weii-4-2', 11, 'Views, materialized views & database objects',          60),
  kp('weii-4-2', 12, 'NoSQL databases: document, key-value & graph stores',  60),
  kp('weii-4-2', 13, 'Data warehousing: star schema, OLAP & ETL',            60),
  kp('weii-4-2', 14, 'Database security, roles & access control',             45),
  kp('weii-4-2', 15, 'Distributed databases: replication & sharding',         60),

  // Algorithms & Data Structures (weii-4-3)
  kp('weii-4-3', 1,  'Algorithm analysis: time & space complexity (Big-O)',   60),
  kp('weii-4-3', 2,  'Arrays, strings & two-pointer technique',               45),
  kp('weii-4-3', 3,  'Linked lists: singly, doubly & circular',               60),
  kp('weii-4-3', 4,  'Stacks & queues: implementations & applications',       45),
  kp('weii-4-3', 5,  'Binary trees: properties, balance & traversals',        60),
  kp('weii-4-3', 6,  'Binary search trees: insertion, deletion & rotation',   75),
  kp('weii-4-3', 7,  'Heaps & priority queues: min-heap & max-heap',          60),
  kp('weii-4-3', 8,  'Hash tables: open addressing & chaining',               60),
  kp('weii-4-3', 9,  'Sorting: merge sort, quicksort & counting sort',        75),
  kp('weii-4-3', 10, 'Graphs: adjacency matrix vs adjacency list',            45),
  kp('weii-4-3', 11, 'Graph traversals: DFS & BFS with applications',        60),
  kp('weii-4-3', 12, "Shortest paths: Dijkstra's & Bellman-Ford",             75),
  kp('weii-4-3', 13, "Minimum spanning trees: Kruskal's & Prim's",           60),
  kp('weii-4-3', 14, 'Dynamic programming: memoization & tabulation',        90),
  kp('weii-4-3', 15, 'Greedy algorithms: activity selection & Huffman coding',60),

  // Computer Architecture (weii-4-4)
  kp('weii-4-4', 1,  'Boolean algebra, logic gates & combinational circuits', 45),
  kp('weii-4-4', 2,  'Adders, multiplexers & arithmetic logic unit (ALU)',   60),
  kp('weii-4-4', 3,  'Sequential circuits: latches, registers & counters',   60),
  kp('weii-4-4', 4,  'CPU architecture: ALU, control unit & registers',       75),
  kp('weii-4-4', 5,  'Instruction set architecture: RISC vs CISC',           60),
  kp('weii-4-4', 6,  'Memory hierarchy: registers, cache, RAM & storage',    60),
  kp('weii-4-4', 7,  'Cache memory: direct-mapped, set-associative & LRU',   75),
  kp('weii-4-4', 8,  'Pipelining: stages, data hazards & stalls',            75),
  kp('weii-4-4', 9,  'Branch prediction & out-of-order execution',           60),
  kp('weii-4-4', 10, 'Virtual memory: MMU, page tables & TLB',               60),
  kp('weii-4-4', 11, 'I/O systems, bus architectures & PCI/USB',             45),
  kp('weii-4-4', 12, 'Interrupt handling, DMA & I/O performance',            45),
  kp('weii-4-4', 13, 'Parallel architectures: SIMD & multi-core CPUs',       60),
  kp('weii-4-4', 14, 'GPU architecture & GPGPU computing',                   60),
  kp('weii-4-4', 15, 'Embedded systems: microcontrollers & real-time OS',    60),

  // ══════════════════════════════════════════
  // FEECS — Semester 5
  // ══════════════════════════════════════════

  // Software Engineering (weii-5-1)
  kp('weii-5-1', 1,  'Software development lifecycle: waterfall & iterative', 45),
  kp('weii-5-1', 2,  'Requirements engineering: elicitation & specification', 60),
  kp('weii-5-1', 3,  'Use cases, user stories & acceptance criteria',         60),
  kp('weii-5-1', 4,  'UML diagrams: class, sequence, activity & state',       75),
  kp('weii-5-1', 5,  'Creational design patterns: Singleton, Factory & Builder',75),
  kp('weii-5-1', 6,  'Structural & behavioral patterns: Adapter, Observer',   75),
  kp('weii-5-1', 7,  'Software architecture: layered, MVC & microservices',   60),
  kp('weii-5-1', 8,  'Testing strategies: unit, integration & system testing',60),
  kp('weii-5-1', 9,  'Test-driven development (TDD) & test coverage',         60),
  kp('weii-5-1', 10, 'Version control: Git branching, merging & rebasing',   45),
  kp('weii-5-1', 11, 'CI/CD pipelines, Docker & DevOps practices',           60),
  kp('weii-5-1', 12, 'Agile methodologies: Scrum sprints & Kanban boards',   60),
  kp('weii-5-1', 13, 'Code quality: refactoring, code reviews & linting',    60),
  kp('weii-5-1', 14, 'API design: RESTful principles & OpenAPI specification',45),
  kp('weii-5-1', 15, 'Scalability, maintainability & technical debt',         45),

  // Artificial Intelligence (weii-5-2)
  kp('weii-5-2', 1,  'Introduction to AI: history, approaches & applications',30),
  kp('weii-5-2', 2,  'Uninformed search: BFS, DFS & iterative deepening',    60),
  kp('weii-5-2', 3,  'Informed search: heuristics & A* algorithm',           60),
  kp('weii-5-2', 4,  'Adversarial search: minimax & alpha-beta pruning',     75),
  kp('weii-5-2', 5,  'Knowledge representation: propositional & first-order logic',60),
  kp('weii-5-2', 6,  "Probabilistic reasoning: Bayes' theorem & belief nets", 75),
  kp('weii-5-2', 7,  'Machine learning: supervised & unsupervised paradigms', 60),
  kp('weii-5-2', 8,  'Decision trees, random forests & gradient boosting',   75),
  kp('weii-5-2', 9,  'Neural networks: perceptrons & backpropagation',        90),
  kp('weii-5-2', 10, 'Deep learning: CNNs for vision & RNNs for sequences',  90),
  kp('weii-5-2', 11, 'Natural language processing: tokenization & embeddings',60),
  kp('weii-5-2', 12, 'Computer vision: object detection & segmentation',     60),
  kp('weii-5-2', 13, 'Reinforcement learning: Q-learning & policy gradient', 75),
  kp('weii-5-2', 14, 'Ethics & bias in artificial intelligence',              45),
  kp('weii-5-2', 15, 'AI trends: large language models & generative AI',     45),

  // Systems Security (weii-5-3)
  kp('weii-5-3', 1,  'Security principles: CIA triad, threat modeling & risk',45),
  kp('weii-5-3', 2,  'Symmetric encryption: AES, DES & block cipher modes',  60),
  kp('weii-5-3', 3,  'Asymmetric encryption: RSA, ECC & key exchange',       75),
  kp('weii-5-3', 4,  'Hash functions: SHA-256, HMAC & message integrity',    60),
  kp('weii-5-3', 5,  'Digital signatures, certificates & PKI infrastructure', 60),
  kp('weii-5-3', 6,  'Authentication: passwords, MFA & biometrics',          60),
  kp('weii-5-3', 7,  'Authorization: RBAC, ABAC & access control models',    45),
  kp('weii-5-3', 8,  'Network security: firewalls, IDS/IPS & VPNs',          60),
  kp('weii-5-3', 9,  'Web security: OWASP Top 10 vulnerabilities',           75),
  kp('weii-5-3', 10, 'SQL injection, XSS & CSRF attacks in depth',           60),
  kp('weii-5-3', 11, 'Malware analysis & reverse engineering basics',         60),
  kp('weii-5-3', 12, 'Penetration testing methodology & tools',              75),
  kp('weii-5-3', 13, 'Security policies, compliance & frameworks (ISO 27001)',45),
  kp('weii-5-3', 14, 'Incident response & digital forensics',                 60),
  kp('weii-5-3', 15, 'Risk management & security architecture',               60),

  // Network Programming (weii-5-4)
  kp('weii-5-4', 1,  'Socket programming: TCP & UDP sockets in C/Python',    60),
  kp('weii-5-4', 2,  'Client-server architecture & protocol design',          60),
  kp('weii-5-4', 3,  'HTTP protocol: methods, headers & status codes',        60),
  kp('weii-5-4', 4,  'Building HTTP servers & RESTful APIs',                  75),
  kp('weii-5-4', 5,  'Asynchronous I/O: event loop & non-blocking sockets',   75),
  kp('weii-5-4', 6,  'WebSockets & real-time bidirectional communication',    60),
  kp('weii-5-4', 7,  'gRPC & Protocol Buffers for microservice calls',        60),
  kp('weii-5-4', 8,  'Microservices: API gateways, service mesh & discovery', 60),
  kp('weii-5-4', 9,  'Message queues: RabbitMQ & Apache Kafka patterns',      60),
  kp('weii-5-4', 10, 'Authentication in networked apps: JWT & OAuth 2.0',    60),
  kp('weii-5-4', 11, 'TLS/SSL: implementation, certificates & handshake',    60),
  kp('weii-5-4', 12, 'Distributed systems: CAP theorem & eventual consistency',75),
  kp('weii-5-4', 13, 'Load balancing strategies & service discovery',         60),
  kp('weii-5-4', 14, 'Network profiling, debugging & packet analysis',        45),
  kp('weii-5-4', 15, 'Cloud networking: VPC, CDN & serverless architecture',  45),

  // ══════════════════════════════════════════
  // FEECS — Semester 6
  // ══════════════════════════════════════════

  // Big Data Processing (weii-6-1)
  kp('weii-6-1', 1,  'Big data concepts: the 5 Vs & distributed computing',  30),
  kp('weii-6-1', 2,  'Hadoop ecosystem: HDFS architecture & YARN scheduling', 60),
  kp('weii-6-1', 3,  'MapReduce programming model & word count example',      75),
  kp('weii-6-1', 4,  'Apache Spark: RDDs, transformations & actions',         90),
  kp('weii-6-1', 5,  'Spark SQL: DataFrames, schemas & query optimization',   75),
  kp('weii-6-1', 6,  'Streaming data: Spark Structured Streaming & Flink',    90),
  kp('weii-6-1', 7,  'Apache Kafka: producers, consumers, topics & partitions',75),
  kp('weii-6-1', 8,  'Data pipelines & ETL / ELT processes',                  60),
  kp('weii-6-1', 9,  'Data lakes vs data warehouses: architecture & trade-offs',60),
  kp('weii-6-1', 10, 'Cloud storage: AWS S3, GCS & Azure Blob Storage',       45),
  kp('weii-6-1', 11, 'NoSQL at scale: Apache Cassandra & MongoDB clusters',   75),
  kp('weii-6-1', 12, 'Data visualization: Tableau, Power BI & Apache Superset',60),
  kp('weii-6-1', 13, 'Data quality, lineage & governance principles',         45),
  kp('weii-6-1', 14, 'Performance tuning in distributed Spark jobs',          75),
  kp('weii-6-1', 15, 'Real-world case studies & big data architecture review', 60),

  // Machine Learning (weii-6-2)
  kp('weii-6-2', 1,  'Linear regression: OLS, gradient descent & assumptions',60),
  kp('weii-6-2', 2,  'Logistic regression & binary classification',           60),
  kp('weii-6-2', 3,  'Decision trees & ensemble methods: bagging & boosting',  75),
  kp('weii-6-2', 4,  'Support Vector Machines: kernels & margin maximization', 75),
  kp('weii-6-2', 5,  'Unsupervised learning: k-means & hierarchical clustering',60),
  kp('weii-6-2', 6,  'Dimensionality reduction: PCA, t-SNE & UMAP',           75),
  kp('weii-6-2', 7,  'Neural networks: architecture, activations & training',  90),
  kp('weii-6-2', 8,  'Convolutional Neural Networks: conv layers & pooling',   90),
  kp('weii-6-2', 9,  'Recurrent Neural Networks: LSTMs & sequence modeling',   90),
  kp('weii-6-2', 10, 'Model evaluation: precision, recall, ROC & cross-val',  60),
  kp('weii-6-2', 11, 'Regularization, dropout & hyperparameter tuning',       75),
  kp('weii-6-2', 12, 'Feature engineering, selection & pipelines',            60),
  kp('weii-6-2', 13, 'MLOps: model serving, monitoring & retraining',         75),
  kp('weii-6-2', 14, 'Transfer learning & fine-tuning pre-trained models',    60),
  kp('weii-6-2', 15, 'Ethics, fairness, bias & responsible AI',               45),

  // Engineering Project (weii-6-3)
  kp('weii-6-3', 1,  'Project scoping & defining functional requirements',     60),
  kp('weii-6-3', 2,  'System architecture & key design decisions',             75),
  kp('weii-6-3', 3,  'Technology stack selection & feasibility study',         60),
  kp('weii-6-3', 4,  'Database design & entity-relationship modeling',         60),
  kp('weii-6-3', 5,  'Backend development: REST APIs & business logic',        90),
  kp('weii-6-3', 6,  'Frontend development: UI/UX & component design',         90),
  kp('weii-6-3', 7,  'Testing strategy: unit, integration & end-to-end tests', 75),
  kp('weii-6-3', 8,  'Continuous integration setup & automated builds',        60),
  kp('weii-6-3', 9,  'Technical & user documentation',                         60),
  kp('weii-6-3', 10, 'Code review, linting & quality assurance',               45),
  kp('weii-6-3', 11, 'Performance profiling & optimization',                   60),
  kp('weii-6-3', 12, 'Security audit & vulnerability hardening',               60),
  kp('weii-6-3', 13, 'Deployment: Docker, Kubernetes & cloud infrastructure',  75),
  kp('weii-6-3', 14, 'Demo preparation & presentation skills',                 60),
  kp('weii-6-3', 15, 'Project retrospective & lessons learned',                45),

  // ══════════════════════════════════════════
  // FMEA — Semester 1
  // ══════════════════════════════════════════

  // Mathematics I (wbmil-1-1)
  kp('wbmil-1-1', 1,  'Functions: domain, range & basic function types',       45),
  kp('wbmil-1-1', 2,  'Limits: computation rules & sandwich theorem',          60),
  kp('wbmil-1-1', 3,  'Derivatives: differentiation rules & higher-order deriv',60),
  kp('wbmil-1-1', 4,  'Applications of derivatives: optimization & extrema',   75),
  kp('wbmil-1-1', 5,  'Curve sketching with differential calculus',            60),
  kp('wbmil-1-1', 6,  'Indefinite integrals & standard antiderivatives',       60),
  kp('wbmil-1-1', 7,  'Integration by substitution & by parts',                75),
  kp('wbmil-1-1', 8,  'Definite integrals: areas, volumes & arc length',       75),
  kp('wbmil-1-1', 9,  'Sequences & numerical series: convergence tests',       75),
  kp('wbmil-1-1', 10, 'Taylor & Maclaurin series expansions',                  75),
  kp('wbmil-1-1', 11, 'Vectors in 2D & 3D: dot & cross products',             45),
  kp('wbmil-1-1', 12, 'Matrix operations: addition, multiplication & inverse', 60),
  kp('wbmil-1-1', 13, 'Systems of linear equations & Gaussian elimination',    60),
  kp('wbmil-1-1', 14, 'Introduction to ordinary differential equations',       75),
  kp('wbmil-1-1', 15, 'First-order ODEs: separable equations & applications',  60),

  // Physics (wbmil-1-2)
  kp('wbmil-1-2', 1,  'Kinematics: 1D & 2D motion, projectile trajectory',    45),
  kp('wbmil-1-2', 2,  "Newton's laws & dynamics: free-body diagrams",          60),
  kp('wbmil-1-2', 3,  'Work, energy & conservation of mechanical energy',      60),
  kp('wbmil-1-2', 4,  'Momentum, impulse & conservation in collisions',        45),
  kp('wbmil-1-2', 5,  'Rotational dynamics: torque, angular momentum & inertia',60),
  kp('wbmil-1-2', 6,  'Simple harmonic motion: spring-mass & pendulum',        60),
  kp('wbmil-1-2', 7,  'Mechanical waves: transverse, longitudinal & resonance', 45),
  kp('wbmil-1-2', 8,  "Fluid statics: pressure, Pascal's & Archimedes' law",   60),
  kp('wbmil-1-2', 9,  "Fluid dynamics: Bernoulli's equation & continuity",     60),
  kp('wbmil-1-2', 10, 'Thermodynamics: temperature, heat & the four processes',75),
  kp('wbmil-1-2', 11, 'Electrostatics: charge, field & Coulomb interaction',   60),
  kp('wbmil-1-2', 12, 'DC circuits & direct measurement tools',                60),
  kp('wbmil-1-2', 13, 'Magnetic fields: Lorentz force & magnetic induction',   60),
  kp('wbmil-1-2', 14, "Electromagnetic induction: Faraday's & Lenz's laws",    60),
  kp('wbmil-1-2', 15, 'Optics: reflection, refraction, lenses & mirrors',      45),

  // Technical Drawing (wbmil-1-3)
  kp('wbmil-1-3', 1,  'Technical drawing standards: ISO & ASME conventions',  30),
  kp('wbmil-1-3', 2,  'Orthographic projection: first-angle & third-angle',   45),
  kp('wbmil-1-3', 3,  'Multi-view drawings: front, top & side views',         45),
  kp('wbmil-1-3', 4,  'Full & half sectional views & hatching',               60),
  kp('wbmil-1-3', 5,  'Auxiliary views & removed sections',                   45),
  kp('wbmil-1-3', 6,  'Dimensioning: rules, placement & standards',           60),
  kp('wbmil-1-3', 7,  'Geometric dimensioning & tolerancing (GD&T) basics',   75),
  kp('wbmil-1-3', 8,  'Surface finish symbols & roughness specification',      45),
  kp('wbmil-1-3', 9,  'Thread representation & fastener conventions',          60),
  kp('wbmil-1-3', 10, 'Assembly drawings & bill of materials (BOM)',           60),
  kp('wbmil-1-3', 11, 'Welding symbols & pipe drawing conventions',            45),
  kp('wbmil-1-3', 12, 'CAD fundamentals: AutoCAD interface & workflow',        60),
  kp('wbmil-1-3', 13, '2D CAD drafting: layers, blocks & dimensions',          75),
  kp('wbmil-1-3', 14, '3D modeling introduction: SolidWorks / CATIA',          90),
  kp('wbmil-1-3', 15, 'Reading & interpreting engineering drawings',           60),

  // Fundamentals of Mechanics (wbmil-1-4)
  kp('wbmil-1-4', 1,  'Introduction: forces, vectors & free-body diagrams',   30),
  kp('wbmil-1-4', 2,  'Equilibrium of particles in 2D & 3D',                  45),
  kp('wbmil-1-4', 3,  'Moments of forces & couple-moment systems',             45),
  kp('wbmil-1-4', 4,  'Equilibrium of rigid bodies & support reactions',       60),
  kp('wbmil-1-4', 5,  'Distributed loads & resultant force-couple systems',    45),
  kp('wbmil-1-4', 6,  'Analysis of simple trusses: method of joints',          60),
  kp('wbmil-1-4', 7,  'Method of sections for truss analysis',                 60),
  kp('wbmil-1-4', 8,  'Frames & machines: multi-force member analysis',        60),
  kp('wbmil-1-4', 9,  'Centroids of areas, lines & composite shapes',          60),
  kp('wbmil-1-4', 10, 'Moments of inertia & parallel axis theorem',            60),
  kp('wbmil-1-4', 11, 'Friction: static, kinetic & friction angle',            45),
  kp('wbmil-1-4', 12, 'Simple machines & mechanical advantage',                45),
  kp('wbmil-1-4', 13, 'Internal forces: shear & bending moment diagrams',      60),
  kp('wbmil-1-4', 14, 'Introduction to structural analysis concepts',          60),
  kp('wbmil-1-4', 15, 'Review of statics & engineering applications',          45),

  // ══════════════════════════════════════════
  // FMEA — Semester 2
  // ══════════════════════════════════════════

  // Mathematics II (wbmil-2-1)
  kp('wbmil-2-1', 1,  'Eigenvalues, eigenvectors & matrix diagonalization',   75),
  kp('wbmil-2-1', 2,  'Quadratic forms & positive definiteness',               60),
  kp('wbmil-2-1', 3,  'Multivariable functions: partial derivatives & gradient',60),
  kp('wbmil-2-1', 4,  'Directional derivatives & gradient in engineering',     60),
  kp('wbmil-2-1', 5,  'Extrema of multivariable functions',                    60),
  kp('wbmil-2-1', 6,  'Lagrange multipliers & constrained optimization',       75),
  kp('wbmil-2-1', 7,  'Double integrals in Cartesian & polar coordinates',     75),
  kp('wbmil-2-1', 8,  'Triple integrals & change of coordinates',              90),
  kp('wbmil-2-1', 9,  'Line integrals & conservative vector fields',           75),
  kp('wbmil-2-1', 10, 'Surface integrals & the flux integral',                 75),
  kp('wbmil-2-1', 11, "Green's theorem & its applications",                    90),
  kp('wbmil-2-1', 12, 'First-order ODEs: separable & linear with integrating factor',60),
  kp('wbmil-2-1', 13, 'Second-order linear ODEs: homogeneous & particular solutions',75),
  kp('wbmil-2-1', 14, 'Systems of linear ODEs',                                75),
  kp('wbmil-2-1', 15, 'Laplace transform: inversion & engineering applications',90),

  // Chemistry (wbmil-2-2)
  kp('wbmil-2-2', 1,  'Atomic structure: orbitals, electron config & periodicity',45),
  kp('wbmil-2-2', 2,  'Chemical bonding: ionic, covalent & metallic bonds',   60),
  kp('wbmil-2-2', 3,  'Stoichiometry: molar mass, reactions & balancing',      60),
  kp('wbmil-2-2', 4,  'States of matter & gas laws: ideal gas & van der Waals',60),
  kp('wbmil-2-2', 5,  'Solutions: concentration, colligative properties',       45),
  kp('wbmil-2-2', 6,  "Thermochemistry: enthalpy, Hess's law & bond energies", 60),
  kp('wbmil-2-2', 7,  'Chemical kinetics: rate laws & activation energy (Arrhenius)',75),
  kp('wbmil-2-2', 8,  "Chemical equilibrium & Le Chatelier's principle",       60),
  kp('wbmil-2-2', 9,  'Acids, bases & buffer solutions: pH calculations',      60),
  kp('wbmil-2-2', 10, 'Electrochemistry: redox reactions & galvanic cells',    75),
  kp('wbmil-2-2', 11, 'Transition metals & coordination chemistry',            60),
  kp('wbmil-2-2', 12, 'Organic chemistry: functional groups & reaction types', 75),
  kp('wbmil-2-2', 13, 'Polymer chemistry & macromolecular materials',          60),
  kp('wbmil-2-2', 14, 'Corrosion: electrochemical mechanisms & prevention',    60),
  kp('wbmil-2-2', 15, 'Environmental & green chemistry principles',            45),

  // Mechanics I (wbmil-2-3)
  kp('wbmil-2-3', 1,  'Kinematics of particles: position, velocity & acceleration',45),
  kp('wbmil-2-3', 2,  'Curvilinear motion: normal & tangential components',    60),
  kp('wbmil-2-3', 3,  'Relative motion & rotating reference frames',           60),
  kp('wbmil-2-3', 4,  "Newton's laws applied to particle dynamics",            60),
  kp('wbmil-2-3', 5,  'Work-energy theorem for particles',                     60),
  kp('wbmil-2-3', 6,  'Conservation of energy & potential energy functions',   60),
  kp('wbmil-2-3', 7,  'Impulse-momentum theorem for particles',                60),
  kp('wbmil-2-3', 8,  'Direct impact & eccentric collision problems',          45),
  kp('wbmil-2-3', 9,  'Kinematics of rigid bodies: rotation & fixed axis',     75),
  kp('wbmil-2-3', 10, 'Kinematics of rigid bodies: general plane motion',      75),
  kp('wbmil-2-3', 11, 'Newton-Euler equations for rigid body dynamics',        90),
  kp('wbmil-2-3', 12, 'Work-energy methods for rigid bodies',                  75),
  kp('wbmil-2-3', 13, 'Impulse-momentum for rigid bodies & angular momentum',  60),
  kp('wbmil-2-3', 14, 'Free & damped vibrations of single-degree-of-freedom systems',75),
  kp('wbmil-2-3', 15, 'Forced vibrations & resonance phenomena',               75),

  // Materials Science (wbmil-2-4)
  kp('wbmil-2-4', 1,  'Crystal structures: FCC, BCC & HCP lattices',          45),
  kp('wbmil-2-4', 2,  'Crystal defects: point defects, dislocations & grain boundaries',60),
  kp('wbmil-2-4', 3,  'Mechanical properties: strength, stiffness & ductility',60),
  kp('wbmil-2-4', 4,  'Tensile testing & engineering stress-strain curves',    60),
  kp('wbmil-2-4', 5,  'Iron-carbon (Fe-C) binary phase diagram',               90),
  kp('wbmil-2-4', 6,  'Steel heat treatment: annealing, quenching & tempering',75),
  kp('wbmil-2-4', 7,  'Hardness, toughness, fatigue & fracture mechanics intro',60),
  kp('wbmil-2-4', 8,  'Non-ferrous metals: copper, aluminum & titanium alloys',60),
  kp('wbmil-2-4', 9,  'Polymer materials: thermoplastics & thermosets',        60),
  kp('wbmil-2-4', 10, 'Ceramics, glasses & their mechanical behavior',         45),
  kp('wbmil-2-4', 11, 'Composite materials: fiber-matrix systems & properties',75),
  kp('wbmil-2-4', 12, 'Corrosion: types, prevention methods & coatings',       60),
  kp('wbmil-2-4', 13, 'Non-destructive testing: UT, RT, PT & MT methods',     60),
  kp('wbmil-2-4', 14, 'Surface engineering: coatings, case hardening & nitriding',45),
  kp('wbmil-2-4', 15, 'Material selection methodology for engineering design', 60),

  // ══════════════════════════════════════════
  // FMEA — Semester 3
  // ══════════════════════════════════════════

  // Mechanics II (wbmil-3-1)
  kp('wbmil-3-1', 1,  'Kinematics of particles: rectilinear & curvilinear motion',45),
  kp('wbmil-3-1', 2,  'Kinematics of rigid bodies: rotation & angular motion',60),
  kp('wbmil-3-1', 3,  'Relative motion & Coriolis acceleration theorem',      75),
  kp('wbmil-3-1', 4,  "Particle dynamics: d'Alembert's principle",            60),
  kp('wbmil-3-1', 5,  'Dynamics of rigid bodies: mass moment of inertia',     75),
  kp('wbmil-3-1', 6,  'Linear momentum & angular momentum theorems',          60),
  kp('wbmil-3-1', 7,  'Conservation of energy: work & kinetic energy',        60),
  kp('wbmil-3-1', 8,  'Free undamped & damped vibrations',                    75),
  kp('wbmil-3-1', 9,  'Forced vibrations & mechanical resonance',             75),
  kp('wbmil-3-1', 10, "Lagrange's equations of the second kind",              90),
  kp('wbmil-3-1', 11, 'Multi-mass system dynamics',                           75),
  kp('wbmil-3-1', 12, 'Impact & collision mechanics',                         60),
  kp('wbmil-3-1', 13, "Fluid dynamics: Bernoulli's equation",                 60),
  kp('wbmil-3-1', 14, 'Laminar & turbulent flow: Reynolds number criterion',  45),
  kp('wbmil-3-1', 15, 'Flight mechanics: lift & aerodynamic drag forces',     75),

  // Materials Engineering (wbmil-3-2)
  kp('wbmil-3-2', 1,  'Crystal structure of metals: Bravais space lattices',  45),
  kp('wbmil-3-2', 2,  'Crystal lattice defects: dislocations & grain growth', 60),
  kp('wbmil-3-2', 3,  'Mechanical properties: strength, hardness & plasticity',60),
  kp('wbmil-3-2', 4,  'Tensile test & stress-strain diagram interpretation',  60),
  kp('wbmil-3-2', 5,  'Iron-carbon alloys: the Fe-Fe3C phase diagram',        90),
  kp('wbmil-3-2', 6,  'Carbon steels: classification & properties',           60),
  kp('wbmil-3-2', 7,  'Heat treatment: annealing, hardening & tempering',     75),
  kp('wbmil-3-2', 8,  'Alloy steels & aerospace structural applications',     60),
  kp('wbmil-3-2', 9,  'Aluminum alloys: 2xxx & 7xxx series in aerospace',     75),
  kp('wbmil-3-2', 10, 'Titanium alloys: microstructure & high-temp properties',60),
  kp('wbmil-3-2', 11, 'Composite materials: CFRP & GFRP manufacturing',       75),
  kp('wbmil-3-2', 12, 'Polymers: thermoplastics, thermosets & elastomers',    45),
  kp('wbmil-3-2', 13, 'Technical ceramics & advanced glass materials',         45),
  kp('wbmil-3-2', 14, 'Corrosion mechanisms & electrochemical protection',    60),
  kp('wbmil-3-2', 15, 'Non-destructive testing: UT, RT, PT & MT methods',    60),

  // Engineering Thermodynamics (wbmil-3-3)
  kp('wbmil-3-3', 1,  'Thermodynamic system, state variables & properties',   30),
  kp('wbmil-3-3', 2,  'First law of thermodynamics: energy, work & heat',     60),
  kp('wbmil-3-3', 3,  'Quasi-static processes of ideal gases (isobaric, etc)',60),
  kp('wbmil-3-3', 4,  'Ideal gas equation of state & compressibility',        45),
  kp('wbmil-3-3', 5,  'Specific heats: Cp, Cv & ratio of specific heats',     45),
  kp('wbmil-3-3', 6,  'Second law of thermodynamics & entropy',               75),
  kp('wbmil-3-3', 7,  'Carnot cycle & maximum thermal efficiency',            60),
  kp('wbmil-3-3', 8,  'Gas power cycles: Otto, Diesel & Brayton',             90),
  kp('wbmil-3-3', 9,  'Steam power cycle: Rankine cycle analysis',            75),
  kp('wbmil-3-3', 10, 'Gas turbines & jet engines: thermodynamic performance', 90),
  kp('wbmil-3-3', 11, 'Heat transfer: conduction, convection & radiation',    75),
  kp('wbmil-3-3', 12, 'Heat exchangers: LMTD method & effectiveness-NTU',    60),
  kp('wbmil-3-3', 13, 'Compressors & pumps: work & isentropic efficiency',    60),
  kp('wbmil-3-3', 14, 'Combustion: stoichiometry & adiabatic flame temperature',75),
  kp('wbmil-3-3', 15, 'Heat pumps & refrigeration: COP & coefficient of EER', 45),

  // Advanced Mathematics (wbmil-3-4)
  kp('wbmil-3-4', 1,  'Numerical series: convergence tests (ratio, root, integral)',60),
  kp('wbmil-3-4', 2,  'Power series: radius of convergence & term-by-term ops',60),
  kp('wbmil-3-4', 3,  'Taylor & Maclaurin series: expansion of common functions',60),
  kp('wbmil-3-4', 4,  'Multivariable functions: limits & continuity in R2/R3', 45),
  kp('wbmil-3-4', 5,  'Partial derivatives & total differential',              60),
  kp('wbmil-3-4', 6,  'Extrema of multivariable functions: second derivative test',75),
  kp('wbmil-3-4', 7,  'Lagrange multiplier method for constrained problems',   60),
  kp('wbmil-3-4', 8,  'Double integrals & coordinate transformation',          75),
  kp('wbmil-3-4', 9,  'Differential equations: introduction & classification', 45),
  kp('wbmil-3-4', 10, 'First-order ODEs: separable & linear with integrating factor',60),
  kp('wbmil-3-4', 11, 'Second-order linear ODEs with non-zero right-hand side',75),
  kp('wbmil-3-4', 12, 'Laplace transform: properties & transform tables',      75),
  kp('wbmil-3-4', 13, 'Applying Laplace transform to dynamic system models',  60),
  kp('wbmil-3-4', 14, 'Vector calculus in R3: grad, div & curl',              45),
  kp('wbmil-3-4', 15, "Gauss's & Stokes' theorems in engineering applications",60),

  // Strength of Materials I (wbmil-3-5)
  kp('wbmil-3-5', 1,  'Stress & strain: normal, shear & engineering definitions',45),
  kp('wbmil-3-5', 2,  "Hooke's law: Young's modulus & Poisson's ratio",       45),
  kp('wbmil-3-5', 3,  'Tension & compression: bars with variable cross-section',60),
  kp('wbmil-3-5', 4,  'Statically indeterminate bars: force method',          75),
  kp('wbmil-3-5', 5,  'Shear: average shear stress & shear strain',           60),
  kp('wbmil-3-5', 6,  'Torsion of circular shafts: shear stress & angle of twist',60),
  kp('wbmil-3-5', 7,  'Bending: internal shear force & bending moment diagrams',75),
  kp('wbmil-3-5', 8,  'Normal stresses due to pure bending: flexure formula', 60),
  kp('wbmil-3-5', 9,  'Transverse shear stress in beams',                     60),
  kp('wbmil-3-5', 10, "Beam deflections: double integration & Mohr's integral method",75),
  kp('wbmil-3-5', 11, 'Stress state: stress tensor & transformation (Mohr circle)',75),
  kp('wbmil-3-5', 12, 'Failure theories: von Mises (distortion energy) & Tresca',60),
  kp('wbmil-3-5', 13, 'Buckling of slender columns: critical Euler load',     60),
  kp('wbmil-3-5', 14, "Material fatigue: S-N (Wohler) curve & endurance limit",45),
  kp('wbmil-3-5', 15, "Generalized Hooke's law for 3D stress states",         60),

  // ══════════════════════════════════════════
  // FMEA — Semester 4
  // ══════════════════════════════════════════

  // Strength of Materials II (wbmil-4-1)
  kp('wbmil-4-1', 1,  'Unsymmetric bending & oblique bending analysis',       60),
  kp('wbmil-4-1', 2,  'Combined bending & torsion: shaft design',             75),
  kp('wbmil-4-1', 3,  'Thick-walled cylinders & pressure vessel stress',      60),
  kp('wbmil-4-1', 4,  'Thin shells: membrane theory & cylindrical vessels',   60),
  kp('wbmil-4-1', 5,  'Curved beams: circumferential stress distribution',    75),
  kp('wbmil-4-1', 6,  'Thermal stresses: statically determinate & indeterminate',60),
  kp('wbmil-4-1', 7,  'Contact stresses: Hertzian contact theory',            75),
  kp('wbmil-4-1', 8,  'Fatigue design: Goodman & Gerber diagrams',            90),
  kp('wbmil-4-1', 9,  'Fracture mechanics: stress intensity factor & KIC',    90),
  kp('wbmil-4-1', 10, 'Plate bending theory & boundary conditions',           75),
  kp('wbmil-4-1', 11, 'Stability of plates under in-plane compressive loads', 75),
  kp('wbmil-4-1', 12, "Energy methods: Castigliano's theorems",               60),
  kp('wbmil-4-1', 13, 'Virtual work & variational principles in mechanics',    75),
  kp('wbmil-4-1', 14, 'Introduction to FEM: elements, assembly & stiffness',  90),
  kp('wbmil-4-1', 15, 'FEM applications: structural & thermal analysis',       60),

  // Machines & Equipment (wbmil-4-2)
  kp('wbmil-4-2', 1,  'Machine element design: shafts, keys & fits',          60),
  kp('wbmil-4-2', 2,  'Rolling bearings: selection, load rating & fatigue',   60),
  kp('wbmil-4-2', 3,  'Fasteners: bolts, nuts, screws & riveted joints',      45),
  kp('wbmil-4-2', 4,  'Clutches & brakes: friction & design calculations',    60),
  kp('wbmil-4-2', 5,  'Spur & helical gear design: Lewis equation & AGMA',    75),
  kp('wbmil-4-2', 6,  'Bevel & worm gear design & efficiency',                60),
  kp('wbmil-4-2', 7,  'Belt & chain drives: geometry, tension & power',       60),
  kp('wbmil-4-2', 8,  'Springs: compression, extension & torsional design',   60),
  kp('wbmil-4-2', 9,  'Hydraulic systems: actuators, pumps & control valves', 75),
  kp('wbmil-4-2', 10, 'Pneumatic systems & compressed air components',         60),
  kp('wbmil-4-2', 11, 'Reciprocating & rotary compressors: performance',      75),
  kp('wbmil-4-2', 12, 'Turbomachinery: axial & centrifugal pumps & fans',     75),
  kp('wbmil-4-2', 13, 'Heat exchangers: shell-and-tube & plate types',        60),
  kp('wbmil-4-2', 14, 'Vibration isolation & dynamic balancing of rotors',    60),
  kp('wbmil-4-2', 15, 'Condition monitoring & predictive maintenance',         45),

  // Control Systems Fundamentals (wbmil-4-3)
  kp('wbmil-4-3', 1,  'Control systems: open-loop vs closed-loop concepts',   30),
  kp('wbmil-4-3', 2,  'Laplace transform review & transfer function derivation',60),
  kp('wbmil-4-3', 3,  'Block diagram algebra & signal flow graphs',            60),
  kp('wbmil-4-3', 4,  'Feedback control: sensitivity & closed-loop response', 60),
  kp('wbmil-4-3', 5,  'Steady-state error analysis & system type classification',60),
  kp('wbmil-4-3', 6,  'Transient response: step, ramp & impulse inputs',       75),
  kp('wbmil-4-3', 7,  'Routh-Hurwitz stability criterion',                     60),
  kp('wbmil-4-3', 8,  'Root locus method & design rules',                      75),
  kp('wbmil-4-3', 9,  'Frequency response: Bode magnitude & phase plots',      75),
  kp('wbmil-4-3', 10, 'Nyquist stability criterion & gain/phase margins',      75),
  kp('wbmil-4-3', 11, 'PID controllers: tuning methods (Ziegler-Nichols)',     75),
  kp('wbmil-4-3', 12, 'Lead, lag & lead-lag compensator design',               75),
  kp('wbmil-4-3', 13, 'State-space representation & state equations',          60),
  kp('wbmil-4-3', 14, 'Controllability, observability & pole placement',       60),
  kp('wbmil-4-3', 15, 'Introduction to digital & sampled-data control',        60),

  // Machining Technology (wbmil-4-4)
  kp('wbmil-4-4', 1,  'Manufacturing processes overview & classification',     30),
  kp('wbmil-4-4', 2,  'Turning: cutting parameters, forces & chip formation',  60),
  kp('wbmil-4-4', 3,  'Milling: peripheral & face milling, cutting conditions',60),
  kp('wbmil-4-4', 4,  'Drilling, boring & reaming: tolerances & tool design',  45),
  kp('wbmil-4-4', 5,  'Grinding: abrasive machining & surface quality',        60),
  kp('wbmil-4-4', 6,  'Cutting tool materials: HSS, carbide & ceramic inserts',45),
  kp('wbmil-4-4', 7,  'Machinability, surface integrity & residual stresses',  60),
  kp('wbmil-4-4', 8,  'Arc welding processes: SMAW, GMAW & GTAW',             60),
  kp('wbmil-4-4', 9,  'Advanced joining: friction stir welding & laser welding',60),
  kp('wbmil-4-4', 10, 'Sheet metal forming: bending, deep drawing & stamping', 60),
  kp('wbmil-4-4', 11, 'Casting processes: sand casting, die casting & investment',60),
  kp('wbmil-4-4', 12, 'Bulk deformation: forging, rolling & extrusion',        60),
  kp('wbmil-4-4', 13, 'CNC machining: G-code programming & toolpath planning', 75),
  kp('wbmil-4-4', 14, 'Additive manufacturing: FDM, SLS & metal AM processes', 60),
  kp('wbmil-4-4', 15, 'Quality control: SPC, tolerances & CMM inspection',     60),

  // ══════════════════════════════════════════
  // FoM — Semester 1
  // ══════════════════════════════════════════

  // General Mathematics (wz-1-1)
  kp('wz-1-1', 1,  'Sets, logic & mathematical proof techniques',             30),
  kp('wz-1-1', 2,  'Functions: classification, composition & inverses',       45),
  kp('wz-1-1', 3,  'Limits & continuity in economic models',                 60),
  kp('wz-1-1', 4,  'Derivatives: rules & marginal analysis in economics',    60),
  kp('wz-1-1', 5,  'Optimization: unconstrained & economic applications',    75),
  kp('wz-1-1', 6,  'Integration: consumer surplus & total cost functions',   60),
  kp('wz-1-1', 7,  'Applications of integration in economic analysis',        75),
  kp('wz-1-1', 8,  'Matrices & systems of linear equations',                 60),
  kp('wz-1-1', 9,  'Determinants, Cramer rule & economic equilibrium',       45),
  kp('wz-1-1', 10, 'Linear programming: graphical & simplex method',         60),
  kp('wz-1-1', 11, 'Sequences & financial mathematics: compound interest',   60),
  kp('wz-1-1', 12, 'Probability: sample space, events & rules',              60),
  kp('wz-1-1', 13, 'Discrete & continuous probability distributions',        75),
  kp('wz-1-1', 14, 'Statistical inference: confidence intervals & hypothesis testing',75),
  kp('wz-1-1', 15, 'Regression analysis & economic forecasting',             60),

  // Microeconomics (wz-1-2)
  kp('wz-1-2', 1,  'Introduction to economics: scarcity & opportunity cost', 30),
  kp('wz-1-2', 2,  'Supply & demand: market equilibrium & price mechanism',  60),
  kp('wz-1-2', 3,  'Elasticity: price, income & cross-price elasticities',   60),
  kp('wz-1-2', 4,  'Consumer theory: utility functions & indifference curves',75),
  kp('wz-1-2', 5,  'Budget constraints & consumer choice optimization',       60),
  kp('wz-1-2', 6,  'Production theory: production function & isoquants',     60),
  kp('wz-1-2', 7,  'Costs: short-run & long-run cost curves',                60),
  kp('wz-1-2', 8,  'Perfect competition: profit maximization & shutdown rule',75),
  kp('wz-1-2', 9,  'Monopoly: pricing, deadweight loss & regulation',        75),
  kp('wz-1-2', 10, 'Monopolistic competition & oligopoly models',             60),
  kp('wz-1-2', 11, 'Game theory: Nash equilibrium & strategic interaction',   60),
  kp('wz-1-2', 12, 'Factor markets: labor supply, demand & wage determination',60),
  kp('wz-1-2', 13, 'Market failures: externalities, public goods & common resources',60),
  kp('wz-1-2', 14, 'Information asymmetry: adverse selection & moral hazard', 60),
  kp('wz-1-2', 15, 'International trade: comparative advantage & trade policy',45),

  // Fundamentals of Management (wz-1-3)
  kp('wz-1-3', 1,  'Management concepts: functions, roles & skills',         30),
  kp('wz-1-3', 2,  'History of management thought: classical & modern',      30),
  kp('wz-1-3', 3,  'Strategic planning: vision, mission & goal setting',     60),
  kp('wz-1-3', 4,  'Decision-making: models, tools & cognitive biases',      60),
  kp('wz-1-3', 5,  'Organizational structures: functional, divisional & matrix',60),
  kp('wz-1-3', 6,  'Leadership: trait, behavioral & contingency theories',   60),
  kp('wz-1-3', 7,  "Motivation theories: Maslow, Herzberg & Vroom's expectancy",60),
  kp('wz-1-3', 8,  'Organizational communication & information flow',         45),
  kp('wz-1-3', 9,  'Control systems: standards, measurement & corrective action',60),
  kp('wz-1-3', 10, 'Human resource management: recruitment & performance',    60),
  kp('wz-1-3', 11, 'Organizational culture, change management & resistance', 60),
  kp('wz-1-3', 12, 'Corporate social responsibility & business ethics',       45),
  kp('wz-1-3', 13, 'Strategic analysis: SWOT, PEST & Porter five forces',    75),
  kp('wz-1-3', 14, 'Innovation management & entrepreneurship',                45),
  kp('wz-1-3', 15, 'Contemporary management challenges & global trends',      30),

  // Foreign Languages I (wz-1-4)
  kp('wz-1-4', 1,  'Business vocabulary & professional English terminology', 30),
  kp('wz-1-4', 2,  'Reading business reports, case studies & articles',      45),
  kp('wz-1-4', 3,  'Grammar: tenses, passive voice & sentence structures',   45),
  kp('wz-1-4', 4,  'Business writing: professional emails & correspondence', 45),
  kp('wz-1-4', 5,  'Listening: business meetings & negotiations',             30),
  kp('wz-1-4', 6,  'Speaking: presentations, pitches & negotiations',         60),
  kp('wz-1-4', 7,  'Report writing: structure, tone & clarity',              60),
  kp('wz-1-4', 8,  'Academic & professional English registers',               45),
  kp('wz-1-4', 9,  'Business communication strategies & cross-cultural skills',45),
  kp('wz-1-4', 10, 'Economics & management vocabulary in context',            45),
  kp('wz-1-4', 11, 'Grammar: conditionals, modals & professional language',  45),
  kp('wz-1-4', 12, 'Reading comprehension: business case analysis',          30),
  kp('wz-1-4', 13, 'Oral presentations: business topics & Q&A handling',     60),
  kp('wz-1-4', 14, 'Writing: executive summaries & business proposals',       45),
  kp('wz-1-4', 15, 'Exam preparation & vocabulary consolidation',             30),

  // ══════════════════════════════════════════
  // FoM — Semester 3
  // ══════════════════════════════════════════

  // Management Accounting (wz-3-1)
  kp('wz-3-1', 1,  'Cost concepts: classification & accounting systems',      45),
  kp('wz-3-1', 2,  'Fixed & variable costs: CVP (cost-volume-profit) analysis',60),
  kp('wz-3-1', 3,  'Break-even point: quantity & revenue BEP calculations',  60),
  kp('wz-3-1', 4,  'Budgeting: types of budgets & the budget creation process',75),
  kp('wz-3-1', 5,  'Operational controlling: variance analysis & reporting',  60),
  kp('wz-3-1', 6,  'Cost calculation: job-order costing & process costing',   75),
  kp('wz-3-1', 7,  'Activity-Based Costing (ABC) & activity cost drivers',   90),
  kp('wz-3-1', 8,  'Pricing decisions: full cost vs. marginal (contribution) costing',60),
  kp('wz-3-1', 9,  'Investment appraisal: NPV, IRR & discounted payback period',90),
  kp('wz-3-1', 10, 'Balanced Scorecard: four perspectives & KPI selection',   75),
  kp('wz-3-1', 11, 'Enterprise value management: EVA & value-based mgmt',    60),
  kp('wz-3-1', 12, 'Management reporting: structure, format & dashboards',    45),
  kp('wz-3-1', 13, 'Risk in decisions: sensitivity & scenario analysis',      75),
  kp('wz-3-1', 14, 'Transfer pricing in multinational corporate groups',      60),
  kp('wz-3-1', 15, 'Lean accounting & value stream performance metrics',      60),

  // Corporate Finance (wz-3-2)
  kp('wz-3-2', 1,  'Goals & functions of financial management',               30),
  kp('wz-3-2', 2,  'Financial statements: balance sheet, P&L & cash flow',   75),
  kp('wz-3-2', 3,  'Ratio analysis: liquidity, profitability & leverage ratios',75),
  kp('wz-3-2', 4,  'Time value of money: PV, FV, NPV & annuity formulas',    60),
  kp('wz-3-2', 5,  'Bond valuation & yield-to-maturity calculations',         60),
  kp('wz-3-2', 6,  'Cost of capital: WACC & its components',                  75),
  kp('wz-3-2', 7,  'Capital structure theory: Modigliani-Miller propositions', 60),
  kp('wz-3-2', 8,  'Working capital: receivables, inventory & cash management',60),
  kp('wz-3-2', 9,  'Short-term financing: overdrafts, loans & factoring',     45),
  kp('wz-3-2', 10, 'Equity & debt issuance: IPO, seasoned offerings & bonds', 60),
  kp('wz-3-2', 11, 'Dividend policy: relevance, signaling & payout ratios',   45),
  kp('wz-3-2', 12, 'FX & interest rate risk management: hedging strategies',  75),
  kp('wz-3-2', 13, 'Derivatives: options, futures, forwards & swaps intro',   60),
  kp('wz-3-2', 14, 'Financial restructuring, M&A & corporate control',        60),
  kp('wz-3-2', 15, 'ESG investing & sustainable finance frameworks',           45),

  // Marketing (wz-3-3)
  kp('wz-3-3', 1,  'Marketing fundamentals: definitions & market orientations',30),
  kp('wz-3-3', 2,  "Marketing environment: PEST analysis & Porter's 5 forces", 60),
  kp('wz-3-3', 3,  'Market research: primary & secondary methods & process',  60),
  kp('wz-3-3', 4,  'Segmentation, targeting & positioning (STP framework)',   60),
  kp('wz-3-3', 5,  'Product decisions: life cycle, portfolio & BCG matrix',   75),
  kp('wz-3-3', 6,  'Brand management: brand equity & brand architecture',     60),
  kp('wz-3-3', 7,  'Pricing strategies: cost-plus, competition & value-based',60),
  kp('wz-3-3', 8,  'Distribution channels: direct, indirect & omnichannel',   45),
  kp('wz-3-3', 9,  'Promotion mix: advertising, PR, sales promotion & direct',60),
  kp('wz-3-3', 10, 'Advertising & PR: campaign planning & media selection',   60),
  kp('wz-3-3', 11, 'Digital marketing: SEO, SEM, social media & content',     75),
  kp('wz-3-3', 12, 'B2B vs B2C marketing: key differences & strategies',      45),
  kp('wz-3-3', 13, 'CRM: customer lifetime value & loyalty programs',         60),
  kp('wz-3-3', 14, 'Global marketing: standardization vs. localization',       45),
  kp('wz-3-3', 15, 'Marketing ethics & social responsibility',                 30),

  // Business Law (wz-3-4)
  kp('wz-3-4', 1,  'Legal systems: sources of law & hierarchy of norms',     30),
  kp('wz-3-4', 2,  'Civil law: legal persons, capacity & representation',     45),
  kp('wz-3-4', 3,  'Contract law: formation, terms & types of contracts',     60),
  kp('wz-3-4', 4,  'Contractual & tortious liability: breach & remedies',     60),
  kp('wz-3-4', 5,  'Forms of business activity: sole trader to corporation', 60),
  kp('wz-3-4', 6,  'Commercial companies: limited liability & joint-stock',   75),
  kp('wz-3-4', 7,  'Company registration: court register & ongoing obligations',45),
  kp('wz-3-4', 8,  'Labor law: employment contracts, rights & obligations',   75),
  kp('wz-3-4', 9,  'Public procurement law & tender procedures',              60),
  kp('wz-3-4', 10, 'Intellectual property: copyright, patents & trademarks',  60),
  kp('wz-3-4', 11, 'Data protection: GDPR principles & compliance',           60),
  kp('wz-3-4', 12, 'Tax law basics: VAT, corporate income tax & personal tax',75),
  kp('wz-3-4', 13, 'Insolvency law & business restructuring procedures',       45),
  kp('wz-3-4', 14, 'Alternative dispute resolution: arbitration & mediation', 30),
  kp('wz-3-4', 15, 'EU law: internal market freedoms & harmonization',         45),

  // ══════════════════════════════════════════════════════════════════
  // FEECS – EE Direction subjects
  // ══════════════════════════════════════════════════════════════════

  // Power Electronics (weii-ee-4-1)
  kp('weii-ee-4-1', 1,  'Power semiconductor devices: diodes, thyristors & IGBTs',   60),
  kp('weii-ee-4-1', 2,  'Rectifiers: uncontrolled & phase-controlled topologies',     60),
  kp('weii-ee-4-1', 3,  'DC-DC converters: buck, boost & buck-boost topologies',      75),
  kp('weii-ee-4-1', 4,  'Isolated DC-DC converters: flyback, forward & full bridge',  75),
  kp('weii-ee-4-1', 5,  'Inverters: single-phase & three-phase bridge configurations',75),
  kp('weii-ee-4-1', 6,  'PWM techniques: SPWM, SVM & hysteresis control',            60),
  kp('weii-ee-4-1', 7,  'Switching losses & thermal management of power devices',     60),
  kp('weii-ee-4-1', 8,  'EMC in power converters: filtering & shielding',             45),
  kp('weii-ee-4-1', 9,  'Power factor correction: passive & active PFC circuits',     60),
  kp('weii-ee-4-1', 10, 'AC voltage controllers & cycloconverters',                   45),
  kp('weii-ee-4-1', 11, 'Switch-mode power supplies: design & regulation',            75),
  kp('weii-ee-4-1', 12, 'Gate driver circuits & isolation techniques',                45),
  kp('weii-ee-4-1', 13, 'Simulation of power circuits with PSIM/LTspice',             60),
  kp('weii-ee-4-1', 14, 'Battery charging circuits & battery management systems',     60),
  kp('weii-ee-4-1', 15, 'Power electronics in renewable energy applications',         60),

  // Electric Machines (weii-ee-4-2)
  kp('weii-ee-4-2', 1,  'Magnetic circuits: flux, MMF & reluctance',                 45),
  kp('weii-ee-4-2', 2,  'Transformers: equivalent circuit & regulation',             60),
  kp('weii-ee-4-2', 3,  'Three-phase transformers: connections & phasor groups',     60),
  kp('weii-ee-4-2', 4,  'DC machines: types, commutation & speed control',           75),
  kp('weii-ee-4-2', 5,  'Induction motor: construction & rotating magnetic field',   60),
  kp('weii-ee-4-2', 6,  'Induction motor: equivalent circuit & torque-speed curve',  75),
  kp('weii-ee-4-2', 7,  'Starting & speed control of induction motors',              60),
  kp('weii-ee-4-2', 8,  'Synchronous generators: construction & excitation',         60),
  kp('weii-ee-4-2', 9,  'Synchronous motor: reluctance torque & salient poles',      60),
  kp('weii-ee-4-2', 10, 'Permanent magnet motors: BLDC & PMSM',                      60),
  kp('weii-ee-4-2', 11, 'Stepper motors & switched reluctance motors',               45),
  kp('weii-ee-4-2', 12, 'Motor efficiency: IE classes & energy labeling',            30),
  kp('weii-ee-4-2', 13, 'Thermal modeling & cooling of electrical machines',         45),
  kp('weii-ee-4-2', 14, 'Testing & measurement of machine parameters',               60),
  kp('weii-ee-4-2', 15, 'Electric machines in EV & hybrid vehicle drivetrains',      60),

  // Control Systems I (weii-ee-4-3)
  kp('weii-ee-4-3', 1,  'Control system concepts: open-loop vs closed-loop',         30),
  kp('weii-ee-4-3', 2,  'Mathematical models: transfer functions & state space',     60),
  kp('weii-ee-4-3', 3,  'Block diagrams: reduction rules & signal flow graphs',      60),
  kp('weii-ee-4-3', 4,  'Time-domain analysis: step response & transient specs',     60),
  kp('weii-ee-4-3', 5,  'Stability: characteristic equation & Routh-Hurwitz',        75),
  kp('weii-ee-4-3', 6,  'Root locus: construction rules & design guidelines',        75),
  kp('weii-ee-4-3', 7,  'Frequency response: Bode plots & gain/phase margins',       75),
  kp('weii-ee-4-3', 8,  'Nyquist stability criterion & Nyquist plots',               75),
  kp('weii-ee-4-3', 9,  'PID controllers: tuning methods & practical issues',        75),
  kp('weii-ee-4-3', 10, 'Compensators: lead, lag & lead-lag design',                 60),
  kp('weii-ee-4-3', 11, 'Digital control: z-transform & sampled-data systems',       75),
  kp('weii-ee-4-3', 12, 'Discrete PID & digital filters implementation',             60),
  kp('weii-ee-4-3', 13, 'State-space design: pole placement & observer design',      75),
  kp('weii-ee-4-3', 14, 'Introduction to optimal control: LQR',                      60),
  kp('weii-ee-4-3', 15, 'MATLAB/Simulink modeling & simulation',                     60),

  // Electrical Measurement Techniques (weii-ee-4-4)
  kp('weii-ee-4-4', 1,  'Measurement fundamentals: accuracy, precision & error',    30),
  kp('weii-ee-4-4', 2,  'Analog instruments: moving coil, moving iron & electrodynamic',45),
  kp('weii-ee-4-4', 3,  'Digital multimeters: ADC architecture & auto-ranging',     45),
  kp('weii-ee-4-4', 4,  'Oscilloscopes: probes, triggering & sampling modes',       60),
  kp('weii-ee-4-4', 5,  'Power measurement: single-phase & three-phase methods',    60),
  kp('weii-ee-4-4', 6,  'Resistance & impedance measurement: bridge circuits',      60),
  kp('weii-ee-4-4', 7,  'Current transformers & voltage transformers',              45),
  kp('weii-ee-4-4', 8,  'Energy meters: electromechanical & electronic types',     45),
  kp('weii-ee-4-4', 9,  'Spectrum analyzers & signal analysis in frequency domain', 60),
  kp('weii-ee-4-4', 10, 'Signal conditioning: amplifiers, filters & isolation',    45),
  kp('weii-ee-4-4', 11, 'Data acquisition systems: DAQ cards & sampling theory',   60),
  kp('weii-ee-4-4', 12, 'Sensor types: temperature, pressure & position sensors',  45),
  kp('weii-ee-4-4', 13, 'Calibration procedures & traceability to standards',      30),
  kp('weii-ee-4-4', 14, 'Virtual instrumentation with LabVIEW/Python',             60),
  kp('weii-ee-4-4', 15, 'Measurement uncertainty: Type A & Type B evaluation',     45),

  // Power Systems Analysis (weii-ee-5-1)
  kp('weii-ee-5-1', 1,  'Power system structure: generation, transmission & distribution',45),
  kp('weii-ee-5-1', 2,  'Per-unit system: normalization & base quantities',         60),
  kp('weii-ee-5-1', 3,  'Transmission line models: short, medium & long line',     75),
  kp('weii-ee-5-1', 4,  'Load flow analysis: Gauss-Seidel & Newton-Raphson methods',90),
  kp('weii-ee-5-1', 5,  'Power flow in complex networks: bus admittance matrix',   75),
  kp('weii-ee-5-1', 6,  'Voltage control: reactive power compensation & FACTS',    60),
  kp('weii-ee-5-1', 7,  'Symmetrical components: positive, negative & zero seq.',  75),
  kp('weii-ee-5-1', 8,  'Fault analysis: three-phase & unsymmetrical faults',      90),
  kp('weii-ee-5-1', 9,  'Power system stability: steady-state & transient',        75),
  kp('weii-ee-5-1', 10, 'Equal area criterion & swing equation',                   60),
  kp('weii-ee-5-1', 11, 'Protection systems: overcurrent, distance & differential',75),
  kp('weii-ee-5-1', 12, 'Relay coordination & protection selectivity',             60),
  kp('weii-ee-5-1', 13, 'Power system harmonics: sources, effects & mitigation',   60),
  kp('weii-ee-5-1', 14, 'Economic dispatch & optimal power flow',                  75),
  kp('weii-ee-5-1', 15, 'PSS/E & PSCAD simulation tools',                          60),

  // Electric Drives & Applications (weii-ee-5-2)
  kp('weii-ee-5-2', 1,  'Drive system components: motor, converter & load',        45),
  kp('weii-ee-5-2', 2,  'DC drive: armature voltage & field weakening control',    60),
  kp('weii-ee-5-2', 3,  'Variable-frequency drives (VFDs): V/f & vector control',  75),
  kp('weii-ee-5-2', 4,  'Field-oriented control (FOC) of induction motors',        90),
  kp('weii-ee-5-2', 5,  'Direct torque control (DTC) principles & implementation', 75),
  kp('weii-ee-5-2', 6,  'PMSM drives: sensorless control & MTPA strategy',        75),
  kp('weii-ee-5-2', 7,  'Servo drives: position, velocity & torque loops',         75),
  kp('weii-ee-5-2', 8,  'Regenerative braking & energy recovery',                  60),
  kp('weii-ee-5-2', 9,  'Drive protection: overcurrent, overvoltage & thermal',    45),
  kp('weii-ee-5-2', 10, 'Electric vehicle drivetrains: topology & energy flow',    60),
  kp('weii-ee-5-2', 11, 'Elevator & crane drive applications',                     45),
  kp('weii-ee-5-2', 12, 'Pump & fan drives: energy savings with VFD',              45),
  kp('weii-ee-5-2', 13, 'CNC machine tool drives: precision & dynamic response',  60),
  kp('weii-ee-5-2', 14, 'Drive commissioning, diagnostics & fault finding',        60),
  kp('weii-ee-5-2', 15, 'Drive system simulation in MATLAB/Simulink',              60),

  // Renewable Energy Engineering (weii-ee-5-3)
  kp('weii-ee-5-3', 1,  'Solar radiation: irradiance, insolation & sun path',      45),
  kp('weii-ee-5-3', 2,  'Photovoltaic cells: I-V characteristics & PV modeling',  60),
  kp('weii-ee-5-3', 3,  'PV systems: grid-tied, off-grid & hybrid configurations',60),
  kp('weii-ee-5-3', 4,  'MPPT algorithms: Perturb & Observe, incremental conductance',60),
  kp('weii-ee-5-3', 5,  'Wind turbine aerodynamics & Betz limit',                  60),
  kp('weii-ee-5-3', 6,  'Wind generator types: DFIG & permanent magnet',           60),
  kp('weii-ee-5-3', 7,  'Wind power plant electrical systems & grid connection',  60),
  kp('weii-ee-5-3', 8,  'Hydropower: turbine types & small hydro systems',         45),
  kp('weii-ee-5-3', 9,  'Biomass & biogas energy conversion',                      45),
  kp('weii-ee-5-3', 10, 'Geothermal & ocean energy systems',                       45),
  kp('weii-ee-5-3', 11, 'Energy storage: batteries, pumped hydro & flywheels',    60),
  kp('weii-ee-5-3', 12, 'Grid integration of renewables: challenges & solutions', 75),
  kp('weii-ee-5-3', 13, 'Levelized cost of energy (LCOE) & economic analysis',   60),
  kp('weii-ee-5-3', 14, 'EU energy policy & renewable energy directives',          30),
  kp('weii-ee-5-3', 15, 'Design of a renewable energy micro-grid project',         90),

  // Power Quality & Protection (weii-ee-5-4)
  kp('weii-ee-5-4', 1,  'Power quality indices: THD, flicker & unbalance',        45),
  kp('weii-ee-5-4', 2,  'Voltage sags, swells & interruptions: causes & effects', 60),
  kp('weii-ee-5-4', 3,  'Passive harmonic filters: design & resonance avoidance', 60),
  kp('weii-ee-5-4', 4,  'Active power filters & STATCOM principles',              75),
  kp('weii-ee-5-4', 5,  'Power protection: fuses, MCBs & their coordination',     45),
  kp('weii-ee-5-4', 6,  'Earth fault protection: TN, TT & IT systems',            60),
  kp('weii-ee-5-4', 7,  'Differential protection of transformers & generators',   75),
  kp('weii-ee-5-4', 8,  'Distance relays: zone settings & fault location',        75),
  kp('weii-ee-5-4', 9,  'Bus bar protection & breaker failure detection',         45),
  kp('weii-ee-5-4', 10, 'SCADA & substation automation systems',                  60),
  kp('weii-ee-5-4', 11, 'IEC 61850 communication standard for protection',        60),
  kp('weii-ee-5-4', 12, 'Arc flash hazard analysis & mitigation',                 45),
  kp('weii-ee-5-4', 13, 'Lightning protection & surge arrester selection',         45),
  kp('weii-ee-5-4', 14, 'EN 50160 power quality standard & compliance testing',   45),
  kp('weii-ee-5-4', 15, 'Power quality audit using power analyzers',              60),

  // Smart Grid Technologies (weii-ee-6-1)
  kp('weii-ee-6-1', 1,  'Smart grid architecture: layers & key technologies',     45),
  kp('weii-ee-6-1', 2,  'Advanced metering infrastructure (AMI) & smart meters', 60),
  kp('weii-ee-6-1', 3,  'Demand response: programs, incentives & load curtailment',60),
  kp('weii-ee-6-1', 4,  'Distribution automation: FDIR & volt-var optimization', 75),
  kp('weii-ee-6-1', 5,  'Energy management systems (EMS) & SCADA integration',   60),
  kp('weii-ee-6-1', 6,  'FACTS devices: SVC, STATCOM & SSSC in smart grids',     75),
  kp('weii-ee-6-1', 7,  'Distributed energy resources (DER) management systems', 60),
  kp('weii-ee-6-1', 8,  'Microgrids: islanded & grid-connected operation modes', 75),
  kp('weii-ee-6-1', 9,  'Vehicle-to-grid (V2G) technology & EV grid integration',60),
  kp('weii-ee-6-1', 10, 'Communication protocols: IEC 61968, IEC 61970 & CIM',   60),
  kp('weii-ee-6-1', 11, 'Cybersecurity in smart grid systems',                    60),
  kp('weii-ee-6-1', 12, 'Big data analytics & AI in smart grid operations',      75),
  kp('weii-ee-6-1', 13, 'Blockchain in energy trading & peer-to-peer markets',   45),
  kp('weii-ee-6-1', 14, 'Smart grid pilot projects & case studies',               45),
  kp('weii-ee-6-1', 15, 'EU smart grid regulatory framework & standards',         30),

  // High Voltage Engineering (weii-ee-6-2)
  kp('weii-ee-6-2', 1,  'Electric fields in dielectric media: field calculation',  60),
  kp('weii-ee-6-2', 2,  'Gas insulation: breakdown mechanisms in air & SF6',       75),
  kp('weii-ee-6-2', 3,  'Liquid & solid insulation: properties & aging',           60),
  kp('weii-ee-6-2', 4,  'Overvoltage phenomena: lightning & switching surges',    75),
  kp('weii-ee-6-2', 5,  'Surge arrester selection & insulation coordination',     75),
  kp('weii-ee-6-2', 6,  'High-voltage transformers: insulation design & testing', 75),
  kp('weii-ee-6-2', 7,  'GIS switchgear: construction & maintenance',             60),
  kp('weii-ee-6-2', 8,  'High-voltage cables: types, installation & jointing',    60),
  kp('weii-ee-6-2', 9,  'HV test equipment: impulse generators & test transformers',75),
  kp('weii-ee-6-2', 10, 'Partial discharge measurement & interpretation',          75),
  kp('weii-ee-6-2', 11, 'Dielectric loss & tan delta measurement',                 60),
  kp('weii-ee-6-2', 12, 'HVDC transmission: LCC & VSC converter stations',         90),
  kp('weii-ee-6-2', 13, 'Electrostatic precipitators & corona discharge',          45),
  kp('weii-ee-6-2', 14, 'IEC 60060 high-voltage test standards',                   45),
  kp('weii-ee-6-2', 15, 'Occupational safety regulations in HV environments',      30),

  // Power Engineering Project (weii-ee-6-3)
  kp('weii-ee-6-3', 1,  'Project scoping: power system design brief & constraints', 60),
  kp('weii-ee-6-3', 2,  'Load estimation & demand forecasting methods',             75),
  kp('weii-ee-6-3', 3,  'Single-line diagram design & equipment selection',         75),
  kp('weii-ee-6-3', 4,  'Short-circuit level calculation & equipment ratings',      75),
  kp('weii-ee-6-3', 5,  'Cable sizing, busbar design & voltage drop calculation',   75),
  kp('weii-ee-6-3', 6,  'Switchgear & protection relay selection',                  60),
  kp('weii-ee-6-3', 7,  'Earthing system design: resistivity measurement & layout', 60),
  kp('weii-ee-6-3', 8,  'Technical documentation: drawings & specifications',       60),
  kp('weii-ee-6-3', 9,  'Cost estimation & bill of materials preparation',          45),
  kp('weii-ee-6-3', 10, 'Software tools: ETAP, PowerFactory & AutoCAD Electrical', 75),
  kp('weii-ee-6-3', 11, 'Environmental impact assessment for power installations',  45),
  kp('weii-ee-6-3', 12, 'Regulatory approvals & grid connection requirements',      45),
  kp('weii-ee-6-3', 13, 'Project management: Gantt chart, WBS & risk register',    60),
  kp('weii-ee-6-3', 14, 'Technical presentation & design review',                   60),
  kp('weii-ee-6-3', 15, 'Lessons learned & project retrospective',                   30),

  // EE Specialization – Power Engineering
  kp('weii-ee-pow-5-1', 1,  'Advanced power converters: multi-level topologies',    75),
  kp('weii-ee-pow-5-1', 2,  'Wide bandgap semiconductors: SiC & GaN devices',       60),
  kp('weii-ee-pow-5-1', 3,  'Resonant & soft-switching converters',                  75),
  kp('weii-ee-pow-5-1', 4,  'Grid-tied inverter control: LCL filter & PLL',         90),
  kp('weii-ee-pow-5-1', 5,  'Active front-end rectifiers & unity power factor',     75),
  kp('weii-ee-pow-5-1', 6,  'Power hardware-in-the-loop (PHIL) testing',             60),
  kp('weii-ee-pow-5-1', 7,  'High-efficiency converter design for data centers',    60),
  kp('weii-ee-pow-5-1', 8,  'Electric vehicle fast-charging station design',         75),
  kp('weii-ee-pow-5-1', 9,  'Thermal simulation & heat sink optimization',           60),
  kp('weii-ee-pow-5-1', 10, 'EMC compliance testing for power equipment',            60),
  kp('weii-ee-pow-5-1', 11, 'Modular multilevel converters (MMC) for HVDC',          90),
  kp('weii-ee-pow-5-1', 12, 'Digital control with DSP & FPGA for power converters', 75),
  kp('weii-ee-pow-5-1', 13, 'Energy storage converter topologies: battery & SC',    60),
  kp('weii-ee-pow-5-1', 14, 'Standards & certifications: CE marking & IEC 62477',   45),
  kp('weii-ee-pow-5-1', 15, 'Capstone: design & build a 1 kW converter prototype',  120),

  kp('weii-ee-pow-5-2', 1,  'Power grid topology: radial, ring & meshed',           45),
  kp('weii-ee-pow-5-2', 2,  'Transmission capacity & Ferranti effect',              60),
  kp('weii-ee-pow-5-2', 3,  'Reactive power in transmission: compensation methods', 60),
  kp('weii-ee-pow-5-2', 4,  'Flexible AC transmission systems (FACTS): SVC & SSSC', 90),
  kp('weii-ee-pow-5-2', 5,  'Distribution system design: MV & LV network planning', 75),
  kp('weii-ee-pow-5-2', 6,  'Protection coordination in distribution grids',        60),
  kp('weii-ee-pow-5-2', 7,  'Power line carrier (PLC) & DLC communication',         45),
  kp('weii-ee-pow-5-2', 8,  'Grid simulation with PowerFactory & EMTP-RV',          75),
  kp('weii-ee-pow-5-2', 9,  'Reliability indices: SAIDI, SAIFI & CAIDI',            45),
  kp('weii-ee-pow-5-2', 10, 'Smart substation design & IEC 61850 implementation',   60),
  kp('weii-ee-pow-5-2', 11, 'Offshore wind farm grid connection design',             75),
  kp('weii-ee-pow-5-2', 12, 'Congestion management & redispatch in deregulated grids',60),
  kp('weii-ee-pow-5-2', 13, 'Network planning under uncertainty with Monte Carlo',   75),
  kp('weii-ee-pow-5-2', 14, 'Power system restoration after major outages',          60),
  kp('weii-ee-pow-5-2', 15, 'Design project: 110 kV substation single-line diagram', 90),

  kp('weii-ee-pow-6-1', 1,  'Battery technologies: Li-ion, NMC, LFP & solid-state', 60),
  kp('weii-ee-pow-6-1', 2,  'Battery pack design: cell balancing & BMS architecture',75),
  kp('weii-ee-pow-6-1', 3,  'Supercapacitors: characteristics & hybrid storage',    60),
  kp('weii-ee-pow-6-1', 4,  'Pumped hydro storage: sizing & grid services',         60),
  kp('weii-ee-pow-6-1', 5,  'Compressed air & flywheel energy storage',             45),
  kp('weii-ee-pow-6-1', 6,  'Hydrogen production: electrolysis & fuel cells',       75),
  kp('weii-ee-pow-6-1', 7,  'Power-to-gas technology & seasonal storage',           60),
  kp('weii-ee-pow-6-1', 8,  'Thermal energy storage: sensible & latent heat',       45),
  kp('weii-ee-pow-6-1', 9,  'Techno-economic analysis of storage projects',         75),
  kp('weii-ee-pow-6-1', 10, 'Grid ancillary services: FCR, FFR & aFRR',             60),
  kp('weii-ee-pow-6-1', 11, 'Revenue stacking & business models for storage',       60),
  kp('weii-ee-pow-6-1', 12, 'Safety standards for energy storage: IEC 62619',       45),
  kp('weii-ee-pow-6-1', 13, 'Simulation of storage dispatch with Python',           75),
  kp('weii-ee-pow-6-1', 14, 'Policy & market frameworks for energy storage',        30),
  kp('weii-ee-pow-6-1', 15, 'Capstone: techno-economic study of a BESS project',    90),

  // EE Specialization – Industrial Automation
  kp('weii-ee-aut-5-1', 1,  'PLC architectures: hardware, I/O modules & CPU types', 45),
  kp('weii-ee-aut-5-1', 2,  'IEC 61131-3 languages: LD, FBD, SFC, ST & IL',         60),
  kp('weii-ee-aut-5-1', 3,  'PLC program structure: OB, FB, FC & DB organization',  60),
  kp('weii-ee-aut-5-1', 4,  'Analog & digital I/O configuration & scaling',          45),
  kp('weii-ee-aut-5-1', 5,  'Industrial communication: PROFIBUS & PROFINET',         60),
  kp('weii-ee-aut-5-1', 6,  'SCADA systems: architecture, HMI design & alarming',   75),
  kp('weii-ee-aut-5-1', 7,  'OPC UA: information modeling & secure connectivity',   60),
  kp('weii-ee-aut-5-1', 8,  'Process instrumentation: PID loop tuning in PLC',      75),
  kp('weii-ee-aut-5-1', 9,  'Motor control from PLC: VFD parameterization',         60),
  kp('weii-ee-aut-5-1', 10, 'Safety PLCs: IEC 62061 & SIL concept',                 75),
  kp('weii-ee-aut-5-1', 11, 'Batch control: ISA-88 standard & recipe management',   60),
  kp('weii-ee-aut-5-1', 12, 'MES & ERP integration with factory automation',        45),
  kp('weii-ee-aut-5-1', 13, 'Digital twin in manufacturing: tools & methodology',   60),
  kp('weii-ee-aut-5-1', 14, 'Commissioning & FAT/SAT testing procedures',           45),
  kp('weii-ee-aut-5-1', 15, 'Lab: Siemens S7-1500 & WinCC SCADA project',          90),

  kp('weii-ee-aut-5-2', 1,  'Robot kinematics: DH parameters & forward kinematics', 75),
  kp('weii-ee-aut-5-2', 2,  'Inverse kinematics: analytical & numerical methods',   75),
  kp('weii-ee-aut-5-2', 3,  'Robot dynamics: Lagrangian mechanics & Newton-Euler',  75),
  kp('weii-ee-aut-5-2', 4,  'Trajectory planning: joint space & Cartesian space',   60),
  kp('weii-ee-aut-5-2', 5,  'Industrial robot controllers: ABB RAPID & KUKA KRL',   60),
  kp('weii-ee-aut-5-2', 6,  'Robot cell design: tooling, fixtures & safety fencing', 60),
  kp('weii-ee-aut-5-2', 7,  'Collaborative robots (cobots): ISO/TS 15066 & safety', 60),
  kp('weii-ee-aut-5-2', 8,  'End-of-arm tooling: grippers, welding & vision',       45),
  kp('weii-ee-aut-5-2', 9,  'Machine vision: cameras, lighting & image processing', 75),
  kp('weii-ee-aut-5-2', 10, 'AGV & AMR navigation: SLAM & path planning',           75),
  kp('weii-ee-aut-5-2', 11, 'Robot simulation with ROS & Gazebo',                   75),
  kp('weii-ee-aut-5-2', 12, 'Welding automation: seam tracking & process control',  60),
  kp('weii-ee-aut-5-2', 13, 'Assembly automation: part feeding & bin picking',      60),
  kp('weii-ee-aut-5-2', 14, 'Robot programming from CAD: offline programming',     60),
  kp('weii-ee-aut-5-2', 15, 'Lab: program an industrial robot arm for a pick-place task',90),

  kp('weii-ee-aut-6-1', 1,  'Industry 4.0 pillars: cyber-physical systems & IIoT', 45),
  kp('weii-ee-aut-6-1', 2,  'IIoT protocols: MQTT, AMQP & industrial Ethernet',    60),
  kp('weii-ee-aut-6-1', 3,  'Edge computing in manufacturing: gateways & fog nodes',60),
  kp('weii-ee-aut-6-1', 4,  'Cloud manufacturing platforms: AWS IoT & Azure IoT',  60),
  kp('weii-ee-aut-6-1', 5,  'AI & machine learning in manufacturing quality control',75),
  kp('weii-ee-aut-6-1', 6,  'Predictive maintenance: vibration analysis & ML',     75),
  kp('weii-ee-aut-6-1', 7,  'Additive manufacturing & flexible automation cells',  60),
  kp('weii-ee-aut-6-1', 8,  'Digital factory simulation with plant simulation',    75),
  kp('weii-ee-aut-6-1', 9,  'Lean manufacturing & automation-assisted kaizen',     45),
  kp('weii-ee-aut-6-1', 10, 'OEE measurement & production KPI dashboards',         45),
  kp('weii-ee-aut-6-1', 11, 'Smart sensors & RFID in production tracking',         45),
  kp('weii-ee-aut-6-1', 12, 'Cybersecurity in industrial control systems (ICS)',   60),
  kp('weii-ee-aut-6-1', 13, 'Change management in automation transformation projects',45),
  kp('weii-ee-aut-6-1', 14, 'Standards: IEC 62443 industrial cybersecurity',       60),
  kp('weii-ee-aut-6-1', 15, 'Capstone: design a smart factory automation solution', 90),

  // ══════════════════════════════════════════════════════════════════
  // FEECS – ET Direction subjects
  // ══════════════════════════════════════════════════════════════════

  // Signal Theory & Processing (weii-et-4-1)
  kp('weii-et-4-1', 1,  'Signals & systems: classification & basic properties',    45),
  kp('weii-et-4-1', 2,  'Fourier series: representation of periodic signals',      60),
  kp('weii-et-4-1', 3,  'Fourier transform: spectrum & convolution theorem',       75),
  kp('weii-et-4-1', 4,  'LTI systems: impulse response & frequency response',      75),
  kp('weii-et-4-1', 5,  'Sampling theorem: Nyquist rate & aliasing',               60),
  kp('weii-et-4-1', 6,  'Discrete-time signals & the DFT/FFT algorithm',           75),
  kp('weii-et-4-1', 7,  'Z-transform: properties & inverse Z-transform',           75),
  kp('weii-et-4-1', 8,  'FIR filter design: windowing & frequency sampling',       75),
  kp('weii-et-4-1', 9,  'IIR filter design: Butterworth & Chebyshev prototypes',   75),
  kp('weii-et-4-1', 10, 'Correlation & power spectral density estimation',         60),
  kp('weii-et-4-1', 11, 'Random signals: stationarity, ergodicity & noise models', 60),
  kp('weii-et-4-1', 12, 'Amplitude, frequency & phase modulation (AM/FM/PM)',      60),
  kp('weii-et-4-1', 13, 'Digital modulation: ASK, FSK, PSK & QAM',                60),
  kp('weii-et-4-1', 14, 'Signal-to-noise ratio, BER & channel capacity',           75),
  kp('weii-et-4-1', 15, 'MATLAB signal processing toolbox exercises',              60),

  // RF & Microwave Circuits (weii-et-4-2)
  kp('weii-et-4-2', 1,  'Transmission line theory: wave equations & propagation', 75),
  kp('weii-et-4-2', 2,  'Reflection coefficient, VSWR & return loss',             60),
  kp('weii-et-4-2', 3,  'Smith chart: impedance transformation & matching',       75),
  kp('weii-et-4-2', 4,  'Transmission line matching networks: L, π & T sections', 75),
  kp('weii-et-4-2', 5,  'Microstrip & stripline: design formulas & discontinuities',60),
  kp('weii-et-4-2', 6,  'Scattering parameters (S-parameters): definition & use', 75),
  kp('weii-et-4-2', 7,  'Passive microwave components: couplers & power dividers', 60),
  kp('weii-et-4-2', 8,  'Resonators & cavities: quality factor & resonant modes',  60),
  kp('weii-et-4-2', 9,  'Microwave amplifiers: LNA design & noise figure',         75),
  kp('weii-et-4-2', 10, 'Oscillators: LC, crystal & VCO design principles',       60),
  kp('weii-et-4-2', 11, 'Mixers: conversion gain, IIP3 & image rejection',        75),
  kp('weii-et-4-2', 12, 'Phase-locked loops (PLL): operation & frequency synthesis',75),
  kp('weii-et-4-2', 13, 'Power amplifiers: classes A, AB, B, C, D, E & F',        75),
  kp('weii-et-4-2', 14, 'RF PCB layout: grounding, via fencing & layer stack-up',  45),
  kp('weii-et-4-2', 15, 'RF circuit simulation with AWR or ADS',                  60),

  // Communication Systems (weii-et-4-3)
  kp('weii-et-4-3', 1,  'Information theory: entropy, channel capacity & coding',  75),
  kp('weii-et-4-3', 2,  'Source coding: Huffman, LZW & run-length encoding',      60),
  kp('weii-et-4-3', 3,  'Channel coding: linear block codes & Hamming code',      75),
  kp('weii-et-4-3', 4,  'Convolutional codes: Viterbi decoding algorithm',        90),
  kp('weii-et-4-3', 5,  'Turbo codes & LDPC: capacity-approaching codes',         90),
  kp('weii-et-4-3', 6,  'OFDM: subcarrier spacing, CP & frequency-selective channels',90),
  kp('weii-et-4-3', 7,  'CDMA: spreading codes, rake receiver & power control',   75),
  kp('weii-et-4-3', 8,  'TDMA & FDMA: frame structure & slot allocation',         60),
  kp('weii-et-4-3', 9,  'Wireless channel models: path loss, shadowing & fading', 75),
  kp('weii-et-4-3', 10, 'MIMO systems: spatial multiplexing & diversity',         90),
  kp('weii-et-4-3', 11, 'Satellite communication: link budget & orbital mechanics',75),
  kp('weii-et-4-3', 12, 'Optical communication: fiber & photodetectors basics',    60),
  kp('weii-et-4-3', 13, 'Cellular network architecture: cells, handover & roaming',60),
  kp('weii-et-4-3', 14, 'Multiple access in 4G LTE: OFDMA & SC-FDMA',            75),
  kp('weii-et-4-3', 15, 'Link budget calculation & system design exercise',       60),

  // Microelectronics Design (weii-et-4-4)
  kp('weii-et-4-4', 1,  'CMOS technology: process flow & device parameters',      60),
  kp('weii-et-4-4', 2,  'MOSFET models: long-channel & short-channel effects',    60),
  kp('weii-et-4-4', 3,  'CMOS logic gates: static & dynamic characteristics',     60),
  kp('weii-et-4-4', 4,  'CMOS inverter: VTC, noise margins & propagation delay',  75),
  kp('weii-et-4-4', 5,  'Combinational & sequential CMOS circuits',               60),
  kp('weii-et-4-4', 6,  'Memory circuits: SRAM, DRAM & Flash cell operation',     75),
  kp('weii-et-4-4', 7,  'Analog building blocks: current mirrors & diff pairs',   75),
  kp('weii-et-4-4', 8,  'Operational amplifier design: two-stage CMOS OTA',       90),
  kp('weii-et-4-4', 9,  'Frequency compensation: Miller & feed-forward methods',  75),
  kp('weii-et-4-4', 10, 'ADC architectures: flash, SAR & sigma-delta converters', 90),
  kp('weii-et-4-4', 11, 'DAC architectures: R-2R ladder & current-steering',      60),
  kp('weii-et-4-4', 12, 'Voltage references & bandgap reference circuits',        75),
  kp('weii-et-4-4', 13, 'Phase noise in oscillators & VCO design',               75),
  kp('weii-et-4-4', 14, 'IC layout: design rules, parasitics & LVS/DRC',         60),
  kp('weii-et-4-4', 15, 'Cadence Virtuoso/Spectre simulation exercises',          60),

  // Wireless Communication Systems (weii-et-5-1)
  kp('weii-et-5-1', 1,  '4G LTE architecture: EPC, eNodeB & bearer management',  75),
  kp('weii-et-5-1', 2,  '5G NR: numerology, slot formats & NR bands',             90),
  kp('weii-et-5-1', 3,  'Massive MIMO: beamforming & channel estimation',         90),
  kp('weii-et-5-1', 4,  'Millimeter-wave propagation: path loss & blockage',      75),
  kp('weii-et-5-1', 5,  'OFDM implementation: PAPR reduction & phase noise',      75),
  kp('weii-et-5-1', 6,  'IEEE 802.11ax (Wi-Fi 6): OFDMA & target wake time',     60),
  kp('weii-et-5-1', 7,  'Bluetooth LE & Zigbee: PHY & MAC layer details',         60),
  kp('weii-et-5-1', 8,  'LoRa & NB-IoT: LPWAN technology comparison',             60),
  kp('weii-et-5-1', 9,  'Cognitive radio & dynamic spectrum access',              75),
  kp('weii-et-5-1', 10, 'Software-defined radio: GNU Radio & RTL-SDR exercises',  75),
  kp('weii-et-5-1', 11, 'Channel sounding & measurement campaigns',               60),
  kp('weii-et-5-1', 12, 'Interference management: inter-cell & ICIC techniques',  60),
  kp('weii-et-5-1', 13, 'Radio access network planning: coverage & capacity',     75),
  kp('weii-et-5-1', 14, 'EMF exposure: SAR limits & compliance testing',          30),
  kp('weii-et-5-1', 15, 'Lab: characterize a 5G NR waveform with a vector analyzer',75),

  // Digital Signal Processing (weii-et-5-2)
  kp('weii-et-5-2', 1,  'Multirate signal processing: decimation & interpolation', 75),
  kp('weii-et-5-2', 2,  'Polyphase filter banks & perfect reconstruction',        90),
  kp('weii-et-5-2', 3,  'Short-time Fourier transform & spectrogram analysis',    60),
  kp('weii-et-5-2', 4,  'Wavelet transform: CWT, DWT & filter bank interpretation',90),
  kp('weii-et-5-2', 5,  'Adaptive filters: LMS & RLS algorithms',                 90),
  kp('weii-et-5-2', 6,  'Noise cancellation & echo cancellation with adaptive filters',75),
  kp('weii-et-5-2', 7,  'Spectral estimation: Welch, MUSIC & ESPRIT methods',     75),
  kp('weii-et-5-2', 8,  'Compressed sensing: sparsity & RIP condition',           75),
  kp('weii-et-5-2', 9,  'Speech processing: LPC, MFCC & speech codecs',           75),
  kp('weii-et-5-2', 10, 'Audio effects & spatial audio processing',               60),
  kp('weii-et-5-2', 11, 'Image processing fundamentals: 2D DFT & filtering',     60),
  kp('weii-et-5-2', 12, 'Fixed-point implementation on DSP processors',           75),
  kp('weii-et-5-2', 13, 'Real-time DSP on TI C6000 or ARM Cortex-M',             75),
  kp('weii-et-5-2', 14, 'Deep learning for signal processing: CNN & RNN intro',  60),
  kp('weii-et-5-2', 15, 'Lab: real-time audio filtering on a DSP development board',75),

  // Optical Fiber Technology (weii-et-5-3)
  kp('weii-et-5-3', 1,  'Optical waveguides: ray theory & modes in fibers',       60),
  kp('weii-et-5-3', 2,  'Single-mode vs multimode fibers: properties & uses',     60),
  kp('weii-et-5-3', 3,  'Fiber attenuation: absorption, scattering & bending',    60),
  kp('weii-et-5-3', 4,  'Chromatic dispersion: material & waveguide components',  75),
  kp('weii-et-5-3', 5,  'Polarization mode dispersion (PMD) & compensation',      75),
  kp('weii-et-5-3', 6,  'Optical sources: laser diodes & LED characteristics',    60),
  kp('weii-et-5-3', 7,  'Optical detectors: PIN & APD photodiodes',               60),
  kp('weii-et-5-3', 8,  'Optical amplifiers: EDFA, Raman & SOA',                 75),
  kp('weii-et-5-3', 9,  'WDM systems: multiplexers, demultiplexers & ROADMs',    75),
  kp('weii-et-5-3', 10, 'Coherent optical transmission: DP-QPSK & DSP receiver', 90),
  kp('weii-et-5-3', 11, 'Optical link budgets & power penalty calculations',      75),
  kp('weii-et-5-3', 12, 'Fiber splicing, connectors & patch panel management',    45),
  kp('weii-et-5-3', 13, 'OTDR measurements & fault location in fiber networks',   60),
  kp('weii-et-5-3', 14, 'Passive optical networks (PON): GPON & XGS-PON',        60),
  kp('weii-et-5-3', 15, 'Fiber-to-the-home (FTTH) network design project',        75),

  // Advanced Antenna Systems (weii-et-5-4)
  kp('weii-et-5-4', 1,  'Antenna fundamentals: radiation pattern, gain & polarization',60),
  kp('weii-et-5-4', 2,  'Dipole & monopole antennas: input impedance & patterns',  75),
  kp('weii-et-5-4', 3,  'Aperture antennas: horn & parabolic reflector design',    75),
  kp('weii-et-5-4', 4,  'Microstrip patch antennas: analysis & design methods',    75),
  kp('weii-et-5-4', 5,  'Antenna arrays: array factor & pattern multiplication',   90),
  kp('weii-et-5-4', 6,  'Phased arrays: beam steering & analog vs digital beamforming',90),
  kp('weii-et-5-4', 7,  'Massive MIMO antenna panels & calibration',              75),
  kp('weii-et-5-4', 8,  'WLAN & cellular base station antenna systems',           60),
  kp('weii-et-5-4', 9,  'Antenna efficiency & return loss measurement in anechoic chamber',75),
  kp('weii-et-5-4', 10, 'Near-field & far-field measurements & transforms',       60),
  kp('weii-et-5-4', 11, 'Wideband & UWB antenna design techniques',               60),
  kp('weii-et-5-4', 12, 'Reconfigurable antennas: varactors & MEMS switching',    60),
  kp('weii-et-5-4', 13, 'Antenna simulation with HFSS or CST',                    90),
  kp('weii-et-5-4', 14, 'Human body interaction: SAR & wearable antennas',        60),
  kp('weii-et-5-4', 15, 'Antenna design project: patch array for 5G mmWave',      90),

  // 5G & Next-Gen Networks (weii-et-6-1)
  kp('weii-et-6-1', 1,  '5G NR architecture: gNB, AMF, SMF & UPF functions',     75),
  kp('weii-et-6-1', 2,  'Network slicing: concepts, orchestration & isolation',   75),
  kp('weii-et-6-1', 3,  'Multi-access edge computing (MEC): standards & use cases',75),
  kp('weii-et-6-1', 4,  'D2D & V2X communications: sidelink & PC5 interface',     75),
  kp('weii-et-6-1', 5,  '5G private networks: enterprise & industrial deployments',60),
  kp('weii-et-6-1', 6,  'Open RAN: disaggregated architecture & O-RAN alliance',  75),
  kp('weii-et-6-1', 7,  'Terahertz communications: channel & device challenges',  60),
  kp('weii-et-6-1', 8,  '6G research directions: goals, KPIs & candidate technologies',60),
  kp('weii-et-6-1', 9,  'AI-native air interface: channel estimation with DL',    75),
  kp('weii-et-6-1', 10, 'Non-terrestrial networks (NTN): LEO & HAP integration',  60),
  kp('weii-et-6-1', 11, 'Network function virtualization (NFV) & cloud-native 5G core',75),
  kp('weii-et-6-1', 12, 'Spectrum management: dynamic sharing & 5G coexistence',  60),
  kp('weii-et-6-1', 13, 'Energy efficiency in 5G networks: sleep modes & green RAN',60),
  kp('weii-et-6-1', 14, 'Security in 5G: authentication, SUPI & SUCI concepts',  60),
  kp('weii-et-6-1', 15, 'Lab: 5G NR link simulation with MATLAB 5G Toolbox',     75),

  // IoT Architecture & Design (weii-et-6-2)
  kp('weii-et-6-2', 1,  'IoT reference architecture: perception, network & app layers',45),
  kp('weii-et-6-2', 2,  'Microcontrollers for IoT: ESP32, STM32 & nRF5340',       60),
  kp('weii-et-6-2', 3,  'Low-power design: sleep modes, duty cycling & energy harvesting',75),
  kp('weii-et-6-2', 4,  'Wireless protocols: BLE 5, Zigbee, Z-Wave & Thread',     60),
  kp('weii-et-6-2', 5,  'LPWAN for IoT: LoRaWAN, NB-IoT & LTE-M comparison',     60),
  kp('weii-et-6-2', 6,  'IoT messaging: MQTT, CoAP & AMQP protocol details',      60),
  kp('weii-et-6-2', 7,  'Edge AI: TinyML on microcontrollers with TensorFlow Lite',75),
  kp('weii-et-6-2', 8,  'IoT cloud platforms: AWS IoT, Azure IoT Hub & GCP IoT', 60),
  kp('weii-et-6-2', 9,  'Time-series databases: InfluxDB & Prometheus for IoT',   60),
  kp('weii-et-6-2', 10, 'IoT dashboards: Grafana, Node-RED & Thingsboard',        60),
  kp('weii-et-6-2', 11, 'IoT security: device identity, OTA updates & PKI',       75),
  kp('weii-et-6-2', 12, 'IoT in smart buildings: HVAC, lighting & BMS integration',60),
  kp('weii-et-6-2', 13, 'Industrial IoT (IIoT): predictive maintenance use case', 60),
  kp('weii-et-6-2', 14, 'IoT regulatory aspects: RED directive & CE marking',     30),
  kp('weii-et-6-2', 15, 'Capstone: end-to-end IoT system from sensor to dashboard',90),

  // Telecommunications Engineering Project (weii-et-6-3)
  kp('weii-et-6-3', 1,  'Project definition: scope, requirements & deliverables', 60),
  kp('weii-et-6-3', 2,  'System architecture design for telecom application',     75),
  kp('weii-et-6-3', 3,  'Technology selection: hardware, firmware & connectivity',60),
  kp('weii-et-6-3', 4,  'RF link planning & spectrum analysis',                   75),
  kp('weii-et-6-3', 5,  'Embedded software development & RTOS integration',       90),
  kp('weii-et-6-3', 6,  'Protocol stack implementation & testing',                75),
  kp('weii-et-6-3', 7,  'PCB design & RF front-end assembly',                     75),
  kp('weii-et-6-3', 8,  'System integration & debugging with analyzers',           60),
  kp('weii-et-6-3', 9,  'Performance measurement: latency, throughput & BER',    60),
  kp('weii-et-6-3', 10, 'Technical documentation: design report & test records',  60),
  kp('weii-et-6-3', 11, 'Regulatory compliance: type approval & CE certification',45),
  kp('weii-et-6-3', 12, 'Project management: milestone tracking & risk review',   45),
  kp('weii-et-6-3', 13, 'Peer code & design review session',                       45),
  kp('weii-et-6-3', 14, 'Final demonstration & technical presentation',            60),
  kp('weii-et-6-3', 15, 'Project retrospective & knowledge handoff document',     30),

  // ET Specialization – Wireless Communications
  kp('weii-et-wir-5-1', 1,  'Cellular planning tools: propagation models & drive test',75),
  kp('weii-et-wir-5-1', 2,  'Capacity planning: traffic models & GoS calculation',    60),
  kp('weii-et-wir-5-1', 3,  'Antenna tilting & downtilting for interference control', 60),
  kp('weii-et-wir-5-1', 4,  'SON (Self-Organizing Network) features: ANR & MRO',      75),
  kp('weii-et-wir-5-1', 5,  'Frequency reuse patterns & ICIC in LTE/5G',             75),
  kp('weii-et-wir-5-1', 6,  'Network performance KPIs: RSRP, SINR & throughput',     60),
  kp('weii-et-wir-5-1', 7,  'Small cells: picocells, femtocells & deployment scenarios',60),
  kp('weii-et-wir-5-1', 8,  'Heterogeneous networks (HetNets): interference & ICIC', 75),
  kp('weii-et-wir-5-1', 9,  'Spectrum auction & co-existence between operators',      45),
  kp('weii-et-wir-5-1', 10, 'Indoor coverage: distributed antenna systems (DAS)',    60),
  kp('weii-et-wir-5-1', 11, 'Network optimization: post-processing drive test data',  75),
  kp('weii-et-wir-5-1', 12, 'O&M of cellular networks: NMS & performance management',45),
  kp('weii-et-wir-5-1', 13, 'Network densification strategies for 5G',               60),
  kp('weii-et-wir-5-1', 14, 'Cell-free massive MIMO & distributed MIMO concepts',    75),
  kp('weii-et-wir-5-1', 15, 'Lab: cellular network planning with Atoll/Planet tool', 90),

  kp('weii-et-wir-6-1', 1,  'Satellite orbits: LEO, MEO & GEO trade-offs',           60),
  kp('weii-et-wir-6-1', 2,  'Link budget for satellite systems: Eb/N0 & C/N',         75),
  kp('weii-et-wir-6-1', 3,  'LEO constellation systems: Starlink, OneWeb & O3b',      60),
  kp('weii-et-wir-6-1', 4,  'VSAT systems: hub architecture & beam hopping',          60),
  kp('weii-et-wir-6-1', 5,  'Satellite modulation & coding: DVB-S2X & adaptive coding',75),
  kp('weii-et-wir-6-1', 6,  'Intersatellite links (ISL) & routing in LEO networks',  75),
  kp('weii-et-wir-6-1', 7,  'Propagation effects: rain attenuation & scintillation',  60),
  kp('weii-et-wir-6-1', 8,  'Ground station design: tracking antennas & G/T',        75),
  kp('weii-et-wir-6-1', 9,  'Satellite communications for maritime & aviation',       45),
  kp('weii-et-wir-6-1', 10, 'GNSS systems: GPS, Galileo & GLONASS architecture',     60),
  kp('weii-et-wir-6-1', 11, 'GNSS positioning: pseudorange, carrier phase & RTK',   75),
  kp('weii-et-wir-6-1', 12, 'Satellite broadcasting: DVB-T2 & HbbTV standards',      45),
  kp('weii-et-wir-6-1', 13, 'Spectrum coordination: ITU Radio Regulations & filings',45),
  kp('weii-et-wir-6-1', 14, 'New Space: cubesat platforms & launch services',         60),
  kp('weii-et-wir-6-1', 15, 'Capstone: design a LEO satellite link for IoT',          90),

  // ET Specialization – Embedded Systems
  kp('weii-et-emb-5-1', 1,  'RTOS concepts: tasks, scheduling & preemption',          60),
  kp('weii-et-emb-5-1', 2,  'FreeRTOS: task creation, queues & semaphores',           75),
  kp('weii-et-emb-5-1', 3,  'Zephyr RTOS: device tree & driver model',               60),
  kp('weii-et-emb-5-1', 4,  'Interrupt latency & determinism in hard real-time systems',75),
  kp('weii-et-emb-5-1', 5,  'Memory protection unit (MPU) & safe state handling',    60),
  kp('weii-et-emb-5-1', 6,  'Watchdog timers, brown-out detection & power modes',    45),
  kp('weii-et-emb-5-1', 7,  'AUTOSAR standard: layered SW architecture for automotive',75),
  kp('weii-et-emb-5-1', 8,  'CAN bus & LIN bus protocols in embedded automotive',    75),
  kp('weii-et-emb-5-1', 9,  'Functional safety: ISO 26262 & IEC 61508 basics',       75),
  kp('weii-et-emb-5-1', 10, 'Bootloader design & secure OTA firmware update',        75),
  kp('weii-et-emb-5-1', 11, 'Timing analysis: WCET & schedulability',                75),
  kp('weii-et-emb-5-1', 12, 'Power management in MCUs: clock gating & run modes',   60),
  kp('weii-et-emb-5-1', 13, 'MISRA C guidelines for safety-critical code',           60),
  kp('weii-et-emb-5-1', 14, 'Debugging real-time applications: JTAG & SWD tracing', 60),
  kp('weii-et-emb-5-1', 15, 'Lab: implement a preemptive RTOS scheduler on Cortex-M',90),

  kp('weii-et-emb-5-2', 1,  'Linux kernel architecture: kernel space vs user space', 60),
  kp('weii-et-emb-5-2', 2,  'Device tree: syntax, overlays & hardware description',  75),
  kp('weii-et-emb-5-2', 3,  'Character device drivers: file operations & ioctls',    75),
  kp('weii-et-emb-5-2', 4,  'Platform & bus drivers: I2C, SPI & GPIO subsystems',   75),
  kp('weii-et-emb-5-2', 5,  'Kernel modules: loading, parameters & symbol export',  60),
  kp('weii-et-emb-5-2', 6,  'Interrupt handling in Linux: threaded IRQs & top halves',75),
  kp('weii-et-emb-5-2', 7,  'Memory management in kernel: kmalloc, vmalloc & mmap', 75),
  kp('weii-et-emb-5-2', 8,  'Buildroot & Yocto: embedded Linux distribution building',75),
  kp('weii-et-emb-5-2', 9,  'Cross-compilation toolchain setup & sysroot',           60),
  kp('weii-et-emb-5-2', 10, 'UBoot bootloader: environment & boot sequence',         60),
  kp('weii-et-emb-5-2', 11, 'DMA engine framework: scatter-gather transfers',        60),
  kp('weii-et-emb-5-2', 12, 'Userspace drivers: UIO & VFIO frameworks',              60),
  kp('weii-et-emb-5-2', 13, 'Industrial Ethernet driver for Linux: EtherCAT',        75),
  kp('weii-et-emb-5-2', 14, 'Debugging with GDB server & kernel ftrace',             60),
  kp('weii-et-emb-5-2', 15, 'Lab: write a custom I2C driver for a sensor on Raspberry Pi',90),

  kp('weii-et-emb-6-1', 1,  'FPGA architecture: CLBs, DSPs, BRAMs & IOBs',           60),
  kp('weii-et-emb-6-1', 2,  'VHDL design methodology: RTL vs behavioral description', 75),
  kp('weii-et-emb-6-1', 3,  'Synchronous design rules: clock domains & metastability',75),
  kp('weii-et-emb-6-1', 4,  'Combinational & sequential logic implementation in HDL', 60),
  kp('weii-et-emb-6-1', 5,  'FSM design: one-hot, binary & Gray encoding in VHDL',   75),
  kp('weii-et-emb-6-1', 6,  'Arithmetic circuits: adders, multipliers & accumulators',75),
  kp('weii-et-emb-6-1', 7,  'Memory interfaces: DDR4, HBM & on-chip BRAM usage',    75),
  kp('weii-et-emb-6-1', 8,  'IP core integration: AXI bus & Vivado IP integrator',   75),
  kp('weii-et-emb-6-1', 9,  'FPGA timing constraints: setup/hold, clock uncertainty', 75),
  kp('weii-et-emb-6-1', 10, 'Simulation & co-simulation with ModelSim/Questa',       75),
  kp('weii-et-emb-6-1', 11, 'FPGA-based DSP: FIR filters & FFT on Xilinx FPGA',     90),
  kp('weii-et-emb-6-1', 12, 'HLS with Vitis HLS: C to RTL synthesis',               75),
  kp('weii-et-emb-6-1', 13, 'Partial reconfiguration & dynamic function exchange',   60),
  kp('weii-et-emb-6-1', 14, 'Power optimization: clock gating & voltage scaling',   60),
  kp('weii-et-emb-6-1', 15, 'Capstone: implement a real-time image filter on FPGA',  120),

  // ══════════════════════════════════════════════════════════════════
  // CS Specialization knowledge points
  // ══════════════════════════════════════════════════════════════════

  // Advanced Machine Learning (weii-cs-ai-5-1)
  kp('weii-cs-ai-5-1', 1,  'Review of ML fundamentals: bias-variance tradeoff',    45),
  kp('weii-cs-ai-5-1', 2,  'Ensemble learning: gradient boosting & XGBoost',       75),
  kp('weii-cs-ai-5-1', 3,  'Kernel methods: SVM & Gaussian process regression',    90),
  kp('weii-cs-ai-5-1', 4,  'Probabilistic graphical models: Bayes nets & MRFs',    90),
  kp('weii-cs-ai-5-1', 5,  'Variational inference & expectation-maximization',     90),
  kp('weii-cs-ai-5-1', 6,  'Dimensionality reduction: autoencoders & VAE',         75),
  kp('weii-cs-ai-5-1', 7,  'Attention mechanisms & transformer architecture',      90),
  kp('weii-cs-ai-5-1', 8,  'Self-supervised & contrastive learning',               75),
  kp('weii-cs-ai-5-1', 9,  'Few-shot & zero-shot learning paradigms',              75),
  kp('weii-cs-ai-5-1', 10, 'Hyperparameter optimization: Bayesian & NAS',          75),
  kp('weii-cs-ai-5-1', 11, 'Federated learning: architecture & privacy implications',75),
  kp('weii-cs-ai-5-1', 12, 'Causal inference: do-calculus & counterfactuals',      75),
  kp('weii-cs-ai-5-1', 13, 'ML for tabular data: feature selection & AutoML',      60),
  kp('weii-cs-ai-5-1', 14, 'Model explainability: SHAP, LIME & saliency maps',     60),
  kp('weii-cs-ai-5-1', 15, 'Kaggle competition project with advanced ML methods',  90),

  // Deep Learning Frameworks (weii-cs-ai-5-2)
  kp('weii-cs-ai-5-2', 1,  'PyTorch fundamentals: tensors, autograd & dynamic graph',60),
  kp('weii-cs-ai-5-2', 2,  'CNN architectures: ResNet, EfficientNet & Vision Transformer',90),
  kp('weii-cs-ai-5-2', 3,  'Transformer for NLP: BERT, GPT & T5 architecture',    90),
  kp('weii-cs-ai-5-2', 4,  'Generative models: GANs & diffusion model basics',    90),
  kp('weii-cs-ai-5-2', 5,  'Training infrastructure: multi-GPU & distributed training',75),
  kp('weii-cs-ai-5-2', 6,  'Mixed precision training: FP16 & BF16 with PyTorch AMP',60),
  kp('weii-cs-ai-5-2', 7,  'Model optimization: pruning, quantization & distillation',75),
  kp('weii-cs-ai-5-2', 8,  'ONNX & TensorRT: export & inference optimization',    75),
  kp('weii-cs-ai-5-2', 9,  'Experiment tracking: MLflow & Weights & Biases',      45),
  kp('weii-cs-ai-5-2', 10, 'Data pipelines for DL: PyTorch DataLoader & WebDataset',60),
  kp('weii-cs-ai-5-2', 11, 'Reinforcement learning with PyTorch: PPO & DQN',      90),
  kp('weii-cs-ai-5-2', 12, 'Graph neural networks: GCN, GAT & GraphSAGE',         75),
  kp('weii-cs-ai-5-2', 13, 'Fine-tuning large language models: LoRA & QLoRA',     75),
  kp('weii-cs-ai-5-2', 14, 'Retrieval-augmented generation (RAG) pipelines',      60),
  kp('weii-cs-ai-5-2', 15, 'End-to-end project: train & deploy a transformer model',90),

  // Natural Language Processing (weii-cs-ai-5-3)
  kp('weii-cs-ai-5-3', 1,  'NLP pipeline: tokenization, stemming & lemmatization', 45),
  kp('weii-cs-ai-5-3', 2,  'N-gram language models & perplexity evaluation',       60),
  kp('weii-cs-ai-5-3', 3,  'Word embeddings: Word2Vec, GloVe & FastText',          60),
  kp('weii-cs-ai-5-3', 4,  'Sequence models: RNN, LSTM & GRU for NLP',            75),
  kp('weii-cs-ai-5-3', 5,  'Attention & transformer encoder: BERT fine-tuning',   90),
  kp('weii-cs-ai-5-3', 6,  'Named entity recognition & sequence labeling',         60),
  kp('weii-cs-ai-5-3', 7,  'Sentiment analysis & opinion mining',                  60),
  kp('weii-cs-ai-5-3', 8,  'Text classification with pre-trained language models', 60),
  kp('weii-cs-ai-5-3', 9,  'Machine translation: encoder-decoder & NLLB model',   75),
  kp('weii-cs-ai-5-3', 10, 'Question answering & reading comprehension systems',   75),
  kp('weii-cs-ai-5-3', 11, 'Text summarization: extractive & abstractive approaches',75),
  kp('weii-cs-ai-5-3', 12, 'Information retrieval: BM25, DPR & re-ranking',       75),
  kp('weii-cs-ai-5-3', 13, 'Dialogue systems & conversational AI with LLMs',      75),
  kp('weii-cs-ai-5-3', 14, 'Multilingual NLP: challenges & cross-lingual transfer', 60),
  kp('weii-cs-ai-5-3', 15, 'NLP project: build a domain-specific chatbot with RAG', 90),

  // Computer Vision & 3D Perception (weii-cs-ai-6-1)
  kp('weii-cs-ai-6-1', 1,  'Image formation & camera models: pinhole & lens',      60),
  kp('weii-cs-ai-6-1', 2,  'Feature detection: SIFT, ORB & learned keypoints',    60),
  kp('weii-cs-ai-6-1', 3,  'Object detection: YOLO, Faster R-CNN & DETR',         90),
  kp('weii-cs-ai-6-1', 4,  'Instance segmentation: Mask R-CNN & SAM',             90),
  kp('weii-cs-ai-6-1', 5,  'Stereo vision & depth estimation from disparity',      75),
  kp('weii-cs-ai-6-1', 6,  'Structure from motion (SfM) & SLAM fundamentals',     90),
  kp('weii-cs-ai-6-1', 7,  'Point cloud processing: PCL & PointNet architectures', 75),
  kp('weii-cs-ai-6-1', 8,  'Neural radiance fields (NeRF) & 3D scene representation',90),
  kp('weii-cs-ai-6-1', 9,  'Video understanding: optical flow & action recognition',75),
  kp('weii-cs-ai-6-1', 10, 'Visual SLAM: ORB-SLAM3 & LiDAR-camera fusion',        90),
  kp('weii-cs-ai-6-1', 11, 'Autonomous driving perception stack overview',         75),
  kp('weii-cs-ai-6-1', 12, 'Medical image analysis: segmentation with U-Net',     75),
  kp('weii-cs-ai-6-1', 13, 'Adversarial attacks & robustness of CV models',       60),
  kp('weii-cs-ai-6-1', 14, 'Real-time inference: TensorRT deployment on GPU',     60),
  kp('weii-cs-ai-6-1', 15, 'Project: 3D object detection for autonomous robot',   90),

  // Reinforcement Learning (weii-cs-ai-6-2)
  kp('weii-cs-ai-6-2', 1,  'MDP formulation: states, actions, rewards & policies', 60),
  kp('weii-cs-ai-6-2', 2,  'Dynamic programming: value iteration & policy iteration',75),
  kp('weii-cs-ai-6-2', 3,  'Monte Carlo methods & temporal difference learning',   75),
  kp('weii-cs-ai-6-2', 4,  'Q-learning & SARSA: convergence & exploration',        75),
  kp('weii-cs-ai-6-2', 5,  'Deep Q-Network (DQN): experience replay & target net', 90),
  kp('weii-cs-ai-6-2', 6,  'Policy gradient methods: REINFORCE & actor-critic',    90),
  kp('weii-cs-ai-6-2', 7,  'Proximal Policy Optimization (PPO) algorithm',         90),
  kp('weii-cs-ai-6-2', 8,  'Soft Actor-Critic (SAC) & entropy regularization',    75),
  kp('weii-cs-ai-6-2', 9,  'Multi-agent RL: cooperative & competitive settings',   75),
  kp('weii-cs-ai-6-2', 10, 'Sim-to-real transfer: domain randomization',           75),
  kp('weii-cs-ai-6-2', 11, 'Model-based RL: Dyna & world models',                  90),
  kp('weii-cs-ai-6-2', 12, 'Hierarchical RL: options framework & subgoals',        75),
  kp('weii-cs-ai-6-2', 13, 'RL for games: AlphaZero & MuZero algorithms',         90),
  kp('weii-cs-ai-6-2', 14, 'RL for robotics: sim2real & imitation learning',       90),
  kp('weii-cs-ai-6-2', 15, 'Project: train an agent to solve a continuous control task',90),

  // AI Ethics & Responsible Systems (weii-cs-ai-6-3)
  kp('weii-cs-ai-6-3', 1,  'Ethical frameworks for AI: consequentialism & deontology',45),
  kp('weii-cs-ai-6-3', 2,  'Fairness metrics: demographic parity & equalized odds', 60),
  kp('weii-cs-ai-6-3', 3,  'Bias in data & models: sources, detection & mitigation',75),
  kp('weii-cs-ai-6-3', 4,  'Transparency & explainability requirements in EU AI Act',60),
  kp('weii-cs-ai-6-3', 5,  'Privacy-preserving ML: differential privacy & synthetic data',75),
  kp('weii-cs-ai-6-3', 6,  'GDPR & AI: automated decision-making & right to explanation',60),
  kp('weii-cs-ai-6-3', 7,  'AI risk classification: EU AI Act risk tiers',          60),
  kp('weii-cs-ai-6-3', 8,  'High-risk AI systems: conformity assessment & documentation',60),
  kp('weii-cs-ai-6-3', 9,  'Dual-use AI: weaponization & international governance', 45),
  kp('weii-cs-ai-6-3', 10, 'Environmental impact of AI: energy & carbon footprint', 45),
  kp('weii-cs-ai-6-3', 11, 'AI safety: alignment research & value learning',        75),
  kp('weii-cs-ai-6-3', 12, 'Adversarial robustness & certified defenses',           60),
  kp('weii-cs-ai-6-3', 13, 'Responsible AI governance in organizations',            45),
  kp('weii-cs-ai-6-3', 14, 'Case studies: facial recognition, credit scoring & healthcare AI',60),
  kp('weii-cs-ai-6-3', 15, 'Ethics audit project: assess a real AI deployment',    60),

  // Cloud-Native Architecture (weii-cs-se-5-1)
  kp('weii-cs-se-5-1', 1,  'Cloud service models: IaaS, PaaS & SaaS comparison',   45),
  kp('weii-cs-se-5-1', 2,  'Containers: Docker internals, images & networking',     60),
  kp('weii-cs-se-5-1', 3,  'Kubernetes: pods, deployments, services & ingress',     90),
  kp('weii-cs-se-5-1', 4,  'Kubernetes: ConfigMaps, secrets & persistent volumes', 75),
  kp('weii-cs-se-5-1', 5,  'Helm charts: templating & release management',          60),
  kp('weii-cs-se-5-1', 6,  'Service mesh: Istio traffic management & mTLS',         90),
  kp('weii-cs-se-5-1', 7,  'API gateway patterns: rate limiting & auth offloading', 60),
  kp('weii-cs-se-5-1', 8,  'Serverless computing: AWS Lambda & event-driven design',75),
  kp('weii-cs-se-5-1', 9,  'Infrastructure as code: Terraform & Pulumi',            75),
  kp('weii-cs-se-5-1', 10, 'GitOps: ArgoCD & Flux CD workflows',                    60),
  kp('weii-cs-se-5-1', 11, 'Observability: metrics (Prometheus), logs (Loki) & traces',75),
  kp('weii-cs-se-5-1', 12, 'Multi-cloud & cloud-agnostic design principles',        60),
  kp('weii-cs-se-5-1', 13, 'Cost optimization & FinOps in cloud environments',      45),
  kp('weii-cs-se-5-1', 14, 'Security in cloud: IAM, VPC & zero-trust architecture', 75),
  kp('weii-cs-se-5-1', 15, 'Project: deploy a microservice app to Kubernetes',      90),

  // Advanced DevOps & SRE (weii-cs-se-5-2)
  kp('weii-cs-se-5-2', 1,  'DevOps culture: CALMS framework & the three ways',      45),
  kp('weii-cs-se-5-2', 2,  'CI pipelines: GitHub Actions & GitLab CI/CD in depth',  75),
  kp('weii-cs-se-5-2', 3,  'Artifact management: Docker registry & versioning',     45),
  kp('weii-cs-se-5-2', 4,  'CD strategies: blue-green, canary & feature flags',     60),
  kp('weii-cs-se-5-2', 5,  'SLIs, SLOs & error budgets: SRE reliability model',    60),
  kp('weii-cs-se-5-2', 6,  'Incident management: runbooks, on-call & post-mortems', 60),
  kp('weii-cs-se-5-2', 7,  'Chaos engineering: principles & Chaos Monkey',          60),
  kp('weii-cs-se-5-2', 8,  'Capacity planning & load testing with k6/Gatling',      75),
  kp('weii-cs-se-5-2', 9,  'Database migrations in production: zero-downtime',      60),
  kp('weii-cs-se-5-2', 10, 'Security in CI/CD: SAST, DAST & container scanning',   75),
  kp('weii-cs-se-5-2', 11, 'Platform engineering: internal developer portals',      60),
  kp('weii-cs-se-5-2', 12, 'Trunk-based development vs. GitFlow branching',         45),
  kp('weii-cs-se-5-2', 13, 'Configuration management with Ansible & Chef',          60),
  kp('weii-cs-se-5-2', 14, 'Compliance automation: policy-as-code with OPA',        60),
  kp('weii-cs-se-5-2', 15, 'Project: end-to-end CI/CD pipeline for a cloud app',   90),

  // Mobile App Development (weii-cs-se-5-3)
  kp('weii-cs-se-5-3', 1,  'Native vs cross-platform development trade-offs',       30),
  kp('weii-cs-se-5-3', 2,  'React Native: components, navigation & state management',75),
  kp('weii-cs-se-5-3', 3,  'Flutter: Dart basics, widgets & state with BLoC/Riverpod',75),
  kp('weii-cs-se-5-3', 4,  'Mobile UX: platform guidelines iOS HIG & Material You', 60),
  kp('weii-cs-se-5-3', 5,  'Offline-first design: local databases & sync strategies',75),
  kp('weii-cs-se-5-3', 6,  'Push notifications: Firebase Cloud Messaging',          45),
  kp('weii-cs-se-5-3', 7,  'Authentication: OAuth2 & biometric login on mobile',   60),
  kp('weii-cs-se-5-3', 8,  'App performance: profiling, lazy loading & image caching',75),
  kp('weii-cs-se-5-3', 9,  'Background tasks & foreground services on Android',    60),
  kp('weii-cs-se-5-3', 10, 'Mobile security: secure storage, certificate pinning', 60),
  kp('weii-cs-se-5-3', 11, 'App Store & Google Play: submission & review process', 30),
  kp('weii-cs-se-5-3', 12, 'Analytics & A/B testing for mobile: Firebase & Mixpanel',45),
  kp('weii-cs-se-5-3', 13, 'Accessibility in mobile apps: WCAG & screen readers',  45),
  kp('weii-cs-se-5-3', 14, 'Testing mobile apps: unit, widget & integration tests', 60),
  kp('weii-cs-se-5-3', 15, 'Project: release a cross-platform app to both stores',  90),

  // Distributed Systems Design (weii-cs-se-6-1)
  kp('weii-cs-se-6-1', 1,  'Fallacies of distributed computing & their implications',45),
  kp('weii-cs-se-6-1', 2,  'CAP theorem & PACELC model',                            60),
  kp('weii-cs-se-6-1', 3,  'Consensus algorithms: Paxos & Raft in detail',          90),
  kp('weii-cs-se-6-1', 4,  'Distributed transactions: two-phase commit & sagas',    90),
  kp('weii-cs-se-6-1', 5,  'Eventual consistency: vector clocks & CRDTs',           90),
  kp('weii-cs-se-6-1', 6,  'Distributed storage: consistent hashing & replication', 75),
  kp('weii-cs-se-6-1', 7,  'Kafka architecture: log compaction & exactly-once',     75),
  kp('weii-cs-se-6-1', 8,  'Event sourcing & CQRS patterns',                        75),
  kp('weii-cs-se-6-1', 9,  'Service discovery & health checking: Consul & etcd',    60),
  kp('weii-cs-se-6-1', 10, 'Distributed tracing: OpenTelemetry & Jaeger',           60),
  kp('weii-cs-se-6-1', 11, 'Rate limiting & circuit breaker: Hystrix & Resilience4j',60),
  kp('weii-cs-se-6-1', 12, 'Database sharding & read replicas at scale',            75),
  kp('weii-cs-se-6-1', 13, 'Designing for failure: bulkhead & retry patterns',      60),
  kp('weii-cs-se-6-1', 14, 'System design interviews: WhatsApp, Twitter & Netflix', 90),
  kp('weii-cs-se-6-1', 15, 'Capstone: design a globally distributed key-value store',90),

  // Software Architecture Patterns (weii-cs-se-6-2)
  kp('weii-cs-se-6-2', 1,  'Architectural styles: monolith, SOA & microservices',   60),
  kp('weii-cs-se-6-2', 2,  'Domain-driven design: bounded contexts & aggregates',   90),
  kp('weii-cs-se-6-2', 3,  'Hexagonal architecture & ports & adapters',             75),
  kp('weii-cs-se-6-2', 4,  'Clean architecture: dependency rule & use cases',       75),
  kp('weii-cs-se-6-2', 5,  'Reactive systems: non-blocking I/O & backpressure',     75),
  kp('weii-cs-se-6-2', 6,  'API versioning strategies: URI, header & content negot.',60),
  kp('weii-cs-se-6-2', 7,  'Strangler fig & anti-corruption layer migration patterns',60),
  kp('weii-cs-se-6-2', 8,  'Architecture decision records (ADR) & trade-off analysis',60),
  kp('weii-cs-se-6-2', 9,  'Fitness functions & evolutionary architecture',          60),
  kp('weii-cs-se-6-2', 10, 'Modular monolith: package structure & boundary enforcement',75),
  kp('weii-cs-se-6-2', 11, 'Security architecture: zero trust & defense in depth',  75),
  kp('weii-cs-se-6-2', 12, 'Performance architecture: caching hierarchy & CDN design',75),
  kp('weii-cs-se-6-2', 13, 'Scalability patterns: CQRS, sharding & fan-out on write',75),
  kp('weii-cs-se-6-2', 14, 'Architecture review board: presenting & defending decisions',60),
  kp('weii-cs-se-6-2', 15, 'Capstone: redesign a legacy system to a modern architecture',90),

  // Product Engineering Capstone (weii-cs-se-6-3)
  kp('weii-cs-se-6-3', 1,  'Product discovery: user interviews & job stories',      60),
  kp('weii-cs-se-6-3', 2,  'MVP definition & lean startup validation loop',          45),
  kp('weii-cs-se-6-3', 3,  'Technical product roadmap & prioritization with RICE',  60),
  kp('weii-cs-se-6-3', 4,  'Team structure: squad model & Conway\'s Law',            45),
  kp('weii-cs-se-6-3', 5,  'Product backlog grooming & sprint planning',             60),
  kp('weii-cs-se-6-3', 6,  'Architecture spike & proof-of-concept implementation',  90),
  kp('weii-cs-se-6-3', 7,  'Full-stack feature development from ticket to deploy',  90),
  kp('weii-cs-se-6-3', 8,  'Observability setup: dashboards, alerts & runbooks',    60),
  kp('weii-cs-se-6-3', 9,  'User acceptance testing & beta program management',     60),
  kp('weii-cs-se-6-3', 10, 'Technical debt tracking & refactoring prioritization',  45),
  kp('weii-cs-se-6-3', 11, 'Security review & penetration test findings remediation',75),
  kp('weii-cs-se-6-3', 12, 'Performance benchmarking & scalability testing',        60),
  kp('weii-cs-se-6-3', 13, 'Product launch: release notes, rollout & rollback plan',60),
  kp('weii-cs-se-6-3', 14, 'Stakeholder demo & product pitch presentation',          60),
  kp('weii-cs-se-6-3', 15, 'Final retrospective & individual contribution review',   45),

  // Advanced Cryptography (weii-cs-cy-5-1)
  kp('weii-cs-cy-5-1', 1,  'Number theory: modular arithmetic & prime factorization',60),
  kp('weii-cs-cy-5-1', 2,  'RSA algorithm: key generation, encryption & attacks',   75),
  kp('weii-cs-cy-5-1', 3,  'Elliptic curve cryptography: ECDH & ECDSA',             90),
  kp('weii-cs-cy-5-1', 4,  'Post-quantum cryptography: lattice & hash-based schemes',90),
  kp('weii-cs-cy-5-1', 5,  'AES internals: SubBytes, ShiftRows, MixColumns & KeyExpansion',75),
  kp('weii-cs-cy-5-1', 6,  'Authenticated encryption: GCM & ChaCha20-Poly1305',    75),
  kp('weii-cs-cy-5-1', 7,  'Hash functions: SHA-3, BLAKE3 & collision resistance', 60),
  kp('weii-cs-cy-5-1', 8,  'Digital signatures: EdDSA & deterministic ECDSA',       75),
  kp('weii-cs-cy-5-1', 9,  'Key exchange: X25519 Diffie-Hellman & forward secrecy', 75),
  kp('weii-cs-cy-5-1', 10, 'Zero-knowledge proofs: interactive & non-interactive',  90),
  kp('weii-cs-cy-5-1', 11, 'Secure multi-party computation: secret sharing',        75),
  kp('weii-cs-cy-5-1', 12, 'Homomorphic encryption: FHE & practical limitations',  90),
  kp('weii-cs-cy-5-1', 13, 'Side-channel attacks: timing & power analysis',         75),
  kp('weii-cs-cy-5-1', 14, 'TLS 1.3 protocol: handshake & record layer',            75),
  kp('weii-cs-cy-5-1', 15, 'Implement & break a custom cipher: capture the flag',   90),

  // Ethical Hacking & Penetration Testing (weii-cs-cy-5-2)
  kp('weii-cs-cy-5-2', 1,  'Penetration testing methodology: PTES & OWASP WSTG',   60),
  kp('weii-cs-cy-5-2', 2,  'Reconnaissance: OSINT, Shodan & passive scanning',     60),
  kp('weii-cs-cy-5-2', 3,  'Network scanning: Nmap, banner grabbing & service enum.',75),
  kp('weii-cs-cy-5-2', 4,  'Vulnerability scanning: Nessus, OpenVAS & Nuclei',     60),
  kp('weii-cs-cy-5-2', 5,  'Exploitation: Metasploit framework & custom exploits',  90),
  kp('weii-cs-cy-5-2', 6,  'Web app hacking: OWASP Top 10 in lab environment',     90),
  kp('weii-cs-cy-5-2', 7,  'SQLi & XSS exploitation with Burp Suite',              75),
  kp('weii-cs-cy-5-2', 8,  'Password attacks: hash cracking with Hashcat & John',  75),
  kp('weii-cs-cy-5-2', 9,  'Privilege escalation on Linux & Windows systems',       90),
  kp('weii-cs-cy-5-2', 10, 'Lateral movement: pass-the-hash & Kerberoasting',       90),
  kp('weii-cs-cy-5-2', 11, 'Active Directory attacks: BloodHound & DCSync',         90),
  kp('weii-cs-cy-5-2', 12, 'Wireless hacking: WPA2 PMKID & deauth attacks',        60),
  kp('weii-cs-cy-5-2', 13, 'Post-exploitation & persistence mechanisms',            75),
  kp('weii-cs-cy-5-2', 14, 'Writing penetration test reports & remediation plans',  60),
  kp('weii-cs-cy-5-2', 15, 'HackTheBox / TryHackMe final machine challenge',        90),

  // Malware Analysis & Reverse Engineering (weii-cs-cy-5-3)
  kp('weii-cs-cy-5-3', 1,  'Malware types: viruses, worms, ransomware & rootkits',  45),
  kp('weii-cs-cy-5-3', 2,  'Static analysis: file format, strings & PE header',    60),
  kp('weii-cs-cy-5-3', 3,  'Disassembly with Ghidra & IDA: x86-64 assembly basics',90),
  kp('weii-cs-cy-5-3', 4,  'Dynamic analysis: controlled execution in a sandbox',  75),
  kp('weii-cs-cy-5-3', 5,  'API call monitoring: Process Monitor & API Monitor',   60),
  kp('weii-cs-cy-5-3', 6,  'Debugging with x64dbg: breakpoints & memory patches',  90),
  kp('weii-cs-cy-5-3', 7,  'Unpacking malware: recognizing & defeating common packers',90),
  kp('weii-cs-cy-5-3', 8,  'Obfuscation & anti-analysis: anti-debug & VM detection',75),
  kp('weii-cs-cy-5-3', 9,  'Network traffic analysis: Wireshark & C2 channel ID',  60),
  kp('weii-cs-cy-5-3', 10, 'Shellcode analysis & custom loaders',                   75),
  kp('weii-cs-cy-5-3', 11, 'Ransomware analysis: encryption routine & key extraction',90),
  kp('weii-cs-cy-5-3', 12, 'Rootkits: user-mode & kernel-mode hooking techniques', 90),
  kp('weii-cs-cy-5-3', 13, 'Android malware: APK analysis & decompilation',        75),
  kp('weii-cs-cy-5-3', 14, 'YARA rule writing for malware detection',               60),
  kp('weii-cs-cy-5-3', 15, 'Full malware analysis report for a real-world sample',  90),

  // Digital Forensics (weii-cs-cy-6-1)
  kp('weii-cs-cy-6-1', 1,  'Forensic process: acquisition, preservation & chain of custody',60),
  kp('weii-cs-cy-6-1', 2,  'Disk imaging: dd, FTK Imager & write blockers',         60),
  kp('weii-cs-cy-6-1', 3,  'File system forensics: NTFS, ext4 & deleted file recovery',90),
  kp('weii-cs-cy-6-1', 4,  'Windows registry forensics: user activity & artefacts', 75),
  kp('weii-cs-cy-6-1', 5,  'Browser & email forensics: history, cache & artefacts', 60),
  kp('weii-cs-cy-6-1', 6,  'Memory forensics: Volatility 3 & memory dump analysis', 90),
  kp('weii-cs-cy-6-1', 7,  'Network forensics: PCAP analysis & flow reconstruction',75),
  kp('weii-cs-cy-6-1', 8,  'Log forensics: Windows Event Log & Linux syslog',       60),
  kp('weii-cs-cy-6-1', 9,  'Timeline analysis: log2timeline & Plaso framework',     75),
  kp('weii-cs-cy-6-1', 10, 'Cloud forensics: AWS CloudTrail & container artefacts', 75),
  kp('weii-cs-cy-6-1', 11, 'Mobile forensics: extraction methods & app data analysis',75),
  kp('weii-cs-cy-6-1', 12, 'Anti-forensic techniques: timestomping & encryption',   60),
  kp('weii-cs-cy-6-1', 13, 'Expert witness standards & forensic reporting',          45),
  kp('weii-cs-cy-6-1', 14, 'Legal aspects: admissibility of digital evidence',       45),
  kp('weii-cs-cy-6-1', 15, 'CTF challenge: reconstruct an attack from disk image',  90),

  // Security Operations & SIEM (weii-cs-cy-6-2)
  kp('weii-cs-cy-6-2', 1,  'SOC tiers & analyst roles: L1/L2/L3 responsibilities', 30),
  kp('weii-cs-cy-6-2', 2,  'SIEM architecture: data ingestion, normalization & correlation',75),
  kp('weii-cs-cy-6-2', 3,  'Splunk & Elastic SIEM: queries, dashboards & alerts',  75),
  kp('weii-cs-cy-6-2', 4,  'MITRE ATT&CK framework: tactics, techniques & mitigations',75),
  kp('weii-cs-cy-6-2', 5,  'Threat hunting: hypothesis-driven investigation',        75),
  kp('weii-cs-cy-6-2', 6,  'Intrusion detection: Snort & Zeek rule writing',        75),
  kp('weii-cs-cy-6-2', 7,  'SOAR platforms: automated playbooks & enrichment',     60),
  kp('weii-cs-cy-6-2', 8,  'Threat intelligence: STIX/TAXII & CTI sharing',        60),
  kp('weii-cs-cy-6-2', 9,  'Endpoint detection & response (EDR): agents & telemetry',60),
  kp('weii-cs-cy-6-2', 10, 'Deception technology: honeypots & honeytokens',         60),
  kp('weii-cs-cy-6-2', 11, 'Vulnerability management: CVE scoring & prioritization',60),
  kp('weii-cs-cy-6-2', 12, 'Patch management workflow & SLA enforcement',           45),
  kp('weii-cs-cy-6-2', 13, 'Incident response playbooks: ransomware & BEC cases',  75),
  kp('weii-cs-cy-6-2', 14, 'Threat modelling at scale: STRIDE & PASTA for SOC',    60),
  kp('weii-cs-cy-6-2', 15, 'Capstone: investigate a multi-stage attack in a lab SOC',90),

  // Security Certification Project (weii-cs-cy-6-3)
  kp('weii-cs-cy-6-3', 1,  'CEH & OSCP exam scope & preparation strategy',          45),
  kp('weii-cs-cy-6-3', 2,  'Full-scope pentest project: scope agreement & ROE',     60),
  kp('weii-cs-cy-6-3', 3,  'External & internal network penetration test execution', 90),
  kp('weii-cs-cy-6-3', 4,  'Web application security assessment: full DAST run',    90),
  kp('weii-cs-cy-6-3', 5,  'Social engineering test: phishing campaign & awareness',60),
  kp('weii-cs-cy-6-3', 6,  'Physical security assessment: tailgating & RFID cloning',60),
  kp('weii-cs-cy-6-3', 7,  'Red team operations: multi-stage attack simulation',    90),
  kp('weii-cs-cy-6-3', 8,  'Vulnerability remediation tracking & re-testing',       60),
  kp('weii-cs-cy-6-3', 9,  'Executive & technical report writing standards',        60),
  kp('weii-cs-cy-6-3', 10, 'Presentation of findings to a simulated board',         60),
  kp('weii-cs-cy-6-3', 11, 'Bug bounty program: scope, reporting & reward tiers',  45),
  kp('weii-cs-cy-6-3', 12, 'Security awareness training design for staff',          45),
  kp('weii-cs-cy-6-3', 13, 'ISO 27001 internal audit simulation',                   60),
  kp('weii-cs-cy-6-3', 14, 'Career paths in cybersecurity: certifications & roadmap',30),
  kp('weii-cs-cy-6-3', 15, 'Final project presentation & portfolio submission',     60),

  // ══════════════════════════════════════════════════════════════════
  // FMEA – Aviation Direction
  // ══════════════════════════════════════════════════════════════════

  // Aerodynamics I (wbmil-avia-4-1)
  kp('wbmil-avia-4-1', 1,  'Fluid mechanics fundamentals: continuity & Bernoulli',   60),
  kp('wbmil-avia-4-1', 2,  'Airfoil geometry: chord, camber & thickness ratio',      45),
  kp('wbmil-avia-4-1', 3,  'Lift & drag: generation mechanisms & definitions',       60),
  kp('wbmil-avia-4-1', 4,  'Pressure coefficient distribution on airfoils',          60),
  kp('wbmil-avia-4-1', 5,  'Thin airfoil theory: lift slope & zero-lift angle',      75),
  kp('wbmil-avia-4-1', 6,  'Panel methods: source & vortex panel for airfoils',      90),
  kp('wbmil-avia-4-1', 7,  'Boundary layer theory: laminar, turbulent & transition', 75),
  kp('wbmil-avia-4-1', 8,  'Skin friction drag: flat plate approximations',          60),
  kp('wbmil-avia-4-1', 9,  'Wing aerodynamics: finite wing & induced drag',          75),
  kp('wbmil-avia-4-1', 10, 'Aspect ratio effects & Prandtl lifting line theory',     90),
  kp('wbmil-avia-4-1', 11, 'High-lift devices: flaps, slats & their effects',        60),
  kp('wbmil-avia-4-1', 12, 'Compressibility effects: subsonic & transonic flow',     75),
  kp('wbmil-avia-4-1', 13, 'Supersonic flow: shocks, expansions & wave drag',        90),
  kp('wbmil-avia-4-1', 14, 'CFD introduction: mesh generation & RANS solver',        60),
  kp('wbmil-avia-4-1', 15, 'Wind tunnel testing: measurement & data correction',     60),

  // Aircraft Structural Analysis (wbmil-avia-4-2)
  kp('wbmil-avia-4-2', 1,  'Aircraft structural components: fuselage, wing & empennage',45),
  kp('wbmil-avia-4-2', 2,  'Load paths & V-n diagram: limit & ultimate loads',       60),
  kp('wbmil-avia-4-2', 3,  'Materials in aerospace: Al alloys, Ti, CFRP properties', 60),
  kp('wbmil-avia-4-2', 4,  'Classical beam theory & bending stress in wing spars',   75),
  kp('wbmil-avia-4-2', 5,  'Shear flow in thin-walled sections: open & closed cells',90),
  kp('wbmil-avia-4-2', 6,  'Torsion of thin-walled sections: Bredt-Batho formula',   75),
  kp('wbmil-avia-4-2', 7,  'Buckling of panels: Euler & local buckling analysis',    90),
  kp('wbmil-avia-4-2', 8,  'Stiffened panel analysis: effective width & crippling',  75),
  kp('wbmil-avia-4-2', 9,  'Joint analysis: fastener loads in multi-row connections', 60),
  kp('wbmil-avia-4-2', 10, 'Fuselage pressure cabin design: hoop & longitudinal stress',75),
  kp('wbmil-avia-4-2', 11, 'FEA of aircraft structures: shell elements & boundary conditions',90),
  kp('wbmil-avia-4-2', 12, 'Modal analysis: natural frequencies & flutter flutter boundary',75),
  kp('wbmil-avia-4-2', 13, 'Damage tolerance: crack growth & residual strength',      90),
  kp('wbmil-avia-4-2', 14, 'Structural testing: static & fatigue test programs',      60),
  kp('wbmil-avia-4-2', 15, 'EASA CS-23 & CS-25 certification basics',                 45),

  // Flight Mechanics (wbmil-avia-4-3)
  kp('wbmil-avia-4-3', 1,  'Coordinate systems: body, wind & Earth axes',            45),
  kp('wbmil-avia-4-3', 2,  'Forces & moments in flight: lift, drag, thrust & weight',60),
  kp('wbmil-avia-4-3', 3,  'Equations of motion: 6-DOF rigid body model',            90),
  kp('wbmil-avia-4-3', 4,  'Steady level flight & climb performance',                 60),
  kp('wbmil-avia-4-3', 5,  'Range & endurance: Breguet equations',                    75),
  kp('wbmil-avia-4-3', 6,  'Takeoff & landing performance: ground roll & obstacle clearance',75),
  kp('wbmil-avia-4-3', 7,  'Static stability: longitudinal & lateral-directional',    75),
  kp('wbmil-avia-4-3', 8,  'Maneuver & gust loads: load factor & structural limits',  60),
  kp('wbmil-avia-4-3', 9,  'Dynamic stability: phugoid, short period & Dutch roll',   90),
  kp('wbmil-avia-4-3', 10, 'Control surface effectiveness: elevator, aileron & rudder',75),
  kp('wbmil-avia-4-3', 11, 'Fly-by-wire: control laws & reconfiguration',             75),
  kp('wbmil-avia-4-3', 12, 'Autopilot: pitch hold, heading hold & altitude hold modes',75),
  kp('wbmil-avia-4-3', 13, 'Atmospheric models: ISA & wind shear effects',            45),
  kp('wbmil-avia-4-3', 14, 'Flight simulation: X-Plane or JSBSim model validation',   75),
  kp('wbmil-avia-4-3', 15, 'Aircraft performance datasheet analysis',                  60),

  // Aviation Propulsion Systems (wbmil-avia-4-4)
  kp('wbmil-avia-4-4', 1,  'Thermodynamic cycles: Brayton & its real-gas deviations', 75),
  kp('wbmil-avia-4-4', 2,  'Turbojet components: inlet, compressor, combustor, turbine',60),
  kp('wbmil-avia-4-4', 3,  'Turbofan engines: bypass ratio & overall efficiency',      75),
  kp('wbmil-avia-4-4', 4,  'Compressor characteristics: surge, stall & map',          75),
  kp('wbmil-avia-4-4', 5,  'Combustion chamber design: flame stability & emissions',   60),
  kp('wbmil-avia-4-4', 6,  'Turbine cooling & blade material selection',               60),
  kp('wbmil-avia-4-4', 7,  'Engine performance: thrust, TSFC & SFC variation',        60),
  kp('wbmil-avia-4-4', 8,  'Nozzle design: convergent, C-D & thrust vectoring',       60),
  kp('wbmil-avia-4-4', 9,  'Turboprop & turboshaft engines: power extraction',        60),
  kp('wbmil-avia-4-4', 10, 'Piston engines for GA: reciprocating engine principles',  45),
  kp('wbmil-avia-4-4', 11, 'Propeller theory: momentum & blade element methods',      75),
  kp('wbmil-avia-4-4', 12, 'FADEC & engine control system fundamentals',              60),
  kp('wbmil-avia-4-4', 13, 'Electric & hybrid propulsion: motor selection & efficiency',75),
  kp('wbmil-avia-4-4', 14, 'Noise certification: ICAO Chapter 14 standards',          45),
  kp('wbmil-avia-4-4', 15, 'Hydrogen & SAF: future aircraft fuel technologies',        60),

  // Composite Structures (wbmil-avia-str-5-1)
  kp('wbmil-avia-str-5-1', 1,  'Composite materials: fibers, matrices & lay-up terminology',45),
  kp('wbmil-avia-str-5-1', 2,  'Classical lamination theory: stiffness matrices A, B, D',90),
  kp('wbmil-avia-str-5-1', 3,  'Failure criteria: maximum stress, Tsai-Wu & Puck',      75),
  kp('wbmil-avia-str-5-1', 4,  'Interlaminar shear & delamination mechanics',            90),
  kp('wbmil-avia-str-5-1', 5,  'Buckling of composite panels: eigenvalue & post-buckling',90),
  kp('wbmil-avia-str-5-1', 6,  'Manufacturing processes: autoclave, RTM & VARTM',       60),
  kp('wbmil-avia-str-5-1', 7,  'Repair of composite structures: scarfing & bolted patches',60),
  kp('wbmil-avia-str-5-1', 8,  'Non-destructive testing of composites: UT & thermography',60),
  kp('wbmil-avia-str-5-1', 9,  'Joints in composites: bonded & mechanically fastened',   75),
  kp('wbmil-avia-str-5-1', 10, 'Lightning strike protection for composite structures',    60),
  kp('wbmil-avia-str-5-1', 11, 'FEA of composites: solid vs shell element strategies',   90),
  kp('wbmil-avia-str-5-1', 12, 'Fatigue of composites: S-N data & damage accumulation',  75),
  kp('wbmil-avia-str-5-1', 13, 'Regulatory aspects: EASA acceptable means of compliance', 45),
  kp('wbmil-avia-str-5-1', 14, 'Weight optimization: ply drop-offs & variable stiffness', 75),
  kp('wbmil-avia-str-5-1', 15, 'Capstone: design a composite wing rib in Abaqus',        90),

  // FEA for Aircraft (wbmil-avia-str-5-2)
  kp('wbmil-avia-str-5-2', 1,  'FEA theory: displacement method & shape functions',    60),
  kp('wbmil-avia-str-5-2', 2,  'Element types: truss, beam, shell & solid elements',   60),
  kp('wbmil-avia-str-5-2', 3,  'Mesh quality: aspect ratio, skewness & convergence',   60),
  kp('wbmil-avia-str-5-2', 4,  'Boundary conditions & load application in Nastran',    75),
  kp('wbmil-avia-str-5-2', 5,  'Linear static analysis & stress recovery',             75),
  kp('wbmil-avia-str-5-2', 6,  'Normal modes & frequency response analysis',           75),
  kp('wbmil-avia-str-5-2', 7,  'Buckling analysis: linear & nonlinear methods',        90),
  kp('wbmil-avia-str-5-2', 8,  'Fatigue analysis with FEA results: HCF & LCF',        75),
  kp('wbmil-avia-str-5-2', 9,  'Full aircraft FE model: stick model & GFEM',           90),
  kp('wbmil-avia-str-5-2', 10, 'Loads interface: aerodynamic & structural coupling',   75),
  kp('wbmil-avia-str-5-2', 11, 'Thermal FEA: temperature distribution & thermal stress',75),
  kp('wbmil-avia-str-5-2', 12, 'Contact mechanics: bolted joint simulation',           75),
  kp('wbmil-avia-str-5-2', 13, 'FEA model validation & test correlation',              60),
  kp('wbmil-avia-str-5-2', 14, 'Automated reporting from FEA results',                60),
  kp('wbmil-avia-str-5-2', 15, 'Project: FEA study of a fuselage panel under pressure',90),

  // Aircraft Electronics & Navigation (wbmil-avia-av-5-1)
  kp('wbmil-avia-av-5-1', 1,  'Avionics architecture: IMA & federated systems',       60),
  kp('wbmil-avia-av-5-1', 2,  'Avionics buses: ARINC 429, MIL-STD-1553 & AFDX',      75),
  kp('wbmil-avia-av-5-1', 3,  'Navigation fundamentals: inertial, radio & satellite', 75),
  kp('wbmil-avia-av-5-1', 4,  'INS & AHRS: accelerometers, gyroscopes & Kalman filter',90),
  kp('wbmil-avia-av-5-1', 5,  'GPS/GNSS: position fix & integrity monitoring (RAIM)', 75),
  kp('wbmil-avia-av-5-1', 6,  'VOR, ILS & DME radio navigation aids',                 60),
  kp('wbmil-avia-av-5-1', 7,  'RNAV & PBN: RNP approaches & GNSS overlay',           60),
  kp('wbmil-avia-av-5-1', 8,  'Flight management system (FMS): functionality & CDU', 75),
  kp('wbmil-avia-av-5-1', 9,  'EFIS & glass cockpit: PFD, MFD & EICAS/ECAM',         60),
  kp('wbmil-avia-av-5-1', 10, 'Traffic collision avoidance (TCAS) & ADS-B',           60),
  kp('wbmil-avia-av-5-1', 11, 'Weather radar: Doppler & windshear detection',          60),
  kp('wbmil-avia-av-5-1', 12, 'TAWS/GPWS: terrain warning algorithms',                45),
  kp('wbmil-avia-av-5-1', 13, 'Datalink: ACARS, CPDLC & ATC surveillance',            45),
  kp('wbmil-avia-av-5-1', 14, 'DO-178C: software development process for avionics',   75),
  kp('wbmil-avia-av-5-1', 15, 'Lab: simulate a navigation solution with GPS & INS fusion',75),

  // Autopilot & Flight Control Systems (wbmil-avia-av-5-2)
  kp('wbmil-avia-av-5-2', 1,  'Control law design: inner & outer loop architecture',  75),
  kp('wbmil-avia-av-5-2', 2,  'Altitude & airspeed hold: PI controller design',       75),
  kp('wbmil-avia-av-5-2', 3,  'Heading & bank angle hold: lateral control laws',      75),
  kp('wbmil-avia-av-5-2', 4,  'Autoland (CAT III): ILS capture & flare modes',        90),
  kp('wbmil-avia-av-5-2', 5,  'Fly-by-wire: control augmentation & envelope protection',90),
  kp('wbmil-avia-av-5-2', 6,  'Actuator models: hydraulic & electromechanical EHA',   60),
  kp('wbmil-avia-av-5-2', 7,  'Flight envelope protection: alpha & load factor limiting',75),
  kp('wbmil-avia-av-5-2', 8,  'Redundancy management: triplex & quadruplex architectures',75),
  kp('wbmil-avia-av-5-2', 9,  'Simulation & verification: iron bird & HIL testing',   75),
  kp('wbmil-avia-av-5-2', 10, 'UAV flight controllers: PX4 & ArduPilot architecture', 75),
  kp('wbmil-avia-av-5-2', 11, 'eVTOL control: multirotor & hybrid VTOL transition',   90),
  kp('wbmil-avia-av-5-2', 12, 'Aeroelastic stability: flutter & structural coupling', 90),
  kp('wbmil-avia-av-5-2', 13, 'Certification of flight control systems: DO-254',      60),
  kp('wbmil-avia-av-5-2', 14, 'Flight test techniques: parameter identification',      75),
  kp('wbmil-avia-av-5-2', 15, 'Capstone: design & simulate autopilot in Simulink',    90),

  // ══════════════════════════════════════════════════════════════════
  // FoM – Logistics Direction
  // ══════════════════════════════════════════════════════════════════

  // Supply Chain Management (wz-logi-3-1)
  kp('wz-logi-3-1', 1,  'Supply chain structure: tiers, nodes & flows',            30),
  kp('wz-logi-3-1', 2,  'Supply chain strategy: lean, agile & leagile paradigms',  60),
  kp('wz-logi-3-1', 3,  'Demand forecasting: qualitative & quantitative methods',  75),
  kp('wz-logi-3-1', 4,  'Inventory management: EOQ, ROP & safety stock models',   75),
  kp('wz-logi-3-1', 5,  'Procurement & sourcing: supplier selection & evaluation', 60),
  kp('wz-logi-3-1', 6,  'Supplier relationship management: SRM & KPI dashboards', 60),
  kp('wz-logi-3-1', 7,  'Global sourcing: lead times, Incoterms & landed cost',   60),
  kp('wz-logi-3-1', 8,  'Production planning: MRP & capacity requirements',        75),
  kp('wz-logi-3-1', 9,  'Order management & customer service levels',               45),
  kp('wz-logi-3-1', 10, 'Distribution network design: hub-and-spoke & direct ship',75),
  kp('wz-logi-3-1', 11, 'Supply chain risk: disruption scenarios & mitigation',    75),
  kp('wz-logi-3-1', 12, 'Supply chain sustainability: carbon footprint & circular', 60),
  kp('wz-logi-3-1', 13, 'Omni-channel fulfillment: ship-from-store & BOPIS',       60),
  kp('wz-logi-3-1', 14, 'Supply chain digitalization: ERP, TMS & WMS integration', 60),
  kp('wz-logi-3-1', 15, 'Case study: automotive supply chain disruption analysis', 60),

  // Transportation & Forwarding (wz-logi-3-2)
  kp('wz-logi-3-2', 1,  'Transport modes: road, rail, sea, air & pipeline comparison',45),
  kp('wz-logi-3-2', 2,  'Road freight: vehicle types, load planning & CMR convention',60),
  kp('wz-logi-3-2', 3,  'Railway logistics: wagon types, groupage & intermodal',    60),
  kp('wz-logi-3-2', 4,  'Sea freight: container shipping, FCL & LCL consolidation', 75),
  kp('wz-logi-3-2', 5,  'Air freight: IATA cargo regulations & ULD management',    60),
  kp('wz-logi-3-2', 6,  'Incoterms 2020: trade terms & risk transfer points',      60),
  kp('wz-logi-3-2', 7,  'Customs procedures: tariff classification & documentation',60),
  kp('wz-logi-3-2', 8,  'Freight forwarders: services, FIATA documents & liability',60),
  kp('wz-logi-3-2', 9,  'Dangerous goods transport: ADR, IMDG & IATA-DGR',         75),
  kp('wz-logi-3-2', 10, 'Freight rates: tariffs, surcharges & carrier negotiation', 60),
  kp('wz-logi-3-2', 11, 'Transport management systems (TMS): features & selection',60),
  kp('wz-logi-3-2', 12, 'Last-mile delivery: urban consolidation & courier networks',60),
  kp('wz-logi-3-2', 13, 'Cold chain logistics: temperature monitoring & compliance',60),
  kp('wz-logi-3-2', 14, 'Intermodal & multimodal transport: terminal operations',  60),
  kp('wz-logi-3-2', 15, 'Green transport: alternative fuels & CO2 reporting',       45),

  // Warehousing & Distribution (wz-logi-3-3)
  kp('wz-logi-3-3', 1,  'Warehouse types: bonded, 3PL & distribution centre',      30),
  kp('wz-logi-3-3', 2,  'Warehouse layout: flow patterns & space utilization',     60),
  kp('wz-logi-3-3', 3,  'Storage systems: pallet racking, cantilever & carousel',  60),
  kp('wz-logi-3-3', 4,  'Receiving & put-away: cross-docking & slotting strategies',60),
  kp('wz-logi-3-3', 5,  'Order picking: wave, batch & zone picking methods',        75),
  kp('wz-logi-3-3', 6,  'Pick-to-light, voice & RF-guided picking technologies',   60),
  kp('wz-logi-3-3', 7,  'Warehouse automation: AS/RS, conveyor & sortation',       75),
  kp('wz-logi-3-3', 8,  'Autonomous mobile robots (AMR) in warehousing',           75),
  kp('wz-logi-3-3', 9,  'Warehouse management systems (WMS): core modules',        75),
  kp('wz-logi-3-3', 10, 'Inventory accuracy: cycle counting & ABC analysis',        60),
  kp('wz-logi-3-3', 11, 'KPIs for warehousing: lines per hour, pick accuracy',     45),
  kp('wz-logi-3-3', 12, 'Safety & ergonomics in warehouse operations',              45),
  kp('wz-logi-3-3', 13, 'Value-added services: kitting, labeling & postponement',  45),
  kp('wz-logi-3-3', 14, 'E-commerce fulfillment: SLA management & returns',        60),
  kp('wz-logi-3-3', 15, 'Warehouse design project: layout & technology selection', 90),

  // Logistics Information Systems (wz-logi-3-4)
  kp('wz-logi-3-4', 1,  'ERP logistics modules: SAP MM, SD & WM overview',         60),
  kp('wz-logi-3-4', 2,  'EDI & EDIFACT: message types & B2B integration',          60),
  kp('wz-logi-3-4', 3,  'Barcode & 2D code technology: GS1 standards',             45),
  kp('wz-logi-3-4', 4,  'RFID in logistics: tags, readers & application areas',    60),
  kp('wz-logi-3-4', 5,  'IoT for supply chain visibility: track & trace platforms', 75),
  kp('wz-logi-3-4', 6,  'Blockchain in supply chain: transparency & provenance',   75),
  kp('wz-logi-3-4', 7,  'Supply chain analytics: descriptive, predictive & prescriptive',75),
  kp('wz-logi-3-4', 8,  'Big data in logistics: vehicle telematics & demand data', 60),
  kp('wz-logi-3-4', 9,  'Digital twin in logistics: simulation & what-if analysis', 75),
  kp('wz-logi-3-4', 10, 'Last-mile technology: route optimization & delivery APIs', 60),
  kp('wz-logi-3-4', 11, 'Demand sensing: real-time demand signal & AI forecasting', 60),
  kp('wz-logi-3-4', 12, 'Warehouse control systems (WCS): PLC & robotics interface',60),
  kp('wz-logi-3-4', 13, 'API economy in logistics: REST integrations & marketplaces',45),
  kp('wz-logi-3-4', 14, 'Cybersecurity in logistics systems: OT & IT threats',     60),
  kp('wz-logi-3-4', 15, 'Implementation project: configure a WMS demonstration',   90),

  // ══════════════════════════════════════════════════════════════════
  // FoM – Finance Direction
  // ══════════════════════════════════════════════════════════════════

  // Financial Instruments & Markets (wz-fin-3-1)
  kp('wz-fin-3-1', 1,  'Financial system overview: markets, institutions & flows',  30),
  kp('wz-fin-3-1', 2,  'Money markets: T-bills, repos & commercial paper',          60),
  kp('wz-fin-3-1', 3,  'Bond markets: government & corporate bond pricing',         75),
  kp('wz-fin-3-1', 4,  'Bond duration, convexity & interest rate risk',             90),
  kp('wz-fin-3-1', 5,  'Equity markets: stock exchanges, order types & indices',   60),
  kp('wz-fin-3-1', 6,  'Equity valuation: DDM, DCF & multiples approach',          75),
  kp('wz-fin-3-1', 7,  'Derivatives: forwards, futures, options & swaps overview', 90),
  kp('wz-fin-3-1', 8,  'Options pricing: Black-Scholes model & Greeks',             90),
  kp('wz-fin-3-1', 9,  'FX markets: spot, forward & currency swaps',               60),
  kp('wz-fin-3-1', 10, 'Commodity markets: energy, metals & agricultural futures', 60),
  kp('wz-fin-3-1', 11, 'Portfolio theory: Markowitz, CAPM & efficient frontier',   90),
  kp('wz-fin-3-1', 12, 'Fixed income portfolio management: immunization strategy', 75),
  kp('wz-fin-3-1', 13, 'Market microstructure: bid-ask spread & market impact',    60),
  kp('wz-fin-3-1', 14, 'Market regulation: MiFID II, EMIR & MAR overview',         45),
  kp('wz-fin-3-1', 15, 'Quantitative finance intro: mean-variance optimization in Excel',75),

  // Banking & Credit Management (wz-fin-3-2)
  kp('wz-fin-3-2', 1,  'Commercial banking: business model & income statement',    45),
  kp('wz-fin-3-2', 2,  'Deposit products: current, savings & term deposit features',45),
  kp('wz-fin-3-2', 3,  'Lending products: mortgages, consumer & corporate loans',  75),
  kp('wz-fin-3-2', 4,  'Credit analysis: 5 Cs framework & ratio analysis',         75),
  kp('wz-fin-3-2', 5,  'Credit rating: PD, LGD & EAD concepts',                   75),
  kp('wz-fin-3-2', 6,  'Credit risk management: portfolio diversification & VaR',  90),
  kp('wz-fin-3-2', 7,  'Basel III/IV: capital adequacy, LCR & NSFR requirements',  90),
  kp('wz-fin-3-2', 8,  'IFRS 9: expected credit loss (ECL) model & stages',        75),
  kp('wz-fin-3-2', 9,  'Collateral & guarantee: security interests & enforcement', 60),
  kp('wz-fin-3-2', 10, 'Trade finance: letters of credit & documentary collections',60),
  kp('wz-fin-3-2', 11, 'Treasury management in banks: ALM & liquidity management', 75),
  kp('wz-fin-3-2', 12, 'Retail banking: payment systems, cards & open banking',   60),
  kp('wz-fin-3-2', 13, 'Investment banking: underwriting, M&A advisory & IPO',    75),
  kp('wz-fin-3-2', 14, 'AML & KYC: regulatory requirements & compliance processes',60),
  kp('wz-fin-3-2', 15, 'Fintech disruption: neobanks, lending platforms & BNPL',   60),

  // Financial Analysis & Valuation (wz-fin-3-3)
  kp('wz-fin-3-3', 1,  'Financial statement analysis: income statement deep dive', 60),
  kp('wz-fin-3-3', 2,  'Balance sheet analysis: asset quality & capital structure', 60),
  kp('wz-fin-3-3', 3,  'Cash flow statement: operating, investing & financing flows',75),
  kp('wz-fin-3-3', 4,  'Ratio analysis: liquidity, profitability & efficiency',    75),
  kp('wz-fin-3-3', 5,  'DuPont decomposition of ROE & earnings quality',           75),
  kp('wz-fin-3-3', 6,  'Revenue recognition under IFRS 15 & earnings manipulation',75),
  kp('wz-fin-3-3', 7,  'DCF valuation: building a three-statement model',           90),
  kp('wz-fin-3-3', 8,  'WACC & cost of equity: CAPM & risk premium estimation',   75),
  kp('wz-fin-3-3', 9,  'Relative valuation: EV/EBITDA, P/E & comparable companies',75),
  kp('wz-fin-3-3', 10, 'M&A analysis: accretion/dilution & deal structures',       75),
  kp('wz-fin-3-3', 11, 'LBO modeling: leveraged buyout & return calculation',      90),
  kp('wz-fin-3-3', 12, 'Startup valuation: VC method & pre-money/post-money',      60),
  kp('wz-fin-3-3', 13, 'Real estate valuation: cap rate & discounted cash flow',   60),
  kp('wz-fin-3-3', 14, 'ESG integration in valuation & green bond pricing',        60),
  kp('wz-fin-3-3', 15, 'Equity research report: full company analysis project',    90),

  // Insurance & Risk Management (wz-fin-3-4)
  kp('wz-fin-3-4', 1,  'Risk concepts: pure vs speculative, insurable vs uninsurable',30),
  kp('wz-fin-3-4', 2,  'Insurance principles: insurable interest & indemnity',     45),
  kp('wz-fin-3-4', 3,  'Property & casualty insurance: coverage & claims process', 60),
  kp('wz-fin-3-4', 4,  'Life & health insurance: term, whole life & unit-linked',  60),
  kp('wz-fin-3-4', 5,  'Insurance regulation: Solvency II directive & IAIS',       75),
  kp('wz-fin-3-4', 6,  'Actuarial methods: loss development & reserve calculation',90),
  kp('wz-fin-3-4', 7,  'Reinsurance: proportional, non-proportional & retrocession',75),
  kp('wz-fin-3-4', 8,  'Enterprise risk management (ERM): COSO framework',         60),
  kp('wz-fin-3-4', 9,  'Operational risk: Basel II/III classification & AMA',      75),
  kp('wz-fin-3-4', 10, 'Market risk: VaR, CVaR & stress testing methodologies',   90),
  kp('wz-fin-3-4', 11, 'Derivatives for hedging: FX & interest rate risk tools',   75),
  kp('wz-fin-3-4', 12, 'Cyber insurance: coverage terms & exposure assessment',    60),
  kp('wz-fin-3-4', 13, 'Catastrophe risk modeling: nat-cat events & PML',          60),
  kp('wz-fin-3-4', 14, 'Risk governance: three lines of defense & ORSA',           45),
  kp('wz-fin-3-4', 15, 'Case study: ERM framework design for a mid-size company', 60),
];

// Helper to get directions for a faculty
export function getDirections(facultyId: string): Direction[] {
  return DIRECTIONS.filter(d => d.faculty_id === facultyId);
}

// Helper to get specializations for a direction
export function getSpecializations(directionId: string): Specialization[] {
  return SPECIALIZATIONS.filter(s => s.direction_id === directionId);
}

// Helper to get subjects for a faculty/semester/direction/specialization
export function getSubjects(
  facultyId: string,
  semester: number,
  directionId?: string,
  specializationId?: string
): Subject[] {
  return SUBJECTS.filter(s => {
    if (s.faculty_id !== facultyId || s.semester !== semester) return false;
    // Specialization-specific subject
    if (s.specialization_id) return s.specialization_id === specializationId;
    // Direction-specific subject
    if (s.direction_id) return s.direction_id === directionId;
    // Common subject (no direction, no specialization)
    return true;
  });
}

// Helper to get knowledge points for a subject
export function getKnowledgePoints(subjectId: string): KnowledgePoint[] {
  return KNOWLEDGE_POINTS.filter(kp => kp.subject_id === subjectId).sort((a, b) => a.order - b.order);
}

// Helper to get all knowledge points for a faculty/semester
export function getAllKnowledgePointsForSemester(
  facultyId: string,
  semester: number,
  directionId?: string,
  specializationId?: string
): KnowledgePoint[] {
  const subjects = getSubjects(facultyId, semester, directionId, specializationId);
  return subjects.flatMap(s => getKnowledgePoints(s.id));
}

// Demo user
export const DEMO_USER = {
  id: 'user-1',
  name: 'Alex',
  email: 'alex.johnson@stud.prz.edu.pl',
  faculty_id: 'weii',
  direction_id: 'weii-cs',
  specialization_id: undefined as string | undefined,
  semester: 3,
};
