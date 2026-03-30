import { Outlet } from 'react-router';
import { useApp } from './context/AppContext';
import { Login } from './pages/Login';
import { Onboarding } from './pages/Onboarding';
import { Layout } from './components/Layout';

export function Root() {
  const { isLoggedIn, isOnboarded } = useApp();

  if (!isLoggedIn) return <Login />;
  if (!isOnboarded) return <Onboarding />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
