import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';

// Redirects unauthenticated users to the login screen.
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
