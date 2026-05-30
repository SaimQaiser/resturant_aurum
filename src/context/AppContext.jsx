import { createContext, useCallback, useMemo, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

export const AppContext = createContext(null);

// Global UI state: favourite dishes + a single app-wide snackbar.
export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  }, []);

  const notify = useCallback((message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  }, []);

  const closeSnackbar = useCallback(
    () => setSnackbar((s) => ({ ...s, open: false })),
    []
  );

  const value = useMemo(
    () => ({ favorites, toggleFavorite, notify }),
    [favorites, toggleFavorite, notify]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={closeSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ borderRadius: 1, fontFamily: 'inherit' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </AppContext.Provider>
  );
}
