import { RouterProvider } from 'react-router';
import { router } from './routes';
import { AppProvider } from './context/AppContext';

// Clear stale cached progress so new English data loads cleanly
const DATA_VERSION = 'v2-en';
if (localStorage.getItem('examplanner_data_version') !== DATA_VERSION) {
  localStorage.removeItem('examplanner_progress');
  localStorage.setItem('examplanner_data_version', DATA_VERSION);
}

export default function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}