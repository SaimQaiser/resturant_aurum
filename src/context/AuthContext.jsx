import { createContext, useCallback, useMemo, useState } from 'react';
import { authService } from '@/services/authService';

export const AuthContext = createContext(null);

// Handles authentication state for the admin dashboard.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('aurum.user');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(false);

  const login = useCallback(async (credentials) => {
    setLoading(true);
    try {
      const { data } = await authService.login(credentials);
      localStorage.setItem('aurum.token', data.token);
      localStorage.setItem('aurum.user', JSON.stringify(data.user));
      setUser(data.user);
      return data.user;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('aurum.token');
    localStorage.removeItem('aurum.user');
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, loading, isAuthenticated: Boolean(user), login, logout }),
    [user, loading, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
