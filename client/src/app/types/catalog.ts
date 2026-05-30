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

export type CalendarEventType = 'exam' | 'study' | 'assignment' | 'reminder' | 'consultation' | 'personal';
export type CalendarEventPriority = 'low' | 'medium' | 'high';

export interface UserCalendarEvent {
  id: string;
  user_id: string;
  title: string;
  description: string;
  date: string;
  start_time: string;
  end_time: string;
  type: CalendarEventType;
  priority: CalendarEventPriority;
  location: string;
  color: string;
  is_completed: boolean;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface CalendarEventPayload {
  title: string;
  description?: string;
  date: string;
  startTime?: string;
  endTime?: string;
  type: CalendarEventType;
  priority: CalendarEventPriority;
  location?: string;
  color: string;
  isCompleted?: boolean;
}


export interface UserNote {
  id: string;
  user_id: string;
  subject_id?: string | null;
  content: string;
  is_pinned: boolean;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface NotePayload {
  content: string;
  subjectId?: string | null;
  isPinned?: boolean;
}
