import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { Dashboard } from './pages/Dashboard';
import { Calendar } from './pages/Calendar';
import { Exams } from './pages/Exams';
import { StudyPlan } from './pages/StudyPlan';
import { Statistics } from './pages/Statistics';
import { Register } from './pages/Register';

export const router = createBrowserRouter([
  {
    path: '/register',
    Component: Register,
  },
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: 'calendar', Component: Calendar },
      { path: 'exams', Component: Exams },
      { path: 'study-plan', Component: StudyPlan },
      { path: 'statistics', Component: Statistics },
    ],
  },
]);