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