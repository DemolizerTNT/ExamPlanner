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
  specialization_id?: string | null;
  semester: number;
  name: string;
  has_exam: boolean;
  exam_date?: string | null;
  color: string;
  mk_id?: number | null;
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
  { id: 'd096c417-e832-4d3b-a7be-b8fac1a99131', name: 'Faculty of Electrical & Computer Engineering', shortName: 'WEII' },
];

// --- DIRECTIONS ---
export const DIRECTIONS: Direction[] = [
  // WEII
  { id: 'c032603c-b733-4b2c-bb62-f782145cb462',  faculty_id: 'd096c417-e832-4d3b-a7be-b8fac1a99131',  name: 'Computer engineering' },
  { id: '067053b8-9a03-43f7-a38f-2aee3e52e3d2',  faculty_id: 'd096c417-e832-4d3b-a7be-b8fac1a99131',  name: 'Electrical Engineering' },
  { id: '89f4087f-3883-4c9a-a435-2f20711fcb4b',  faculty_id: 'd096c417-e832-4d3b-a7be-b8fac1a99131',  name: 'Electronics & Telecommunications' },
  { id: '18533be4-580c-4505-9811-c4d7492b71c3',  faculty_id: 'd096c417-e832-4d3b-a7be-b8fac1a99131',  name: 'Electromobility' },
  { id: 'de4f6f47-12c8-4027-a9cb-957b79cc2c0f',  faculty_id: 'd096c417-e832-4d3b-a7be-b8fac1a99131',  name: 'Automatic Control and Robotics' },
];

// --- SPECIALIZATIONS ---
export const SPECIALIZATIONS: Specialization[] = [
  // WEiI - CE
  { id: 'ab5a7101-14e3-4d89-9d27-3a9ebec027b8', direction_id: 'c032603c-b733-4b2c-bb62-f782145cb462', name: 'Artificial Intelligence',   min_semester: 5 },
  { id: 'b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22', direction_id: 'c032603c-b733-4b2c-bb62-f782145cb462', name: 'Engineering of Information Systems',       min_semester: 5 },
  { id: '3957c812-34e8-437d-8d08-00f39011c06d', direction_id: 'c032603c-b733-4b2c-bb62-f782145cb462', name: 'Complex systems engineering',              min_semester: 5 },
  { id: 'b9774665-9b5c-4481-b795-d999f65eeb5a', direction_id: 'c032603c-b733-4b2c-bb62-f782145cb462', name: 'Information technology in enterprise',              min_semester: 5 },
  // WEiI - ACR (Automatic Control and Robotics)
  { id: 'ceca64e1-bcc2-4e29-b88b-23e20c139f4a', direction_id: 'de4f6f47-12c8-4027-a9cb-957b79cc2c0f', name: 'Automation of manufacturing and intralogistics systems', min_semester: 5 },
  { id: '12521aa2-265a-4afc-aa8a-95351c9c3555', direction_id: 'de4f6f47-12c8-4027-a9cb-957b79cc2c0f', name: 'Computer control systems',min_semester: 5 },
];

// --- SUBJECTS ---
export const SUBJECTS: Subject[] = [
    //BASE WEiI - CE
    {
        "id": "534e4376-e4a8-46e8-96cf-421b262fc5f2",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 1,
        "name": "Calculus and linear algebra",
        "has_exam": true,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "6176a299-c360-4932-838d-17b69228a7da",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 1,
        "name": "Languages, automata and computations",
        "has_exam": true,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "e5c48497-fbe9-4eb9-9a1d-14bc7d75726e",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 1,
        "name": "Logic and set theory",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "f21fe107-5068-455b-8da6-feca9ca42acf",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 1,
        "name": "Software tools for programmers",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "23a922df-6535-4951-8d43-6335021ff0ae",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 1,
        "name": "C language programming",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "d208bdbe-cf62-4266-8137-e7bbe0de19f2",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 1,
        "name": "Signals and systems",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "4a40a30e-b63f-40ad-9612-38ce283ec021",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 1,
        "name": "Information and measurement techniques",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "15d266ae-4c91-4fe5-a51c-36d6bc9e7424",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 1,
        "name": "Introduction to programming",
        "has_exam": false,
        "exam_date": null,
        "color": "#065f46"
    },
    {
        "id": "873cec00-c8a1-4844-878a-2e37f5c32a6e",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 1,
        "name": "Physical education",
        "has_exam": false,
        "exam_date": null,
        "color": "#991b1b"
    },
    {
        "id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 2,
        "name": "Algorithms and data structures",
        "has_exam": true,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "47d109c5-803d-4f95-9842-3359079a2221",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 2,
        "name": "Architecture of Computer Systems",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "9f06dd13-a013-454d-a8a5-a940e40f2e22",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 2,
        "name": "Electronics for IT specialists",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "1699d73a-efd4-406a-b030-d5cbd65e9200",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 2,
        "name": "Elements of computer logic and arithmetics",
        "has_exam": true,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "8d7b27e2-7f19-4f61-ab31-394fed37bf03",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 2,
        "name": "Discrete mathematics 1",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "156f1a34-e1bb-417d-ad60-b4210d69ee9f",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 2,
        "name": "Numerical methods",
        "has_exam": true,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "961323ca-4767-4aa8-bdc1-d8745136104e",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 2,
        "name": "Java programming",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "908982a1-930a-4607-981d-352b4c2f1035",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 2,
        "name": "Physical education",
        "has_exam": false,
        "exam_date": null,
        "color": "#065f46"
    },
    {
        "id": "60ca4f02-b16b-49ea-8bff-4fabb271c412",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 3,
        "name": "Combinatorial algorithms",
        "has_exam": false,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "20c69dba-59f5-42c3-a0ca-6eb7d72bb66e",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 3,
        "name": "Computer graphics",
        "has_exam": true,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 3,
        "name": "Foreign language",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "3cc9da59-5692-408d-ac70-a6bfe22ef175",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 3,
        "name": "Probability methods  and statistics",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "c6dba8da-5968-442d-ab77-9436171abaab",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 3,
        "name": "Organization and management of a small IT company",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "f08eb02e-1e1a-4f6d-8f0a-20496e683d4e",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 3,
        "name": "Work organization and team communication",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "0b175c65-681b-46fa-b692-abe6a67d0b15",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 3,
        "name": "Programming in C++",
        "has_exam": true,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "b7639c57-d68b-4f2a-a35b-b01f47871dd1",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 3,
        "name": "Operating systems",
        "has_exam": true,
        "exam_date": null,
        "color": "#065f46"
    },
    {
        "id": "58104fe9-17d8-4225-9734-0fb8077764c0",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 4,
        "name": "Databases",
        "has_exam": true,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "552607a9-b0c3-401c-a749-fd3d0059b2af",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 4,
        "name": "Ideas and computer engineering",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 4,
        "name": "Software engineering",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 4,
        "name": "Foreign language",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "df1d091c-3456-42bf-b4a6-4260f0dc3808",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 4,
        "name": "Fundamentals of Telecommunications",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "9b2fde93-debc-443b-ac9f-e5b97e57ea92",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 4,
        "name": "Computer networks I",
        "has_exam": true,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "5d760e69-5274-4988-bece-dcc88097fc36",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 4,
        "name": "Artificial Intelligence",
        "has_exam": true,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "7f12a4e3-897c-4e23-ac5d-b665f9fa757a",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": null,
        "semester": 4,
        "name": "Advanced C++ programming",
        "has_exam": false,
        "exam_date": null,
        "color": "#065f46"
    },
    //WEiI - SPEC - AA
    {
        "id": "9ca9dc98-6f74-4e35-81c8-4c0070d183d6",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 5,
        "name": "Integrating .NET Applications with Databases",
        "has_exam": true,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "7b6f6788-c376-45c3-95fc-3fb488d884d8",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 5,
        "name": "Human-Computer Interaction",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 5,
        "name": "Foreign language",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "42473d55-336b-4dc7-a665-56a29c7b0f15",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 5,
        "name": "Chosen module 1 A",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "a00228bc-477b-4b84-9587-1aba6cc516ee",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 5,
        "name": "Practice",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "c707639c-9ab6-4b23-866c-4efd13f5a1f0",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 5,
        "name": "Web Applications Programming",
        "has_exam": true,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "e048ba62-6345-4a3d-9e07-4ecd191b9eb8",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 5,
        "name": "Low level programming",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "7c471e12-afb7-4dd5-b3cc-cb90452414f0",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 5,
        "name": "Humanistic subject",
        "has_exam": false,
        "exam_date": null,
        "color": "#065f46"
    },
    {
        "id": "0e7e0dbc-4f0d-4268-a60a-708847703384",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 5,
        "name": "Computer networks II",
        "has_exam": false,
        "exam_date": null,
        "color": "#991b1b"
    },
    {
        "id": "d4074330-6818-4d0d-9551-607b5a21b8ea",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 5,
        "name": "LINUX/UNIX operating systems",
        "has_exam": false,
        "exam_date": null,
        "color": "#5b21b6"
    },
    {
        "id": "6a0ca09d-1ad6-4b7d-b458-673e0e48dcea",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 5,
        "name": "Project management",
        "has_exam": false,
        "exam_date": null,
        "color": "#92400e"
    },
    {
        "id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 6,
        "name": "Foreign language",
        "has_exam": true,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "71d444e4-0cd2-435f-b397-1647dc86fb56",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 6,
        "name": "Communication in microcomputer networks",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "aa892650-1876-4b35-8ec6-c12f769c9aa5",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 6,
        "name": "Chosen module II  A",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "1d05f67a-8696-4579-a793-7cc80aabf686",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 6,
        "name": "Social and occupational problems in information technology",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "df5f2378-d2ba-4353-bb59-465369c358a4",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 6,
        "name": "Programming Mobile Devices",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "56a01544-5ef5-44a4-82f9-4e5726495113",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 6,
        "name": "Diploma seminar",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "2f558968-e12c-4a38-9125-c5b0ef46b41a",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 6,
        "name": "Embedded systems",
        "has_exam": true,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "3ab6d520-82dc-4d36-ae30-31593b3df4de",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 6,
        "name": "Microprocessor Systems",
        "has_exam": false,
        "exam_date": null,
        "color": "#065f46"
    },
    {
        "id": "fb45122b-103f-44a6-aad2-9b7aa53f2719",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 6,
        "name": "Computer Vision",
        "has_exam": true,
        "exam_date": null,
        "color": "#991b1b"
    },
    {
        "id": "048e68dd-8885-4444-a846-0857823373cc",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 7,
        "name": "Data analysis with R and Python languages",
        "has_exam": false,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "136398c7-9d03-4780-9f19-dd6d9a3564a5",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 7,
        "name": "Computer Systems Security",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "ad1c33f4-e71f-4c92-b949-7479677c70ac",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 7,
        "name": "Diploma thesis",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "fae32400-11ce-4ed5-aca7-0398ece45cb1",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 7,
        "name": "Diploma seminar",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "38022e6d-37f2-48cb-bdcb-874f46b2ef56",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 7,
        "name": "Integration systems",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "45b930c4-616a-4abb-9659-e25a18842949",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 7,
        "name": "Multimedia",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "6dc9303c-92a4-4573-9267-f3a9faee3f01",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b7ad56f6-f72c-4449-ac9e-8db4b2c9bf22",
        "semester": 7,
        "name": "Monographic lecture",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    //WEiI - SPEC - z
    {
        "id": "ac2e5d70-05d3-4efb-af8f-703901b98c06",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 5,
        "name": "Cybersecurity I",
        "has_exam": true,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 5,
        "name": "Foreign language",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "25fc195a-388b-4cbd-89d6-ffefaa8d3097",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 5,
        "name": "Chosen module I S",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "381174e5-203a-42d8-baee-6a6842feb19b",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 5,
        "name": "Practice",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "2dfcc08c-5946-4bd9-a643-d6e8e16cafeb",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 5,
        "name": "Designing critical infrastructure systems",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "00b2f8ac-f33f-427c-bca8-99b8e1cffd3d",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 5,
        "name": "Humanistic subject",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "e8f08309-bb37-48df-aaf2-86f6f77d2f56",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 5,
        "name": "Computer networks II",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "aa358f4c-c8de-4562-81ed-fffba78fe8ba",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 5,
        "name": "Enterprise database systems I",
        "has_exam": false,
        "exam_date": null,
        "color": "#065f46"
    },
    {
        "id": "bad1a978-6b32-4879-855a-56151ad0b671",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 5,
        "name": "Systems of virtual reality",
        "has_exam": true,
        "exam_date": null,
        "color": "#991b1b"
    },
    {
        "id": "09be97ba-a6f2-47ea-9cf4-990e4e7ab098",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 6,
        "name": "Cybersecurity II",
        "has_exam": false,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 6,
        "name": "Foreign language",
        "has_exam": true,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "dda00e41-e05a-4cac-8c92-c40b09d22114",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 6,
        "name": "Chosen module II S",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "4d80cb31-402a-42ae-acc0-6a0b5277274c",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 6,
        "name": "Diploma seminar",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "cf7e17cc-5c35-4d74-b709-4d87c1a6fc90",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 6,
        "name": "Enterprise database systems II",
        "has_exam": true,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "960a2302-6745-4a29-9c15-9e39643fa803",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 6,
        "name": "Microprocessor Systems",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "51dcca7d-b12f-4f21-958f-fc627e2670bf",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 6,
        "name": "Network services in business",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "61ce7a60-854c-46e4-889a-619627b88423",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 7,
        "name": "Python language in applications",
        "has_exam": false,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "fb53eaf9-5f64-4dbd-96e9-e937140f1bce",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 7,
        "name": "Diploma thesis",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "3ff5cc9d-6734-4c48-a104-9ce683947945",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 7,
        "name": "Cloud computing",
        "has_exam": true,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "9e00a216-7cd2-4dfc-b936-74c352c4248f",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 7,
        "name": "Diploma seminar",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "8f083cc7-fcf0-4427-8262-3b468ef6d3e4",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 7,
        "name": "Monographic lecture",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "17d44498-01fd-4994-a336-01b09b4e997f",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 7,
        "name": "Data management",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "d45821c3-8e85-407c-81b5-4bc9e8b1e130",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "3957c812-34e8-437d-8d08-00f39011c06d",
        "semester": 7,
        "name": "Computer network and systems management",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    //WEiI - SPEC - tt
    {
        "id": "0662caba-23ca-4ca3-9619-87b854235346",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 5,
        "name": "Cybersecurity",
        "has_exam": true,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "a16d9821-db90-45b0-96d4-85c34c39e6ae",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 5,
        "name": "Human-Computer Interaction",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 5,
        "name": "Foreign language",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "c6a133ea-6cb9-422a-89bb-7bdb71a18722",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 5,
        "name": "Chosen module I TT",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "46cfe938-9ba2-4689-8c09-40e74754e493",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 5,
        "name": "Practice",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "faac00c9-b44c-4bd4-9dd1-5a79e98ca67a",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 5,
        "name": "Humanistic subject",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "98f3229c-61b5-4ec8-90aa-398dc9a12d8a",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 5,
        "name": "Computer networks II",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "81499186-f2e1-4757-b559-9ca79e006b85",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 5,
        "name": "Mobile and satellite systems",
        "has_exam": true,
        "exam_date": null,
        "color": "#065f46"
    },
    {
        "id": "62907a73-7f7d-47f8-b3f0-8a85200e2fdb",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 5,
        "name": "Project management",
        "has_exam": false,
        "exam_date": null,
        "color": "#991b1b"
    },
    {
        "id": "7fd2adf1-70ae-4ba5-8ca2-83a83beaca17",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 6,
        "name": "Business data analysis",
        "has_exam": false,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "45a9029e-8793-460e-8d24-e84cf9e16d29",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 6,
        "name": "Computer technology in medicine",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 6,
        "name": "Foreign language",
        "has_exam": true,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "a5172cf8-c12f-41de-8b10-abc58781afa9",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 6,
        "name": "Chosen module II TT",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "1ac76e01-0210-48f4-aba2-afd422bece6f",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 6,
        "name": "Social and occupational problems in information technology",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "886c8386-1585-4629-b56f-b6ce720b1023",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 6,
        "name": "Cloud computing",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "38b2b47b-03b1-406e-a83d-fa9ddcc082ab",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 6,
        "name": "Diploma seminar",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "561f25b7-293d-4f3f-b18a-fb46a0b2df93",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 6,
        "name": "Virtual and augmented reality systems",
        "has_exam": true,
        "exam_date": null,
        "color": "#065f46"
    },
    {
        "id": "63348923-5117-422f-b5f4-912ec1727cef",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 6,
        "name": "Network services in businesses",
        "has_exam": true,
        "exam_date": null,
        "color": "#991b1b"
    },
    {
        "id": "4186a5c0-63d4-47ed-a0c9-91613059b149",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 7,
        "name": "Operational research and discrete optimization",
        "has_exam": false,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "f3e216da-6481-46a7-ae04-3d3a800bd4fb",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 7,
        "name": "Enterprise systems integration",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "2f70fe26-0ac6-4aec-91ef-41f07ba3495f",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 7,
        "name": "Diploma thesis",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "bb5e6adc-5147-4723-a147-3d237becd1f1",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 7,
        "name": "Diploma seminar",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "7d8970e7-9a16-4167-97cc-a577cbb00a29",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 7,
        "name": "Techniques and tools for the analysis of information systems",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "dc2d8788-363d-466b-b51b-17fb4a9d93b8",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 7,
        "name": "Multimedia",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "5dd6f437-d204-4447-9785-095db2b373eb",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "b9774665-9b5c-4481-b795-d999f65eeb5a",
        "semester": 7,
        "name": "Monographic lecture",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    //WEiI - SPEC - ai
    {
        "id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 5,
        "name": "Foreign language",
        "has_exam": false,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "6ef3d441-ed79-4f89-9c0b-aa35cec0eced",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 5,
        "name": "Languages for programming artificial intelligence",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "2968e468-4a19-49ca-8524-b14ca81db458",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 5,
        "name": "Chosen module 1 AI",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "fb8ed96c-5e6b-4cbd-976b-a98937c47dd2",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 5,
        "name": "Practice",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "fa18ff5e-8ce9-4853-b88f-8bf2cb9730df",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 5,
        "name": "Prompt engineering",
        "has_exam": true,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "65f51ddf-a5d0-45b9-9c62-e1d84876c803",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 5,
        "name": "Humanistic subject",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "c1df9afb-7757-444a-8013-49904e5d389d",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 5,
        "name": "Artificial Intelligence in video games",
        "has_exam": true,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "40a9d364-c0b0-43e6-953c-c9f7f2b64e5b",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 5,
        "name": "Data analysis  techniques",
        "has_exam": false,
        "exam_date": null,
        "color": "#065f46"
    },
    {
        "id": "28a876d9-c310-43ea-a26f-9961013986e3",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 5,
        "name": "Machine learning",
        "has_exam": false,
        "exam_date": null,
        "color": "#991b1b"
    },
    {
        "id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 5,
        "name": "Reinforcement Learning",
        "has_exam": false,
        "exam_date": null,
        "color": "#5b21b6"
    },
    {
        "id": "e7db7e00-9778-4cc2-a6f3-cdad73b98231",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 6,
        "name": "AI in cybersecurity",
        "has_exam": false,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "84b0b1f0-f05f-4533-9f01-3bb25139d103",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 6,
        "name": "AI in computer graphics",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "e5108538-742a-4039-8dac-eb54cc594ebf",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 6,
        "name": "Interpretable decision support systems of artificial intelligence",
        "has_exam": true,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 6,
        "name": "Foreign language",
        "has_exam": true,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "2be3558b-b3f2-4421-8bc3-6fa1c6bee2d8",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 6,
        "name": "Chosen module II AI",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "8263a551-840a-42d8-91ab-e9252f2cfd10",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 6,
        "name": "Social and occupational problems in information technology",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "94447043-920a-4bcc-8076-019971336edb",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 6,
        "name": "Recurrent neural networks and transformers",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "93192764-7681-4fbe-bcc4-ca0b6efecdd8",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 6,
        "name": "Diploma seminar",
        "has_exam": false,
        "exam_date": null,
        "color": "#065f46"
    },
    {
        "id": "06a334a4-d360-4894-94ff-8438b0f10456",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 6,
        "name": "Cloud systems as an IT framework for AI",
        "has_exam": false,
        "exam_date": null,
        "color": "#991b1b"
    },
    {
        "id": "e1f20f0c-0dc2-4bf6-ac79-457b27ce80d8",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 6,
        "name": "Computer Vision",
        "has_exam": true,
        "exam_date": null,
        "color": "#5b21b6"
    },
    {
        "id": "2aa849d6-0cb1-4b66-9825-c036bb052483",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 7,
        "name": "Digitization and application of artificial intelligence methods in production systems",
        "has_exam": false,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "8b8bb90d-d304-45b3-8368-9752d7d3a5ab",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 7,
        "name": "Process mining",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "ab582f33-3db3-461e-a7e3-a273c422be0f",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 7,
        "name": "Diploma thesis",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "a8bb14e2-5d6f-491d-8fea-de452f7d5990",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 7,
        "name": "Diploma seminar",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "f1d7c05a-e385-4d59-bd9b-6ea29785f22c",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 7,
        "name": "Machine learning in medicine",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "54ed022e-ba1c-4e9c-a428-1524b667a88f",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 7,
        "name": "Monographic lecture",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "04cd9643-7ff9-46b3-9499-9c3575e5bf9d",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "c032603c-b733-4b2c-bb62-f782145cb462",
        "specialization_id": "ab5a7101-14e3-4d89-9d27-3a9ebec027b8",
        "semester": 7,
        "name": "Threats associated with artificial intelligence",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    //WEiI - ACR - BASE
    {
        "id": "ab6a2c4a-2f15-4ee4-8776-3c213f9440b9",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 1,
        "name": "Mathematical analisis and linear algebra",
        "has_exam": true,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "7e9d45d8-c18f-4b1c-a4a5-757d8d70a717",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 1,
        "name": "Physics",
        "has_exam": true,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "69c9d3a5-71bb-4c8b-9850-dc9523135925",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 1,
        "name": "Computer engineering",
        "has_exam": true,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "4aa12f06-e2d9-4414-9256-ee3edcabc4a1",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 1,
        "name": "Metrology",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "b650b9c4-fb7e-4bde-99e0-33b134e06b6e",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 1,
        "name": "Intellectual property protection",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "237f68e8-5c50-43c5-9196-4cb32127b5b9",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 1,
        "name": "Przedmiot humanistyczny",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "c16a925f-a8c3-47bb-afe1-58b8fa98afb8",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 1,
        "name": "Information technologies",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "0d8315fc-3df8-42b1-9f39-79fdae11f55b",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 1,
        "name": "Physical education",
        "has_exam": false,
        "exam_date": null,
        "color": "#065f46"
    },
    {
        "id": "5a8ca606-eb86-4d26-828e-36730600e3da",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 2,
        "name": "Digital signal processing",
        "has_exam": false,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 2,
        "name": "Economics",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "2a9e6461-ef26-4421-9284-eb377d685d9f",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 2,
        "name": "Electrotechnics",
        "has_exam": true,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "ea1862ea-4b00-4790-9ced-bb854ef5228b",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 2,
        "name": "Discrete Mathematics and Numerical Methods",
        "has_exam": true,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "9f30b25a-9e72-4dd2-92c9-5c29ea5ad354",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 2,
        "name": "Mechanics and strength of materials in robotics",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 2,
        "name": "C language and object-oriented programming",
        "has_exam": true,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "3f39124c-2a1c-4bcd-9bf1-4371df938e73",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 2,
        "name": "Przedmiot nauki społeczne",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "f3ba96e1-4bc1-45e9-a116-f2f08cb2c51e",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 2,
        "name": "Probability theory and mathematical statistics",
        "has_exam": false,
        "exam_date": null,
        "color": "#065f46"
    },
    {
        "id": "78744625-c290-4253-b502-c55236e9bd8a",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 2,
        "name": "Physical education",
        "has_exam": false,
        "exam_date": null,
        "color": "#991b1b"
    },
    {
        "id": "3dfb0cb7-85c4-4e7e-b73e-ed0975030499",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 3,
        "name": "Automation and Automatic Control",
        "has_exam": true,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 3,
        "name": "Electronic elements and systems",
        "has_exam": true,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "29533e0d-aba8-4cb6-a781-9c4f1f4d946d",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 3,
        "name": "Power electronics elements of automation and robotics",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "51513500-b7ce-4a8a-b48f-46e25b62bc26",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 3,
        "name": "Foreign language",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "6dee5825-e531-4aa7-91ee-2dbbcc2aa820",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 3,
        "name": "Electric drives",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "6725d2dc-e325-4525-b467-9e137bccc8dd",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 3,
        "name": "Introduction to robotics",
        "has_exam": true,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "012c2926-2e2f-4ac3-b019-78db10271012",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 3,
        "name": "Microprocessor controllers",
        "has_exam": true,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "70597255-87d6-40c2-b05a-92f689229c81",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 4,
        "name": "Automatic control of electric drive",
        "has_exam": false,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "d7e5e8e9-367f-4f88-80e0-2ebeebee6f77",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 4,
        "name": "Foreign language",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "7c2cb60e-8a5e-4da6-9689-44391786b37a",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 4,
        "name": "Computational methods for optimization",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "28be2e1b-58bd-4781-8928-05099bf6aaf0",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 4,
        "name": "Distributed control systems",
        "has_exam": true,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "4d4b9302-60d8-4027-91e1-f71deea92322",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 4,
        "name": "Industrial networks",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "f94c0b73-19d3-4e57-860e-2174e663f907",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 4,
        "name": "Control of continuous processes",
        "has_exam": true,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "6bfa0093-ade6-44fd-bf89-3701f8868d2f",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 4,
        "name": "Control of discrete processes",
        "has_exam": true,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": null,
        "semester": 4,
        "name": "Decision support systems",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    //WEiI - ACR - SPEC - Automation of manufacturing ...
    {
        "id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 5,
        "name": "Construction and control of CNC machines in manufacturing and intralogistics",
        "has_exam": true,
        "exam_date": null,
        "color": "#6b21a8"
    },
    {
        "id": "149206c7-5c49-493a-928e-4d9ca381f467",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 5,
        "name": "Foreign language",
        "has_exam": true,
        "exam_date": null,
        "color": "#0e7490"
    },
    {
        "id": "c2d8a15a-e59d-4aff-915f-bbc61ac9a901",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 5,
        "name": "Artificial intelligence methods in manufacturing systems and intralogistics",
        "has_exam": true,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "ebc5c81b-5bb5-4635-a8e9-5c1f6a41937e",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 5,
        "name": "Modern IT system architectures and programming technologies",
        "has_exam": true,
        "exam_date": null,
        "color": "#525252"
    },
    {
        "id": "cae14b91-6b27-4b1a-bcf3-a3638d06ba48",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 5,
        "name": "Basis of the manufacturing techniques",
        "has_exam": true,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "20a82486-15f8-4a8e-a00c-b06d7da9f3a8",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 5,
        "name": "Practice",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "5e0c9b53-f217-4b23-85aa-041b673ea954",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 5,
        "name": "Industrial databases",
        "has_exam": true,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "e14ce13f-10d6-4f3a-9866-29c113924bcf",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 5,
        "name": "Manufacturing systems and intralogistics in industry",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 6,
        "name": "Automation and robotization of manufacturing and intralogistics systems",
        "has_exam": true,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 6,
        "name": "Diagnostics and supervision of machines and processes",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "5dc54d04-7307-4a5d-afff-5c278887bdc1",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 6,
        "name": "Moduł wybierany w zakresie inżynierii produkcji",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "e163b9de-d84a-4e20-9f26-10ab46be532f",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 6,
        "name": "PLC control software and HMI for intralogistics",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "5b2dfb27-3399-4623-94a0-332377151e2f",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 6,
        "name": "Designing the hardware layer of control systems for intralogistics",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "9d5d3b4c-636e-413d-82aa-809f32147c56",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 6,
        "name": "Project management and soft skills in engineering practice",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "21c8add5-5a50-4f0b-8fa4-fa6e6927ead3",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 6,
        "name": "Diploma seminar",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "1f3ee25c-dff5-4fec-851f-f95e9c35673e",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 6,
        "name": "Wireless technologies in automation and intralogistics",
        "has_exam": false,
        "exam_date": null,
        "color": "#065f46"
    },
    {
        "id": "83094699-d34c-4943-98d2-056ac97bcded",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 7,
        "name": "Digital twin and intelligent diagnostic systems",
        "has_exam": false,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "efc6580d-e422-4475-86e7-717b159e36dc",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 7,
        "name": "Moduł wybierany w zakresie zastosowań systemów CAD/CAM",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "a0161636-a395-4d37-95e1-e22385befafb",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 7,
        "name": "Fundamentals of systems engineering and industrial cybersecurity",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "734eac67-4cf0-4eea-9949-b6f98b1af633",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 7,
        "name": "Diploma thesis",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "b69b24cb-5bf1-421e-a21f-14449a3e86ee",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 7,
        "name": "Industrial Internet of Things",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "5794c2c6-9073-4e9b-a0d3-251a1fe9e32a",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 7,
        "name": "Diploma seminar",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "e1d8ac75-409e-43a0-901a-2d8941b4137f",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 7,
        "name": "Monographic lecture",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "efc5bf1f-f3c9-4e3e-b8ca-0526a6b7056c",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "ceca64e1-bcc2-4e29-b88b-23e20c139f4a",
        "semester": 7,
        "name": "Automated measuring systems for geometric quantities",
        "has_exam": false,
        "exam_date": null,
        "color": "#065f46"
    },
    //WEiI - ACR - SPEC - Computer control system
    {
        "id": "91f85c19-d24c-4e52-92ec-58790a340b04",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 5,
        "name": "Artificial intelligence methods in control",
        "has_exam": true,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "fe30213f-c6bf-43bb-ace3-6c5357bac031",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 5,
        "name": "Modern programming technologies",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "a05502a6-a6d2-4502-8bb4-98eabf965185",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 5,
        "name": "Practice",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "ec7d5240-7ef7-4397-8c9e-03e15d5f49ed",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 5,
        "name": "Programming and design of real-time systems",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "2a9f8192-de59-4686-bf70-ff6e44b3005d",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 5,
        "name": "PLC and PAC programming",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "863a6542-7094-437c-8fb5-06f85ef59fbe",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 5,
        "name": "Industrial databases",
        "has_exam": true,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "3277898e-3125-456e-b0be-310f2fb8f73d",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 5,
        "name": "Computer networks",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "14782710-d330-4b0d-af1e-ede284228c00",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 5,
        "name": "Digital electronics",
        "has_exam": false,
        "exam_date": null,
        "color": "#065f46"
    },
    {
        "id": "e3300d3c-866e-4224-8f68-4b124af05e48",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 6,
        "name": "Mechatronics and Rapid Control Prototyping",
        "has_exam": false,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "ad2fad00-b038-4f30-8827-5551463f06c8",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 6,
        "name": "FEM methods in robotics",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "0e4b1203-c86a-40eb-9d83-76a9d4b94ba5",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 6,
        "name": "Organization and management of a small IT company",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "d5dfd946-19ab-42af-b9ca-c7f93fa2bf96",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 6,
        "name": "Design of microprocessors and reconfigurable control application",
        "has_exam": true,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "edaf238d-a700-4fd8-bb62-59d3529046c5",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 6,
        "name": "Mobile robots",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "b00ce108-7f42-4374-9b60-90c346f6e244",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 6,
        "name": "Diploma seminar",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "50f7bee4-bafb-45b9-9fc9-1ef2ddc72753",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 6,
        "name": "Wireless Technologies in Automation and Robotics",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "e8376373-27a7-46a4-852b-135f1bf051e8",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 6,
        "name": "Information technologies in classical and intelligent production control",
        "has_exam": false,
        "exam_date": null,
        "color": "#065f46"
    },
    {
        "id": "462376ec-0ce8-4d67-92b8-00cc2a1c94d1",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 7,
        "name": "Exploitation and security of systems",
        "has_exam": false,
        "exam_date": null,
        "color": "#003366"
    },
    {
        "id": "5b141423-db6b-476e-afc3-2b789206bea4",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 7,
        "name": "Chosen module I",
        "has_exam": false,
        "exam_date": null,
        "color": "#1a6b3a"
    },
    {
        "id": "9f95c295-0608-4129-822c-9d8382f956c7",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 7,
        "name": "Chosen module II",
        "has_exam": false,
        "exam_date": null,
        "color": "#7c3aed"
    },
    {
        "id": "b67799cb-69c7-4772-8b48-c159801c00ea",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 7,
        "name": "Chosen module III",
        "has_exam": false,
        "exam_date": null,
        "color": "#b45309"
    },
    {
        "id": "e32903df-d747-45a7-839e-6fa6f81b175c",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 7,
        "name": "Diploma thesis",
        "has_exam": false,
        "exam_date": null,
        "color": "#0369a1"
    },
    {
        "id": "360cd30a-7fc5-4fe7-987a-311a44ca3945",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 7,
        "name": "Diploma seminar",
        "has_exam": false,
        "exam_date": null,
        "color": "#be123c"
    },
    {
        "id": "1069d26c-572e-4af3-8a0b-56380a63c9f6",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 7,
        "name": "Computer graphics and vision in automatics and robotics",
        "has_exam": false,
        "exam_date": null,
        "color": "#1e293b"
    },
    {
        "id": "f8d86439-3b8a-4aa4-9a6e-73ba22d9406b",
        "faculty_id": "d096c417-e832-4d3b-a7be-b8fac1a99131",
        "direction_id": "de4f6f47-12c8-4027-a9cb-957b79cc2c0f",
        "specialization_id": "12521aa2-265a-4afc-aa8a-95351c9c3555",
        "semester": 7,
        "name": "Monographic lecture",
        "has_exam": false,
        "exam_date": null,
        "color": "#065f46"
    },
]

//Knowledge-points
export const KNOWLEDGE_POINTS: KnowledgePoint[] = [
    //WEiI - CE - BASE (SEM 1-4)
    {
        "id": "8257fa56-ce89-4b82-b41f-2ed0db40102c",
        "subject_id": "534e4376-e4a8-46e8-96cf-421b262fc5f2",
        "order": 1,
        "description": "Functins and their properties. Composition of a function and inverse function. Exponential, logarithmic and inverse-trygonometrical functions.",
        "estimated_minutes": 60
    },
    {
        "id": "13d6fdda-56ea-450e-9371-ba9e7f5fe349",
        "subject_id": "534e4376-e4a8-46e8-96cf-421b262fc5f2",
        "order": 2,
        "description": "Sequences of numbers and limits of the sequences. Monotonicity of a sequence of numbers",
        "estimated_minutes": 60
    },
    {
        "id": "69f47adc-8f2a-491b-89b5-f9d13a1361bb",
        "subject_id": "534e4376-e4a8-46e8-96cf-421b262fc5f2",
        "order": 3,
        "description": "Infinite series. Convergence. Comparison test for convergence of infinite series. Power series.",
        "estimated_minutes": 60
    },
    {
        "id": "1c35b8e1-78c2-43be-9b72-562bfc4001cf",
        "subject_id": "534e4376-e4a8-46e8-96cf-421b262fc5f2",
        "order": 4,
        "description": "Limit of one-variable function. Continuity of a function. Asymptotes of a function.",
        "estimated_minutes": 60
    },
    {
        "id": "02e05b49-42b5-4ce6-83e7-be11ab7b160c",
        "subject_id": "534e4376-e4a8-46e8-96cf-421b262fc5f2",
        "order": 5,
        "description": "Differential calculus of one-variable functions. Derivative of a function at a point. Derivatives of higher order. The basic theorems. Monotonicity and extrema of functions. Convex functions. Examination of a function.",
        "estimated_minutes": 60
    },
    {
        "id": "024ab5ce-806f-497d-9e90-28c176a27408",
        "subject_id": "534e4376-e4a8-46e8-96cf-421b262fc5f2",
        "order": 6,
        "description": "Integral calculus. Integration by parts and by substitution. Integration of rational, irrational and trygonometric functions. Definite integral, Newton-Leibniz theorem. Examples of geometric applications of definite integral.",
        "estimated_minutes": 60
    },
    {
        "id": "4ae52867-9d19-4083-a74a-f5b5c08de1af",
        "subject_id": "534e4376-e4a8-46e8-96cf-421b262fc5f2",
        "order": 7,
        "description": "Matrices and systems of linear equations. Rank of a matrix, determinant of a square matrix. Solving of any systems of linear equations using Cramer theorem and Kronecker-Cappeli theorem.",
        "estimated_minutes": 60
    },
    {
        "id": "b9639031-8de5-4ad6-9070-0a38f85d32a9",
        "subject_id": "534e4376-e4a8-46e8-96cf-421b262fc5f2",
        "order": 8,
        "description": "The set of complex numbers. Rectangular and trygonometric form of a complex number. Operations on complex numbers. Fundamental theorem of algebra.",
        "estimated_minutes": 60
    },
    {
        "id": "547acab9-117e-4fd4-9068-a759cf6cd58a",
        "subject_id": "6176a299-c360-4932-838d-17b69228a7da",
        "order": 1,
        "description": "Introduction, basic notions of mathematical linguistics.",
        "estimated_minutes": 60
    },
    {
        "id": "2d3d52ae-bc7e-4571-98ec-cda20daa33b9",
        "subject_id": "6176a299-c360-4932-838d-17b69228a7da",
        "order": 2,
        "description": "Context-free grammars.",
        "estimated_minutes": 60
    },
    {
        "id": "ea8a08ae-ff47-4bf4-92ab-c9f128a19916",
        "subject_id": "6176a299-c360-4932-838d-17b69228a7da",
        "order": 3,
        "description": "Simplification and transformation context-free grammar.",
        "estimated_minutes": 60
    },
    {
        "id": "e0b0cbce-a891-4125-a4f7-a9423a26f8d1",
        "subject_id": "6176a299-c360-4932-838d-17b69228a7da",
        "order": 4,
        "description": "Operations on context-free languages. Lemma about pumping.",
        "estimated_minutes": 60
    },
    {
        "id": "6dead774-944d-43b5-9180-ca4e607636e1",
        "subject_id": "6176a299-c360-4932-838d-17b69228a7da",
        "order": 5,
        "description": "The membership of word to context-free language",
        "estimated_minutes": 60
    },
    {
        "id": "7c1313de-2c56-41c6-9e04-bc44eade87a8",
        "subject_id": "6176a299-c360-4932-838d-17b69228a7da",
        "order": 6,
        "description": "Regular expressions, regular languages",
        "estimated_minutes": 60
    },
    {
        "id": "66e123d6-08fc-4d9b-b376-2dedc424bb2d",
        "subject_id": "6176a299-c360-4932-838d-17b69228a7da",
        "order": 7,
        "description": "Deterministic and complete grammars",
        "estimated_minutes": 60
    },
    {
        "id": "b66351c3-b8c5-41b1-a9e5-bc520da68abf",
        "subject_id": "6176a299-c360-4932-838d-17b69228a7da",
        "order": 8,
        "description": "Context languages, hierarchy Chomsky",
        "estimated_minutes": 60
    },
    {
        "id": "4b64ce99-0615-4509-84a7-25cda992f46c",
        "subject_id": "6176a299-c360-4932-838d-17b69228a7da",
        "order": 9,
        "description": "Finite automata and their analysis",
        "estimated_minutes": 60
    },
    {
        "id": "86e83944-9324-4cef-aa24-ec7a2c69dbde",
        "subject_id": "6176a299-c360-4932-838d-17b69228a7da",
        "order": 10,
        "description": "Stack automata, Turing machines, universal programming language",
        "estimated_minutes": 60
    },
    {
        "id": "9a4a1402-183d-477a-a404-fa5e32ca556c",
        "subject_id": "6176a299-c360-4932-838d-17b69228a7da",
        "order": 11,
        "description": "Programming paradigms",
        "estimated_minutes": 60
    },
    {
        "id": "a0911e18-16c8-4a30-a6b5-9e2902cf642c",
        "subject_id": "6176a299-c360-4932-838d-17b69228a7da",
        "order": 12,
        "description": "Regular expressions",
        "estimated_minutes": 60
    },
    {
        "id": "aa47adf6-396a-409d-91b7-eabfeaaaa0db",
        "subject_id": "6176a299-c360-4932-838d-17b69228a7da",
        "order": 13,
        "description": "Application of automata in decision processes",
        "estimated_minutes": 60
    },
    {
        "id": "0a003fbf-9bc2-48f6-b899-5876c2c8cd7e",
        "subject_id": "6176a299-c360-4932-838d-17b69228a7da",
        "order": 14,
        "description": "Object oriented programming: an application of the basic design patterns, software implementation, testing and debugging",
        "estimated_minutes": 60
    },
    {
        "id": "90d3f9c8-ca36-43da-ab00-b48c7c47ea50",
        "subject_id": "6176a299-c360-4932-838d-17b69228a7da",
        "order": 15,
        "description": "declarative programming: queries in the SQL and document transformations using XSLT",
        "estimated_minutes": 60
    },
    {
        "id": "bd9c683c-1fa4-4ed4-874e-ed747a422ff8",
        "subject_id": "e5c48497-fbe9-4eb9-9a1d-14bc7d75726e",
        "order": 1,
        "description": "Logical operators, formulae, functional completeness, normal forms",
        "estimated_minutes": 60
    },
    {
        "id": "aa958837-6082-48c3-a2f0-4cb1a707dfa5",
        "subject_id": "e5c48497-fbe9-4eb9-9a1d-14bc7d75726e",
        "order": 2,
        "description": "Tautologies, logical consequences, proof systems",
        "estimated_minutes": 60
    },
    {
        "id": "642a2125-cffd-450c-be93-6597a62b91da",
        "subject_id": "e5c48497-fbe9-4eb9-9a1d-14bc7d75726e",
        "order": 3,
        "description": "Resolution method, elements of first-order logic",
        "estimated_minutes": 60
    },
    {
        "id": "5404220e-096d-4296-a17b-032e27747413",
        "subject_id": "e5c48497-fbe9-4eb9-9a1d-14bc7d75726e",
        "order": 4,
        "description": "Algebra of sets, laws of algebra of sets, indexed families of sets",
        "estimated_minutes": 60
    },
    {
        "id": "ff7e6399-5f81-4b2f-b684-fa87fd37babd",
        "subject_id": "e5c48497-fbe9-4eb9-9a1d-14bc7d75726e",
        "order": 5,
        "description": "Cartesian product, relations, properties of relations",
        "estimated_minutes": 60
    },
    {
        "id": "eee48eab-60d9-4bf7-bcd6-9fbf7cf20bea",
        "subject_id": "e5c48497-fbe9-4eb9-9a1d-14bc7d75726e",
        "order": 6,
        "description": "Functions as relations, classes of functions, images and inverse images, inverse function",
        "estimated_minutes": 60
    },
    {
        "id": "26f360bb-0e9b-47a8-9ff9-8bbe1184a3ed",
        "subject_id": "e5c48497-fbe9-4eb9-9a1d-14bc7d75726e",
        "order": 7,
        "description": "Cardinality theory, Cantor's theorem",
        "estimated_minutes": 60
    },
    {
        "id": "52512abf-d852-4910-9860-8d3ff214b0af",
        "subject_id": "f21fe107-5068-455b-8da6-feca9ca42acf",
        "order": 1,
        "description": "Shell tools in computer systems. An introduction to Bash shell",
        "estimated_minutes": 60
    },
    {
        "id": "1c1b4909-8c0a-4577-a3c2-e738321980f3",
        "subject_id": "f21fe107-5068-455b-8da6-feca9ca42acf",
        "order": 2,
        "description": "File system commands. Conditional and iteration commands, environment variables, local variables, variable expanding",
        "estimated_minutes": 60
    },
    {
        "id": "7e08eb19-2d68-4fc9-9bba-762d112be37e",
        "subject_id": "f21fe107-5068-455b-8da6-feca9ca42acf",
        "order": 3,
        "description": "Basic usage of VIM editor. Shell scripts",
        "estimated_minutes": 60
    },
    {
        "id": "5a08ee55-7caf-4948-be90-6d8005800016",
        "subject_id": "f21fe107-5068-455b-8da6-feca9ca42acf",
        "order": 4,
        "description": "An introduction to LaTeX system",
        "estimated_minutes": 60
    },
    {
        "id": "e5ba913b-002a-437e-9dfb-150c46d4502a",
        "subject_id": "f21fe107-5068-455b-8da6-feca9ca42acf",
        "order": 5,
        "description": "Using packages in LaTeX",
        "estimated_minutes": 60
    },
    {
        "id": "a32e38e2-70b6-413f-98f6-d3937083db37",
        "subject_id": "f21fe107-5068-455b-8da6-feca9ca42acf",
        "order": 6,
        "description": "Subversion control system",
        "estimated_minutes": 60
    },
    {
        "id": "7cdd96c6-ff25-4a4b-bb58-a6073292577e",
        "subject_id": "f21fe107-5068-455b-8da6-feca9ca42acf",
        "order": 7,
        "description": "An introduction to Git version control system",
        "estimated_minutes": 60
    },
    {
        "id": "e4db83fe-f92d-4df0-b350-7a3ccdabe3c5",
        "subject_id": "f21fe107-5068-455b-8da6-feca9ca42acf",
        "order": 8,
        "description": "Branching and merging in Git",
        "estimated_minutes": 60
    },
    {
        "id": "5a77f191-b9c0-48f7-90eb-9c188199c88a",
        "subject_id": "f21fe107-5068-455b-8da6-feca9ca42acf",
        "order": 9,
        "description": "Advanced topics on merging and revoking changes. Git server administration. Triggers",
        "estimated_minutes": 60
    },
    {
        "id": "e45d01cf-0777-461f-af5b-5c9f1c5e48ca",
        "subject_id": "23a922df-6535-4951-8d43-6335021ff0ae",
        "order": 1,
        "description": "Basic elements of C language",
        "estimated_minutes": 60
    },
    {
        "id": "e1d6a62b-5b99-49a3-9c96-36759201ead0",
        "subject_id": "23a922df-6535-4951-8d43-6335021ff0ae",
        "order": 2,
        "description": "Input output operations",
        "estimated_minutes": 60
    },
    {
        "id": "7a4de446-49d7-403b-a8ef-111d857b7b08",
        "subject_id": "23a922df-6535-4951-8d43-6335021ff0ae",
        "order": 3,
        "description": "Operators",
        "estimated_minutes": 60
    },
    {
        "id": "83aaffce-58ce-460a-b664-2ee5d4b5441d",
        "subject_id": "23a922df-6535-4951-8d43-6335021ff0ae",
        "order": 4,
        "description": "Instructions",
        "estimated_minutes": 60
    },
    {
        "id": "ed56c035-aa98-418b-9c5b-e013f53a999d",
        "subject_id": "23a922df-6535-4951-8d43-6335021ff0ae",
        "order": 5,
        "description": "Functions",
        "estimated_minutes": 60
    },
    {
        "id": "c1172fa3-075e-466c-b83e-85df95240ee1",
        "subject_id": "23a922df-6535-4951-8d43-6335021ff0ae",
        "order": 6,
        "description": "Tables",
        "estimated_minutes": 60
    },
    {
        "id": "0fe26f17-2b93-431c-a5df-b6e1017c0762",
        "subject_id": "23a922df-6535-4951-8d43-6335021ff0ae",
        "order": 7,
        "description": "Pointers",
        "estimated_minutes": 60
    },
    {
        "id": "53142733-4a83-4fc4-b2e5-4b490216fd19",
        "subject_id": "23a922df-6535-4951-8d43-6335021ff0ae",
        "order": 8,
        "description": "Structures",
        "estimated_minutes": 60
    },
    {
        "id": "98100aea-4f80-4b4d-be90-a0a85dfaaa49",
        "subject_id": "23a922df-6535-4951-8d43-6335021ff0ae",
        "order": 9,
        "description": "Files",
        "estimated_minutes": 60
    },
    {
        "id": "f5629504-111c-484a-838c-6b21675b1166",
        "subject_id": "23a922df-6535-4951-8d43-6335021ff0ae",
        "order": 10,
        "description": "C language extensions",
        "estimated_minutes": 60
    },
    {
        "id": "7a320d8b-35a5-46a9-b0b5-b6e1878ed921",
        "subject_id": "d208bdbe-cf62-4266-8137-e7bbe0de19f2",
        "order": 1,
        "description": "Signals as an information carrier - classification of wireless and wired transmission media, basic quantities and their units: electric and magnetic field, electric potential and voltage, direct and alternating electric current",
        "estimated_minutes": 60
    },
    {
        "id": "a682c8b4-8497-423c-b5a0-efdf3074dada",
        "subject_id": "d208bdbe-cf62-4266-8137-e7bbe0de19f2",
        "order": 2,
        "description": "Passive elements of electronic systems - resistive elements and their purpose, the concept of resistance and conductance, capacitors as capacitive elements, the concept of capacitance, inductive elements, the purpose of inductors, the concept of inductance, magnetic coupling",
        "estimated_minutes": 60
    },
    {
        "id": "414d544a-5757-43d5-bafa-2e46e7bde61d",
        "subject_id": "d208bdbe-cf62-4266-8137-e7bbe0de19f2",
        "order": 3,
        "description": "Fundamentals of the analysis of DC circuits - sources of DC current and voltage, Ohm's law and Kirchhoff's law, methods of analysis of DC circuits, the mesh and nodal potential method, the principle of superposition, power in DC circuits, the use of Matlab for the analysis of DC circuits",
        "estimated_minutes": 60
    },
    {
        "id": "b30cb9db-26c2-4efe-bf9b-ae6cd69f2661",
        "subject_id": "d208bdbe-cf62-4266-8137-e7bbe0de19f2",
        "order": 4,
        "description": "Basics of the analysis of sinusoidal alternating current circuits, complex numbers and their use to represent sinusoidal alternating signals, RL and RC circuits, RLC circuits, power in alternating current circuits, the use of Matlab for the analysis of sinusoidal alternating current circuits",
        "estimated_minutes": 60
    },
    {
        "id": "1b0fa6a8-5e78-4b77-83ee-2df845511941",
        "subject_id": "d208bdbe-cf62-4266-8137-e7bbe0de19f2",
        "order": 5,
        "description": "Nonsinusoidal signals, signal representation in the time and frequency domains, spectral analysis of signals using Matlab",
        "estimated_minutes": 60
    },
    {
        "id": "607f3c80-3b5b-453a-af23-6723c72e5076",
        "subject_id": "4a40a30e-b63f-40ad-9612-38ce283ec021",
        "order": 1,
        "description": "Definition of measurement. Elements of the measuring process. Measurement and information.Standards, units of measurement, measurement scales. Authentication, calibration, checking, adjustment of measuring equipment.",
        "estimated_minutes": 60
    },
    {
        "id": "bc5023e0-6de5-457d-af2a-602e17107484",
        "subject_id": "4a40a30e-b63f-40ad-9612-38ce283ec021",
        "order": 2,
        "description": "Modern digital measuring instruments used in the measurement of electrical quantities (multimeter, oscilloscope, frequency meter, function generator, DC power supply). Cooperation of measuring instruments with a computer. Measurement methods.",
        "estimated_minutes": 60
    },
    {
        "id": "9400d4d9-3240-4066-b30b-c3f085114028",
        "subject_id": "4a40a30e-b63f-40ad-9612-38ce283ec021",
        "order": 3,
        "description": "Error and measurement uncertainty. Classification of measurement errors. Maximum permissible error. Calculation of the uncertainty of the result in direct and indirect measurements. Principles for the development of a series of measurement results.",
        "estimated_minutes": 60
    },
    {
        "id": "bf425c81-ae25-4dba-a011-3158bd391474",
        "subject_id": "4a40a30e-b63f-40ad-9612-38ce283ec021",
        "order": 4,
        "description": "Measurements: DC voltage and current, AC voltage, frequency, time interval, resistance, phase shift angle. Measurements of basic parameters of electronic circuits.",
        "estimated_minutes": 60
    },
    {
        "id": "e3f3e3ab-6940-4baa-b45a-c371ed4bd424",
        "subject_id": "4a40a30e-b63f-40ad-9612-38ce283ec021",
        "order": 5,
        "description": "Measurement signals - classification, characteristics. Parameters of the periodic signal - definitions, methods and algorithms for their determination.",
        "estimated_minutes": 60
    },
    {
        "id": "325d9757-9e78-4d78-9a34-6db848b35ba1",
        "subject_id": "4a40a30e-b63f-40ad-9612-38ce283ec021",
        "order": 6,
        "description": "Acquisition of measurement signals. Sampling operation, Shannon-Kotelnikov theorem, aliasing, Quantization operation, quantization error. A/D converter. Modules for data acquisition. DAQ configuration. Elements of digital signal processing (noise filtration, amplitude spectrum determination, windowing, spectrum leakage).",
        "estimated_minutes": 60
    },
    {
        "id": "b88d9e68-68cc-4e1c-b1f8-f97916c98ee4",
        "subject_id": "4a40a30e-b63f-40ad-9612-38ce283ec021",
        "order": 7,
        "description": "Sensors and transducers (static and dynamic properties)",
        "estimated_minutes": 60
    },
    {
        "id": "8ef77b8e-30ba-41de-83ed-4c10bea44de5",
        "subject_id": "4a40a30e-b63f-40ad-9612-38ce283ec021",
        "order": 8,
        "description": "Measuring systems (with data acquisition module, bus-interface). Software for measurement systems - graphical programming environments.",
        "estimated_minutes": 60
    },
    {
        "id": "cb1bcac8-f2e5-4580-9c5c-1158614c61e3",
        "subject_id": "4a40a30e-b63f-40ad-9612-38ce283ec021",
        "order": 9,
        "description": "Virtual measuring instruments in labVIEW. Introduction to programming in the LabVIEW environment. Development of an application in the LabVIEW environment for acquisition, visualization and spectral analysis of the measurement signal.",
        "estimated_minutes": 60
    },
    {
        "id": "06d47894-ba6d-4b92-b79c-07d9cf15970e",
        "subject_id": "15d266ae-4c91-4fe5-a51c-36d6bc9e7424",
        "order": 1,
        "description": "Basic concepts: algorithm, variable, instruction, program. Algorithms and notations.",
        "estimated_minutes": 60
    },
    {
        "id": "8fbc1e30-9f03-44c5-8328-92d2e1fc9831",
        "subject_id": "15d266ae-4c91-4fe5-a51c-36d6bc9e7424",
        "order": 2,
        "description": "Compilers and code interpreters. Programming environments. Elements of Python language, symbols, identifiers, programming style. Program structure, declarations of names and types, variable declarations. Running programs in the environment. Programmers' editors, integrated environment, program progress tracking, step work, viewing and modifying variable values.",
        "estimated_minutes": 60
    },
    {
        "id": "0e693aae-da67-4a3b-bc67-ac576fe7eb59",
        "subject_id": "15d266ae-4c91-4fe5-a51c-36d6bc9e7424",
        "order": 3,
        "description": "Data types, type conversion. Role of type in the process of program development, Importance of type in the compilation process. Integer types - representation of numbers. Character types - encoding of characters. Floating point types - representation. Arithmetic (integer vs. floating point). Variables and expressions. Operators: mathematical, relational, logical, and bitwise operators. Priorities of operators.",
        "estimated_minutes": 60
    },
    {
        "id": "f3faa009-92ec-4b05-a6ac-d0a174fbf85f",
        "subject_id": "15d266ae-4c91-4fe5-a51c-36d6bc9e7424",
        "order": 4,
        "description": "The program run. Instructions: empty, assignments, complex, conditional. Instructions iterative choice. Complex statements in the instructions for the controls. Break and continue the loop.Formatting and input / output operations.",
        "estimated_minutes": 60
    },
    {
        "id": "6a6243a6-c90c-4756-83e5-c7002aa10d0f",
        "subject_id": "15d266ae-4c91-4fe5-a51c-36d6bc9e7424",
        "order": 5,
        "description": "Complex data types. Lists, list operations, lambda expressions and functional programming, dictionaries, generators and iterators, threads.",
        "estimated_minutes": 60
    },
    {
        "id": "18bd1206-18cf-4a4d-b5c8-12076c2372fd",
        "subject_id": "15d266ae-4c91-4fe5-a51c-36d6bc9e7424",
        "order": 6,
        "description": "Functions, the concept of function; returning a result, passing parameters. Lifetime and scope validity of variables, local scope, global scope, and library functions. Recursion, recursive functions.",
        "estimated_minutes": 60
    },
    {
        "id": "ab9ff42e-b294-45b6-9fc5-9c7bd46986b0",
        "subject_id": "15d266ae-4c91-4fe5-a51c-36d6bc9e7424",
        "order": 7,
        "description": "Files, file variable, opening and closing a file, reading and writing data to a file. Text and binary files. Exceptions, handling, errors. Modules, packages, dynamic structures: stack, queue, list.",
        "estimated_minutes": 60
    },
    {
        "id": "878c0077-32e8-4b2e-ab77-6256d9a5c614",
        "subject_id": "15d266ae-4c91-4fe5-a51c-36d6bc9e7424",
        "order": 8,
        "description": "Basics of object-oriented programming. Classes and their components. Objects, methods, \"pseudo\" constructor. Hermetization, inheritance. Principles of creating program code using object-oriented programming techniques.",
        "estimated_minutes": 60
    },
    {
        "id": "2474b381-1890-4987-baa1-4fe64ec2985c",
        "subject_id": "15d266ae-4c91-4fe5-a51c-36d6bc9e7424",
        "order": 9,
        "description": "Programming in Windows. Event-driven programs.Graphic user interface. Examples of simple applications. Principles and track running Windows applications. Ready library.",
        "estimated_minutes": 60
    },
    {
        "id": "602ec04d-af5b-4db9-a52b-afb8f1d4445a",
        "subject_id": "873cec00-c8a1-4844-878a-2e37f5c32a6e",
        "order": 1,
        "description": "Acquainting with the rules of participation in classes and the conditions for obtaining a pass. Discussion of the principles of safe use of sports facilities and equipment and safety rules in force during the course.",
        "estimated_minutes": 60
    },
    {
        "id": "a78acd36-15bc-48b8-82e5-860428c0526e",
        "subject_id": "873cec00-c8a1-4844-878a-2e37f5c32a6e",
        "order": 2,
        "description": "Implementation of various sets of warm-up exercises and exercises focused on developing the student's basic motor skills.",
        "estimated_minutes": 60
    },
    {
        "id": "5948fc5a-61eb-4d9f-9668-d98abb576d3a",
        "subject_id": "873cec00-c8a1-4844-878a-2e37f5c32a6e",
        "order": 3,
        "description": "Shaping general physical fitness, motor coordination, endurance, flexibility, speed through individual selection of sports activities (eg: football, volleyball, basketball, table tennis) or recreational physical activity (eg: badminton, gym exercises).",
        "estimated_minutes": 60
    },
    {
        "id": "f60d61cc-a9a0-4d51-ae04-b7bbe7da430e",
        "subject_id": "873cec00-c8a1-4844-878a-2e37f5c32a6e",
        "order": 4,
        "description": "Physical fitness test: Multistage 20 m Shuttle Run (Beep test).",
        "estimated_minutes": 60
    },
    {
        "id": "f24c13f8-b612-40f8-9400-01b5158cde08",
        "subject_id": "873cec00-c8a1-4844-878a-2e37f5c32a6e",
        "order": 1,
        "description": "Acquainting with the rules of participation in classes and credit conditions. Discussion of swimming pool conditions and safety rules applicable during exercise in the aquatic environment.",
        "estimated_minutes": 60
    },
    {
        "id": "8333193b-75d4-483f-a422-d9c5a0b4ab02",
        "subject_id": "873cec00-c8a1-4844-878a-2e37f5c32a6e",
        "order": 2,
        "description": "Initial adaptation to the aquatic environment: - face dipping, eye opening and orientation under the surface of the water, - mastery of breathing in the aquatic environment, familiarization with the buoyancy of water, - control of lying on the breast and back, - plays and games in water. Warm-up exercises, preparing for exercises in water. Learning how to behave in water in difficult and unusual situations: choking, shrinkage, sinking, etc.",
        "estimated_minutes": 60
    },
    {
        "id": "d05fb573-4a9a-43b1-836f-fdae4f9136ad",
        "subject_id": "873cec00-c8a1-4844-878a-2e37f5c32a6e",
        "order": 3,
        "description": "Learning backstroke style: lying on the back, slipping, correct leg work with a board on the hips and without a board, proper work of the arms. Improvement of proper coordination of lower and upper limbs. Learning free style: slipping on the chest, proper leg work combined with breathing, exercise with a board and without a board. Learning the proper work of the arms (swimming with a proper body with a proper breath and exhalation). Learning how to coordinate the work of lower and upper limbs with the determination of proper breathing. Learning breaststroke style: proper work of legs with a board and without boards on the chest and on the back, correct work of arms in a classic style. Coordination of lower and upper limbs and breathing in a classic style. Learning to jump on the legs and on the head.",
        "estimated_minutes": 60
    },
    {
        "id": "c1d6e350-5583-4bc1-b487-c7187f4054ca",
        "subject_id": "873cec00-c8a1-4844-878a-2e37f5c32a6e",
        "order": 4,
        "description": "Fitness test: a 25-meter swimming trial chosen by the student.",
        "estimated_minutes": 60
    },
    {
        "id": "3e2808a7-3a9f-47d9-a3d7-2c6ba96fab9e",
        "subject_id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "order": 1,
        "description": "Computational complexity of programs. The notions of time and memory complexities and complexity estimation. Asymptotic notations and their mathematical interpretation.",
        "estimated_minutes": 60
    },
    {
        "id": "7fe7bccd-7302-4ae5-8f07-6f83d58c70ce",
        "subject_id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "order": 2,
        "description": "Model of RAM-machine and RAM commands. The use of pseudo-code.",
        "estimated_minutes": 60
    },
    {
        "id": "3da0d010-548a-4a81-a4af-363c336060ff",
        "subject_id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "order": 3,
        "description": "Memory representations and basic operations on selected dynamic structures (lists, stacks, queues and graphs).",
        "estimated_minutes": 60
    },
    {
        "id": "8b8da92c-07c7-4a28-9dc8-d646372164f0",
        "subject_id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "order": 4,
        "description": "Tree-like structures and their features. Binary trees. Recursion. Tail recursion.",
        "estimated_minutes": 60
    },
    {
        "id": "f320cfd1-7a2d-49a5-9838-70d2a408fe9f",
        "subject_id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "order": 5,
        "description": "Binary search trees (BST) and their characteristics. Operations on BST.",
        "estimated_minutes": 60
    },
    {
        "id": "fca3aaea-db20-4b19-bc5f-87676e1c46a0",
        "subject_id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "order": 6,
        "description": "Definition, essential qualities and basic algorithms relating to heap. Priority queues.",
        "estimated_minutes": 60
    },
    {
        "id": "ac3d16dc-637c-4ef8-90c3-0d9b99fd9782",
        "subject_id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "order": 7,
        "description": "Searching on trees (breath-first, depth-first and best-first strategies). Generating of solution paths.",
        "estimated_minutes": 60
    },
    {
        "id": "8d8aab03-de91-468e-b990-4461c8774be4",
        "subject_id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "order": 8,
        "description": "Sorting - definitions and problem statement. Explanation and complexity estimation of selected sorting algorithms. Modifications of quicksort (Lomuto and Hoare schema).",
        "estimated_minutes": 60
    },
    {
        "id": "ac780ad5-9bdf-427c-ba15-06e2c611ee15",
        "subject_id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "order": 9,
        "description": "Advanced strategies – dynamic programming and greedy algorithms.",
        "estimated_minutes": 60
    },
    {
        "id": "5cdb6852-5328-48d5-b9d3-10b81ee56b58",
        "subject_id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "order": 10,
        "description": "Self-balancing binary search tree (AVL tree, red-black tree). B-tree, 2-3 tree. Splay tree.",
        "estimated_minutes": 60
    },
    {
        "id": "f674d107-563d-426e-88d2-de35ebba7882",
        "subject_id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "order": 11,
        "description": "Practical use of asymptotic notations. Example RAM-programs. Time and memory complexity estimation.",
        "estimated_minutes": 60
    },
    {
        "id": "fa680025-d9c9-4365-88d1-a00aa98397b6",
        "subject_id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "order": 12,
        "description": "The construction of algorithms operating on lists, stacks and queues. Solving problems with recursion.",
        "estimated_minutes": 60
    },
    {
        "id": "f6acbed3-fc75-49fe-a166-92be03706819",
        "subject_id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "order": 13,
        "description": "Solving problems with use of the structures based on binary trees (binary search trees, heaps)",
        "estimated_minutes": 60
    },
    {
        "id": "41c2e4c6-fa55-4242-bf2d-87226fea1581",
        "subject_id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "order": 14,
        "description": "Solving problems by searching the trees.",
        "estimated_minutes": 60
    },
    {
        "id": "148d1daf-185b-41ab-b08d-735dbc951921",
        "subject_id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "order": 15,
        "description": "Construction and practical verification of selected sorting algorithms.",
        "estimated_minutes": 60
    },
    {
        "id": "bcc8df62-7873-4562-9207-d8a8118e916c",
        "subject_id": "7469d673-e6b9-46f1-b603-bffeb506285f",
        "order": 16,
        "description": "Development and implementation of computer programs verifying the effectiveness of selected algorithms",
        "estimated_minutes": 60
    },
    {
        "id": "dcdeef0c-e36d-41c9-941d-365bfd8baa4f",
        "subject_id": "47d109c5-803d-4f95-9842-3359079a2221",
        "order": 1,
        "description": "Architecture of computer system and history of computers' development",
        "estimated_minutes": 60
    },
    {
        "id": "a7ea13fc-4206-427a-94cd-0cbe739a7f05",
        "subject_id": "47d109c5-803d-4f95-9842-3359079a2221",
        "order": 2,
        "description": "Interrupt system",
        "estimated_minutes": 60
    },
    {
        "id": "3cb42299-8c95-4bd1-939a-9d751a532e02",
        "subject_id": "47d109c5-803d-4f95-9842-3359079a2221",
        "order": 3,
        "description": "Construction, operation and handling of computer components",
        "estimated_minutes": 60
    },
    {
        "id": "cde6c471-fed1-4cdc-95f9-5ae813740b16",
        "subject_id": "9f06dd13-a013-454d-a8a5-a940e40f2e22",
        "order": 1,
        "description": "The physical properties of electronic materials",
        "estimated_minutes": 60
    },
    {
        "id": "c45c9d26-3f6a-4ae6-bc6c-9cb97780148e",
        "subject_id": "9f06dd13-a013-454d-a8a5-a940e40f2e22",
        "order": 2,
        "description": "Contact and surface phenomena in semiconductors",
        "estimated_minutes": 60
    },
    {
        "id": "d88f25bc-a4f7-43ce-ba2d-70d57a7d4e78",
        "subject_id": "9f06dd13-a013-454d-a8a5-a940e40f2e22",
        "order": 3,
        "description": "Semiconductor diodes and their applications",
        "estimated_minutes": 60
    },
    {
        "id": "616fb035-9559-403d-9fda-823a4b943571",
        "subject_id": "9f06dd13-a013-454d-a8a5-a940e40f2e22",
        "order": 4,
        "description": "Unipolar and bipolar transistors",
        "estimated_minutes": 60
    },
    {
        "id": "c8ea7c18-dd88-430d-ada1-21b8851ebf88",
        "subject_id": "9f06dd13-a013-454d-a8a5-a940e40f2e22",
        "order": 5,
        "description": "optoelectronic devices",
        "estimated_minutes": 60
    },
    {
        "id": "ff74c748-5825-4193-93fb-b57c3893efde",
        "subject_id": "9f06dd13-a013-454d-a8a5-a940e40f2e22",
        "order": 6,
        "description": "LF amplifier circuits",
        "estimated_minutes": 60
    },
    {
        "id": "4f9335da-c8a1-43eb-9946-5a80808d3473",
        "subject_id": "9f06dd13-a013-454d-a8a5-a940e40f2e22",
        "order": 7,
        "description": "Analog ICs - Linear applications of operational amplifier.",
        "estimated_minutes": 60
    },
    {
        "id": "6c95b63e-af9f-4fab-be83-fa4cffc993dc",
        "subject_id": "9f06dd13-a013-454d-a8a5-a940e40f2e22",
        "order": 8,
        "description": "Digital integrated circuits - basic logic gates",
        "estimated_minutes": 60
    },
    {
        "id": "15e96adb-d392-4337-9f06-3fd7b67bad7b",
        "subject_id": "1699d73a-efd4-406a-b030-d5cbd65e9200",
        "order": 1,
        "description": "Introduction.",
        "estimated_minutes": 60
    },
    {
        "id": "0f22b635-6e28-49e1-9f3c-737f06733750",
        "subject_id": "1699d73a-efd4-406a-b030-d5cbd65e9200",
        "order": 2,
        "description": "Number systems (positional and non-positional) and codes. Coding of information in computer systems. Fixed and floating point numbers (IEEE 754).",
        "estimated_minutes": 60
    },
    {
        "id": "691bf5b3-9924-4b54-9c28-27c4a3639063",
        "subject_id": "1699d73a-efd4-406a-b030-d5cbd65e9200",
        "order": 3,
        "description": "Arithmetic in computer systems: addition and subtraction (positional systems, fixed and floating point), multiplication (Booth's algorithm) and division, other operations.",
        "estimated_minutes": 60
    },
    {
        "id": "18ed4e8c-2402-4921-9a6e-0606becbb32a",
        "subject_id": "1699d73a-efd4-406a-b030-d5cbd65e9200",
        "order": 4,
        "description": "Boolean algebra. Functions (forms of description) and logical functors (gateways). NAND and NOR systems. Minimization of logical functions (Karnaugh and Quine-McCluskey methods). Hazard in combinational circuits.",
        "estimated_minutes": 60
    },
    {
        "id": "9cde0e46-0a61-4b7c-ae35-a172b466a9d4",
        "subject_id": "1699d73a-efd4-406a-b030-d5cbd65e9200",
        "order": 5,
        "description": "Combinational circuits: adder, decoder, transcoder, comparator, parity system, multiplexer and demulitiplekser. Design and simulation of combinational circuits.",
        "estimated_minutes": 60
    },
    {
        "id": "0c28a1b4-4b41-40f5-9f46-9b7f26c760bb",
        "subject_id": "1699d73a-efd4-406a-b030-d5cbd65e9200",
        "order": 6,
        "description": "Sequential circuits. Moore and Mealy structures. Synthesis: description, state and output tables, minimizing the number of internal states, coding tables (races). Asynchronous and synchronous circuits.",
        "estimated_minutes": 60
    },
    {
        "id": "aa8214c5-9666-4727-af10-fd884308ef92",
        "subject_id": "1699d73a-efd4-406a-b030-d5cbd65e9200",
        "order": 7,
        "description": "Asynchronous flip-flops (SR) and synchronous (static and dynamic): JK, T, D. Implementation of sequential circuits based on flip-flops.",
        "estimated_minutes": 60
    },
    {
        "id": "0b23cda4-839c-4e2e-868d-1883a449e1c1",
        "subject_id": "1699d73a-efd4-406a-b030-d5cbd65e9200",
        "order": 8,
        "description": "Sequential circuits (synthesis): synchronous and asynchronous counters, registers, comparators, adders.",
        "estimated_minutes": 60
    },
    {
        "id": "931af7bb-da8b-45b0-b58f-91d89d51beaf",
        "subject_id": "1699d73a-efd4-406a-b030-d5cbd65e9200",
        "order": 9,
        "description": "Arithmetic-logic unit.",
        "estimated_minutes": 60
    },
    {
        "id": "6dcf6e8b-74f5-4163-8d3e-f17ba4183b67",
        "subject_id": "8d7b27e2-7f19-4f61-ab31-394fed37bf03",
        "order": 1,
        "description": "Definition of a permutation. Methods of permutation notation (function, one- and two-line, matrix, cyclic, graph). Composition of two or more permutations. Transposition as the simplest permutation. Representation of a permutation in the form of a composite transposition of adjacent and non-adjacent elements. Inverse permutation. Permutation type. Power and order of permutations. The number of permutations of the specified type. Permutations of disorder. Self-inverse permutations - involutions. Even and odd permutations - sign of permutation and methods of its calculation. Permutation equations.",
        "estimated_minutes": 60
    },
    {
        "id": "051f48b9-6568-4a79-b7db-b639d6ce93b9",
        "subject_id": "8d7b27e2-7f19-4f61-ab31-394fed37bf03",
        "order": 2,
        "description": "Basic counting techniques. Permutations without repetitions and with repetitions. Combinations without repetitions and with repetitions. Variations without repetitions and with repetitions. Ordered divisions of a set. Number divisions. Number compositions. Counting the placements of balls in boxes and paths in a grid. On/off principle. Stirling numbers of the first and second kind.",
        "estimated_minutes": 60
    },
    {
        "id": "5bf7c0c3-a33d-415a-83b5-a7185443f9d0",
        "subject_id": "8d7b27e2-7f19-4f61-ab31-394fed37bf03",
        "order": 3,
        "description": "Homogeneous and heterogeneous recursive equations. Characteristic equation of recursive equation. Prediction method for heterogeneous equation. The way of predicting a particular solution in case the non-homogeneous function is a product of a power function and a polynomial. Solving counting problems by bringing them to the recursive equation. Counting permutations, the number of moves needed to pile up Hanoi towers, counting areas of the plane, partitions of a number, and division of the set.",
        "estimated_minutes": 60
    },
    {
        "id": "97894125-43ac-4a4f-99e5-c6b9a5ac6877",
        "subject_id": "8d7b27e2-7f19-4f61-ab31-394fed37bf03",
        "order": 4,
        "description": "Systems of representatives of subset sequences. Definition of a permanent and ways to calculate it. Laplace expansion. Ryser's formula for calculating the matrix permanent 0-1. All transversal generation algorithm. The use of a permanent to count variations without repetitions with restrictions on the occurrence of numbers on given positions in the variation and to count rook placements on a chessboard with forbidden squares.",
        "estimated_minutes": 60
    },
    {
        "id": "9f5cf63d-b136-4fbf-b726-b6bcfce9c2b7",
        "subject_id": "8d7b27e2-7f19-4f61-ab31-394fed37bf03",
        "order": 5,
        "description": "Independence in the graph. Independent sets of vertices and minimum vertex covers. Determination of maximum independent sets by the Boolean algebra method. Independence of the edges - matchings. Minimal dominating vertices sets. Minimal edge covers. Determining the full matchings in the bipartite graph by the method of the augmenting path.",
        "estimated_minutes": 60
    },
    {
        "id": "cc532822-ec69-4bce-98f2-44182018df5e",
        "subject_id": "8d7b27e2-7f19-4f61-ab31-394fed37bf03",
        "order": 6,
        "description": "Definition and basic properties of trees. Binary trees. Tree coding methods - simple and inverse Prufer code. Cayley's theorem on the number of labeled trees in complete graph. Methods of determining the minimum spanning tree (Prim and Kruskal algorithm). Determining the number of spanning trees for a simple graph based on a Laplace matrix.",
        "estimated_minutes": 60
    },
    {
        "id": "aec09af3-d842-4066-b3d9-87beb8230040",
        "subject_id": "8d7b27e2-7f19-4f61-ab31-394fed37bf03",
        "order": 7,
        "description": "Coloring of graphs. Proper vertex coloring. Chromatic number and chromatic polynomial. Edge coloring - chromatic index. Determining the chromatic polynomial by means of removing and adding edges.",
        "estimated_minutes": 60
    },
    {
        "id": "770247ea-6bb1-41e3-b8d0-b2cc74f887ab",
        "subject_id": "8d7b27e2-7f19-4f61-ab31-394fed37bf03",
        "order": 8,
        "description": "Paths and cycles in graphs. Determining the number of roads of a given length using the adjacency matrix. Conditions of existence of Euler's and Hamilton's cycles. The problem of the Chinese postman. Flaury's algorithm for the Euler cycle.",
        "estimated_minutes": 60
    },
    {
        "id": "d3489feb-7bde-4c85-890f-0b191b965bfd",
        "subject_id": "8d7b27e2-7f19-4f61-ab31-394fed37bf03",
        "order": 9,
        "description": "Topological graph theory. Planar graphs. Euler theorem for plane graphs. Graphs on surfaces.",
        "estimated_minutes": 60
    },
    {
        "id": "350a88b8-7f5e-4055-8020-5be9dc54d377",
        "subject_id": "156f1a34-e1bb-417d-ad60-b4210d69ee9f",
        "order": 1,
        "description": "Introduction to numerical methods. Basic terms. Definition of the error. Types of errors. Fixed and floating point arithmetics. Root-finding methods. Introduction to Octave programming.",
        "estimated_minutes": 60
    },
    {
        "id": "aab48646-c956-4d10-a3e1-271d26049538",
        "subject_id": "156f1a34-e1bb-417d-ad60-b4210d69ee9f",
        "order": 2,
        "description": "Systems of linear equations (SOLEs): direct methods: SOLEs with triangular matrix, Gauss elimination method, SOLEs with symmetric matrix iterative methods: Jacobi method, Chebyshev method",
        "estimated_minutes": 60
    },
    {
        "id": "a4854219-bfbc-462f-b1a7-f556f9b49554",
        "subject_id": "156f1a34-e1bb-417d-ad60-b4210d69ee9f",
        "order": 3,
        "description": "Eigenvalues and eigenvectors of a matrix: - the basic methods, characteristic polynomial, QR algorithm, Hessenberg matrix.",
        "estimated_minutes": 60
    },
    {
        "id": "1cf23441-0829-46c4-83ac-fe986c89581c",
        "subject_id": "156f1a34-e1bb-417d-ad60-b4210d69ee9f",
        "order": 4,
        "description": "Interpolation: Lagrange and Hermite interpolation, Newton interpolation formula, Aitken's method. Forward, backward, and central finite differences. Fraser's diagrams. Basis functions (polynomials, splines)",
        "estimated_minutes": 60
    },
    {
        "id": "c7efeef2-d17f-4f85-a9a1-aa77dfc02e32",
        "subject_id": "156f1a34-e1bb-417d-ad60-b4210d69ee9f",
        "order": 5,
        "description": "Approximation: least squares approximation: orthogonal and trigonometric polynomials, FFT, approximation in the maximum norm: power series method, Chebyshev series.",
        "estimated_minutes": 60
    },
    {
        "id": "b5c83f72-f323-49ee-ad65-d1ad618b926d",
        "subject_id": "156f1a34-e1bb-417d-ad60-b4210d69ee9f",
        "order": 6,
        "description": "Integration: definition of the quadrature, Newton-Cotes formulae, an integral over triangular region.",
        "estimated_minutes": 60
    },
    {
        "id": "fb742ac5-9178-4f00-b959-d6f2c509dd34",
        "subject_id": "156f1a34-e1bb-417d-ad60-b4210d69ee9f",
        "order": 7,
        "description": "Differentiation: approximation of the derivatives by difference quotient; Fraser's diagrams, partial derivatives.",
        "estimated_minutes": 60
    },
    {
        "id": "bb49804c-308e-42f6-937f-1259dcd19767",
        "subject_id": "156f1a34-e1bb-417d-ad60-b4210d69ee9f",
        "order": 8,
        "description": "Ordinary differential equaions (ODEs), systems of ODEs: state space method, Predictor-corector methods, Runge–Kutta methods.",
        "estimated_minutes": 60
    },
    {
        "id": "b17c3ccb-f915-40a2-b340-6a01a1895a26",
        "subject_id": "961323ca-4767-4aa8-bdc1-d8745136104e",
        "order": 1,
        "description": "Java technology, Java platform (JVM, Java API, JDK, Java SE, Java EE). Java Programming Language. Language basics, variables, operators, expressions, blocs, data types, arrays.",
        "estimated_minutes": 60
    },
    {
        "id": "270b8319-0474-4eed-ac4a-529bc52432e1",
        "subject_id": "961323ca-4767-4aa8-bdc1-d8745136104e",
        "order": 2,
        "description": "Java - Object Oriented Programming (OOP). Inheritance. Classes, data fields, methods, objects. Packages, modules. Type conversions. Handling exceptions. Collections. Multithreaded programming, thread management, thread synchronization.",
        "estimated_minutes": 60
    },
    {
        "id": "e86bbb29-a2ac-47b5-ac55-00fc8da7a674",
        "subject_id": "961323ca-4767-4aa8-bdc1-d8745136104e",
        "order": 3,
        "description": "Basics of AWT and Swing libraries, class hierarchy. Building a graphical user interface (GUI), basics, containers and components. Techniques for managing the layout of components in AWT and Swing libraries.",
        "estimated_minutes": 60
    },
    {
        "id": "59db75a9-9b27-4fa5-a36c-5fce7387708e",
        "subject_id": "961323ca-4767-4aa8-bdc1-d8745136104e",
        "order": 4,
        "description": "Java - Interfaces. AWT, Swing libraries - Event handling, part 1. Basics, categories of events. Examples of event handling, components, mouse and key events.",
        "estimated_minutes": 60
    },
    {
        "id": "38b3f25c-0a39-478c-9624-57fce98d8c43",
        "subject_id": "961323ca-4767-4aa8-bdc1-d8745136104e",
        "order": 5,
        "description": "Nested Classes. Static Nested Class. Inner Class. Local Inner Class. Anonymous Inner Class. AWT, Swing - Event handling, part 2.",
        "estimated_minutes": 60
    },
    {
        "id": "7f6fa66b-8c4e-4e0f-9d16-aa346dac98bb",
        "subject_id": "961323ca-4767-4aa8-bdc1-d8745136104e",
        "order": 6,
        "description": "Java - Lambda expressions. Method references. JavaFX part 1, application construction. Application, Stage, Scene classes. JavaFX - GUI structure. Layouts. GridPane, BorderPane, FlowPane classes.",
        "estimated_minutes": 60
    },
    {
        "id": "f1ec66c4-9a85-45cd-85fc-21c0b40f2fb7",
        "subject_id": "961323ca-4767-4aa8-bdc1-d8745136104e",
        "order": 7,
        "description": "Generic Types. Generic classes, interfaces. Collections. Enum Types. Java FX part. 2 - Event handling. Building an application in the MVC architecture. View - FXML, CSS. WebView, WebEngine classes. Hybrid applications.",
        "estimated_minutes": 60
    },
    {
        "id": "7dd16a1b-2dbc-47ab-a3c5-33f6f85b64b5",
        "subject_id": "961323ca-4767-4aa8-bdc1-d8745136104e",
        "order": 8,
        "description": "Java Stream API. Java ME, Embedded platform. Java Android App. Android SDK. Java class - Activity, View, Intents, Service, Content. Java Android - GUI construction, event handling. Swipe gestures. WebView class.",
        "estimated_minutes": 60
    },
    {
        "id": "49d19397-3b6b-423d-b6f9-239986143276",
        "subject_id": "961323ca-4767-4aa8-bdc1-d8745136104e",
        "order": 9,
        "description": "Java EE/Jakarta EE - Web Applications. Servlets. JSP, JSF, JavaBeans technologies. MVC applications. Java Web Services, JAX-WS, JAX-RS (SOAP, REST).",
        "estimated_minutes": 60
    },
    {
        "id": "bd91c850-e22f-40b1-b4d2-ce4f2d802416",
        "subject_id": "961323ca-4767-4aa8-bdc1-d8745136104e",
        "order": 10,
        "description": "Java EE – Enterprise App. Kontener EJB. EJB - Local Client, Remote Client. Enterprise MVC Application. EJB - Java Transactions API (JTA). EJB Security - Authentication, Authorization.",
        "estimated_minutes": 60
    },
    {
        "id": "8f6da80e-afa4-495b-a1c0-1d23f60c5c13",
        "subject_id": "961323ca-4767-4aa8-bdc1-d8745136104e",
        "order": 11,
        "description": "Java EE – Framework Spring/Spring Boot. Spring MVC Thymeleaf. Spring RESTful WS. Spring Microservices, Spring Security Web App.",
        "estimated_minutes": 60
    },
    {
        "id": "478b2fce-50ba-43a0-839d-fac70392a0c1",
        "subject_id": "961323ca-4767-4aa8-bdc1-d8745136104e",
        "order": 12,
        "description": "Java SE&EE, data processing. Java and XML - SAX, StAX, DOM, XSLT. Validation XML with DTD or XML Schema. Java - JSON. Technology JAXB, marshal, unmarshal.",
        "estimated_minutes": 60
    },
    {
        "id": "9edfe01c-76d4-4e03-a9a9-9e13efae8c33",
        "subject_id": "961323ca-4767-4aa8-bdc1-d8745136104e",
        "order": 13,
        "description": "Java SE&EE, databases. JDBC, DataSource. Java Persistence, EntityManager, Spring + Hibernate. REST CRUD Web App. Java Cloud",
        "estimated_minutes": 60
    },
    {
        "id": "8fb1cdd4-168b-4f73-b43a-2ac0b744e421",
        "subject_id": "908982a1-930a-4607-981d-352b4c2f1035",
        "order": 1,
        "description": "Acquainting with the rules of participation in classes and the conditions for obtaining a pass. Discussion of the principles of safe use of sports facilities and equipment and safety rules in force during the course.",
        "estimated_minutes": 60
    },
    {
        "id": "94fae2d9-cb04-4476-b051-49ac9f7ed5f2",
        "subject_id": "908982a1-930a-4607-981d-352b4c2f1035",
        "order": 2,
        "description": "Implementation of various sets of warm-up exercises and exercises focused on developing the student's basic motor skills.",
        "estimated_minutes": 60
    },
    {
        "id": "90d5c277-f71b-4f36-85fd-b36c3d439581",
        "subject_id": "908982a1-930a-4607-981d-352b4c2f1035",
        "order": 3,
        "description": "Shaping general physical fitness, motor coordination, endurance, flexibility, speed through individual selection of sports activities (eg: football, volleyball, basketball, table tennis) or recreational physical activity (eg: badminton, gym exercises).",
        "estimated_minutes": 60
    },
    {
        "id": "880bddb5-e970-40e3-b13f-facbb3eca66c",
        "subject_id": "908982a1-930a-4607-981d-352b4c2f1035",
        "order": 4,
        "description": "Physical fitness test: Multistage 20 m Shuttle Run (Beep test).",
        "estimated_minutes": 60
    },
    {
        "id": "bf760fb5-fa44-456e-ab96-9949d8279ac7",
        "subject_id": "908982a1-930a-4607-981d-352b4c2f1035",
        "order": 1,
        "description": "Acquainting with the rules of participation in classes and credit conditions. Discussion of swimming pool conditions and safety rules applicable during exercise in the aquatic environment.",
        "estimated_minutes": 60
    },
    {
        "id": "b0bce4e5-1303-4b9d-b0f3-a8136b7e42c8",
        "subject_id": "908982a1-930a-4607-981d-352b4c2f1035",
        "order": 2,
        "description": "Initial adaptation to the aquatic environment: - face dipping, eye opening and orientation under the surface of the water, - mastery of breathing in the aquatic environment, familiarization with the buoyancy of water, - control of lying on the breast and back, - plays and games in water. Warm-up exercises, preparing for exercises in water. Learning how to behave in water in difficult and unusual situations: choking, shrinkage, sinking, etc.",
        "estimated_minutes": 60
    },
    {
        "id": "cf75ab7f-977f-4328-8165-8ea10bd5bbd8",
        "subject_id": "908982a1-930a-4607-981d-352b4c2f1035",
        "order": 3,
        "description": "Learning backstroke style: lying on the back, slipping, correct leg work with a board on the hips and without a board, proper work of the arms. Improvement of proper coordination of lower and upper limbs. Learning free style: slipping on the chest, proper leg work combined with breathing, exercise with a board and without a board. Learning the proper work of the arms (swimming with a proper body with a proper breath and exhalation). Learning how to coordinate the work of lower and upper limbs with the determination of proper breathing. Learning breaststroke style: proper work of legs with a board and without boards on the chest and on the back, correct work of arms in a classic style. Coordination of lower and upper limbs and breathing in a classic style. Learning to jump on the legs and on the head.",
        "estimated_minutes": 60
    },
    {
        "id": "edd9719b-b666-42c3-bd1c-29e9201338a8",
        "subject_id": "908982a1-930a-4607-981d-352b4c2f1035",
        "order": 4,
        "description": "Fitness test: a 25-meter swimming trial chosen by the student.",
        "estimated_minutes": 60
    },
    {
        "id": "b95e4089-dd09-4add-a1f8-ce7c936e6b9f",
        "subject_id": "60ca4f02-b16b-49ea-8bff-4fabb271c412",
        "order": 1,
        "description": "Definitions of basic combinatorial objects and formulas for determining their number. Permutations without repetitions and with repetitions. Combinations without and with repetitions. Variations without and with repetitions. Stirling numbers of I and II kind.",
        "estimated_minutes": 60
    },
    {
        "id": "b1bd0cf9-1497-4c13-9cb4-129e5595df29",
        "subject_id": "60ca4f02-b16b-49ea-8bff-4fabb271c412",
        "order": 2,
        "description": "Generate all permutations without repetition in lexicographic and antilexicographic order. Generating all permutations by the minimum number of transposes and the minimum number of transpositions of adjacent elements. Generating permutations with repetitions. Generating a random permutation. Generating permutations of a given type, i.e. with a given set of cycles (e.g. only involutions or only disorderes). Generating permutations with constraints on the occurrence of numbers in given positions.",
        "estimated_minutes": 60
    },
    {
        "id": "15fec00b-fc78-4505-ae58-fb25fdfc10f5",
        "subject_id": "60ca4f02-b16b-49ea-8bff-4fabb271c412",
        "order": 3,
        "description": "Generate all members of an n-element set according to Gray code and natural binary code. Generating k-element subsets. Generating subsets of a set with repetitions (generating a combination with repetitions).",
        "estimated_minutes": 60
    },
    {
        "id": "2a071e95-d74c-49ee-ab90-dccf4dd26607",
        "subject_id": "60ca4f02-b16b-49ea-8bff-4fabb271c412",
        "order": 4,
        "description": "Generating all divisions of a number. Generating divisions of a number into k terms or with terms less than a certain value. Generating number composition. Strong and weak compositions.",
        "estimated_minutes": 60
    },
    {
        "id": "b2059808-017f-4385-bfba-aff6fb3d14ac",
        "subject_id": "60ca4f02-b16b-49ea-8bff-4fabb271c412",
        "order": 5,
        "description": "Generating divisions of a set into disjoint subsets (into blocks) - unordered divisions. Strings of limited growth. Generating divisions of a set of a given type and divisions into a fixed number of blocks. Generating ordered splits. Generating all solutions of the diophantine equation x1 + x2 + .. xk = n.",
        "estimated_minutes": 60
    },
    {
        "id": "454c03c0-d646-4f39-9494-683d6435b3c1",
        "subject_id": "60ca4f02-b16b-49ea-8bff-4fabb271c412",
        "order": 6,
        "description": "Generating binary strings with a fixed number of ones and zeros. Generating Fibonacci and Catallan binary strings. Generate Cartesian product strings and all transversals.",
        "estimated_minutes": 60
    },
    {
        "id": "b5b7e5d7-068b-481d-8289-8b8ba7305815",
        "subject_id": "60ca4f02-b16b-49ea-8bff-4fabb271c412",
        "order": 7,
        "description": "Exponential and ordinary creating functions. Applications of these functions to the problems of counting combinatorial objects.",
        "estimated_minutes": 60
    },
    {
        "id": "e4813743-fed8-4168-ae4b-6d68ce0b89fb",
        "subject_id": "20c69dba-59f5-42c3-a0ca-6eb7d72bb66e",
        "order": 1,
        "description": "Introduction and expectations of computer graphics, overview of the literature and software tools, presentation of selected projects.",
        "estimated_minutes": 60
    },
    {
        "id": "8b641beb-7dcc-4cec-b081-3107a976bdd3",
        "subject_id": "20c69dba-59f5-42c3-a0ca-6eb7d72bb66e",
        "order": 2,
        "description": "Display hardware. Concepts of pixel and frame buffer. Bresenham’s line drawing algorithms. Fill pattern algorithm. State machine. The synthetic camera model. Introduction to discrete techniques.",
        "estimated_minutes": 60
    },
    {
        "id": "a5de7720-74fa-4978-bdc9-c3781a97b17d",
        "subject_id": "20c69dba-59f5-42c3-a0ca-6eb7d72bb66e",
        "order": 3,
        "description": "Introduction to analytical geometry. 3D space projections. Matrices, matrix operations. Vertex-edge-wall model. Data structures of graphical models. Introduction to OpenGL. Three dimensional primitives, convex and concave polygons. Matrix notation of graphical objects. Examples",
        "estimated_minutes": 60
    },
    {
        "id": "353c3766-eb9b-4feb-8c29-c4bbd329eac9",
        "subject_id": "20c69dba-59f5-42c3-a0ca-6eb7d72bb66e",
        "order": 4,
        "description": "Mathematical curves and surfaces given by implicit equations. Surface of revolution. Helical, rotoidal and spiral surfaces. Quadrics. OpenGL computer implementations",
        "estimated_minutes": 60
    },
    {
        "id": "57a8e9b7-86ba-408e-bd97-ceb31fa97b4e",
        "subject_id": "20c69dba-59f5-42c3-a0ca-6eb7d72bb66e",
        "order": 5,
        "description": "Spline curves and spline surfaces. Hermite, Bezier, B-spline and NURBS curves and surfaces. Polynomial evaluation methods. Triangles mesh representations. Rendering of curves and surfaces. Subdivision of surfaces.",
        "estimated_minutes": 60
    },
    {
        "id": "8f3cdb7b-753a-436f-b044-71507283abcd",
        "subject_id": "20c69dba-59f5-42c3-a0ca-6eb7d72bb66e",
        "order": 6,
        "description": "Affine transformations. Rotation, translation and scaling. Transformations in homogenous coordinates. Concatenations of transformations. Global and local coordinates. Euler and RPY angles. Implementation of transformations. OpenGL transformation matrices. Examples.",
        "estimated_minutes": 60
    },
    {
        "id": "a34fa7f4-4287-4781-b07c-a78cf9d33a07",
        "subject_id": "20c69dba-59f5-42c3-a0ca-6eb7d72bb66e",
        "order": 7,
        "description": "Objects and viewers. The human visual system. The synthetic-camera model. Orthogonal projections. Perspective projections. Camera frame. Dynamic observer. Mirror and shear transformations. Direct and inverse transformations. Viewing in OpengGL Examples",
        "estimated_minutes": 60
    },
    {
        "id": "257fb99b-7664-43af-96df-1c65919d3933",
        "subject_id": "20c69dba-59f5-42c3-a0ca-6eb7d72bb66e",
        "order": 8,
        "description": "Attributes of primitives. RGB, CMY, YUV and HSV color representations. Indexed Color. Simple shading algorithms. Examples. Conversion of the color models. Fog.",
        "estimated_minutes": 60
    },
    {
        "id": "ffdd06c4-1380-45a3-b6fd-804b5ce265b0",
        "subject_id": "20c69dba-59f5-42c3-a0ca-6eb7d72bb66e",
        "order": 9,
        "description": "Lighting and shading. Ambient light. Spot light. Special light sources. The Gouraud and Phong reflection models. Material attributes. Blending algorithms. Natural phenomena. Smoke. Clouds. Fire. Examples.",
        "estimated_minutes": 60
    },
    {
        "id": "1bfaa73d-44ec-4f6e-8d15-f6df4e126775",
        "subject_id": "20c69dba-59f5-42c3-a0ca-6eb7d72bb66e",
        "order": 10,
        "description": "Texture mapping. Bitmap images. Bitmap files reading. Pixels and images. Type of texture mapping. Texture mapping in OpenGL. Filtration of textures. Aliasing effect. Mip-mapping techniques.",
        "estimated_minutes": 60
    },
    {
        "id": "85234f59-1e5e-4ba7-b054-ab2bd62af3d6",
        "subject_id": "20c69dba-59f5-42c3-a0ca-6eb7d72bb66e",
        "order": 11,
        "description": "Bump maps. Bump mapping mathematics. Classic high- field bump mapping. Vector rotation bump maps. Dot3_RBGA operator. Examples.",
        "estimated_minutes": 60
    },
    {
        "id": "1532104e-5dc5-4b7f-9ecf-9bffd63d0e5f",
        "subject_id": "20c69dba-59f5-42c3-a0ca-6eb7d72bb66e",
        "order": 12,
        "description": "Compositing techniques. Opacity and blending. Back-to-front rendering. Writing modes. Logical operators. OpenGL buffers. Bit and pixel operation in OpenGL. Raster and stroke text. Text attributes. Text conversions.",
        "estimated_minutes": 60
    },
    {
        "id": "1de9dc75-ac52-4644-bff0-cec5e6239a54",
        "subject_id": "20c69dba-59f5-42c3-a0ca-6eb7d72bb66e",
        "order": 13,
        "description": "Mathematical model of processes. Graphical interpretations of data stream. Simple model – particles. Hierarchical models with joints. Selected examples. Repulsive forces and friction. Rigid body animation. Mathematical model of the platform crane.",
        "estimated_minutes": 60
    },
    {
        "id": "cbbfa942-5d53-454d-930d-fdf10e9d7832",
        "subject_id": "20c69dba-59f5-42c3-a0ca-6eb7d72bb66e",
        "order": 14,
        "description": "Animation techniques- review. Motion reality. Flexible body animation. Constrains. Dynamic interactions and collisions.",
        "estimated_minutes": 60
    },
    {
        "id": "88a06d9b-3109-42bf-a08e-f0e52113228c",
        "subject_id": "20c69dba-59f5-42c3-a0ca-6eb7d72bb66e",
        "order": 15,
        "description": "Behavioral modeling. Models of trees bush and flowers. Plant growing algorithms. New trends in computer graphics. Review of the lectures. Final presentations.",
        "estimated_minutes": 60
    },
    {
        "id": "b3fc9b7d-fd96-41a1-ab57-30245d2102c4",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 1,
        "description": "Level B2 lower: Organizations - roles and responsibilities within the organization; innovation in the company;",
        "estimated_minutes": 60
    },
    {
        "id": "6a89b2e8-14de-460a-8016-9fbbd6e60008",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 2,
        "description": "Level B2 lower: Communication during the first meeting; chat/breaking ice; brands and marketing;",
        "estimated_minutes": 60
    },
    {
        "id": "20c328c0-2f9b-462d-8cc5-5565a9c7c7f5",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 3,
        "description": "Team communication; presentations; formal and semi-formal emails",
        "estimated_minutes": 60
    },
    {
        "id": "aaccc676-53b2-41b8-bef7-9e5403e0c48e",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship",
        "estimated_minutes": 60
    },
    {
        "id": "dca3340d-058a-4e73-8751-a807237815a6",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 5,
        "description": "Self-presentation; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "f9691f3b-7b07-46d1-bae0-948e45276f84",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 6,
        "description": "HR strategies; team communication; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "c97efd9e-e86d-4e54-9dee-9394a6b5fb70",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 7,
        "description": "Level C1: Innovation in business; innovative thinking; persuasion.",
        "estimated_minutes": 60
    },
    {
        "id": "59f6d7b7-5830-451b-b841-4439de01f591",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 8,
        "description": "Engaging during the presentation; Circular and linear economy.",
        "estimated_minutes": 60
    },
    {
        "id": "48bad0bf-8cd5-424b-b979-9ab34cf667bd",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 9,
        "description": "Lifecircle of products; clarification of information; effective meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "fff869de-5e64-448d-aa1a-1e2e3c783bae",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 1,
        "description": "Level B2 lower: Looking for a job. Job interview.",
        "estimated_minutes": 60
    },
    {
        "id": "47f3ef29-8a3a-4ce6-9609-1b84adb8dd38",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 2,
        "description": "Covering letter; business strategies; analysis of factors when planning in business.",
        "estimated_minutes": 60
    },
    {
        "id": "e37e4c78-8bda-49f0-b379-ae1c6652fc6b",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 3,
        "description": "Problem solving; cause and effect reporting.",
        "estimated_minutes": 60
    },
    {
        "id": "feffa31e-abc3-4ec7-81db-a1a4e412e001",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 4,
        "description": "Level B2 higher: Finance and economic crises; competition in business; reacting to bad news.",
        "estimated_minutes": 60
    },
    {
        "id": "c4b496c3-7bdc-40cc-851e-a857fa8e95ea",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 5,
        "description": "Clarification of information; reporting; technology in business.",
        "estimated_minutes": 60
    },
    {
        "id": "44f15972-5dbf-4945-825d-afd8ff8d9930",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 6,
        "description": "Dealing with a difficult interlocutor; negotiations; business proposals.",
        "estimated_minutes": 60
    },
    {
        "id": "3be4e880-6911-46fd-ba6e-85a66fe7a72b",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 7,
        "description": "Level C1: Finance and financial investments; questioning the facts; consideration of options.",
        "estimated_minutes": 60
    },
    {
        "id": "05221527-ffb8-4d1d-9955-5d91459988f3",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 8,
        "description": "Budget analysis; innovators/precursors in business.",
        "estimated_minutes": 60
    },
    {
        "id": "077e83f6-7790-46b9-ade7-63192a1a1506",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 9,
        "description": "Problem solving; reporting and planning.",
        "estimated_minutes": 60
    },
    {
        "id": "81cdc6ee-4656-4fa0-ba1d-0ac7c3cc4b07",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 1,
        "description": "Semester 5; lower B2 level: Logistics; Internet sale; communication during cooperation.",
        "estimated_minutes": 60
    },
    {
        "id": "e0a374e1-5e2e-447f-a23d-48fe18247387",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 2,
        "description": "Negotiations; complaints; entrepreneurship/running a business.",
        "estimated_minutes": 60
    },
    {
        "id": "326ad4be-8465-4fae-b2d0-d552e6172f75",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 3,
        "description": "Influencing people; presentation of facts and data.",
        "estimated_minutes": 60
    },
    {
        "id": "997f2580-a100-4776-871b-5ae33b7a864d",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship.",
        "estimated_minutes": 60
    },
    {
        "id": "ce538ca4-9969-4fe5-9fd7-79bee0f5ad6c",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 5,
        "description": "Presenting yourself; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "7d0e5988-2372-433f-ba0a-f4d02ab5fe09",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 6,
        "description": "HR strategies; team communication; leading meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "776238bf-deae-4461-a835-d620350618e5",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 7,
        "description": "Level C1: Marketing strategies; persuasion; data presentation.",
        "estimated_minutes": 60
    },
    {
        "id": "9cb740cc-67de-4b2f-92ec-4467a7597766",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 8,
        "description": "Building relationships based on trust; tourism industry.",
        "estimated_minutes": 60
    },
    {
        "id": "96b08c10-7247-490c-a3b4-8a90ff784720",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 9,
        "description": "Business contacts; diversifying the presentation with stories, business correspondence.",
        "estimated_minutes": 60
    },
    {
        "id": "d8fb10db-8b28-4193-9170-309439947dc7",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 1,
        "description": "Semester 6; lower B2 level: Cultural differences; working abroad; decision-making.",
        "estimated_minutes": 60
    },
    {
        "id": "0ddb4c12-7f58-44e3-9f2e-3e34193277b0",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 2,
        "description": "Building relationships; recommendations/suggestions; leadership.",
        "estimated_minutes": 60
    },
    {
        "id": "2590b256-89c2-42bc-9d09-41bed7307606",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 3,
        "description": "Feedback - giving and receiving; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "b3a58f63-bcbc-4cae-be59-55829934cd1e",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 4,
        "description": "Level B2 higher: Time management; emergencies.",
        "estimated_minutes": 60
    },
    {
        "id": "b9161c9c-4b12-4b38-b590-51bca99d698a",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 5,
        "description": "Difficult negotiations; email giving reason; change management.",
        "estimated_minutes": 60
    },
    {
        "id": "af923028-62b0-42b8-86d7-23e7dd45d859",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 6,
        "description": "Coaching and mentoring; brainstorming",
        "estimated_minutes": 60
    },
    {
        "id": "6f90a199-fa12-4425-b661-0fdd185878b9",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 7,
        "description": "Level C1: Workplace clashes; giving support; mediating conflict.",
        "estimated_minutes": 60
    },
    {
        "id": "4b6b903d-a6f9-4093-9da6-aeda18877df1",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 8,
        "description": "Reporting conflicts at work; enterpreneurial mindset.",
        "estimated_minutes": 60
    },
    {
        "id": "b8be0438-8cf6-4126-8a14-c55029766880",
        "subject_id": "ddc20e3a-3bcd-4001-8e28-74872420855c",
        "order": 9,
        "description": "Performance review; self-assesment.",
        "estimated_minutes": 60
    },
    {
        "id": "7f6de693-4f3c-439d-8125-4ea1cec1c456",
        "subject_id": "3cc9da59-5692-408d-ac70-a6bfe22ef175",
        "order": 1,
        "description": "An introduction to probability theory",
        "estimated_minutes": 60
    },
    {
        "id": "18afb930-c9af-4da8-9bd7-f97ca0c0e122",
        "subject_id": "3cc9da59-5692-408d-ac70-a6bfe22ef175",
        "order": 2,
        "description": "Elements of combinatorics. Events and the probability of random events. Probability space. Definitions and properties of probability. The classical definition of probability. Conditional probability and independence of of events. Probability of total and Bayes theorem.",
        "estimated_minutes": 60
    },
    {
        "id": "9b679c48-f83a-4731-ae6f-d9c42522de2b",
        "subject_id": "3cc9da59-5692-408d-ac70-a6bfe22ef175",
        "order": 3,
        "description": "Random variables and their distributions. Distributors of random variables. Random discrete (step) and continuous type variables. Numerical characteristics of random variables.",
        "estimated_minutes": 60
    },
    {
        "id": "cfb1e676-40fc-4f0a-8ff6-ecc6dbb7130e",
        "subject_id": "3cc9da59-5692-408d-ac70-a6bfe22ef175",
        "order": 4,
        "description": "Basic issues of descriptive statistics. Population, an attempt. Types of statistical characteristics and their measurement scales. The distribution and characteristics of the population in the sample. Statistical series. The number of ordinary and cumulative. Graphical representation of data: histograms, line charts, pie, etc. The statistical parameters: measures of location, variability, asymmetry, concentration.",
        "estimated_minutes": 60
    },
    {
        "id": "73f12ac6-38ef-4c92-bd88-cde96706a05f",
        "subject_id": "3cc9da59-5692-408d-ac70-a6bfe22ef175",
        "order": 5,
        "description": "Definition and basic properties of the estimators. Point estimation and the estimation of confidence intervals. Confidence intervals. Issues minimum size of the sample",
        "estimated_minutes": 60
    },
    {
        "id": "efb3871b-083e-44be-93fd-2fa950e04ec5",
        "subject_id": "3cc9da59-5692-408d-ac70-a6bfe22ef175",
        "order": 6,
        "description": "Verification of statistical hypotheses (parametric and nonparametric tests of significance tests of significance)",
        "estimated_minutes": 60
    },
    {
        "id": "35988d90-6c58-441b-ad80-548bff4fae5a",
        "subject_id": "3cc9da59-5692-408d-ac70-a6bfe22ef175",
        "order": 7,
        "description": "Methods of correlation and regression analysis.",
        "estimated_minutes": 60
    },
    {
        "id": "6a71c25d-6cae-446f-a12f-dbcb90cb41f6",
        "subject_id": "3cc9da59-5692-408d-ac70-a6bfe22ef175",
        "order": 8,
        "description": "Methods of dynamics analysis - time series, forecasting.",
        "estimated_minutes": 60
    },
    {
        "id": "55873fb6-60fb-4e62-9a4f-515004951e11",
        "subject_id": "3cc9da59-5692-408d-ac70-a6bfe22ef175",
        "order": 9,
        "description": "-",
        "estimated_minutes": 60
    },
    {
        "id": "bea45192-338b-4349-8950-c724a8f5af75",
        "subject_id": "3cc9da59-5692-408d-ac70-a6bfe22ef175",
        "order": 10,
        "description": "Application of statistical support of production processes - SPC.",
        "estimated_minutes": 60
    },
    {
        "id": "c805fc9e-a55d-4bef-9a66-8955de28f123",
        "subject_id": "3cc9da59-5692-408d-ac70-a6bfe22ef175",
        "order": 11,
        "description": "The use of artificial intelligence in time series forecasting.",
        "estimated_minutes": 60
    },
    {
        "id": "6b6f1058-6d4a-4196-8a3c-71b5315d23fe",
        "subject_id": "c6dba8da-5968-442d-ab77-9436171abaab",
        "order": 1,
        "description": "An introduction to the lecture. Presentation of the rules for cooperation. Assignment of subjects to self-develop and deliver. Establishing rules for the course credit. Passing the current list of source materials on to students.",
        "estimated_minutes": 60
    },
    {
        "id": "1c71bc2c-315c-40e5-bdbd-52d66e3a0d31",
        "subject_id": "c6dba8da-5968-442d-ab77-9436171abaab",
        "order": 2,
        "description": "Projects",
        "estimated_minutes": 60
    },
    {
        "id": "242c66f7-215b-4e75-867b-3222d1c681e1",
        "subject_id": "c6dba8da-5968-442d-ab77-9436171abaab",
        "order": 3,
        "description": "Types of employment relationships",
        "estimated_minutes": 60
    },
    {
        "id": "775dbc7d-8376-44e0-923f-d4f6ad80be0a",
        "subject_id": "c6dba8da-5968-442d-ab77-9436171abaab",
        "order": 4,
        "description": "Writing an employment contract, a contract for specific work, a mandate contract, issuing an invoice",
        "estimated_minutes": 60
    },
    {
        "id": "1f97665b-f429-42bb-80e3-5f91967e40a5",
        "subject_id": "c6dba8da-5968-442d-ab77-9436171abaab",
        "order": 5,
        "description": "Business model analysis Commercial law companies Establishing a commercial law company using the eKRS platform Funding for opening a business",
        "estimated_minutes": 60
    },
    {
        "id": "e207b45e-61c0-4694-ad1d-309dcea5e1a3",
        "subject_id": "c6dba8da-5968-442d-ab77-9436171abaab",
        "order": 6,
        "description": "Preparation of SWOT, Business Model Canvas for your own business idea",
        "estimated_minutes": 60
    },
    {
        "id": "f0faf4e1-545c-4d25-8030-4ad7b5d46eee",
        "subject_id": "c6dba8da-5968-442d-ab77-9436171abaab",
        "order": 7,
        "description": "Sole proprietorship: tax office - forms of taxation Sole proprietorship: ZUS",
        "estimated_minutes": 60
    },
    {
        "id": "0887b0ba-b377-431a-81b5-c13a58243f5c",
        "subject_id": "c6dba8da-5968-442d-ab77-9436171abaab",
        "order": 8,
        "description": "Application for funding for starting a business from UP",
        "estimated_minutes": 60
    },
    {
        "id": "c9c15d13-e850-48ff-b320-9670c69399b9",
        "subject_id": "c6dba8da-5968-442d-ab77-9436171abaab",
        "order": 9,
        "description": "CEIDG-1 Practical aspects of running your own business",
        "estimated_minutes": 60
    },
    {
        "id": "25eb1211-379e-4c02-9b12-d048ff137647",
        "subject_id": "f08eb02e-1e1a-4f6d-8f0a-20496e683d4e",
        "order": 1,
        "description": "Communication as the basis for building good relations with the environment.",
        "estimated_minutes": 60
    },
    {
        "id": "a9a44f6b-fbac-43fc-a126-edcc798e7bea",
        "subject_id": "f08eb02e-1e1a-4f6d-8f0a-20496e683d4e",
        "order": 2,
        "description": "Aspects of interpersonal communication",
        "estimated_minutes": 60
    },
    {
        "id": "524564d1-5771-4c32-bc31-0a3d2dd278c9",
        "subject_id": "f08eb02e-1e1a-4f6d-8f0a-20496e683d4e",
        "order": 3,
        "description": "Forms of interpersonal communication.",
        "estimated_minutes": 60
    },
    {
        "id": "28b80c82-54a8-4205-8cb8-5579033c2513",
        "subject_id": "f08eb02e-1e1a-4f6d-8f0a-20496e683d4e",
        "order": 4,
        "description": "Effective Communication Techniques.",
        "estimated_minutes": 60
    },
    {
        "id": "08cc79af-3566-4490-9907-9826af47ab83",
        "subject_id": "f08eb02e-1e1a-4f6d-8f0a-20496e683d4e",
        "order": 5,
        "description": "Persuasion, eristics, rhetoric",
        "estimated_minutes": 60
    },
    {
        "id": "9ae6f72d-a87a-41f7-a200-ddb2490d56c5",
        "subject_id": "f08eb02e-1e1a-4f6d-8f0a-20496e683d4e",
        "order": 6,
        "description": "Effective team communication.",
        "estimated_minutes": 60
    },
    {
        "id": "7a565ecb-da59-4222-a6b2-aaa9c30b1575",
        "subject_id": "f08eb02e-1e1a-4f6d-8f0a-20496e683d4e",
        "order": 7,
        "description": "Leader's communication competences",
        "estimated_minutes": 60
    },
    {
        "id": "88f47688-ac37-45a7-9384-f7c58da2e6f3",
        "subject_id": "f08eb02e-1e1a-4f6d-8f0a-20496e683d4e",
        "order": 8,
        "description": "Basic group roles",
        "estimated_minutes": 60
    },
    {
        "id": "8ec906ab-ac4f-4b8e-a5aa-2c60c36b2e8b",
        "subject_id": "f08eb02e-1e1a-4f6d-8f0a-20496e683d4e",
        "order": 9,
        "description": "Techniques of exerting influence",
        "estimated_minutes": 60
    },
    {
        "id": "753f7c88-04bc-4365-8811-609b7d2b5188",
        "subject_id": "f08eb02e-1e1a-4f6d-8f0a-20496e683d4e",
        "order": 10,
        "description": "Social psychology",
        "estimated_minutes": 60
    },
    {
        "id": "b8e1fc2f-c77e-4ffc-9533-98ef4e3e85b4",
        "subject_id": "f08eb02e-1e1a-4f6d-8f0a-20496e683d4e",
        "order": 11,
        "description": "Sources of conflicts and problems in the group",
        "estimated_minutes": 60
    },
    {
        "id": "c0f91f7e-3d8e-4c0d-bc11-b4ead012985d",
        "subject_id": "f08eb02e-1e1a-4f6d-8f0a-20496e683d4e",
        "order": 12,
        "description": "-",
        "estimated_minutes": 60
    },
    {
        "id": "8f551a1b-a995-451d-b10e-1726d460f047",
        "subject_id": "0b175c65-681b-46fa-b692-abe6a67d0b15",
        "order": 1,
        "description": "Introduction to C++ programming. The reading of simple programs. Introducing using standard streams.",
        "estimated_minutes": 60
    },
    {
        "id": "a11c617e-6395-437b-a589-7665d51a3d30",
        "subject_id": "0b175c65-681b-46fa-b692-abe6a67d0b15",
        "order": 2,
        "description": "Structures and classes: declaring and defining a member functions of a class. The 'this' pointer. Static data members of a class.",
        "estimated_minutes": 60
    },
    {
        "id": "42aca409-c723-4c51-8c9e-f825f6dd379c",
        "subject_id": "0b175c65-681b-46fa-b692-abe6a67d0b15",
        "order": 3,
        "description": "Encapsulation",
        "estimated_minutes": 60
    },
    {
        "id": "b28cfac4-f089-4c4c-9ccf-fc0d7e5e34a7",
        "subject_id": "0b175c65-681b-46fa-b692-abe6a67d0b15",
        "order": 4,
        "description": "Function overloading. Default parameter values. Introduction to constructor.",
        "estimated_minutes": 60
    },
    {
        "id": "581ee81e-25dc-45c8-b95e-5b1c8e151edd",
        "subject_id": "0b175c65-681b-46fa-b692-abe6a67d0b15",
        "order": 5,
        "description": "Constructors. Destructor. Dynamic memory allocation.",
        "estimated_minutes": 60
    },
    {
        "id": "d18257f1-36e0-4a7a-9def-43d0ade79a93",
        "subject_id": "0b175c65-681b-46fa-b692-abe6a67d0b15",
        "order": 6,
        "description": "Using an initializer list in constructor. Copy constructor.",
        "estimated_minutes": 60
    },
    {
        "id": "789d0eeb-62ad-4d4d-85d1-fb34c48f042b",
        "subject_id": "0b175c65-681b-46fa-b692-abe6a67d0b15",
        "order": 7,
        "description": "The friend functions of class. Friend classes.",
        "estimated_minutes": 60
    },
    {
        "id": "18c780e2-86a4-40e1-ad73-be84eeba7124",
        "subject_id": "0b175c65-681b-46fa-b692-abe6a67d0b15",
        "order": 8,
        "description": "Operator overloading: Implementation of an overloading operator. Global operator functions, operator as a member function.",
        "estimated_minutes": 60
    },
    {
        "id": "8a9923d1-cdf5-4b88-aa0d-a5a12d231cd5",
        "subject_id": "0b175c65-681b-46fa-b692-abe6a67d0b15",
        "order": 9,
        "description": "Overloading the assignment operator. Overloading standard input/output stream insertion and extraction operators.",
        "estimated_minutes": 60
    },
    {
        "id": "4daa2f28-bd56-4570-a9a4-b4411ca3a224",
        "subject_id": "0b175c65-681b-46fa-b692-abe6a67d0b15",
        "order": 10,
        "description": "Review of methods for the standard library I /O streams. File Streams.",
        "estimated_minutes": 60
    },
    {
        "id": "6173236a-4249-4b90-b4b2-2c67f3770312",
        "subject_id": "0b175c65-681b-46fa-b692-abe6a67d0b15",
        "order": 11,
        "description": "Inheritance. Deriving classes from a base class. The access control under inheritance.",
        "estimated_minutes": 60
    },
    {
        "id": "a07ec022-7bc9-4d30-b7e4-852872384d56",
        "subject_id": "0b175c65-681b-46fa-b692-abe6a67d0b15",
        "order": 12,
        "description": "Constructor and assignment operator in a derived class. Inherited memeber ambiguity.",
        "estimated_minutes": 60
    },
    {
        "id": "7b758f6d-8c1b-4e4f-abd3-1d22757b3129",
        "subject_id": "0b175c65-681b-46fa-b692-abe6a67d0b15",
        "order": 13,
        "description": "Virtual functions. Virtual destructors.",
        "estimated_minutes": 60
    },
    {
        "id": "7745175a-38a8-46de-ad5a-bb0fd8ef5684",
        "subject_id": "0b175c65-681b-46fa-b692-abe6a67d0b15",
        "order": 14,
        "description": "Abstract classes. Virtual base classes.",
        "estimated_minutes": 60
    },
    {
        "id": "fbf68d4d-266d-4a5b-9bf4-ba8680b19473",
        "subject_id": "0b175c65-681b-46fa-b692-abe6a67d0b15",
        "order": 15,
        "description": "Class templates",
        "estimated_minutes": 60
    },
    {
        "id": "b0772d41-1ff2-43e1-9991-bfcf43d0ee56",
        "subject_id": "b7639c57-d68b-4f2a-a35b-b01f47871dd1",
        "order": 1,
        "description": "Operating system definition. System place and rule In computer system. Kinds of operating systems. Computer system structure. Input-output structure, memory structure.Operating systems structure. System components. Operating system services. Operating system function and programs.",
        "estimated_minutes": 60
    },
    {
        "id": "3af429e1-fa4c-4a56-abf1-27cd8677a662",
        "subject_id": "b7639c57-d68b-4f2a-a35b-b01f47871dd1",
        "order": 2,
        "description": "Processes. Process and resource concepts. Process manager and resource manager. Data structures for process and resource management. Resource classification. Process states and state cycles. Process queues. Context switching. Schedulers. Threads..",
        "estimated_minutes": 60
    },
    {
        "id": "29857906-bda8-44ad-b7f0-3c0270130b80",
        "subject_id": "b7639c57-d68b-4f2a-a35b-b01f47871dd1",
        "order": 3,
        "description": "Processor allocation planning (scheduling). Kernel modules for scheduling. Preemptive and non-preemptive scheduling. Priority function and parameters. Criterion and examples of scheduling algorithms.",
        "estimated_minutes": 60
    },
    {
        "id": "d86eca9e-995a-4de6-8016-581fb380bc09",
        "subject_id": "b7639c57-d68b-4f2a-a35b-b01f47871dd1",
        "order": 4,
        "description": "Processes synchronization. Definition and classification of semaphores. Semaphore implementation. Using semaphores for classical synchronization problems. Locks. Conditional variables. Critical regions. Concurrent operation and synchronization. Classification of synchronization mechanisms.",
        "estimated_minutes": 60
    },
    {
        "id": "00f566c1-886b-4d06-a298-d56dabe892fd",
        "subject_id": "b7639c57-d68b-4f2a-a35b-b01f47871dd1",
        "order": 5,
        "description": "Unsafe process states. Deadlocks. Deadlock occurrence condition. Resource allocation graph and wait-for graph, properties. Deadlock problem resolution.",
        "estimated_minutes": 60
    },
    {
        "id": "22bf41d7-f48a-4987-a71c-757a40787284",
        "subject_id": "58104fe9-17d8-4225-9734-0fb8077764c0",
        "order": 1,
        "description": "Relational databases. Database examples. Relational database example. Database languages: DDL, DML, DCL, QL. Operations on relations: section, projection, join, union.",
        "estimated_minutes": 60
    },
    {
        "id": "b3620c2b-f3c7-450b-9c8a-273f018e4991",
        "subject_id": "58104fe9-17d8-4225-9734-0fb8077764c0",
        "order": 2,
        "description": "Principles of database design. Data modeling. Creating relational database scheme from entity relationship diagram.",
        "estimated_minutes": 60
    },
    {
        "id": "07806c10-8c24-48f6-aab0-fc538d11a878",
        "subject_id": "58104fe9-17d8-4225-9734-0fb8077764c0",
        "order": 3,
        "description": "Creation and modification of database scheme. Instructions for data manipulation. Table creation. Data types. Integrity constraints and validation. Inserting data. Updating and deleting.",
        "estimated_minutes": 60
    },
    {
        "id": "c7b4e199-4ba7-49c2-b064-33ab73015588",
        "subject_id": "58104fe9-17d8-4225-9734-0fb8077764c0",
        "order": 4,
        "description": "Simple SELECT queries. Data retrieval - WHERE caluse. Results ordering. Row grouping.",
        "estimated_minutes": 60
    },
    {
        "id": "73cbe0e7-5f71-4329-bf62-88d5fdcb98a6",
        "subject_id": "58104fe9-17d8-4225-9734-0fb8077764c0",
        "order": 5,
        "description": "Relation joining. Specification of join conditions. JOIN clause. Horizontal joins: UNION, INTERSECT, MINUS. Creating subqueries. Correlated and not correlated mode. Single-row functions. Aggregate functions.",
        "estimated_minutes": 60
    },
    {
        "id": "74be2031-084c-4ff4-94ea-6ca76619ad8e",
        "subject_id": "58104fe9-17d8-4225-9734-0fb8077764c0",
        "order": 6,
        "description": "Architecture of database application. Stored procedures. PL/SQL language. PL/SQL programming basics. Creating procedures and functions. Parameter passing. Common control instructions. Examples of stored procedures. Database web application design. Protection against SQL Injection attacks.",
        "estimated_minutes": 60
    },
    {
        "id": "8fe162b1-7753-4469-bee7-7222557d4e1d",
        "subject_id": "552607a9-b0c3-401c-a749-fd3d0059b2af",
        "order": 1,
        "description": "Introduction to the module. Presentation of module card, requirements.",
        "estimated_minutes": 60
    },
    {
        "id": "3ae20463-28b6-4a59-8fee-de2e24870bfe",
        "subject_id": "552607a9-b0c3-401c-a749-fd3d0059b2af",
        "order": 2,
        "description": "The concept of paradigm evolutions. Thomas Kuhn and his approach expressed by the structure of scientific revolutions. Technological evolutions from steam machine towards Industry 4.0. Mass digitalization.",
        "estimated_minutes": 60
    },
    {
        "id": "4524b464-b606-4b49-a45d-1981205b35de",
        "subject_id": "552607a9-b0c3-401c-a749-fd3d0059b2af",
        "order": 3,
        "description": "A short history of computer science and engineering: from needs toward solutions.",
        "estimated_minutes": 60
    },
    {
        "id": "7f8953af-9060-4b26-9764-3113ef5cfff0",
        "subject_id": "552607a9-b0c3-401c-a749-fd3d0059b2af",
        "order": 4,
        "description": "The cases of International Business Machines, Microsoft, Apple, Google - influence of mass information processing on global development. How to get global success?",
        "estimated_minutes": 60
    },
    {
        "id": "a8c51c7d-57cb-4337-a7a9-1b7bb8a3b0a1",
        "subject_id": "552607a9-b0c3-401c-a749-fd3d0059b2af",
        "order": 5,
        "description": "Development of start-ups, Unicorns. The spin-off, spin-out companies. Interdisciplinary approach. A path to the digital decade. New economy. Theory of complexity. Internet of Everything, Internet of living things.",
        "estimated_minutes": 60
    },
    {
        "id": "257ba798-69f8-49bb-9d00-bdf7e4b8017e",
        "subject_id": "552607a9-b0c3-401c-a749-fd3d0059b2af",
        "order": 6,
        "description": "Design Thinking and Project Based Learning - basic ideas and concepts.",
        "estimated_minutes": 60
    },
    {
        "id": "68a5b220-08d9-473c-a265-edb4eb6d5d31",
        "subject_id": "552607a9-b0c3-401c-a749-fd3d0059b2af",
        "order": 7,
        "description": "Management of projects, management of risk, agile methodologies versus waterfall methodology. Business plan. SWOT analysis. Market analysis.",
        "estimated_minutes": 60
    },
    {
        "id": "6a400c01-b5a0-476f-89dd-67761d18f77a",
        "subject_id": "552607a9-b0c3-401c-a749-fd3d0059b2af",
        "order": 8,
        "description": "Preparation of a team project: from need toward a practical solution. Common discussions about proposed ideas and solutions, conceptions of business plans, ideas for commercialization, presentation of final solutions.",
        "estimated_minutes": 60
    },
    {
        "id": "fa66ac6b-0af4-40cf-8507-06c2890ca770",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 1,
        "description": "Introduction to software engineering",
        "estimated_minutes": 60
    },
    {
        "id": "4239a146-300b-4484-92a7-e1da4dba8126",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 2,
        "description": "Relational database modeling using ERD",
        "estimated_minutes": 60
    },
    {
        "id": "50b1bf0d-8228-4c73-8eed-5a158eccc700",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 3,
        "description": "Processs modeling with DFD",
        "estimated_minutes": 60
    },
    {
        "id": "73102cd7-23bd-4217-b733-066a73ade1a6",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 4,
        "description": "Process modeling using Oracle Process Modeller",
        "estimated_minutes": 60
    },
    {
        "id": "f37135a7-70ad-43b7-b82f-e9410fca1387",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 5,
        "description": "Design of a relational database",
        "estimated_minutes": 60
    },
    {
        "id": "67673d1f-6540-4d72-aedd-126909ebbb75",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 6,
        "description": "ERD - advanced issues",
        "estimated_minutes": 60
    },
    {
        "id": "b7c05091-cdc0-40cc-a691-0c0f754b1af9",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 7,
        "description": "Design and implementation of the functionality of an information system",
        "estimated_minutes": 60
    },
    {
        "id": "61ed9ceb-048f-4651-88a8-b3525195809a",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 8,
        "description": "Analysis and design of an application with Oracle Case Method",
        "estimated_minutes": 60
    },
    {
        "id": "9283fa13-6985-497f-a317-dc4ad85640d9",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 9,
        "description": "Implementation of complex ERD models",
        "estimated_minutes": 60
    },
    {
        "id": "983f4c50-ab00-44a2-a371-76ff9982be4b",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 10,
        "description": "Object - oriented analysis and design",
        "estimated_minutes": 60
    },
    {
        "id": "107514bb-9724-4d94-8486-17ffbd457623",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 11,
        "description": "Class diagram - design and implementation",
        "estimated_minutes": 60
    },
    {
        "id": "3d7f2a06-39d0-4ae9-96bb-56d849cdcb7f",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 12,
        "description": "Sequence diagram. State Machine Diagram",
        "estimated_minutes": 60
    },
    {
        "id": "dddda43f-1697-45b7-9fd9-8a467f427bb3",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 13,
        "description": "Database applications",
        "estimated_minutes": 60
    },
    {
        "id": "47cc1155-cea1-45b9-9570-510663423bfc",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 14,
        "description": "Software development managament",
        "estimated_minutes": 60
    },
    {
        "id": "d1b189b1-554a-4e63-9e27-0afb72a0b9a1",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 15,
        "description": "Data modeling with ERD",
        "estimated_minutes": 60
    },
    {
        "id": "d92e5901-44dc-40c7-82fd-942f6112e558",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 16,
        "description": "Process modeling with DFD",
        "estimated_minutes": 60
    },
    {
        "id": "f7d0a2b3-7c92-4606-8795-b343006e0fd9",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 17,
        "description": "Reverse engineering and SQL code generation with the use of CASE Tools",
        "estimated_minutes": 60
    },
    {
        "id": "04e9d7ce-8df5-4d1f-be3c-239f916b6ec6",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 18,
        "description": "Data modeling with UML class diagrams",
        "estimated_minutes": 60
    },
    {
        "id": "91a9d283-b296-4ffc-9c1c-19566648dc70",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 19,
        "description": "Modeling system functionality using Use Case Diagrams",
        "estimated_minutes": 60
    },
    {
        "id": "be6fa894-56b6-4d74-b9e7-0a6ae8bdd859",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 20,
        "description": "Use case modeling with activity diagrams",
        "estimated_minutes": 60
    },
    {
        "id": "9beb8f58-7e77-4d10-91d2-b7f1a65ff2a1",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 21,
        "description": "Communication modeling with sequence diagrams",
        "estimated_minutes": 60
    },
    {
        "id": "620af3be-2e53-4026-adb2-51f698eaf9c6",
        "subject_id": "b9443e9b-98c7-497f-bf69-eb74c1cc6e9e",
        "order": 22,
        "description": "Analysis, design and implementation of a database application",
        "estimated_minutes": 60
    },
    {
        "id": "27100ead-6704-43b9-8ea7-1feb236ceb75",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 1,
        "description": "Level B2 lower: Organizations - roles and responsibilities within the organization; innovation in the company;",
        "estimated_minutes": 60
    },
    {
        "id": "c551b387-de94-4cd3-b86f-421e2d6ce858",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 2,
        "description": "Level B2 lower: Communication during the first meeting; chat/breaking ice; brands and marketing;",
        "estimated_minutes": 60
    },
    {
        "id": "b8ababa5-9e62-4aec-8824-8257b29512a5",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 3,
        "description": "Team communication; presentations; formal and semi-formal emails",
        "estimated_minutes": 60
    },
    {
        "id": "266a8f4a-7d2f-452f-883b-be0f30c798fb",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship",
        "estimated_minutes": 60
    },
    {
        "id": "dcfe06e2-4ede-4efc-a339-3b0ebe279d7f",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 5,
        "description": "Self-presentation; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "b3da5b98-9e48-4501-8ba9-a658c1676676",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 6,
        "description": "HR strategies; team communication; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "9dfc3c02-0616-49a9-86ec-1c7044947c11",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 7,
        "description": "Level C1: Innovation in business; innovative thinking; persuasion.",
        "estimated_minutes": 60
    },
    {
        "id": "08f5ff01-e2f3-425b-8c4a-7f85d5baeaf3",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 8,
        "description": "Engaging during the presentation; Circular and linear economy.",
        "estimated_minutes": 60
    },
    {
        "id": "9510c96c-3608-4924-8bac-a88896e9d2b6",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 9,
        "description": "Lifecircle of products; clarification of information; effective meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "e7491f1e-6f68-4d70-9436-52caf0000e24",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 1,
        "description": "Level B2 lower: Looking for a job. Job interview.",
        "estimated_minutes": 60
    },
    {
        "id": "592f2fc7-ec5d-4f6a-85f1-d601ab66705e",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 2,
        "description": "Covering letter; business strategies; analysis of factors when planning in business.",
        "estimated_minutes": 60
    },
    {
        "id": "59e9e6af-ccac-4edd-abb3-1fd1df6ec8c2",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 3,
        "description": "Problem solving; cause and effect reporting.",
        "estimated_minutes": 60
    },
    {
        "id": "d849c616-79c7-4c3e-8880-ec091b1f76b2",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 4,
        "description": "Level B2 higher: Finance and economic crises; competition in business; reacting to bad news.",
        "estimated_minutes": 60
    },
    {
        "id": "caff32f7-8c32-4c84-8093-daa902f566aa",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 5,
        "description": "Clarification of information; reporting; technology in business.",
        "estimated_minutes": 60
    },
    {
        "id": "9ab9e028-ab64-46dd-91e2-c15284b68654",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 6,
        "description": "Dealing with a difficult interlocutor; negotiations; business proposals.",
        "estimated_minutes": 60
    },
    {
        "id": "d92165ea-5315-4f41-856c-b383b2c94a15",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 7,
        "description": "Level C1: Finance and financial investments; questioning the facts; consideration of options.",
        "estimated_minutes": 60
    },
    {
        "id": "713ad0b0-778c-4f42-917a-0d8af1358adf",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 8,
        "description": "Budget analysis; innovators/precursors in business.",
        "estimated_minutes": 60
    },
    {
        "id": "d24b908a-f7b2-466f-9100-c509f27786e7",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 9,
        "description": "Problem solving; reporting and planning.",
        "estimated_minutes": 60
    },
    {
        "id": "21cae21d-d432-41df-a89c-6add3d82ce7c",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 1,
        "description": "Semester 5; lower B2 level: Logistics; Internet sale; communication during cooperation.",
        "estimated_minutes": 60
    },
    {
        "id": "474aa407-b614-460a-bb79-651da4e9e41c",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 2,
        "description": "Negotiations; complaints; entrepreneurship/running a business.",
        "estimated_minutes": 60
    },
    {
        "id": "283d0bac-040a-46dd-a699-1dd1cfb53d80",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 3,
        "description": "Influencing people; presentation of facts and data.",
        "estimated_minutes": 60
    },
    {
        "id": "95d7a29f-20d8-420f-b9ea-aaa6adb79f2f",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship.",
        "estimated_minutes": 60
    },
    {
        "id": "20c21e6d-55a8-4d35-aff1-859c8e5f8f4a",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 5,
        "description": "Presenting yourself; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "27ecb381-226b-4cb7-860d-ab0c44c9bde1",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 6,
        "description": "HR strategies; team communication; leading meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "b521b0c3-4ef4-4e66-b48e-a9d9fb1cf4dc",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 7,
        "description": "Level C1: Marketing strategies; persuasion; data presentation.",
        "estimated_minutes": 60
    },
    {
        "id": "e50ae137-2bf3-4733-ac89-d2772987586f",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 8,
        "description": "Building relationships based on trust; tourism industry.",
        "estimated_minutes": 60
    },
    {
        "id": "c9108cef-70f4-4bf5-9cec-d77d2e19f27b",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 9,
        "description": "Business contacts; diversifying the presentation with stories, business correspondence.",
        "estimated_minutes": 60
    },
    {
        "id": "a9901fea-4e45-4498-a3c6-0aa8eea420e0",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 1,
        "description": "Semester 6; lower B2 level: Cultural differences; working abroad; decision-making.",
        "estimated_minutes": 60
    },
    {
        "id": "482bfdf6-0508-4263-a2a7-84f3b0d583ee",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 2,
        "description": "Building relationships; recommendations/suggestions; leadership.",
        "estimated_minutes": 60
    },
    {
        "id": "3bfa9814-8909-46bb-8945-a8b119a1cc74",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 3,
        "description": "Feedback - giving and receiving; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "ba3299ce-5c4a-4af5-b735-ba9e460be558",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 4,
        "description": "Level B2 higher: Time management; emergencies.",
        "estimated_minutes": 60
    },
    {
        "id": "f030ff48-c9c9-4875-81c9-2810915f3a56",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 5,
        "description": "Difficult negotiations; email giving reason; change management.",
        "estimated_minutes": 60
    },
    {
        "id": "1a95c823-785e-4a74-9cc6-724cd649437c",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 6,
        "description": "Coaching and mentoring; brainstorming",
        "estimated_minutes": 60
    },
    {
        "id": "cd5d6789-45ae-4afa-99ca-f2b9c611644a",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 7,
        "description": "Level C1: Workplace clashes; giving support; mediating conflict.",
        "estimated_minutes": 60
    },
    {
        "id": "bbf0ad5d-bfe7-497f-9b63-ffcbac1e08c5",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 8,
        "description": "Reporting conflicts at work; enterpreneurial mindset.",
        "estimated_minutes": 60
    },
    {
        "id": "e6042a26-0c34-4474-a33d-d776df918266",
        "subject_id": "1e762179-3aff-42f8-bddc-06152ae79fcf",
        "order": 9,
        "description": "Performance review; self-assesment.",
        "estimated_minutes": 60
    },
    {
        "id": "6003a502-ffbf-4e32-aa83-fbae2fd92cbe",
        "subject_id": "df1d091c-3456-42bf-b4a6-4260f0dc3808",
        "order": 1,
        "description": "the essence of telecommunications, its kinds. Information in telecommunications and its measure",
        "estimated_minutes": 60
    },
    {
        "id": "983993cb-e7fb-4ee6-879d-099f1e632c20",
        "subject_id": "df1d091c-3456-42bf-b4a6-4260f0dc3808",
        "order": 2,
        "description": "Telecommunication system. Concept of a signal. Spectrum and bandwidth of signals. Signals in time and frequency domains.",
        "estimated_minutes": 60
    },
    {
        "id": "58be3290-8d0d-486d-8216-c12166fc0480",
        "subject_id": "df1d091c-3456-42bf-b4a6-4260f0dc3808",
        "order": 3,
        "description": "-",
        "estimated_minutes": 60
    },
    {
        "id": "ed0bde5a-1683-44be-893a-12a5913b39a2",
        "subject_id": "df1d091c-3456-42bf-b4a6-4260f0dc3808",
        "order": 4,
        "description": "Analog modulations and demodulations AM, FM, PM.",
        "estimated_minutes": 60
    },
    {
        "id": "6d8c108b-5f3a-4223-8e71-4be95d58d6a3",
        "subject_id": "df1d091c-3456-42bf-b4a6-4260f0dc3808",
        "order": 5,
        "description": "A/D conversion of analog signals, signals sampling, pulse modulations, quantisation, quantisation noise. Digital codes - their description in time and frequency domains.",
        "estimated_minutes": 60
    },
    {
        "id": "17e3876f-15ba-4772-a4b6-a6b48f7ed81a",
        "subject_id": "df1d091c-3456-42bf-b4a6-4260f0dc3808",
        "order": 6,
        "description": "Noise , disturbances, fadings and distortions. Code protection from errors.",
        "estimated_minutes": 60
    },
    {
        "id": "2d36462f-e1f0-47bb-836f-689bc30b9f9b",
        "subject_id": "df1d091c-3456-42bf-b4a6-4260f0dc3808",
        "order": 7,
        "description": "General principles of signal reception, types of receivers, The concept of optimal receiver.",
        "estimated_minutes": 60
    },
    {
        "id": "4bd431d3-6be8-450a-b6da-d31ac325fd51",
        "subject_id": "9b2fde93-debc-443b-ac9f-e5b97e57ea92",
        "order": 1,
        "description": "Organizational activities. Determination of forms of assessment and the scope of the material. Getting to know the rules of working in the laboratory.",
        "estimated_minutes": 60
    },
    {
        "id": "2828c502-e288-4161-afab-37a34ac246a4",
        "subject_id": "9b2fde93-debc-443b-ac9f-e5b97e57ea92",
        "order": 2,
        "description": "The basis of transmission . The genesis and classification of computer networks.",
        "estimated_minutes": 60
    },
    {
        "id": "1a0dbffd-c2ca-4215-9b46-3fda18dd9d76",
        "subject_id": "9b2fde93-debc-443b-ac9f-e5b97e57ea92",
        "order": 3,
        "description": "MAC address. IPv4 and IPv6 addressing.",
        "estimated_minutes": 60
    },
    {
        "id": "9e564665-b6f9-43db-9788-77c36e226faf",
        "subject_id": "9b2fde93-debc-443b-ac9f-e5b97e57ea92",
        "order": 4,
        "description": "Computer network topologies. The concept of topology. Basic parameters of the computer networks topology. Examples of network topologies and their application.",
        "estimated_minutes": 60
    },
    {
        "id": "b82b94a0-238e-4a91-8835-4be9d8db0900",
        "subject_id": "9b2fde93-debc-443b-ac9f-e5b97e57ea92",
        "order": 5,
        "description": "Elements of the architecture of computer networks, their functionality and purpose",
        "estimated_minutes": 60
    },
    {
        "id": "c1389337-90c0-4bd4-9284-5f784ad4bd82",
        "subject_id": "9b2fde93-debc-443b-ac9f-e5b97e57ea92",
        "order": 6,
        "description": "ISO/OSI and TCP/IP model layers.",
        "estimated_minutes": 60
    },
    {
        "id": "243c2557-b6aa-4785-aed7-bed7792d4583",
        "subject_id": "9b2fde93-debc-443b-ac9f-e5b97e57ea92",
        "order": 7,
        "description": "The essence of the VLAN network and switching mechanisms.",
        "estimated_minutes": 60
    },
    {
        "id": "cd046e78-9a37-4957-8db5-605d9e981c6e",
        "subject_id": "9b2fde93-debc-443b-ac9f-e5b97e57ea92",
        "order": 8,
        "description": "The essence of spanning tree protocols.",
        "estimated_minutes": 60
    },
    {
        "id": "0846faf9-a0bd-4d4f-a53e-f8e7fbfa7bca",
        "subject_id": "9b2fde93-debc-443b-ac9f-e5b97e57ea92",
        "order": 9,
        "description": "Transmission media in computers networks: The most important parameters of the transmission medium. Classification of the media. Media wired and wireless. Fiber-optic cables. Copper cables.",
        "estimated_minutes": 60
    },
    {
        "id": "de91fc05-4bb4-4f28-91ea-14b2cf3de20c",
        "subject_id": "9b2fde93-debc-443b-ac9f-e5b97e57ea92",
        "order": 10,
        "description": "Routing fundamentals in computer networks. Static and dynamic routing. Distance-vector and link state routing protocols.",
        "estimated_minutes": 60
    },
    {
        "id": "8d19308d-f90f-4b10-9cd5-089e20db868c",
        "subject_id": "9b2fde93-debc-443b-ac9f-e5b97e57ea92",
        "order": 11,
        "description": "A complex analysis of the computer network - a case study including risk management aspects.",
        "estimated_minutes": 60
    },
    {
        "id": "2edda0e1-a443-41b2-b93b-dd79606d6c9f",
        "subject_id": "9b2fde93-debc-443b-ac9f-e5b97e57ea92",
        "order": 12,
        "description": "Summary of the material and passing the module.",
        "estimated_minutes": 60
    },
    {
        "id": "a74a1237-c372-4641-89dd-71732b2a7c14",
        "subject_id": "5d760e69-5274-4988-bece-dcc88097fc36",
        "order": 1,
        "description": "Bio-inspired information technology. Industrial applications of artificial intelligence methods.",
        "estimated_minutes": 60
    },
    {
        "id": "8fffc09c-3023-4529-90cd-9f384c097d6d",
        "subject_id": "5d760e69-5274-4988-bece-dcc88097fc36",
        "order": 2,
        "description": "Construction of simple fuzzy rule-based systems.",
        "estimated_minutes": 60
    },
    {
        "id": "2e470779-7da4-4964-80b5-b69d89b03586",
        "subject_id": "5d760e69-5274-4988-bece-dcc88097fc36",
        "order": 3,
        "description": "Classification and regression. Perceptron network, the problem of convergence of the learning algorithm.",
        "estimated_minutes": 60
    },
    {
        "id": "d9dc149b-adf4-43ed-928e-8a6068b26f57",
        "subject_id": "5d760e69-5274-4988-bece-dcc88097fc36",
        "order": 4,
        "description": "Learning method of the multilayer neural network using the backpropagation \"delta\" rule. Adaptive linear network. Wiener-Hopf equation. Newton-Raphson algorithm. Ideal gradient descent method. Delta rule. Recursive least squares method.",
        "estimated_minutes": 60
    },
    {
        "id": "055780e8-9c49-42f4-9e12-65d3ed410cf5",
        "subject_id": "5d760e69-5274-4988-bece-dcc88097fc36",
        "order": 5,
        "description": "Unsupervised learning. Hopfield networks.",
        "estimated_minutes": 60
    },
    {
        "id": "d7a467cd-dbbe-4caa-988f-e8cd588eeb0b",
        "subject_id": "5d760e69-5274-4988-bece-dcc88097fc36",
        "order": 6,
        "description": "K-NN method. K-means. Classification trees. Family of classifiers.",
        "estimated_minutes": 60
    },
    {
        "id": "a963f5a1-336c-4754-b43c-7812c38d49f6",
        "subject_id": "5d760e69-5274-4988-bece-dcc88097fc36",
        "order": 7,
        "description": "Support vector machines and the sequential minimal optimization algorithm.",
        "estimated_minutes": 60
    },
    {
        "id": "87f49fa3-e330-4b0b-b8bc-3c1b3275bc21",
        "subject_id": "5d760e69-5274-4988-bece-dcc88097fc36",
        "order": 8,
        "description": "Learning, testing, and quality assessment of classifiers.",
        "estimated_minutes": 60
    },
    {
        "id": "c50118b9-044b-46fd-afa5-d44a2ff6cd33",
        "subject_id": "5d760e69-5274-4988-bece-dcc88097fc36",
        "order": 9,
        "description": "Discovering knowledge from data using fuzzy logic and gene expression programming.",
        "estimated_minutes": 60
    },
    {
        "id": "7c55ba06-151a-43e0-8f62-e476cb1624cd",
        "subject_id": "5d760e69-5274-4988-bece-dcc88097fc36",
        "order": 10,
        "description": "Bayesian networks.",
        "estimated_minutes": 60
    },
    {
        "id": "35314e42-7401-456d-a0ba-b4a085cae50d",
        "subject_id": "7f12a4e3-897c-4e23-ac5d-b665f9fa757a",
        "order": 1,
        "description": "Introduction: repetition of the basics of object-oriented programming",
        "estimated_minutes": 60
    },
    {
        "id": "fe775ba0-9249-4ac9-ada4-d2e7df2206ed",
        "subject_id": "7f12a4e3-897c-4e23-ac5d-b665f9fa757a",
        "order": 2,
        "description": "C++ programming on Windows and Linux",
        "estimated_minutes": 60
    },
    {
        "id": "a51a3859-894a-45f1-a6bb-82e7bdbbfc13",
        "subject_id": "7f12a4e3-897c-4e23-ac5d-b665f9fa757a",
        "order": 3,
        "description": "New elements of object-oriented programming: r-value reference, lambda functions",
        "estimated_minutes": 60
    },
    {
        "id": "19eab9ea-2f1a-4fbb-9ad6-6e96ae9f3c6e",
        "subject_id": "7f12a4e3-897c-4e23-ac5d-b665f9fa757a",
        "order": 4,
        "description": "Intelligent memory management",
        "estimated_minutes": 60
    },
    {
        "id": "e330a662-ec89-4fec-b607-c6e83ea5ff6a",
        "subject_id": "7f12a4e3-897c-4e23-ac5d-b665f9fa757a",
        "order": 5,
        "description": "Multi-threaded programming",
        "estimated_minutes": 60
    },
    {
        "id": "ff7b8018-6fd9-4781-b604-292544419b9c",
        "subject_id": "7f12a4e3-897c-4e23-ac5d-b665f9fa757a",
        "order": 6,
        "description": "Inter-process communication",
        "estimated_minutes": 60
    },
    {
        "id": "b9195fd1-86eb-40cd-a369-d44136ee23a1",
        "subject_id": "7f12a4e3-897c-4e23-ac5d-b665f9fa757a",
        "order": 7,
        "description": "Implementing of libraries",
        "estimated_minutes": 60
    },
    {
        "id": "53281d01-bcc0-4b35-b5af-0b324dd81a19",
        "subject_id": "7f12a4e3-897c-4e23-ac5d-b665f9fa757a",
        "order": 8,
        "description": "Programming window applications",
        "estimated_minutes": 60
    },
    {
        "id": "b1364eb7-d34b-4eb4-8121-84ef7da27c13",
        "subject_id": "7f12a4e3-897c-4e23-ac5d-b665f9fa757a",
        "order": 9,
        "description": "Creating of database application",
        "estimated_minutes": 60
    },
    {
        "id": "58ae7a99-36cb-4a70-bdce-74675301712a",
        "subject_id": "7f12a4e3-897c-4e23-ac5d-b665f9fa757a",
        "order": 10,
        "description": "Boost library",
        "estimated_minutes": 60
    },
    {
        "id": "54839689-6483-46c1-8f78-70c5d8bc06d1",
        "subject_id": "7f12a4e3-897c-4e23-ac5d-b665f9fa757a",
        "order": 11,
        "description": "Unit tests",
        "estimated_minutes": 60
    },
    {
        "id": "7b456152-291a-47b6-bce3-4a5a2bd42c45",
        "subject_id": "7f12a4e3-897c-4e23-ac5d-b665f9fa757a",
        "order": 12,
        "description": "Comparison of different C++ standards",
        "estimated_minutes": 60
    },
    //WEiI - CE - SPEC AA (SEM 5-7)
    {
        "id": "671c27ae-7b70-4582-84a8-2b218398d1c9",
        "subject_id": "9ca9dc98-6f74-4e35-81c8-4c0070d183d6",
        "order": 1,
        "description": "An introduction to C# language.",
        "estimated_minutes": 60
    },
    {
        "id": "3e17c156-8224-4649-845f-eb525b7ff90d",
        "subject_id": "9ca9dc98-6f74-4e35-81c8-4c0070d183d6",
        "order": 2,
        "description": "Creating of graphical applications in C# language.",
        "estimated_minutes": 60
    },
    {
        "id": "2a251d4d-351e-4f74-aca6-36a5c07dbf27",
        "subject_id": "9ca9dc98-6f74-4e35-81c8-4c0070d183d6",
        "order": 3,
        "description": "Server structure of Postgres database, installation and configuration, authorization, permissions, managing tablespaces, internationalization. Kinds of tables, constraints, indexes, materialized views, sequences.",
        "estimated_minutes": 60
    },
    {
        "id": "c1cfd9f6-4fb1-4853-b088-6ca016661264",
        "subject_id": "9ca9dc98-6f74-4e35-81c8-4c0070d183d6",
        "order": 4,
        "description": "Creating web applications with ASP.NET. Architecture of web applications. The MVC pattern. Database-First and Code-First scenarios. Application example.",
        "estimated_minutes": 60
    },
    {
        "id": "30f17e7d-4566-4557-bf44-8cea83f1ebdf",
        "subject_id": "9ca9dc98-6f74-4e35-81c8-4c0070d183d6",
        "order": 5,
        "description": "Łączenie aplikacji z systemami zarządzania bazami danych. Mapowanie obiektowo-relacyjne. Entity Framework. Wdrażanie aplikacji.",
        "estimated_minutes": 60
    },
    {
        "id": "f602eeb4-4fe5-41db-93e5-c252cb9a5c46",
        "subject_id": "9ca9dc98-6f74-4e35-81c8-4c0070d183d6",
        "order": 6,
        "description": "Web services. Creating APIs using ASP.NET. OpenAPI specification. Creating a frontend layer in .NET technologies. Securing access to services. The use of Azure cloud services.",
        "estimated_minutes": 60
    },
    {
        "id": "09ca80b3-8250-4ffd-9697-b20aeaf0c4c9",
        "subject_id": "9ca9dc98-6f74-4e35-81c8-4c0070d183d6",
        "order": 7,
        "description": "Custom stored procedures and functions, cursors, native functions, triggers, superset of SQL language, functions.",
        "estimated_minutes": 60
    },
    {
        "id": "7b0e08db-7434-4af4-969a-6a3afbde6465",
        "subject_id": "9ca9dc98-6f74-4e35-81c8-4c0070d183d6",
        "order": 8,
        "description": "Query analysis. Tools to search for bottlenecks in long term queries.",
        "estimated_minutes": 60
    },
    {
        "id": "361e2a89-bf18-43e2-9441-40e4d71c516c",
        "subject_id": "7b6f6788-c376-45c3-95fc-3fb488d884d8",
        "order": 1,
        "description": "Classification and application areas of human-computer interaction systems.",
        "estimated_minutes": 60
    },
    {
        "id": "a1a77e72-6bcb-4279-aa44-37b4803b8f7e",
        "subject_id": "7b6f6788-c376-45c3-95fc-3fb488d884d8",
        "order": 2,
        "description": "Perception and information processing in humans.",
        "estimated_minutes": 60
    },
    {
        "id": "337da5fe-9b10-4d4c-ba4f-0c185000ed2b",
        "subject_id": "7b6f6788-c376-45c3-95fc-3fb488d884d8",
        "order": 3,
        "description": "Usability, ergonomic standards and practical guidelines.",
        "estimated_minutes": 60
    },
    {
        "id": "5637c856-88a3-4ef1-ae44-cb02841b9d90",
        "subject_id": "7b6f6788-c376-45c3-95fc-3fb488d884d8",
        "order": 4,
        "description": "Methodologies of user interface design.",
        "estimated_minutes": 60
    },
    {
        "id": "4efdca0c-c33a-4fdc-bc1b-830c0316a858",
        "subject_id": "7b6f6788-c376-45c3-95fc-3fb488d884d8",
        "order": 5,
        "description": "Techniques for perception and interpretation of human action.",
        "estimated_minutes": 60
    },
    {
        "id": "936abec2-49ce-48f9-8ae7-0db0e2e1714c",
        "subject_id": "7b6f6788-c376-45c3-95fc-3fb488d884d8",
        "order": 6,
        "description": "Vision interfaces.",
        "estimated_minutes": 60
    },
    {
        "id": "1a87f923-914c-4e80-880c-5007c1f6edd1",
        "subject_id": "7b6f6788-c376-45c3-95fc-3fb488d884d8",
        "order": 7,
        "description": "Overview of peripheral devices.",
        "estimated_minutes": 60
    },
    {
        "id": "feede484-4dd8-44f9-9740-952066611fbf",
        "subject_id": "7b6f6788-c376-45c3-95fc-3fb488d884d8",
        "order": 8,
        "description": "GUI for mobile and embedded devices.",
        "estimated_minutes": 60
    },
    {
        "id": "2a91d105-ca26-4530-a719-d520592c4015",
        "subject_id": "7b6f6788-c376-45c3-95fc-3fb488d884d8",
        "order": 9,
        "description": "Human - computer interaction in Internet applications.",
        "estimated_minutes": 60
    },
    {
        "id": "b2ae3c0b-8799-4c23-9d1b-7609b039bd85",
        "subject_id": "7b6f6788-c376-45c3-95fc-3fb488d884d8",
        "order": 10,
        "description": "Advanced concepts of interaction.",
        "estimated_minutes": 60
    },
    {
        "id": "07076f1d-6e95-4d6b-90be-003976a914fc",
        "subject_id": "7b6f6788-c376-45c3-95fc-3fb488d884d8",
        "order": 11,
        "description": "Interfaces accessible for disabled people.",
        "estimated_minutes": 60
    },
    {
        "id": "cf5cab64-9186-472d-a22f-cf4ed806ab6b",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 1,
        "description": "Level B2 lower: Organizations - roles and responsibilities within the organization; innovation in the company;",
        "estimated_minutes": 60
    },
    {
        "id": "d3761959-4dfe-4241-9b36-9a8d76ecb93b",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 2,
        "description": "Level B2 lower: Communication during the first meeting; chat/breaking ice; brands and marketing;",
        "estimated_minutes": 60
    },
    {
        "id": "902dfc17-9636-429f-8d83-19541c2fa425",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 3,
        "description": "Team communication; presentations; formal and semi-formal emails",
        "estimated_minutes": 60
    },
    {
        "id": "ff4102fd-a666-43a9-bc12-b65320dca929",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship",
        "estimated_minutes": 60
    },
    {
        "id": "d2525130-96da-419a-be9d-d3e9e1a987fe",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 5,
        "description": "Self-presentation; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "434bb365-a445-4105-bd27-6a97baa46552",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 6,
        "description": "HR strategies; team communication; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "c57f8c2d-3074-4c90-b974-a36170b26a16",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 7,
        "description": "Level C1: Innovation in business; innovative thinking; persuasion.",
        "estimated_minutes": 60
    },
    {
        "id": "d74ec72e-71dd-4a79-8749-bee607ce1f7a",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 8,
        "description": "Engaging during the presentation; Circular and linear economy.",
        "estimated_minutes": 60
    },
    {
        "id": "5d2d979c-30ff-45a0-a3b8-33638874a184",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 9,
        "description": "Lifecircle of products; clarification of information; effective meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "16c1b5a3-c9b9-47a0-9026-fdfdf469c826",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 1,
        "description": "Level B2 lower: Looking for a job. Job interview.",
        "estimated_minutes": 60
    },
    {
        "id": "c4bee842-120c-4b7d-9cce-d33602d808af",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 2,
        "description": "Covering letter; business strategies; analysis of factors when planning in business.",
        "estimated_minutes": 60
    },
    {
        "id": "fd8f6319-36e7-4de7-8673-b750dd687277",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 3,
        "description": "Problem solving; cause and effect reporting.",
        "estimated_minutes": 60
    },
    {
        "id": "b43f8b41-0e53-4ecb-9595-2cabb1b44c03",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 4,
        "description": "Level B2 higher: Finance and economic crises; competition in business; reacting to bad news.",
        "estimated_minutes": 60
    },
    {
        "id": "85dfec82-1631-49eb-ae73-298864a9794e",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 5,
        "description": "Clarification of information; reporting; technology in business.",
        "estimated_minutes": 60
    },
    {
        "id": "1a0dedee-54a9-4c19-92da-2a0b004bb182",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 6,
        "description": "Dealing with a difficult interlocutor; negotiations; business proposals.",
        "estimated_minutes": 60
    },
    {
        "id": "0dd82d2e-b32b-4aa7-9877-aea9835c00c7",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 7,
        "description": "Level C1: Finance and financial investments; questioning the facts; consideration of options.",
        "estimated_minutes": 60
    },
    {
        "id": "4c60f495-ed01-4b7e-ac82-7701480067f7",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 8,
        "description": "Budget analysis; innovators/precursors in business.",
        "estimated_minutes": 60
    },
    {
        "id": "dcf337c5-045b-4036-a93b-11516ea97215",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 9,
        "description": "Problem solving; reporting and planning.",
        "estimated_minutes": 60
    },
    {
        "id": "e7f08d23-fe4a-4fef-8032-e785ff158d5f",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 1,
        "description": "Semester 5; lower B2 level: Logistics; Internet sale; communication during cooperation.",
        "estimated_minutes": 60
    },
    {
        "id": "57e52771-1112-4796-bd8a-64fcb56df35b",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 2,
        "description": "Negotiations; complaints; entrepreneurship/running a business.",
        "estimated_minutes": 60
    },
    {
        "id": "ec6ee924-0f29-4853-a488-1e8989f0d2c3",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 3,
        "description": "Influencing people; presentation of facts and data.",
        "estimated_minutes": 60
    },
    {
        "id": "450aa771-2d16-4180-8355-9a9576a9b070",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship.",
        "estimated_minutes": 60
    },
    {
        "id": "76f47046-66f8-45aa-8c8b-6db0c16da3af",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 5,
        "description": "Presenting yourself; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "11706c10-8300-4ea6-8bda-5c9771743741",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 6,
        "description": "HR strategies; team communication; leading meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "6e31de75-afe8-4fde-8049-288f806b612e",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 7,
        "description": "Level C1: Marketing strategies; persuasion; data presentation.",
        "estimated_minutes": 60
    },
    {
        "id": "ca40abcb-eb01-4698-8926-40ee0b09a93b",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 8,
        "description": "Building relationships based on trust; tourism industry.",
        "estimated_minutes": 60
    },
    {
        "id": "bca01423-d8d3-4657-8b24-1852ecb37a92",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 9,
        "description": "Business contacts; diversifying the presentation with stories, business correspondence.",
        "estimated_minutes": 60
    },
    {
        "id": "11992f4d-c4f2-44fa-b1da-dab7193c1eea",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 1,
        "description": "Semester 6; lower B2 level: Cultural differences; working abroad; decision-making.",
        "estimated_minutes": 60
    },
    {
        "id": "6f6ccdd5-ef04-44a5-8c78-91bdd18f821c",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 2,
        "description": "Building relationships; recommendations/suggestions; leadership.",
        "estimated_minutes": 60
    },
    {
        "id": "e57850a7-e38c-4fcd-88be-a2889ed49f92",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 3,
        "description": "Feedback - giving and receiving; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "3277a019-807d-4274-9fc9-7670336d2110",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 4,
        "description": "Level B2 higher: Time management; emergencies.",
        "estimated_minutes": 60
    },
    {
        "id": "b0febf90-7b83-4c3a-9a43-714a2fffdaf4",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 5,
        "description": "Difficult negotiations; email giving reason; change management.",
        "estimated_minutes": 60
    },
    {
        "id": "9968a68d-a1ff-491f-a9dd-64902e361211",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 6,
        "description": "Coaching and mentoring; brainstorming",
        "estimated_minutes": 60
    },
    {
        "id": "e5b4383b-4926-4e60-b6b6-71b16a50aca9",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 7,
        "description": "Level C1: Workplace clashes; giving support; mediating conflict.",
        "estimated_minutes": 60
    },
    {
        "id": "a79a8047-caee-45c9-af7b-97d795f65bc3",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 8,
        "description": "Reporting conflicts at work; enterpreneurial mindset.",
        "estimated_minutes": 60
    },
    {
        "id": "86bef2bf-af8b-4f14-9e21-cf1880f00b5c",
        "subject_id": "17e2fe34-b077-4e0a-8003-abd5d3b4d46a",
        "order": 9,
        "description": "Performance review; self-assesment.",
        "estimated_minutes": 60
    },
    {
        "id": "1a16dee1-6e17-40f9-a3c0-f8efb19ca172",
        "subject_id": "a00228bc-477b-4b84-9587-1aba6cc516ee",
        "order": 1,
        "description": "Technical and engineering problems occurring at the place of the summer practice , and the basic principles of the organization and safety of work. Also, the basic rights and duties of the employee.",
        "estimated_minutes": 60
    },
    {
        "id": "90cbaad8-24ad-4434-9b9f-57fe8b58deb7",
        "subject_id": "c707639c-9ab6-4b23-866c-4efd13f5a1f0",
        "order": 1,
        "description": "Introduction to basic web technologies - Web application programming. - Introduction to version control systems: Git. - HTML basics: document structure, tags, attributes. - Combining HTML and CSS: inline, embedded, external styles. - Introduction to CSS: basics, selectors, rules. - CSS styling: box model, Flexbox. - Responsive Web Design: media queries, grid layout. - HTML and CSS code validation.",
        "estimated_minutes": 60
    },
    {
        "id": "7f3c3c51-1213-4207-8d39-aa0c60e8075f",
        "subject_id": "c707639c-9ab6-4b23-866c-4efd13f5a1f0",
        "order": 2,
        "description": "JavaScript basics - Introduction to JavaScript. - DOM and events in JavaScript. - Connecting to the DOM: selectors, element manipulation. - DOM manipulations: creating, adding, moving elements. - Anonymous functions, `this` context, JSDoc, and debugging. - Intervals and timeouts in JavaScript.",
        "estimated_minutes": 60
    },
    {
        "id": "a5e5ae23-09a9-41bc-92ad-ce8e79ea7345",
        "subject_id": "c707639c-9ab6-4b23-866c-4efd13f5a1f0",
        "order": 3,
        "description": "Advanced JavaScript techniques - Asynchronous JavaScript and Promises. - Async/await and working with JSON. - Introduction to TypeScript: types, classes, interfaces. - JSONP: introduction and application.",
        "estimated_minutes": 60
    },
    {
        "id": "fc75cdbd-5520-4242-940c-87b47eb28494",
        "subject_id": "c707639c-9ab6-4b23-866c-4efd13f5a1f0",
        "order": 4,
        "description": "API programming - Web APIs and JSON. - Fetch API and working with APIs. - AJAX with Fetch API: basics and application. - Fetch API and regular expressions. - HTTP requests: POST, GET, and forms (validation, handling).",
        "estimated_minutes": 60
    },
    {
        "id": "90a11692-92fa-4c5e-8ac7-135bdcffcb74",
        "subject_id": "c707639c-9ab6-4b23-866c-4efd13f5a1f0",
        "order": 5,
        "description": "Backend development with Node.js - Introduction to Node.js: basics, ecosystem. - Node.js best practices: project structure, package management. - File I/O in Node.js: reading and writing files. - Introduction to databases and SQL: basics, CRUD operations. - SQL in Node.js: connection, query execution. - Web application deployment: hosting, server configuration.",
        "estimated_minutes": 60
    },
    {
        "id": "8bbfdb5d-5150-4ff9-9c25-32144a824156",
        "subject_id": "e048ba62-6345-4a3d-9e07-4ecd191b9eb8",
        "order": 1,
        "description": "Introduction. Assembly language and high-level languages. RISC, CISC architectures. Accumulator, stack and register machines.",
        "estimated_minutes": 60
    },
    {
        "id": "3296c64f-9735-4569-b7be-a2ce6e74aab6",
        "subject_id": "e048ba62-6345-4a3d-9e07-4ecd191b9eb8",
        "order": 2,
        "description": "Architecture of the selected microprocessor, architecture modifications for the soft version of the processor implemented in FPGA structures (stack, additional RAM, machine cycle acceleration). Organization of data memory and program memory, special function registers. Detailed instruction list.",
        "estimated_minutes": 60
    },
    {
        "id": "054de54b-d082-46fc-8a84-b17dacedea11",
        "subject_id": "e048ba62-6345-4a3d-9e07-4ecd191b9eb8",
        "order": 3,
        "description": "Programming environment, assembly language directives. Hardware platform used. Hardware loader. Tracking program execution.",
        "estimated_minutes": 60
    },
    {
        "id": "a653dff0-7f03-4c83-8cf5-2f12a9267754",
        "subject_id": "e048ba62-6345-4a3d-9e07-4ecd191b9eb8",
        "order": 4,
        "description": "Implementation of assignment instructions and conditional instructions. Relation operations. Implementation of complex expressions. Implementation of loops and jump operations.",
        "estimated_minutes": 60
    },
    {
        "id": "b94e0707-9ec7-4c9d-9ec6-640e234fd15a",
        "subject_id": "e048ba62-6345-4a3d-9e07-4ecd191b9eb8",
        "order": 5,
        "description": "Subroutines. Reading tables stored in program memory. Software macro definitions. Types of memory addressing. Implementation of LIFO structures, stack management, transfer of parameters to subroutines.",
        "estimated_minutes": 60
    },
    {
        "id": "bdb67b4e-b5a1-4378-a430-574f861d5245",
        "subject_id": "e048ba62-6345-4a3d-9e07-4ecd191b9eb8",
        "order": 6,
        "description": "Implementation of arithmetic and logical operations for word lengths exceeding the base size.",
        "estimated_minutes": 60
    },
    {
        "id": "c70e5aaf-c790-4c48-86e7-74e2e112a639",
        "subject_id": "e048ba62-6345-4a3d-9e07-4ecd191b9eb8",
        "order": 7,
        "description": "Interrupt system. Interrupt handling. Recursive programs.",
        "estimated_minutes": 60
    },
    {
        "id": "a7401ff1-a1dd-4d11-915d-4c141f8b60f3",
        "subject_id": "e048ba62-6345-4a3d-9e07-4ecd191b9eb8",
        "order": 8,
        "description": "Implementation of switching functions and sequential machines.",
        "estimated_minutes": 60
    },
    {
        "id": "91c116ae-408a-49c7-b6ec-bfa2463e59fc",
        "subject_id": "0e7e0dbc-4f0d-4268-a60a-708847703384",
        "order": 1,
        "description": "Organizational class. Presenting the scope of the material and determining the form of credit classes. Familiarizing with the work rule in the laboratory. Low-level network protocols.",
        "estimated_minutes": 60
    },
    {
        "id": "d7f252fe-dc5d-44a1-b0ef-ffc047dd8614",
        "subject_id": "0e7e0dbc-4f0d-4268-a60a-708847703384",
        "order": 2,
        "description": "The TCP/IP protocol in 4 and 6 versions: the structure of an IP datagram, segmentation of datagrams, addressing scheme, IP and Ethernet, routing in networks with IP, bandwidth reservation mechanism, quality of service in the network with IP protocol, VoIP technologies in the network with IP protocol.",
        "estimated_minutes": 60
    },
    {
        "id": "04f7d1e9-2b0e-42a5-b968-deb369219e43",
        "subject_id": "0e7e0dbc-4f0d-4268-a60a-708847703384",
        "order": 3,
        "description": "Network devices (active, passive). Selected network devices (switch, router). Routing in computer networks.",
        "estimated_minutes": 60
    },
    {
        "id": "5b078970-bd01-4e4e-bf2a-9ae8f39dd630",
        "subject_id": "0e7e0dbc-4f0d-4268-a60a-708847703384",
        "order": 4,
        "description": "Transmission media (Twisted pair, optical fiber, wireless networks). Network cabling.",
        "estimated_minutes": 60
    },
    {
        "id": "f5ac49f5-a17f-4b66-b66d-19490af65b30",
        "subject_id": "0e7e0dbc-4f0d-4268-a60a-708847703384",
        "order": 5,
        "description": "Security of computer networks.",
        "estimated_minutes": 60
    },
    {
        "id": "a268c47f-12f5-403a-b3bb-0ab778dc559b",
        "subject_id": "0e7e0dbc-4f0d-4268-a60a-708847703384",
        "order": 6,
        "description": "Services (DHCP, DNS, FTP, SMTP, POP3, IMAP).",
        "estimated_minutes": 60
    },
    {
        "id": "075473cb-c78f-4b7d-8dc5-a20e67ca7c43",
        "subject_id": "0e7e0dbc-4f0d-4268-a60a-708847703384",
        "order": 7,
        "description": "Linux operating system",
        "estimated_minutes": 60
    },
    {
        "id": "ee00090c-d17c-449e-8120-6f72507dbb7b",
        "subject_id": "d4074330-6818-4d0d-9551-607b5a21b8ea",
        "order": 1,
        "description": "The boot procedure. International settings. External storage. Software packages. The Xorg graphics system. Linux security - PAM modules. Network filesystems and remote access. Users and groups.",
        "estimated_minutes": 60
    },
    {
        "id": "de480a13-d290-420d-a717-56c805239bb1",
        "subject_id": "d4074330-6818-4d0d-9551-607b5a21b8ea",
        "order": 2,
        "description": "POSIX standard. System programming. Creating processes and threads. Mechanisms of communication and synchronization of processes. Real-time operating systems. QNX operating system. Architecture of the microkernel. Message passing.",
        "estimated_minutes": 60
    },
    {
        "id": "0cc26ad8-7266-4785-bd45-50d0d6963426",
        "subject_id": "6a0ca09d-1ad6-4b7d-b458-673e0e48dcea",
        "order": 1,
        "description": "Introduction to project management",
        "estimated_minutes": 60
    },
    {
        "id": "70f68861-0f93-4347-aaa2-7c6d566c4fac",
        "subject_id": "6a0ca09d-1ad6-4b7d-b458-673e0e48dcea",
        "order": 2,
        "description": "Defining project objectives",
        "estimated_minutes": 60
    },
    {
        "id": "4d50ce28-3a64-4f97-af96-8b79bc682001",
        "subject_id": "6a0ca09d-1ad6-4b7d-b458-673e0e48dcea",
        "order": 3,
        "description": "Work breakdown structure, critical path method, PERT method, task and resource management",
        "estimated_minutes": 60
    },
    {
        "id": "7a93c7e3-564f-4720-9b1e-185c5fa76f3b",
        "subject_id": "6a0ca09d-1ad6-4b7d-b458-673e0e48dcea",
        "order": 4,
        "description": "Expense planning and cost management",
        "estimated_minutes": 60
    },
    {
        "id": "823180b1-9791-4ae1-9aac-7de08038a90e",
        "subject_id": "6a0ca09d-1ad6-4b7d-b458-673e0e48dcea",
        "order": 5,
        "description": "Project stakeholders",
        "estimated_minutes": 60
    },
    {
        "id": "78e91344-aa39-4bca-800c-5f311293d987",
        "subject_id": "6a0ca09d-1ad6-4b7d-b458-673e0e48dcea",
        "order": 6,
        "description": "Risk management",
        "estimated_minutes": 60
    },
    {
        "id": "a3323533-12f2-4935-8389-515c9417d4be",
        "subject_id": "6a0ca09d-1ad6-4b7d-b458-673e0e48dcea",
        "order": 7,
        "description": "Quality management",
        "estimated_minutes": 60
    },
    {
        "id": "6298e8a6-3537-408b-af1c-99b9d4e3a16e",
        "subject_id": "6a0ca09d-1ad6-4b7d-b458-673e0e48dcea",
        "order": 8,
        "description": "Project monitoring and control",
        "estimated_minutes": 60
    },
    {
        "id": "3931558d-1274-47cf-affd-72eec6b66c97",
        "subject_id": "6a0ca09d-1ad6-4b7d-b458-673e0e48dcea",
        "order": 9,
        "description": "IT project management problems; agile management, methodologies SCRUM and Kanban",
        "estimated_minutes": 60
    },
    {
        "id": "3ca591b7-c859-4603-8152-b6fa1129f7f4",
        "subject_id": "6a0ca09d-1ad6-4b7d-b458-673e0e48dcea",
        "order": 10,
        "description": "Using Microsoft Project to manage projects",
        "estimated_minutes": 60
    },
    {
        "id": "f48c190b-f309-48a8-87ef-a236d2121ee8",
        "subject_id": "6a0ca09d-1ad6-4b7d-b458-673e0e48dcea",
        "order": 11,
        "description": "Presentation of final projects",
        "estimated_minutes": 60
    },
    {
        "id": "ddb1ab9c-626a-4781-8548-604a96c9a5a2",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 1,
        "description": "Level B2 lower: Organizations - roles and responsibilities within the organization; innovation in the company;",
        "estimated_minutes": 60
    },
    {
        "id": "cec804ff-a0ae-44b1-908e-1352c7ed366b",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 2,
        "description": "Level B2 lower: Communication during the first meeting; chat/breaking ice; brands and marketing;",
        "estimated_minutes": 60
    },
    {
        "id": "930e07e9-264b-4ec1-b18e-04c00d570c13",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 3,
        "description": "Team communication; presentations; formal and semi-formal emails",
        "estimated_minutes": 60
    },
    {
        "id": "dc9bb72f-755f-4bf1-bea4-b277e5b617cc",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship",
        "estimated_minutes": 60
    },
    {
        "id": "2de7c8bc-de22-4f17-a780-048dfa6b7ddf",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 5,
        "description": "Self-presentation; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "209c7a45-9bed-4354-9cc7-27ce29a6ae7f",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 6,
        "description": "HR strategies; team communication; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "215648d9-9146-4977-b92d-346e7a48d183",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 7,
        "description": "Level C1: Innovation in business; innovative thinking; persuasion.",
        "estimated_minutes": 60
    },
    {
        "id": "5887465c-9b36-49c0-87f2-bcf41c8e5eb9",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 8,
        "description": "Engaging during the presentation; Circular and linear economy.",
        "estimated_minutes": 60
    },
    {
        "id": "a7615fb7-1c01-4b93-b4d6-b4b17c447a6a",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 9,
        "description": "Lifecircle of products; clarification of information; effective meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "ec6a56c3-4cf4-4fbe-ab93-94f449a07b3d",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 1,
        "description": "Level B2 lower: Looking for a job. Job interview.",
        "estimated_minutes": 60
    },
    {
        "id": "fe469556-4914-4c43-b01b-1f6fadc99f1e",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 2,
        "description": "Covering letter; business strategies; analysis of factors when planning in business.",
        "estimated_minutes": 60
    },
    {
        "id": "0ea6f874-f51f-4b9c-b904-fc0357cda7be",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 3,
        "description": "Problem solving; cause and effect reporting.",
        "estimated_minutes": 60
    },
    {
        "id": "b70a38d4-d5af-4b7b-9267-cd7526d3a782",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 4,
        "description": "Level B2 higher: Finance and economic crises; competition in business; reacting to bad news.",
        "estimated_minutes": 60
    },
    {
        "id": "1068a9f0-607c-43be-8d60-86ca73621902",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 5,
        "description": "Clarification of information; reporting; technology in business.",
        "estimated_minutes": 60
    },
    {
        "id": "cdc00c02-6050-445e-9f07-84436bacba5c",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 6,
        "description": "Dealing with a difficult interlocutor; negotiations; business proposals.",
        "estimated_minutes": 60
    },
    {
        "id": "3aa19bef-4eaf-4cc5-be6f-ebb1fcfe1a73",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 7,
        "description": "Level C1: Finance and financial investments; questioning the facts; consideration of options.",
        "estimated_minutes": 60
    },
    {
        "id": "6ff1e8c0-c467-446b-9e9d-932106bbaeb9",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 8,
        "description": "Budget analysis; innovators/precursors in business.",
        "estimated_minutes": 60
    },
    {
        "id": "21a61aad-3156-41f9-9dd0-f5ae26a4ea06",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 9,
        "description": "Problem solving; reporting and planning.",
        "estimated_minutes": 60
    },
    {
        "id": "2d9e89f9-b410-4415-94f7-24e42e4b3ba8",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 1,
        "description": "Semester 5; lower B2 level: Logistics; Internet sale; communication during cooperation.",
        "estimated_minutes": 60
    },
    {
        "id": "87d032a1-5088-41f5-8e18-d21165ee1ea7",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 2,
        "description": "Negotiations; complaints; entrepreneurship/running a business.",
        "estimated_minutes": 60
    },
    {
        "id": "9bf505d4-c22c-4a46-acc1-4c925e4da162",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 3,
        "description": "Influencing people; presentation of facts and data.",
        "estimated_minutes": 60
    },
    {
        "id": "419e4538-036b-454d-8813-90c49edd706a",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship.",
        "estimated_minutes": 60
    },
    {
        "id": "e172b79b-fd62-45aa-b66d-2ced8f64094d",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 5,
        "description": "Presenting yourself; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "645f2b1b-8d51-412a-a9fb-4ce127eece32",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 6,
        "description": "HR strategies; team communication; leading meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "a1661bf9-1ce0-4d73-b89c-d2208c6308dd",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 7,
        "description": "Level C1: Marketing strategies; persuasion; data presentation.",
        "estimated_minutes": 60
    },
    {
        "id": "86be91d4-cb8b-4094-86b4-1bea33ffc1f0",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 8,
        "description": "Building relationships based on trust; tourism industry.",
        "estimated_minutes": 60
    },
    {
        "id": "fec67d26-3d26-47fb-85ed-e169335c50b9",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 9,
        "description": "Business contacts; diversifying the presentation with stories, business correspondence.",
        "estimated_minutes": 60
    },
    {
        "id": "9084b48d-dd2d-4673-9d85-c545d0e5f9ed",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 1,
        "description": "Semester 6; lower B2 level: Cultural differences; working abroad; decision-making.",
        "estimated_minutes": 60
    },
    {
        "id": "6fb819a4-14d7-46fc-9544-90dbc60ddeef",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 2,
        "description": "Building relationships; recommendations/suggestions; leadership.",
        "estimated_minutes": 60
    },
    {
        "id": "cc7cc482-7321-4161-bd5a-02656eb76ce1",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 3,
        "description": "Feedback - giving and receiving; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "d0fe13cc-c9b1-4ac9-b885-1ad8455ba5da",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 4,
        "description": "Level B2 higher: Time management; emergencies.",
        "estimated_minutes": 60
    },
    {
        "id": "3c651acb-ca4d-438f-bf41-f0d6506bdd74",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 5,
        "description": "Difficult negotiations; email giving reason; change management.",
        "estimated_minutes": 60
    },
    {
        "id": "92ea0ce1-7e9d-43f4-ab00-f69e1f8c9828",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 6,
        "description": "Coaching and mentoring; brainstorming",
        "estimated_minutes": 60
    },
    {
        "id": "a7a1b173-5a08-4a83-87c9-2b8a1b2df40d",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 7,
        "description": "Level C1: Workplace clashes; giving support; mediating conflict.",
        "estimated_minutes": 60
    },
    {
        "id": "4ec11b7f-efbb-4962-bc03-10620d512aad",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 8,
        "description": "Reporting conflicts at work; enterpreneurial mindset.",
        "estimated_minutes": 60
    },
    {
        "id": "428f3ac6-520e-4db2-a439-f938cea00df7",
        "subject_id": "dd29da09-9fa6-47cd-9a83-a6f3f84f0c38",
        "order": 9,
        "description": "Performance review; self-assesment.",
        "estimated_minutes": 60
    },
    {
        "id": "07cde70e-28d3-4a01-b384-8807eadde966",
        "subject_id": "71d444e4-0cd2-435f-b397-1647dc86fb56",
        "order": 1,
        "description": "Implementation of the mini CAN communication network. Modification of a program ofprototype module implementing the CAN protocol.",
        "estimated_minutes": 60
    },
    {
        "id": "76972165-4b87-4be4-b823-8342dbd889e7",
        "subject_id": "71d444e4-0cd2-435f-b397-1647dc86fb56",
        "order": 2,
        "description": "Example of application of the master-slave protocol to a simple process control, visualization and alarm",
        "estimated_minutes": 60
    },
    {
        "id": "9ea754a8-3552-4101-abd7-2a6894806894",
        "subject_id": "71d444e4-0cd2-435f-b397-1647dc86fb56",
        "order": 3,
        "description": "Practical analysis of the services provided by a typical industrial communication protocols",
        "estimated_minutes": 60
    },
    {
        "id": "ff56daa6-675e-4109-991d-b222d4af4463",
        "subject_id": "71d444e4-0cd2-435f-b397-1647dc86fb56",
        "order": 4,
        "description": "Serial communication standards",
        "estimated_minutes": 60
    },
    {
        "id": "a960fb94-d7e1-42a2-931b-0527f2fe7ac1",
        "subject_id": "71d444e4-0cd2-435f-b397-1647dc86fb56",
        "order": 5,
        "description": "Master-slave protocols. Examples: Modbus RTU and TRANS",
        "estimated_minutes": 60
    },
    {
        "id": "32016290-8171-4659-85e1-e14e963e3e81",
        "subject_id": "71d444e4-0cd2-435f-b397-1647dc86fb56",
        "order": 6,
        "description": "Token-ring protocols (HORI)",
        "estimated_minutes": 60
    },
    {
        "id": "7cc4835d-8077-4cbe-85f8-eebca080394e",
        "subject_id": "71d444e4-0cd2-435f-b397-1647dc86fb56",
        "order": 7,
        "description": "Methods of securing and validation messages. Checksums",
        "estimated_minutes": 60
    },
    {
        "id": "5e729a22-cbb1-47aa-bd0c-658384368a1a",
        "subject_id": "71d444e4-0cd2-435f-b397-1647dc86fb56",
        "order": 8,
        "description": "CAN protocol",
        "estimated_minutes": 60
    },
    {
        "id": "63dbaa05-123c-46d4-b71d-2f9779fc44f2",
        "subject_id": "71d444e4-0cd2-435f-b397-1647dc86fb56",
        "order": 9,
        "description": "Safe-by-wire protocol",
        "estimated_minutes": 60
    },
    {
        "id": "4f909c0a-fdc7-47cb-a897-3d0137915de8",
        "subject_id": "71d444e4-0cd2-435f-b397-1647dc86fb56",
        "order": 10,
        "description": "1-wire protocol",
        "estimated_minutes": 60
    },
    {
        "id": "6b6f37ff-8fba-4e73-be7f-18cc7042b44b",
        "subject_id": "71d444e4-0cd2-435f-b397-1647dc86fb56",
        "order": 11,
        "description": "I2C, SPI and other protocols",
        "estimated_minutes": 60
    },
    {
        "id": "fb927680-8831-406f-87ef-a29371115b30",
        "subject_id": "71d444e4-0cd2-435f-b397-1647dc86fb56",
        "order": 12,
        "description": "MIL-STD 1553 and ARINC protocols",
        "estimated_minutes": 60
    },
    {
        "id": "76cdf81a-3eaa-416c-8e77-1eaaad265bf1",
        "subject_id": "1d05f67a-8696-4579-a793-7cc80aabf686",
        "order": 1,
        "description": "Social and occupational problems in information technology",
        "estimated_minutes": 60
    },
    {
        "id": "575539d5-4b7d-4094-8f37-0925e1a610c9",
        "subject_id": "df5f2378-d2ba-4353-bb59-465369c358a4",
        "order": 1,
        "description": "The Swift programming language, instructions, expressions, functions, classes, objects",
        "estimated_minutes": 60
    },
    {
        "id": "c2674a17-091d-44c3-87ad-1c59abfb0dd2",
        "subject_id": "df5f2378-d2ba-4353-bb59-465369c358a4",
        "order": 2,
        "description": "Xcode programming environment, creating a new project, compiling, debugging",
        "estimated_minutes": 60
    },
    {
        "id": "889fe3a8-0242-46b0-80e2-9307a3dbedf0",
        "subject_id": "df5f2378-d2ba-4353-bb59-465369c358a4",
        "order": 3,
        "description": "Controls and containers, using buttons, labels, tables",
        "estimated_minutes": 60
    },
    {
        "id": "53c9fa38-7eb2-45af-b32a-6f5d9defaf24",
        "subject_id": "df5f2378-d2ba-4353-bb59-465369c358a4",
        "order": 4,
        "description": "Dart language and Flutter environment",
        "estimated_minutes": 60
    },
    {
        "id": "b2fd4b62-117e-4756-93bb-f045af573c40",
        "subject_id": "df5f2378-d2ba-4353-bb59-465369c358a4",
        "order": 5,
        "description": "Idea of using graphical widget in Flutter",
        "estimated_minutes": 60
    },
    {
        "id": "fd3dbafd-7d42-4ad8-b8d4-c81c83a91e66",
        "subject_id": "df5f2378-d2ba-4353-bb59-465369c358a4",
        "order": 6,
        "description": "Usage of Cocoa Pods during deployment",
        "estimated_minutes": 60
    },
    {
        "id": "73d16a26-681f-4489-9a62-3f14a58ab014",
        "subject_id": "df5f2378-d2ba-4353-bb59-465369c358a4",
        "order": 7,
        "description": "Developing applications with SwiftUI",
        "estimated_minutes": 60
    },
    {
        "id": "3cf81432-748e-42b4-b0ba-3d13c0453ee2",
        "subject_id": "df5f2378-d2ba-4353-bb59-465369c358a4",
        "order": 8,
        "description": "Navigating between screens and network operation in Flutter",
        "estimated_minutes": 60
    },
    {
        "id": "0ad2fb7d-488d-4b89-9c43-c76595f45dd3",
        "subject_id": "df5f2378-d2ba-4353-bb59-465369c358a4",
        "order": 9,
        "description": "State of the component, using secure socket layer",
        "estimated_minutes": 60
    },
    {
        "id": "56525f38-1f9e-4f1b-bd81-34dd4984f524",
        "subject_id": "df5f2378-d2ba-4353-bb59-465369c358a4",
        "order": 10,
        "description": "Deploying of the application",
        "estimated_minutes": 60
    },
    {
        "id": "665e101e-110b-497e-b38a-97511a57fbdb",
        "subject_id": "56a01544-5ef5-44a4-82f9-4e5726495113",
        "order": 1,
        "description": "Formal and editorial requirements of the thesis. The structure of work, the content of the sections and subsections.",
        "estimated_minutes": 60
    },
    {
        "id": "86b113d4-81b7-41f8-aad5-740f0f0d72f4",
        "subject_id": "56a01544-5ef5-44a4-82f9-4e5726495113",
        "order": 2,
        "description": "The rules for creating theoretical and practical work.",
        "estimated_minutes": 60
    },
    {
        "id": "f07b76f9-6dda-472d-afc8-48d079b6521f",
        "subject_id": "56a01544-5ef5-44a4-82f9-4e5726495113",
        "order": 3,
        "description": "Presentation of the theoretical part of the thesis. Create a table of contents, thesis, purpose, scope.",
        "estimated_minutes": 60
    },
    {
        "id": "5aa3b2b4-5fdc-4244-933f-98656d6512df",
        "subject_id": "56a01544-5ef5-44a4-82f9-4e5726495113",
        "order": 1,
        "description": "Discussion of the principles of the thesis presentation on the practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "87f89dfc-9e8d-46a2-bdc6-9d210828604f",
        "subject_id": "56a01544-5ef5-44a4-82f9-4e5726495113",
        "order": 2,
        "description": "Presentations of thesis practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "e2b8df57-644f-48d1-9e8d-a493a96337e0",
        "subject_id": "2f558968-e12c-4a38-9125-c5b0ef46b41a",
        "order": 1,
        "description": "Bases of the programming in the C language",
        "estimated_minutes": 60
    },
    {
        "id": "408b4076-420f-4b7c-8893-c4b5b9ffdd50",
        "subject_id": "2f558968-e12c-4a38-9125-c5b0ef46b41a",
        "order": 2,
        "description": "The designing of logic control – realizations of combinatory systems",
        "estimated_minutes": 60
    },
    {
        "id": "3f72efbb-24cb-44fd-bbf5-9daa560dae25",
        "subject_id": "2f558968-e12c-4a38-9125-c5b0ef46b41a",
        "order": 3,
        "description": "The designing of logic control – realizations of sequence systems. The organization of the software of controllers and regulators: the main loop.",
        "estimated_minutes": 60
    },
    {
        "id": "2b53f55b-d340-4aac-9f12-91aaa03c54aa",
        "subject_id": "2f558968-e12c-4a38-9125-c5b0ef46b41a",
        "order": 4,
        "description": "Implementation of microprocessor sequential-time systems. Operation of the operator panel, safe communication with the master computer. Programming PLC controllers with regard to cybersecurity.",
        "estimated_minutes": 60
    },
    {
        "id": "cb2c4760-7e03-41ac-acaa-50d4da8e8b78",
        "subject_id": "3ab6d520-82dc-4d36-ae30-31593b3df4de",
        "order": 1,
        "description": "Architecture of modern microcontrollers",
        "estimated_minutes": 60
    },
    {
        "id": "c10b08a7-e763-4131-9f5d-d1ddb6faf4f9",
        "subject_id": "3ab6d520-82dc-4d36-ae30-31593b3df4de",
        "order": 2,
        "description": "Specialized functional blocks supervising the operation of microprocessor systems",
        "estimated_minutes": 60
    },
    {
        "id": "e3f8987d-db09-499a-a687-98d5c41fc735",
        "subject_id": "3ab6d520-82dc-4d36-ae30-31593b3df4de",
        "order": 3,
        "description": "Data acquisition in microcontroller - signal conditioning",
        "estimated_minutes": 60
    },
    {
        "id": "1a5c9025-0b41-416a-8251-c4a10f3cbeee",
        "subject_id": "3ab6d520-82dc-4d36-ae30-31593b3df4de",
        "order": 4,
        "description": "Real-time systems",
        "estimated_minutes": 60
    },
    {
        "id": "7d83eb98-e96d-4ca9-8da0-1708a4119385",
        "subject_id": "3ab6d520-82dc-4d36-ae30-31593b3df4de",
        "order": 5,
        "description": "Energy management in microprocessor systems",
        "estimated_minutes": 60
    },
    {
        "id": "3593d3a1-f7cd-4d69-8405-538ab422ce15",
        "subject_id": "3ab6d520-82dc-4d36-ae30-31593b3df4de",
        "order": 6,
        "description": "Designing reliable microprocessor systems",
        "estimated_minutes": 60
    },
    {
        "id": "c6329253-7953-4169-b185-253f2791b852",
        "subject_id": "3ab6d520-82dc-4d36-ae30-31593b3df4de",
        "order": 7,
        "description": "Tworzenie programów hybrydowych (łączenie kodów napisanych w języku C i asemblerze)",
        "estimated_minutes": 60
    },
    {
        "id": "086e1ba3-f1a0-458c-af9d-46332a9a1909",
        "subject_id": "3ab6d520-82dc-4d36-ae30-31593b3df4de",
        "order": 8,
        "description": "C coupling of digital circuits",
        "estimated_minutes": 60
    },
    {
        "id": "a4833c5c-b32e-46f7-aca0-f2a0b859d526",
        "subject_id": "3ab6d520-82dc-4d36-ae30-31593b3df4de",
        "order": 9,
        "description": "Information exchange in a microprocessor system - propagation of digital signals",
        "estimated_minutes": 60
    },
    {
        "id": "008b7c3a-052b-4c4e-87a8-0a730ee646f6",
        "subject_id": "3ab6d520-82dc-4d36-ae30-31593b3df4de",
        "order": 10,
        "description": "Diagnostic and development tools in microprocessor technology",
        "estimated_minutes": 60
    },
    {
        "id": "8661abfd-2366-4c1c-8507-a8869a09ee6e",
        "subject_id": "3ab6d520-82dc-4d36-ae30-31593b3df4de",
        "order": 11,
        "description": "Selection and use of development tools for the project assumptions",
        "estimated_minutes": 60
    },
    {
        "id": "1b9f0f96-bc8b-4218-aec8-12d08b3fb163",
        "subject_id": "3ab6d520-82dc-4d36-ae30-31593b3df4de",
        "order": 12,
        "description": "Selection and use of diagnostic tools for project assumptions",
        "estimated_minutes": 60
    },
    {
        "id": "62a16e74-25bf-4303-991b-22e398d1971e",
        "subject_id": "3ab6d520-82dc-4d36-ae30-31593b3df4de",
        "order": 13,
        "description": "Designing a distributed real-time system based on a 32-bit microcontroller",
        "estimated_minutes": 60
    },
    {
        "id": "b8b8d059-9f45-488a-ba47-aa4e3321c692",
        "subject_id": "3ab6d520-82dc-4d36-ae30-31593b3df4de",
        "order": 14,
        "description": "Programming 32-bit microcontrollers",
        "estimated_minutes": 60
    },
    {
        "id": "a15727a8-fff7-45b9-bdd0-eadfd47e69ea",
        "subject_id": "fb45122b-103f-44a6-aad2-9b7aa53f2719",
        "order": 1,
        "description": "Computer vision problems - the module contents presentation, examples of computer vision systems and their applications",
        "estimated_minutes": 60
    },
    {
        "id": "0039eb87-0881-4cf1-90a5-339a5e32a667",
        "subject_id": "fb45122b-103f-44a6-aad2-9b7aa53f2719",
        "order": 2,
        "description": "Structure of vision system. image pre-processing (histograms and histogram equalization, pixel brightness transformations, image smoothing and edge detection using spatial filters, frequency methods and morphological operations), Image segmentation (image thresholding, Hough transform, edge following). Object feature measurement and analysis, automatic object identification (object classification using K-nearest neighbours method, clastering using K-means algorithm). Introduction to stereovision and calibration of vision system. Tools designed for solving tasks in the field of computer vision (Image Processing and Image Acquisition Toolboxes for MATLAB, OpenCV library). Examples of computer vision applications.",
        "estimated_minutes": 60
    },
    {
        "id": "470a45bc-2514-49a6-9bbb-6bb9f1843b81",
        "subject_id": "048e68dd-8885-4444-a846-0857823373cc",
        "order": 1,
        "description": "R programming language, literals, expressions, functions, values, loops",
        "estimated_minutes": 60
    },
    {
        "id": "af245496-d6c5-478f-b9e2-e40f21d13826",
        "subject_id": "048e68dd-8885-4444-a846-0857823373cc",
        "order": 2,
        "description": "Vectors, and vector operations in R",
        "estimated_minutes": 60
    },
    {
        "id": "bdcc5da5-2523-4350-9196-90dcd8394fb5",
        "subject_id": "048e68dd-8885-4444-a846-0857823373cc",
        "order": 3,
        "description": "Modules in R language, statistical calculations, plots",
        "estimated_minutes": 60
    },
    {
        "id": "0773d7c1-70b6-412b-934b-96f19528c96c",
        "subject_id": "048e68dd-8885-4444-a846-0857823373cc",
        "order": 4,
        "description": "Python programming language, literals, expressions, loops, functions, classes, objects, exceptions",
        "estimated_minutes": 60
    },
    {
        "id": "c8258ba9-5bf2-46be-ad00-27913cca9eb3",
        "subject_id": "048e68dd-8885-4444-a846-0857823373cc",
        "order": 5,
        "description": "Python packages for data analysis, statistical calculations, creating data visualization.",
        "estimated_minutes": 60
    },
    {
        "id": "faa0e9ff-921b-41f0-a582-c8256c60626f",
        "subject_id": "048e68dd-8885-4444-a846-0857823373cc",
        "order": 6,
        "description": "The use of Python language to build fundamental data mining models.",
        "estimated_minutes": 60
    },
    {
        "id": "284ae687-6e94-45bb-96ec-1849fbdfc4a6",
        "subject_id": "136398c7-9d03-4780-9f19-dd6d9a3564a5",
        "order": 1,
        "description": "Information security. Security threats.",
        "estimated_minutes": 60
    },
    {
        "id": "d51dfe7b-8fe0-496d-81f9-8937668b4997",
        "subject_id": "136398c7-9d03-4780-9f19-dd6d9a3564a5",
        "order": 2,
        "description": "Security policy.",
        "estimated_minutes": 60
    },
    {
        "id": "16987935-7ec9-416a-b13b-3f103180067c",
        "subject_id": "136398c7-9d03-4780-9f19-dd6d9a3564a5",
        "order": 3,
        "description": "Security attacks. Security services, security mechanisms. Certification of systems. . Mission-critical systems. Security services and security mechanisms implementation in information systems.",
        "estimated_minutes": 60
    },
    {
        "id": "56905838-0521-4a96-a7e3-5888fb5e74ee",
        "subject_id": "136398c7-9d03-4780-9f19-dd6d9a3564a5",
        "order": 4,
        "description": "Basic elements of cryptography. Kinds of ciphers. Classical encrypting. Symmetric key cryptography: stream ciphers and block ciphers. Public key cryptography. Symmetric and asymmetric cipher algorithms.",
        "estimated_minutes": 60
    },
    {
        "id": "d6f6131c-6da8-48aa-bdb3-e7cc47fb8fcf",
        "subject_id": "136398c7-9d03-4780-9f19-dd6d9a3564a5",
        "order": 5,
        "description": "Authentication methods. Digital signature. Digital watermarking and steganography.",
        "estimated_minutes": 60
    },
    {
        "id": "3993b508-5f17-4bc0-bec6-a02f6db270fa",
        "subject_id": "136398c7-9d03-4780-9f19-dd6d9a3564a5",
        "order": 6,
        "description": "Management of access control.",
        "estimated_minutes": 60
    },
    {
        "id": "4ad585e7-12fa-4fb3-a3fa-5f2d32ddffb1",
        "subject_id": "136398c7-9d03-4780-9f19-dd6d9a3564a5",
        "order": 7,
        "description": "Malware. Firewalls. Sniffing and scanning. Backup.",
        "estimated_minutes": 60
    },
    {
        "id": "5cadbc2f-cc87-411b-ae3b-1e1ab048d3f3",
        "subject_id": "136398c7-9d03-4780-9f19-dd6d9a3564a5",
        "order": 8,
        "description": "Data security in the communication systems (among computer networks, wireless computer networks). VPN.",
        "estimated_minutes": 60
    },
    {
        "id": "0a1df642-bad6-4a4e-93de-1dbf2da67c9b",
        "subject_id": "136398c7-9d03-4780-9f19-dd6d9a3564a5",
        "order": 9,
        "description": "Transmission security in the industrial networks and distributed control systems.",
        "estimated_minutes": 60
    },
    {
        "id": "f63748a7-0a00-4c5a-803d-f3ba13d03b68",
        "subject_id": "ad1c33f4-e71f-4c92-b949-7479677c70ac",
        "order": 1,
        "description": "-",
        "estimated_minutes": 60
    },
    {
        "id": "f31c65e3-5a4b-4b2f-bf81-77f34716a6d9",
        "subject_id": "fae32400-11ce-4ed5-aca7-0398ece45cb1",
        "order": 1,
        "description": "Formal and editorial requirements of the thesis. The structure of work, the content of the sections and subsections.",
        "estimated_minutes": 60
    },
    {
        "id": "e84598f4-7b53-4d41-979e-384ff10c49bc",
        "subject_id": "fae32400-11ce-4ed5-aca7-0398ece45cb1",
        "order": 2,
        "description": "The rules for creating theoretical and practical work.",
        "estimated_minutes": 60
    },
    {
        "id": "b2ccec95-db0e-4be8-89ce-91a199f6ee42",
        "subject_id": "fae32400-11ce-4ed5-aca7-0398ece45cb1",
        "order": 3,
        "description": "Presentation of the theoretical part of the thesis. Create a table of contents, thesis, purpose, scope.",
        "estimated_minutes": 60
    },
    {
        "id": "0e305c61-f119-4fc7-86c0-c8f7056f5785",
        "subject_id": "fae32400-11ce-4ed5-aca7-0398ece45cb1",
        "order": 1,
        "description": "Discussion of the principles of the thesis presentation on the practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "40fabef6-0666-458e-8051-716a8ccc1ef1",
        "subject_id": "fae32400-11ce-4ed5-aca7-0398ece45cb1",
        "order": 2,
        "description": "Presentations of thesis practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "9d8093c1-2fc7-4461-819d-afc5fa79aa6d",
        "subject_id": "38022e6d-37f2-48cb-bdcb-874f46b2ef56",
        "order": 1,
        "description": "Integration needs in modern information systems.",
        "estimated_minutes": 60
    },
    {
        "id": "6b13bae4-00b7-4eb4-bccf-9973bd34e9bd",
        "subject_id": "38022e6d-37f2-48cb-bdcb-874f46b2ef56",
        "order": 2,
        "description": "The concept of loose connection, introduction of EAI technology",
        "estimated_minutes": 60
    },
    {
        "id": "f82ca12a-ad29-4ae9-9b74-f949fe83e395",
        "subject_id": "38022e6d-37f2-48cb-bdcb-874f46b2ef56",
        "order": 3,
        "description": "EAI technology, components and their functionality.",
        "estimated_minutes": 60
    },
    {
        "id": "43685a67-0710-4cf7-9602-7bc7374a8228",
        "subject_id": "38022e6d-37f2-48cb-bdcb-874f46b2ef56",
        "order": 4,
        "description": "Construction of an exemplary integration system using EAI elements.",
        "estimated_minutes": 60
    },
    {
        "id": "a8fec656-3b85-43d9-9608-c7fabf636387",
        "subject_id": "38022e6d-37f2-48cb-bdcb-874f46b2ef56",
        "order": 5,
        "description": "JMS in message-based integration systems.",
        "estimated_minutes": 60
    },
    {
        "id": "42127e92-b6c0-4bce-b13f-7f751d01d3cb",
        "subject_id": "38022e6d-37f2-48cb-bdcb-874f46b2ef56",
        "order": 6,
        "description": "MOM software, reliable messaging models.",
        "estimated_minutes": 60
    },
    {
        "id": "b4fa356a-f368-4747-9832-11418a9f1934",
        "subject_id": "38022e6d-37f2-48cb-bdcb-874f46b2ef56",
        "order": 7,
        "description": "ESB buses - construction",
        "estimated_minutes": 60
    },
    {
        "id": "1cf4aad4-b291-4ab9-a935-c271b0f657ce",
        "subject_id": "38022e6d-37f2-48cb-bdcb-874f46b2ef56",
        "order": 8,
        "description": "Calling ESB bus services, routing.",
        "estimated_minutes": 60
    },
    {
        "id": "b182064e-dc6f-48d4-b902-43b3bc79852b",
        "subject_id": "38022e6d-37f2-48cb-bdcb-874f46b2ef56",
        "order": 9,
        "description": "Java components on the ESB bus",
        "estimated_minutes": 60
    },
    {
        "id": "f99782db-d696-4da5-8920-23276e0b02e8",
        "subject_id": "38022e6d-37f2-48cb-bdcb-874f46b2ef56",
        "order": 10,
        "description": "OpenESB",
        "estimated_minutes": 60
    },
    {
        "id": "4a1ee60f-ed28-465d-b840-d31367a93c9c",
        "subject_id": "38022e6d-37f2-48cb-bdcb-874f46b2ef56",
        "order": 11,
        "description": "Apache ServiceMiX",
        "estimated_minutes": 60
    },
    {
        "id": "d4cbcac0-d947-4365-9893-7ca41820075e",
        "subject_id": "38022e6d-37f2-48cb-bdcb-874f46b2ef56",
        "order": 12,
        "description": "HDFS file system",
        "estimated_minutes": 60
    },
    {
        "id": "5658ed23-dea6-4026-9ba7-ac3a9492ba5d",
        "subject_id": "38022e6d-37f2-48cb-bdcb-874f46b2ef56",
        "order": 13,
        "description": "Apache ActiveMQ and Apache Kafka.",
        "estimated_minutes": 60
    },
    {
        "id": "9a4eeb61-aa5b-4d70-a3a8-3fbee69ca21d",
        "subject_id": "45b930c4-616a-4abb-9659-e25a18842949",
        "order": 1,
        "description": "Interaction in multimedia systems.",
        "estimated_minutes": 60
    },
    {
        "id": "9177ef6d-f4a8-480a-81b0-5cc4dc4d8be9",
        "subject_id": "45b930c4-616a-4abb-9659-e25a18842949",
        "order": 2,
        "description": "Acquisition and pre-processing of images.",
        "estimated_minutes": 60
    },
    {
        "id": "f32d57e3-fc40-451b-b4f9-f63f607793a0",
        "subject_id": "45b930c4-616a-4abb-9659-e25a18842949",
        "order": 3,
        "description": "Representation of color images.",
        "estimated_minutes": 60
    },
    {
        "id": "a3d16c88-b9a5-47cf-8dcd-cb1e1e773588",
        "subject_id": "45b930c4-616a-4abb-9659-e25a18842949",
        "order": 4,
        "description": "Data compression.",
        "estimated_minutes": 60
    },
    {
        "id": "6d8a7547-cae1-4039-83a2-fe6ab421da20",
        "subject_id": "45b930c4-616a-4abb-9659-e25a18842949",
        "order": 5,
        "description": "Multimodal data annotation.",
        "estimated_minutes": 60
    },
    {
        "id": "6d1edfc9-3cd8-4e3f-ba21-caf7468746ae",
        "subject_id": "45b930c4-616a-4abb-9659-e25a18842949",
        "order": 6,
        "description": "Modern 3D imaging systems.",
        "estimated_minutes": 60
    },
    {
        "id": "792c35b3-1e1a-4142-857b-8bd9c0dba1a9",
        "subject_id": "45b930c4-616a-4abb-9659-e25a18842949",
        "order": 7,
        "description": "Technologies and tools for the implementation of multimedia systems.",
        "estimated_minutes": 60
    },
    {
        "id": "ea5dc6f6-3b26-43b2-b314-77be875f16a4",
        "subject_id": "6dc9303c-92a4-4573-9267-f3a9faee3f01",
        "order": 1,
        "description": "Basis of language Objective-C. Platform iOS programming.",
        "estimated_minutes": 60
    },
    {
        "id": "71e0a63e-4b6f-4384-923c-8c4f9e85f66e",
        "subject_id": "6dc9303c-92a4-4573-9267-f3a9faee3f01",
        "order": 2,
        "description": "Image processing and analysis. Object recognition techniques using global and local features. Searching and retrieving images from large databases.",
        "estimated_minutes": 60
    },
    {
        "id": "1692ad1c-7fb8-4ad4-89bb-d9da995b8e10",
        "subject_id": "6dc9303c-92a4-4573-9267-f3a9faee3f01",
        "order": 3,
        "description": "Industry 4.0 with its cybersecurity, machine data analysis in production systems, stream databases",
        "estimated_minutes": 60
    },
    {
        "id": "f3fbfba3-fea8-4371-a64e-b8cb6a79ff9c",
        "subject_id": "6dc9303c-92a4-4573-9267-f3a9faee3f01",
        "order": 4,
        "description": "Web Programming (JavaScript)",
        "estimated_minutes": 60
    },
    //WEiI - CE - SPEC Z (SEM 5-7)
    {
        "id": "a6915467-8151-4b3d-b02f-689b6f313e50",
        "subject_id": "ac2e5d70-05d3-4efb-af8f-703901b98c06",
        "order": 1,
        "description": "Introduction. Determining the form of credit and the scope of the material. Basic definitions of security. Acts and legal standards.",
        "estimated_minutes": 60
    },
    {
        "id": "7b961d36-79fe-4e3d-95f4-ac5ed7651149",
        "subject_id": "ac2e5d70-05d3-4efb-af8f-703901b98c06",
        "order": 2,
        "description": "Cryptography. Methods and categories of breaking ciphers. Basic types of ciphers.",
        "estimated_minutes": 60
    },
    {
        "id": "d38c0d81-1a91-4b10-8afe-e9d841009ab6",
        "subject_id": "ac2e5d70-05d3-4efb-af8f-703901b98c06",
        "order": 3,
        "description": "Introduction to information theory. Entropy. Coincidence characters. Frequency analysis of ciphers.",
        "estimated_minutes": 60
    },
    {
        "id": "6d1e66f3-f071-4935-a0ab-b2b23a3d96da",
        "subject_id": "ac2e5d70-05d3-4efb-af8f-703901b98c06",
        "order": 4,
        "description": "Footprinting and Reconnaissance - initial gathering of information about the target of an attack.",
        "estimated_minutes": 60
    },
    {
        "id": "ad5ad6c5-def4-4f71-812b-4553ef1a52e8",
        "subject_id": "ac2e5d70-05d3-4efb-af8f-703901b98c06",
        "order": 5,
        "description": "Network scanning - identification of systems, ports and services operating in the network",
        "estimated_minutes": 60
    },
    {
        "id": "f0e5fca8-2357-44af-ae73-2b9ebdc53156",
        "subject_id": "ac2e5d70-05d3-4efb-af8f-703901b98c06",
        "order": 6,
        "description": "Active polling of services / systems in order to recognize weak points in the infrastructure.",
        "estimated_minutes": 60
    },
    {
        "id": "7edc4c5b-e4aa-4bb4-b6ba-2610ec9acb81",
        "subject_id": "ac2e5d70-05d3-4efb-af8f-703901b98c06",
        "order": 7,
        "description": "System vulnerability analysis. Tools for performing a scan.",
        "estimated_minutes": 60
    },
    {
        "id": "83fbe962-3c6a-42ac-90ac-c3c91407444a",
        "subject_id": "ac2e5d70-05d3-4efb-af8f-703901b98c06",
        "order": 8,
        "description": "Network sniffing - data interception.",
        "estimated_minutes": 60
    },
    {
        "id": "e1cbac4a-0edf-4f22-8f97-c687f3b283fa",
        "subject_id": "ac2e5d70-05d3-4efb-af8f-703901b98c06",
        "order": 9,
        "description": "Social engineering attacks (Social Engineering).",
        "estimated_minutes": 60
    },
    {
        "id": "a66a5a56-041a-401b-903e-5ef52252cc0b",
        "subject_id": "ac2e5d70-05d3-4efb-af8f-703901b98c06",
        "order": 10,
        "description": "Digital signature. Safety certificates. Hash functions.",
        "estimated_minutes": 60
    },
    {
        "id": "8ba745f7-adb1-4178-acd7-8de3ad9db9b5",
        "subject_id": "ac2e5d70-05d3-4efb-af8f-703901b98c06",
        "order": 11,
        "description": "Email security.",
        "estimated_minutes": 60
    },
    {
        "id": "dbd2cb1c-b106-4a0d-8b20-02b9cb128330",
        "subject_id": "ac2e5d70-05d3-4efb-af8f-703901b98c06",
        "order": 12,
        "description": "Malicious software types of malware, viruses, anti-viruses, worms, distributed denial of service attacks. Anti-virus programs",
        "estimated_minutes": 60
    },
    {
        "id": "abc29350-1bf0-439d-9266-e221419e643d",
        "subject_id": "ac2e5d70-05d3-4efb-af8f-703901b98c06",
        "order": 13,
        "description": "Security policy. Security models. Creation of security procedures. Measures of confidentiality and security of systems. System audit.",
        "estimated_minutes": 60
    },
    {
        "id": "0cf019b6-8030-4316-8861-073aa97ff651",
        "subject_id": "ac2e5d70-05d3-4efb-af8f-703901b98c06",
        "order": 14,
        "description": "SQL Injection - attacks using the lack of proper filtering of SQL database queries.",
        "estimated_minutes": 60
    },
    {
        "id": "4467a431-f0f8-4f15-ba89-744da22c8f0a",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 1,
        "description": "Level B2 lower: Organizations - roles and responsibilities within the organization; innovation in the company;",
        "estimated_minutes": 60
    },
    {
        "id": "821353cc-6167-4e9e-8212-9132f78d7289",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 2,
        "description": "Level B2 lower: Communication during the first meeting; chat/breaking ice; brands and marketing;",
        "estimated_minutes": 60
    },
    {
        "id": "6539b921-5df5-408d-8ae6-29d213efe099",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 3,
        "description": "Team communication; presentations; formal and semi-formal emails",
        "estimated_minutes": 60
    },
    {
        "id": "a19bd2e0-795c-4f9b-9360-1812ef9ca0a7",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship",
        "estimated_minutes": 60
    },
    {
        "id": "efe50868-cdcf-4bff-bf9e-6122b045359d",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 5,
        "description": "Self-presentation; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "cce7711c-a770-4961-be51-06f19e891ee6",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 6,
        "description": "HR strategies; team communication; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "02f2ebf6-57c5-43ea-bcbd-58e43f1765b7",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 7,
        "description": "Level C1: Innovation in business; innovative thinking; persuasion.",
        "estimated_minutes": 60
    },
    {
        "id": "b84f0e9d-0f17-4cb6-b320-d0914e2629f7",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 8,
        "description": "Engaging during the presentation; Circular and linear economy.",
        "estimated_minutes": 60
    },
    {
        "id": "12241f69-26a7-4159-830c-3191e2f200fd",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 9,
        "description": "Lifecircle of products; clarification of information; effective meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "d971c265-0e00-434c-8edb-b494cc62f6a9",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 1,
        "description": "Level B2 lower: Looking for a job. Job interview.",
        "estimated_minutes": 60
    },
    {
        "id": "f97dc02b-3760-45d3-870c-8bd202cf478e",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 2,
        "description": "Covering letter; business strategies; analysis of factors when planning in business.",
        "estimated_minutes": 60
    },
    {
        "id": "5974b13b-41a4-44a4-b116-844b90cfbe1c",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 3,
        "description": "Problem solving; cause and effect reporting.",
        "estimated_minutes": 60
    },
    {
        "id": "4fdc64a4-142d-4884-a5ff-77aac61ab4b3",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 4,
        "description": "Level B2 higher: Finance and economic crises; competition in business; reacting to bad news.",
        "estimated_minutes": 60
    },
    {
        "id": "e74a3199-ba3f-491d-8a96-ce8c0a3736a0",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 5,
        "description": "Clarification of information; reporting; technology in business.",
        "estimated_minutes": 60
    },
    {
        "id": "3da306ae-b22c-4912-9b18-a37263e5aac4",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 6,
        "description": "Dealing with a difficult interlocutor; negotiations; business proposals.",
        "estimated_minutes": 60
    },
    {
        "id": "08fbe2c9-fd72-4271-a606-4ecd1a14b2d8",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 7,
        "description": "Level C1: Finance and financial investments; questioning the facts; consideration of options.",
        "estimated_minutes": 60
    },
    {
        "id": "3ba9ad25-f9ae-49ff-9326-1df928842113",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 8,
        "description": "Budget analysis; innovators/precursors in business.",
        "estimated_minutes": 60
    },
    {
        "id": "f16f6996-eb6c-43ca-b190-e51a3857113f",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 9,
        "description": "Problem solving; reporting and planning.",
        "estimated_minutes": 60
    },
    {
        "id": "0a3cf488-50c4-4cc9-8abf-32322d3c373b",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 1,
        "description": "Semester 5; lower B2 level: Logistics; Internet sale; communication during cooperation.",
        "estimated_minutes": 60
    },
    {
        "id": "c7a615a4-d064-464e-890e-497558bbe442",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 2,
        "description": "Negotiations; complaints; entrepreneurship/running a business.",
        "estimated_minutes": 60
    },
    {
        "id": "ad84a887-9500-482d-9222-600f03ad34d0",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 3,
        "description": "Influencing people; presentation of facts and data.",
        "estimated_minutes": 60
    },
    {
        "id": "98d1f9f2-6ac4-4388-a103-0061ddc71d8d",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship.",
        "estimated_minutes": 60
    },
    {
        "id": "ba848957-f174-4d8a-bc25-b1356eabd12a",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 5,
        "description": "Presenting yourself; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "b5af62ae-795f-46b8-bf6b-15d9bd122a5e",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 6,
        "description": "HR strategies; team communication; leading meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "b0e630b1-7156-4604-bcee-f457628896ab",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 7,
        "description": "Level C1: Marketing strategies; persuasion; data presentation.",
        "estimated_minutes": 60
    },
    {
        "id": "e1a08e29-c54e-4736-b27e-03a8348d6aca",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 8,
        "description": "Building relationships based on trust; tourism industry.",
        "estimated_minutes": 60
    },
    {
        "id": "ddfa35f8-cd1b-48f2-94ba-45e84b059894",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 9,
        "description": "Business contacts; diversifying the presentation with stories, business correspondence.",
        "estimated_minutes": 60
    },
    {
        "id": "fcc94c73-4b80-4108-952c-a220cce4fa38",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 1,
        "description": "Semester 6; lower B2 level: Cultural differences; working abroad; decision-making.",
        "estimated_minutes": 60
    },
    {
        "id": "a5adfd10-9bdd-4f6c-9f43-ba9bae38b2d8",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 2,
        "description": "Building relationships; recommendations/suggestions; leadership.",
        "estimated_minutes": 60
    },
    {
        "id": "7781e8e4-17c3-40e1-9baa-e4438da853ee",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 3,
        "description": "Feedback - giving and receiving; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "045fe98d-7856-4c2e-b044-ce30535156d7",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 4,
        "description": "Level B2 higher: Time management; emergencies.",
        "estimated_minutes": 60
    },
    {
        "id": "6886a637-daf4-4352-a6a0-567df99c5a29",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 5,
        "description": "Difficult negotiations; email giving reason; change management.",
        "estimated_minutes": 60
    },
    {
        "id": "c12334a4-2e76-43a9-b463-b468c27fedb3",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 6,
        "description": "Coaching and mentoring; brainstorming",
        "estimated_minutes": 60
    },
    {
        "id": "02ac85e9-3a68-4a16-9a54-8f2d034e5c3b",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 7,
        "description": "Level C1: Workplace clashes; giving support; mediating conflict.",
        "estimated_minutes": 60
    },
    {
        "id": "c5f5ec73-c7d4-46a0-8a19-d54daccc354f",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 8,
        "description": "Reporting conflicts at work; enterpreneurial mindset.",
        "estimated_minutes": 60
    },
    {
        "id": "37904667-0a99-4909-909e-7bd665941e02",
        "subject_id": "0e7b42dc-8cef-4177-a57f-73e5cd66c438",
        "order": 9,
        "description": "Performance review; self-assesment.",
        "estimated_minutes": 60
    },
    {
        "id": "4f9b36f4-c092-4f9e-9185-106e051aef4b",
        "subject_id": "381174e5-203a-42d8-baee-6a6842feb19b",
        "order": 1,
        "description": "Technical and engineering problems occurring at the place of the summer practice , and the basic principles of the organization and safety of work. Also, the basic rights and duties of the employee.",
        "estimated_minutes": 60
    },
    {
        "id": "2cdeba05-454c-4575-a98a-7c2aa8360f5e",
        "subject_id": "2dfcc08c-5946-4bd9-a643-d6e8e16cafeb",
        "order": 1,
        "description": "Critical infrastructure systems - the introduction of legal conditions. The National Programme for Critical Infrastructure Protection. The scope, objectives. Authorities and bodies involved in the implementation of the Programme, their role and responsibility. Risk assessment. Selected legal tools to protect infrastructure in Poland.",
        "estimated_minutes": 60
    },
    {
        "id": "85e23829-b827-4725-8523-3057e3a9db58",
        "subject_id": "2dfcc08c-5946-4bd9-a643-d6e8e16cafeb",
        "order": 2,
        "description": "ICT elements in the functioning and protection of critical infrastructure. Incidents in the area of critical infrastructure and ways to respond to them.",
        "estimated_minutes": 60
    },
    {
        "id": "376db9fd-4484-4fdb-9690-37242dd80fb8",
        "subject_id": "2dfcc08c-5946-4bd9-a643-d6e8e16cafeb",
        "order": 3,
        "description": "NCPI - Network-Critical Physical Infrastructure). Categories security systems. Examples of critical infrastructure - server room, data center.",
        "estimated_minutes": 60
    },
    {
        "id": "e6c7de17-059c-4d28-b4b7-02cc58f63862",
        "subject_id": "2dfcc08c-5946-4bd9-a643-d6e8e16cafeb",
        "order": 4,
        "description": "Physical security. Access control systems. The choice of location.",
        "estimated_minutes": 60
    },
    {
        "id": "ffdd78eb-f5e8-4f99-a8ad-987b3f1f5b0e",
        "subject_id": "2dfcc08c-5946-4bd9-a643-d6e8e16cafeb",
        "order": 5,
        "description": "Cooling. The problems to be solved. Requirements. Microclimate premises. Calculation of the heat generated. The selection of the size of the cooling system. Overview of cooling systems in data centers. Environmental conditions. ASHRAE Standard. The evolution of data center cooling systems. Cooling Rack. Cooling row. Cooling \"close coupled\". Optimization of the air flow. The problems associated with air cooling (Recirculation, air stratification, Air Bypass). Immersion cooling. Fire-control systems.",
        "estimated_minutes": 60
    },
    {
        "id": "e11b3d73-9b48-47a2-89bc-8a4a4016a2bf",
        "subject_id": "2dfcc08c-5946-4bd9-a643-d6e8e16cafeb",
        "order": 6,
        "description": "Power electronic critical systems for: computer networks, including but not limited to power back-up systems, HVAC, security systems, network servers, database systems, storage and network equipment.",
        "estimated_minutes": 60
    },
    {
        "id": "061df6ef-2867-4b4b-bab1-d17a8451da5a",
        "subject_id": "2dfcc08c-5946-4bd9-a643-d6e8e16cafeb",
        "order": 7,
        "description": "PSUs, blade type. Point-of-load (PoL) DC-DC converters within the motherboard to provide the required supply voltage levels to the ICs or chipsets. Internal level: embedded power management system for ICs and multi-core processors.",
        "estimated_minutes": 60
    },
    {
        "id": "e4cbb991-678a-49bf-9b72-359119292d3d",
        "subject_id": "2dfcc08c-5946-4bd9-a643-d6e8e16cafeb",
        "order": 8,
        "description": "PSU testing. Blade PSU testing. Point-of-load power supply testing. Testing of a multi-core processor power supply system. Testing of uninterruptible power systems: Uninterruptible power systems for three functional solutions. Investigating power disturbances in computer systems. Testing of protection systems, quick shutdown effectiveness.",
        "estimated_minutes": 60
    },
    {
        "id": "4810e448-ce3e-461f-afad-6ef752177653",
        "subject_id": "2dfcc08c-5946-4bd9-a643-d6e8e16cafeb",
        "order": 9,
        "description": "Testing the performance and reliability of critical data communications infrastructure",
        "estimated_minutes": 60
    },
    {
        "id": "31536fc4-a8bb-48dd-b8dd-df57d6ed46ad",
        "subject_id": "2dfcc08c-5946-4bd9-a643-d6e8e16cafeb",
        "order": 10,
        "description": "Methods, means, and architecture for backup, including specialized software and hardware",
        "estimated_minutes": 60
    },
    {
        "id": "be1801df-53cb-4db3-b99c-17da86dadcf3",
        "subject_id": "2dfcc08c-5946-4bd9-a643-d6e8e16cafeb",
        "order": 11,
        "description": "Methods and means of collecting parameters of the operation of a distributed heterogeneous data communication system and techniques for their processing and inference.",
        "estimated_minutes": 60
    },
    {
        "id": "706703c7-3f2c-42b3-8696-76278e410441",
        "subject_id": "2dfcc08c-5946-4bd9-a643-d6e8e16cafeb",
        "order": 12,
        "description": "Designing the example system of critical infrastructure using selected methods and tools. Summary of classes, final course test.",
        "estimated_minutes": 60
    },
    {
        "id": "83c2fca8-deef-47b4-a1af-96dcee60e9ff",
        "subject_id": "e8f08309-bb37-48df-aaf2-86f6f77d2f56",
        "order": 1,
        "description": "Introduction",
        "estimated_minutes": 60
    },
    {
        "id": "0d0a3134-4a95-4b2e-8fbc-04df571ec5dc",
        "subject_id": "e8f08309-bb37-48df-aaf2-86f6f77d2f56",
        "order": 2,
        "description": "Link state routing protocols, OSPF and ISIS",
        "estimated_minutes": 60
    },
    {
        "id": "86f13cbe-0242-4973-89e0-7dcfc84b07cc",
        "subject_id": "e8f08309-bb37-48df-aaf2-86f6f77d2f56",
        "order": 3,
        "description": "BGP protocol",
        "estimated_minutes": 60
    },
    {
        "id": "cbcd9567-f68e-4533-b90d-9376acea85fd",
        "subject_id": "e8f08309-bb37-48df-aaf2-86f6f77d2f56",
        "order": 4,
        "description": "The basic mechanism and protocols used to secure the cnetwork devices and network access",
        "estimated_minutes": 60
    },
    {
        "id": "03dfde5b-82ba-4616-ade1-ccfb13e2ac17",
        "subject_id": "e8f08309-bb37-48df-aaf2-86f6f77d2f56",
        "order": 5,
        "description": "ACL and QOS - basics and implementation",
        "estimated_minutes": 60
    },
    {
        "id": "11e7e77b-7ddd-4e0c-aaa4-5dfc3d1b5f60",
        "subject_id": "e8f08309-bb37-48df-aaf2-86f6f77d2f56",
        "order": 6,
        "description": "The basic network management strategies, NMS systems, and basic daignostic mechanism/protocols.",
        "estimated_minutes": 60
    },
    {
        "id": "385b45c9-1fee-443f-9286-68169163d84d",
        "subject_id": "e8f08309-bb37-48df-aaf2-86f6f77d2f56",
        "order": 7,
        "description": "Buildingof the big computer network with using all known protocols - a case study and methods and means of IT service management",
        "estimated_minutes": 60
    },
    {
        "id": "732ce829-33eb-4897-b55d-c320fd58485e",
        "subject_id": "e8f08309-bb37-48df-aaf2-86f6f77d2f56",
        "order": 8,
        "description": "Summary of the material and passing the module.",
        "estimated_minutes": 60
    },
    {
        "id": "af24ec0d-0e29-40d5-a742-3456f37eb4af",
        "subject_id": "aa358f4c-c8de-4562-81ed-fffba78fe8ba",
        "order": 1,
        "description": "Organizational classes. Determining the form of credit and the scope of the material. Familiarizing with the work regulations in the laboratory.",
        "estimated_minutes": 60
    },
    {
        "id": "ffd2f0c3-0d18-4685-a0e6-a98e8874ddd4",
        "subject_id": "aa358f4c-c8de-4562-81ed-fffba78fe8ba",
        "order": 2,
        "description": "Definition of the term database, database management system, database system. Evolution of database systems and database models. Enterprise-class database systems, ranking of vendors and database solutions, including their typical applications considering data model and scale.",
        "estimated_minutes": 60
    },
    {
        "id": "bbb9af24-6547-429f-a5b7-078206ad49b5",
        "subject_id": "aa358f4c-c8de-4562-81ed-fffba78fe8ba",
        "order": 3,
        "description": "Database system architecture on the example of Oracle database: database server structure, database connection, memory structure, database buffers, shared area, primary and secondary processes, logical and physical data structure, table spaces, segments,",
        "estimated_minutes": 60
    },
    {
        "id": "2dc8de19-69cf-476e-bdd5-f091acceef0e",
        "subject_id": "aa358f4c-c8de-4562-81ed-fffba78fe8ba",
        "order": 4,
        "description": "Environment preparation and database creation in Oracle: Oracle database administrator tasks, administrative tools, database installation, system requirements, environment variables, Oracle Universal Installer, database planning, Listner configuration, Database Configuration Assistant (DBCA), password management, configuration",
        "estimated_minutes": 60
    },
    {
        "id": "69557df9-af3c-4095-84a8-421bdac2097a",
        "subject_id": "aa358f4c-c8de-4562-81ed-fffba78fe8ba",
        "order": 5,
        "description": "Data storage structure management: storage structure (data warehouse - storage), blocks, extents, segments, space tables and data files, space management in tablespaces (Tablespace), modification, deletion, management and viewing of table space, database enlargement, Oracle Managed Files (OMF), Automatic Storage Management (ASM).",
        "estimated_minutes": 60
    },
    {
        "id": "71f91868-4be2-47d0-8ed9-762dad13d5ad",
        "subject_id": "aa358f4c-c8de-4562-81ed-fffba78fe8ba",
        "order": 6,
        "description": "Backup and recovery concept: damage categories, checkpoint process (CKPT), LogWriter and Redo Log files, MTTR assistant, multiplication of control files, archiving process and Archive Log file, archivelog mode, data transfer, data import and export methods.",
        "estimated_minutes": 60
    },
    {
        "id": "c906d797-1510-4e32-b39c-d5b2191492d2",
        "subject_id": "aa358f4c-c8de-4562-81ed-fffba78fe8ba",
        "order": 7,
        "description": "User security management: database user account, predefined accounts: sys and system, creating, deleting, blocking and managing user accounts, resetting password, authenticating users, the principle of least privileges and its use, protection of privileged accounts, privileges: system, object, roles , broadcasting, receiving and managing privileges at the user and role level, creating and managing roles, implementing security features for passwords, assigning quotas to users.",
        "estimated_minutes": 60
    },
    {
        "id": "50a83327-f6e2-4f5d-93d5-a125a0f51499",
        "subject_id": "aa358f4c-c8de-4562-81ed-fffba78fe8ba",
        "order": 8,
        "description": "Oracle Multitenant Architecture. Separation of database engine data and application data of pluggable databases. Plugging/unplugging/cloning pluggable bases in the main container. Managing users and roles in Multitenant architecture and permissions - local and global objects.",
        "estimated_minutes": 60
    },
    {
        "id": "85a8b770-12c1-4723-ae42-bb05a5a18922",
        "subject_id": "aa358f4c-c8de-4562-81ed-fffba78fe8ba",
        "order": 9,
        "description": "NoSQL databases, model breakdown. Comparison of relational model and NoSQL. XML/JSON data exchange format. Implementation of JSON document database in Oracle, SODA and REST mechanism.",
        "estimated_minutes": 60
    },
    {
        "id": "b00c7838-c7c1-4197-b866-69d4f2770aa5",
        "subject_id": "aa358f4c-c8de-4562-81ed-fffba78fe8ba",
        "order": 10,
        "description": "PL/SQL procedural programming language: variables and types, conditional logic, loops, functions, procedures and packages, sequences, cursors, objects, collections, exception handling.",
        "estimated_minutes": 60
    },
    {
        "id": "505f0026-233c-40be-a565-0656444f5726",
        "subject_id": "aa358f4c-c8de-4562-81ed-fffba78fe8ba",
        "order": 11,
        "description": "Data management in PL/SQL: triggers, data concurrency, locks, conflicts and their causes, troubleshooting, deadlocks.",
        "estimated_minutes": 60
    },
    {
        "id": "1a498746-3ae3-4068-9caa-3c9d4c7af940",
        "subject_id": "bad1a978-6b32-4879-855a-56151ad0b671",
        "order": 1,
        "description": "Introduction",
        "estimated_minutes": 60
    },
    {
        "id": "0e7c04a6-c022-4340-b0cd-811d75546b9c",
        "subject_id": "bad1a978-6b32-4879-855a-56151ad0b671",
        "order": 2,
        "description": "Virtual reality - a history of development",
        "estimated_minutes": 60
    },
    {
        "id": "d1d7ac09-df56-4d1f-8555-bc34592a6080",
        "subject_id": "bad1a978-6b32-4879-855a-56151ad0b671",
        "order": 3,
        "description": "Applications of virtual reality: medicine, education, science, entertainment. Good practice in developing VR/AR solutions/projects.",
        "estimated_minutes": 60
    },
    {
        "id": "a0096660-42e4-48ac-b290-fce2eef99748",
        "subject_id": "bad1a978-6b32-4879-855a-56151ad0b671",
        "order": 4,
        "description": "Devices and technologies used in virtual reality",
        "estimated_minutes": 60
    },
    {
        "id": "987dd976-c32e-4940-90f3-c8deda3749d5",
        "subject_id": "bad1a978-6b32-4879-855a-56151ad0b671",
        "order": 5,
        "description": "3D visualization. Wprowadzenie do Unreal.",
        "estimated_minutes": 60
    },
    {
        "id": "369eb7e8-1a10-4474-aa05-45853fb0a9ed",
        "subject_id": "bad1a978-6b32-4879-855a-56151ad0b671",
        "order": 6,
        "description": "Unreal technology. Unity 3D overview.",
        "estimated_minutes": 60
    },
    {
        "id": "59c54e96-3895-4be0-964c-677286c119d2",
        "subject_id": "bad1a978-6b32-4879-855a-56151ad0b671",
        "order": 7,
        "description": "Presentation of projects",
        "estimated_minutes": 60
    },
    {
        "id": "0abaedf1-296a-4d01-ad78-51bbd2f694f7",
        "subject_id": "09be97ba-a6f2-47ea-9cf4-990e4e7ab098",
        "order": 1,
        "description": "Determining the form of credit and the scope of the material. Malware threats - types of dangerous software and mechanisms of action.",
        "estimated_minutes": 60
    },
    {
        "id": "11975acd-2d49-450e-a209-969d4c09cdb9",
        "subject_id": "09be97ba-a6f2-47ea-9cf4-990e4e7ab098",
        "order": 2,
        "description": "Firewalls: characteristics of firewalls, types of firewalls, implementing firewalls, location and configuration of firewalls",
        "estimated_minutes": 60
    },
    {
        "id": "88fdc051-6143-4238-90be-fd2ffeedb2a0",
        "subject_id": "09be97ba-a6f2-47ea-9cf4-990e4e7ab098",
        "order": 3,
        "description": "Cryptography with public keys - RSA, ECC.",
        "estimated_minutes": 60
    },
    {
        "id": "641c0b40-5894-43a4-b339-f5afc758f9a7",
        "subject_id": "09be97ba-a6f2-47ea-9cf4-990e4e7ab098",
        "order": 4,
        "description": "Concepts and security of cloud solutions.",
        "estimated_minutes": 60
    },
    {
        "id": "99018f5e-328c-4e32-be55-c85c42f8c790",
        "subject_id": "09be97ba-a6f2-47ea-9cf4-990e4e7ab098",
        "order": 5,
        "description": "Authentication methods and techniques. Static passwords, hash functions, Kerberos system, federated identity.",
        "estimated_minutes": 60
    },
    {
        "id": "3710cc12-1708-4a54-8c4e-4d37b993ea04",
        "subject_id": "09be97ba-a6f2-47ea-9cf4-990e4e7ab098",
        "order": 6,
        "description": "IDS and IPS systems. Hardware and software solutions.",
        "estimated_minutes": 60
    },
    {
        "id": "72a6ae21-4b94-4616-ab83-25f3f3751afe",
        "subject_id": "09be97ba-a6f2-47ea-9cf4-990e4e7ab098",
        "order": 7,
        "description": "Wireless network security architecture.",
        "estimated_minutes": 60
    },
    {
        "id": "f9e835bc-3e8e-4bea-8b20-7e7e22520730",
        "subject_id": "09be97ba-a6f2-47ea-9cf4-990e4e7ab098",
        "order": 8,
        "description": "Security aspects of IoT and OT technologies.",
        "estimated_minutes": 60
    },
    {
        "id": "faeb89b5-b892-40d8-a56c-f2166f1fdc89",
        "subject_id": "09be97ba-a6f2-47ea-9cf4-990e4e7ab098",
        "order": 9,
        "description": "Securing platforms and mobile devices.",
        "estimated_minutes": 60
    },
    {
        "id": "929fffb4-a19f-4286-bd27-85686bbfd3fa",
        "subject_id": "09be97ba-a6f2-47ea-9cf4-990e4e7ab098",
        "order": 10,
        "description": "Storage virtualization and security.",
        "estimated_minutes": 60
    },
    {
        "id": "acf33ef5-04cb-4cb9-b4e2-1e5334d11977",
        "subject_id": "09be97ba-a6f2-47ea-9cf4-990e4e7ab098",
        "order": 11,
        "description": "Methods and implementation of backup procedures.",
        "estimated_minutes": 60
    },
    {
        "id": "9487b723-cc3d-4f4b-b27e-17ba97b4f4e0",
        "subject_id": "09be97ba-a6f2-47ea-9cf4-990e4e7ab098",
        "order": 12,
        "description": "Classification of threats to denial of access to the service and methods of counteracting.",
        "estimated_minutes": 60
    },
    {
        "id": "6b40b0c9-aac8-46a2-8fec-0e1e80901c65",
        "subject_id": "09be97ba-a6f2-47ea-9cf4-990e4e7ab098",
        "order": 13,
        "description": "Overview of incident analysis and management tools.",
        "estimated_minutes": 60
    },
    {
        "id": "b9aff821-163d-430b-b143-e395820a62ca",
        "subject_id": "09be97ba-a6f2-47ea-9cf4-990e4e7ab098",
        "order": 14,
        "description": "Measures of confidentiality and security of systems. Software security. System audit.",
        "estimated_minutes": 60
    },
    {
        "id": "031f54ee-274c-4ba3-ae02-03a7724df652",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 1,
        "description": "Level B2 lower: Organizations - roles and responsibilities within the organization; innovation in the company;",
        "estimated_minutes": 60
    },
    {
        "id": "7bad9e6e-8356-4ca3-b184-7f6be176d2ad",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 2,
        "description": "Level B2 lower: Communication during the first meeting; chat/breaking ice; brands and marketing;",
        "estimated_minutes": 60
    },
    {
        "id": "0163f948-8101-48ff-b6b1-0d79820cfa2a",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 3,
        "description": "Team communication; presentations; formal and semi-formal emails",
        "estimated_minutes": 60
    },
    {
        "id": "c44c3253-ad80-4d0b-8e1c-87fd76485ab8",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship",
        "estimated_minutes": 60
    },
    {
        "id": "3c869b2b-06ea-4eff-9978-598a7f49559b",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 5,
        "description": "Self-presentation; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "2aea5459-579c-4408-9de6-aa0d0ec62c66",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 6,
        "description": "HR strategies; team communication; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "6f3da652-1cfa-439a-a8bb-2d634a0ac280",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 7,
        "description": "Level C1: Innovation in business; innovative thinking; persuasion.",
        "estimated_minutes": 60
    },
    {
        "id": "d4a3b5de-1e0f-4985-be7d-9d17c70ec6cf",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 8,
        "description": "Engaging during the presentation; Circular and linear economy.",
        "estimated_minutes": 60
    },
    {
        "id": "4256aeb2-0e20-4e82-89b1-f2a61d61aac4",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 9,
        "description": "Lifecircle of products; clarification of information; effective meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "2e544eee-38de-47b8-ba0e-9eb4b4a4711f",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 1,
        "description": "Level B2 lower: Looking for a job. Job interview.",
        "estimated_minutes": 60
    },
    {
        "id": "7647e4ad-9acc-4a7a-917e-beb6b8ac017d",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 2,
        "description": "Covering letter; business strategies; analysis of factors when planning in business.",
        "estimated_minutes": 60
    },
    {
        "id": "8f3fcf5f-3aa2-4e8b-8de0-5800e92615ef",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 3,
        "description": "Problem solving; cause and effect reporting.",
        "estimated_minutes": 60
    },
    {
        "id": "10468118-64d4-4398-9c03-ca57ee3bca9f",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 4,
        "description": "Level B2 higher: Finance and economic crises; competition in business; reacting to bad news.",
        "estimated_minutes": 60
    },
    {
        "id": "eb70398b-afaa-416b-bba1-b86ef7b98c63",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 5,
        "description": "Clarification of information; reporting; technology in business.",
        "estimated_minutes": 60
    },
    {
        "id": "caae3fde-b7ad-47e5-b1ad-c1f42b09b097",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 6,
        "description": "Dealing with a difficult interlocutor; negotiations; business proposals.",
        "estimated_minutes": 60
    },
    {
        "id": "1b8bcd5f-86da-4182-af1f-f149cdaa9eb8",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 7,
        "description": "Level C1: Finance and financial investments; questioning the facts; consideration of options.",
        "estimated_minutes": 60
    },
    {
        "id": "a969191b-d8d4-4362-95f2-0b0d4bbd0928",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 8,
        "description": "Budget analysis; innovators/precursors in business.",
        "estimated_minutes": 60
    },
    {
        "id": "4d3b7235-763c-41d6-a3bd-af235073b583",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 9,
        "description": "Problem solving; reporting and planning.",
        "estimated_minutes": 60
    },
    {
        "id": "ed1f09fe-eae3-4bc9-b138-89cb89f8c7d8",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 1,
        "description": "Semester 5; lower B2 level: Logistics; Internet sale; communication during cooperation.",
        "estimated_minutes": 60
    },
    {
        "id": "506999d6-aea4-4b2b-9830-060fd920c5ac",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 2,
        "description": "Negotiations; complaints; entrepreneurship/running a business.",
        "estimated_minutes": 60
    },
    {
        "id": "24ec8549-6909-4667-bbb6-dd0dab51de73",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 3,
        "description": "Influencing people; presentation of facts and data.",
        "estimated_minutes": 60
    },
    {
        "id": "fed91732-14f9-45b0-a4e3-0a62d824097c",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship.",
        "estimated_minutes": 60
    },
    {
        "id": "e1152930-bf3d-4ac9-9c37-f2a65bff4923",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 5,
        "description": "Presenting yourself; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "537cedce-303d-49a1-b3d7-a21d1bdff856",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 6,
        "description": "HR strategies; team communication; leading meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "23144bdf-a78b-4256-b455-25dee5bba008",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 7,
        "description": "Level C1: Marketing strategies; persuasion; data presentation.",
        "estimated_minutes": 60
    },
    {
        "id": "957fcd5b-0b9d-4023-a131-0b132a282497",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 8,
        "description": "Building relationships based on trust; tourism industry.",
        "estimated_minutes": 60
    },
    {
        "id": "1ebd31fd-9143-454c-995c-e69ca456da10",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 9,
        "description": "Business contacts; diversifying the presentation with stories, business correspondence.",
        "estimated_minutes": 60
    },
    {
        "id": "da4e91cd-0cb0-4059-876f-0176208dfd64",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 1,
        "description": "Semester 6; lower B2 level: Cultural differences; working abroad; decision-making.",
        "estimated_minutes": 60
    },
    {
        "id": "fb4009da-7430-4f81-b79b-b110158153f6",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 2,
        "description": "Building relationships; recommendations/suggestions; leadership.",
        "estimated_minutes": 60
    },
    {
        "id": "cb924c8e-c62b-4dfc-8699-5159cda031a9",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 3,
        "description": "Feedback - giving and receiving; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "6ecc4a55-7785-4318-88ec-652d7e5227f1",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 4,
        "description": "Level B2 higher: Time management; emergencies.",
        "estimated_minutes": 60
    },
    {
        "id": "b5d8a8b4-d7fd-4c00-b787-1f152f66c9e7",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 5,
        "description": "Difficult negotiations; email giving reason; change management.",
        "estimated_minutes": 60
    },
    {
        "id": "c5571ce7-c8da-4dd1-80d9-e66630fa5fb6",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 6,
        "description": "Coaching and mentoring; brainstorming",
        "estimated_minutes": 60
    },
    {
        "id": "ec8088da-c3b1-49b0-ab3f-37c3d2edfaa9",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 7,
        "description": "Level C1: Workplace clashes; giving support; mediating conflict.",
        "estimated_minutes": 60
    },
    {
        "id": "5025e52d-7fab-4739-aaf9-dcf2a33028e3",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 8,
        "description": "Reporting conflicts at work; enterpreneurial mindset.",
        "estimated_minutes": 60
    },
    {
        "id": "77f6a8bf-4c73-46ee-b877-335d3dd68774",
        "subject_id": "c778273b-b5a3-4cff-bb86-06539c46d4c3",
        "order": 9,
        "description": "Performance review; self-assesment.",
        "estimated_minutes": 60
    },
    {
        "id": "23bf4425-f2d9-49ea-8b3c-c15bce7b73d9",
        "subject_id": "4d80cb31-402a-42ae-acc0-6a0b5277274c",
        "order": 1,
        "description": "Formal and editorial requirements of the thesis. The structure of work, the content of the sections and subsections.",
        "estimated_minutes": 60
    },
    {
        "id": "9b78c128-5bbb-4067-a8e7-0f96666293dc",
        "subject_id": "4d80cb31-402a-42ae-acc0-6a0b5277274c",
        "order": 2,
        "description": "The rules for creating theoretical and practical work.",
        "estimated_minutes": 60
    },
    {
        "id": "d2e72f98-42d8-4af3-b779-f0a73e1dffec",
        "subject_id": "4d80cb31-402a-42ae-acc0-6a0b5277274c",
        "order": 3,
        "description": "Presentation of the theoretical part of the thesis. Create a table of contents, thesis, purpose, scope.",
        "estimated_minutes": 60
    },
    {
        "id": "ede7f936-d665-45ca-b83c-aca3c6cf7a50",
        "subject_id": "4d80cb31-402a-42ae-acc0-6a0b5277274c",
        "order": 1,
        "description": "Discussion of the principles of the thesis presentation on the practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "6cfbdcd8-5e00-49e1-9715-73cfc2ad1ea1",
        "subject_id": "4d80cb31-402a-42ae-acc0-6a0b5277274c",
        "order": 2,
        "description": "Presentations of thesis practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "7377ea29-eabe-46da-80ba-346271d2fe4b",
        "subject_id": "cf7e17cc-5c35-4d74-b709-4d87c1a6fc90",
        "order": 1,
        "description": "Organizational classes. Determining the form of credit and the scope of the material. Familiarizing with the work regulations in the laboratory.",
        "estimated_minutes": 60
    },
    {
        "id": "4cec6653-63a2-423f-9213-dc5e72641cc9",
        "subject_id": "cf7e17cc-5c35-4d74-b709-4d87c1a6fc90",
        "order": 2,
        "description": "The genesis of data warehouse (HD) (Data Warehouse) and data mining systems (SED) (Data Mining Systems).",
        "estimated_minutes": 60
    },
    {
        "id": "dd30cee9-36c5-4245-ae17-2de46afda1da",
        "subject_id": "cf7e17cc-5c35-4d74-b709-4d87c1a6fc90",
        "order": 3,
        "description": "Data and processing modeling (relational and multidimensional model, on-line analytical processing models (OLAP), multidimensional operations and data diagrams, OLAP classes and architectures - comparative analysis). Data extraction processes (ETL) (design and modeling of data extraction, specialized and universal ETL systems). Selected environments: MS SQL Server Integration Services (SSIS), Oracle Analytics Desktop.",
        "estimated_minutes": 60
    },
    {
        "id": "fb1697d1-066d-4fd0-b752-af4275c2dfea",
        "subject_id": "cf7e17cc-5c35-4d74-b709-4d87c1a6fc90",
        "order": 4,
        "description": "Creating and using a data warehouse in a selected environment. Use of wizards: OLAP cube, virtual dimension, warehouse design, usage-based optimization, usage-based analysis, dimension and virtual cube. Use the cube editor and dimension editor. Data mining. Creating structural and information dimensions. Creating calculated measures and category dimensions.",
        "estimated_minutes": 60
    },
    {
        "id": "d8d2843b-3575-46e2-87d3-b27d5a8ef4b2",
        "subject_id": "cf7e17cc-5c35-4d74-b709-4d87c1a6fc90",
        "order": 5,
        "description": "Analytical processing and its optimization: materialized perspectives (rewriting queries, selecting a set of perspectives, refreshing anomalies), BY GROUP optimization, compression, parallel processing, partitioning. Using the SQL query language for data mining: designing and execution of queries. SQL/MDX.",
        "estimated_minutes": 60
    },
    {
        "id": "0e40528f-ac6e-438c-83af-2888062e938e",
        "subject_id": "cf7e17cc-5c35-4d74-b709-4d87c1a6fc90",
        "order": 6,
        "description": "Data visualization in Oracle Application Express: the structure of databases and application server, database connection, workspaces, the server basic modules (Application Builder, SQL Workshop, Object Browser, Query Builder, Data Workshop, Workspace Administration), load and export data, generate DDL code, access to the APEX perspectives, Web application development with access to the database (forms, templates, reports, interactive charts, the Master-Detail).",
        "estimated_minutes": 60
    },
    {
        "id": "d545dbc4-459d-46fb-a17a-a6314f0c7b8d",
        "subject_id": "cf7e17cc-5c35-4d74-b709-4d87c1a6fc90",
        "order": 7,
        "description": "Building corporate dashboards, reporting and data visualization services. Basic concerning KPIs. Tool Overview: Microsoft SQL Server 2019 Reporting Services, Power BI, Oracle Analytics Desktop, MS Excel BI.",
        "estimated_minutes": 60
    },
    {
        "id": "06825dc0-d2cf-4af2-835c-ff2358a74bdf",
        "subject_id": "cf7e17cc-5c35-4d74-b709-4d87c1a6fc90",
        "order": 8,
        "description": "Implementation of selected data mining models (e.g. decision tree, association, clustering, other) in a selected analytical/programming environment.",
        "estimated_minutes": 60
    },
    {
        "id": "8ea90db2-f5d1-4392-bd19-dfafaccdfcc4",
        "subject_id": "960a2302-6745-4a29-9c15-9e39643fa803",
        "order": 1,
        "description": "Architecture of modern microcontrollers",
        "estimated_minutes": 60
    },
    {
        "id": "9362c8e4-68f6-4e80-8179-abfb83720755",
        "subject_id": "960a2302-6745-4a29-9c15-9e39643fa803",
        "order": 2,
        "description": "Specialized functional blocks supervising the operation of microprocessor systems",
        "estimated_minutes": 60
    },
    {
        "id": "35e75b5e-1ee5-450d-b683-f324036d061b",
        "subject_id": "960a2302-6745-4a29-9c15-9e39643fa803",
        "order": 3,
        "description": "Data acquisition in microcontroller - signal conditioning",
        "estimated_minutes": 60
    },
    {
        "id": "747209a1-fbff-43b0-bedf-fdda6fafd501",
        "subject_id": "960a2302-6745-4a29-9c15-9e39643fa803",
        "order": 4,
        "description": "Real-time systems",
        "estimated_minutes": 60
    },
    {
        "id": "d3c60d62-0f2b-4f74-b5d3-07d4297ab47c",
        "subject_id": "960a2302-6745-4a29-9c15-9e39643fa803",
        "order": 5,
        "description": "Energy management in microprocessor systems",
        "estimated_minutes": 60
    },
    {
        "id": "8687fa62-8874-44e9-95d1-4535063f9597",
        "subject_id": "960a2302-6745-4a29-9c15-9e39643fa803",
        "order": 6,
        "description": "Designing reliable microprocessor systems",
        "estimated_minutes": 60
    },
    {
        "id": "3acfe4dd-9a34-4250-ac56-d10a832f7483",
        "subject_id": "960a2302-6745-4a29-9c15-9e39643fa803",
        "order": 7,
        "description": "Tworzenie programów hybrydowych (łączenie kodów napisanych w języku C i asemblerze)",
        "estimated_minutes": 60
    },
    {
        "id": "f363fef2-46da-4876-b9b7-74aa75ebf979",
        "subject_id": "960a2302-6745-4a29-9c15-9e39643fa803",
        "order": 8,
        "description": "C coupling of digital circuits",
        "estimated_minutes": 60
    },
    {
        "id": "b9504b55-d743-4c1d-b483-9e22af952b6a",
        "subject_id": "960a2302-6745-4a29-9c15-9e39643fa803",
        "order": 9,
        "description": "Information exchange in a microprocessor system - propagation of digital signals",
        "estimated_minutes": 60
    },
    {
        "id": "9da8f1cd-3201-446b-ba68-9923146688f8",
        "subject_id": "960a2302-6745-4a29-9c15-9e39643fa803",
        "order": 10,
        "description": "Diagnostic and development tools in microprocessor technology",
        "estimated_minutes": 60
    },
    {
        "id": "1c308d53-913f-4c81-98f7-035c3fd37492",
        "subject_id": "960a2302-6745-4a29-9c15-9e39643fa803",
        "order": 11,
        "description": "Selection and use of development tools for the project assumptions",
        "estimated_minutes": 60
    },
    {
        "id": "6ab5b704-d790-4851-95df-223aa828fef0",
        "subject_id": "960a2302-6745-4a29-9c15-9e39643fa803",
        "order": 12,
        "description": "Selection and use of diagnostic tools for project assumptions",
        "estimated_minutes": 60
    },
    {
        "id": "88a7f3f0-42d7-464b-a4b6-6323937b2aaf",
        "subject_id": "960a2302-6745-4a29-9c15-9e39643fa803",
        "order": 13,
        "description": "Designing a distributed real-time system based on a 32-bit microcontroller",
        "estimated_minutes": 60
    },
    {
        "id": "decbc280-88b5-44d6-85fe-872c82aa0673",
        "subject_id": "960a2302-6745-4a29-9c15-9e39643fa803",
        "order": 14,
        "description": "Programming 32-bit microcontrollers",
        "estimated_minutes": 60
    },
    {
        "id": "a5937317-ec68-4acf-a032-5799d7162d73",
        "subject_id": "51dcca7d-b12f-4f21-958f-fc627e2670bf",
        "order": 1,
        "description": "Key terms used in the theory of information, the use of this theory",
        "estimated_minutes": 60
    },
    {
        "id": "2931017d-f742-4c1c-b98f-854964ed6a85",
        "subject_id": "51dcca7d-b12f-4f21-958f-fc627e2670bf",
        "order": 2,
        "description": "Perl",
        "estimated_minutes": 60
    },
    {
        "id": "0dd304f6-a83b-4ae0-9203-def5d1a62a91",
        "subject_id": "51dcca7d-b12f-4f21-958f-fc627e2670bf",
        "order": 3,
        "description": "The needs of modern businesses",
        "estimated_minutes": 60
    },
    {
        "id": "f57cb36f-6cea-4944-bdba-2ff4f9ea8467",
        "subject_id": "51dcca7d-b12f-4f21-958f-fc627e2670bf",
        "order": 4,
        "description": "ERP Systems",
        "estimated_minutes": 60
    },
    {
        "id": "c26cec78-8839-4d3a-bb0a-66a7b3dab08b",
        "subject_id": "51dcca7d-b12f-4f21-958f-fc627e2670bf",
        "order": 5,
        "description": "Control of Production",
        "estimated_minutes": 60
    },
    {
        "id": "9c37d271-17b8-4746-bd69-e24f9da7b885",
        "subject_id": "51dcca7d-b12f-4f21-958f-fc627e2670bf",
        "order": 6,
        "description": "Web Services",
        "estimated_minutes": 60
    },
    {
        "id": "c7741a50-3ac6-41d6-8228-2b832591e61f",
        "subject_id": "51dcca7d-b12f-4f21-958f-fc627e2670bf",
        "order": 7,
        "description": "VPN",
        "estimated_minutes": 60
    },
    {
        "id": "e6930479-344f-44ff-b844-10362e41000d",
        "subject_id": "51dcca7d-b12f-4f21-958f-fc627e2670bf",
        "order": 8,
        "description": "LDAP",
        "estimated_minutes": 60
    },
    {
        "id": "da6b6833-edeb-456f-a7db-dbc6e128e17f",
        "subject_id": "51dcca7d-b12f-4f21-958f-fc627e2670bf",
        "order": 9,
        "description": "OLAP",
        "estimated_minutes": 60
    },
    {
        "id": "5c9bfa2b-f0ac-402f-a883-fad42684f67f",
        "subject_id": "51dcca7d-b12f-4f21-958f-fc627e2670bf",
        "order": 10,
        "description": "Virtualization",
        "estimated_minutes": 60
    },
    {
        "id": "281c2376-d565-40fc-80d7-e9bbc0160e28",
        "subject_id": "51dcca7d-b12f-4f21-958f-fc627e2670bf",
        "order": 11,
        "description": "AAA Services",
        "estimated_minutes": 60
    },
    {
        "id": "f6b46bf9-26b4-47aa-a21b-9363dc5b9861",
        "subject_id": "51dcca7d-b12f-4f21-958f-fc627e2670bf",
        "order": 12,
        "description": "Open source in the enterprise",
        "estimated_minutes": 60
    },
    {
        "id": "b78bc57c-080e-4a55-afb8-5bb5180e78db",
        "subject_id": "51dcca7d-b12f-4f21-958f-fc627e2670bf",
        "order": 13,
        "description": "XMPP protocol",
        "estimated_minutes": 60
    },
    {
        "id": "2daedf98-caf5-4d5d-a88a-5bab46556a97",
        "subject_id": "61ce7a60-854c-46e4-889a-619627b88423",
        "order": 1,
        "description": "Organizational classes. Establishing the form of assessment and the scope of material. Getting acquainted with the rules of project realization and presentation.",
        "estimated_minutes": 60
    },
    {
        "id": "413a1eeb-860d-4c19-9036-5538d15cc665",
        "subject_id": "61ce7a60-854c-46e4-889a-619627b88423",
        "order": 2,
        "description": "Introduction to the Python language. Areas of application of the Python language. Tools and work environment. Principle of interpreter operation.",
        "estimated_minutes": 60
    },
    {
        "id": "21a2c8b4-76b4-4839-8264-d561226bbc97",
        "subject_id": "61ce7a60-854c-46e4-889a-619627b88423",
        "order": 3,
        "description": "Operators and variables in Python, loops, structures and the meaning of lists, sorting.",
        "estimated_minutes": 60
    },
    {
        "id": "037f5f34-023c-4f7d-8855-074bbcf7dfdb",
        "subject_id": "61ce7a60-854c-46e4-889a-619627b88423",
        "order": 4,
        "description": "Create functions, scopes, and use libraries.",
        "estimated_minutes": 60
    },
    {
        "id": "6c1d879b-8421-42f7-9e67-9bbf23384a69",
        "subject_id": "61ce7a60-854c-46e4-889a-619627b88423",
        "order": 5,
        "description": "Use of modules, code errors, and exception handling.",
        "estimated_minutes": 60
    },
    {
        "id": "ada5f190-c09f-48f6-a9d1-d4bc9f89c6e1",
        "subject_id": "61ce7a60-854c-46e4-889a-619627b88423",
        "order": 6,
        "description": "The concept of object-oriented programming. Classes and methods in the Python language.",
        "estimated_minutes": 60
    },
    {
        "id": "c17e2088-f874-4dfc-b4a8-312abd46011d",
        "subject_id": "61ce7a60-854c-46e4-889a-619627b88423",
        "order": 7,
        "description": "Data mining using available tools and statistics in Python.",
        "estimated_minutes": 60
    },
    {
        "id": "c35ca0e9-f5ad-4ae2-b507-dcfe82348d75",
        "subject_id": "61ce7a60-854c-46e4-889a-619627b88423",
        "order": 8,
        "description": "Graphs and data visualization.",
        "estimated_minutes": 60
    },
    {
        "id": "fb3f9792-f1c7-416f-b1ed-53533fddd9c6",
        "subject_id": "61ce7a60-854c-46e4-889a-619627b88423",
        "order": 9,
        "description": "Advanced data structures in Python and their operations.",
        "estimated_minutes": 60
    },
    {
        "id": "e152c319-be8f-4102-8b31-955bef5c80da",
        "subject_id": "61ce7a60-854c-46e4-889a-619627b88423",
        "order": 10,
        "description": "Graphical User Interface.",
        "estimated_minutes": 60
    },
    {
        "id": "7381eb5a-d695-434a-b01e-ed8bf65d9793",
        "subject_id": "61ce7a60-854c-46e4-889a-619627b88423",
        "order": 11,
        "description": "Folding lists and generators.",
        "estimated_minutes": 60
    },
    {
        "id": "6cc522bb-a3d7-4dbd-9deb-bffcfc4b3835",
        "subject_id": "61ce7a60-854c-46e4-889a-619627b88423",
        "order": 12,
        "description": "Specialized engineering and computing libraries.",
        "estimated_minutes": 60
    },
    {
        "id": "5f416266-c956-4511-b080-4ae87c37ff40",
        "subject_id": "61ce7a60-854c-46e4-889a-619627b88423",
        "order": 13,
        "description": "Applications of Python in the control of electrical and electronic systems.",
        "estimated_minutes": 60
    },
    {
        "id": "f851b1cb-dc4d-4486-b5d2-690e96f4a121",
        "subject_id": "61ce7a60-854c-46e4-889a-619627b88423",
        "order": 14,
        "description": "Examples of solving real-world data analysis problems.",
        "estimated_minutes": 60
    },
    {
        "id": "f07bfbfb-29c3-4751-857f-65a43245e8a5",
        "subject_id": "fb53eaf9-5f64-4dbd-96e9-e937140f1bce",
        "order": 1,
        "description": "-",
        "estimated_minutes": 60
    },
    {
        "id": "4d8aea1d-136b-4688-a656-b8fce1418c8e",
        "subject_id": "3ff5cc9d-6734-4c48-a104-9ce683947945",
        "order": 1,
        "description": "Organizational activities. Determination of forms of assessment and the scope of the material.",
        "estimated_minutes": 60
    },
    {
        "id": "aecfda0d-c84e-4d31-b489-8573603a5c73",
        "subject_id": "3ff5cc9d-6734-4c48-a104-9ce683947945",
        "order": 2,
        "description": "Virtualization and containerization of systems.",
        "estimated_minutes": 60
    },
    {
        "id": "df9cdabb-0953-45fa-b01c-d49967700295",
        "subject_id": "3ff5cc9d-6734-4c48-a104-9ce683947945",
        "order": 3,
        "description": "Basic concepts, ideas, and models related to cloud computing and services.",
        "estimated_minutes": 60
    },
    {
        "id": "7931ed7e-78c6-4623-b3df-b8f8cc97e0ce",
        "subject_id": "3ff5cc9d-6734-4c48-a104-9ce683947945",
        "order": 4,
        "description": "Private and public cloud a way to use IT environments more efficiently.",
        "estimated_minutes": 60
    },
    {
        "id": "db14af59-25df-4fca-9ff9-8d0deb3885e2",
        "subject_id": "3ff5cc9d-6734-4c48-a104-9ce683947945",
        "order": 5,
        "description": "Examples of cloud service providers: Microsoft Azure, Google Cloud Platform, National Cloud Platform, AWS Cloud Compute Service, Oracle Cloud Infrastructure.",
        "estimated_minutes": 60
    },
    {
        "id": "80746d75-18c4-432c-ade2-e6b0571f67ac",
        "subject_id": "3ff5cc9d-6734-4c48-a104-9ce683947945",
        "order": 6,
        "description": "Creating and configuring an Azure virtual machine.",
        "estimated_minutes": 60
    },
    {
        "id": "c46448f3-af40-4073-bbfc-b0db180a6ffd",
        "subject_id": "3ff5cc9d-6734-4c48-a104-9ce683947945",
        "order": 7,
        "description": "Working with databases, IaaS and PaaS services.",
        "estimated_minutes": 60
    },
    {
        "id": "5d607bca-fad4-4d60-a6a0-f7050a0e64cc",
        "subject_id": "3ff5cc9d-6734-4c48-a104-9ce683947945",
        "order": 8,
        "description": "Usługi hybrydowe, implementacja i zarządzanie.",
        "estimated_minutes": 60
    },
    {
        "id": "692a2abd-8d8e-405a-bfab-f9841cfc9837",
        "subject_id": "3ff5cc9d-6734-4c48-a104-9ce683947945",
        "order": 9,
        "description": "Identity and resource security in the Azure cloud.",
        "estimated_minutes": 60
    },
    {
        "id": "05f9af1f-69ba-4e40-8347-e49ad05ce796",
        "subject_id": "3ff5cc9d-6734-4c48-a104-9ce683947945",
        "order": 10,
        "description": "Strategies related to migration to the cloud: design of a scalable cloud solution, configuration and installation of necessary system components, data migration to cloud computing, optimization of resources operation, selection of proper applications supporting resources management.",
        "estimated_minutes": 60
    },
    {
        "id": "902a26ca-e829-4890-aa6b-45b094a1a783",
        "subject_id": "3ff5cc9d-6734-4c48-a104-9ce683947945",
        "order": 11,
        "description": "Presentation of projects, discussion.",
        "estimated_minutes": 60
    },
    {
        "id": "01fa3f20-0a49-4ba2-ad64-f0832019ff12",
        "subject_id": "9e00a216-7cd2-4dfc-b936-74c352c4248f",
        "order": 1,
        "description": "Formal and editorial requirements of the thesis. The structure of work, the content of the sections and subsections.",
        "estimated_minutes": 60
    },
    {
        "id": "02817a03-3b8c-4982-bd45-ec82877fd3f5",
        "subject_id": "9e00a216-7cd2-4dfc-b936-74c352c4248f",
        "order": 2,
        "description": "The rules for creating theoretical and practical work.",
        "estimated_minutes": 60
    },
    {
        "id": "0468229a-8fff-440e-b8bd-4bc419f3f4cd",
        "subject_id": "9e00a216-7cd2-4dfc-b936-74c352c4248f",
        "order": 3,
        "description": "Presentation of the theoretical part of the thesis. Create a table of contents, thesis, purpose, scope.",
        "estimated_minutes": 60
    },
    {
        "id": "50d7f1d4-ce19-440f-8f38-492ac71402c9",
        "subject_id": "9e00a216-7cd2-4dfc-b936-74c352c4248f",
        "order": 1,
        "description": "Discussion of the principles of the thesis presentation on the practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "d1957828-181e-40d7-8bd7-e1dc1a4312af",
        "subject_id": "9e00a216-7cd2-4dfc-b936-74c352c4248f",
        "order": 2,
        "description": "Presentations of thesis practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "1c3d2d99-3737-49fa-86fd-bf5d8596312d",
        "subject_id": "8f083cc7-fcf0-4427-8262-3b468ef6d3e4",
        "order": 1,
        "description": "Basis of language Objective-C. Platform iOS programming.",
        "estimated_minutes": 60
    },
    {
        "id": "556d3650-50a9-4b5c-8aa5-e6c37f394827",
        "subject_id": "8f083cc7-fcf0-4427-8262-3b468ef6d3e4",
        "order": 2,
        "description": "Image processing and analysis. Object recognition techniques using global and local features. Searching and retrieving images from large databases.",
        "estimated_minutes": 60
    },
    {
        "id": "4a8e27e5-c3f1-4c8e-8584-e7ff72c62cbf",
        "subject_id": "8f083cc7-fcf0-4427-8262-3b468ef6d3e4",
        "order": 3,
        "description": "Industry 4.0 with its cybersecurity, machine data analysis in production systems, stream databases",
        "estimated_minutes": 60
    },
    {
        "id": "ec91adad-85cb-45bb-9352-45fba0fc8c9e",
        "subject_id": "8f083cc7-fcf0-4427-8262-3b468ef6d3e4",
        "order": 4,
        "description": "Web Programming (JavaScript)",
        "estimated_minutes": 60
    },
    {
        "id": "a1152993-1469-45ad-8119-a21e240cc642",
        "subject_id": "17d44498-01fd-4994-a336-01b09b4e997f",
        "order": 1,
        "description": "Organizational matters. Determining the form of exam and the scope of the material. Data management: an introduction.",
        "estimated_minutes": 60
    },
    {
        "id": "a25b53c4-188c-4a03-898f-9cbcdac500d9",
        "subject_id": "17d44498-01fd-4994-a336-01b09b4e997f",
        "order": 2,
        "description": "Data management strategies using the CMMI model as an example. Data strategy. Data quality. Platform and architecture. Data management. Data in operations. Supporting processes.",
        "estimated_minutes": 60
    },
    {
        "id": "e6371dcf-67f1-4d49-b288-90e2b1bf7966",
        "subject_id": "17d44498-01fd-4994-a336-01b09b4e997f",
        "order": 3,
        "description": "ElectronicETL / ELT processes. Profiling and data cleansing.",
        "estimated_minutes": 60
    },
    {
        "id": "b00e44e1-364e-47c3-80eb-35109ee2247c",
        "subject_id": "17d44498-01fd-4994-a336-01b09b4e997f",
        "order": 4,
        "description": "Managing the data lifecycle in an organization.",
        "estimated_minutes": 60
    },
    {
        "id": "31e30f30-ad83-46a9-a44b-4646dbbcf440",
        "subject_id": "17d44498-01fd-4994-a336-01b09b4e997f",
        "order": 5,
        "description": "Data Quality Management.",
        "estimated_minutes": 60
    },
    {
        "id": "a2680483-643f-4cea-af4f-ec406687dfd1",
        "subject_id": "17d44498-01fd-4994-a336-01b09b4e997f",
        "order": 6,
        "description": "Legal aspects of data management. Sarbanes-Oxley Act, Basel, GDPR and more.",
        "estimated_minutes": 60
    },
    {
        "id": "637dacfb-08e4-4d1a-896f-690bc522e16b",
        "subject_id": "17d44498-01fd-4994-a336-01b09b4e997f",
        "order": 7,
        "description": "Cloud data management - platform overview.",
        "estimated_minutes": 60
    },
    {
        "id": "6b6321ab-3c6b-44bb-a910-3ab1cfc33bc9",
        "subject_id": "17d44498-01fd-4994-a336-01b09b4e997f",
        "order": 8,
        "description": "Comprehensive data management strategies: identification, storage and sharing, processes, data governance.",
        "estimated_minutes": 60
    },
    {
        "id": "6ee6b070-93df-4e34-a246-cd172125e5da",
        "subject_id": "17d44498-01fd-4994-a336-01b09b4e997f",
        "order": 9,
        "description": "Open Data systems and anonymization of personal data.",
        "estimated_minutes": 60
    },
    {
        "id": "bf78c87e-5941-4c83-8100-aefe7bd2d0f0",
        "subject_id": "17d44498-01fd-4994-a336-01b09b4e997f",
        "order": 9,
        "description": "Overview of data anonymization techniques and tools: masking, permutations, adding noise, k-anonymization, l-diversification, t-proximity.",
        "estimated_minutes": 60
    },
    {
        "id": "87423ad0-2c62-4f73-840e-f9678ef8ef7d",
        "subject_id": "17d44498-01fd-4994-a336-01b09b4e997f",
        "order": 10,
        "description": "Data security: data backup and recovery.",
        "estimated_minutes": 60
    },
    {
        "id": "0dd1baab-779a-4656-9eb0-0f8fefaa9c7c",
        "subject_id": "d45821c3-8e85-407c-81b5-4bc9e8b1e130",
        "order": 1,
        "description": "Organizational activities. Determination of forms of assessment and the scope of the material. Getting to know the rules of project realisation and presentation projestcs.",
        "estimated_minutes": 60
    },
    {
        "id": "e5a1bc97-3b23-42e3-8fb6-1c66120ca99e",
        "subject_id": "d45821c3-8e85-407c-81b5-4bc9e8b1e130",
        "order": 2,
        "description": "Hierarchical management structure, naming systems and computer networks.",
        "estimated_minutes": 60
    },
    {
        "id": "5d0effff-4d85-46ae-88df-8faec0719db3",
        "subject_id": "d45821c3-8e85-407c-81b5-4bc9e8b1e130",
        "order": 3,
        "description": "Automatic address allocation features based on the DHCP",
        "estimated_minutes": 60
    },
    {
        "id": "395f326a-2a08-45d5-8f85-274903b8108f",
        "subject_id": "d45821c3-8e85-407c-81b5-4bc9e8b1e130",
        "order": 4,
        "description": "Protocols to support remote configuration, management and maintenance of infrastructure, computer systems and networks including: SNMP, RMON, SSH, etc. The essence of the action and the use of MIB (Management Information Base).",
        "estimated_minutes": 60
    },
    {
        "id": "e5dcbb27-2e8f-448e-a0eb-2602fb01b9ff",
        "subject_id": "d45821c3-8e85-407c-81b5-4bc9e8b1e130",
        "order": 5,
        "description": "Support tools to collect and analyze network traffic.",
        "estimated_minutes": 60
    },
    {
        "id": "7838ccf8-3bd0-4658-a595-f2a89a540a2d",
        "subject_id": "d45821c3-8e85-407c-81b5-4bc9e8b1e130",
        "order": 6,
        "description": "Time synchronization in computer systems and networks.",
        "estimated_minutes": 60
    },
    {
        "id": "92978699-6b4a-4e6a-acf5-9af061d9f91f",
        "subject_id": "d45821c3-8e85-407c-81b5-4bc9e8b1e130",
        "order": 7,
        "description": "Virtualization and cloud computing.",
        "estimated_minutes": 60
    },
    {
        "id": "48b58142-ed74-4d8d-aaba-9aff59538a8b",
        "subject_id": "d45821c3-8e85-407c-81b5-4bc9e8b1e130",
        "order": 8,
        "description": "End-to-end mechanisms to ensure computer network monitoring and automatisation of network devices configuration.",
        "estimated_minutes": 60
    },
    {
        "id": "a14d9af0-21ef-48c2-8f64-f56b7103584f",
        "subject_id": "d45821c3-8e85-407c-81b5-4bc9e8b1e130",
        "order": 9,
        "description": "Collection and analysis of information about events occurring in computer systems and networks.",
        "estimated_minutes": 60
    },
    //WEiI - CE - SPEC TT (SEM 5-7)
    {
        "id": "ee56c781-c14d-4006-90fe-a8f3d98d496f",
        "subject_id": "0662caba-23ca-4ca3-9619-87b854235346",
        "order": 1,
        "description": "Introduction. Determining the form of credit and the scope of the material. Basic definitions of security. Acts and legal standards.",
        "estimated_minutes": 60
    },
    {
        "id": "ad31dba8-afd0-4177-89d2-703c4aa92b32",
        "subject_id": "0662caba-23ca-4ca3-9619-87b854235346",
        "order": 2,
        "description": "Cryptography. Methods and categories of breaking ciphers. Basic types of ciphers. Digital signature. Safety certificates. Hash functions.",
        "estimated_minutes": 60
    },
    {
        "id": "e09ef9b8-a724-4f20-be23-200a38655187",
        "subject_id": "0662caba-23ca-4ca3-9619-87b854235346",
        "order": 3,
        "description": "Introduction to information theory. Entropy. Coincidence characters. Frequency analysis of ciphers.",
        "estimated_minutes": 60
    },
    {
        "id": "8100c975-d4e1-4c7e-b899-3e528766fdd1",
        "subject_id": "0662caba-23ca-4ca3-9619-87b854235346",
        "order": 4,
        "description": "Footprinting and Reconnaissance - initial gathering of information about the target of an attack.",
        "estimated_minutes": 60
    },
    {
        "id": "9a8b9232-1af9-4a15-b623-038e0ac2040a",
        "subject_id": "0662caba-23ca-4ca3-9619-87b854235346",
        "order": 5,
        "description": "Network scanning - identification of systems, ports and services operating in the network",
        "estimated_minutes": 60
    },
    {
        "id": "8c8e6567-37dd-47f8-b351-f18cc3372da6",
        "subject_id": "0662caba-23ca-4ca3-9619-87b854235346",
        "order": 6,
        "description": "Active polling of services / systems in order to recognize weak points in the infrastructure.",
        "estimated_minutes": 60
    },
    {
        "id": "61e0e31c-af42-4fe6-9489-4edfb7fae0ba",
        "subject_id": "0662caba-23ca-4ca3-9619-87b854235346",
        "order": 7,
        "description": "System vulnerability analysis. Tools for performing a scan.",
        "estimated_minutes": 60
    },
    {
        "id": "fb5a3b41-1149-4e15-be80-45f55e33a4d7",
        "subject_id": "0662caba-23ca-4ca3-9619-87b854235346",
        "order": 8,
        "description": "Network sniffing - data interception.",
        "estimated_minutes": 60
    },
    {
        "id": "8aff28bf-75bf-4a1a-8ff5-ad7fa1f43964",
        "subject_id": "0662caba-23ca-4ca3-9619-87b854235346",
        "order": 9,
        "description": "Social engineering attacks (Social Engineering).",
        "estimated_minutes": 60
    },
    {
        "id": "e74dbe80-42ac-421a-8aa8-48232e06e5a1",
        "subject_id": "0662caba-23ca-4ca3-9619-87b854235346",
        "order": 10,
        "description": "IPS, IDS systems.",
        "estimated_minutes": 60
    },
    {
        "id": "9b73bdab-cfec-4198-b717-66c5f72918e9",
        "subject_id": "0662caba-23ca-4ca3-9619-87b854235346",
        "order": 11,
        "description": "Attacks against denial-of-service.",
        "estimated_minutes": 60
    },
    {
        "id": "160b5f1a-ce41-4631-8003-11bf003bea9d",
        "subject_id": "0662caba-23ca-4ca3-9619-87b854235346",
        "order": 12,
        "description": "Malicious software types of malware, viruses, anti-viruses, worms, distributed denial of service attacks. Anti-virus programs",
        "estimated_minutes": 60
    },
    {
        "id": "49a2b8d6-c47e-4211-8341-8fa7f57a25dc",
        "subject_id": "0662caba-23ca-4ca3-9619-87b854235346",
        "order": 13,
        "description": "Security policy. Security models. Creation of security procedures. Measures of confidentiality and security of systems. System audit.",
        "estimated_minutes": 60
    },
    {
        "id": "065f172f-6001-4ca1-a99c-5d339b20841f",
        "subject_id": "0662caba-23ca-4ca3-9619-87b854235346",
        "order": 14,
        "description": "SQL Injection - attacks using the lack of proper filtering of SQL database queries.",
        "estimated_minutes": 60
    },
    {
        "id": "8b9bbb8e-8d27-4778-81bb-56900600fb9e",
        "subject_id": "a16d9821-db90-45b0-96d4-85c34c39e6ae",
        "order": 1,
        "description": "Classification and application areas of human-computer interaction systems.",
        "estimated_minutes": 60
    },
    {
        "id": "ccc630d4-a083-4659-98ed-052e0a50f87a",
        "subject_id": "a16d9821-db90-45b0-96d4-85c34c39e6ae",
        "order": 2,
        "description": "Perception and information processing in humans.",
        "estimated_minutes": 60
    },
    {
        "id": "11740566-dd74-401e-9650-da72c188f1e7",
        "subject_id": "a16d9821-db90-45b0-96d4-85c34c39e6ae",
        "order": 3,
        "description": "Usability, ergonomic standards and practical guidelines.",
        "estimated_minutes": 60
    },
    {
        "id": "d45d9597-5796-47e0-a714-faeaa73aebcd",
        "subject_id": "a16d9821-db90-45b0-96d4-85c34c39e6ae",
        "order": 4,
        "description": "Methodologies of user interface design.",
        "estimated_minutes": 60
    },
    {
        "id": "e5163b35-3466-46f0-a2f0-69ae3f7f82a9",
        "subject_id": "a16d9821-db90-45b0-96d4-85c34c39e6ae",
        "order": 5,
        "description": "Techniques for perception and interpretation of human action.",
        "estimated_minutes": 60
    },
    {
        "id": "cb6b8b24-1163-4fc5-b3ef-7a1a9cb5f48a",
        "subject_id": "a16d9821-db90-45b0-96d4-85c34c39e6ae",
        "order": 6,
        "description": "Vision interfaces.",
        "estimated_minutes": 60
    },
    {
        "id": "d640a469-179d-40b6-976c-b4b38df81c45",
        "subject_id": "a16d9821-db90-45b0-96d4-85c34c39e6ae",
        "order": 7,
        "description": "Overview of peripheral devices.",
        "estimated_minutes": 60
    },
    {
        "id": "8fe4290e-fc26-4d88-8722-24ed7cc79843",
        "subject_id": "a16d9821-db90-45b0-96d4-85c34c39e6ae",
        "order": 8,
        "description": "GUI for mobile and embedded devices.",
        "estimated_minutes": 60
    },
    {
        "id": "18d6c00c-3584-4296-8ee8-06ce0661e729",
        "subject_id": "a16d9821-db90-45b0-96d4-85c34c39e6ae",
        "order": 9,
        "description": "Human - computer interaction in Internet applications.",
        "estimated_minutes": 60
    },
    {
        "id": "1d592785-e33a-41ec-be2f-aec783d6ac7b",
        "subject_id": "a16d9821-db90-45b0-96d4-85c34c39e6ae",
        "order": 10,
        "description": "Advanced concepts of interaction.",
        "estimated_minutes": 60
    },
    {
        "id": "cb7ec8e9-c309-407b-9a87-37f958343c42",
        "subject_id": "a16d9821-db90-45b0-96d4-85c34c39e6ae",
        "order": 11,
        "description": "Interfaces accessible for disabled people.",
        "estimated_minutes": 60
    },
    {
        "id": "f2da7fef-de03-458d-8719-d2c4e452e161",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 1,
        "description": "Level B2 lower: Organizations - roles and responsibilities within the organization; innovation in the company;",
        "estimated_minutes": 60
    },
    {
        "id": "ba6addf2-c231-4e2b-a69f-f119283e2f33",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 2,
        "description": "Level B2 lower: Communication during the first meeting; chat/breaking ice; brands and marketing;",
        "estimated_minutes": 60
    },
    {
        "id": "c64417e6-1561-4304-8e44-85352c04c98f",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 3,
        "description": "Team communication; presentations; formal and semi-formal emails",
        "estimated_minutes": 60
    },
    {
        "id": "242c6e8e-6ecd-4997-9e44-723f9b6d368f",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship",
        "estimated_minutes": 60
    },
    {
        "id": "356e316d-0a2f-4a5c-bdfe-5bc941501ca0",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 5,
        "description": "Self-presentation; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "904b883d-f96c-450c-ade4-2be6089873d1",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 6,
        "description": "HR strategies; team communication; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "99046378-16d3-4a28-ae23-cfcee854a672",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 7,
        "description": "Level C1: Innovation in business; innovative thinking; persuasion.",
        "estimated_minutes": 60
    },
    {
        "id": "4b411adb-39d7-467d-83f3-c9b0133f4f9c",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 8,
        "description": "Engaging during the presentation; Circular and linear economy.",
        "estimated_minutes": 60
    },
    {
        "id": "fed1c299-b336-4363-8868-4d89bc446c77",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 9,
        "description": "Lifecircle of products; clarification of information; effective meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "77e425d9-982f-4437-9f76-79cba65f4c3d",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 1,
        "description": "Level B2 lower: Looking for a job. Job interview.",
        "estimated_minutes": 60
    },
    {
        "id": "1735b4cf-cd1e-4389-8fa5-630b9be0ebc0",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 2,
        "description": "Covering letter; business strategies; analysis of factors when planning in business.",
        "estimated_minutes": 60
    },
    {
        "id": "0e6fd032-2df6-4c1c-8a28-0f8eb53b42d8",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 3,
        "description": "Problem solving; cause and effect reporting.",
        "estimated_minutes": 60
    },
    {
        "id": "809b1ae1-3328-4b8e-94c9-b13c9f433959",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 4,
        "description": "Level B2 higher: Finance and economic crises; competition in business; reacting to bad news.",
        "estimated_minutes": 60
    },
    {
        "id": "53737d1e-b998-4a18-b9ea-bf1d4f0c35d5",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 5,
        "description": "Clarification of information; reporting; technology in business.",
        "estimated_minutes": 60
    },
    {
        "id": "438d2fe6-514a-4704-9091-38fd7111fc66",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 6,
        "description": "Dealing with a difficult interlocutor; negotiations; business proposals.",
        "estimated_minutes": 60
    },
    {
        "id": "2611097f-02d3-4690-ad76-380a24387d8a",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 7,
        "description": "Level C1: Finance and financial investments; questioning the facts; consideration of options.",
        "estimated_minutes": 60
    },
    {
        "id": "da592e0c-b1be-4f82-baca-0d8b21f7b274",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 8,
        "description": "Budget analysis; innovators/precursors in business.",
        "estimated_minutes": 60
    },
    {
        "id": "78593c9d-40db-4a9e-a4b6-4978d55c3e3e",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 9,
        "description": "Problem solving; reporting and planning.",
        "estimated_minutes": 60
    },
    {
        "id": "5ebe84f7-a078-471d-b6d4-4a9f56b5d920",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 1,
        "description": "Semester 5; lower B2 level: Logistics; Internet sale; communication during cooperation.",
        "estimated_minutes": 60
    },
    {
        "id": "9b5ea231-8b53-429c-b763-3804ed50ec27",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 2,
        "description": "Negotiations; complaints; entrepreneurship/running a business.",
        "estimated_minutes": 60
    },
    {
        "id": "12f85c5d-5b29-4117-a0f0-47dd6a1ec639",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 3,
        "description": "Influencing people; presentation of facts and data.",
        "estimated_minutes": 60
    },
    {
        "id": "83e51181-7a0c-4919-b4b6-07fd6ecf13ce",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship.",
        "estimated_minutes": 60
    },
    {
        "id": "b2ac8eff-5cce-4a94-ad43-089abb3078d5",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 5,
        "description": "Presenting yourself; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "9efce541-5a11-45e1-b7ec-a4496663aa54",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 6,
        "description": "HR strategies; team communication; leading meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "7ff7780f-415c-4eaa-bc85-2e0c90d8ef6c",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 7,
        "description": "Level C1: Marketing strategies; persuasion; data presentation.",
        "estimated_minutes": 60
    },
    {
        "id": "bf09ec4d-de46-471e-97c8-2b3d389f9f8b",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 8,
        "description": "Building relationships based on trust; tourism industry.",
        "estimated_minutes": 60
    },
    {
        "id": "ec522eaa-1dd1-4636-a83f-c371196aac41",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 9,
        "description": "Business contacts; diversifying the presentation with stories, business correspondence.",
        "estimated_minutes": 60
    },
    {
        "id": "06c487ed-515d-4ec1-b957-71444a84b937",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 1,
        "description": "Semester 6; lower B2 level: Cultural differences; working abroad; decision-making.",
        "estimated_minutes": 60
    },
    {
        "id": "06d3df6a-868a-4477-b4e9-9a01ad6e30a3",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 2,
        "description": "Building relationships; recommendations/suggestions; leadership.",
        "estimated_minutes": 60
    },
    {
        "id": "980e5a51-97c7-4ae7-961f-4a9d44202058",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 3,
        "description": "Feedback - giving and receiving; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "78ecbf1f-ad6b-4224-a079-94aa9fbee52f",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 4,
        "description": "Level B2 higher: Time management; emergencies.",
        "estimated_minutes": 60
    },
    {
        "id": "33afdfe5-dd71-4eb0-8f96-4a9f21a369e0",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 5,
        "description": "Difficult negotiations; email giving reason; change management.",
        "estimated_minutes": 60
    },
    {
        "id": "d909e9b6-941f-4b83-8d1a-7c6ce8726824",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 6,
        "description": "Coaching and mentoring; brainstorming",
        "estimated_minutes": 60
    },
    {
        "id": "f2bbdae8-3200-4fe2-b6c0-6da4511de9da",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 7,
        "description": "Level C1: Workplace clashes; giving support; mediating conflict.",
        "estimated_minutes": 60
    },
    {
        "id": "83f16d0f-cd5b-493f-972b-2536afcb85b5",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 8,
        "description": "Reporting conflicts at work; enterpreneurial mindset.",
        "estimated_minutes": 60
    },
    {
        "id": "43433f82-d2d0-46a6-8c1a-7845b10b7de5",
        "subject_id": "b26e60c4-ae3f-4b17-9a0e-b97e9841c926",
        "order": 9,
        "description": "Performance review; self-assesment.",
        "estimated_minutes": 60
    },
    {
        "id": "6c98d0cb-92a5-4663-b6d4-76f375119983",
        "subject_id": "46cfe938-9ba2-4689-8c09-40e74754e493",
        "order": 1,
        "description": "Technical and engineering problems occurring at the place of the summer practice , and the basic principles of the organization and safety of work. Also, the basic rights and duties of the employee.",
        "estimated_minutes": 60
    },
    {
        "id": "ede9b198-fa21-4e9f-8f5d-6272ee7e76cb",
        "subject_id": "98f3229c-61b5-4ec8-90aa-398dc9a12d8a",
        "order": 1,
        "description": "Introduction",
        "estimated_minutes": 60
    },
    {
        "id": "08baaa55-8804-41af-b0ee-8a4f3f22dd95",
        "subject_id": "98f3229c-61b5-4ec8-90aa-398dc9a12d8a",
        "order": 2,
        "description": "Link state routing protocols, OSPF and ISIS",
        "estimated_minutes": 60
    },
    {
        "id": "70bf4965-bc2a-480e-9536-a4a260118fab",
        "subject_id": "98f3229c-61b5-4ec8-90aa-398dc9a12d8a",
        "order": 3,
        "description": "BGP protocol",
        "estimated_minutes": 60
    },
    {
        "id": "9f28ff5a-5cc3-4470-b801-be4315ce85a8",
        "subject_id": "98f3229c-61b5-4ec8-90aa-398dc9a12d8a",
        "order": 4,
        "description": "The basic mechanism and protocols used to secure the cnetwork devices and network access",
        "estimated_minutes": 60
    },
    {
        "id": "607046d4-9c25-4d79-8f18-c08187f76c75",
        "subject_id": "98f3229c-61b5-4ec8-90aa-398dc9a12d8a",
        "order": 5,
        "description": "ACL and QOS - basics and implementation",
        "estimated_minutes": 60
    },
    {
        "id": "26954a21-875f-4b7a-86e2-6a6ac96a0c1b",
        "subject_id": "98f3229c-61b5-4ec8-90aa-398dc9a12d8a",
        "order": 6,
        "description": "The basic network management strategies, NMS systems, and basic daignostic mechanism/protocols.",
        "estimated_minutes": 60
    },
    {
        "id": "e05eb717-9574-414e-8671-98151609f284",
        "subject_id": "98f3229c-61b5-4ec8-90aa-398dc9a12d8a",
        "order": 7,
        "description": "Buildingof the big computer network with using all known protocols - a case study and methods and means of IT service management",
        "estimated_minutes": 60
    },
    {
        "id": "7e4316a7-56a5-4a01-868f-bed547d2434d",
        "subject_id": "98f3229c-61b5-4ec8-90aa-398dc9a12d8a",
        "order": 8,
        "description": "Summary of the material and passing the module.",
        "estimated_minutes": 60
    },
    {
        "id": "669c7266-fd06-4038-bb79-6e0df8e424a7",
        "subject_id": "81499186-f2e1-4757-b559-9ca79e006b85",
        "order": 1,
        "description": "Basics of creating an application for Android. Create your first simple application with one empty activity. Analysis of project component files (kotlin file, layout xml file, manifest file, gradle build file). Running the application on a real device and an AVD emulator. Building a simple interface in the form of a text box and a button. Working with the visual layout editor. Adding a reaction to a button. Build an intention. Create a second activity. Adding a text field and checking out the message. Back button support added. General information about the structure of android applications. Typical components of the application (activities, services, message recipients, content providers). Activating application components with an intention. Declare components in a manifest file. Declaring application requirements. Application resources and their types. Handling of configuration changes. Keeping an object despite configuration changes. Linguistic localization of the application. Detailed analysis of the manifest file content (package name and application ID, application components, intent filters, icons and labels, permissions, compatible devices, SDK version used).",
        "estimated_minutes": 60
    },
    {
        "id": "6a1ad2d2-e164-4099-9f48-ccb0d5031cd3",
        "subject_id": "81499186-f2e1-4757-b559-9ca79e006b85",
        "order": 2,
        "description": "Activity concept. Declaring activity. Managing the Activity Lifecycle. Cycle feedback methods. The state of activity and its removal from memory. Saving and restoring user interface transient states. Navigation between activities. Support for changing the activity state (change of configuration, entering the multi-window mode, appearance of a new activity or dialogue, pressing the back button, killing the activity process by the operating system). Testing activity with the ActivityScenario class. Tasks and activity reverse pile. Defining task launch modes. System processes and application life. Processes in the foreground, visible processes, service processes, cached processes. Sending data packets between activities and processes.",
        "estimated_minutes": 60
    },
    {
        "id": "cde3e36d-5456-4ece-abe8-fc009c1a6e89",
        "subject_id": "81499186-f2e1-4757-b559-9ca79e006b85",
        "order": 3,
        "description": "Fragments as parts of the user interface. Philosophy, creating fragments. Adding a UI to a fragment and adding a fragment to the activity. Fragment Management. Make passages between fragments. Communication of the fragment with the activity. Adding items to the App Bar. Fragment life cycle and its handling. Coordinate the fragment's life cycle with the activity's life cycle. Create a fragment and add it to the activity XML file. Testing a fragment by putting it into different states. Create a flexible UI. Adding a fragment to an activity while it is running. Replacing one fragment with another. Passing data between fragments. Communication with other passages. Defining and implementing the appropriate interface. Deliver the message to the fragment. Navigate between fragments with animations. Set animations and transitions between them. Postponing the transition.",
        "estimated_minutes": 60
    },
    {
        "id": "f5bdb7e3-8371-47a7-81e3-2fa95881061a",
        "subject_id": "81499186-f2e1-4757-b559-9ca79e006b85",
        "order": 4,
        "description": "Intentions and filters of intentions. Types of intentions. Building an intention (component name, action, data, category, add-ons, flags). Explicit and implicit intentions. Using the expected intention. Solving intentions (action test, category test, data test). Matching intentions.",
        "estimated_minutes": 60
    },
    {
        "id": "88dc9216-045b-4b79-8774-e73a53a9c91c",
        "subject_id": "81499186-f2e1-4757-b559-9ca79e006b85",
        "order": 5,
        "description": "Application files and data. Review of file and data storage. Storage location categories. Permissions and access to external storage. Access to specific application files. Internal and external warehouses. Access to persistent and cached files. Saving a file using a stream. File list preview. Create and delete the file-cache. Verification if external warehouse is available. Selection of the physical location of the warehouse. Access to persistent and volatile files. Media content. Querying the amount of free disk space. Request from the app to the user to delete files on the device. Saving data to shared storage (media content, documents and other files, data sets). Managing all files on an external storage. Requesting access to all files. Operations that are allowed. Saving data in key-value format. Create a shared preferences file. Writing to and reading from this file. Saving data in a local database. Defining Data Using Entities. Defining relations between objects. Create views in the database. Data Access Using DAO Objects. Earlier database preparation - precalculation. Database migration. Database testing and debugging. Saving data with SQLite. Examples of data logging application. Best practices for data storage.",
        "estimated_minutes": 60
    },
    {
        "id": "78fcc8f4-ac08-4929-9047-3e98da84bee8",
        "subject_id": "81499186-f2e1-4757-b559-9ca79e006b85",
        "order": 6,
        "description": "Support for network connections. Performing network operations. Connecting to the network securely. Choosing an HTTP client, DNS service, transferring network operations to a separate thread. Using HttpsUrlConnection to pull data over the network. Convert an input stream to a string. Managing network usage: checking the connection on the device, implementing activities with a WiFi preference, responding to changes in preferences, detecting changes in the connection. Reading network status. Getting the momentary state. Reading the transport possibilities and network connection parameters. Listening to network events. Optimization (minimization, saving) of data use by the network. Parsing and analyzing data in XML format, downloaded from the web. Data transfer without draining the battery. Optimizing the download process for effective web access. Avoiding redundant downloads. Modify the download pattern depending on the connection type. Reduction of battery drain based on the collection and analysis of network traffic. Data transfer with Sync Adapters. Create Authenticator Stub, Stub Content Prividera. Creation and commissioning. Scanning to discover Wifi access points. Support for WiFi Direct (P2P), WiFi Aware, device location using WiFI RTT. Discovering exposed services in the local network and joining them. Creating a P2P connection using WiFi.",
        "estimated_minutes": 60
    },
    {
        "id": "8c1badad-d31a-452d-a80b-662419364b80",
        "subject_id": "81499186-f2e1-4757-b559-9ca79e006b85",
        "order": 7,
        "description": "Building location-oriented applications. Handling location permission requests. Types of location access (foreground and background). Location request while the application is running. Get the last known location. Change and configure location settings. Location update request. Access to background location. Creation and management of a digital fence (geofencing). Detection of the start or end of user activity such as running, cycling or car. Impact of location services on battery power consumption (reading accuracy, frequency, delay time). Migration to localization and contextual APIs. Add and manage Google Maps to apps.",
        "estimated_minutes": 60
    },
    {
        "id": "638357d0-fa54-4197-b8dd-768fbe709d1e",
        "subject_id": "81499186-f2e1-4757-b559-9ca79e006b85",
        "order": 8,
        "description": "Introduction to satellite communications systems. The history, architecture and rules of operation of satellite navigation systems (GPS, GLONASS, Galileo, Beidou). Terrestrial and satellite segment. Satellites system. Types of satellite receivers. Standards for recording information about the position. NMEA sentences. Applications of satellite systems.",
        "estimated_minutes": 60
    },
    {
        "id": "ce200807-6d4d-4b33-9434-749c764c642b",
        "subject_id": "62907a73-7f7d-47f8-b3f0-8a85200e2fdb",
        "order": 1,
        "description": "Introduction to project management",
        "estimated_minutes": 60
    },
    {
        "id": "a845e1ac-4d1a-440c-926a-f27691c43d06",
        "subject_id": "62907a73-7f7d-47f8-b3f0-8a85200e2fdb",
        "order": 2,
        "description": "Defining project objectives",
        "estimated_minutes": 60
    },
    {
        "id": "b93ae016-b9a4-4170-b5ea-052f6cac23e1",
        "subject_id": "62907a73-7f7d-47f8-b3f0-8a85200e2fdb",
        "order": 3,
        "description": "Work breakdown structure, critical path method, PERT method, task and resource management",
        "estimated_minutes": 60
    },
    {
        "id": "43226970-17d1-4fe1-b005-c30c5b73e60d",
        "subject_id": "62907a73-7f7d-47f8-b3f0-8a85200e2fdb",
        "order": 4,
        "description": "Expense planning and cost management",
        "estimated_minutes": 60
    },
    {
        "id": "76da24c1-e698-404d-a536-2d6744376c56",
        "subject_id": "62907a73-7f7d-47f8-b3f0-8a85200e2fdb",
        "order": 5,
        "description": "Project stakeholders",
        "estimated_minutes": 60
    },
    {
        "id": "cf89a096-3682-4e04-9a4f-00a357f3d2b0",
        "subject_id": "62907a73-7f7d-47f8-b3f0-8a85200e2fdb",
        "order": 6,
        "description": "Risk management",
        "estimated_minutes": 60
    },
    {
        "id": "57c4e523-d65c-46e6-8aca-3e7c7320cfe1",
        "subject_id": "62907a73-7f7d-47f8-b3f0-8a85200e2fdb",
        "order": 7,
        "description": "Quality management",
        "estimated_minutes": 60
    },
    {
        "id": "2ffa8a2c-fb40-4c03-a85e-bd1a76226254",
        "subject_id": "62907a73-7f7d-47f8-b3f0-8a85200e2fdb",
        "order": 8,
        "description": "Project monitoring and control",
        "estimated_minutes": 60
    },
    {
        "id": "13462fe0-c940-4a5f-9b4e-e8ec05203b11",
        "subject_id": "62907a73-7f7d-47f8-b3f0-8a85200e2fdb",
        "order": 9,
        "description": "IT project management problems; agile management, methodologies SCRUM and Kanban",
        "estimated_minutes": 60
    },
    {
        "id": "67f17df2-7ca8-4cb6-be3b-43c600242545",
        "subject_id": "62907a73-7f7d-47f8-b3f0-8a85200e2fdb",
        "order": 10,
        "description": "Using Microsoft Project to manage projects",
        "estimated_minutes": 60
    },
    {
        "id": "c42de995-b8f9-4c68-a778-48435a09160a",
        "subject_id": "62907a73-7f7d-47f8-b3f0-8a85200e2fdb",
        "order": 11,
        "description": "Presentation of final projects",
        "estimated_minutes": 60
    },
    {
        "id": "cf55a077-b4b6-4b2b-8696-086a3a092bb4",
        "subject_id": "7fd2adf1-70ae-4ba5-8ca2-83a83beaca17",
        "order": 1,
        "description": "R environment and RStudio. Syntax and the semantics of the language R. Basic operations. Data import from various formats. Measuring scales A data types in R, operators, variables, conditional instructions, loops, functions.",
        "estimated_minutes": 60
    },
    {
        "id": "b14293f7-6f33-4ff7-9a69-82afab2452cb",
        "subject_id": "7fd2adf1-70ae-4ba5-8ca2-83a83beaca17",
        "order": 2,
        "description": "Basic commands - descriptive and mathematical statistics. Basic data processing (new variables, filters, connecting frames). Methods of supplementation for missing data. Anomalies on data - missing observations; duplicates; Standing observations; Errors in formats. Cleaning data using DPLYR and TYDIR.",
        "estimated_minutes": 60
    },
    {
        "id": "6f4ac85a-a412-4fd2-8d06-79bafdb38d18",
        "subject_id": "7fd2adf1-70ae-4ba5-8ca2-83a83beaca17",
        "order": 3,
        "description": "Tibble data using the Tibble package; Importing data using the READR package; Transformations and discretization of variables. Data sources: downloading data from databases (SQLite); Web scraping; Downloading data to R (Google Trends, Eurostat etc.). Dimension reduction using major component analysis (PCA)",
        "estimated_minutes": 60
    },
    {
        "id": "27189ef3-8e19-4f17-8bea-ccbaf493b3ff",
        "subject_id": "7fd2adf1-70ae-4ba5-8ca2-83a83beaca17",
        "order": 4,
        "description": "Introduction to GGPLOT2 packages and exploratory data analysis, Graphics in R - basic and advanced data graphic presentation.",
        "estimated_minutes": 60
    },
    {
        "id": "ae3db4b9-13b0-4fb4-af5a-11475ee908e1",
        "subject_id": "7fd2adf1-70ae-4ba5-8ca2-83a83beaca17",
        "order": 5,
        "description": "Publishing reports directly from R - introduction to R-Markdown (notebook; presentations - R and HTML Slides; PDF etc.). Relation data using the DPLYR package; Processing subtitles using the Stringr package.",
        "estimated_minutes": 60
    },
    {
        "id": "6c5870f8-6567-4c25-8043-9d38002c81a0",
        "subject_id": "7fd2adf1-70ae-4ba5-8ca2-83a83beaca17",
        "order": 6,
        "description": "Introduction to exploration methods of data analysis; Application areas; Used tools; Discussion of measuring scales. Data analysis tasks. Creating distribution series and histograms. Pre-graphic data analysis.",
        "estimated_minutes": 60
    },
    {
        "id": "295e2a31-95f4-4545-84c2-2c4aa454a003",
        "subject_id": "7fd2adf1-70ae-4ba5-8ca2-83a83beaca17",
        "order": 7,
        "description": "Introduction to business analytical systems, analytical tools used, analytical database management. Methods for preparing data for analysis. Measures of descriptive statistics. Testing the relationship between numerical variables, interdependencies measures, covariance and correlation coefficients.",
        "estimated_minutes": 60
    },
    {
        "id": "a3ddd76f-d2c1-40d6-aa1a-eeadb6c7131c",
        "subject_id": "7fd2adf1-70ae-4ba5-8ca2-83a83beaca17",
        "order": 8,
        "description": "Regression methods. Evaluation of the credibility of the regression model. Linear high-dimensional regression: Lasso methods, selection of features. Non-line parametric regression.",
        "estimated_minutes": 60
    },
    {
        "id": "eb5f89b3-9461-4caa-b7aa-779f8fd2f0de",
        "subject_id": "7fd2adf1-70ae-4ba5-8ca2-83a83beaca17",
        "order": 9,
        "description": "Low-dimensional methods of non-parametric regression estimation, high-quality regression estimation methods. Analysis of qualitative data. TEST CHI-2 - use to test the compliance of schedules.",
        "estimated_minutes": 60
    },
    {
        "id": "1ed6b998-7f41-4468-a304-e4ed54020ee1",
        "subject_id": "7fd2adf1-70ae-4ba5-8ca2-83a83beaca17",
        "order": 10,
        "description": "Analysis Analysis as a basic method for identifying factors; Idea, purpose and application of variance analysis; Calculation algorithm. (One-factor and multifactorial variance analysis).",
        "estimated_minutes": 60
    },
    {
        "id": "ccc4ea7e-06be-4b51-9091-a89b69f1e346",
        "subject_id": "7fd2adf1-70ae-4ba5-8ca2-83a83beaca17",
        "order": 11,
        "description": "Classification problems: classification of objects and features; Purchase analysis: goal, being, algorithm determination with examples and application; Methods of classification: Naive Bayes classifier, K-NN.",
        "estimated_minutes": 60
    },
    {
        "id": "146197d6-38da-484b-b4d8-1bff30cb52cc",
        "subject_id": "7fd2adf1-70ae-4ba5-8ca2-83a83beaca17",
        "order": 12,
        "description": "Introduction to factor analyzes (FA); Calculation algorithms in correlation and regression; Determination of partial correlations. Main component (PCA) model; Algorithms identifying the main component analysis model; Numeric implementations; Examples of applications in an enterprise.",
        "estimated_minutes": 60
    },
    {
        "id": "2ce52ec8-3749-4d4f-b2a9-06bd46a461de",
        "subject_id": "7fd2adf1-70ae-4ba5-8ca2-83a83beaca17",
        "order": 13,
        "description": "PCA model as a function of a warning forecast; Differences in factor and main component analysis; A creature solution.",
        "estimated_minutes": 60
    },
    {
        "id": "fdd5bb2c-e21a-4417-b818-9ba2ebab7d14",
        "subject_id": "45a9029e-8793-460e-8d24-e84cf9e16d29",
        "order": 1,
        "description": "Introduction to Medical Informatics. Medical information systems, especially in terms of clinical care systems and diagnostics.",
        "estimated_minutes": 60
    },
    {
        "id": "3d1cf3da-3257-4790-a89a-180ab6336817",
        "subject_id": "45a9029e-8793-460e-8d24-e84cf9e16d29",
        "order": 2,
        "description": "Information models of medical care units and the flow of information to treat the patient as an example the hospital. Types of medical data and their sources. Methods of recording and electronic storage of medical data.",
        "estimated_minutes": 60
    },
    {
        "id": "468c4ffe-8618-4252-bf04-66f4ac71bf50",
        "subject_id": "45a9029e-8793-460e-8d24-e84cf9e16d29",
        "order": 3,
        "description": "The acquisition of medical data: data expressed in natural language, the measurement data. Processing and analysis of biomedical signals.",
        "estimated_minutes": 60
    },
    {
        "id": "de0ee460-9821-483a-b83d-5fa80843b2ac",
        "subject_id": "45a9029e-8793-460e-8d24-e84cf9e16d29",
        "order": 4,
        "description": "A review of selected diagnostic equipment: ultrasound (USG), bioelectrical (ECG, EEG), radiation (X-ray, CT), emission (NMR tomograph), optical and electron microscopy. Telemedicine using the internet. The educational systems.",
        "estimated_minutes": 60
    },
    {
        "id": "f2382b6c-40ee-483b-9bdf-223650aad52a",
        "subject_id": "45a9029e-8793-460e-8d24-e84cf9e16d29",
        "order": 5,
        "description": "Imaging data in medicine: types, specificity, methods of acquisition, processing. Digital processing of medical images. Processing 1D, 2D, filters, morphological operations, segmentation, skeletalization.",
        "estimated_minutes": 60
    },
    {
        "id": "637652ff-f527-4a70-a747-5fa96a78668f",
        "subject_id": "45a9029e-8793-460e-8d24-e84cf9e16d29",
        "order": 6,
        "description": "Inference from medical and time series data. Statistical analysis of data. Application of selected machine learning and deep learning methods for inference from medical and time series data (e.g. EKG, EEG).",
        "estimated_minutes": 60
    },
    {
        "id": "f2de7665-5686-454f-b172-fb280c22861f",
        "subject_id": "45a9029e-8793-460e-8d24-e84cf9e16d29",
        "order": 7,
        "description": "Inference from image data. Statistical analysis of data. Application of machine learning, deep learning for inference from medical imaging data.",
        "estimated_minutes": 60
    },
    {
        "id": "9be23e1a-a949-40c7-bd3a-1245fee42f1c",
        "subject_id": "45a9029e-8793-460e-8d24-e84cf9e16d29",
        "order": 8,
        "description": "Designing computer systems with special reference to health and medical applications. Applications and control and measurement systems in medicine.",
        "estimated_minutes": 60
    },
    {
        "id": "1ff4e763-64b7-4722-88da-a9ee81768150",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 1,
        "description": "Level B2 lower: Organizations - roles and responsibilities within the organization; innovation in the company;",
        "estimated_minutes": 60
    },
    {
        "id": "fea0cdd0-99ec-4c28-accf-34f726063a13",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 2,
        "description": "Level B2 lower: Communication during the first meeting; chat/breaking ice; brands and marketing;",
        "estimated_minutes": 60
    },
    {
        "id": "a61f5bf7-b879-41c2-8c0b-dad8412175c3",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 3,
        "description": "Team communication; presentations; formal and semi-formal emails",
        "estimated_minutes": 60
    },
    {
        "id": "a08822f0-b057-4574-84d3-408718986bff",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship",
        "estimated_minutes": 60
    },
    {
        "id": "1b08bdb6-12f5-4258-95e4-103aa3692fc5",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 5,
        "description": "Self-presentation; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "c2f23f96-b1a1-4194-86a9-c8f54fa6b4fe",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 6,
        "description": "HR strategies; team communication; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "71d01f18-fa79-4517-a1a3-0085e1795f4e",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 7,
        "description": "Level C1: Innovation in business; innovative thinking; persuasion.",
        "estimated_minutes": 60
    },
    {
        "id": "ec3623b0-7683-4458-ada4-c34ff5c6592a",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 8,
        "description": "Engaging during the presentation; Circular and linear economy.",
        "estimated_minutes": 60
    },
    {
        "id": "4d5d485c-c753-4ac3-b45e-541c3375c088",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 9,
        "description": "Lifecircle of products; clarification of information; effective meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "ae0aef25-df6e-4e6d-8678-b417726aa9ce",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 1,
        "description": "Level B2 lower: Looking for a job. Job interview.",
        "estimated_minutes": 60
    },
    {
        "id": "7646f359-0149-4e8a-9177-c89d0727d376",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 2,
        "description": "Covering letter; business strategies; analysis of factors when planning in business.",
        "estimated_minutes": 60
    },
    {
        "id": "859402a4-50d3-460c-973e-20702baecbfd",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 3,
        "description": "Problem solving; cause and effect reporting.",
        "estimated_minutes": 60
    },
    {
        "id": "7a2b4643-d451-40b5-991d-db9b6f2a3098",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 4,
        "description": "Level B2 higher: Finance and economic crises; competition in business; reacting to bad news.",
        "estimated_minutes": 60
    },
    {
        "id": "01495cee-a7d6-40b0-8664-380b72362ac5",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 5,
        "description": "Clarification of information; reporting; technology in business.",
        "estimated_minutes": 60
    },
    {
        "id": "b0934434-0439-4eef-8735-6412175d1f77",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 6,
        "description": "Dealing with a difficult interlocutor; negotiations; business proposals.",
        "estimated_minutes": 60
    },
    {
        "id": "cb4570e5-1f67-4699-9ab8-7f08c102851c",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 7,
        "description": "Level C1: Finance and financial investments; questioning the facts; consideration of options.",
        "estimated_minutes": 60
    },
    {
        "id": "ac04629b-a6a9-4709-a60c-8e7e133359cc",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 8,
        "description": "Budget analysis; innovators/precursors in business.",
        "estimated_minutes": 60
    },
    {
        "id": "1a32130a-794e-484b-ac69-3cd5cbd9826f",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 9,
        "description": "Problem solving; reporting and planning.",
        "estimated_minutes": 60
    },
    {
        "id": "e47b1a19-6b8e-40e1-bd98-35cf8318e25e",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 1,
        "description": "Semester 5; lower B2 level: Logistics; Internet sale; communication during cooperation.",
        "estimated_minutes": 60
    },
    {
        "id": "8faae75c-887e-46df-aaa0-42fb4a9c8cac",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 2,
        "description": "Negotiations; complaints; entrepreneurship/running a business.",
        "estimated_minutes": 60
    },
    {
        "id": "0ee55588-9a4f-4d35-a6d6-471f78274427",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 3,
        "description": "Influencing people; presentation of facts and data.",
        "estimated_minutes": 60
    },
    {
        "id": "0f7bdd21-42b9-4e02-a060-5bc712161566",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship.",
        "estimated_minutes": 60
    },
    {
        "id": "7e77f859-ffed-4687-a037-44b5ca3d4ced",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 5,
        "description": "Presenting yourself; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "6ef7cf3c-a814-4f27-bdb9-6f583ddc91a1",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 6,
        "description": "HR strategies; team communication; leading meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "164f37a5-a297-4040-bccd-5f0f59592590",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 7,
        "description": "Level C1: Marketing strategies; persuasion; data presentation.",
        "estimated_minutes": 60
    },
    {
        "id": "098bc1d0-0b3b-4b83-b6b2-77f1694baed3",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 8,
        "description": "Building relationships based on trust; tourism industry.",
        "estimated_minutes": 60
    },
    {
        "id": "fcce7de6-9721-48b1-9c1d-f15e0715d8f0",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 9,
        "description": "Business contacts; diversifying the presentation with stories, business correspondence.",
        "estimated_minutes": 60
    },
    {
        "id": "424818a5-9544-4a55-8c1e-a7579d935f55",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 1,
        "description": "Semester 6; lower B2 level: Cultural differences; working abroad; decision-making.",
        "estimated_minutes": 60
    },
    {
        "id": "f3fbe5e0-286c-45d2-a50f-b272ddd9d843",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 2,
        "description": "Building relationships; recommendations/suggestions; leadership.",
        "estimated_minutes": 60
    },
    {
        "id": "f4c3607a-5972-41a4-af6e-9743f1e04796",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 3,
        "description": "Feedback - giving and receiving; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "d67af547-cbfd-42ca-9994-f74b8e7a7504",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 4,
        "description": "Level B2 higher: Time management; emergencies.",
        "estimated_minutes": 60
    },
    {
        "id": "0bdd9d1f-baa4-4b55-9535-2f0a39e5a57d",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 5,
        "description": "Difficult negotiations; email giving reason; change management.",
        "estimated_minutes": 60
    },
    {
        "id": "05636f8b-893b-4352-8e56-5413a8769837",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 6,
        "description": "Coaching and mentoring; brainstorming",
        "estimated_minutes": 60
    },
    {
        "id": "10ac8a77-ae1c-4228-8ba4-be38096890ba",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 7,
        "description": "Level C1: Workplace clashes; giving support; mediating conflict.",
        "estimated_minutes": 60
    },
    {
        "id": "a90e9128-e261-4701-baed-cf205e79436b",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 8,
        "description": "Reporting conflicts at work; enterpreneurial mindset.",
        "estimated_minutes": 60
    },
    {
        "id": "be1a2928-6562-47a1-93a8-9f9a605e0499",
        "subject_id": "4f8035fc-d811-47a4-99c0-8760d116acda",
        "order": 9,
        "description": "Performance review; self-assesment.",
        "estimated_minutes": 60
    },
    {
        "id": "40e4f2e1-92e4-4788-8259-a6a825d9586d",
        "subject_id": "1ac76e01-0210-48f4-aba2-afd422bece6f",
        "order": 1,
        "description": "Social and occupational problems in information technology",
        "estimated_minutes": 60
    },
    {
        "id": "8c93c763-e95e-4246-946e-569e4dcf845f",
        "subject_id": "886c8386-1585-4629-b56f-b6ce720b1023",
        "order": 1,
        "description": "Organizational activities. Determination of forms of assessment and the scope of the material.",
        "estimated_minutes": 60
    },
    {
        "id": "5348f172-b065-47e4-9f4f-5b72157c9091",
        "subject_id": "886c8386-1585-4629-b56f-b6ce720b1023",
        "order": 2,
        "description": "Virtualization and containerization of systems.",
        "estimated_minutes": 60
    },
    {
        "id": "af849492-904c-450d-8cca-6c3d63a3fa7f",
        "subject_id": "886c8386-1585-4629-b56f-b6ce720b1023",
        "order": 3,
        "description": "Basic concepts, ideas, and models related to cloud computing and services.",
        "estimated_minutes": 60
    },
    {
        "id": "d065904b-b97e-43b3-8c9a-f8719c47f422",
        "subject_id": "886c8386-1585-4629-b56f-b6ce720b1023",
        "order": 4,
        "description": "Private and public cloud a way to use IT environments more efficiently.",
        "estimated_minutes": 60
    },
    {
        "id": "ee72e907-8abe-4849-879d-9c29b967f94c",
        "subject_id": "886c8386-1585-4629-b56f-b6ce720b1023",
        "order": 5,
        "description": "Examples of cloud service providers: Microsoft Azure, Google Cloud Platform, National Cloud Platform, AWS Cloud Compute Service, Oracle Cloud Infrastructure.",
        "estimated_minutes": 60
    },
    {
        "id": "86cc8ab7-e18d-4e9e-b491-edbb5adb5c2c",
        "subject_id": "886c8386-1585-4629-b56f-b6ce720b1023",
        "order": 6,
        "description": "Creating and configuring an Azure virtual machine.",
        "estimated_minutes": 60
    },
    {
        "id": "cb5e8b3d-8241-4f7c-be30-f45b6008f491",
        "subject_id": "886c8386-1585-4629-b56f-b6ce720b1023",
        "order": 7,
        "description": "Working with databases, IaaS and PaaS services.",
        "estimated_minutes": 60
    },
    {
        "id": "cae9ed89-e914-4866-a2b5-03ad5dececd7",
        "subject_id": "886c8386-1585-4629-b56f-b6ce720b1023",
        "order": 8,
        "description": "Usługi hybrydowe, implementacja i zarządzanie.",
        "estimated_minutes": 60
    },
    {
        "id": "c513f976-2f86-4587-a663-7bc3ac3eb76d",
        "subject_id": "886c8386-1585-4629-b56f-b6ce720b1023",
        "order": 9,
        "description": "Identity and resource security in the Azure cloud.",
        "estimated_minutes": 60
    },
    {
        "id": "011644db-4890-454e-9e49-66c89679df79",
        "subject_id": "886c8386-1585-4629-b56f-b6ce720b1023",
        "order": 10,
        "description": "Strategies related to migration to the cloud: design of a scalable cloud solution, configuration and installation of necessary system components, data migration to cloud computing, optimization of resources operation, selection of proper applications supporting resources management.",
        "estimated_minutes": 60
    },
    {
        "id": "d035410d-e9df-4dd9-90c1-326400511bbb",
        "subject_id": "886c8386-1585-4629-b56f-b6ce720b1023",
        "order": 11,
        "description": "Presentation of projects, discussion.",
        "estimated_minutes": 60
    },
    {
        "id": "698c797b-cefe-4ea0-9d83-5be03ded363a",
        "subject_id": "38b2b47b-03b1-406e-a83d-fa9ddcc082ab",
        "order": 1,
        "description": "Formal and editorial requirements of the thesis. The structure of work, the content of the sections and subsections.",
        "estimated_minutes": 60
    },
    {
        "id": "ea9babc2-7281-41e8-acd6-0a9959e4430c",
        "subject_id": "38b2b47b-03b1-406e-a83d-fa9ddcc082ab",
        "order": 2,
        "description": "The rules for creating theoretical and practical work.",
        "estimated_minutes": 60
    },
    {
        "id": "a5b86311-48ac-4719-b51f-148ada79c303",
        "subject_id": "38b2b47b-03b1-406e-a83d-fa9ddcc082ab",
        "order": 3,
        "description": "Presentation of the theoretical part of the thesis. Create a table of contents, thesis, purpose, scope.",
        "estimated_minutes": 60
    },
    {
        "id": "bf79740a-1f73-4385-a3a1-be470437e7ff",
        "subject_id": "38b2b47b-03b1-406e-a83d-fa9ddcc082ab",
        "order": 1,
        "description": "Discussion of the principles of the thesis presentation on the practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "f11759c7-0e5d-4547-8dd0-b5fcfef491a7",
        "subject_id": "38b2b47b-03b1-406e-a83d-fa9ddcc082ab",
        "order": 2,
        "description": "Presentations of thesis practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "261ba483-0569-4fff-8f13-31f0f3f25ec5",
        "subject_id": "561f25b7-293d-4f3f-b18a-fb46a0b2df93",
        "order": 1,
        "description": "Introduction",
        "estimated_minutes": 60
    },
    {
        "id": "0674f06b-5ccc-4438-b6f2-ced41d3ff9f8",
        "subject_id": "561f25b7-293d-4f3f-b18a-fb46a0b2df93",
        "order": 2,
        "description": "Virtual and augmented reality - a history of development",
        "estimated_minutes": 60
    },
    {
        "id": "b35a22e5-c53d-4238-9c0e-0a4211884a0b",
        "subject_id": "561f25b7-293d-4f3f-b18a-fb46a0b2df93",
        "order": 3,
        "description": "Applications of virtual and augmented reality: medicine, education, science, entertainment. Good practice in developing VR/AR solutions/projects.",
        "estimated_minutes": 60
    },
    {
        "id": "82c35b72-711c-44a7-a8b0-ec28027f515b",
        "subject_id": "561f25b7-293d-4f3f-b18a-fb46a0b2df93",
        "order": 4,
        "description": "Reverse Engineering",
        "estimated_minutes": 60
    },
    {
        "id": "d979ec29-7ca5-4c1e-83c9-9a655f5b2e33",
        "subject_id": "561f25b7-293d-4f3f-b18a-fb46a0b2df93",
        "order": 5,
        "description": "Devices and technologies used in virtual and augmented reality.",
        "estimated_minutes": 60
    },
    {
        "id": "a555b3a9-5e4f-4dad-9a2c-d7fd20e09e75",
        "subject_id": "561f25b7-293d-4f3f-b18a-fb46a0b2df93",
        "order": 6,
        "description": "3D visualization. Introduction to Unreal.",
        "estimated_minutes": 60
    },
    {
        "id": "6dbc8f23-4ada-4ff6-8a71-26217cb50425",
        "subject_id": "561f25b7-293d-4f3f-b18a-fb46a0b2df93",
        "order": 7,
        "description": "Unreal technology. Unity 3D overview.",
        "estimated_minutes": 60
    },
    {
        "id": "5a629e59-3073-42b5-ada9-e9a0926474e1",
        "subject_id": "561f25b7-293d-4f3f-b18a-fb46a0b2df93",
        "order": 8,
        "description": "Project presentation.",
        "estimated_minutes": 60
    },
    {
        "id": "60bcd1fb-0c93-4331-90b5-d9b303e235e0",
        "subject_id": "63348923-5117-422f-b5f4-912ec1727cef",
        "order": 1,
        "description": "Key terms used in the theory of information, the use of this theory",
        "estimated_minutes": 60
    },
    {
        "id": "00ed06bc-3adf-4182-ac51-8e7122272f94",
        "subject_id": "63348923-5117-422f-b5f4-912ec1727cef",
        "order": 2,
        "description": "Perl",
        "estimated_minutes": 60
    },
    {
        "id": "9303d2f0-cbc4-4535-98d5-d72daf50987b",
        "subject_id": "63348923-5117-422f-b5f4-912ec1727cef",
        "order": 3,
        "description": "The needs of modern businesses",
        "estimated_minutes": 60
    },
    {
        "id": "e98e2263-f5dc-4bd4-864e-2089c051e2f3",
        "subject_id": "63348923-5117-422f-b5f4-912ec1727cef",
        "order": 4,
        "description": "ERP Systems",
        "estimated_minutes": 60
    },
    {
        "id": "c4c27fe7-ab24-498c-9a66-68f3baec1dd3",
        "subject_id": "63348923-5117-422f-b5f4-912ec1727cef",
        "order": 5,
        "description": "Control of Production",
        "estimated_minutes": 60
    },
    {
        "id": "df1bc293-8c41-47f0-a43d-323b8049ce70",
        "subject_id": "63348923-5117-422f-b5f4-912ec1727cef",
        "order": 6,
        "description": "XML and XSLT",
        "estimated_minutes": 60
    },
    {
        "id": "96839b17-8473-41b8-8f29-6b2389c4ed82",
        "subject_id": "63348923-5117-422f-b5f4-912ec1727cef",
        "order": 7,
        "description": "Web Services",
        "estimated_minutes": 60
    },
    {
        "id": "b2c0a937-9249-41de-a3ef-34e1133d0595",
        "subject_id": "63348923-5117-422f-b5f4-912ec1727cef",
        "order": 8,
        "description": "VPN",
        "estimated_minutes": 60
    },
    {
        "id": "4940cd1d-97a1-4a33-8e90-43a4b8004549",
        "subject_id": "63348923-5117-422f-b5f4-912ec1727cef",
        "order": 9,
        "description": "LDAP",
        "estimated_minutes": 60
    },
    {
        "id": "145eeac6-8b4b-4381-a2c6-02c6c1da2f3c",
        "subject_id": "63348923-5117-422f-b5f4-912ec1727cef",
        "order": 10,
        "description": "OLAP",
        "estimated_minutes": 60
    },
    {
        "id": "1dadee4a-d68c-4be1-9ef2-f4266a7a90da",
        "subject_id": "63348923-5117-422f-b5f4-912ec1727cef",
        "order": 11,
        "description": "Virtualization",
        "estimated_minutes": 60
    },
    {
        "id": "55f9d81e-97e0-4e89-a2ae-dfc0e55ae4e0",
        "subject_id": "63348923-5117-422f-b5f4-912ec1727cef",
        "order": 12,
        "description": "AAA Services",
        "estimated_minutes": 60
    },
    {
        "id": "38acf0a2-51f3-4f5c-bfee-aed6d7878363",
        "subject_id": "63348923-5117-422f-b5f4-912ec1727cef",
        "order": 13,
        "description": "Open source in the enterprise",
        "estimated_minutes": 60
    },
    {
        "id": "084018bd-d7d8-4cc7-b8e1-94c613770823",
        "subject_id": "63348923-5117-422f-b5f4-912ec1727cef",
        "order": 14,
        "description": "XMPP protocol",
        "estimated_minutes": 60
    },
    {
        "id": "e7f633f3-6bb0-4234-a355-b760253c16ba",
        "subject_id": "4186a5c0-63d4-47ed-a0c9-91613059b149",
        "order": 1,
        "description": "Operations research and the concept of decisions. Decision-making problem and its mathematical model, objective function, limiting conditions. Ordinary linear programming. Standard form of a linear programming problem. The set of feasible solutions. Graphical method for solving a linear problem. Special cases.",
        "estimated_minutes": 60
    },
    {
        "id": "cfb53e9b-c220-4896-8daf-e3da34f450a5",
        "subject_id": "4186a5c0-63d4-47ed-a0c9-91613059b149",
        "order": 2,
        "description": "Base solution of a linear program. Table construction in the simplex method. Incoming and outgoing variables. Two-phase simplex method. Dualism in linear programming. Dual task and its features. Dual simplex method.",
        "estimated_minutes": 60
    },
    {
        "id": "ae481fed-9b47-4f2e-8457-6ce7a5e9f185",
        "subject_id": "4186a5c0-63d4-47ed-a0c9-91613059b149",
        "order": 3,
        "description": "Integer and mixed linear problems. Branch and bound method for solving the integer problem. Cutting method.",
        "estimated_minutes": 60
    },
    {
        "id": "ae5f0751-cb08-426d-b463-330dc83f8aca",
        "subject_id": "4186a5c0-63d4-47ed-a0c9-91613059b149",
        "order": 4,
        "description": "Transport problem, transport issue. Open and closed (balanced and unbalanced) transport problem. Classic transport algorithm. Methods for determining the initial feasible solution: north-west angle method, minimum matrix element method, Vogel method, etc. The basic algorithm of the transport problem - the potential method.",
        "estimated_minutes": 60
    },
    {
        "id": "5943dbba-1a3b-440a-bafd-21219c51cdad",
        "subject_id": "4186a5c0-63d4-47ed-a0c9-91613059b149",
        "order": 5,
        "description": "Problems modeled with networks (weighted graphs). The transport problem, the problem of optimal allocation, the problem of the shortest roads, the problem of the maximum and the cheapest flow, the problem of the minimal spanning tree, the traveling salesman problem.",
        "estimated_minutes": 60
    },
    {
        "id": "bf911bce-29aa-4634-ab9b-62351ec71a7b",
        "subject_id": "4186a5c0-63d4-47ed-a0c9-91613059b149",
        "order": 6,
        "description": "Mathematical models describing conflict situations. Making decisions in situations of conflict of interests. Two-player zero-sum games. Payoff table, saddle point, cost matrix reduction, dominated strategies, pure and mixed strategies. Games with nature.",
        "estimated_minutes": 60
    },
    {
        "id": "7bd96e4e-6194-4d57-8bfc-f046111f0fd9",
        "subject_id": "4186a5c0-63d4-47ed-a0c9-91613059b149",
        "order": 7,
        "description": "Linear programming with multiple objective functions (goal and goal integer programming)",
        "estimated_minutes": 60
    },
    {
        "id": "72c59677-1988-41ac-b87f-87e9c669a65b",
        "subject_id": "4186a5c0-63d4-47ed-a0c9-91613059b149",
        "order": 8,
        "description": "Dynamic programming: stagecoach problem, knapsack problem, production and inventory planning problem. Project planning using the PERT assessment and review method and the CPM critical path method.",
        "estimated_minutes": 60
    },
    {
        "id": "303606d4-82dc-4005-ad5d-cd3ea98e16ba",
        "subject_id": "f3e216da-6481-46a7-ae04-3d3a800bd4fb",
        "order": 1,
        "description": "Integration needs in modern information systems.",
        "estimated_minutes": 60
    },
    {
        "id": "2edc94ef-cfba-4a8d-b373-1f20672e2e02",
        "subject_id": "f3e216da-6481-46a7-ae04-3d3a800bd4fb",
        "order": 2,
        "description": "The concept of loose connection, introduction of EAI technology",
        "estimated_minutes": 60
    },
    {
        "id": "c31a1843-7216-442a-88c0-ef8b5f87c87f",
        "subject_id": "f3e216da-6481-46a7-ae04-3d3a800bd4fb",
        "order": 3,
        "description": "EAI technology, components and their functionality.",
        "estimated_minutes": 60
    },
    {
        "id": "bc165d1b-c8b1-4c49-b767-4fbf3f70bb5a",
        "subject_id": "f3e216da-6481-46a7-ae04-3d3a800bd4fb",
        "order": 4,
        "description": "Construction of an exemplary integration system using EAI elements.",
        "estimated_minutes": 60
    },
    {
        "id": "9cffd69c-4ea5-4623-a01d-e566fbd029be",
        "subject_id": "f3e216da-6481-46a7-ae04-3d3a800bd4fb",
        "order": 5,
        "description": "JMS in message-based integration systems.",
        "estimated_minutes": 60
    },
    {
        "id": "e7797d7e-f957-4943-b507-848a5b231406",
        "subject_id": "f3e216da-6481-46a7-ae04-3d3a800bd4fb",
        "order": 6,
        "description": "MOM software, reliable messaging models.",
        "estimated_minutes": 60
    },
    {
        "id": "76631b1e-f8fa-46fb-a607-4c93771679d3",
        "subject_id": "f3e216da-6481-46a7-ae04-3d3a800bd4fb",
        "order": 7,
        "description": "ESB buses - construction",
        "estimated_minutes": 60
    },
    {
        "id": "bfff0cd2-6c85-46fc-95e6-d693f5c1da5a",
        "subject_id": "f3e216da-6481-46a7-ae04-3d3a800bd4fb",
        "order": 8,
        "description": "Calling ESB bus services, routing.",
        "estimated_minutes": 60
    },
    {
        "id": "2c547848-61cf-4c63-be94-1f6611b5b296",
        "subject_id": "f3e216da-6481-46a7-ae04-3d3a800bd4fb",
        "order": 9,
        "description": "Java components on the ESB bus",
        "estimated_minutes": 60
    },
    {
        "id": "07ee6e99-76a1-4025-bfa9-aedf603a3a63",
        "subject_id": "f3e216da-6481-46a7-ae04-3d3a800bd4fb",
        "order": 10,
        "description": "OpenESB",
        "estimated_minutes": 60
    },
    {
        "id": "d7890591-4c36-4f85-8b9e-eb6fad9fc4aa",
        "subject_id": "f3e216da-6481-46a7-ae04-3d3a800bd4fb",
        "order": 11,
        "description": "Apache ServiceMiX",
        "estimated_minutes": 60
    },
    {
        "id": "9019087b-b78b-4d4d-923f-2f32eb9fdb5d",
        "subject_id": "f3e216da-6481-46a7-ae04-3d3a800bd4fb",
        "order": 12,
        "description": "HDFS file system",
        "estimated_minutes": 60
    },
    {
        "id": "5be540ed-2afb-4479-9c18-1c63433c92dc",
        "subject_id": "f3e216da-6481-46a7-ae04-3d3a800bd4fb",
        "order": 13,
        "description": "Apache ActiveMQ and Apache Kafka.",
        "estimated_minutes": 60
    },
    {
        "id": "f4334702-8e95-457d-a736-765de4b10877",
        "subject_id": "2f70fe26-0ac6-4aec-91ef-41f07ba3495f",
        "order": 1,
        "description": "-",
        "estimated_minutes": 60
    },
    {
        "id": "3c77847d-e8a5-4a78-bab5-14844e9f76d7",
        "subject_id": "bb5e6adc-5147-4723-a147-3d237becd1f1",
        "order": 1,
        "description": "Formal and editorial requirements of the thesis. The structure of work, the content of the sections and subsections.",
        "estimated_minutes": 60
    },
    {
        "id": "2d27158a-fbc0-4119-81a3-81fdb223b971",
        "subject_id": "bb5e6adc-5147-4723-a147-3d237becd1f1",
        "order": 2,
        "description": "The rules for creating theoretical and practical work.",
        "estimated_minutes": 60
    },
    {
        "id": "3700c44c-6001-43e4-9cae-da87ca66f9aa",
        "subject_id": "bb5e6adc-5147-4723-a147-3d237becd1f1",
        "order": 3,
        "description": "Presentation of the theoretical part of the thesis. Create a table of contents, thesis, purpose, scope.",
        "estimated_minutes": 60
    },
    {
        "id": "165b7e11-2ef4-43e6-bd00-0ba3b6bc00ad",
        "subject_id": "bb5e6adc-5147-4723-a147-3d237becd1f1",
        "order": 1,
        "description": "Discussion of the principles of the thesis presentation on the practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "433ed590-45e3-4e14-ab9c-947e1faf8bd3",
        "subject_id": "bb5e6adc-5147-4723-a147-3d237becd1f1",
        "order": 2,
        "description": "Presentations of thesis practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "342ad49f-70b6-44c0-b617-6f946dc8c33b",
        "subject_id": "7d8970e7-9a16-4167-97cc-a577cbb00a29",
        "order": 1,
        "description": "Analysis of the information system. Place in the life cycle analysis of the system. Identification of user and system objectives",
        "estimated_minutes": 60
    },
    {
        "id": "37750de2-a872-4bcf-a47c-0fff5f3fb134",
        "subject_id": "7d8970e7-9a16-4167-97cc-a577cbb00a29",
        "order": 2,
        "description": "Fact-Finding Techniques for Requirements Discovery. Fact-Finding Ethics. A Fact-Finding Strategy",
        "estimated_minutes": 60
    },
    {
        "id": "9400ff9e-959e-4371-ab71-99d5e0911c0d",
        "subject_id": "7d8970e7-9a16-4167-97cc-a577cbb00a29",
        "order": 3,
        "description": "The database in information system. Data models in the database. Basic database systems.",
        "estimated_minutes": 60
    },
    {
        "id": "67cf86e3-8c3a-4846-b033-4306d289b298",
        "subject_id": "7d8970e7-9a16-4167-97cc-a577cbb00a29",
        "order": 4,
        "description": "Computer-aided analysis. CASE tools in the analysis of SI. Diagrams of structural and object-oriented methodologies. Object-oriented analysis: techniques, notations, support tools, UML modeling language.",
        "estimated_minutes": 60
    },
    {
        "id": "80d986b8-d143-4676-b050-9b78b376fafd",
        "subject_id": "7d8970e7-9a16-4167-97cc-a577cbb00a29",
        "order": 5,
        "description": "Information System Design - Introduction. Place the design in the life cycle of the system. Design methodology. Methods and techniques of structural design.",
        "estimated_minutes": 60
    },
    {
        "id": "2cf3db46-ce9f-4bc7-9d11-c13ed220a8df",
        "subject_id": "7d8970e7-9a16-4167-97cc-a577cbb00a29",
        "order": 6,
        "description": "Computer aided design of information systems. Design of input and output, user interface design.",
        "estimated_minutes": 60
    },
    {
        "id": "8449a958-1320-428d-aab1-67bf768527b8",
        "subject_id": "7d8970e7-9a16-4167-97cc-a577cbb00a29",
        "order": 7,
        "description": "The use of RAD tools in the design. Object Design: techniques, notations, support tools. Using UML CASE tools.",
        "estimated_minutes": 60
    },
    {
        "id": "564ea1cc-e7b2-4d0c-a1b2-ca86a9d5114a",
        "subject_id": "7d8970e7-9a16-4167-97cc-a577cbb00a29",
        "order": 8,
        "description": "Managing a programming project. Collaboration. Ethical issues.",
        "estimated_minutes": 60
    },
    {
        "id": "a915f4eb-a368-4b93-b585-f6bf582ec7f6",
        "subject_id": "7d8970e7-9a16-4167-97cc-a577cbb00a29",
        "order": 9,
        "description": "Implementation of information systems. The implementation strategy.",
        "estimated_minutes": 60
    },
    {
        "id": "2fe62862-3efd-4717-be14-982429a29910",
        "subject_id": "dc2d8788-363d-466b-b51b-17fb4a9d93b8",
        "order": 1,
        "description": "Interaction in multimedia systems.",
        "estimated_minutes": 60
    },
    {
        "id": "4e3a29ec-6c8b-4c45-bc29-e743183bfa27",
        "subject_id": "dc2d8788-363d-466b-b51b-17fb4a9d93b8",
        "order": 2,
        "description": "Acquisition and pre-processing of images.",
        "estimated_minutes": 60
    },
    {
        "id": "9785613f-7b24-459e-8bf2-db38d4b86341",
        "subject_id": "dc2d8788-363d-466b-b51b-17fb4a9d93b8",
        "order": 3,
        "description": "Representation of color images.",
        "estimated_minutes": 60
    },
    {
        "id": "19cb0b8f-29ce-4612-a3dc-cecd16327224",
        "subject_id": "dc2d8788-363d-466b-b51b-17fb4a9d93b8",
        "order": 4,
        "description": "Data compression.",
        "estimated_minutes": 60
    },
    {
        "id": "1df3d7d8-6b97-480e-abb7-8efd73a354b7",
        "subject_id": "dc2d8788-363d-466b-b51b-17fb4a9d93b8",
        "order": 5,
        "description": "Multimodal data annotation.",
        "estimated_minutes": 60
    },
    {
        "id": "6182d480-35f5-4e09-85f3-0a2b6a165414",
        "subject_id": "dc2d8788-363d-466b-b51b-17fb4a9d93b8",
        "order": 6,
        "description": "Modern 3D imaging systems.",
        "estimated_minutes": 60
    },
    {
        "id": "07be7a33-e5c5-4e41-9e6d-01592734c6b1",
        "subject_id": "dc2d8788-363d-466b-b51b-17fb4a9d93b8",
        "order": 7,
        "description": "Technologies and tools for the implementation of multimedia systems.",
        "estimated_minutes": 60
    },
    {
        "id": "4068dbb7-6ab3-4397-a784-7ec809f289bd",
        "subject_id": "5dd6f437-d204-4447-9785-095db2b373eb",
        "order": 1,
        "description": "Basis of language Objective-C. Platform iOS programming.",
        "estimated_minutes": 60
    },
    {
        "id": "963a69cf-2f5b-4e99-83b1-8a8537a51091",
        "subject_id": "5dd6f437-d204-4447-9785-095db2b373eb",
        "order": 2,
        "description": "Image processing and analysis. Object recognition techniques using global and local features. Searching and retrieving images from large databases.",
        "estimated_minutes": 60
    },
    {
        "id": "92025e9a-b5d5-43d3-a4c2-5e388b277ef1",
        "subject_id": "5dd6f437-d204-4447-9785-095db2b373eb",
        "order": 3,
        "description": "Industry 4.0 with its cybersecurity, machine data analysis in production systems, stream databases",
        "estimated_minutes": 60
    },
    {
        "id": "cf280d3e-5ffa-48aa-845c-dbb396c382a8",
        "subject_id": "5dd6f437-d204-4447-9785-095db2b373eb",
        "order": 4,
        "description": "Web Programming (JavaScript)",
        "estimated_minutes": 60
    },

    //WEiI - CE - SPEC AI (SEM 5-7)
    {
        "id": "c8886400-79ea-4c0f-8620-a20d052cdb06",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 1,
        "description": "Level B2 lower: Organizations - roles and responsibilities within the organization; innovation in the company;",
        "estimated_minutes": 60
    },
    {
        "id": "21afc056-5d42-44c2-94f2-471bca99b679",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 2,
        "description": "Level B2 lower: Communication during the first meeting; chat/breaking ice; brands and marketing;",
        "estimated_minutes": 60
    },
    {
        "id": "898fc130-58af-4af0-8fa4-b973404bf515",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 3,
        "description": "Team communication; presentations; formal and semi-formal emails",
        "estimated_minutes": 60
    },
    {
        "id": "d4b795f2-6747-4819-8999-5ad64ea97527",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship",
        "estimated_minutes": 60
    },
    {
        "id": "54e3ff76-801a-44a1-83d3-c08aba129f24",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 5,
        "description": "Self-presentation; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "328f4789-f313-4922-8881-aa48d9c18bfe",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 6,
        "description": "HR strategies; team communication; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "57373057-cba1-42e3-85bc-82d8a6c01a91",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 7,
        "description": "Level C1: Innovation in business; innovative thinking; persuasion.",
        "estimated_minutes": 60
    },
    {
        "id": "262f2cee-4646-46f4-b4bd-1700d277e1fd",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 8,
        "description": "Engaging during the presentation; Circular and linear economy.",
        "estimated_minutes": 60
    },
    {
        "id": "588d31bc-f38a-4416-a0d4-34bd10b06649",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 9,
        "description": "Lifecircle of products; clarification of information; effective meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "98bb3a2a-83f2-465d-944b-36c2c2599ffd",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 1,
        "description": "Level B2 lower: Looking for a job. Job interview.",
        "estimated_minutes": 60
    },
    {
        "id": "80b6549a-76a2-4d9c-8951-dd3cae709a2d",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 2,
        "description": "Covering letter; business strategies; analysis of factors when planning in business.",
        "estimated_minutes": 60
    },
    {
        "id": "b01ef363-ae2b-4a94-8af0-0694383b6a0f",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 3,
        "description": "Problem solving; cause and effect reporting.",
        "estimated_minutes": 60
    },
    {
        "id": "a777becf-38d2-4f9b-9c29-6ec8c07cc655",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 4,
        "description": "Level B2 higher: Finance and economic crises; competition in business; reacting to bad news.",
        "estimated_minutes": 60
    },
    {
        "id": "927df313-d55a-4f0c-a0ea-41dce3db8414",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 5,
        "description": "Clarification of information; reporting; technology in business.",
        "estimated_minutes": 60
    },
    {
        "id": "49130b5a-994e-4178-8450-24708d06f440",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 6,
        "description": "Dealing with a difficult interlocutor; negotiations; business proposals.",
        "estimated_minutes": 60
    },
    {
        "id": "90d59a82-19bf-4a6d-8c88-ef4973822787",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 7,
        "description": "Level C1: Finance and financial investments; questioning the facts; consideration of options.",
        "estimated_minutes": 60
    },
    {
        "id": "0f2d903d-4673-4b50-97e6-0f015c970f4f",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 8,
        "description": "Budget analysis; innovators/precursors in business.",
        "estimated_minutes": 60
    },
    {
        "id": "79216dd7-2a6b-4e97-9d16-fd2da15084dc",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 9,
        "description": "Problem solving; reporting and planning.",
        "estimated_minutes": 60
    },
    {
        "id": "b9897f14-dd00-40a1-8017-4936624997f5",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 1,
        "description": "Semester 5; lower B2 level: Logistics; Internet sale; communication during cooperation.",
        "estimated_minutes": 60
    },
    {
        "id": "15b243e7-c7d7-4fc7-9fa5-af34a7584bc0",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 2,
        "description": "Negotiations; complaints; entrepreneurship/running a business.",
        "estimated_minutes": 60
    },
    {
        "id": "1de746d5-3d2d-4bf2-a98d-9ad3f21df4a6",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 3,
        "description": "Influencing people; presentation of facts and data.",
        "estimated_minutes": 60
    },
    {
        "id": "5eead7ff-c732-4280-a969-500f458b25e9",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship.",
        "estimated_minutes": 60
    },
    {
        "id": "7096e820-0daf-460f-91c3-e3ed7cc5aba7",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 5,
        "description": "Presenting yourself; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "c5449ff4-d90d-4205-8c6f-7d949dfa9061",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 6,
        "description": "HR strategies; team communication; leading meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "7217f510-6e2b-402e-8172-205b2620decf",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 7,
        "description": "Level C1: Marketing strategies; persuasion; data presentation.",
        "estimated_minutes": 60
    },
    {
        "id": "d5cbe21e-d848-4fac-82be-773ebcdbe397",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 8,
        "description": "Building relationships based on trust; tourism industry.",
        "estimated_minutes": 60
    },
    {
        "id": "9934cd0d-b3c7-4ec3-98c1-6225deab8d82",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 9,
        "description": "Business contacts; diversifying the presentation with stories, business correspondence.",
        "estimated_minutes": 60
    },
    {
        "id": "9b3b709d-db99-4cc4-83b7-7cfd0e5a2485",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 1,
        "description": "Semester 6; lower B2 level: Cultural differences; working abroad; decision-making.",
        "estimated_minutes": 60
    },
    {
        "id": "6c604498-4ffc-4638-8c39-2c1b784a33ee",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 2,
        "description": "Building relationships; recommendations/suggestions; leadership.",
        "estimated_minutes": 60
    },
    {
        "id": "61f37f71-4bb6-4cf7-9403-a93c7569615e",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 3,
        "description": "Feedback - giving and receiving; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "35420055-10fe-4f47-9b0e-7d020f820bfd",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 4,
        "description": "Level B2 higher: Time management; emergencies.",
        "estimated_minutes": 60
    },
    {
        "id": "ddea0617-b932-4370-a95f-1d0acedbb79e",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 5,
        "description": "Difficult negotiations; email giving reason; change management.",
        "estimated_minutes": 60
    },
    {
        "id": "4fce984d-efe8-4442-8c72-d028d8aaca41",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 6,
        "description": "Coaching and mentoring; brainstorming",
        "estimated_minutes": 60
    },
    {
        "id": "5e83b9af-778c-4160-9a7a-1839520da0c2",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 7,
        "description": "Level C1: Workplace clashes; giving support; mediating conflict.",
        "estimated_minutes": 60
    },
    {
        "id": "a4375dee-c8a1-41aa-bd56-4d25aac46839",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 8,
        "description": "Reporting conflicts at work; enterpreneurial mindset.",
        "estimated_minutes": 60
    },
    {
        "id": "12ca6a20-f204-407c-9792-443bb8d3a54f",
        "subject_id": "6097877a-3816-417a-a2ed-db743651bd4b",
        "order": 9,
        "description": "Performance review; self-assesment.",
        "estimated_minutes": 60
    },
    {
        "id": "f206008b-2a39-4412-9f9f-d5be2c77af44",
        "subject_id": "6ef3d441-ed79-4f89-9c0b-aa35cec0eced",
        "order": 1,
        "description": "R programming language, literals, expressions, functions, values, loops",
        "estimated_minutes": 60
    },
    {
        "id": "c4e546b6-4fdd-4de4-befb-80198081ea98",
        "subject_id": "6ef3d441-ed79-4f89-9c0b-aa35cec0eced",
        "order": 2,
        "description": "Vectors, and vector operations in R",
        "estimated_minutes": 60
    },
    {
        "id": "29e6e145-40c4-4ebe-919d-7475c21fecfb",
        "subject_id": "6ef3d441-ed79-4f89-9c0b-aa35cec0eced",
        "order": 3,
        "description": "Modules in R language, statistical calculations, plots",
        "estimated_minutes": 60
    },
    {
        "id": "5a033d95-7f8a-49dd-babf-9f364d4fcf09",
        "subject_id": "6ef3d441-ed79-4f89-9c0b-aa35cec0eced",
        "order": 4,
        "description": "Python programming language, literals, expressions, loops, functions, classes, objects, exceptions",
        "estimated_minutes": 60
    },
    {
        "id": "05fa272e-3d58-4fa6-bc64-027e75aa87a7",
        "subject_id": "6ef3d441-ed79-4f89-9c0b-aa35cec0eced",
        "order": 5,
        "description": "Python packages for data analysis, statistical calculations, creating data visualization.",
        "estimated_minutes": 60
    },
    {
        "id": "1cba492e-f985-4335-bc15-8e0b696355e2",
        "subject_id": "6ef3d441-ed79-4f89-9c0b-aa35cec0eced",
        "order": 6,
        "description": "The use of Python language to build fundamental data mining models.",
        "estimated_minutes": 60
    },
    {
        "id": "aa0a8eae-4174-4b5b-88fa-fc8df3bc7b9e",
        "subject_id": "fb8ed96c-5e6b-4cbd-976b-a98937c47dd2",
        "order": 1,
        "description": "Technical and engineering problems occurring at the place of the summer practice , and the basic principles of the organization and safety of work. Also, the basic rights and duties of the employee.",
        "estimated_minutes": 60
    },
    {
        "id": "2eb3ba7b-233c-41f4-bc19-b81929fd453a",
        "subject_id": "fa18ff5e-8ce9-4853-b88f-8bf2cb9730df",
        "order": 1,
        "description": "Language models – introduction",
        "estimated_minutes": 60
    },
    {
        "id": "52b1bb35-fa85-4237-bf47-d69d1a54ced7",
        "subject_id": "fa18ff5e-8ce9-4853-b88f-8bf2cb9730df",
        "order": 2,
        "description": "Creating prompts techniques",
        "estimated_minutes": 60
    },
    {
        "id": "2d324f58-2796-417d-b444-14218358248b",
        "subject_id": "fa18ff5e-8ce9-4853-b88f-8bf2cb9730df",
        "order": 3,
        "description": "Creating prompts - the issue of creativity, context, personalization, iteration",
        "estimated_minutes": 60
    },
    {
        "id": "d2ba89ee-ef7f-48c5-9968-7bdfd3fdc86c",
        "subject_id": "fa18ff5e-8ce9-4853-b88f-8bf2cb9730df",
        "order": 4,
        "description": "Threats - ethics and prohibited content",
        "estimated_minutes": 60
    },
    {
        "id": "ad5d87bd-2701-4b33-abc9-5cb0fe7a8b77",
        "subject_id": "fa18ff5e-8ce9-4853-b88f-8bf2cb9730df",
        "order": 5,
        "description": "Code generation",
        "estimated_minutes": 60
    },
    {
        "id": "52fb1e22-6d43-4885-aa57-aa22fca8ff1e",
        "subject_id": "fa18ff5e-8ce9-4853-b88f-8bf2cb9730df",
        "order": 6,
        "description": "Image, music, and video generation",
        "estimated_minutes": 60
    },
    {
        "id": "875b353b-6a25-4bf9-ba7f-13bacb573c0d",
        "subject_id": "fa18ff5e-8ce9-4853-b88f-8bf2cb9730df",
        "order": 7,
        "description": "Analysis of the results obtained",
        "estimated_minutes": 60
    },
    {
        "id": "13e49239-41ca-4c82-8de3-93997226fa5a",
        "subject_id": "c1df9afb-7757-444a-8013-49904e5d389d",
        "order": 1,
        "description": "Introduction to artificial intelligence in video games: terms, and problems",
        "estimated_minutes": 60
    },
    {
        "id": "85cff219-09d8-45f3-ba27-c2ce84781ba3",
        "subject_id": "c1df9afb-7757-444a-8013-49904e5d389d",
        "order": 2,
        "description": "Introduction to programming in the Unity engine, and the ML agents package",
        "estimated_minutes": 60
    },
    {
        "id": "d3308f89-0c4c-4482-9479-929427e9a5ea",
        "subject_id": "c1df9afb-7757-444a-8013-49904e5d389d",
        "order": 4,
        "description": "Decission making algorithms: finite state machines, behaviour trees, Monte-Carlo tree search, and others",
        "estimated_minutes": 60
    },
    {
        "id": "fb96f9cc-19b4-429e-b6a9-20c475f9d3bc",
        "subject_id": "c1df9afb-7757-444a-8013-49904e5d389d",
        "order": 5,
        "description": "Path finding in video games: Dijkstra's algorithm, A*, LPA*, JPS, and others",
        "estimated_minutes": 60
    },
    {
        "id": "90902721-03ec-4956-a750-68ba2f979f64",
        "subject_id": "c1df9afb-7757-444a-8013-49904e5d389d",
        "order": 6,
        "description": "Decission support algorithms: influence maps, RVO, dual-utility reasoning, Lanchester models, and others",
        "estimated_minutes": 60
    },
    {
        "id": "56488053-6207-4040-a521-8fc2d7676b51",
        "subject_id": "c1df9afb-7757-444a-8013-49904e5d389d",
        "order": 7,
        "description": "Alternative uses of artificial intelligence in video games, and potential future development",
        "estimated_minutes": 60
    },
    {
        "id": "8fc97723-11db-4606-9f43-30243543c61b",
        "subject_id": "40a9d364-c0b0-43e6-953c-c9f7f2b64e5b",
        "order": 1,
        "description": "Data sources. Data formats.",
        "estimated_minutes": 60
    },
    {
        "id": "e17becaf-d001-427b-be62-02d820a9f513",
        "subject_id": "40a9d364-c0b0-43e6-953c-c9f7f2b64e5b",
        "order": 2,
        "description": "Acquisition and analysis of data from local sources (text files, XML, spreadsheets, databases).",
        "estimated_minutes": 60
    },
    {
        "id": "a1d9fff8-707e-4e17-970c-380f4819500f",
        "subject_id": "40a9d364-c0b0-43e6-953c-c9f7f2b64e5b",
        "order": 3,
        "description": "Acquisition and analysis of data from remote sources (websites, statistical institutions, online directories, etc.)",
        "estimated_minutes": 60
    },
    {
        "id": "6c81e28a-f715-4e62-9d68-07a934634277",
        "subject_id": "40a9d364-c0b0-43e6-953c-c9f7f2b64e5b",
        "order": 4,
        "description": "Analysis, classification, filtering, selection, transformation, and storage of acquired data.",
        "estimated_minutes": 60
    },
    {
        "id": "ff77960a-4de5-495c-a3ea-825d781d7acb",
        "subject_id": "40a9d364-c0b0-43e6-953c-c9f7f2b64e5b",
        "order": 5,
        "description": "Presentation of collected data, analysis results, and data transformations. Using tools available in Java and Python languages as well as leveraging the capabilities of HTML languages and PHP and JavaScript libraries.",
        "estimated_minutes": 60
    },
    {
        "id": "75721e56-0f39-4aae-8e26-500d30f0449b",
        "subject_id": "28a876d9-c310-43ea-a26f-9961013986e3",
        "order": 1,
        "description": "Introduction to machine learning",
        "estimated_minutes": 60
    },
    {
        "id": "69d1c23e-adf5-4d54-af30-874015f6cca2",
        "subject_id": "28a876d9-c310-43ea-a26f-9961013986e3",
        "order": 2,
        "description": "Performance evaluation of machine learning models",
        "estimated_minutes": 60
    },
    {
        "id": "0d003412-8c62-4e95-95f5-28713a849eba",
        "subject_id": "28a876d9-c310-43ea-a26f-9961013986e3",
        "order": 3,
        "description": "Decision trees",
        "estimated_minutes": 60
    },
    {
        "id": "4447878c-3fca-4831-a1cc-c70a48c5982b",
        "subject_id": "28a876d9-c310-43ea-a26f-9961013986e3",
        "order": 4,
        "description": "Parametric and non-parametric clustering; indicators for centroids selection",
        "estimated_minutes": 60
    },
    {
        "id": "b26de3ea-8b4a-478a-81fb-95db679d7166",
        "subject_id": "28a876d9-c310-43ea-a26f-9961013986e3",
        "order": 5,
        "description": "Introduction to support vector machines algorithm: VC dimension, linear/non-linear separation problem, C-SVM and ν–SVM solution, one- and multi-class classification",
        "estimated_minutes": 60
    },
    {
        "id": "7bef3fd5-93be-471c-8ecf-bb0c69331d5a",
        "subject_id": "28a876d9-c310-43ea-a26f-9961013986e3",
        "order": 6,
        "description": "Shallow neural networks: MLP, RBF, SOM, CP, PNN",
        "estimated_minutes": 60
    },
    {
        "id": "32e4c8e8-a8a8-4495-bc97-e6b09eeb76c1",
        "subject_id": "28a876d9-c310-43ea-a26f-9961013986e3",
        "order": 7,
        "description": "Feature selection: filters wrapers, sequential methods, CART, random forest, Shapley values; feature importance and sensitivity analysis; feature extraction",
        "estimated_minutes": 60
    },
    {
        "id": "94b22587-7103-4833-b162-61c4379b0323",
        "subject_id": "28a876d9-c310-43ea-a26f-9961013986e3",
        "order": 8,
        "description": "Instance selection; joint instance and feature reduction",
        "estimated_minutes": 60
    },
    {
        "id": "afd605d3-438d-4ba1-94b1-61c3f17c6e60",
        "subject_id": "28a876d9-c310-43ea-a26f-9961013986e3",
        "order": 9,
        "description": "Regression methods: linear, polynomial, regression tree, random forest, support vector regression",
        "estimated_minutes": 60
    },
    {
        "id": "cd2bc1a1-d4ac-450a-8d0b-5ee710871a10",
        "subject_id": "28a876d9-c310-43ea-a26f-9961013986e3",
        "order": 10,
        "description": "Selected topics of explainable AI",
        "estimated_minutes": 60
    },
    {
        "id": "643c1691-5bdc-41fc-8ab5-622f75a2af28",
        "subject_id": "28a876d9-c310-43ea-a26f-9961013986e3",
        "order": 11,
        "description": "Deep neural networks",
        "estimated_minutes": 60
    },
    {
        "id": "1645f864-1149-4338-9f9e-5642ddc9fd08",
        "subject_id": "28a876d9-c310-43ea-a26f-9961013986e3",
        "order": 12,
        "description": "Large language models, generative learning",
        "estimated_minutes": 60
    },
    {
        "id": "e24e50e3-9116-49fc-aac5-2f0410051ac6",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 1,
        "description": "Reinforcement learning paradigm, explaining basic concepts",
        "estimated_minutes": 60
    },
    {
        "id": "82829722-b54b-4c7e-930d-23ec4e2e9421",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 2,
        "description": "TD(0) class algorithms",
        "estimated_minutes": 60
    },
    {
        "id": "b6c34acc-d4f3-4920-9aa0-eeb68628b9f4",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 3,
        "description": "TD(λ) class algorithm",
        "estimated_minutes": 60
    },
    {
        "id": "eb0500cb-2c2a-476b-bae0-09ceec27a01f",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 4,
        "description": "Grid environment vs. environment with continuous state variables",
        "estimated_minutes": 60
    },
    {
        "id": "cd890038-a568-4a22-bce6-9cc22fad29db",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 5,
        "description": "Types of reinforcement signal, its formulation and impact on the learning process",
        "estimated_minutes": 60
    },
    {
        "id": "d4b88445-3a04-4056-9ccc-d8f490698d80",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 6,
        "description": "Approximation methods for value functions and action value functions",
        "estimated_minutes": 60
    },
    {
        "id": "fbe37081-7c80-4fc8-9040-8b2c63f39a5a",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 7,
        "description": "Exploring the environment vs. exploiting acquired knowledge",
        "estimated_minutes": 60
    },
    {
        "id": "ead93f37-f82b-4704-842f-84784ab24bab",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 8,
        "description": "Using the reinforcement learning algorithm to solve specific problems - an introduction",
        "estimated_minutes": 60
    },
    {
        "id": "6856b163-c069-4d79-9b2c-182b52168c6c",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 9,
        "description": "Analysis of an example of using a reinforcement learning algorithm to learn a winning strategy in a simple 2D game",
        "estimated_minutes": 60
    },
    {
        "id": "14bdd7a2-9047-448e-932a-c8c06f94b17e",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 10,
        "description": "Analysis of an example of the use of a reinforcement learning algorithm to learn how to optimize the operation of a CNC machine",
        "estimated_minutes": 60
    },
    {
        "id": "6bf7a9b3-571d-4d36-b323-5b996532f26c",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 11,
        "description": "Analysis of an example of a non-standard approach - application of a deep reinforcement learning algorithm to the task of temporal segmentation of a continuous data stream (sequence of RGB images) representing Polish Sign Language gestures",
        "estimated_minutes": 60
    },
    {
        "id": "0848e7c9-4843-42e5-8d05-48aa64120406",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 12,
        "description": "Analysis of an example of a non-standard approach - application of a deep learning algorithm with reinforcement to the task of autonomous route planning of a Mars rover performing selected tasks",
        "estimated_minutes": 60
    },
    {
        "id": "1c9b1631-8c32-48ef-b878-81a35b64ebcd",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 13,
        "description": "Analysis of the performance of different versions of the reinforcement learning algorithm (AHC, Sarsa, Q-Learning)",
        "estimated_minutes": 60
    },
    {
        "id": "7d16b5f6-2a51-426b-a99f-cfa53b44e32c",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 14,
        "description": "Tasks \"to succeed\" and \"to fail\"",
        "estimated_minutes": 60
    },
    {
        "id": "f79d19f9-2950-40af-bd59-795956902b71",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 15,
        "description": "Methods of parameterization and optimization of the learning process",
        "estimated_minutes": 60
    },
    {
        "id": "efb6124e-2ca7-4e3e-a09e-a8324e9a7bf6",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 16,
        "description": "State description: discrete vs. continuous",
        "estimated_minutes": 60
    },
    {
        "id": "ad2f8158-6a67-4a05-a0ed-8fe13eb0a463",
        "subject_id": "7ff88c0c-e847-42df-afb8-20db11430f64",
        "order": 17,
        "description": "Implementation of the students' chosen task of controlling a robot or agent in a computer game according to their own design within the framework of available components and software.",
        "estimated_minutes": 60
    },
    {
        "id": "dfe3a65d-ace7-4061-90f3-48e5405103f4",
        "subject_id": "e7db7e00-9778-4cc2-a6f3-cdad73b98231",
        "order": 1,
        "description": "Introduction to cybersecurity. Presentation about conditions of final module passing.",
        "estimated_minutes": 60
    },
    {
        "id": "33c40f2f-d80d-40e7-9595-a3b10055cc8c",
        "subject_id": "e7db7e00-9778-4cc2-a6f3-cdad73b98231",
        "order": 2,
        "description": "Threats in computer networks and attack categories. Selected methods and tools for counteracting attacks. Common Vulnerability Scoring System.",
        "estimated_minutes": 60
    },
    {
        "id": "3f1da096-8627-413f-8ee7-17e5f30f7ce5",
        "subject_id": "e7db7e00-9778-4cc2-a6f3-cdad73b98231",
        "order": 3,
        "description": "Review and evaluation of machine learning algorithms and tools used in the problem of network attack classification.",
        "estimated_minutes": 60
    },
    {
        "id": "b38862b0-a05c-4840-a188-9c11f6186341",
        "subject_id": "e7db7e00-9778-4cc2-a6f3-cdad73b98231",
        "order": 4,
        "description": "Selected aspects of computer forensics. The use of AI in incident management.",
        "estimated_minutes": 60
    },
    {
        "id": "e30db739-d371-402e-9bcd-24c44d9b9468",
        "subject_id": "e7db7e00-9778-4cc2-a6f3-cdad73b98231",
        "order": 5,
        "description": "Cloud computing services, implementation and provisioning, responsibility models.",
        "estimated_minutes": 60
    },
    {
        "id": "57b14c78-f767-4110-ad56-65586c474f49",
        "subject_id": "e7db7e00-9778-4cc2-a6f3-cdad73b98231",
        "order": 6,
        "description": "Selected services – characteristics and analysis of the security level.",
        "estimated_minutes": 60
    },
    {
        "id": "e3a38385-4ce2-4482-8824-144b2889515e",
        "subject_id": "e7db7e00-9778-4cc2-a6f3-cdad73b98231",
        "order": 7,
        "description": "Overview of cloud security solutions.",
        "estimated_minutes": 60
    },
    {
        "id": "3f02be3c-38d7-4ade-acf3-22f3448a085b",
        "subject_id": "e7db7e00-9778-4cc2-a6f3-cdad73b98231",
        "order": 8,
        "description": "Anomalies detection in systems",
        "estimated_minutes": 60
    },
    {
        "id": "6a4f77ee-de26-4be0-bc9c-8e4658259076",
        "subject_id": "e7db7e00-9778-4cc2-a6f3-cdad73b98231",
        "order": 9,
        "description": "Vulnerability monitoring, AI tools used in Security Operations Center (SOC).",
        "estimated_minutes": 60
    },
    {
        "id": "a550309c-1a82-4d7a-9571-92bafd341ecd",
        "subject_id": "e7db7e00-9778-4cc2-a6f3-cdad73b98231",
        "order": 10,
        "description": "Network-Critical Physical Infrastructure.",
        "estimated_minutes": 60
    },
    {
        "id": "b7ee784a-1dfd-4a8f-a651-8d0a5f388587",
        "subject_id": "84b0b1f0-f05f-4533-9f01-3bb25139d103",
        "order": 1,
        "description": "1. Texture synthesis using procedural methods (stochastic algorithms, chaotic mosaics, randomly parameterized diffusion, ...).",
        "estimated_minutes": 60
    },
    {
        "id": "f1540014-e355-4f6c-8dd4-13c313d532c9",
        "subject_id": "84b0b1f0-f05f-4533-9f01-3bb25139d103",
        "order": 2,
        "description": "2. Digital painting and spatial modeling (optical and spatial deformations, kaleidoscope, hallucination models, psychedelic visions, surrealism and visionary art).",
        "estimated_minutes": 60
    },
    {
        "id": "bae0406c-a525-4ae2-a28c-76528d7bf88c",
        "subject_id": "84b0b1f0-f05f-4533-9f01-3bb25139d103",
        "order": 3,
        "description": "3. Application of Midjourney technology (Midjourney) - prompts. Rapid prototyping of artistic vision. Generating a virtual scene and its parameterization. Total scenes. Manipulation of virtual objects.",
        "estimated_minutes": 60
    },
    {
        "id": "aba2b89f-cf9a-48ad-9808-3ba2a674b5ca",
        "subject_id": "84b0b1f0-f05f-4533-9f01-3bb25139d103",
        "order": 4,
        "description": "4. Use of DALL-E technology (OpenAI). Developing a dialogue that generates a virtual image. Enforcing the desired scene parameterization. Changing the dialogue combined with assessing the resulting effects.",
        "estimated_minutes": 60
    },
    {
        "id": "83fef333-7a93-4fcd-a531-d53ee4ee2fd4",
        "subject_id": "84b0b1f0-f05f-4533-9f01-3bb25139d103",
        "order": 5,
        "description": "5. Applications of Stable-Diffusion technology (Stability AI). Preparing \"raw\" images for experiments. Transforming \"raw\" images into \"artistic\" forms, tuning images towards a target but poorly defined effect.",
        "estimated_minutes": 60
    },
    {
        "id": "1e9e6fd6-41b2-415f-8b4f-4199e3cde0ee",
        "subject_id": "84b0b1f0-f05f-4533-9f01-3bb25139d103",
        "order": 6,
        "description": "6. Use of Deep Dream technology (Google). An attempt to define the psychedelic vision and its practical implementation. generation of a surreal image based on selected works of art, Salvadore Dali, Pablo Picasso.",
        "estimated_minutes": 60
    },
    {
        "id": "f3bc9a00-43c2-44c0-a705-4d98686609dc",
        "subject_id": "84b0b1f0-f05f-4533-9f01-3bb25139d103",
        "order": 7,
        "description": "7. Demonstration of image synthesis during the lecture. Impressionist composition W13. Cubist composition W14.",
        "estimated_minutes": 60
    },
    {
        "id": "05db9d4a-e7e3-4d50-8d23-6b45add4274f",
        "subject_id": "84b0b1f0-f05f-4533-9f01-3bb25139d103",
        "order": 8,
        "description": "Summary of lectures. New directions of AI applications in computer graphics.",
        "estimated_minutes": 60
    },
    {
        "id": "3c359a74-1b95-48e4-a2ca-960149e1a89f",
        "subject_id": "e5108538-742a-4039-8dac-eb54cc594ebf",
        "order": 1,
        "description": "Assessing the quality and transparency of shallow and deep artificial intelligence models",
        "estimated_minutes": 60
    },
    {
        "id": "8ccb9b8c-f807-4307-ab4b-d29d719afc1e",
        "subject_id": "e5108538-742a-4039-8dac-eb54cc594ebf",
        "order": 2,
        "description": "Analyzing and synthesizing Bayes networks using statistical data",
        "estimated_minutes": 60
    },
    {
        "id": "76a7340e-9737-4782-8c8c-b19a267c8bdb",
        "subject_id": "e5108538-742a-4039-8dac-eb54cc594ebf",
        "order": 3,
        "description": "Implementing neural networks for incremental learning based on adaptive resonance theory and fuzzy logic",
        "estimated_minutes": 60
    },
    {
        "id": "d44acd77-5534-4021-b867-2cce60a2c805",
        "subject_id": "e5108538-742a-4039-8dac-eb54cc594ebf",
        "order": 4,
        "description": "Developing easily interpretable medical decision support systems",
        "estimated_minutes": 60
    },
    {
        "id": "57d9ae3f-c025-4d2f-9484-9915ac7827d6",
        "subject_id": "e5108538-742a-4039-8dac-eb54cc594ebf",
        "order": 5,
        "description": "Understanding and applying one-class classifiers",
        "estimated_minutes": 60
    },
    {
        "id": "94edfa5b-8878-4cdf-96e5-af433b38aaf5",
        "subject_id": "e5108538-742a-4039-8dac-eb54cc594ebf",
        "order": 6,
        "description": "Creating a comprehensive data description network for anomaly detection",
        "estimated_minutes": 60
    },
    {
        "id": "7053b2c6-6b6c-4a69-ad20-d643b539c68d",
        "subject_id": "e5108538-742a-4039-8dac-eb54cc594ebf",
        "order": 7,
        "description": "Detecting anomalies in industrial processes using recurrent neural networks",
        "estimated_minutes": 60
    },
    {
        "id": "4119cf06-fecc-424a-a74d-6d2d5f8557c2",
        "subject_id": "e5108538-742a-4039-8dac-eb54cc594ebf",
        "order": 8,
        "description": "Employing transformer models for decision support in natural language processing tasks.",
        "estimated_minutes": 60
    },
    {
        "id": "d5fb9ab7-058d-4cee-b380-267299b32030",
        "subject_id": "e5108538-742a-4039-8dac-eb54cc594ebf",
        "order": 9,
        "description": "Image segmentation technique and explainable deep learning",
        "estimated_minutes": 60
    },
    {
        "id": "242ebb29-8c75-484a-818e-4bb0a1705039",
        "subject_id": "e5108538-742a-4039-8dac-eb54cc594ebf",
        "order": 10,
        "description": "Implementing methods and models of natural language processing within industrial settings.",
        "estimated_minutes": 60
    },
    {
        "id": "e0d48abb-a1f9-4575-9354-cf6ee81c52e8",
        "subject_id": "e5108538-742a-4039-8dac-eb54cc594ebf",
        "order": 11,
        "description": "Optimizing hyperparameters of deep neural networks using Bayesian optimization",
        "estimated_minutes": 60
    },
    {
        "id": "15d696b6-2928-4b7f-86df-fdefe8d7b86d",
        "subject_id": "e5108538-742a-4039-8dac-eb54cc594ebf",
        "order": 12,
        "description": "Developing a rule-based system to explain the operation of deep neural networks",
        "estimated_minutes": 60
    },
    {
        "id": "42c6036f-1032-4140-8381-8971fa93f953",
        "subject_id": "e5108538-742a-4039-8dac-eb54cc594ebf",
        "order": 13,
        "description": "Constructing an interpretable system for predicting errors in source code with GEP and Python.",
        "estimated_minutes": 60
    },
    {
        "id": "59d38b26-d011-458e-9933-452b1bbc5b5c",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 1,
        "description": "Level B2 lower: Organizations - roles and responsibilities within the organization; innovation in the company;",
        "estimated_minutes": 60
    },
    {
        "id": "c9280e09-b98b-4bf0-b361-7a0a6899b197",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 2,
        "description": "Level B2 lower: Communication during the first meeting; chat/breaking ice; brands and marketing;",
        "estimated_minutes": 60
    },
    {
        "id": "ea8dcb0e-7c5f-4fba-b832-dd1c0155413b",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 3,
        "description": "Team communication; presentations; formal and semi-formal emails",
        "estimated_minutes": 60
    },
    {
        "id": "57cc9942-d808-4424-8e25-748e5aeae5b7",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship",
        "estimated_minutes": 60
    },
    {
        "id": "bec983db-67bf-4680-bfa0-9947f2939820",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 5,
        "description": "Self-presentation; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "03504f8e-3b3e-49c2-84cf-dcd996fc7162",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 6,
        "description": "HR strategies; team communication; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "2d9b508c-12b5-41f5-8a44-6ee0caa9c017",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 7,
        "description": "Level C1: Innovation in business; innovative thinking; persuasion.",
        "estimated_minutes": 60
    },
    {
        "id": "a15757df-5cfc-4678-8ea4-9b4f6d1333d2",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 8,
        "description": "Engaging during the presentation; Circular and linear economy.",
        "estimated_minutes": 60
    },
    {
        "id": "c3dccb55-bae2-4a59-b8b2-652048954c62",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 9,
        "description": "Lifecircle of products; clarification of information; effective meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "e2a5deee-54be-4d13-8a0c-8764463b7298",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 1,
        "description": "Level B2 lower: Looking for a job. Job interview.",
        "estimated_minutes": 60
    },
    {
        "id": "cfbf9b8b-b35d-44ca-8a2b-4d4ba9c5ebe6",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 2,
        "description": "Covering letter; business strategies; analysis of factors when planning in business.",
        "estimated_minutes": 60
    },
    {
        "id": "766cafed-670f-454c-84ac-0d270a415f92",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 3,
        "description": "Problem solving; cause and effect reporting.",
        "estimated_minutes": 60
    },
    {
        "id": "f712f718-357a-4d23-8050-16b2b2d4b1be",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 4,
        "description": "Level B2 higher: Finance and economic crises; competition in business; reacting to bad news.",
        "estimated_minutes": 60
    },
    {
        "id": "40ee51e9-bbc1-440e-b7aa-a02fe1fbfba0",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 5,
        "description": "Clarification of information; reporting; technology in business.",
        "estimated_minutes": 60
    },
    {
        "id": "bd25e454-79a1-4c4f-a0d2-9c9b141d2396",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 6,
        "description": "Dealing with a difficult interlocutor; negotiations; business proposals.",
        "estimated_minutes": 60
    },
    {
        "id": "17638159-9c9f-4b26-9893-c84011ac7a2b",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 7,
        "description": "Level C1: Finance and financial investments; questioning the facts; consideration of options.",
        "estimated_minutes": 60
    },
    {
        "id": "e7246c49-42ba-4188-b853-7a8b5de6c4d3",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 8,
        "description": "Budget analysis; innovators/precursors in business.",
        "estimated_minutes": 60
    },
    {
        "id": "7bdb857a-b3f2-4a92-af2d-85dbb28c6f74",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 9,
        "description": "Problem solving; reporting and planning.",
        "estimated_minutes": 60
    },
    {
        "id": "e2a5eefe-b037-49c0-ba67-16785f65b20c",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 1,
        "description": "Semester 5; lower B2 level: Logistics; Internet sale; communication during cooperation.",
        "estimated_minutes": 60
    },
    {
        "id": "8f652633-aed3-498e-b741-9992ebb2434f",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 2,
        "description": "Negotiations; complaints; entrepreneurship/running a business.",
        "estimated_minutes": 60
    },
    {
        "id": "fec5e7a3-4ff6-43ad-b36d-bd56d86681f3",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 3,
        "description": "Influencing people; presentation of facts and data.",
        "estimated_minutes": 60
    },
    {
        "id": "f3ad403f-c46d-4844-bad1-f64fd82820c7",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 4,
        "description": "Level B2 higher: Corporate culture; retention of employees in the company; Building a relationship.",
        "estimated_minutes": 60
    },
    {
        "id": "105b4879-0481-42ca-916b-800804a676b0",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 5,
        "description": "Presenting yourself; training and development.",
        "estimated_minutes": 60
    },
    {
        "id": "8ad8d89a-0581-4698-a333-c109bedf338b",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 6,
        "description": "HR strategies; team communication; leading meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "5c9366e1-24d3-467a-9afa-2c2f67b33c7d",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 7,
        "description": "Level C1: Marketing strategies; persuasion; data presentation.",
        "estimated_minutes": 60
    },
    {
        "id": "92a328ef-03a6-46d1-878a-9c1a5f0bebbc",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 8,
        "description": "Building relationships based on trust; tourism industry.",
        "estimated_minutes": 60
    },
    {
        "id": "592ef2ec-cd31-4fb3-9257-4bb41005d03b",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 9,
        "description": "Business contacts; diversifying the presentation with stories, business correspondence.",
        "estimated_minutes": 60
    },
    {
        "id": "0b41b807-9c6d-4702-94ef-3f4dae68733d",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 1,
        "description": "Semester 6; lower B2 level: Cultural differences; working abroad; decision-making.",
        "estimated_minutes": 60
    },
    {
        "id": "70b4956e-7686-4b2c-bd80-937a6d027037",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 2,
        "description": "Building relationships; recommendations/suggestions; leadership.",
        "estimated_minutes": 60
    },
    {
        "id": "acff1352-2172-46b0-a6ce-dfec272e2a68",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 3,
        "description": "Feedback - giving and receiving; conducting meetings.",
        "estimated_minutes": 60
    },
    {
        "id": "b27b1a87-5c71-4956-906f-6827bfa774a8",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 4,
        "description": "Level B2 higher: Time management; emergencies.",
        "estimated_minutes": 60
    },
    {
        "id": "1128a6ee-11fe-453e-8018-803621d17b2f",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 5,
        "description": "Difficult negotiations; email giving reason; change management.",
        "estimated_minutes": 60
    },
    {
        "id": "65044bb5-afb5-4b20-ad63-0ad59bf0ea78",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 6,
        "description": "Coaching and mentoring; brainstorming",
        "estimated_minutes": 60
    },
    {
        "id": "a5f0bb65-b9ab-4bd2-9dcc-ed85db05f8b5",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 7,
        "description": "Level C1: Workplace clashes; giving support; mediating conflict.",
        "estimated_minutes": 60
    },
    {
        "id": "fdfd7f2d-bfca-4432-aa00-f26ee5015779",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 8,
        "description": "Reporting conflicts at work; enterpreneurial mindset.",
        "estimated_minutes": 60
    },
    {
        "id": "c3244f94-a0a3-4e31-aba2-b2fa027d8cde",
        "subject_id": "061abc5d-c5d3-4128-aba8-6da0025ca610",
        "order": 9,
        "description": "Performance review; self-assesment.",
        "estimated_minutes": 60
    },
    {
        "id": "b1704fca-255a-45f0-967d-e33e13117064",
        "subject_id": "8263a551-840a-42d8-91ab-e9252f2cfd10",
        "order": 1,
        "description": "Social and occupational problems in information technology",
        "estimated_minutes": 60
    },
    {
        "id": "965c79db-f464-4a2f-83cf-a58822fc4d46",
        "subject_id": "94447043-920a-4bcc-8076-019971336edb",
        "order": 1,
        "description": "Basics of recurrent neural networks, architecture and training of LSTM networks",
        "estimated_minutes": 60
    },
    {
        "id": "23de64ee-bacc-4a39-a183-dcb7c43917e3",
        "subject_id": "94447043-920a-4bcc-8076-019971336edb",
        "order": 2,
        "description": "The concept of attention and its use in recurrent networks",
        "estimated_minutes": 60
    },
    {
        "id": "32b1fb16-d2e1-416a-9455-af22a6ace8cc",
        "subject_id": "94447043-920a-4bcc-8076-019971336edb",
        "order": 3,
        "description": "The architecture and training of the transformer",
        "estimated_minutes": 60
    },
    {
        "id": "a1b02cff-bbad-428c-a29e-827017bb2ed5",
        "subject_id": "94447043-920a-4bcc-8076-019971336edb",
        "order": 4,
        "description": "The vision transformer",
        "estimated_minutes": 60
    },
    {
        "id": "b80e9885-2fbe-44bd-aaac-f4cfaf6d2637",
        "subject_id": "94447043-920a-4bcc-8076-019971336edb",
        "order": 5,
        "description": "Bidirectional Encoder Representations from Transformers (BERT)",
        "estimated_minutes": 60
    },
    {
        "id": "8e91665f-5192-4aa4-b4d2-27ff5e6e97c8",
        "subject_id": "94447043-920a-4bcc-8076-019971336edb",
        "order": 6,
        "description": "Applications of recurrent networks and transformers: forecasting based on time series, image and video sequences recognition, text classification, translation.",
        "estimated_minutes": 60
    },
    {
        "id": "2ec632ae-5e11-43bb-8615-e015df9b0e4b",
        "subject_id": "94447043-920a-4bcc-8076-019971336edb",
        "order": 7,
        "description": "Directions of development and applications",
        "estimated_minutes": 60
    },
    {
        "id": "e9729fc1-c2cc-4137-848c-7873969e12f7",
        "subject_id": "93192764-7681-4fbe-bcc4-ca0b6efecdd8",
        "order": 1,
        "description": "Formal and editorial requirements of the thesis. The structure of work, the content of the sections and subsections.",
        "estimated_minutes": 60
    },
    {
        "id": "54d0b6e7-39c7-4860-ade2-c921388fd649",
        "subject_id": "93192764-7681-4fbe-bcc4-ca0b6efecdd8",
        "order": 2,
        "description": "The rules for creating theoretical and practical work.",
        "estimated_minutes": 60
    },
    {
        "id": "d5cf2cd3-58a0-40a9-a3b0-82bb10cb4923",
        "subject_id": "93192764-7681-4fbe-bcc4-ca0b6efecdd8",
        "order": 3,
        "description": "Presentation of the theoretical part of the thesis. Create a table of contents, thesis, purpose, scope.",
        "estimated_minutes": 60
    },
    {
        "id": "d008bab4-0516-451e-809c-f84cdc68c70b",
        "subject_id": "93192764-7681-4fbe-bcc4-ca0b6efecdd8",
        "order": 1,
        "description": "Discussion of the principles of the thesis presentation on the practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "bef141eb-eb65-4add-958a-8ff4e4a26c08",
        "subject_id": "93192764-7681-4fbe-bcc4-ca0b6efecdd8",
        "order": 2,
        "description": "Presentations of thesis practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "f4399969-f3dc-4919-be0e-68f225729463",
        "subject_id": "06a334a4-d360-4894-94ff-8438b0f10456",
        "order": 1,
        "description": "Organizational activities. determining the form of assessment and the scope of material. Familiarization with the principles of work in the laboratory.",
        "estimated_minutes": 60
    },
    {
        "id": "067c6dad-2b9a-4aee-acd6-9be61f692aa9",
        "subject_id": "06a334a4-d360-4894-94ff-8438b0f10456",
        "order": 2,
        "description": "Basics of cloud computing. Origin and classification of cloud systems.",
        "estimated_minutes": 60
    },
    {
        "id": "5d1db10d-d67e-41f1-a3ba-8f77b0c79a1a",
        "subject_id": "06a334a4-d360-4894-94ff-8438b0f10456",
        "order": 3,
        "description": "Physical organization of cloud computing. Computing centers and physical connections.",
        "estimated_minutes": 60
    },
    {
        "id": "263455e4-d45f-4d54-b3bc-267a8ea83652",
        "subject_id": "06a334a4-d360-4894-94ff-8438b0f10456",
        "order": 4,
        "description": "Logical organization of cloud computing. Models and organization of cloud functions and services.",
        "estimated_minutes": 60
    },
    {
        "id": "fa21eecc-e11a-419b-a212-79bc58310521",
        "subject_id": "06a334a4-d360-4894-94ff-8438b0f10456",
        "order": 5,
        "description": "Basic cloud services. Maintenance, administration and continuity of services.",
        "estimated_minutes": 60
    },
    {
        "id": "748be43d-ffcf-424f-82f9-4f7bbac743b0",
        "subject_id": "06a334a4-d360-4894-94ff-8438b0f10456",
        "order": 6,
        "description": "Interaction and integration of cloud computing with the environment. Cooperation with local infrastructure in various service models.",
        "estimated_minutes": 60
    },
    {
        "id": "125f2d90-3a6d-4842-bc6a-28ede0aae148",
        "subject_id": "06a334a4-d360-4894-94ff-8438b0f10456",
        "order": 7,
        "description": "Implementation of basic AI services using cloud computing.",
        "estimated_minutes": 60
    },
    {
        "id": "49ea1d62-2fc3-4fec-af61-77f71d12ff11",
        "subject_id": "06a334a4-d360-4894-94ff-8438b0f10456",
        "order": 8,
        "description": "Using cloud AI services in IoT, BI and cognitive services applications.",
        "estimated_minutes": 60
    },
    {
        "id": "672f2dc9-1f98-4980-849d-407498366c38",
        "subject_id": "06a334a4-d360-4894-94ff-8438b0f10456",
        "order": 9,
        "description": "AI as a tool for managing cloud computing.",
        "estimated_minutes": 60
    },
    {
        "id": "1a8f5dcc-c957-44bc-aca8-7989ca6bb322",
        "subject_id": "06a334a4-d360-4894-94ff-8438b0f10456",
        "order": 10,
        "description": "Summary of the material and completion of the module.",
        "estimated_minutes": 60
    },
    {
        "id": "cfa78f96-6ff2-4c1d-b520-4924c8a3a570",
        "subject_id": "e1f20f0c-0dc2-4bf6-ac79-457b27ce80d8",
        "order": 1,
        "description": "Computer vision problems - the module contents presentation, examples of computer vision systems and their applications",
        "estimated_minutes": 60
    },
    {
        "id": "56789e47-d4a7-4bfb-9fa0-063f360de3b5",
        "subject_id": "e1f20f0c-0dc2-4bf6-ac79-457b27ce80d8",
        "order": 2,
        "description": "Structure of vision system. image pre-processing (histograms and histogram equalization, pixel brightness transformations, image smoothing and edge detection using spatial filters, frequency methods and morphological operations), Image segmentation (image thresholding, Hough transform, edge following). Object feature measurement and analysis, automatic object identification (object classification using K-nearest neighbours method, clastering using K-means algorithm). Introduction to stereovision and calibration of vision system. Tools designed for solving tasks in the field of computer vision (Image Processing and Image Acquisition Toolboxes for MATLAB, OpenCV library). Examples of computer vision applications.",
        "estimated_minutes": 60
    },
    {
        "id": "8509e79c-c21c-4eaa-bada-58af605d3ff3",
        "subject_id": "2aa849d6-0cb1-4b66-9825-c036bb052483",
        "order": 1,
        "description": "Industry 4.0 - digitalization of industry. Genesis, technologies, artificial intelligence, cybersecurity, social and ethical issues.",
        "estimated_minutes": 60
    },
    {
        "id": "43de619c-d979-4583-ae48-c19e4a77e23c",
        "subject_id": "2aa849d6-0cb1-4b66-9825-c036bb052483",
        "order": 2,
        "description": "Production process - definitions of basic concepts. Broadly understood automation and robotization of production processes. General assumptions and principles of lean production (Lean Manufacturing), losses occurring in production processes.",
        "estimated_minutes": 60
    },
    {
        "id": "1aa27f6d-6225-40fa-ba82-43fdc3b5f3ab",
        "subject_id": "2aa849d6-0cb1-4b66-9825-c036bb052483",
        "order": 3,
        "description": "IT systems and tools used in production processes",
        "estimated_minutes": 60
    },
    {
        "id": "26144b46-238a-46d5-b711-b52a63b41e5c",
        "subject_id": "2aa849d6-0cb1-4b66-9825-c036bb052483",
        "order": 4,
        "description": "Applications of artificial intelligence methods in production systems. Case studies.",
        "estimated_minutes": 60
    },
    {
        "id": "a83f634f-d857-4956-b4c8-0728bd9ac5eb",
        "subject_id": "8b8bb90d-d304-45b3-8368-9752d7d3a5ab",
        "order": 1,
        "description": "Process models. Data mining techniques used in process mining.",
        "estimated_minutes": 60
    },
    {
        "id": "0ed05fab-236f-49ec-961e-0257014b10de",
        "subject_id": "8b8bb90d-d304-45b3-8368-9752d7d3a5ab",
        "order": 2,
        "description": "Event log. Log data quality.",
        "estimated_minutes": 60
    },
    {
        "id": "d76cc891-85b1-43b8-be71-b17c67941188",
        "subject_id": "8b8bb90d-d304-45b3-8368-9752d7d3a5ab",
        "order": 3,
        "description": "Process mining algorithms.",
        "estimated_minutes": 60
    },
    {
        "id": "104c5384-ebee-418f-87ce-8cc758401cb7",
        "subject_id": "8b8bb90d-d304-45b3-8368-9752d7d3a5ab",
        "order": 4,
        "description": "Algorithms for detecting decision rules.",
        "estimated_minutes": 60
    },
    {
        "id": "9eca0c68-6198-4b29-963a-58c36094c3dd",
        "subject_id": "8b8bb90d-d304-45b3-8368-9752d7d3a5ab",
        "order": 5,
        "description": "Social network detection algorithms.",
        "estimated_minutes": 60
    },
    {
        "id": "791b5b25-9719-421f-b485-490561a1be52",
        "subject_id": "8b8bb90d-d304-45b3-8368-9752d7d3a5ab",
        "order": 6,
        "description": "Process quality assessment – optimal processes.",
        "estimated_minutes": 60
    },
    {
        "id": "fab742f3-0925-4960-85c5-826cda85877d",
        "subject_id": "ab582f33-3db3-461e-a7e3-a273c422be0f",
        "order": 1,
        "description": "-",
        "estimated_minutes": 60
    },
    {
        "id": "39dbaeb4-67b2-4976-b539-84fc67fe817a",
        "subject_id": "a8bb14e2-5d6f-491d-8fea-de452f7d5990",
        "order": 1,
        "description": "Formal and editorial requirements of the thesis. The structure of work, the content of the sections and subsections.",
        "estimated_minutes": 60
    },
    {
        "id": "8763cfc4-2f09-45f6-9099-20db34c3f100",
        "subject_id": "a8bb14e2-5d6f-491d-8fea-de452f7d5990",
        "order": 2,
        "description": "The rules for creating theoretical and practical work.",
        "estimated_minutes": 60
    },
    {
        "id": "12d64eef-62e9-4932-87ad-e5bcf34cd85e",
        "subject_id": "a8bb14e2-5d6f-491d-8fea-de452f7d5990",
        "order": 3,
        "description": "Presentation of the theoretical part of the thesis. Create a table of contents, thesis, purpose, scope.",
        "estimated_minutes": 60
    },
    {
        "id": "68777fa1-d829-40ab-ba00-14205f0ce060",
        "subject_id": "a8bb14e2-5d6f-491d-8fea-de452f7d5990",
        "order": 1,
        "description": "Discussion of the principles of the thesis presentation on the practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "05abc996-688d-43e6-bf61-05e0acf0df46",
        "subject_id": "a8bb14e2-5d6f-491d-8fea-de452f7d5990",
        "order": 2,
        "description": "Presentations of thesis practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "0f632ba8-1f62-4c0b-987b-dde64eb88145",
        "subject_id": "f1d7c05a-e385-4d59-bd9b-6ea29785f22c",
        "order": 1,
        "description": "Introduction to Medical Informatics Specifics of medical information systems, especially as they relate to medical imaging and diagnostic systems. Presentation of the types of medical data, their sources, and specifics, including ethical aspects related to them. Discussion of integrated information systems used, major medical standards used for coding and transmission of medical data.",
        "estimated_minutes": 60
    },
    {
        "id": "1488d479-da93-4c16-989f-c8c22fecd5d2",
        "subject_id": "f1d7c05a-e385-4d59-bd9b-6ea29785f22c",
        "order": 2,
        "description": "Presentation of selected medical diagnostic equipment, divided into laboratory, signal, and imaging diagnostics.",
        "estimated_minutes": 60
    },
    {
        "id": "4215a80f-5c36-4e47-95ae-4bc85686da14",
        "subject_id": "f1d7c05a-e385-4d59-bd9b-6ea29785f22c",
        "order": 3,
        "description": "Discussion of selected aspects of diagnostic data analysis and presentation of related IT standards and solutions, including PACS (Picture Archiving and Communication Systems) medical imaging databases, RIS ( Radiology Information Systems) systems.",
        "estimated_minutes": 60
    },
    {
        "id": "ea7cd6e8-6ebe-452d-a2e0-b60b124e7ef7",
        "subject_id": "f1d7c05a-e385-4d59-bd9b-6ea29785f22c",
        "order": 4,
        "description": "Medical data acquisition: measurement data, image data, data formats. Image data in medicine: types, specifics, methods of acquisition, processing. Digital processing of medical images, filtering, morphological operations, and segmentation.",
        "estimated_minutes": 60
    },
    {
        "id": "185c6842-0e4c-4de4-96f2-f9cfad0bfb8d",
        "subject_id": "f1d7c05a-e385-4d59-bd9b-6ea29785f22c",
        "order": 5,
        "description": "Overview of applications of machine learning algorithms in modern medicine.",
        "estimated_minutes": 60
    },
    {
        "id": "c511d6cc-c73b-4993-88f2-3c56f7a746fd",
        "subject_id": "f1d7c05a-e385-4d59-bd9b-6ea29785f22c",
        "order": 6,
        "description": "Applications of selected ML algorithms for analysis and classification of medical data. Two-class classification - a case study. Multi-class classification - a case study.",
        "estimated_minutes": 60
    },
    {
        "id": "781ae70d-f428-4aaa-be8a-c87125204329",
        "subject_id": "f1d7c05a-e385-4d59-bd9b-6ea29785f22c",
        "order": 7,
        "description": "Rule-based classifiers in medical applications. The problem of explainability of the performance of classifiers. Review of selected shallow and deep learning methods and algorithms in medical applications. Basic aspects related to the learning process: type of model supervision, evaluation of the learning process, underlearning and overlearning of the model, preprocessing of data into the network.",
        "estimated_minutes": 60
    },
    {
        "id": "9e1252f6-9af8-4eec-87b8-795242fe1bf2",
        "subject_id": "f1d7c05a-e385-4d59-bd9b-6ea29785f22c",
        "order": 8,
        "description": "Shallow neural networks as classifiers in medical applications.",
        "estimated_minutes": 60
    },
    {
        "id": "f0233ff4-d653-4868-b423-bc82bbd71be2",
        "subject_id": "f1d7c05a-e385-4d59-bd9b-6ea29785f22c",
        "order": 9,
        "description": "Recurrent networks, LSTM models in medical applications. Principles of construction and learning of time series classifiers occurring in medicine (ECG, EEG). Problems of time series prediction in medicine.",
        "estimated_minutes": 60
    },
    {
        "id": "275c20e8-debd-4977-9e92-19e782f924a0",
        "subject_id": "f1d7c05a-e385-4d59-bd9b-6ea29785f22c",
        "order": 10,
        "description": "Deep neural networks for medical image analysis and processing. Application of deep convolutional networks (CNNs) to detect, recognize, localize, and count blood cells in microscopic images.",
        "estimated_minutes": 60
    },
    {
        "id": "2e98b496-9ce3-4263-adab-9442392876e4",
        "subject_id": "f1d7c05a-e385-4d59-bd9b-6ea29785f22c",
        "order": 11,
        "description": "The problem of using pre-learned models in transfer learning for medical applications. Modification and adaptation of pre-learned models for classification of lung diseases from radiological images.",
        "estimated_minutes": 60
    },
    {
        "id": "f8f1fe5b-3ba0-4c0c-af2f-454348c9ff18",
        "subject_id": "f1d7c05a-e385-4d59-bd9b-6ea29785f22c",
        "order": 12,
        "description": "Use of spline networks in building autoencoders to process medical images (de-noising, reconstruction, resolution enhancement).",
        "estimated_minutes": 60
    },
    {
        "id": "0085a26c-e951-414a-98d1-b83bcdeecd44",
        "subject_id": "54ed022e-ba1c-4e9c-a428-1524b667a88f",
        "order": 1,
        "description": "Basis of language Objective-C. Platform iOS programming.",
        "estimated_minutes": 60
    },
    {
        "id": "54237d04-299c-43a4-bed2-e3ca46bdb4f4",
        "subject_id": "54ed022e-ba1c-4e9c-a428-1524b667a88f",
        "order": 2,
        "description": "Image processing and analysis. Object recognition techniques using global and local features. Searching and retrieving images from large databases.",
        "estimated_minutes": 60
    },
    {
        "id": "2ef56586-4b39-4963-b292-44ee8ff2d46a",
        "subject_id": "54ed022e-ba1c-4e9c-a428-1524b667a88f",
        "order": 3,
        "description": "Industry 4.0 with its cybersecurity, machine data analysis in production systems, stream databases",
        "estimated_minutes": 60
    },
    {
        "id": "e8d689b4-8e41-4874-8b32-ea104cdb1dfc",
        "subject_id": "54ed022e-ba1c-4e9c-a428-1524b667a88f",
        "order": 4,
        "description": "Web Programming (JavaScript)",
        "estimated_minutes": 60
    },
    {
        "id": "c95a76a4-208d-4833-b9b7-57e58a441358",
        "subject_id": "04cd9643-7ff9-46b3-9499-9c3575e5bf9d",
        "order": 1,
        "description": "Ethics: ethical principles in the field, accountability for content and transparency of operation, discrimination and biases, legal regulations, impact on the job market.",
        "estimated_minutes": 60
    },
    {
        "id": "23b879bd-d649-45c6-a15b-6e9d5d3a8e5b",
        "subject_id": "04cd9643-7ff9-46b3-9499-9c3575e5bf9d",
        "order": 2,
        "description": "Analysis of discrimination in algorithms, data manipulation: generating fake content, such as deepfakes, analysis and detection of fake content; social and political consequences; protection against disinformation.",
        "estimated_minutes": 60
    },
    {
        "id": "bd759214-f1a3-454d-907b-37584b7d55c5",
        "subject_id": "04cd9643-7ff9-46b3-9499-9c3575e5bf9d",
        "order": 3,
        "description": "Attacks generated by artificial intelligence algorithms and defense against them, artificial intelligence in threat identification and mitigation, adversarial attacks on models.",
        "estimated_minutes": 60
    },
    {
        "id": "58410d86-304a-4027-b433-cdf3fe695e93",
        "subject_id": "04cd9643-7ff9-46b3-9499-9c3575e5bf9d",
        "order": 4,
        "description": "Privacy: learning on personal data, preference identification, consequences, privacy protection, data anonymization strategies.",
        "estimated_minutes": 60
    },
    {
        "id": "18fcd52e-983d-40c3-a628-117352174876",
        "subject_id": "04cd9643-7ff9-46b3-9499-9c3575e5bf9d",
        "order": 5,
        "description": "Control: loss of control over artificial intelligence algorithms, autonomous and military systems, regulations, and strategies.",
        "estimated_minutes": 60
    },
    {
        "id": "400589c3-555c-4233-9069-ba7fddd2cdce",
        "subject_id": "04cd9643-7ff9-46b3-9499-9c3575e5bf9d",
        "order": 6,
        "description": "Project on the topic of threats associated with artificial intelligence.",
        "estimated_minutes": 60
    },
    //WEiI - ACR - BASE
    {
        "id": "799844fd-5a29-44f2-8eff-489c5afdfae6",
        "subject_id": "ab6a2c4a-2f15-4ee4-8776-3c213f9440b9",
        "order": 1,
        "description": "Sequences of numbers - the limit of a sequence, series of numbers - tests for convergence of series, limit and continuity of functions of real variable",
        "estimated_minutes": 60
    },
    {
        "id": "14385401-3b30-4b6f-9560-0a31177b3054",
        "subject_id": "ab6a2c4a-2f15-4ee4-8776-3c213f9440b9",
        "order": 2,
        "description": "The derivatives of functions of one real variable and theorems and methods of differential calculus of functions of one real variable used to search for local extrema and sketch graphs of functions",
        "estimated_minutes": 60
    },
    {
        "id": "5662d21e-21eb-48c7-a461-dd00f699b202",
        "subject_id": "ab6a2c4a-2f15-4ee4-8776-3c213f9440b9",
        "order": 3,
        "description": "Written test",
        "estimated_minutes": 60
    },
    {
        "id": "6aa11d8c-2081-4126-b88e-8e063a2bf14c",
        "subject_id": "ab6a2c4a-2f15-4ee4-8776-3c213f9440b9",
        "order": 4,
        "description": "Indefinite integral of a function of one real variable, integration by parts and by substitution, integrals of simple rational functions, the notion of definite integral",
        "estimated_minutes": 60
    },
    {
        "id": "37d07192-c51f-402b-88fb-f9cd41436e51",
        "subject_id": "ab6a2c4a-2f15-4ee4-8776-3c213f9440b9",
        "order": 5,
        "description": "Determinants and ranks of matrices, systems of linear equations, complex numbers",
        "estimated_minutes": 60
    },
    {
        "id": "7454d07d-2cb9-4c07-97fd-5be5119f2fc9",
        "subject_id": "ab6a2c4a-2f15-4ee4-8776-3c213f9440b9",
        "order": 6,
        "description": "The derivatives of functions of several variables, theorems and methods of differential calculus of functions of several variables used to search for local extrema of functions",
        "estimated_minutes": 60
    },
    {
        "id": "6704b0ff-2db9-41f7-aa82-786ff5466879",
        "subject_id": "7e9d45d8-c18f-4b1c-a4a5-757d8d70a717",
        "order": 1,
        "description": "Physical quantities. Vectors and scalars",
        "estimated_minutes": 60
    },
    {
        "id": "3f63425e-3dfe-4138-afd5-45f43450024d",
        "subject_id": "7e9d45d8-c18f-4b1c-a4a5-757d8d70a717",
        "order": 2,
        "description": "Kinematics and dynamics of a material point, including curvilinear motion and inertial forces.",
        "estimated_minutes": 60
    },
    {
        "id": "e7517db5-cdb9-479b-b10d-b9a01efe87c6",
        "subject_id": "7e9d45d8-c18f-4b1c-a4a5-757d8d70a717",
        "order": 3,
        "description": "Conservation laws in physics. Elastic and inelastic collisions",
        "estimated_minutes": 60
    },
    {
        "id": "f08868ea-547f-4afc-8f10-44a1ea1b2bfd",
        "subject_id": "7e9d45d8-c18f-4b1c-a4a5-757d8d70a717",
        "order": 4,
        "description": "Dynamics of a material point. Dynamics of a rigid body. Moment of inertia",
        "estimated_minutes": 60
    },
    {
        "id": "b5aebeb0-f08a-4b3b-9cfa-2a6c0ac0b922",
        "subject_id": "7e9d45d8-c18f-4b1c-a4a5-757d8d70a717",
        "order": 5,
        "description": "Harmonic oscillations. Simple, damped and forced oscillator. Resonance phenomenon",
        "estimated_minutes": 60
    },
    {
        "id": "027df52e-a32b-4f2b-b06d-e454bcedbd4e",
        "subject_id": "7e9d45d8-c18f-4b1c-a4a5-757d8d70a717",
        "order": 6,
        "description": "Direct current electricity - basic concepts.",
        "estimated_minutes": 60
    },
    {
        "id": "519b6dbe-8bcc-4757-bd3c-198d99001c51",
        "subject_id": "7e9d45d8-c18f-4b1c-a4a5-757d8d70a717",
        "order": 7,
        "description": "Direct and alternating current magnetic fields - basic concepts, including Maxwell's equations.",
        "estimated_minutes": 60
    },
    {
        "id": "0a559c85-650c-4d54-b7cb-a4a9806688f6",
        "subject_id": "69c9d3a5-71bb-4c8b-9850-dc9523135925",
        "order": 1,
        "description": "Introduction to Computer Engineering. Algorithms.",
        "estimated_minutes": 60
    },
    {
        "id": "40d49635-4776-42ba-b122-2723047a75e0",
        "subject_id": "69c9d3a5-71bb-4c8b-9850-dc9523135925",
        "order": 2,
        "description": "Structural programming. C programming language.",
        "estimated_minutes": 60
    },
    {
        "id": "0b634436-4428-4ac5-ac22-d97427c05026",
        "subject_id": "69c9d3a5-71bb-4c8b-9850-dc9523135925",
        "order": 3,
        "description": "Object-oriented programming. C++ and Java programming languages.",
        "estimated_minutes": 60
    },
    {
        "id": "1cbedcee-1ae2-4f9d-8ee5-0944e8a8d512",
        "subject_id": "69c9d3a5-71bb-4c8b-9850-dc9523135925",
        "order": 4,
        "description": "Introduction to computer networks.",
        "estimated_minutes": 60
    },
    {
        "id": "0c5adfb3-3ec5-43b7-bd92-6d22f76a53da",
        "subject_id": "69c9d3a5-71bb-4c8b-9850-dc9523135925",
        "order": 5,
        "description": "Operating Systems.",
        "estimated_minutes": 60
    },
    {
        "id": "7e6007a0-fb27-4385-9cab-7209eac4fe39",
        "subject_id": "69c9d3a5-71bb-4c8b-9850-dc9523135925",
        "order": 6,
        "description": "Relational databases",
        "estimated_minutes": 60
    },
    {
        "id": "d7dea8e0-6abe-47bc-99c2-b46d4446be4e",
        "subject_id": "69c9d3a5-71bb-4c8b-9850-dc9523135925",
        "order": 7,
        "description": "Artificial Intelligence",
        "estimated_minutes": 60
    },
    {
        "id": "dc51c6d3-2b02-4838-a49a-43daac8d7bf8",
        "subject_id": "4aa12f06-e2d9-4414-9256-ee3edcabc4a1",
        "order": 1,
        "description": "Basic measuring instruments laboratory:oscilloscop, multimetr, generator",
        "estimated_minutes": 60
    },
    {
        "id": "6dde26b1-0893-41fe-a8fc-1477909113ef",
        "subject_id": "4aa12f06-e2d9-4414-9256-ee3edcabc4a1",
        "order": 2,
        "description": "The measurement methods typical of electrical quantities",
        "estimated_minutes": 60
    },
    {
        "id": "379fa4b4-5d53-4704-b399-8ded37f80ac0",
        "subject_id": "4aa12f06-e2d9-4414-9256-ee3edcabc4a1",
        "order": 3,
        "description": "The measurement methods typical of non-electrical quantities",
        "estimated_minutes": 60
    },
    {
        "id": "9323160b-e7ab-43a7-b284-dc80945dba8b",
        "subject_id": "4aa12f06-e2d9-4414-9256-ee3edcabc4a1",
        "order": 4,
        "description": "Processing and/C and C/and in measuring technique",
        "estimated_minutes": 60
    },
    {
        "id": "a9658d9b-22cf-42fb-a15c-3e89def15851",
        "subject_id": "4aa12f06-e2d9-4414-9256-ee3edcabc4a1",
        "order": 5,
        "description": "systems for control and measuring",
        "estimated_minutes": 60
    },
    {
        "id": "3f9fd1cb-d96d-4969-ba2a-050b62d3abec",
        "subject_id": "b650b9c4-fb7e-4bde-99e0-33b134e06b6e",
        "order": 1,
        "description": "Introduction to intellectual property protection - the concept of intellectual property protection system of intellectual property rights, the protection of intellectual origin, the source of intellectual property rights.",
        "estimated_minutes": 60
    },
    {
        "id": "9b12b297-ce27-44cc-8229-650dedae17ac",
        "subject_id": "b650b9c4-fb7e-4bde-99e0-33b134e06b6e",
        "order": 2,
        "description": "The song and its protection - the concept of work in copyright law, the author as the subject of copyright, moral rights and property, fair use in copyright law.",
        "estimated_minutes": 60
    },
    {
        "id": "29f1e1ba-fc86-492b-8915-a7d6a72bf673",
        "subject_id": "b650b9c4-fb7e-4bde-99e0-33b134e06b6e",
        "order": 3,
        "description": "Special rules for the legal protection - protection of computer programs, the protection of the image, the recipient of correspondence and secret sources of information, database protection, civil liability and criminal liability for copyright infringement.",
        "estimated_minutes": 60
    },
    {
        "id": "e7a18586-78b5-4e41-8922-cb65f636289a",
        "subject_id": "b650b9c4-fb7e-4bde-99e0-33b134e06b6e",
        "order": 4,
        "description": "Protection of inventive projects - the concept and the principle of the protection of inventions, utility models, industrial designs, topographies of integrated circuits, rationalization, the exclusive rights and their scope - a patent right protection, the right of registration",
        "estimated_minutes": 60
    },
    {
        "id": "35b72773-ee5c-4cc0-a09f-70a8fa2d9bb6",
        "subject_id": "b650b9c4-fb7e-4bde-99e0-33b134e06b6e",
        "order": 5,
        "description": "Protection of other goods - the concept and the principle of protection of trademarks, geographical indications, regional products, new plant varieties and new breeds of animals",
        "estimated_minutes": 60
    },
    {
        "id": "acbbdbce-e2d7-4b72-bb21-14e12eb3e853",
        "subject_id": "b650b9c4-fb7e-4bde-99e0-33b134e06b6e",
        "order": 6,
        "description": "Claims for breach of industrial property rights - violation of industrial property, civil liability, criminal liability, administrative liability.",
        "estimated_minutes": 60
    },
    {
        "id": "b4e1b5ff-296e-4ffd-8fd1-b85b138b2ef4",
        "subject_id": "b650b9c4-fb7e-4bde-99e0-33b134e06b6e",
        "order": 7,
        "description": "Rotation of intellectual property - the contract for the transfer of exclusive rights, licensing agreement, the licensee rights, royalties, license types, the agreement now-how.",
        "estimated_minutes": 60
    },
    {
        "id": "0fefc1f6-ff42-4c3a-9a5a-9b01d6ba71ca",
        "subject_id": "b650b9c4-fb7e-4bde-99e0-33b134e06b6e",
        "order": 8,
        "description": "Final test",
        "estimated_minutes": 60
    },
    {
        "id": "fd79051e-3e97-47e4-8879-70170b581a48",
        "subject_id": "c16a925f-a8c3-47bb-afe1-58b8fa98afb8",
        "order": 1,
        "description": "The role of the subject \"Information Technology\" as a preparation for the practical use of information and the overall look of the terminology. Basic concepts, history, utility computing, information technology base. System components and their functions. Safety rules with operated your computer.",
        "estimated_minutes": 60
    },
    {
        "id": "a60579c9-d9fc-44e2-8486-69435403f4dc",
        "subject_id": "c16a925f-a8c3-47bb-afe1-58b8fa98afb8",
        "order": 2,
        "description": "Operating systems Windows and Linux. Setting up systems. Graphical user interfaces, user applications, the console commands to create files and directories. The remote system.",
        "estimated_minutes": 60
    },
    {
        "id": "79f62d6e-c6bf-4ef2-8720-8a97de8208ec",
        "subject_id": "c16a925f-a8c3-47bb-afe1-58b8fa98afb8",
        "order": 3,
        "description": "Mathematical modeling and computer simulation using utility programs. Examples of applications Matlab, Octave packages, MathCad.",
        "estimated_minutes": 60
    },
    {
        "id": "a7f2a40a-eb98-47d5-80cf-a4afd73ba660",
        "subject_id": "c16a925f-a8c3-47bb-afe1-58b8fa98afb8",
        "order": 4,
        "description": "Application software. The editor and word processing, spreadsheet, multimedia, presentation, database. The types of packages, options, examples of applications.",
        "estimated_minutes": 60
    },
    {
        "id": "ecfbd9b7-9ccf-40e3-86b8-5768de0c18fa",
        "subject_id": "c16a925f-a8c3-47bb-afe1-58b8fa98afb8",
        "order": 5,
        "description": "Local and wide area network, wired and wireless networks. The structure and types of network communication protocols. Search, acquisition, processing and transfer of information on the web.",
        "estimated_minutes": 60
    },
    {
        "id": "aac73aa9-aef9-4deb-99ef-c75552ecd3fa",
        "subject_id": "c16a925f-a8c3-47bb-afe1-58b8fa98afb8",
        "order": 6,
        "description": "Wireless networks. Types of standards to radio communications. Security and data encryption. Fiber optic networks. WiMAX network and mobile networks.",
        "estimated_minutes": 60
    },
    {
        "id": "5070b034-d209-4e3e-96a8-9d7c0385bced",
        "subject_id": "c16a925f-a8c3-47bb-afe1-58b8fa98afb8",
        "order": 7,
        "description": "Services in computer networks. Mail, messaging, audio-video communications, IP monitoring, control over the network. Security of data transmission in computer networks. Data protection, encryption and information security, computer viruses. New generation firewalls NGFW.",
        "estimated_minutes": 60
    },
    {
        "id": "977250cc-6146-4072-9418-379e1e85a15e",
        "subject_id": "c16a925f-a8c3-47bb-afe1-58b8fa98afb8",
        "order": 8,
        "description": "The structure of the local network, the Internet, getting information about computers on the network, email, IM and Web browsers, transmission of information.",
        "estimated_minutes": 60
    },
    {
        "id": "69e5608c-8b19-42fa-8e2b-5e98c7c3baca",
        "subject_id": "c16a925f-a8c3-47bb-afe1-58b8fa98afb8",
        "order": 9,
        "description": "Files and folders in Windows system. The graphical environment and console commands. Utility applications, the console commands to create files and directories.",
        "estimated_minutes": 60
    },
    {
        "id": "c32ea3aa-b0e8-4bfc-8c9d-8b2145f979c5",
        "subject_id": "c16a925f-a8c3-47bb-afe1-58b8fa98afb8",
        "order": 10,
        "description": "Files and folders in Linux. Graphical environment, the console commands. Utility applications, the console commands to create files and directories. The remote system.",
        "estimated_minutes": 60
    },
    {
        "id": "036687c9-abea-4389-8e4f-41f437ceb2e8",
        "subject_id": "c16a925f-a8c3-47bb-afe1-58b8fa98afb8",
        "order": 11,
        "description": "The use of software tools for mathematical modeling and simulation. Perform simple simulations using Matlab, Octave and MathCad programs.",
        "estimated_minutes": 60
    },
    {
        "id": "91be6436-e8df-4d96-9673-13cc6ac51051",
        "subject_id": "c16a925f-a8c3-47bb-afe1-58b8fa98afb8",
        "order": 12,
        "description": "Word processor, spreadsheet. Create documents containing text, tables, formulas, spreadsheet with formulas.",
        "estimated_minutes": 60
    },
    {
        "id": "c78c1ecb-d10d-4298-b06d-08f612a48ff1",
        "subject_id": "c16a925f-a8c3-47bb-afe1-58b8fa98afb8",
        "order": 13,
        "description": "Managerial and presentation graphics, database. Create a multimedia presentation, create a simple database.",
        "estimated_minutes": 60
    },
    {
        "id": "e00f439d-9f03-410c-a666-d61bacd9be60",
        "subject_id": "0d8315fc-3df8-42b1-9f39-79fdae11f55b",
        "order": 1,
        "description": "Acquainting with the rules of participation in classes and the conditions for obtaining a pass. Discussion of the principles of safe use of sports facilities and equipment and safety rules in force during the course.",
        "estimated_minutes": 60
    },
    {
        "id": "bd1a5f89-fb8c-4d29-ab9b-678309a15d72",
        "subject_id": "0d8315fc-3df8-42b1-9f39-79fdae11f55b",
        "order": 2,
        "description": "Implementation of various sets of warm-up exercises and exercises focused on developing the student's basic motor skills.",
        "estimated_minutes": 60
    },
    {
        "id": "50a46de1-c1c3-4019-b097-0c17917f3289",
        "subject_id": "0d8315fc-3df8-42b1-9f39-79fdae11f55b",
        "order": 3,
        "description": "Shaping general physical fitness, motor coordination, endurance, flexibility, speed through individual selection of sports activities (eg: football, volleyball, basketball, table tennis) or recreational physical activity (eg: badminton, gym exercises).",
        "estimated_minutes": 60
    },
    {
        "id": "bbb2827d-eb9f-4719-80c0-aa62b30d0945",
        "subject_id": "0d8315fc-3df8-42b1-9f39-79fdae11f55b",
        "order": 4,
        "description": "Physical fitness test: Multistage 20 m Shuttle Run (Beep test).",
        "estimated_minutes": 60
    },
    {
        "id": "98b4d21d-ea6e-4b13-8a3e-a238bfb6ade6",
        "subject_id": "0d8315fc-3df8-42b1-9f39-79fdae11f55b",
        "order": 1,
        "description": "Acquainting with the rules of participation in classes and credit conditions. Discussion of swimming pool conditions and safety rules applicable during exercise in the aquatic environment.",
        "estimated_minutes": 60
    },
    {
        "id": "89e6cebf-5bab-4bd3-b465-48a0d5fe7ebd",
        "subject_id": "0d8315fc-3df8-42b1-9f39-79fdae11f55b",
        "order": 2,
        "description": "Initial adaptation to the aquatic environment: - face dipping, eye opening and orientation under the surface of the water, - mastery of breathing in the aquatic environment, familiarization with the buoyancy of water, - control of lying on the breast and back, - plays and games in water. Warm-up exercises, preparing for exercises in water. Learning how to behave in water in difficult and unusual situations: choking, shrinkage, sinking, etc.",
        "estimated_minutes": 60
    },
    {
        "id": "d3beacc5-02e9-4f7d-86b8-914c33e2c613",
        "subject_id": "0d8315fc-3df8-42b1-9f39-79fdae11f55b",
        "order": 3,
        "description": "Learning backstroke style: lying on the back, slipping, correct leg work with a board on the hips and without a board, proper work of the arms. Improvement of proper coordination of lower and upper limbs. Learning free style: slipping on the chest, proper leg work combined with breathing, exercise with a board and without a board. Learning the proper work of the arms (swimming with a proper body with a proper breath and exhalation). Learning how to coordinate the work of lower and upper limbs with the determination of proper breathing. Learning breaststroke style: proper work of legs with a board and without boards on the chest and on the back, correct work of arms in a classic style. Coordination of lower and upper limbs and breathing in a classic style. Learning to jump on the legs and on the head.",
        "estimated_minutes": 60
    },
    {
        "id": "3081879d-87f4-4c7d-a61c-1ea2ba303e1a",
        "subject_id": "0d8315fc-3df8-42b1-9f39-79fdae11f55b",
        "order": 4,
        "description": "Fitness test: a 25-meter swimming trial chosen by the student.",
        "estimated_minutes": 60
    },
    {
        "id": "e67f6c94-f40a-4209-b97c-2117803eb8ec",
        "subject_id": "5a8ca606-eb86-4d26-828e-36730600e3da",
        "order": 1,
        "description": "Introduction to digital signal processing (DSP). Introduction to DASYLab software. Signal classification and parameters. A/C conversion, sampling, quantization. Spectral analysis based on DFT/FFT. Determination of parameters of random signals. Correlation analysis. Averaging of signals. Introduction to digital filtering (FIR and IIR filters). Selected applications of DSP in measurement technique.",
        "estimated_minutes": 60
    },
    {
        "id": "48951e18-4484-4325-81fa-913bf01dda46",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 1,
        "description": "Introduction to economics (outline of economic thought, the basic concepts, principles and assumptions of the microeconomic analysis of the place of Economics in social sciences system and links with other disciplines of science). Introduction to economics.",
        "estimated_minutes": 60
    },
    {
        "id": "da4f3c7c-3b2f-484a-a4cc-9cbcd1c61997",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 2,
        "description": "The Model of market economy (institutions, productivity, efficiency, actors, resources and streams in economic system; the market-classifications and operating principles).",
        "estimated_minutes": 60
    },
    {
        "id": "178d0d1a-a697-4858-a8f0-f5182b8a4e24",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 3,
        "description": "Demand (law of demand, exceptions, determinants, elasticity of demand), supply (law of supply, exceptions, determinants, flexibility of supply), market equilibrium in the short, medium and long term, the impact of regulated prices on the market, web model.",
        "estimated_minutes": 60
    },
    {
        "id": "59545a3d-caea-49a1-87b3-fb1b5e2908d2",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 4,
        "description": "The theory of consumer choice, (the functioning of the household, utility, Gossen's laws, Marshall's consumers rent, the consumers balance)",
        "estimated_minutes": 60
    },
    {
        "id": "6dc00226-ce90-49bf-adda-feccde6fb490",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 5,
        "description": "The operating principles of the company (an introduction to the theory of firm, basic definitions, classifications and processes).",
        "estimated_minutes": 60
    },
    {
        "id": "3dfcf55e-8aa9-4470-a016-4c22c9c5fb11",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 6,
        "description": "Production function in the short and long term effects of scale, choice of the optimal technology.",
        "estimated_minutes": 60
    },
    {
        "id": "009b607b-001d-4fa0-888e-52476d5eff49",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 7,
        "description": "Instruments of cost management in the enterprise, the cost function in the long and the short term, the issue of costs and cash flow.",
        "estimated_minutes": 60
    },
    {
        "id": "60aa64ca-40a2-4d4c-ab28-a0b5c53444ba",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 8,
        "description": "Perfect competition and monopolistic competition.",
        "estimated_minutes": 60
    },
    {
        "id": "6760e3b4-d1f5-41be-bd53-0e2ae1ef00cc",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 9,
        "description": "Limited competition - monopoly and oligopoly.",
        "estimated_minutes": 60
    },
    {
        "id": "bfc95120-97a2-4859-8ee4-790d13a8bf77",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 10,
        "description": "Introduction to macroeconomics, basic phenomena and macro-economic problems.",
        "estimated_minutes": 60
    },
    {
        "id": "e9b014d0-03ff-4f71-b05b-862517372549",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 11,
        "description": "The development of economic systems, economic growth-measurement and determinants of product and national income and its determinants, economic downturn (cycles) and the role of investment in the economy, an analysis of the situation in Europe and in the world.",
        "estimated_minutes": 60
    },
    {
        "id": "3ac1098d-e626-45d7-a679-8fdc9b3beb7a",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 12,
        "description": "The importance of the public finance sector, organisation of PFS (subsectors), the impact of fiscal policy on the national income, the role of the State in the economy the budget as a tool to impact on the economy, the issue of the budget deficit and public debt, the impact of public support (including from EU funds) on the development of the national economy, the analysis of the situation in Europe.",
        "estimated_minutes": 60
    },
    {
        "id": "1dda41ca-5576-475b-852b-6605e0a8b918",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 13,
        "description": "Monetary system development, the role of money in the economy, money purely and sense of largo, the demand for money, money supply and the mechanisms of its creations, a quantitative theory of money, monetary aggregates.",
        "estimated_minutes": 60
    },
    {
        "id": "34749aa6-ee66-42c5-bcfe-a36420eb5c7b",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 14,
        "description": "The National Banking System, the role of the Central Bank and monetary policy, the monetary policy tools, the interbank market and the activities of commercial banks",
        "estimated_minutes": 60
    },
    {
        "id": "5f7c93f5-fc62-4aea-b72f-2808d52b4ae0",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 15,
        "description": "The phenomenon of inflation and its social and economic effects, demand, and shortage of supply causes inflation, inflationary phenomena measurement- inflation, analysis of the situation in Europe, politics antyinflacyjna.",
        "estimated_minutes": 60
    },
    {
        "id": "2b94cc2e-6b44-4d82-a3d5-049fb169ac3d",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 16,
        "description": "The labour market, employment policy, the importance of competence and demographic processes, flexibility in the labour market, unemployment as economic and social problem.",
        "estimated_minutes": 60
    },
    {
        "id": "49004cdd-f613-4988-b3f3-52ad27ea8a5b",
        "subject_id": "9351deff-dc96-44c1-92f7-a2c9dfc27640",
        "order": 17,
        "description": "International economic relations, the foreign exchange market, balance of payments, the single market of the European Union and its importance for the development of the Member States,The role of the European Union in the global economy.",
        "estimated_minutes": 60
    },
    {
        "id": "1f542ba4-f0ce-4e08-8ff5-251739298043",
        "subject_id": "2a9e6461-ef26-4421-9284-eb377d685d9f",
        "order": 1,
        "description": "Analysis of DC circuits. Methods of analysis, transformations of circuits.",
        "estimated_minutes": 60
    },
    {
        "id": "0d6edbb4-f1d0-4771-8179-6159b4926bab",
        "subject_id": "2a9e6461-ef26-4421-9284-eb377d685d9f",
        "order": 2,
        "description": "Analysis of sinusoidal current circuits. Vector charts, active, reactive and apparent powers. 3-phase circuits.",
        "estimated_minutes": 60
    },
    {
        "id": "10af23ce-1a0d-4991-ada7-4bb5a9acc4e9",
        "subject_id": "2a9e6461-ef26-4421-9284-eb377d685d9f",
        "order": 3,
        "description": "Analysis of non-sinusoidal periodic current circuits.",
        "estimated_minutes": 60
    },
    {
        "id": "cd3eb7ec-839c-4c1a-a9aa-6e1ebf5a25ee",
        "subject_id": "2a9e6461-ef26-4421-9284-eb377d685d9f",
        "order": 4,
        "description": "Equations and properties of quadruples in steady states with harmonic excitation. Passive filters.",
        "estimated_minutes": 60
    },
    {
        "id": "582dbdb9-954a-4b77-ae30-f9eb3c2bea56",
        "subject_id": "2a9e6461-ef26-4421-9284-eb377d685d9f",
        "order": 5,
        "description": "Transients in linear circuits. Characteristics of the problem, classical and operator methods, simple and inverse Laplace transform, transfer function, step and impulse responses.",
        "estimated_minutes": 60
    },
    {
        "id": "7e17b781-300a-40a8-b8f4-04f41f4fa802",
        "subject_id": "ea1862ea-4b00-4790-9ced-bb854ef5228b",
        "order": 1,
        "description": "First and second order recursive equations, homogeneous and heterogeneous. Initial conditions of a recursive equation. Application of the characteristic equation to solve homogeneous linear equations with constant coefficients. Examples of discrete mathematics problems that can be solved by formulating an appropriate recursive equation. Prediction method for heterogeneous equations. General and specific solution. The principle of predicting a special solution for the heterogeneity function given in the form of a product of a polynomial and a power function.",
        "estimated_minutes": 60
    },
    {
        "id": "d73196f6-f40b-4780-920f-8ab2740c9604",
        "subject_id": "ea1862ea-4b00-4790-9ced-bb854ef5228b",
        "order": 2,
        "description": "Definition of an ordinary generating function. Deriving it for example strings. Table of composing functions for popular strings. Generating function theorems. A function that creates the convolution of two strings. Application of the generating function to counting problems. Counting combinations without repetitions and with repetitions, variations, divisions, words with restrictions on the number of letters, etc.",
        "estimated_minutes": 60
    },
    {
        "id": "f21f8e85-6bca-458a-89b3-84a96eec6afb",
        "subject_id": "ea1862ea-4b00-4790-9ced-bb854ef5228b",
        "order": 3,
        "description": "Definition of an exponential generating function. Exponential constructive function for selected strings. Theorems about the exponential generating function. The binomial convolution. Applications of exponential generating function to solve nonlinear recursive equations and to counting problems.",
        "estimated_minutes": 60
    },
    {
        "id": "acb13976-1da5-4f17-941f-1ff6dd0cc998",
        "subject_id": "ea1862ea-4b00-4790-9ced-bb854ef5228b",
        "order": 4,
        "description": "Discrete derivative. Difference of functions of one variable. Higher order differences. Differentiation theorems. Exponential diminishing function. Discrete integral. Stirling formulas. antidifference. Sum by parts. Summation by perturbation.",
        "estimated_minutes": 60
    },
    {
        "id": "bec39612-6901-4767-b21e-ef8b9ef5a8fa",
        "subject_id": "ea1862ea-4b00-4790-9ced-bb854ef5228b",
        "order": 5,
        "description": "Numerical methods of solving systems of algebraic equations.",
        "estimated_minutes": 60
    },
    {
        "id": "f71dc8c6-a382-4766-91e7-24be7c61ac1b",
        "subject_id": "ea1862ea-4b00-4790-9ced-bb854ef5228b",
        "order": 6,
        "description": "Methods of numerical integration. Method of rectangles, trapezoid, parabola.",
        "estimated_minutes": 60
    },
    {
        "id": "7539e6ba-e7b5-4b5f-bd63-21d77a51202f",
        "subject_id": "ea1862ea-4b00-4790-9ced-bb854ef5228b",
        "order": 7,
        "description": "Polynomial interpolation methods.",
        "estimated_minutes": 60
    },
    {
        "id": "a9373a80-9019-4245-b40f-beb7c671f236",
        "subject_id": "9f30b25a-9e72-4dd2-92c9-5c29ea5ad354",
        "order": 1,
        "description": "Principles of statics; forces sets and their reduction, the balance of power equations on the plane and in the space.",
        "estimated_minutes": 60
    },
    {
        "id": "e60e74cc-c801-420b-81f2-4ac16ae4b582",
        "subject_id": "9f30b25a-9e72-4dd2-92c9-5c29ea5ad354",
        "order": 2,
        "description": "Kinematics of the point: straight line motion, velocity, acceleration, harmonic motion; curvilinear motion, velocity, acceleration normal and tangential; motion on circle; horizontal and sloping motion.",
        "estimated_minutes": 60
    },
    {
        "id": "2d75069c-fed6-428c-a9b3-171e6db36dae",
        "subject_id": "9f30b25a-9e72-4dd2-92c9-5c29ea5ad354",
        "order": 3,
        "description": "Kinematics of the body: translate motion, rotational motion, velocity and acceleration; plane motion, conditions, methods of calculating of the velocity and acceleration, complex motion, velocity and acceleration, Coriolis acceleration.",
        "estimated_minutes": 60
    },
    {
        "id": "5350687e-f637-478f-8fe2-8b6642046d8a",
        "subject_id": "9f30b25a-9e72-4dd2-92c9-5c29ea5ad354",
        "order": 4,
        "description": "Dynamic: rules of the dynamics, Newton’s laws, differential equations of the motion, work, power, kinematics and potential energy, energetic rules.",
        "estimated_minutes": 60
    },
    {
        "id": "57f6a697-f12c-41c4-ae8d-2849adad8cf6",
        "subject_id": "9f30b25a-9e72-4dd2-92c9-5c29ea5ad354",
        "order": 5,
        "description": "Dynamics of the point: straight line vibration, scud, scud maintenance, momentum of the scud, momentum of the scud maintenance, applied of the energetic rules, differential equations of the motion.",
        "estimated_minutes": 60
    },
    {
        "id": "4d30c23d-7489-4c2a-a2e9-7d59002535f2",
        "subject_id": "9f30b25a-9e72-4dd2-92c9-5c29ea5ad354",
        "order": 6,
        "description": "Dynamics of the body: straight line vibration, scud, momentum of the scud, applied of the energetic rules, differential equations of the motion.",
        "estimated_minutes": 60
    },
    {
        "id": "46feae4f-136e-4d8a-8b56-d52c58d64058",
        "subject_id": "9f30b25a-9e72-4dd2-92c9-5c29ea5ad354",
        "order": 7,
        "description": "One dimensional strenth and press, Hooke law, analysis of the tension and strain state.",
        "estimated_minutes": 60
    },
    {
        "id": "97c6933b-b00f-42c8-8bbb-f36a02584b59",
        "subject_id": "9f30b25a-9e72-4dd2-92c9-5c29ea5ad354",
        "order": 8,
        "description": "Plane and spatial tension and strain state.",
        "estimated_minutes": 60
    },
    {
        "id": "7609d620-9d56-4841-8038-210c5339414d",
        "subject_id": "9f30b25a-9e72-4dd2-92c9-5c29ea5ad354",
        "order": 9,
        "description": "Technical cut.",
        "estimated_minutes": 60
    },
    {
        "id": "420adf4f-fd18-4ecf-a48e-9a3ce15d5519",
        "subject_id": "9f30b25a-9e72-4dd2-92c9-5c29ea5ad354",
        "order": 10,
        "description": "Twisting; the graphs of the twisting moments and shearing forces",
        "estimated_minutes": 60
    },
    {
        "id": "30be2450-8977-4c75-8ce7-548b930fb516",
        "subject_id": "9f30b25a-9e72-4dd2-92c9-5c29ea5ad354",
        "order": 11,
        "description": "Bending; the graphs of the bending moments and shearing forces",
        "estimated_minutes": 60
    },
    {
        "id": "2a171d9c-2e02-427f-8393-6a09b0b28f11",
        "subject_id": "9f30b25a-9e72-4dd2-92c9-5c29ea5ad354",
        "order": 12,
        "description": "Compound strength, strength hypothesis.",
        "estimated_minutes": 60
    },
    {
        "id": "d2844ba7-f21c-4e3b-8d48-85eefa9a1657",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 1,
        "description": "Basic elements of C language",
        "estimated_minutes": 60
    },
    {
        "id": "5fcf718a-cd96-422d-b087-b0c15c767950",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 2,
        "description": "Input output operations",
        "estimated_minutes": 60
    },
    {
        "id": "9f5ecfcc-44b7-44e2-a2f7-252f0d3b58ad",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 3,
        "description": "Operators",
        "estimated_minutes": 60
    },
    {
        "id": "ba1609a8-8220-4982-a3d4-85da382d130f",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 4,
        "description": "Instructions",
        "estimated_minutes": 60
    },
    {
        "id": "4c32a08a-7329-4c70-a968-b99bf65ed231",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 5,
        "description": "Functions",
        "estimated_minutes": 60
    },
    {
        "id": "9a687484-b73f-4786-8f2f-a01150411477",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 6,
        "description": "Tables",
        "estimated_minutes": 60
    },
    {
        "id": "ca7d62c3-e92e-4a52-b223-ea6f5ebf915f",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 7,
        "description": "Pointers",
        "estimated_minutes": 60
    },
    {
        "id": "9965fabd-35eb-45ac-8887-83e4fc869d4a",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 8,
        "description": "Structures",
        "estimated_minutes": 60
    },
    {
        "id": "829655d1-5bf4-4065-b480-107a01d92c1d",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 9,
        "description": "Files",
        "estimated_minutes": 60
    },
    {
        "id": "8c8fd0c3-2ccf-4a28-aa40-56eb4ca8fccc",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 10,
        "description": "I/O stream operations",
        "estimated_minutes": 60
    },
    {
        "id": "757d203b-f97a-49e0-a0fa-b02ec09c3767",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 11,
        "description": "Classes",
        "estimated_minutes": 60
    },
    {
        "id": "d8e65818-2ea4-4b4f-bd7b-e0d40cac9de5",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 12,
        "description": "Dynamic memory allocation",
        "estimated_minutes": 60
    },
    {
        "id": "4667c682-befb-433a-9aa1-123ab2c1b041",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 13,
        "description": "Constructor, destructor",
        "estimated_minutes": 60
    },
    {
        "id": "cbcad012-2358-44a1-a017-3750f169c47c",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 14,
        "description": "Static class element",
        "estimated_minutes": 60
    },
    {
        "id": "65588025-059b-4b12-a800-73843cf0068b",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 15,
        "description": "Copy constructor",
        "estimated_minutes": 60
    },
    {
        "id": "60eb8c6b-c366-4952-ba81-9979aaca9bf4",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 16,
        "description": "Operator overloading",
        "estimated_minutes": 60
    },
    {
        "id": "02158306-8add-46dd-b4ae-0889e55c0625",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 17,
        "description": "Initializer list",
        "estimated_minutes": 60
    },
    {
        "id": "ec2348d8-3f84-47a0-8a26-19b7fa705ff1",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 18,
        "description": "Inheritance",
        "estimated_minutes": 60
    },
    {
        "id": "876ffb81-b7d3-430a-bfcf-0b43029d85ff",
        "subject_id": "e0dfedff-b313-48f6-b3fc-86733290f6b4",
        "order": 19,
        "description": "Encapsulation",
        "estimated_minutes": 60
    },
    {
        "id": "af7fa0bc-1756-4c25-8276-954a51952a0a",
        "subject_id": "f3ba96e1-4bc1-45e9-a116-f2f08cb2c51e",
        "order": 1,
        "description": "An introduction to probability theory",
        "estimated_minutes": 60
    },
    {
        "id": "6c862778-bd0f-4ce4-8b78-9770e08b267b",
        "subject_id": "f3ba96e1-4bc1-45e9-a116-f2f08cb2c51e",
        "order": 2,
        "description": "Elements of combinatorics. Events and the probability of random events. Probability space. Definitions and properties of probability. The classical definition of probability. Conditional probability and independence of of events. Probability of total and Bayes theorem.",
        "estimated_minutes": 60
    },
    {
        "id": "6b75915f-a53c-4f11-95ef-c9322220eedd",
        "subject_id": "f3ba96e1-4bc1-45e9-a116-f2f08cb2c51e",
        "order": 3,
        "description": "One-dimensional random variables and their distributions. The distribution of a random variable. Discrete random variables (displacements). Distributions of discrete random variable. Examples of discrete distributions: zero-one distribution, binomial distribution (Bernoulli), the Poisson distribution., A continuous random variables. Examples of continuous distributions: uniform distribution, normal distribution, exponential distribution. Functions of random variables. Numerical characteristics of random variables. Moments (expected value, variance).",
        "estimated_minutes": 60
    },
    {
        "id": "e965e870-ccc5-4b6e-b41b-5764fb64ebee",
        "subject_id": "f3ba96e1-4bc1-45e9-a116-f2f08cb2c51e",
        "order": 4,
        "description": "Basic issues of descriptive statistics. Population, an attempt. Types of statistical characteristics and their measurement scales. The distribution and characteristics of the population in the sample. Statistical series. The number of ordinary and cumulative. Graphical representation of data: histograms, line charts, pie, etc. The statistical parameters: measures of location, variability, asymmetry, concentration.",
        "estimated_minutes": 60
    },
    {
        "id": "485870b2-ad6c-41fb-a0f5-e23f8f286c6b",
        "subject_id": "f3ba96e1-4bc1-45e9-a116-f2f08cb2c51e",
        "order": 5,
        "description": "Definition and basic properties of the estimators. Point estimation and the estimation of confidence intervals. Confidence intervals. Issues minimum size of the sample",
        "estimated_minutes": 60
    },
    {
        "id": "4aa2edba-abf6-4985-95e5-6dc7ec96468e",
        "subject_id": "f3ba96e1-4bc1-45e9-a116-f2f08cb2c51e",
        "order": 6,
        "description": "Verification of statistical hypotheses (parametric and nonparametric tests of significance tests of significance)",
        "estimated_minutes": 60
    },
    {
        "id": "eff74b15-e780-4d59-b485-90bf70dcf688",
        "subject_id": "f3ba96e1-4bc1-45e9-a116-f2f08cb2c51e",
        "order": 7,
        "description": "Methods of correlation and regression analysis (analysis of selected aspects of the interdependence of mass)",
        "estimated_minutes": 60
    },
    {
        "id": "ed6e5e72-2bb0-4bb1-b1e1-2c142a0c57d1",
        "subject_id": "f3ba96e1-4bc1-45e9-a116-f2f08cb2c51e",
        "order": 8,
        "description": "Methods of analysis of the dynamics of mass phenomena (Types of time series, methods of testing a series of changes the dynamic extraction method development trend (trend), fluctuations.",
        "estimated_minutes": 60
    },
    {
        "id": "f2f558a4-fcde-4728-a4a2-737295de2290",
        "subject_id": "f3ba96e1-4bc1-45e9-a116-f2f08cb2c51e",
        "order": 9,
        "description": "ARIMA and SARIMA model - estimation and verification of models, forecasts in ARIMA models",
        "estimated_minutes": 60
    },
    {
        "id": "fd08d10e-0470-4055-b490-e2fc24cbaebc",
        "subject_id": "f3ba96e1-4bc1-45e9-a116-f2f08cb2c51e",
        "order": 10,
        "description": "The use of artificial intelligence in time series forecasting.",
        "estimated_minutes": 60
    },
    {
        "id": "b0f0a4d7-c59e-4421-9410-619e06a18c00",
        "subject_id": "78744625-c290-4253-b502-c55236e9bd8a",
        "order": 1,
        "description": "Acquainting with the rules of participation in classes and the conditions for obtaining a pass. Discussion of the principles of safe use of sports facilities and equipment and safety rules in force during the course.",
        "estimated_minutes": 60
    },
    {
        "id": "9ae15e7f-d5c2-490f-ace4-804628f05541",
        "subject_id": "78744625-c290-4253-b502-c55236e9bd8a",
        "order": 2,
        "description": "Implementation of various sets of warm-up exercises and exercises focused on developing the student's basic motor skills.",
        "estimated_minutes": 60
    },
    {
        "id": "1ff47013-78f0-4293-9db7-033843e7ae62",
        "subject_id": "78744625-c290-4253-b502-c55236e9bd8a",
        "order": 3,
        "description": "Shaping general physical fitness, motor coordination, endurance, flexibility, speed through individual selection of sports activities (eg: football, volleyball, basketball, table tennis) or recreational physical activity (eg: badminton, gym exercises).",
        "estimated_minutes": 60
    },
    {
        "id": "2261122c-ec31-4251-b92f-c3bc010a21bf",
        "subject_id": "78744625-c290-4253-b502-c55236e9bd8a",
        "order": 4,
        "description": "Physical fitness test: Multistage 20 m Shuttle Run (Beep test).",
        "estimated_minutes": 60
    },
    {
        "id": "16bddb23-c72b-45f1-bec8-0ef638efcee2",
        "subject_id": "78744625-c290-4253-b502-c55236e9bd8a",
        "order": 1,
        "description": "Acquainting with the rules of participation in classes and credit conditions. Discussion of swimming pool conditions and safety rules applicable during exercise in the aquatic environment.",
        "estimated_minutes": 60
    },
    {
        "id": "321f4fd0-a586-4101-ae93-c58d613798da",
        "subject_id": "78744625-c290-4253-b502-c55236e9bd8a",
        "order": 2,
        "description": "Initial adaptation to the aquatic environment: - face dipping, eye opening and orientation under the surface of the water, - mastery of breathing in the aquatic environment, familiarization with the buoyancy of water, - control of lying on the breast and back, - plays and games in water. Warm-up exercises, preparing for exercises in water. Learning how to behave in water in difficult and unusual situations: choking, shrinkage, sinking, etc.",
        "estimated_minutes": 60
    },
    {
        "id": "2757b532-15d9-492a-aff6-ae5da86429e4",
        "subject_id": "78744625-c290-4253-b502-c55236e9bd8a",
        "order": 3,
        "description": "Learning backstroke style: lying on the back, slipping, correct leg work with a board on the hips and without a board, proper work of the arms. Improvement of proper coordination of lower and upper limbs. Learning free style: slipping on the chest, proper leg work combined with breathing, exercise with a board and without a board. Learning the proper work of the arms (swimming with a proper body with a proper breath and exhalation). Learning how to coordinate the work of lower and upper limbs with the determination of proper breathing. Learning breaststroke style: proper work of legs with a board and without boards on the chest and on the back, correct work of arms in a classic style. Coordination of lower and upper limbs and breathing in a classic style. Learning to jump on the legs and on the head.",
        "estimated_minutes": 60
    },
    {
        "id": "d349b11d-20bc-40ac-b424-88278e45ca38",
        "subject_id": "78744625-c290-4253-b502-c55236e9bd8a",
        "order": 4,
        "description": "Fitness test: a 25-meter swimming trial chosen by the student.",
        "estimated_minutes": 60
    },
    {
        "id": "a9100262-738f-4c3e-9470-ccb2fcd95a9b",
        "subject_id": "3dfb0cb7-85c4-4e7e-b73e-ed0975030499",
        "order": 1,
        "description": "Combinatorial systems. Karnaugh method. Sample exercises. Programming in C, ST and LD (IEC 61131-3). Engineering environment TwinCAT Beckhoff. Incorrect measurements. PLC/PAC controller. Logic control instruments I.",
        "estimated_minutes": 60
    },
    {
        "id": "7e715054-4c97-4d9b-9e8a-3c2772950583",
        "subject_id": "3dfb0cb7-85c4-4e7e-b73e-ed0975030499",
        "order": 2,
        "description": "Sequential systems. Moore automaton. Sample exercises. Implementations of automata – C, ST, LD. Control with plant simulation and visualization. logic control instruments II.",
        "estimated_minutes": 60
    },
    {
        "id": "e7dd9b2a-dc8b-49b2-b85a-b98677653060",
        "subject_id": "3dfb0cb7-85c4-4e7e-b73e-ed0975030499",
        "order": 3,
        "description": "Time systems. Cycle counter. Timers. Automata for realization of time diagrams. Practical time systems in LD. On-line parameterization.",
        "estimated_minutes": 60
    },
    {
        "id": "e97ef616-dacf-4a7a-8348-28fad753a509",
        "subject_id": "3dfb0cb7-85c4-4e7e-b73e-ed0975030499",
        "order": 4,
        "description": "Sequential-time systems. Examples of problems with time conditions. Applications of IEC 61131-3 standard function blocks, Multi-automata problems.",
        "estimated_minutes": 60
    },
    {
        "id": "9b1d2ee5-faa9-418c-a5f1-45878a297dce",
        "subject_id": "3dfb0cb7-85c4-4e7e-b73e-ed0975030499",
        "order": 5,
        "description": "Models of plants for continuous regulation. Balance equations. Transfer function. Step response. Matlab/Simulink environment. Simulation of nonlinear systems. Small perturbation Delay.",
        "estimated_minutes": 60
    },
    {
        "id": "ebfbf0ab-5869-4272-a4aa-140c9bba453f",
        "subject_id": "3dfb0cb7-85c4-4e7e-b73e-ed0975030499",
        "order": 6,
        "description": "Dynamics of 1st and 2nd order systems. Block diagrams. Practical continuous regulation systems. Laplace transform elements. Control plots in 2nd order systems. Continuous regulation instruments I.",
        "estimated_minutes": 60
    },
    {
        "id": "1d68d4e9-e598-479e-9ddc-59243ae0cdbc",
        "subject_id": "3dfb0cb7-85c4-4e7e-b73e-ed0975030499",
        "order": 7,
        "description": "Control plant identification. Step responses of static, astatic and non-minimum phase plants. 1st and 2nd order approximations. Continuous regulation instruments II.",
        "estimated_minutes": 60
    },
    {
        "id": "e136db56-bba3-4646-9ba8-fd02eb5197c6",
        "subject_id": "3dfb0cb7-85c4-4e7e-b73e-ed0975030499",
        "order": 8,
        "description": "PID controllers. Safe settings of PID controllers. Settings for typical transfer functions without or with delay. Tuning tables. Automatic tuning using step response method. Control instruments.",
        "estimated_minutes": 60
    },
    {
        "id": "bb26ec0b-710e-4c97-9d67-c4c584164599",
        "subject_id": "3dfb0cb7-85c4-4e7e-b73e-ed0975030499",
        "order": 9,
        "description": "Evans root locus. Idea of the method. Selected properties of root locus. Choosing the gain. Servomechanisms. Control of astatic, oscillatory and unstable plants.",
        "estimated_minutes": 60
    },
    {
        "id": "affd7eeb-6f12-4c1a-9cfa-e26623d0ddf8",
        "subject_id": "3dfb0cb7-85c4-4e7e-b73e-ed0975030499",
        "order": 10,
        "description": "Frequency method. Frequency characteristics. Phase and gain margins. Nyquist theorem. Choosing the gain. Ziegler-Nichols tunings. Automatic tuning using relay oscillations. PLC/PAC controllers vs. DCS systems.",
        "estimated_minutes": 60
    },
    {
        "id": "a765c8bb-266b-429a-9394-2a0a31889fdf",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 1,
        "description": "Characteristic of measurements techniques in electrical systems",
        "estimated_minutes": 60
    },
    {
        "id": "32fcce34-af2c-47e5-a570-bad6027f065e",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 2,
        "description": "Rectifying diode and its applications",
        "estimated_minutes": 60
    },
    {
        "id": "93ac6f70-40c9-4db4-901a-d28f7684b646",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 3,
        "description": "Zener diode and its applications, other types of diodes",
        "estimated_minutes": 60
    },
    {
        "id": "3077193b-e7c2-470d-8117-02deda02a38e",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 4,
        "description": "Bipolar transistor - operation, properties, applications",
        "estimated_minutes": 60
    },
    {
        "id": "25ed4126-9e74-41c5-bdc2-1883ea1c8e45",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 5,
        "description": "Unipolar transistors - operation, properties, applications",
        "estimated_minutes": 60
    },
    {
        "id": "7e1f25c8-e01d-4fb0-8c3e-92dae241d796",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 6,
        "description": "Transistors - large and small-signal models",
        "estimated_minutes": 60
    },
    {
        "id": "9d2f6f41-3c93-4541-81bb-4dc8d345db5a",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 7,
        "description": "Bias circuits of transistors",
        "estimated_minutes": 60
    },
    {
        "id": "95c1fbb9-d943-4894-826d-7d2322527ba9",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 8,
        "description": "Small signal amplifiers in medium frequency range",
        "estimated_minutes": 60
    },
    {
        "id": "4c50d1d3-54d3-427c-a878-d8fd70087d5b",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 9,
        "description": "Small signal amplifiers in small and large frequency range, differential amplifier",
        "estimated_minutes": 60
    },
    {
        "id": "f88a121d-824c-447b-a1af-41c38bd23b8b",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 10,
        "description": "Operational amplifier, active filters",
        "estimated_minutes": 60
    },
    {
        "id": "f545e85c-2540-429a-8e70-b4558803636f",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 11,
        "description": "Optoelectronic devices, thyristor, triac, power pulse circuits",
        "estimated_minutes": 60
    },
    {
        "id": "d3193406-88cb-4bd1-9a3a-8137ef5225e8",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 12,
        "description": "Broadband and pulse amplifiers, selective amplifiers",
        "estimated_minutes": 60
    },
    {
        "id": "08098d23-7d40-4ba6-8366-ad5167087c7d",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 13,
        "description": "Low frequency power amplifiers",
        "estimated_minutes": 60
    },
    {
        "id": "027d30fb-7578-4070-812a-438352caaeb5",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 14,
        "description": "Non-linear signal processing circuits",
        "estimated_minutes": 60
    },
    {
        "id": "87822aa3-4c7e-4b8b-839b-b4662f251d1d",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 15,
        "description": "Stabilizers, transient proceses in diodes and transistors, A/C and C/A converters",
        "estimated_minutes": 60
    },
    {
        "id": "a92a2205-5e78-4f26-b957-84f3a72b2a28",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 16,
        "description": "Panel and oral practise of knowledge shown in the lecture",
        "estimated_minutes": 60
    },
    {
        "id": "61639da0-7ff3-42a8-b0c4-2cf028e3b184",
        "subject_id": "e5d1d507-0ae3-4846-8b36-647ef2f7d4b3",
        "order": 17,
        "description": "1) Introduction, basic measurements of voltage, current, resistance and capacitance, 2) Applications of diodes, 3) Transistor in common emitter circuit, 4) Operational amplifier in linear circuits, 5) Operational amplifier as active filters.",
        "estimated_minutes": 60
    },
    {
        "id": "c96e6696-f5b5-4f73-a0f4-eda94d6e691f",
        "subject_id": "29533e0d-aba8-4cb6-a781-9c4f1f4d946d",
        "order": 1,
        "description": "Power semiconductor devices (IGBT, MOSFET, SCR thyristors, GTO IGCTCT, devices made of silicon carbide SC) and the basic systems of their direct control. Intelligent power modules (IPM).",
        "estimated_minutes": 60
    },
    {
        "id": "406cf830-5e70-4ebe-ad1a-78ce777423ff",
        "subject_id": "29533e0d-aba8-4cb6-a781-9c4f1f4d946d",
        "order": 2,
        "description": "The overall structure of the control system used in eneregoelektronice and electric propulsion.",
        "estimated_minutes": 60
    },
    {
        "id": "85a2cbef-1c70-4477-8ef0-f1612d204ed7",
        "subject_id": "29533e0d-aba8-4cb6-a781-9c4f1f4d946d",
        "order": 3,
        "description": "Pulse Systems DC / DC Boost, Buck, Boost, Buck. Static Switches DC. The system halfbridge DC / DC.",
        "estimated_minutes": 60
    },
    {
        "id": "557616a1-f64d-40ae-9ab1-4293f57561f9",
        "subject_id": "29533e0d-aba8-4cb6-a781-9c4f1f4d946d",
        "order": 4,
        "description": "Controllers and switching AC power for the load RL. Static switches for switching the capacitors in AC circuits.",
        "estimated_minutes": 60
    },
    {
        "id": "bc339933-b671-40f7-9470-49d3341a1bc8",
        "subject_id": "29533e0d-aba8-4cb6-a781-9c4f1f4d946d",
        "order": 5,
        "description": "Transistor current and voltage inverters. Kształtownie voltage inverter output voltage. Modulation of three-phase PWM inverters - scalar and vector. Work Rectifier voltage inverter.",
        "estimated_minutes": 60
    },
    {
        "id": "5976369e-933f-42fa-a3ec-0b15c9ddae61",
        "subject_id": "29533e0d-aba8-4cb6-a781-9c4f1f4d946d",
        "order": 6,
        "description": "One and three-phase thyristor converter (rectifier and inverter operation, switching, effects on the supply line, external characteristics, restrictions on the inverter operation, security).",
        "estimated_minutes": 60
    },
    {
        "id": "e887f923-c714-4bf1-b7c3-b8bdc61c2b3c",
        "subject_id": "29533e0d-aba8-4cb6-a781-9c4f1f4d946d",
        "order": 7,
        "description": "Controls analog and digital logic (microprocessors and FPGAs) were tested in power. Example controller for three-phase thyristor converter.",
        "estimated_minutes": 60
    },
    {
        "id": "68775188-180d-4e05-b6ee-bf5f6751a142",
        "subject_id": "29533e0d-aba8-4cb6-a781-9c4f1f4d946d",
        "order": 8,
        "description": "Uses power electronics systems to process control transmission and processing power (electric drive, elektrotermia, electric lighting, maintenance of renewable energy sources).",
        "estimated_minutes": 60
    },
    {
        "id": "b05744c6-8245-41c0-b456-a62c8fe17cfc",
        "subject_id": "29533e0d-aba8-4cb6-a781-9c4f1f4d946d",
        "order": 9,
        "description": "Examples of applications of power electronics systems in industrial automation (automation systems, actuators and positioners, power supplies)",
        "estimated_minutes": 60
    },
    {
        "id": "92fdc78b-6720-4ccd-a7ed-d79342b4ffce",
        "subject_id": "6dee5825-e531-4aa7-91ee-2dbbcc2aa820",
        "order": 1,
        "description": "DC circuits",
        "estimated_minutes": 60
    },
    {
        "id": "e0a45ceb-7163-45da-acb3-6e86cb3d791c",
        "subject_id": "6dee5825-e531-4aa7-91ee-2dbbcc2aa820",
        "order": 2,
        "description": "AC circuits",
        "estimated_minutes": 60
    },
    {
        "id": "49b1daad-8013-43fa-a328-2ce3d2ff7c93",
        "subject_id": "6dee5825-e531-4aa7-91ee-2dbbcc2aa820",
        "order": 3,
        "description": "Power in electrical circuits",
        "estimated_minutes": 60
    },
    {
        "id": "1948d4db-eceb-458a-8222-5c9117bf940a",
        "subject_id": "6dee5825-e531-4aa7-91ee-2dbbcc2aa820",
        "order": 4,
        "description": "Construction and principle of operation of chosen electrical machines",
        "estimated_minutes": 60
    },
    {
        "id": "2dad1ed3-d0ed-4f16-9db4-1ee02e9431fe",
        "subject_id": "6dee5825-e531-4aa7-91ee-2dbbcc2aa820",
        "order": 5,
        "description": "Introduction to electrical drives",
        "estimated_minutes": 60
    },
    {
        "id": "4e57805d-880d-4108-8e3d-50a6e036a289",
        "subject_id": "6725d2dc-e325-4525-b467-9e137bccc8dd",
        "order": 1,
        "description": "Introduction to robotics, robots applications",
        "estimated_minutes": 60
    },
    {
        "id": "6360c4cd-30bd-48cd-9a48-09404224038f",
        "subject_id": "6725d2dc-e325-4525-b467-9e137bccc8dd",
        "order": 2,
        "description": "Coordinate frames, position and orientation of the object, homogeneous notation, composition of spatial transformations, introduction to symbolic computations",
        "estimated_minutes": 60
    },
    {
        "id": "66dc9581-261d-4bdb-af12-b21e48825fa3",
        "subject_id": "6725d2dc-e325-4525-b467-9e137bccc8dd",
        "order": 3,
        "description": "Workspace, direct kinematics, Denavit-Hantenberga convention, representation of orientation- Euler and RPY angles, application of symbolic computation to solve the direct kinematics problem, examples of direct kinematics models",
        "estimated_minutes": 60
    },
    {
        "id": "01de5568-994a-480e-bfd4-e17ba3e30ba7",
        "subject_id": "6725d2dc-e325-4525-b467-9e137bccc8dd",
        "order": 4,
        "description": "Inverse kinematics problem, jacobian, singularities, analytical solution of inverse kinematics, numerical solutions of inverse kinematics, differentaial kinematics",
        "estimated_minutes": 60
    },
    {
        "id": "07e5c3a4-7d43-4746-95a5-d547adb6d2cf",
        "subject_id": "6725d2dc-e325-4525-b467-9e137bccc8dd",
        "order": 5,
        "description": "manipulator dynamics, Lagrange formulation, kinetic energy, potential energy, external forces and torques, energy dissipation. Examples of robots dynamic models",
        "estimated_minutes": 60
    },
    {
        "id": "4df77ef4-9cf6-4e0b-a7ea-83c4cd55f4ac",
        "subject_id": "6725d2dc-e325-4525-b467-9e137bccc8dd",
        "order": 6,
        "description": "Newton-Euler formalism, foces and torques transfomations, recursive equation of dynamic, optimization of calculations, the ABA algorithm",
        "estimated_minutes": 60
    },
    {
        "id": "3f3b1ff2-d993-48b5-a359-a1a8d7c8edce",
        "subject_id": "6725d2dc-e325-4525-b467-9e137bccc8dd",
        "order": 7,
        "description": "Motion trajectories in joint space coordinations, motion phases, the start-stop tasks, path profiles, polynomial representation of motion path",
        "estimated_minutes": 60
    },
    {
        "id": "f3ed14af-de3a-4398-9f05-f9159e32360e",
        "subject_id": "6725d2dc-e325-4525-b467-9e137bccc8dd",
        "order": 8,
        "description": "Motion trajectories in Cartesian space: a) polynomial representation of the curve in space, Frenet trihedron b) spline representation of trajectories, a lines and arcs representation of trajectories, time parameterization of trajectory",
        "estimated_minutes": 60
    },
    {
        "id": "f74b377c-1597-4bfa-b507-e8ea47eba022",
        "subject_id": "6725d2dc-e325-4525-b467-9e137bccc8dd",
        "order": 9,
        "description": "Tasks programming, motion control languages, types of commands, examples",
        "estimated_minutes": 60
    },
    {
        "id": "d1de122d-bc08-4c6e-b9b1-e813a5660922",
        "subject_id": "6725d2dc-e325-4525-b467-9e137bccc8dd",
        "order": 10,
        "description": "The control systems of robots: a) servo controller with position and velocity feedback, linear controller and model reference controller b) positioning and tracking problems, reference trajectory generator",
        "estimated_minutes": 60
    },
    {
        "id": "0e6cca49-255e-4c6e-ba7c-f13cf54a1e54",
        "subject_id": "6725d2dc-e325-4525-b467-9e137bccc8dd",
        "order": 11,
        "description": "Robots actuators and sensors, mechanical gears, pneumatic and hydraulic actuators, electric motors, direct drive, power amplifiers, motion sensors, force and torque sensors, imit switches",
        "estimated_minutes": 60
    },
    {
        "id": "bfd146e3-1d1e-4784-bb76-2dc67b0806ad",
        "subject_id": "6725d2dc-e325-4525-b467-9e137bccc8dd",
        "order": 12,
        "description": "Motion controllers: architecture, functional blocks, principle of operation, communications interfaces, overview of solutions",
        "estimated_minutes": 60
    },
    {
        "id": "8b7bed20-2e17-4986-beec-5e4552cec718",
        "subject_id": "6725d2dc-e325-4525-b467-9e137bccc8dd",
        "order": 13,
        "description": "Overview of the current applications of robots",
        "estimated_minutes": 60
    },
    {
        "id": "d1092a8a-fcfe-4851-9a47-984b2608bd0e",
        "subject_id": "012c2926-2e2f-4ac3-b019-78db10271012",
        "order": 1,
        "description": "Bases of the programming in the C language",
        "estimated_minutes": 60
    },
    {
        "id": "423952a3-0461-42f6-b725-85700910722e",
        "subject_id": "012c2926-2e2f-4ac3-b019-78db10271012",
        "order": 2,
        "description": "The designing of logic control – realizations of combinatory systems",
        "estimated_minutes": 60
    },
    {
        "id": "56581399-a6d8-423d-b332-c586bf0d7827",
        "subject_id": "012c2926-2e2f-4ac3-b019-78db10271012",
        "order": 3,
        "description": "The designing of logic control – realizations of sequence systems. The organization of the software of controllers and regulators: the main loop.",
        "estimated_minutes": 60
    },
    {
        "id": "c7d4980a-1f99-418b-81ba-4fe296985669",
        "subject_id": "012c2926-2e2f-4ac3-b019-78db10271012",
        "order": 4,
        "description": "Implementation of microprocessor sequential-time systems. Operation of the operator panel, safe communication with the master computer. Programming PLC controllers with regard to cybersecurity.",
        "estimated_minutes": 60
    },
    {
        "id": "5ec5b874-f9d8-47c3-b8ec-8a4c932604c7",
        "subject_id": "70597255-87d6-40c2-b05a-92f689229c81",
        "order": 1,
        "description": "Equation of motion, electric machines selection to drives",
        "estimated_minutes": 60
    },
    {
        "id": "5df0b043-0f94-469e-84c3-d19eb1114abb",
        "subject_id": "70597255-87d6-40c2-b05a-92f689229c81",
        "order": 2,
        "description": "Speed regulation methods in drives with electric machines: DC motor, asynchronous motor, motor with electric commutation and stepper motor",
        "estimated_minutes": 60
    },
    {
        "id": "163ce184-6ae8-4da5-b4da-f1293c0516f1",
        "subject_id": "70597255-87d6-40c2-b05a-92f689229c81",
        "order": 3,
        "description": "Systems of automatic speed and position regulation",
        "estimated_minutes": 60
    },
    {
        "id": "58029c38-1bc4-4808-be8d-2303bfdc9451",
        "subject_id": "70597255-87d6-40c2-b05a-92f689229c81",
        "order": 4,
        "description": "Application examples of electric drive systems in electric and automobile vehicles",
        "estimated_minutes": 60
    },
    {
        "id": "9c519907-c752-444a-8e0c-30e70f13f0f5",
        "subject_id": "7c2cb60e-8a5e-4da6-9689-44391786b37a",
        "order": 1,
        "description": "Formulation of optimization tasks",
        "estimated_minutes": 60
    },
    {
        "id": "d8bc00b8-6823-4cef-a8a3-06aa35dd3d76",
        "subject_id": "7c2cb60e-8a5e-4da6-9689-44391786b37a",
        "order": 2,
        "description": "Linear programming: problem formulation, graphical interpretation of the solution, sketch of the simplex method, using MATLAB and Excel",
        "estimated_minutes": 60
    },
    {
        "id": "2a0fd0b2-dcec-4f34-802c-aeb08403c423",
        "subject_id": "7c2cb60e-8a5e-4da6-9689-44391786b37a",
        "order": 3,
        "description": "Typical examples of linear programming: manufacturing applications, assignment problem, transportation problem, optimization on networks - maximum flow, least expensive flow, shortest path problem",
        "estimated_minutes": 60
    },
    {
        "id": "b0b1318e-b5b1-44cd-9019-5251ab2635e8",
        "subject_id": "7c2cb60e-8a5e-4da6-9689-44391786b37a",
        "order": 4,
        "description": "Integer programming: formulation, branch-and-bound method, using MATLAB and Excel, typical examples: knapsack problem, combinatorial auction, task scheduling under constrained resources",
        "estimated_minutes": 60
    },
    {
        "id": "dd3a39cd-d306-4291-9341-aa7fe7e294c1",
        "subject_id": "7c2cb60e-8a5e-4da6-9689-44391786b37a",
        "order": 5,
        "description": "Nonlinear programming: problem formulation, sketch of most important computational methods, using MATLAB and Excel for unconstrained and constrained problems",
        "estimated_minutes": 60
    },
    {
        "id": "3981c768-c9c2-4680-8112-0d25fc7a1d69",
        "subject_id": "7c2cb60e-8a5e-4da6-9689-44391786b37a",
        "order": 6,
        "description": "Global optimization and computational complexity, genetic algorithm, particle swarm optimization: basic operations, using MATLAB and Excel, typical examples",
        "estimated_minutes": 60
    },
    {
        "id": "43a0df79-54b4-4926-abcc-dc29cab928df",
        "subject_id": "7c2cb60e-8a5e-4da6-9689-44391786b37a",
        "order": 7,
        "description": "Introduction to multiobjective optimization: problem formulatiom, Pareto optimality, scalarization methods, an example - multicriteria shortest path problem",
        "estimated_minutes": 60
    },
    {
        "id": "42b3b026-5fb1-4530-a140-1be2b6cadb15",
        "subject_id": "28be2e1b-58bd-4781-8928-05099bf6aaf0",
        "order": 1,
        "description": "Architecture of DCS distributed automation systems. Process, operator and engineering stations. Architecture of ABB Freelance system. Control Builder F engineering environment. Hardware structure – AC800F controller. Simple FBD diagram. Assignment of variables to I/O channels. Running (commissioning). Emulator.",
        "estimated_minutes": 60
    },
    {
        "id": "124cefd4-d379-4339-aff5-a0cce08d6445",
        "subject_id": "28be2e1b-58bd-4781-8928-05099bf6aaf0",
        "order": 2,
        "description": "Visualization basics. Defining operator station. Defining display. Graphics editor. Static elements – Toolbox. Color animation. Buttons. Runtime realization – DigiVis.",
        "estimated_minutes": 60
    },
    {
        "id": "c689a822-78db-4bfd-91b7-a8daac8943cd",
        "subject_id": "28be2e1b-58bd-4781-8928-05099bf6aaf0",
        "order": 3,
        "description": "Programming in ST, FBD and SFC languages. Sequential automaton. Access to global variables in multitasking system. Function block in ST. FBD diagram. Library blocks. Creating SFC diagram. Programs for steps and transitions. Commisioning.",
        "estimated_minutes": 60
    },
    {
        "id": "94c1fdf1-3bde-454c-942e-c392dc3df425",
        "subject_id": "28be2e1b-58bd-4781-8928-05099bf6aaf0",
        "order": 4,
        "description": "Advanced realizations of logic control. Signaling alarms in building. Alarms and warnings. Control of sorting process. Discrete and continuous movement. Visibility. Realization of sequences. Assembling batch of elements.",
        "estimated_minutes": 60
    },
    {
        "id": "a2840858-80ba-4891-a463-c6ba68398772",
        "subject_id": "28be2e1b-58bd-4781-8928-05099bf6aaf0",
        "order": 5,
        "description": "Operating windows and system displays. Operating window – faceplate. On-line parameterization. Library animation elements. Trend display. Overview and group displays. Navigation.",
        "estimated_minutes": 60
    },
    {
        "id": "5cab42cd-9d95-43ea-89bc-c56ad6b22985",
        "subject_id": "28be2e1b-58bd-4781-8928-05099bf6aaf0",
        "order": 6,
        "description": "PID control loop in Freelance system. Advanced PID algorithm. Simulation of multi-inertia plant. Approximation by low-order model with delay – DigiBrowse. Selection of settings, Examination of PID loop operation.",
        "estimated_minutes": 60
    },
    {
        "id": "65fa2247-371d-49f7-9834-1819e388b048",
        "subject_id": "28be2e1b-58bd-4781-8928-05099bf6aaf0",
        "order": 7,
        "description": "Distributed control-and-measurement system with Modbus RTU communication. System with Lumel SMC Controller. CPDev engineering environment. Off-line simulation. Communication with distributed I/O modules – Modbus RTU. On-line testing. Simplest visualization – InTouch (SCADA). Running SMC – Modbus RTU – InTouch system",
        "estimated_minutes": 60
    },
    {
        "id": "d930c753-1559-4e9a-8117-42f437daad66",
        "subject_id": "28be2e1b-58bd-4781-8928-05099bf6aaf0",
        "order": 8,
        "description": "System with Modbus TCP communication. Level control simulation. Advanced visualization in InTouch (wizards). Application variables. Scripts. Modbus TCP communication (MBENET). PC as a controller – softcontroller CPCtrl (CPDev). Running CPCtrl – Modbus TCP – InTouch system.",
        "estimated_minutes": 60
    },
    {
        "id": "c258344d-bf3d-499f-979b-5d14a40755ea",
        "subject_id": "28be2e1b-58bd-4781-8928-05099bf6aaf0",
        "order": 9,
        "description": "PID control loop in CPCtrl – Modbus TCP – InTouch system. Plant simulation. Step response – PID settings. PID algorithm in ST (CPDev). Operating window – InTouch. Parameters at controller side and InTouch side. Commisioning the system – examination of the loop.",
        "estimated_minutes": 60
    },
    {
        "id": "5972556c-490a-4642-ba3e-fff5f5879542",
        "subject_id": "28be2e1b-58bd-4781-8928-05099bf6aaf0",
        "order": 10,
        "description": "OPC and Profibus communication standards. Characteristic of OPC standard. OPC in CPCtrl environment (CPDev) – client and server. Configuration of Profibus DP communication in the Freelance system. Distributed measurement system with wireless ZigBee communication.",
        "estimated_minutes": 60
    },
    {
        "id": "0901e94f-5a9f-429e-aa13-bc416a3a460c",
        "subject_id": "4d4b9302-60d8-4027-91e1-f71deea92322",
        "order": 1,
        "description": "General-purpose computer networks - characteristics, methods of media access used in general-purpose computer networks.",
        "estimated_minutes": 60
    },
    {
        "id": "13a71012-4219-4645-8931-d1c2d86bea84",
        "subject_id": "4d4b9302-60d8-4027-91e1-f71deea92322",
        "order": 2,
        "description": "DCS, SCADA systems. Distributed and centralized control. Process station, operator station, engineering station,",
        "estimated_minutes": 60
    },
    {
        "id": "b1fd9ce0-370f-49a0-a149-4402a4c52b5c",
        "subject_id": "4d4b9302-60d8-4027-91e1-f71deea92322",
        "order": 3,
        "description": "Industrial networks (classification, characteristics, basic information, protocols, the differences between a standard computer network and fieldbuses, network models, simplified model of industrial network),",
        "estimated_minutes": 60
    },
    {
        "id": "49d5cd3d-6512-4d80-81b6-088cb9e8a8ec",
        "subject_id": "4d4b9302-60d8-4027-91e1-f71deea92322",
        "order": 4,
        "description": "Transmission medium access control. Data exchange methods in industrial networks: cyclic, aperiodic, time parameters.",
        "estimated_minutes": 60
    },
    {
        "id": "43bfb55e-7d88-413c-a93f-febb8fb127bc",
        "subject_id": "4d4b9302-60d8-4027-91e1-f71deea92322",
        "order": 5,
        "description": "Real-time networks. Examples of industrial networks. Time determinism.",
        "estimated_minutes": 60
    },
    {
        "id": "b0cb5d67-f82b-4615-9e1e-595166b14800",
        "subject_id": "4d4b9302-60d8-4027-91e1-f71deea92322",
        "order": 6,
        "description": "Industrial Ethernet. Process stations Ethernet communication.",
        "estimated_minutes": 60
    },
    {
        "id": "692ce6f0-c6fe-4e87-808b-d461cca083a5",
        "subject_id": "4d4b9302-60d8-4027-91e1-f71deea92322",
        "order": 7,
        "description": "Examples of industrial networks. Industrial network communication protocols - Modbus, Profibus, Interbus, CAN, LIN, FIP, a review of other solutions.",
        "estimated_minutes": 60
    },
    {
        "id": "ace5fbdc-39b9-4211-b5ea-7cd2de15ee8c",
        "subject_id": "4d4b9302-60d8-4027-91e1-f71deea92322",
        "order": 8,
        "description": "Modbus TCP.",
        "estimated_minutes": 60
    },
    {
        "id": "21940f03-988d-453a-a698-69559e0e9875",
        "subject_id": "4d4b9302-60d8-4027-91e1-f71deea92322",
        "order": 9,
        "description": "Protocols conversion. Special purpose industrial networks. Communication in wide area distributed industrial systems, examples of solutions.",
        "estimated_minutes": 60
    },
    {
        "id": "03150097-bef5-441b-9d06-89cf33e4aa03",
        "subject_id": "4d4b9302-60d8-4027-91e1-f71deea92322",
        "order": 10,
        "description": "Wireless communication in industrial networks, radiomodems.",
        "estimated_minutes": 60
    },
    {
        "id": "eb30a5e0-3461-452f-9c65-75cda0f36d08",
        "subject_id": "4d4b9302-60d8-4027-91e1-f71deea92322",
        "order": 11,
        "description": "Diagnosis process and operation of an industrial network. Safety and security aspects.",
        "estimated_minutes": 60
    },
    {
        "id": "0e9f47a5-a7ea-4682-8e3d-4ff498e81ceb",
        "subject_id": "f94c0b73-19d3-4e57-860e-2174e663f907",
        "order": 1,
        "description": "Description of control systems in state space",
        "estimated_minutes": 60
    },
    {
        "id": "b9c80b2d-7d27-4796-b302-c40492e08214",
        "subject_id": "f94c0b73-19d3-4e57-860e-2174e663f907",
        "order": 2,
        "description": "The relationships between state space description and transfer function description of control systems",
        "estimated_minutes": 60
    },
    {
        "id": "f62655cc-7298-4aa7-a7b9-a267d94ed112",
        "subject_id": "f94c0b73-19d3-4e57-860e-2174e663f907",
        "order": 3,
        "description": "Solving state equations of linear systems",
        "estimated_minutes": 60
    },
    {
        "id": "ab2d779a-d3f8-421a-b613-8c10cb893bef",
        "subject_id": "f94c0b73-19d3-4e57-860e-2174e663f907",
        "order": 4,
        "description": "Stability of dynamic systems",
        "estimated_minutes": 60
    },
    {
        "id": "a99a4157-3f5b-44d6-ab15-d6d7d6df70c1",
        "subject_id": "f94c0b73-19d3-4e57-860e-2174e663f907",
        "order": 5,
        "description": "Controllability and observability of dynamical systems",
        "estimated_minutes": 60
    },
    {
        "id": "c6cb0277-8ac7-45ad-99ea-6f171ecea663",
        "subject_id": "f94c0b73-19d3-4e57-860e-2174e663f907",
        "order": 6,
        "description": "Linear state controllers",
        "estimated_minutes": 60
    },
    {
        "id": "cba9c27d-9b54-4614-8c3a-de717387cd8f",
        "subject_id": "f94c0b73-19d3-4e57-860e-2174e663f907",
        "order": 7,
        "description": "Design of state controller using root locus",
        "estimated_minutes": 60
    },
    {
        "id": "3aba98ed-80e5-473f-a0d0-9ac4cdc6508a",
        "subject_id": "f94c0b73-19d3-4e57-860e-2174e663f907",
        "order": 8,
        "description": "Design of state controller using the linear-quadratic optimization",
        "estimated_minutes": 60
    },
    {
        "id": "830fc490-a86d-46c2-9356-b491019390ec",
        "subject_id": "f94c0b73-19d3-4e57-860e-2174e663f907",
        "order": 9,
        "description": "State estimation",
        "estimated_minutes": 60
    },
    {
        "id": "b3418990-2729-43f3-b433-93304bd866da",
        "subject_id": "f94c0b73-19d3-4e57-860e-2174e663f907",
        "order": 10,
        "description": "The full Luenberger observer",
        "estimated_minutes": 60
    },
    {
        "id": "28ec9397-9efc-4cae-bbf2-45584dae7c54",
        "subject_id": "f94c0b73-19d3-4e57-860e-2174e663f907",
        "order": 11,
        "description": "A reduced observer",
        "estimated_minutes": 60
    },
    {
        "id": "178ccde9-b87e-4701-8851-3bd1b71a5b93",
        "subject_id": "f94c0b73-19d3-4e57-860e-2174e663f907",
        "order": 12,
        "description": "Control system with a state controller and an observer",
        "estimated_minutes": 60
    },
    {
        "id": "21cccf36-9f85-4f4a-bdcf-5001918eb713",
        "subject_id": "f94c0b73-19d3-4e57-860e-2174e663f907",
        "order": 13,
        "description": "Kalman filter",
        "estimated_minutes": 60
    },
    {
        "id": "9be310c6-ac07-4363-894e-150cfb150a77",
        "subject_id": "6bfa0093-ade6-44fd-bf89-3701f8868d2f",
        "order": 1,
        "description": "Introduction, basic notions of discrete processes.",
        "estimated_minutes": 60
    },
    {
        "id": "1fb6c7a5-42ed-4257-8f00-78f61e75d0e8",
        "subject_id": "6bfa0093-ade6-44fd-bf89-3701f8868d2f",
        "order": 2,
        "description": "Petri net - structure, operation, properties",
        "estimated_minutes": 60
    },
    {
        "id": "1ac6a7b9-34e7-4a1d-8bcf-c0a3f98ddd3f",
        "subject_id": "6bfa0093-ade6-44fd-bf89-3701f8868d2f",
        "order": 3,
        "description": "The method of Petri net synthesis",
        "estimated_minutes": 60
    },
    {
        "id": "93129d97-3ed7-47ae-bcef-aac770d7bfbd",
        "subject_id": "6bfa0093-ade6-44fd-bf89-3701f8868d2f",
        "order": 4,
        "description": "Examples of the discrete processes",
        "estimated_minutes": 60
    },
    {
        "id": "c8cd9b86-4437-48ed-b449-a9b69e2a4e53",
        "subject_id": "6bfa0093-ade6-44fd-bf89-3701f8868d2f",
        "order": 5,
        "description": "Sequential function chart SFC, Grafcet",
        "estimated_minutes": 60
    },
    {
        "id": "0e48368c-78f7-4360-af68-ce0ea758ed76",
        "subject_id": "6bfa0093-ade6-44fd-bf89-3701f8868d2f",
        "order": 6,
        "description": "Queuing theory",
        "estimated_minutes": 60
    },
    {
        "id": "fb6e98d1-3f8c-46e7-818b-b7e99b181ece",
        "subject_id": "6bfa0093-ade6-44fd-bf89-3701f8868d2f",
        "order": 7,
        "description": "Network scheduling, Critical Path Method, Program Ewaluation and Review Technique, Gantt charts.",
        "estimated_minutes": 60
    },
    {
        "id": "729716c0-57a5-44d9-8dbf-8169ecc6b77b",
        "subject_id": "6bfa0093-ade6-44fd-bf89-3701f8868d2f",
        "order": 8,
        "description": "Softwares, which support of planning and management of production processes. The selected languages of discrete simulation.",
        "estimated_minutes": 60
    },
    {
        "id": "ea75c074-a306-44b1-88b0-72eb5b9163b7",
        "subject_id": "6bfa0093-ade6-44fd-bf89-3701f8868d2f",
        "order": 9,
        "description": "scheduling problems of single machine job, flow-shop and job-shop",
        "estimated_minutes": 60
    },
    {
        "id": "6497b848-fc8d-42ab-a95a-f7bae6987bf1",
        "subject_id": "6bfa0093-ade6-44fd-bf89-3701f8868d2f",
        "order": 10,
        "description": "Optimization methods - graphs, combinatorial, discrete programming.",
        "estimated_minutes": 60
    },
    {
        "id": "2565ab41-2cc6-4133-a9c4-e2b2afc29abf",
        "subject_id": "6bfa0093-ade6-44fd-bf89-3701f8868d2f",
        "order": 11,
        "description": "Exact optimization methods and approximate optimization methods",
        "estimated_minutes": 60
    },
    {
        "id": "5c29338e-caa2-469f-b5d3-5570ce124685",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 1,
        "description": "Introduction to decision support systems",
        "estimated_minutes": 60
    },
    {
        "id": "5abd2c56-fd0f-4497-8baf-9df10d1736bb",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 2,
        "description": "The nature of decision making",
        "estimated_minutes": 60
    },
    {
        "id": "98f2f3d6-aa45-4377-bc1b-1b1cf65ced90",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 3,
        "description": "Data, information and knowledge",
        "estimated_minutes": 60
    },
    {
        "id": "2be829a6-7c58-40aa-b987-3cbb1d1e23ed",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 4,
        "description": "The fundamentals of database technology",
        "estimated_minutes": 60
    },
    {
        "id": "9c93cc1b-091e-4910-8c82-739a9db11ce9",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 5,
        "description": "Relational database aplication systems development",
        "estimated_minutes": 60
    },
    {
        "id": "5a99e1db-5d6f-4cfe-be41-6304a84a2462",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 6,
        "description": "Introduction to SQL",
        "estimated_minutes": 60
    },
    {
        "id": "f513e443-981c-45c7-894c-75de2c7ac361",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 7,
        "description": "Midterm test",
        "estimated_minutes": 60
    },
    {
        "id": "0410e162-1b4d-4434-80a8-c9c50b7b5935",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 8,
        "description": "Introduction to knowledge discovery from data",
        "estimated_minutes": 60
    },
    {
        "id": "f521ecac-e3e1-4411-9ab0-36da0cb48e44",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 9,
        "description": "Data preprocessing methods",
        "estimated_minutes": 60
    },
    {
        "id": "96cd30b9-fb79-4c07-b431-4a96d259efba",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 10,
        "description": "The concept and architecture of data warehouse",
        "estimated_minutes": 60
    },
    {
        "id": "76040fef-8562-4617-9720-1721d3f66821",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 11,
        "description": "Multidimensional data model. OLAP operations",
        "estimated_minutes": 60
    },
    {
        "id": "180d0a14-9a01-4ee1-81e7-1f8a6b6213cd",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 12,
        "description": "Frequent pattern discovery and association analysis",
        "estimated_minutes": 60
    },
    {
        "id": "0a67e99a-8556-42c2-b029-16efa6388f94",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 13,
        "description": "Induction and evaluation of classification models",
        "estimated_minutes": 60
    },
    {
        "id": "fcdc0632-c5af-4625-aaaf-51a7f0f6d49b",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 14,
        "description": "The concept of clusterization and selected clustering methods",
        "estimated_minutes": 60
    },
    {
        "id": "9ab2fb87-0074-4652-ab2e-b63d902adbd6",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 15,
        "description": "User interface goals and components",
        "estimated_minutes": 60
    },
    {
        "id": "e0b12b8e-d99e-4842-b19c-f05a468c0a6c",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 16,
        "description": "DSS planning and requirements analysis",
        "estimated_minutes": 60
    },
    {
        "id": "5b106975-1b96-4b9b-a75e-b58f59890c68",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 17,
        "description": "DSS designing and reengineering",
        "estimated_minutes": 60
    },
    {
        "id": "c078449f-2e4d-4f9f-bb2b-83e9d7bb9db4",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 18,
        "description": "Final test",
        "estimated_minutes": 60
    },
    {
        "id": "8f6f38eb-7a01-4c72-b326-a945ecf9af6e",
        "subject_id": "c8683c1d-ac34-4f20-ba89-4ecca6564b52",
        "order": 19,
        "description": "Completing assignments and projects concerning: (i) database application system development and (ii) knowledge discovery from data and business intelligence (BI). Deployment of existing database management systems (Oracle11g XE) as well as popular commercial (MS SQL Server Analysis Services) and non-commercial (Weka, Orange) packages for data warehouse building and management and analytical application development. Using available datasets for testing analytical functions.",
        "estimated_minutes": 60
    },
    //WEiI - ACR - SPEC - Automation...
    {
        "id": "3ce32e6e-ccbf-4bfc-9657-87439f0aca0f",
        "subject_id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "order": 1,
        "description": "Construction of numerically controlled machines: Characteristics of numerically controlled machines. Numerically controlled axes. Characteristic points of the machine. Structures and guides. Tool spindles and heads. Position and displacement measurement systems. Tool changers.",
        "estimated_minutes": 60
    },
    {
        "id": "2ac2ee8e-68f5-4c9a-af47-b7a274d64c8f",
        "subject_id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "order": 2,
        "description": "Modular structure of numerically controlled machines: Control devices. Main drives. Feed motion drives. Auxiliary drives. Hydraulic systems. Mechanical assemblies. Diagnostic devices. Auxiliaries.",
        "estimated_minutes": 60
    },
    {
        "id": "335a28e1-5eae-4e54-855b-aef78f3c4739",
        "subject_id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "order": 3,
        "description": "Numerical control of technological machines: Computer control systems (CNC) of technological machines. Basic concepts of numerical control. Coordinate systems and motor structures in numerically controlled machines. Analysis of the possibilities of CNC systems.",
        "estimated_minutes": 60
    },
    {
        "id": "f8e92c16-c4eb-4428-9c41-5bb3f785e960",
        "subject_id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "order": 4,
        "description": "Analysis of the geometric accuracy of CNC machines and research possibilities in this area.",
        "estimated_minutes": 60
    },
    {
        "id": "5102beb1-faac-4514-b0db-ef6c91e31e0a",
        "subject_id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "order": 5,
        "description": "Analysis of the stiffness of the CNC machine tool. Thermal loads on a CNC machine tool. Methods of deformation compensation. Sources of vibrations in a CNC machine tool.",
        "estimated_minutes": 60
    },
    {
        "id": "fe35d231-8f84-4903-9901-dd86e57f00a9",
        "subject_id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "order": 6,
        "description": "Development trends in the construction and operation of CNC machines.",
        "estimated_minutes": 60
    },
    {
        "id": "fd0a2176-6647-477b-bf52-720d373ca4a5",
        "subject_id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "order": 7,
        "description": "Setting up CNC lathes.",
        "estimated_minutes": 60
    },
    {
        "id": "ce5271d9-3b79-4576-94fe-2939781fe79e",
        "subject_id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "order": 8,
        "description": "Setting up CNC milling machines.",
        "estimated_minutes": 60
    },
    {
        "id": "e3a31384-fd26-4240-8467-c4dc4dc11666",
        "subject_id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "order": 9,
        "description": "Setting up CNC grinders.",
        "estimated_minutes": 60
    },
    {
        "id": "868f26b7-cff7-43e4-a797-54e289fee3d7",
        "subject_id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "order": 10,
        "description": "Research on the accuracy of CNC machine tools with the use of diagnostic devices.",
        "estimated_minutes": 60
    },
    {
        "id": "f4de151e-32c5-4a7e-95f6-ba0223165fa2",
        "subject_id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "order": 11,
        "description": "Research in the field of geometric accuracy of CNC machine tools with the use of sensor devices and control devices.",
        "estimated_minutes": 60
    },
    {
        "id": "ff865b4e-e5ef-4ab9-9216-8d32e959f4f1",
        "subject_id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "order": 12,
        "description": "Research on the rigidity of selected machine tool assemblies.",
        "estimated_minutes": 60
    },
    {
        "id": "54649534-0784-4268-8e28-276b8c845274",
        "subject_id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "order": 13,
        "description": "Interactive programming.",
        "estimated_minutes": 60
    },
    {
        "id": "210adb82-bbc6-4b4c-bcfa-8588a5c5c9a8",
        "subject_id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "order": 14,
        "description": "Development and commissioning of control programs for CNC machine tools.",
        "estimated_minutes": 60
    },
    {
        "id": "bdabae71-32e5-47c7-8eb6-2bb55d66b651",
        "subject_id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "order": 15,
        "description": "Development of a maintenance plan for a CNC machine tool.",
        "estimated_minutes": 60
    },
    {
        "id": "e3e3ca7a-b689-4b23-b806-000c9f878820",
        "subject_id": "4344af37-5068-41bb-bcda-f959ceaa4961",
        "order": 16,
        "description": "Summary.",
        "estimated_minutes": 60
    },
    {
        "id": "480e4392-7f22-46e5-8cff-5f7165373dcb",
        "subject_id": "c2d8a15a-e59d-4aff-915f-bbc61ac9a901",
        "order": 1,
        "description": "Introduction to the application of AI and CI methods in manufacturing systems and intralogistics",
        "estimated_minutes": 60
    },
    {
        "id": "f7d1aad4-f148-45a9-b6b9-28ddd637e85b",
        "subject_id": "c2d8a15a-e59d-4aff-915f-bbc61ac9a901",
        "order": 2,
        "description": "Architectures of information systems enabling the use of AI methods in industrial processes",
        "estimated_minutes": 60
    },
    {
        "id": "3fc2a1eb-bb3b-423f-8a02-1c452585b54a",
        "subject_id": "c2d8a15a-e59d-4aff-915f-bbc61ac9a901",
        "order": 3,
        "description": "The process of applying CI methods in production systems – introduction",
        "estimated_minutes": 60
    },
    {
        "id": "4c1eda18-f57e-4aa3-8e92-6a33fea0d9ab",
        "subject_id": "c2d8a15a-e59d-4aff-915f-bbc61ac9a901",
        "order": 4,
        "description": "Methods for assessing the quality of classification and machine discovery of knowledge.",
        "estimated_minutes": 60
    },
    {
        "id": "c6262eca-a92e-40d8-9543-dd80202d0e8b",
        "subject_id": "c2d8a15a-e59d-4aff-915f-bbc61ac9a901",
        "order": 5,
        "description": "Machine discovery of cause-and-effect relationships or sequence patterns - a practical example.",
        "estimated_minutes": 60
    },
    {
        "id": "fec4b2e4-ad4f-4989-a6fc-7cbca27162e0",
        "subject_id": "c2d8a15a-e59d-4aff-915f-bbc61ac9a901",
        "order": 6,
        "description": "One-class or multi-class classification methods - a practical example",
        "estimated_minutes": 60
    },
    {
        "id": "435fd9bc-3955-49df-a3aa-c9ced8258504",
        "subject_id": "c2d8a15a-e59d-4aff-915f-bbc61ac9a901",
        "order": 7,
        "description": "Predictive models",
        "estimated_minutes": 60
    },
    {
        "id": "fb144665-a61d-45e1-9431-6f6902a6c02d",
        "subject_id": "cae14b91-6b27-4b1a-bcf3-a3638d06ba48",
        "order": 1,
        "description": "Introduction to Manufacturing Engineering. Classification of methods of shaping machine parts. Characteristics and application of subtractive and nonsubtractive processing Basic concepts. Differences between cutting, abrasion and eroding. Kinematics of the subtractive manufacturing processes. Technological parameters of the processes. Surface quality and dimensional and shape accuracy in manufacturing processes. Physical foundations of the cutting process. Cutting zones and phenomena occurring in them. Cut layer cross-section.",
        "estimated_minutes": 60
    },
    {
        "id": "e2927a78-2720-46b5-8a1b-32938b6d0b3d",
        "subject_id": "cae14b91-6b27-4b1a-bcf3-a3638d06ba48",
        "order": 2,
        "description": "Basic phenomena in the cutting process. Classification and characteristics of chips. Chip construction. Chip upset. Chip breaking. Construction of chipbreakers. Chip shapes. The phenomenon of crumpling of the surface layer in machining. Influence of process parameters on the phenomenon of crumple. The phenomenon of built-up. Influence of the built-up phenomenon on the machining process, workpiece and tool. Cutting force. Formulas for calculating the cutting force. Cutting force components. Work and cutting power. Determination of cutting power. Cutting heat. Temperature distribution in the cutting zone. Heat balance of the cutting process. Vibrations in the cutting process. Influence of the process parameters on the heat balance. Machinability of construction materials. Machinability indicators. Classification of materials in terms of machinability. The role of coolants in the cutting process. Ways to bring coolant to the cutting zone. Shaping the surface layer in the machining processes. The influence of the machining process on the properties of the surface layer.",
        "estimated_minutes": 60
    },
    {
        "id": "376a23d6-f58e-4143-a926-ab70175ae473",
        "subject_id": "cae14b91-6b27-4b1a-bcf3-a3638d06ba48",
        "order": 3,
        "description": "Fundamentals of technological processes. The structure of the technological process. Tooling for machining. Designing technological processes for CNC machines. Blanks in subtractive processing. Basics of technical drawing. Principles of drawing up technical drawings. Symbolism and markings on technical drawings. Basics of creating technological documentation. Fundamentals of technical metrology. Tools and measuring instruments. The accuracy of the shape of objects. Surface topography after processing.",
        "estimated_minutes": 60
    },
    {
        "id": "2e0a2019-64a7-482c-8397-50adeba86d90",
        "subject_id": "cae14b91-6b27-4b1a-bcf3-a3638d06ba48",
        "order": 4,
        "description": "Characteristics and classification of the turning process. Technological parameters of turning. Cut layer in turning. Construction and application of turning tools. Chip breaking process tests. Research on the swelling of chips. Surface roughness measurements after turning. Preparation of the test stand. Conducting research.",
        "estimated_minutes": 60
    },
    {
        "id": "35550904-d073-4178-b817-e5d00b37fba8",
        "subject_id": "cae14b91-6b27-4b1a-bcf3-a3638d06ba48",
        "order": 5,
        "description": "Characteristics and classification of the milling process. Varieties of milling. Technological parameters of milling. Cut layer in milling. Construction and application of milling tools. Types of cutter blades. Measurements of surface roughness after milling. Preparation of the test stand. Conducting research.",
        "estimated_minutes": 60
    },
    {
        "id": "27a37698-c619-4f21-b3e5-50d68c224cf4",
        "subject_id": "cae14b91-6b27-4b1a-bcf3-a3638d06ba48",
        "order": 6,
        "description": "Characteristics and classification of hole machining processes. Technological parameters of drilling, reaming and countersinking. Cut layer in drilling, reaming and countersinking. Construction and application of tools for machining holes. Measurement of the accuracy of holes after machining. Thread machining methods, thread machining tools. Preparation of the test stand. Conducting research.",
        "estimated_minutes": 60
    },
    {
        "id": "9eaaeaaf-7727-4eab-9ae3-5c60634f87ab",
        "subject_id": "cae14b91-6b27-4b1a-bcf3-a3638d06ba48",
        "order": 7,
        "description": "Characteristics and classification of grinding processes. Technological parameters of grinding shafts, holes and planes. Construction and marking of grinding wheels. Preparation of grinding wheels for work. Characteristics of the grinding wheel dressing process. Measurements of the accuracy of objects after grinding and surface roughness. Machining of gears. Gear machining methods in soft and hard condition. Gear processing tools. Shaping and envelope machining. Preparation of the test stand. Conducting research.",
        "estimated_minutes": 60
    },
    {
        "id": "8fb44fc5-a4e8-4806-a8f1-320ce9576d9b",
        "subject_id": "cae14b91-6b27-4b1a-bcf3-a3638d06ba48",
        "order": 8,
        "description": "Erosion machining: electrical discharge machining, laser machining, abrasive water jet machining. Characteristics and parameters of the processes.",
        "estimated_minutes": 60
    },
    {
        "id": "df342330-8828-4316-86ea-edc4d5d89c03",
        "subject_id": "cae14b91-6b27-4b1a-bcf3-a3638d06ba48",
        "order": 9,
        "description": "Selection of tools and cutting parameters. The use of computer applications for the selection of tools and machining parameters. Selection of tools and cutting parameters for the machining processes of products with determined geometry and quality requirements.",
        "estimated_minutes": 60
    },
    {
        "id": "0e0bcd6c-5b03-4cdb-93ff-ea64ca25b6a0",
        "subject_id": "cae14b91-6b27-4b1a-bcf3-a3638d06ba48",
        "order": 10,
        "description": "Fundamentals of technical metrology. Basic tools and measuring instruments. Measurement of dimensions and deviations of shape and position. Surface roughness measurement.",
        "estimated_minutes": 60
    },
    {
        "id": "0b7a6902-1b32-4069-b56c-4c541699a1c4",
        "subject_id": "cae14b91-6b27-4b1a-bcf3-a3638d06ba48",
        "order": 11,
        "description": "Designing technological processes of typical machine parts. Selection of machining equipment. Selection of a blank. Technological documentation.",
        "estimated_minutes": 60
    },
    {
        "id": "30bf9add-5041-4256-b458-43dbbde80d5e",
        "subject_id": "20a82486-15f8-4a8e-a00c-b06d7da9f3a8",
        "order": 1,
        "description": "Technical and engineering problems occurring at the place of the summer practice , and the basic principles of the organization and safety of work. Also, the basic rights and duties of the employee.",
        "estimated_minutes": 60
    },
    {
        "id": "81fa6b72-ce9c-4c17-87fe-ef714373b99e",
        "subject_id": "5e0c9b53-f217-4b23-85aa-041b673ea954",
        "order": 1,
        "description": "Relational databases. Database examples. Relational database example. Database languages: DDL, DML, DCL, QL. Operations on relations: section, projection, join, union.",
        "estimated_minutes": 60
    },
    {
        "id": "6f4be431-d829-4479-8813-c2e0e2fa20ad",
        "subject_id": "5e0c9b53-f217-4b23-85aa-041b673ea954",
        "order": 2,
        "description": "Principles of database design. Data modeling. Creating relational database scheme from entity relationship diagram.",
        "estimated_minutes": 60
    },
    {
        "id": "fb378a79-9091-4fa9-9916-6386d7fe83e0",
        "subject_id": "5e0c9b53-f217-4b23-85aa-041b673ea954",
        "order": 3,
        "description": "Creation and modification of database scheme. Instructions for data manipulation. Table creation. Data types. Integrity constraints and validation. Inserting data. Updating and deleting.",
        "estimated_minutes": 60
    },
    {
        "id": "efe89e61-256f-44ad-8a64-0fb4ec0cd3a4",
        "subject_id": "5e0c9b53-f217-4b23-85aa-041b673ea954",
        "order": 4,
        "description": "Simple SELECT queries. Data retrieval - WHERE caluse. Results ordering. Row grouping.",
        "estimated_minutes": 60
    },
    {
        "id": "8a8e8fab-b29d-4a17-aa5e-b819c5ce9ba1",
        "subject_id": "5e0c9b53-f217-4b23-85aa-041b673ea954",
        "order": 5,
        "description": "Vertical relation joining. Specification of join conditions. JOIN clause. Horizontal joins: UNION, INTERSECT, MINUS. Creating subqueries. Correlated and not correlated mode. Single-row functions. Aggregate functions.",
        "estimated_minutes": 60
    },
    {
        "id": "5e174819-27cb-45e1-b6d4-84c343d5c2ec",
        "subject_id": "5e0c9b53-f217-4b23-85aa-041b673ea954",
        "order": 6,
        "description": "Industrial databases - characteristics, applications. TIme-stamp concept. Cooperation with SCADA systems. OPC mechanism.Protection against SQL Injection attacks.",
        "estimated_minutes": 60
    },
    {
        "id": "ed898333-7887-4ba8-bd9e-9211f76350b6",
        "subject_id": "e14ce13f-10d6-4f3a-9866-29c113924bcf",
        "order": 1,
        "description": "Intralogistics - goals, functionalities, devices, control systems. software, transport lines, automatic storage and picking systems",
        "estimated_minutes": 60
    },
    {
        "id": "bbd7f050-9d00-4ba8-93a1-3d8a1dd6c9e2",
        "subject_id": "e14ce13f-10d6-4f3a-9866-29c113924bcf",
        "order": 2,
        "description": "E-Commerce magazines",
        "estimated_minutes": 60
    },
    {
        "id": "54ab85f6-8971-4d91-8987-a57211339a81",
        "subject_id": "e14ce13f-10d6-4f3a-9866-29c113924bcf",
        "order": 3,
        "description": "Databases in manufacturing systems. Material and tool databases. Computer systems supporting the selection of tools and technological parameters. Computer systems for the selection and calculation of machine parts. Automatic dispensing machines. Industrial solutions.",
        "estimated_minutes": 60
    },
    {
        "id": "984f6d0c-3d1c-4e82-8a27-641f78cad097",
        "subject_id": "e14ce13f-10d6-4f3a-9866-29c113924bcf",
        "order": 4,
        "description": "Numerical analyzes of manufacturing processes and machining tools.",
        "estimated_minutes": 60
    },
    {
        "id": "cad92f5e-a4c4-4b4c-9dc5-5e8fbf2c955c",
        "subject_id": "e14ce13f-10d6-4f3a-9866-29c113924bcf",
        "order": 5,
        "description": "Integrated and automated manufacturing systems. Machining cells. Complete, high-performance and hybrid machining techniques. Additive Machining.",
        "estimated_minutes": 60
    },
    {
        "id": "28b42003-68b3-47f6-ac7f-8207c7b53ad3",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 1,
        "description": "Definitions and functions of the material flow subsystem. Object transport subsystem: transport classification, pallets for transport, storage and transport of workpieces.",
        "estimated_minutes": 60
    },
    {
        "id": "23e5b19f-cc41-49e7-be76-dd0ab106d8bf",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 2,
        "description": "Storage subsystem: classification, central storage, storage of workpieces, multi-station storage of workpieces.",
        "estimated_minutes": 60
    },
    {
        "id": "477da5dc-6403-4060-97e7-b84971680e6c",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 3,
        "description": "Manipulation subsystem: manipulation and handling devices, grippers.",
        "estimated_minutes": 60
    },
    {
        "id": "195152d1-2104-44b7-986b-00e78307e171",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 4,
        "description": "Definitions and functions of the tool flow subsystem. Tool flow subsystem: elements of the tool management subsystem, tool systems, tool coding systems. Computer systems of tool management.",
        "estimated_minutes": 60
    },
    {
        "id": "cb57e9b6-11e6-4936-b05e-42d7236aac1c",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 5,
        "description": "-",
        "estimated_minutes": 60
    },
    {
        "id": "6bca7a2e-14a5-4fea-9b33-bde9a0a3c4aa",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 6,
        "description": "Hydraulic and pneumatic systems in automatic systems. Simulation of hydraulic and pneumatic systems, eg Fluid Sim.",
        "estimated_minutes": 60
    },
    {
        "id": "11b2639d-340c-409c-be6c-6db62630a711",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 7,
        "description": "Construction of robotic manufacturing systems. Robotized manipulation and palletizing stations. Robotized machining stations.",
        "estimated_minutes": 60
    },
    {
        "id": "2d52fb16-7233-418e-bcda-ab8ed0674869",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 8,
        "description": "Autonomous industrial trucks (driveless industrial truck) – Norma 3691-4:2020",
        "estimated_minutes": 60
    },
    {
        "id": "f6318cc3-0553-4307-87ef-250767b7a44a",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 9,
        "description": "Tooling systems in lathes. Tool heads, automatic tool measurement.",
        "estimated_minutes": 60
    },
    {
        "id": "3c8cccad-6896-491e-8cdf-74d99f3ce3ac",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 10,
        "description": "Programming the work of ASO (robot + milling machine + transport station) (automatic processing of a short series of workpieces, handling of storage of semi-finished products and workpieces).",
        "estimated_minutes": 60
    },
    {
        "id": "145688fd-6413-41eb-af68-1a12b469eddf",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 11,
        "description": "Hydraulic systems - design of a manipulation system with hydraulic cylinders, simulation of the system in various operating conditions",
        "estimated_minutes": 60
    },
    {
        "id": "250ae3f4-b7de-46a7-8b52-2981c3961864",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 12,
        "description": "Pneumatic systems - design of the handling and transport system with the use of pneumatic actuators, simulation of the system in various operating conditions.",
        "estimated_minutes": 60
    },
    {
        "id": "9c5c1175-3ae2-4430-a5e2-8b06d436eed2",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 13,
        "description": "Manipulators used in numerically controlled machine tools. Pallet change systems.",
        "estimated_minutes": 60
    },
    {
        "id": "7ab3b912-8452-44ea-b371-ae6db67dfa53",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 14,
        "description": "Machining automation on the example of a multi-axis turning-milling center.",
        "estimated_minutes": 60
    },
    {
        "id": "72ca620a-66fe-462a-a783-1f8f66acad55",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 15,
        "description": "Numerically controlled X axis system (selection of speed regulator settings, position, stability).",
        "estimated_minutes": 60
    },
    {
        "id": "8a0a09b1-66c9-4433-b957-6494d7fafd55",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 16,
        "description": "Tool systems, tool coding systems, tool magazines, control systems, autonomous, integrated.",
        "estimated_minutes": 60
    },
    {
        "id": "03cf0995-7c14-4ac3-804a-cf5d4456fd9e",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 17,
        "description": "Computer systems of tool management, instrumentation, automatic dispensing machines, tool measuring systems.",
        "estimated_minutes": 60
    },
    {
        "id": "9c478b46-ccfa-425c-9cd0-e3c837183885",
        "subject_id": "c939e0c4-b26a-4841-bc1c-5ad0c2ed1406",
        "order": 18,
        "description": "Programming of selected functions of the machine tool (PLC of the machine tool), e.g. additional controlled axis. Control of the storage of semi-finished products.",
        "estimated_minutes": 60
    },
    {
        "id": "2f088d76-8d43-4678-a00a-2008e3cf82c1",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 1,
        "description": "Diagnostics and supervision - introduction. Basic concepts, terminology and tasks of diagnostics and supervision in processes machining.",
        "estimated_minutes": 60
    },
    {
        "id": "7c6f5582-b435-4324-9ca7-cf778bd9cfc5",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 2,
        "description": "Diagnostic signals. Measurements of typical physical quantities. Measurement signals. Processing of measurement signals. Sensors and principles of force measurement, moments, temperature, vibration, displacement and acoustic emission.",
        "estimated_minutes": 60
    },
    {
        "id": "8ea8777c-8d9e-496c-8a7c-40c8827df212",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 3,
        "description": "Diagnostics and supervision of machine tools. Geometric and kinematic accuracy, rigidity of machine tool assemblies. Bearing condition diagnostics. Diagnostics of axle drive units. Communication interfaces used in diagnostic systems.",
        "estimated_minutes": 60
    },
    {
        "id": "ca9304d8-d131-4744-9a9a-b7e890544b95",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 4,
        "description": "Diagnostics of the tool condition and the machining process. Tool wear, forms of wear. Measurement signals used in tool diagnostics, cutting forces, temperature, vibrations.",
        "estimated_minutes": 60
    },
    {
        "id": "c6b15bf1-2803-47fe-9723-17b5a4139331",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 5,
        "description": "Diagnostics and supervision of the accuracy of workpieces. Measurement of the accuracy of objects in the working space of the machine tool. Measurements outside the machine tool. Correction of dimensions. Adaptation systems in machining systems. Artificial intelligence systems in supervising machining processes. Selected industrial applications, complex sensors in intralogistics.",
        "estimated_minutes": 60
    },
    {
        "id": "34cb6cf3-6570-449c-8565-0af4cffb1f66",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 6,
        "description": "Selected industrial applications, complex sensors in intralogistics. Methodology for the implementation of scientific research. Designing a research stand. Development of research results.",
        "estimated_minutes": 60
    },
    {
        "id": "cb5b62c4-d7c1-42ff-8948-6481dbf705d0",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 7,
        "description": "Criteria for selecting an A / D converter for a specific measurement task. Processing of the measurement signal in the time and frequency domains. Virtual measurement system. Programming of measurement functions using software such as Testpoint and Lab View Signal Express.",
        "estimated_minutes": 60
    },
    {
        "id": "d7035e48-c7a1-4176-8157-d98de263a890",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 8,
        "description": "Testing the geometric and kinematic accuracy of the machine tool.",
        "estimated_minutes": 60
    },
    {
        "id": "1b46e255-7813-49e1-abf7-daca4b159b0f",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 9,
        "description": "Measurement of the static stiffness of the OUPN system, e.g. CNC lathes.",
        "estimated_minutes": 60
    },
    {
        "id": "46c9ae8a-0ab2-45a5-ab49-45ad3ec1266d",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 10,
        "description": "Modal analysis of selected components of the machine tool.",
        "estimated_minutes": 60
    },
    {
        "id": "dcbe9391-7b37-498e-893f-3dae092a8689",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 11,
        "description": "Analysis of the stability of the turning process.",
        "estimated_minutes": 60
    },
    {
        "id": "22e7b931-312d-4f61-bfee-751ee1395048",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 12,
        "description": "Application strain gauges (force, pressure, moment, displacement, vibration).",
        "estimated_minutes": 60
    },
    {
        "id": "3c7277ff-c52e-40ee-b603-06eb31f41c18",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 13,
        "description": "Multi-axis measurement of cutting forces during milling (piezo multi-axis, rotary sensors).",
        "estimated_minutes": 60
    },
    {
        "id": "8f39e098-54e1-4b98-aa69-27eb12fe99e3",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 14,
        "description": "Blade condition monitoring based on the measurement of forces and temperatures in the turning process.",
        "estimated_minutes": 60
    },
    {
        "id": "34f133a9-f9b0-4b6e-ab89-7d02314f9113",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 15,
        "description": "Measurement of mechanical vibrations as a method of monitoring the condition of the tool and the cutting process, spectral analysis.",
        "estimated_minutes": 60
    },
    {
        "id": "bf78f137-d429-4ece-96aa-1a805f0131e7",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 16,
        "description": "Diagnostics of the grinding process using the acoustic emission signal.",
        "estimated_minutes": 60
    },
    {
        "id": "e63805bb-b4e1-4818-8077-768733b1de90",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 17,
        "description": "Vibroacoustic methods in diagnostics of selected mechanical components of a machine tool.",
        "estimated_minutes": 60
    },
    {
        "id": "3294561d-78d3-4d80-9b25-a608e49e0d9a",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 18,
        "description": "Temperature measurements as a diagnostic method of cutting processes. Thermal imaging method. Image analysis.",
        "estimated_minutes": 60
    },
    {
        "id": "d9efb33f-d88a-46ec-a6bc-578826590d4c",
        "subject_id": "b587cbb9-7c08-4f4b-b7b0-71126d6d4011",
        "order": 19,
        "description": "Supervision of the turning and milling process using the image from the ultra-fast camera. Image analysis.",
        "estimated_minutes": 60
    },
    {
        "id": "d9f9eb61-705c-44cf-b585-a6160d5af196",
        "subject_id": "e163b9de-d84a-4e20-9f26-10ab46be532f",
        "order": 1,
        "description": "Structure of control systems used in intralogistics",
        "estimated_minutes": 60
    },
    {
        "id": "d1396b95-ebf4-4a50-8d8c-ce28363d013f",
        "subject_id": "e163b9de-d84a-4e20-9f26-10ab46be532f",
        "order": 2,
        "description": "Control software (PLC) architecture used in intralogistics",
        "estimated_minutes": 60
    },
    {
        "id": "8d07f180-cf45-4d86-86b5-8ccc5141959c",
        "subject_id": "e163b9de-d84a-4e20-9f26-10ab46be532f",
        "order": 3,
        "description": "Architecture of HMI software used in intralogistics",
        "estimated_minutes": 60
    },
    {
        "id": "fa473a56-f3a7-4983-b778-1bc1812230f7",
        "subject_id": "e163b9de-d84a-4e20-9f26-10ab46be532f",
        "order": 4,
        "description": "Safety layer software",
        "estimated_minutes": 60
    },
    {
        "id": "e82feaaa-b0dd-471f-8f49-50c5f83446f9",
        "subject_id": "e163b9de-d84a-4e20-9f26-10ab46be532f",
        "order": 5,
        "description": "Communication of the control system with external systems",
        "estimated_minutes": 60
    },
    {
        "id": "8ec79085-851b-42e4-99de-596c0751ad44",
        "subject_id": "e163b9de-d84a-4e20-9f26-10ab46be532f",
        "order": 6,
        "description": "Wirtulated commissioning",
        "estimated_minutes": 60
    },
    {
        "id": "5fd158e5-7b72-42b0-bbb1-ac168f9070f7",
        "subject_id": "5b2dfb27-3399-4623-94a0-332377151e2f",
        "order": 1,
        "description": "Architecture of the hardware layer of control systems used in intralogistics",
        "estimated_minutes": 60
    },
    {
        "id": "27a43a88-e421-489b-a46b-c2a8391cf9bf",
        "subject_id": "5b2dfb27-3399-4623-94a0-332377151e2f",
        "order": 2,
        "description": "Introduction to software (e.g. EPLAN) supporting the design of the hardware layer of control systems used in intralogistics",
        "estimated_minutes": 60
    },
    {
        "id": "6006bea9-936d-4696-bc58-5e14b848af18",
        "subject_id": "5b2dfb27-3399-4623-94a0-332377151e2f",
        "order": 3,
        "description": "Safety systems - selection of devices",
        "estimated_minutes": 60
    },
    {
        "id": "2e0d8876-02fe-4dbd-b8e8-408bd7203237",
        "subject_id": "5b2dfb27-3399-4623-94a0-332377151e2f",
        "order": 4,
        "description": "Drive technology - design and selection of equipment (contactors, inverters, feedback control systems)",
        "estimated_minutes": 60
    },
    {
        "id": "2273baaf-dc82-46fc-bc08-51992797f281",
        "subject_id": "5b2dfb27-3399-4623-94a0-332377151e2f",
        "order": 5,
        "description": "Project documentation - good practices",
        "estimated_minutes": 60
    },
    {
        "id": "d2eb6ee3-6b57-4654-95bb-682102701ab4",
        "subject_id": "9d5d3b4c-636e-413d-82aa-809f32147c56",
        "order": 1,
        "description": "Process of implementation of projects for the development of control systems",
        "estimated_minutes": 60
    },
    {
        "id": "6a76a3d9-895c-4e80-a593-92ff5831c68a",
        "subject_id": "9d5d3b4c-636e-413d-82aa-809f32147c56",
        "order": 2,
        "description": "Good practices in conducting projects in the area of development and implementation of control systems",
        "estimated_minutes": 60
    },
    {
        "id": "1ac68ec0-4619-412e-8f44-cba2a8596164",
        "subject_id": "9d5d3b4c-636e-413d-82aa-809f32147c56",
        "order": 3,
        "description": "Good practices in the area of working with calendar and mail. Team communication, psychological types",
        "estimated_minutes": 60
    },
    {
        "id": "3debaebd-a84d-4d38-9793-f0e526027740",
        "subject_id": "9d5d3b4c-636e-413d-82aa-809f32147c56",
        "order": 4,
        "description": "Self-motivation and well-being",
        "estimated_minutes": 60
    },
    {
        "id": "34b94454-c762-4a8e-ac11-4e1aacc5e492",
        "subject_id": "21c8add5-5a50-4f0b-8fa4-fa6e6927ead3",
        "order": 1,
        "description": "Formal and editorial requirements of the thesis. The structure of work, the content of the sections and subsections.",
        "estimated_minutes": 60
    },
    {
        "id": "7108ea6a-7d3f-41ce-80f1-fe567a9abe78",
        "subject_id": "21c8add5-5a50-4f0b-8fa4-fa6e6927ead3",
        "order": 2,
        "description": "The rules for creating theoretical and practical work.",
        "estimated_minutes": 60
    },
    {
        "id": "aefdba63-d463-473a-b7a7-4a47ef09de49",
        "subject_id": "21c8add5-5a50-4f0b-8fa4-fa6e6927ead3",
        "order": 3,
        "description": "Presentation of the theoretical part of the thesis. Create a table of contents, thesis, purpose, scope.",
        "estimated_minutes": 60
    },
    {
        "id": "996b467c-a1b1-495d-aa13-a769431439cd",
        "subject_id": "21c8add5-5a50-4f0b-8fa4-fa6e6927ead3",
        "order": 1,
        "description": "Discussion of the principles of the thesis presentation on the practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "181be63c-2612-4162-8f9a-bfda3df04c90",
        "subject_id": "21c8add5-5a50-4f0b-8fa4-fa6e6927ead3",
        "order": 2,
        "description": "Presentations of thesis practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "3da1d950-2b32-496a-b448-3f128b3feba7",
        "subject_id": "1f3ee25c-dff5-4fec-851f-f95e9c35673e",
        "order": 1,
        "description": "Antennas and propagation of radio waves in the telecommunication channel",
        "estimated_minutes": 60
    },
    {
        "id": "d0575c68-5cca-46df-817f-d05a33dffde3",
        "subject_id": "1f3ee25c-dff5-4fec-851f-f95e9c35673e",
        "order": 2,
        "description": "ZigBee Technology",
        "estimated_minutes": 60
    },
    {
        "id": "60fe2c78-cf3c-4cdf-a1cb-15aae8d7aa0c",
        "subject_id": "1f3ee25c-dff5-4fec-851f-f95e9c35673e",
        "order": 3,
        "description": "Bluetooth Technology",
        "estimated_minutes": 60
    },
    {
        "id": "197458c7-e2d3-4a6b-b36b-2fbb9437489d",
        "subject_id": "1f3ee25c-dff5-4fec-851f-f95e9c35673e",
        "order": 4,
        "description": "Wi-Fi Technology",
        "estimated_minutes": 60
    },
    {
        "id": "782d2bb5-56e1-4a93-a1db-8e62598b5987",
        "subject_id": "1f3ee25c-dff5-4fec-851f-f95e9c35673e",
        "order": 5,
        "description": "GSM/GPRS Technology",
        "estimated_minutes": 60
    },
    {
        "id": "d80bc481-a4e9-467f-bc74-1eff9baa4ceb",
        "subject_id": "1f3ee25c-dff5-4fec-851f-f95e9c35673e",
        "order": 6,
        "description": "Fundamentals of mobile telephony systems",
        "estimated_minutes": 60
    },
    {
        "id": "77c57836-3a7d-4c16-a430-f937a28b891d",
        "subject_id": "1f3ee25c-dff5-4fec-851f-f95e9c35673e",
        "order": 7,
        "description": "Design of a dedicated antenna for use in a selected radio communication system or microprocessor system for communication in a wireless computer network (WPAN or WLAN)",
        "estimated_minutes": 60
    },
    {
        "id": "02921a6c-a636-43e7-ae0b-a27ff8c81a2f",
        "subject_id": "1f3ee25c-dff5-4fec-851f-f95e9c35673e",
        "order": 8,
        "description": "RFID technology",
        "estimated_minutes": 60
    },
    {
        "id": "13e17c44-82ca-42d1-8df3-cf8235b2fee4",
        "subject_id": "1f3ee25c-dff5-4fec-851f-f95e9c35673e",
        "order": 9,
        "description": "Antennas and wave propagation",
        "estimated_minutes": 60
    },
    {
        "id": "6d32550f-d635-4c73-b97f-d8fcbca228b9",
        "subject_id": "1f3ee25c-dff5-4fec-851f-f95e9c35673e",
        "order": 10,
        "description": "Antenna measurements",
        "estimated_minutes": 60
    },
    {
        "id": "a29ba2cd-0ec4-473b-8e24-b62b5c606442",
        "subject_id": "1f3ee25c-dff5-4fec-851f-f95e9c35673e",
        "order": 11,
        "description": "Implementations of network control systems",
        "estimated_minutes": 60
    },
    {
        "id": "10f41b51-af4b-43be-a4ec-ba253fb96e4c",
        "subject_id": "1f3ee25c-dff5-4fec-851f-f95e9c35673e",
        "order": 12,
        "description": "Summary",
        "estimated_minutes": 60
    },
    {
        "id": "19874ae4-4759-47a2-bee9-f236befb2ff5",
        "subject_id": "83094699-d34c-4943-98d2-056ac97bcded",
        "order": 1,
        "description": "The use of computational intelligence methods in the problems of machine and device diagnosis (predictive maintenance, diagnosis of bearing condition, prediction of cutter damage, RUL method).",
        "estimated_minutes": 60
    },
    {
        "id": "ea6f4279-6be9-4000-81dd-947745dd3550",
        "subject_id": "83094699-d34c-4943-98d2-056ac97bcded",
        "order": 2,
        "description": "The use of computational intelligence methods in the issues of diagnosing technological processes, e.g. diagnosing the milling process, drilling.",
        "estimated_minutes": 60
    },
    {
        "id": "065bf6e4-1fe6-4c0a-85e4-e3b1c004188d",
        "subject_id": "83094699-d34c-4943-98d2-056ac97bcded",
        "order": 3,
        "description": "Adaptive systems of diagnostics and control of machines, existing industrial solutions.",
        "estimated_minutes": 60
    },
    {
        "id": "caad42b8-bca7-4128-afc7-fd3a0e90901f",
        "subject_id": "83094699-d34c-4943-98d2-056ac97bcded",
        "order": 4,
        "description": "Intelligent sensors used in the diagnostics of machines and processes. Self-diagnosis of measurement systems. Selected concepts and practical applications of artificial intelligence in diagnostics of machine tools and manufacturing processes.",
        "estimated_minutes": 60
    },
    {
        "id": "6b22f49f-378f-457f-8202-be59365daf86",
        "subject_id": "83094699-d34c-4943-98d2-056ac97bcded",
        "order": 5,
        "description": "Getting to know the working environment of the integrated production system in the field of the MCD (Mechatronic Concept Design) module. Development of conceptual models and detailed mechatronic systems. Simulation and verification of the developed models of mechatronic systems.",
        "estimated_minutes": 60
    },
    {
        "id": "bd000c7f-a192-463c-9e4d-f8075b3da6e1",
        "subject_id": "83094699-d34c-4943-98d2-056ac97bcded",
        "order": 6,
        "description": "Development of a project of a comprehensive diagnostic system for a selected component of a machine tool or manufacturing process, selection of diagnostic signals, design of a measuring path, determination of symptoms.",
        "estimated_minutes": 60
    },
    {
        "id": "4a7baa83-4e3c-4e14-8274-16808b6c3e0b",
        "subject_id": "a0161636-a395-4d37-95e1-e22385befafb",
        "order": 1,
        "description": "Introduction.",
        "estimated_minutes": 60
    },
    {
        "id": "2ab21e90-3741-4c6b-b77a-40b9dc408693",
        "subject_id": "a0161636-a395-4d37-95e1-e22385befafb",
        "order": 2,
        "description": "Elements of systems theory: history, development of the conception, known outstanding representatives.",
        "estimated_minutes": 60
    },
    {
        "id": "a282af8f-7a39-4e5b-baee-d050ec129fa0",
        "subject_id": "a0161636-a395-4d37-95e1-e22385befafb",
        "order": 3,
        "description": "Mathematical fundamentals of systems theory. Mathematical models of processes and phenomena.",
        "estimated_minutes": 60
    },
    {
        "id": "8f4b4c09-9da6-4491-a454-aa149c58751f",
        "subject_id": "a0161636-a395-4d37-95e1-e22385befafb",
        "order": 4,
        "description": "Simple and complex systems: definitions, examples, basic terms",
        "estimated_minutes": 60
    },
    {
        "id": "3e5f8723-49e9-4742-b072-21eaefd4388f",
        "subject_id": "a0161636-a395-4d37-95e1-e22385befafb",
        "order": 5,
        "description": "Modelling of simple and complex systems",
        "estimated_minutes": 60
    },
    {
        "id": "0643bb6d-fb6e-4a97-bd16-439201b608c7",
        "subject_id": "a0161636-a395-4d37-95e1-e22385befafb",
        "order": 6,
        "description": "Cryptography. Methods and categories of breaking ciphers. Basic types of ciphers. Digital signature. Safety certificates. Hash functions.",
        "estimated_minutes": 60
    },
    {
        "id": "4e0548ca-78b0-4473-a5bd-c20d67a01bcc",
        "subject_id": "a0161636-a395-4d37-95e1-e22385befafb",
        "order": 7,
        "description": "System vulnerability analysis. Tools for performing a scan.",
        "estimated_minutes": 60
    },
    {
        "id": "8bcd8147-5bac-4788-993e-22e61d0aecd8",
        "subject_id": "a0161636-a395-4d37-95e1-e22385befafb",
        "order": 8,
        "description": "Footprinting and Reconnaissance - initial gathering of information about the target of an attack.",
        "estimated_minutes": 60
    },
    {
        "id": "37078760-afe7-4a97-a59d-6eae5e52c372",
        "subject_id": "a0161636-a395-4d37-95e1-e22385befafb",
        "order": 9,
        "description": "Active polling of services / systems in order to recognize weak points in the infrastructure.",
        "estimated_minutes": 60
    },
    {
        "id": "77ab1ef0-cfb7-4648-bde6-bfa96ffa5b85",
        "subject_id": "a0161636-a395-4d37-95e1-e22385befafb",
        "order": 10,
        "description": "Social engineering attacks.",
        "estimated_minutes": 60
    },
    {
        "id": "ee8265c5-8080-42e4-afe3-faf96998f630",
        "subject_id": "a0161636-a395-4d37-95e1-e22385befafb",
        "order": 11,
        "description": "Denial-of-Service attacks.",
        "estimated_minutes": 60
    },
    {
        "id": "de7bcf8f-fb92-4d5e-9baa-f936036c0904",
        "subject_id": "a0161636-a395-4d37-95e1-e22385befafb",
        "order": 12,
        "description": "Security policy. Security models. Creation of security procedures. Measures of confidentiality and security of systems. System audit.",
        "estimated_minutes": 60
    },
    {
        "id": "6b56970a-2430-4ec9-84a8-d14e6323b129",
        "subject_id": "a0161636-a395-4d37-95e1-e22385befafb",
        "order": 13,
        "description": "IPS, IDS systems.",
        "estimated_minutes": 60
    },
    {
        "id": "3bbfe4d1-81cd-4fa3-b249-b02f4a9f5c5b",
        "subject_id": "a0161636-a395-4d37-95e1-e22385befafb",
        "order": 14,
        "description": "Some security aspects of IoT and OT technologies.",
        "estimated_minutes": 60
    },
    {
        "id": "25bd5cba-2d17-450d-a707-41aa495ee8eb",
        "subject_id": "a0161636-a395-4d37-95e1-e22385befafb",
        "order": 15,
        "description": "Incident analysis and management tools.",
        "estimated_minutes": 60
    },
    {
        "id": "ae586ee7-ce9c-4e07-9b4c-ec521e490ced",
        "subject_id": "734eac67-4cf0-4eea-9949-b6f98b1af633",
        "order": 1,
        "description": "-",
        "estimated_minutes": 60
    },
    {
        "id": "01ba09b0-0c4e-4d00-9ef5-3d958e86441e",
        "subject_id": "b69b24cb-5bf1-421e-a21f-14449a3e86ee",
        "order": 1,
        "description": "Purpose and functions of IIoT in manufacturing systems and intralogistics. Comparison of IoT, IIoT and CPS. BigData in IIoT",
        "estimated_minutes": 60
    },
    {
        "id": "1501ac78-3cd0-475c-96e1-b2eec5947146",
        "subject_id": "b69b24cb-5bf1-421e-a21f-14449a3e86ee",
        "order": 2,
        "description": "IIoT Systems Architecture",
        "estimated_minutes": 60
    },
    {
        "id": "d6cda9df-1ef1-4097-9e9f-3807821f8096",
        "subject_id": "b69b24cb-5bf1-421e-a21f-14449a3e86ee",
        "order": 3,
        "description": "Elements of manufacturing systems as IIoT objects. Communication protocols used in the IIoT",
        "estimated_minutes": 60
    },
    {
        "id": "95693166-a4fb-4289-a39b-1ddb8f88c7d3",
        "subject_id": "b69b24cb-5bf1-421e-a21f-14449a3e86ee",
        "order": 4,
        "description": "Examples of industrial applications and IIoT systems",
        "estimated_minutes": 60
    },
    {
        "id": "2739147b-7489-4ceb-bbd3-7981b18d7a25",
        "subject_id": "b69b24cb-5bf1-421e-a21f-14449a3e86ee",
        "order": 5,
        "description": "Areas of IIoT development",
        "estimated_minutes": 60
    },
    {
        "id": "1edccfa5-ad00-4cc7-8bfe-7b5305e59575",
        "subject_id": "5794c2c6-9073-4e9b-a0d3-251a1fe9e32a",
        "order": 1,
        "description": "Formal and editorial requirements of the thesis. The structure of work, the content of the sections and subsections.",
        "estimated_minutes": 60
    },
    {
        "id": "934be0f0-3eef-4ba9-9fde-1f42fe1f48b8",
        "subject_id": "5794c2c6-9073-4e9b-a0d3-251a1fe9e32a",
        "order": 2,
        "description": "The rules for creating theoretical and practical work.",
        "estimated_minutes": 60
    },
    {
        "id": "7fb9f50b-efe3-482f-ad4d-e878588cd84a",
        "subject_id": "5794c2c6-9073-4e9b-a0d3-251a1fe9e32a",
        "order": 3,
        "description": "Presentation of the theoretical part of the thesis. Create a table of contents, thesis, purpose, scope.",
        "estimated_minutes": 60
    },
    {
        "id": "258b69ec-1936-4b83-8adf-c150d84a0e47",
        "subject_id": "5794c2c6-9073-4e9b-a0d3-251a1fe9e32a",
        "order": 1,
        "description": "Discussion of the principles of the thesis presentation on the practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "20168307-b77d-4139-9a51-dddd07d0cd7f",
        "subject_id": "5794c2c6-9073-4e9b-a0d3-251a1fe9e32a",
        "order": 2,
        "description": "Presentations of thesis practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "27419b2d-d1d7-4eff-b52c-32a9b100de07",
        "subject_id": "e1d8ac75-409e-43a0-901a-2d8941b4137f",
        "order": 1,
        "description": "Image processing and analysis. Object recognition techniques using global and local features. Searching and retrieving images from large databases.",
        "estimated_minutes": 60
    },
    {
        "id": "fa169b06-6683-46b1-9a44-541de41cc53b",
        "subject_id": "e1d8ac75-409e-43a0-901a-2d8941b4137f",
        "order": 2,
        "description": "Industry 4.0 idea and application of IT, automation and robotics technologies.",
        "estimated_minutes": 60
    },
    {
        "id": "7db80232-1b1c-4bb1-9f52-e8794c41d473",
        "subject_id": "e1d8ac75-409e-43a0-901a-2d8941b4137f",
        "order": 3,
        "description": "Selected methods of optimisation: linear and non-linear programming, metaheuristics. Production scheduling. Computer tools for optimisation and scheduling.",
        "estimated_minutes": 60
    },
    {
        "id": "b692c280-06ab-4d37-8e93-aa0801f718d1",
        "subject_id": "efc5bf1f-f3c9-4e3e-b8ca-0526a6b7056c",
        "order": 1,
        "description": "The role of metrology of geometric quantities in the modern production process.",
        "estimated_minutes": 60
    },
    {
        "id": "c3dd1849-1083-4de7-a586-1db7181ae1e1",
        "subject_id": "efc5bf1f-f3c9-4e3e-b8ca-0526a6b7056c",
        "order": 2,
        "description": "Coordinate measurements in the production process. The essence of the coordinate measuring technique. Overview of contact and non-contact automated measuring systems.",
        "estimated_minutes": 60
    },
    {
        "id": "7ec6377d-d010-4320-96dd-2377eacabe0f",
        "subject_id": "efc5bf1f-f3c9-4e3e-b8ca-0526a6b7056c",
        "order": 3,
        "description": "The fundamentals of the coordinate measuring technique in the field of, among others, stages of contact and non-contact coordinate measurements and programming methods of coordinate measuring systems.",
        "estimated_minutes": 60
    },
    {
        "id": "8d57e489-199f-439f-b7a4-5f8c5fd5b6aa",
        "subject_id": "efc5bf1f-f3c9-4e3e-b8ca-0526a6b7056c",
        "order": 4,
        "description": "The accuracy analysis of measuring systems. Factors influencing measurement results.",
        "estimated_minutes": 60
    },
    {
        "id": "f47f45c6-233e-4771-b656-5305bed8a8e4",
        "subject_id": "efc5bf1f-f3c9-4e3e-b8ca-0526a6b7056c",
        "order": 5,
        "description": "The analysis of repeatability and reproducibility of measuring systems.",
        "estimated_minutes": 60
    },
    {
        "id": "430f958e-2a19-4e3e-9a33-603a8a1ab7fe",
        "subject_id": "efc5bf1f-f3c9-4e3e-b8ca-0526a6b7056c",
        "order": 6,
        "description": "Contact and non-contact roughness measurements by using automated measuring systems. Roughness parameters.",
        "estimated_minutes": 60
    },
    {
        "id": "380e42a0-0788-45eb-9a9e-8b5acf00cda2",
        "subject_id": "efc5bf1f-f3c9-4e3e-b8ca-0526a6b7056c",
        "order": 7,
        "description": "The digitization of objects with complex geometric shapes.",
        "estimated_minutes": 60
    },
    {
        "id": "fabbe151-8d30-4c07-939a-7358ceaec7f7",
        "subject_id": "efc5bf1f-f3c9-4e3e-b8ca-0526a6b7056c",
        "order": 8,
        "description": "Measurements of geometric quantities on CNC machine tools (On Machine Measurement).",
        "estimated_minutes": 60
    },
    {
        "id": "ec7aabe9-fc8b-4e57-a47a-38d582c04590",
        "subject_id": "efc5bf1f-f3c9-4e3e-b8ca-0526a6b7056c",
        "order": 9,
        "description": "Fundamentals of operation of a coordinate measuring machine equipped with contact probes. Measurements in single-point probing and scanning modes.",
        "estimated_minutes": 60
    },
    {
        "id": "4a2f966c-029e-4d71-8a14-1a9507d63874",
        "subject_id": "efc5bf1f-f3c9-4e3e-b8ca-0526a6b7056c",
        "order": 10,
        "description": "Fundamentals of operation of a coordinate measuring machine equipped with a laser probe.",
        "estimated_minutes": 60
    },
    {
        "id": "4fdcd996-8a16-405b-8188-2f27cbf3f657",
        "subject_id": "efc5bf1f-f3c9-4e3e-b8ca-0526a6b7056c",
        "order": 11,
        "description": "Fundamentals of operation of a measuring arm equipped with a laser probe.",
        "estimated_minutes": 60
    },
    {
        "id": "b4366b46-74fb-4544-8f42-01c805033269",
        "subject_id": "efc5bf1f-f3c9-4e3e-b8ca-0526a6b7056c",
        "order": 12,
        "description": "The non-contact digitization of products consisting of curvilinear surfaces by using a CMM equipped with a laser probe. The analysis of digitization results.",
        "estimated_minutes": 60
    },
    {
        "id": "0b034b00-3b39-4305-bffa-65778ec6d8aa",
        "subject_id": "efc5bf1f-f3c9-4e3e-b8ca-0526a6b7056c",
        "order": 13,
        "description": "Off-line programming of a coordinate measuring machine.",
        "estimated_minutes": 60
    },
    {
        "id": "12ef4628-0623-4ad8-aff5-5587b5fddb91",
        "subject_id": "efc5bf1f-f3c9-4e3e-b8ca-0526a6b7056c",
        "order": 14,
        "description": "Contact and non-contact roughness measurements.",
        "estimated_minutes": 60
    },
    {
        "id": "e3a4b7d4-bc6d-45c5-8432-d467f5f029f5",
        "subject_id": "efc5bf1f-f3c9-4e3e-b8ca-0526a6b7056c",
        "order": 15,
        "description": "Measurements of deviations of typical geometric elements and the analysis of measurement results.",
        "estimated_minutes": 60
    },
    //WEiI - ACR - SPEC - Computer control system
    {
        "id": "5ecf0921-13b9-4346-91db-88b932598fe1",
        "subject_id": "91f85c19-d24c-4e52-92ec-58790a340b04",
        "order": 1,
        "description": "Overview of applications of the artificial intelligence methods in industrial control systems.",
        "estimated_minutes": 60
    },
    {
        "id": "ac04a1ae-f8c2-44c5-be95-60548a0eaea2",
        "subject_id": "91f85c19-d24c-4e52-92ec-58790a340b04",
        "order": 2,
        "description": "Introduction to the theory of fuzzy sets. Logical operators in multi-valued logics.",
        "estimated_minutes": 60
    },
    {
        "id": "3bd7cd69-7ec2-44e6-95c1-cc3b92bca127",
        "subject_id": "91f85c19-d24c-4e52-92ec-58790a340b04",
        "order": 3,
        "description": "Generalized fuzzy expert system. The fuzzy controllers of Takagi-Sugeno and Mamdani type.",
        "estimated_minutes": 60
    },
    {
        "id": "57201bab-8c8b-4ecc-94f6-68008bb3b963",
        "subject_id": "91f85c19-d24c-4e52-92ec-58790a340b04",
        "order": 4,
        "description": "Selected problems of the analytical theory of fuzzy modelling and control - the relation between the models of conventional control theory and rule-based systems.",
        "estimated_minutes": 60
    },
    {
        "id": "7671fd3e-7ca3-4bdb-9894-946eb3be997d",
        "subject_id": "91f85c19-d24c-4e52-92ec-58790a340b04",
        "order": 5,
        "description": "Synthesis of the fuzzy PID controller for the 2nd order plant by the conventional quality index.",
        "estimated_minutes": 60
    },
    {
        "id": "303a02b5-56b5-48cf-8a12-49856c22931b",
        "subject_id": "91f85c19-d24c-4e52-92ec-58790a340b04",
        "order": 6,
        "description": "A neuro-fuzzy navigation system for a mobile robot.",
        "estimated_minutes": 60
    },
    {
        "id": "5c004400-1d52-4221-9b00-22eed0f3c5d2",
        "subject_id": "91f85c19-d24c-4e52-92ec-58790a340b04",
        "order": 7,
        "description": "Synthesis and analysis of a closed-loop neuro-fuzzy control system for structurally unstable plant.",
        "estimated_minutes": 60
    },
    {
        "id": "af39ba65-1187-475e-a445-b68002e4bd6f",
        "subject_id": "91f85c19-d24c-4e52-92ec-58790a340b04",
        "order": 8,
        "description": "Fuzzy Petri net as a control and diagnostic system for a complex technological process.",
        "estimated_minutes": 60
    },
    {
        "id": "9c27c59f-7ae0-4a72-a70d-5d68c1c3eec0",
        "subject_id": "91f85c19-d24c-4e52-92ec-58790a340b04",
        "order": 9,
        "description": "The use of gene expression programming technique for the control system design.",
        "estimated_minutes": 60
    },
    {
        "id": "07d34097-8800-4578-928f-2c2f54dd13b5",
        "subject_id": "91f85c19-d24c-4e52-92ec-58790a340b04",
        "order": 10,
        "description": "Application of reinforced learning methods in control systems design.",
        "estimated_minutes": 60
    },
    {
        "id": "ec25bd7d-a221-4d2f-852e-776e3c2b4752",
        "subject_id": "91f85c19-d24c-4e52-92ec-58790a340b04",
        "order": 11,
        "description": "Adaptive neuro-fuzzy contreller design.",
        "estimated_minutes": 60
    },
    {
        "id": "c74e5932-a6e2-4e8c-af80-efed022f2315",
        "subject_id": "fe30213f-c6bf-43bb-ace3-6c5357bac031",
        "order": 1,
        "description": "implementation of the data layer of an information system",
        "estimated_minutes": 60
    },
    {
        "id": "a1faea5c-4a7a-40c5-b9fd-c2c5db0d15f5",
        "subject_id": "fe30213f-c6bf-43bb-ace3-6c5357bac031",
        "order": 2,
        "description": "The characteristic of selected technologies (Java EE, .NET, Ruby on Rails, embedded systems)",
        "estimated_minutes": 60
    },
    {
        "id": "b8c3bcdd-ef71-4f11-9a48-7ea5cb61fa52",
        "subject_id": "fe30213f-c6bf-43bb-ace3-6c5357bac031",
        "order": 3,
        "description": "implementation of the business layer of an information system",
        "estimated_minutes": 60
    },
    {
        "id": "3708b369-39cf-4bed-bf4e-ac83f7beae4e",
        "subject_id": "fe30213f-c6bf-43bb-ace3-6c5357bac031",
        "order": 4,
        "description": "implementation of the GUI of an information system",
        "estimated_minutes": 60
    },
    {
        "id": "a09d2ccc-88be-4ca7-bfc1-bcfcc6ab144a",
        "subject_id": "fe30213f-c6bf-43bb-ace3-6c5357bac031",
        "order": 5,
        "description": "development of embedded systems",
        "estimated_minutes": 60
    },
    {
        "id": "cb66ded4-d211-4163-9fce-cb2007554e1b",
        "subject_id": "fe30213f-c6bf-43bb-ace3-6c5357bac031",
        "order": 6,
        "description": "realization of a project task using selected technology",
        "estimated_minutes": 60
    },
    {
        "id": "41ea734e-a5ed-4cf5-bf6e-5727443bbb06",
        "subject_id": "a05502a6-a6d2-4502-8bb4-98eabf965185",
        "order": 1,
        "description": "Technical and engineering problems occurring at the place of the summer practice , and the basic principles of the organization and safety of work. Also, the basic rights and duties of the employee.",
        "estimated_minutes": 60
    },
    {
        "id": "b3b08e6a-5dba-43a8-b3c8-1e1fcec7ce99",
        "subject_id": "ec7d5240-7ef7-4397-8c9e-03e15d5f49ed",
        "order": 1,
        "description": "Real-time systems characteristics. Real-time and safety-critical applications. Hard and soft time constraints.",
        "estimated_minutes": 60
    },
    {
        "id": "757f6497-794d-4be7-8b12-404e187ca318",
        "subject_id": "ec7d5240-7ef7-4397-8c9e-03e15d5f49ed",
        "order": 2,
        "description": "Real-time application life cycle. Real-time system development. Design and implementation tools. Specification of real-time software. Engineering and formal methods. Universal and dedicated programming languages. Host-target architecture.",
        "estimated_minutes": 60
    },
    {
        "id": "b6cdf0ab-4f93-44ad-ab74-d18b8b26bc7e",
        "subject_id": "ec7d5240-7ef7-4397-8c9e-03e15d5f49ed",
        "order": 3,
        "description": "Concept of a process. Process priority. Interrupt handling. Scheduling algorithms. CPU utilization. Process life cycle.",
        "estimated_minutes": 60
    },
    {
        "id": "5fcccc65-abca-42c3-8a41-4aeb0ea46f39",
        "subject_id": "ec7d5240-7ef7-4397-8c9e-03e15d5f49ed",
        "order": 4,
        "description": "Real-time operating systems (RTOS). Characteristics and requirements. Similarities and differences between RTOS and regular operating system. POSIX standard. QNX operating system. Microkernel architecture. Review of other real-time operating systems: VxWork, Windows CE .NET, RTLinux, FreeRTOS.",
        "estimated_minutes": 60
    },
    {
        "id": "7550a7e9-94f8-42d4-8bc4-f2171f8acc27",
        "subject_id": "ec7d5240-7ef7-4397-8c9e-03e15d5f49ed",
        "order": 5,
        "description": "Inter-process communication and synchronization. Message passing and rendez-vous. Process state changes during message-passing. Semaphores and signals. Execution of concurrent processes and threads. Fuctions: exec(), spawn(), fork(), tfork(), qnx_spawn(), system().",
        "estimated_minutes": 60
    },
    {
        "id": "ec232ae2-e7d4-4462-9a3c-ac6de35ab9aa",
        "subject_id": "ec7d5240-7ef7-4397-8c9e-03e15d5f49ed",
        "order": 6,
        "description": "Modification of process properties (priority, scheduling algorithm). Client-server application design principles. Interrupt handling in QNX. TIme support. Processes in a distributed environment. Virtual circuits. Global names.",
        "estimated_minutes": 60
    },
    {
        "id": "42e58587-98aa-4e8d-8b75-9502eee0e4b0",
        "subject_id": "2a9f8192-de59-4686-bf70-ff6e44b3005d",
        "order": 1,
        "description": "Introduction to PLC and PAC programming. The ladder diagram (LD) language.",
        "estimated_minutes": 60
    },
    {
        "id": "7ff37c5c-c421-48cb-8bbb-7bd07b9e23ef",
        "subject_id": "2a9f8192-de59-4686-bf70-ff6e44b3005d",
        "order": 2,
        "description": "Synthesis of control algorithms, part I (state machine graphs, state encoding methods: full encoding and one-hot encoding, LD language implementation)",
        "estimated_minutes": 60
    },
    {
        "id": "953d1143-5537-4ca7-82f9-0c25a5d6dafc",
        "subject_id": "2a9f8192-de59-4686-bf70-ff6e44b3005d",
        "order": 3,
        "description": "The IEC 61131-3 standard. Software development rules, program structure, variable declarations, etc. Program organization units: functions, function blocks, programs. Data types and variables.",
        "estimated_minutes": 60
    },
    {
        "id": "d3e588a8-1ebe-4184-bd7a-75ba327123f4",
        "subject_id": "2a9f8192-de59-4686-bf70-ff6e44b3005d",
        "order": 4,
        "description": "PLC programming languages: instruction list (IL), function block diagram (FBD), structure text (ST",
        "estimated_minutes": 60
    },
    {
        "id": "b177d355-c2e1-4faf-ae05-a8826cfacd16",
        "subject_id": "2a9f8192-de59-4686-bf70-ff6e44b3005d",
        "order": 5,
        "description": "Synthesis of control algorithms, part II: concurrent processes (Petri nets, state machine graphs synchronization, implementation in the PLC programming languages).",
        "estimated_minutes": 60
    },
    {
        "id": "e2df5b6a-0ddc-4af8-89f5-92786edb5c31",
        "subject_id": "2a9f8192-de59-4686-bf70-ff6e44b3005d",
        "order": 6,
        "description": "Sequential function chart (SFC). Selected PLC and PAC controllers, programming and features.",
        "estimated_minutes": 60
    },
    {
        "id": "095e2547-d854-4c37-9e66-cfb6775160e6",
        "subject_id": "2a9f8192-de59-4686-bf70-ff6e44b3005d",
        "order": 7,
        "description": "Practical programming of selected PLCs.",
        "estimated_minutes": 60
    },
    {
        "id": "4f1f55eb-8d82-4c87-b708-ae8ea49f38a7",
        "subject_id": "863a6542-7094-437c-8fb5-06f85ef59fbe",
        "order": 1,
        "description": "Relational databases. Database examples. Relational database example. Database languages: DDL, DML, DCL, QL. Operations on relations: section, projection, join, union.",
        "estimated_minutes": 60
    },
    {
        "id": "6a207923-460b-45e0-aa85-9c4559b992cc",
        "subject_id": "863a6542-7094-437c-8fb5-06f85ef59fbe",
        "order": 2,
        "description": "Principles of database design. Data modeling. Creating relational database scheme from entity relationship diagram.",
        "estimated_minutes": 60
    },
    {
        "id": "75d47952-aaf1-4c65-9de7-509a8618d4a8",
        "subject_id": "863a6542-7094-437c-8fb5-06f85ef59fbe",
        "order": 3,
        "description": "Creation and modification of database scheme. Instructions for data manipulation. Table creation. Data types. Integrity constraints and validation. Inserting data. Updating and deleting.",
        "estimated_minutes": 60
    },
    {
        "id": "6d1196d8-70d4-4045-9b6f-18fe06f05ca0",
        "subject_id": "863a6542-7094-437c-8fb5-06f85ef59fbe",
        "order": 4,
        "description": "Simple SELECT queries. Data retrieval - WHERE caluse. Results ordering. Row grouping.",
        "estimated_minutes": 60
    },
    {
        "id": "3566aa8c-467f-4cc8-9eba-c20d34f0ef3b",
        "subject_id": "863a6542-7094-437c-8fb5-06f85ef59fbe",
        "order": 5,
        "description": "Vertical relation joining. Specification of join conditions. JOIN clause. Horizontal joins: UNION, INTERSECT, MINUS. Creating subqueries. Correlated and not correlated mode. Single-row functions. Aggregate functions.",
        "estimated_minutes": 60
    },
    {
        "id": "c030adb4-4aa7-48a6-9338-744c39fb79f0",
        "subject_id": "863a6542-7094-437c-8fb5-06f85ef59fbe",
        "order": 6,
        "description": "Industrial databases - characteristics, applications. TIme-stamp concept. Cooperation with SCADA systems. OPC mechanism.Protection against SQL Injection attacks.",
        "estimated_minutes": 60
    },
    {
        "id": "626f4acd-347c-444b-a248-c18bcc7550cf",
        "subject_id": "3277898e-3125-456e-b0be-310f2fb8f73d",
        "order": 1,
        "description": "Organizational class. Presentingthe scope of the material and determing the form of credit classes. Familiarizing with the work rule in the laboratory. Low-level network protocols. LAN and WAN. OSI and TCP/IP models. Layers of models.",
        "estimated_minutes": 60
    },
    {
        "id": "a768187f-09b5-4e50-a100-587663950816",
        "subject_id": "3277898e-3125-456e-b0be-310f2fb8f73d",
        "order": 2,
        "description": "The TCP/IP protocol in 4 and 6 versions: the structure of an IP datagram, segmentation of datagrams, addressing scheme, IP and Ethernet, routing in networks with IP, bandwidth reservation mechanism, quality of service in the network with IP protocol, VoIP technologies in the network with IP protocol.",
        "estimated_minutes": 60
    },
    {
        "id": "425d55cb-4f96-45fe-9386-dfa14fbb7b4c",
        "subject_id": "3277898e-3125-456e-b0be-310f2fb8f73d",
        "order": 3,
        "description": "Network devices (active, passive). Selected network devices (switch, router). Routing in computer networks.",
        "estimated_minutes": 60
    },
    {
        "id": "c03ad92d-2d95-45f5-be9e-0bc56594a21b",
        "subject_id": "3277898e-3125-456e-b0be-310f2fb8f73d",
        "order": 4,
        "description": "Transmission media (Twisted pair, optical fiber, wireless networks). Network cabling.",
        "estimated_minutes": 60
    },
    {
        "id": "3424ce53-f408-43ed-a94b-e7e878cdd994",
        "subject_id": "3277898e-3125-456e-b0be-310f2fb8f73d",
        "order": 5,
        "description": "Security of computer networks.",
        "estimated_minutes": 60
    },
    {
        "id": "83f6083d-cf39-4881-915f-a7402e03bcf0",
        "subject_id": "3277898e-3125-456e-b0be-310f2fb8f73d",
        "order": 6,
        "description": "Services (DHCP, DNS, FTP, SMTP, POP3, IMAP).",
        "estimated_minutes": 60
    },
    {
        "id": "0e335067-1d91-4101-b9bd-659ec6404cfa",
        "subject_id": "3277898e-3125-456e-b0be-310f2fb8f73d",
        "order": 7,
        "description": "Linux operating system",
        "estimated_minutes": 60
    },
    {
        "id": "4022be1e-991a-426c-aad2-6e16bd0ba449",
        "subject_id": "14782710-d330-4b0d-af1e-ede284228c00",
        "order": 1,
        "description": "Discussion of combinational circuits description methods, as well methods of their minimization. Analysis of logic gates manufactured in differrent technologies. Review of combinational functional modules (multipleksers, demultipleksers, coders, decoders, transcoders) and their usage in digital circuits designing.",
        "estimated_minutes": 60
    },
    {
        "id": "d158adea-be82-4237-8be2-6efafa36a576",
        "subject_id": "14782710-d330-4b0d-af1e-ede284228c00",
        "order": 2,
        "description": "Review of sequenctial circuits including bistable digital triggers, registers, counters, memories",
        "estimated_minutes": 60
    },
    {
        "id": "efa451db-9ee1-4c49-8a97-22d0bdf7ba36",
        "subject_id": "14782710-d330-4b0d-af1e-ede284228c00",
        "order": 3,
        "description": "Combinational circuits synthesis",
        "estimated_minutes": 60
    },
    {
        "id": "3af2d01d-95da-4b97-8197-fc9bbc559eda",
        "subject_id": "14782710-d330-4b0d-af1e-ede284228c00",
        "order": 4,
        "description": "Sequential circuits synthesis",
        "estimated_minutes": 60
    },
    {
        "id": "9d7c11c0-f453-47fc-8501-1917b1420238",
        "subject_id": "14782710-d330-4b0d-af1e-ede284228c00",
        "order": 5,
        "description": "Programmable logic devices and methods of digital circuits testing",
        "estimated_minutes": 60
    },
    {
        "id": "c8f6dbc9-2f81-4298-b55f-1521563bd733",
        "subject_id": "e3300d3c-866e-4224-8f68-4b124af05e48",
        "order": 1,
        "description": "Basic notions, methods, tools and current development trends in the field of mechatronics and rapid control prototyping",
        "estimated_minutes": 60
    },
    {
        "id": "8026f55d-052d-4b51-82b2-237c7c877304",
        "subject_id": "e3300d3c-866e-4224-8f68-4b124af05e48",
        "order": 2,
        "description": "Virtual and rapid control prototyping, case study - servomechanism",
        "estimated_minutes": 60
    },
    {
        "id": "6f73bc1c-964c-4ea3-ab4b-feb87b0ec595",
        "subject_id": "e3300d3c-866e-4224-8f68-4b124af05e48",
        "order": 3,
        "description": "Virtual and rapid control prototyping, case study - tower crane",
        "estimated_minutes": 60
    },
    {
        "id": "41a55e4b-e5b8-4f94-9c82-f648e365149e",
        "subject_id": "e3300d3c-866e-4224-8f68-4b124af05e48",
        "order": 4,
        "description": "Virtual and rapid control prototyping, case study - helicopter",
        "estimated_minutes": 60
    },
    {
        "id": "27a1d988-7aeb-420d-b6a0-3a5c08b44262",
        "subject_id": "ad2fad00-b038-4f30-8827-5551463f06c8",
        "order": 1,
        "description": "Introduction, idea of ​​FEM methods, the importance of FEM methods",
        "estimated_minutes": 60
    },
    {
        "id": "53094c7b-348e-43a1-95a0-0078265f4f9b",
        "subject_id": "ad2fad00-b038-4f30-8827-5551463f06c8",
        "order": 2,
        "description": "Rigid body and flexible body. Classification and types of flexible bodies. Linear body, planar and volumetric bodies. Selected properties of elastic bodies. Examples.",
        "estimated_minutes": 60
    },
    {
        "id": "d877cfb5-b9ca-4aad-ad90-b9e6316c8cae",
        "subject_id": "ad2fad00-b038-4f30-8827-5551463f06c8",
        "order": 3,
        "description": "Mathematical models of elastic bodies. Spatial discretization of physical phenomena. Discretization of time. The idea of ​​simplifying the model. Mass-spring-damper model.",
        "estimated_minutes": 60
    },
    {
        "id": "72132143-3104-4908-b060-3ff6aec95d65",
        "subject_id": "ad2fad00-b038-4f30-8827-5551463f06c8",
        "order": 4,
        "description": "Motion simulation of FEM objects, field of the forces, objects motions in a force field, . Numerical methods for FEM methods, numerical integration methods for the FEM models, stability of numerical methods, accuracy of the calculations, method selection.",
        "estimated_minutes": 60
    },
    {
        "id": "c692f8e2-1c65-425e-824e-42663439fac2",
        "subject_id": "ad2fad00-b038-4f30-8827-5551463f06c8",
        "order": 5,
        "description": "Motion modeling of selected flexible body, the MST- type object application, Simulation of surgical thread in a sewing phase.",
        "estimated_minutes": 60
    },
    {
        "id": "f0e16bd4-8d9a-4804-9ba4-7f9af86d76e1",
        "subject_id": "ad2fad00-b038-4f30-8827-5551463f06c8",
        "order": 6,
        "description": "Analysis of rigid body contact with the flexible body, the contact phases, modeling of dynamic responses, limitations of the motion.",
        "estimated_minutes": 60
    },
    {
        "id": "52eaa57d-fdbb-49e5-b82f-54751617b7cb",
        "subject_id": "0e4b1203-c86a-40eb-9d83-76a9d4b94ba5",
        "order": 1,
        "description": "An introduction to the lecture and laboratory. Presentation of the rules for cooperation. Assignment of subjects to self-develop and deliver. Establishing rules for the course credit. Passing the current list of source materials on to students.",
        "estimated_minutes": 60
    },
    {
        "id": "bc61f6f4-1960-40ec-9635-ac06773c23b7",
        "subject_id": "0e4b1203-c86a-40eb-9d83-76a9d4b94ba5",
        "order": 2,
        "description": "Types and methods of doing business in Poland.",
        "estimated_minutes": 60
    },
    {
        "id": "3fcf3f02-f056-4eb1-a345-009ac66575f9",
        "subject_id": "0e4b1203-c86a-40eb-9d83-76a9d4b94ba5",
        "order": 3,
        "description": "Projects. Writing an employment contract, a contract for specific work, a mandate contract, issuing an invoice - discussed individually during classes",
        "estimated_minutes": 60
    },
    {
        "id": "de452714-2641-438b-95a4-0a11aa100fe6",
        "subject_id": "0e4b1203-c86a-40eb-9d83-76a9d4b94ba5",
        "order": 4,
        "description": "Business model analysis Commercial law companies Establishing a commercial law company using the eKRS platform Funding for opening a business",
        "estimated_minutes": 60
    },
    {
        "id": "12b332c0-97a5-4e3e-a7ab-621554b8f74a",
        "subject_id": "0e4b1203-c86a-40eb-9d83-76a9d4b94ba5",
        "order": 5,
        "description": "Preparation of SWOT, Business Model Canvas for your own business idea",
        "estimated_minutes": 60
    },
    {
        "id": "2578584a-ada9-4bfb-b2b3-bdf01002ccb6",
        "subject_id": "0e4b1203-c86a-40eb-9d83-76a9d4b94ba5",
        "order": 6,
        "description": "Sole proprietorship: tax office - forms of taxation Sole proprietorship: ZUS CEIDG-1 Practical aspects of running your own business",
        "estimated_minutes": 60
    },
    {
        "id": "3421769a-4f72-473e-b654-6adf897c8486",
        "subject_id": "0e4b1203-c86a-40eb-9d83-76a9d4b94ba5",
        "order": 7,
        "description": "Application for funding for starting a business from UP",
        "estimated_minutes": 60
    },
    {
        "id": "a68d3552-e792-45a1-a666-629a5eee0903",
        "subject_id": "d5dfd946-19ab-42af-b9ca-c7f93fa2bf96",
        "order": 1,
        "description": "Introduction to Verilog Hardware Description Language",
        "estimated_minutes": 60
    },
    {
        "id": "7ff0f70c-a38c-4cbb-9b44-dab4768e62c3",
        "subject_id": "d5dfd946-19ab-42af-b9ca-c7f93fa2bf96",
        "order": 2,
        "description": "Basics of digital circuit simulation",
        "estimated_minutes": 60
    },
    {
        "id": "e71a8d21-ed4c-458f-9ae8-fc5db2f36a96",
        "subject_id": "d5dfd946-19ab-42af-b9ca-c7f93fa2bf96",
        "order": 3,
        "description": "Combinatorial circuit description",
        "estimated_minutes": 60
    },
    {
        "id": "7d037bbc-d422-4f63-94a0-4eef673ecb90",
        "subject_id": "d5dfd946-19ab-42af-b9ca-c7f93fa2bf96",
        "order": 4,
        "description": "Sequential circuit description and concurrent processes",
        "estimated_minutes": 60
    },
    {
        "id": "198c44d0-6d12-42c9-a5c1-741c9eac84c3",
        "subject_id": "d5dfd946-19ab-42af-b9ca-c7f93fa2bf96",
        "order": 5,
        "description": "Design and implementation examples of selected digital circuits",
        "estimated_minutes": 60
    },
    {
        "id": "47d22756-202c-4d5b-953a-e5ffc07dfb5f",
        "subject_id": "d5dfd946-19ab-42af-b9ca-c7f93fa2bf96",
        "order": 6,
        "description": "Embedded microprocessors",
        "estimated_minutes": 60
    },
    {
        "id": "bd338f9f-5955-4574-98cd-a8c641118741",
        "subject_id": "edaf238d-a700-4fd8-bb62-59d3529046c5",
        "order": 1,
        "description": "Basic issues of mobile robotics, types of robots.",
        "estimated_minutes": 60
    },
    {
        "id": "3b162584-ff06-491c-be8c-ef2fe05a0938",
        "subject_id": "edaf238d-a700-4fd8-bb62-59d3529046c5",
        "order": 2,
        "description": "Nonlinear differential equations. Fundamentals of kinematics of wheel robots.",
        "estimated_minutes": 60
    },
    {
        "id": "81f883ab-7d70-4757-8115-0a16cdc95999",
        "subject_id": "edaf238d-a700-4fd8-bb62-59d3529046c5",
        "order": 3,
        "description": "Kinematics of a nonholonomic robot. Open-loop and closed-loop control.",
        "estimated_minutes": 60
    },
    {
        "id": "a3c036fb-880d-4b0e-82d3-1d566e84753a",
        "subject_id": "edaf238d-a700-4fd8-bb62-59d3529046c5",
        "order": 4,
        "description": "Kinematics of a holonomic robot. Open-loop control.",
        "estimated_minutes": 60
    },
    {
        "id": "a602bbf5-984b-4d86-a4a6-b0d9fde876c2",
        "subject_id": "edaf238d-a700-4fd8-bb62-59d3529046c5",
        "order": 5,
        "description": "Pioneer 3-AT wheel robot. Programming robots using the ARIA library. Processing information from sensors.",
        "estimated_minutes": 60
    },
    {
        "id": "5c2c61e5-ddab-460b-8701-41a6c2b1be52",
        "subject_id": "edaf238d-a700-4fd8-bb62-59d3529046c5",
        "order": 6,
        "description": "Mobile Robot Operating System (ROS).",
        "estimated_minutes": 60
    },
    {
        "id": "f8682ee1-061a-4672-905d-302c10ea8aaf",
        "subject_id": "edaf238d-a700-4fd8-bb62-59d3529046c5",
        "order": 7,
        "description": "Application of computer vision and artificial intelligence methods in robotics.",
        "estimated_minutes": 60
    },
    {
        "id": "cd2d2469-355d-403c-9132-1b76fd115b74",
        "subject_id": "edaf238d-a700-4fd8-bb62-59d3529046c5",
        "order": 8,
        "description": "Methods of localization and navigation for mobile robots.",
        "estimated_minutes": 60
    },
    {
        "id": "7a31c341-b038-4a4b-9961-37ffec9e9f80",
        "subject_id": "b00ce108-7f42-4374-9b60-90c346f6e244",
        "order": 1,
        "description": "Formal and editorial requirements of the thesis. The structure of work, the content of the sections and subsections.",
        "estimated_minutes": 60
    },
    {
        "id": "2c86b1a0-7a0f-4f67-8574-dd56ec892d5b",
        "subject_id": "b00ce108-7f42-4374-9b60-90c346f6e244",
        "order": 2,
        "description": "The rules for creating theoretical and practical work.",
        "estimated_minutes": 60
    },
    {
        "id": "00500f46-d04f-48f6-8782-cec7210fffb3",
        "subject_id": "b00ce108-7f42-4374-9b60-90c346f6e244",
        "order": 3,
        "description": "Presentation of the theoretical part of the thesis. Create a table of contents, thesis, purpose, scope.",
        "estimated_minutes": 60
    },
    {
        "id": "9dac303c-ef11-4457-a913-f72362111ab9",
        "subject_id": "b00ce108-7f42-4374-9b60-90c346f6e244",
        "order": 1,
        "description": "Discussion of the principles of the thesis presentation on the practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "e72b202f-fe08-4131-bb8d-f41b2490aec3",
        "subject_id": "b00ce108-7f42-4374-9b60-90c346f6e244",
        "order": 2,
        "description": "Presentations of thesis practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "2a475e98-2b1d-4a60-8972-54a5e69eeb40",
        "subject_id": "50f7bee4-bafb-45b9-9fc9-1ef2ddc72753",
        "order": 1,
        "description": "Antennas and propagation of radio waves in the telecommunication channel",
        "estimated_minutes": 60
    },
    {
        "id": "d7b7c9fb-c406-4101-8ad7-1c2038ce624a",
        "subject_id": "50f7bee4-bafb-45b9-9fc9-1ef2ddc72753",
        "order": 2,
        "description": "ZigBee Technology",
        "estimated_minutes": 60
    },
    {
        "id": "b9478ceb-876e-452f-9cd3-62a361422453",
        "subject_id": "50f7bee4-bafb-45b9-9fc9-1ef2ddc72753",
        "order": 3,
        "description": "Bluetooth Technology",
        "estimated_minutes": 60
    },
    {
        "id": "86875281-f7b6-491d-b3de-567ce199a6e6",
        "subject_id": "50f7bee4-bafb-45b9-9fc9-1ef2ddc72753",
        "order": 4,
        "description": "Wi-Fi Technology",
        "estimated_minutes": 60
    },
    {
        "id": "b59b282d-3e55-44b0-ae70-194c516011b3",
        "subject_id": "50f7bee4-bafb-45b9-9fc9-1ef2ddc72753",
        "order": 5,
        "description": "GSM/GPRS Technology",
        "estimated_minutes": 60
    },
    {
        "id": "9ab2ec02-002b-493e-8a5a-14f7cd502b77",
        "subject_id": "50f7bee4-bafb-45b9-9fc9-1ef2ddc72753",
        "order": 6,
        "description": "Fundamentals of mobile telephony systems",
        "estimated_minutes": 60
    },
    {
        "id": "5da06eac-c8ca-4a1c-af18-89d5be9351d6",
        "subject_id": "50f7bee4-bafb-45b9-9fc9-1ef2ddc72753",
        "order": 7,
        "description": "Design of a dedicated antenna for use in a selected radio communication system or microprocessor system for communication in a wireless computer network (WPAN or WLAN)",
        "estimated_minutes": 60
    },
    {
        "id": "da371551-0635-467d-bf0f-fa39bca5fd61",
        "subject_id": "e8376373-27a7-46a4-852b-135f1bf051e8",
        "order": 1,
        "description": "Basic notions and current development trends in the field of monitoring and control of production processes, IT systems - SCADA, MES, ERP, MRP",
        "estimated_minutes": 60
    },
    {
        "id": "118db20a-d7dd-4de6-8012-f0e69f9b9666",
        "subject_id": "e8376373-27a7-46a4-852b-135f1bf051e8",
        "order": 2,
        "description": "System for monitoring of machines and operators work - case study",
        "estimated_minutes": 60
    },
    {
        "id": "34899eb0-7688-43e2-bd88-d840fd74dbcb",
        "subject_id": "e8376373-27a7-46a4-852b-135f1bf051e8",
        "order": 3,
        "description": "Production planning and scheduling - case study",
        "estimated_minutes": 60
    },
    {
        "id": "d1031b42-04a6-43b7-bbfa-4f0ff760e6e6",
        "subject_id": "e8376373-27a7-46a4-852b-135f1bf051e8",
        "order": 4,
        "description": "Production in-process monitoring and production traceability system - case study",
        "estimated_minutes": 60
    },
    {
        "id": "3f5ad43c-173e-4a3a-b954-c6a1b2933f7f",
        "subject_id": "462376ec-0ce8-4d67-92b8-00cc2a1c94d1",
        "order": 1,
        "description": "Introduction. Determining the form of credit and the scope of the material. Basic definitions of security. Risk management. Acts and legal standards.",
        "estimated_minutes": 60
    },
    {
        "id": "8e28895b-0721-4807-92d9-0c5446dec397",
        "subject_id": "462376ec-0ce8-4d67-92b8-00cc2a1c94d1",
        "order": 2,
        "description": "Cryptography. Methods and categories of breaking ciphers. Basic types of ciphers. Introduction to information theory. Entropy. Coincidence characters. Frequency analysis of ciphers.",
        "estimated_minutes": 60
    },
    {
        "id": "26bc06c5-3051-4923-aa8b-9e496e727892",
        "subject_id": "462376ec-0ce8-4d67-92b8-00cc2a1c94d1",
        "order": 3,
        "description": "Capturing information in LANs, encrypted data capture, an attack on an SSL session. IDS and IPS systems. The legal aspect, hardware and software solutions",
        "estimated_minutes": 60
    },
    {
        "id": "6aff3e9a-4e11-4ef1-ae3d-6054efce9875",
        "subject_id": "462376ec-0ce8-4d67-92b8-00cc2a1c94d1",
        "order": 4,
        "description": "Firewalls: Firewalls characteristics, types of firewalls, implement firewalls, location and configuration of firewalls.",
        "estimated_minutes": 60
    },
    {
        "id": "77d19828-57e8-4882-a9db-f5606ed12c87",
        "subject_id": "462376ec-0ce8-4d67-92b8-00cc2a1c94d1",
        "order": 5,
        "description": "Protection of the operating system. Administrator Tasks. Remote operating system detection.",
        "estimated_minutes": 60
    },
    {
        "id": "1ec78287-b04a-4591-ba55-a2a7ebde5239",
        "subject_id": "462376ec-0ce8-4d67-92b8-00cc2a1c94d1",
        "order": 6,
        "description": "Intrusion detection systems in the computer system, security scanners.",
        "estimated_minutes": 60
    },
    {
        "id": "60b5d7c3-48b0-4b3b-9a62-c2694745a84d",
        "subject_id": "462376ec-0ce8-4d67-92b8-00cc2a1c94d1",
        "order": 7,
        "description": "Virtual VPN tunnels. Email security. Digital signature. Safety certificates. Hash functions.",
        "estimated_minutes": 60
    },
    {
        "id": "1a1790c7-56ea-499a-a503-c2e305505cf8",
        "subject_id": "462376ec-0ce8-4d67-92b8-00cc2a1c94d1",
        "order": 8,
        "description": "The security of the system. Measures of confidentiality and security systems. Audit of the system.",
        "estimated_minutes": 60
    },
    {
        "id": "5c87aa49-7753-4be6-8e31-bdc3d30e6df1",
        "subject_id": "462376ec-0ce8-4d67-92b8-00cc2a1c94d1",
        "order": 9,
        "description": "Security policy. Security models. Creating safety procedures.",
        "estimated_minutes": 60
    },
    {
        "id": "7501c3c2-efa6-49db-9b77-38ce87bd943c",
        "subject_id": "462376ec-0ce8-4d67-92b8-00cc2a1c94d1",
        "order": 10,
        "description": "Securing the physical infrastructure of the system - requirements, threats, conservation measures.",
        "estimated_minutes": 60
    },
    {
        "id": "378c2b37-6e2a-44db-9f9f-2e2adbaf8938",
        "subject_id": "462376ec-0ce8-4d67-92b8-00cc2a1c94d1",
        "order": 11,
        "description": "Critical elements of the system and methods of protection: power, cooling, cabling.",
        "estimated_minutes": 60
    },
    {
        "id": "afc0ca9a-2804-4f0c-9e24-1bb831b93725",
        "subject_id": "e32903df-d747-45a7-839e-6fa6f81b175c",
        "order": 1,
        "description": "-",
        "estimated_minutes": 60
    },
    {
        "id": "3de13ccd-db3a-409e-a186-0418ffb1424d",
        "subject_id": "360cd30a-7fc5-4fe7-987a-311a44ca3945",
        "order": 1,
        "description": "Formal and editorial requirements of the thesis. The structure of work, the content of the sections and subsections.",
        "estimated_minutes": 60
    },
    {
        "id": "6cf8b694-8b8d-4032-8a64-eb75c2b25bdd",
        "subject_id": "360cd30a-7fc5-4fe7-987a-311a44ca3945",
        "order": 2,
        "description": "The rules for creating theoretical and practical work.",
        "estimated_minutes": 60
    },
    {
        "id": "08a0ecbc-231b-4b2f-a3c0-73d6b09e56d0",
        "subject_id": "360cd30a-7fc5-4fe7-987a-311a44ca3945",
        "order": 3,
        "description": "Presentation of the theoretical part of the thesis. Create a table of contents, thesis, purpose, scope.",
        "estimated_minutes": 60
    },
    {
        "id": "b7c717b5-9127-42ec-ad18-da90265fd601",
        "subject_id": "360cd30a-7fc5-4fe7-987a-311a44ca3945",
        "order": 1,
        "description": "Discussion of the principles of the thesis presentation on the practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "4e81922f-4ab6-4e5b-a83e-7d65b038f242",
        "subject_id": "360cd30a-7fc5-4fe7-987a-311a44ca3945",
        "order": 2,
        "description": "Presentations of thesis practical part.",
        "estimated_minutes": 60
    },
    {
        "id": "fdb6968a-fb75-4323-8790-3d52241d15cc",
        "subject_id": "1069d26c-572e-4af3-8a0b-56380a63c9f6",
        "order": 1,
        "description": "Principles of Windows programming: window class definition, window class registration, window definition, message handling loop activation, window procedure, messages servicing",
        "estimated_minutes": 60
    },
    {
        "id": "fbec38d3-30a3-4028-a60b-3cb59dcbfdef",
        "subject_id": "1069d26c-572e-4af3-8a0b-56380a63c9f6",
        "order": 2,
        "description": "OpenGL library application to 3D interactive animation creation: wireframes definition, scene composition using three-dimensional transformations, lighting and shading definition, texture-mapping, OpenGL library extensions, graphics engines as modern platforms for interactive 3D applications creation",
        "estimated_minutes": 60
    },
    {
        "id": "9f8e5896-f05f-4ea1-ad9d-c7f8f5a7ba14",
        "subject_id": "1069d26c-572e-4af3-8a0b-56380a63c9f6",
        "order": 3,
        "description": "Structure of vision system. image pre-processing (histograms and histogram equalization, pixel brightness transformations, image smoothing and edge detection using spatial filters, frequency methods and morphological operations), Image segmentation (image thresholding, Hough transform, edge following). Object feature measurement and analysis, automatic object identification (object classification using K-nearest neighbours method, clastering using K-means algorithm). Introduction to stereovision and calibration of vision system. Tools designed for solving tasks in the field of computer vision (Image Processing and Image Acquisition Toolboxes for MATLAB, OpenCV library). Examples of computer vision applications.",
        "estimated_minutes": 60
    },
    {
        "id": "93690bfe-0089-4057-a927-93324adc8c2b",
        "subject_id": "f8d86439-3b8a-4aa4-9a6e-73ba22d9406b",
        "order": 1,
        "description": "Image processing and analysis. Object recognition techniques using global and local features. Searching and retrieving images from large databases.",
        "estimated_minutes": 60
    },
    {
        "id": "9241b637-56d6-43af-9ddf-cadfece93d29",
        "subject_id": "f8d86439-3b8a-4aa4-9a6e-73ba22d9406b",
        "order": 2,
        "description": "Industry 4.0 idea and application of IT, automation and robotics technologies.",
        "estimated_minutes": 60
    },
    {
        "id": "338ab3f0-5f7c-42c9-98dd-14b195c3765b",
        "subject_id": "f8d86439-3b8a-4aa4-9a6e-73ba22d9406b",
        "order": 3,
        "description": "Selected methods of optimisation: linear and non-linear programming, metaheuristics. Production scheduling. Computer tools for optimisation and scheduling.",
        "estimated_minutes": 60
    },

]
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
  direction_id: 'weii-ce',
  specialization_id: undefined as string | undefined,
  semester: 3,
};



