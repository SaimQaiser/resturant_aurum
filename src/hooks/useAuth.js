import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

// Convenience accessor for the auth context.
export default function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
