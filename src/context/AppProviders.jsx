import { ThemeProvider, CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import theme from '@/theme';
import { AuthProvider } from './AuthContext';
import { AppProvider } from './AppContext';

// Single composition point for every global provider.
export default function AppProviders({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AuthProvider>
          <AppProvider>{children}</AppProvider>
        </AuthProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
