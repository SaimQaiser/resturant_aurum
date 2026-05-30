import { createTheme } from '@mui/material/styles';
import { colors, gradients, shadows, glass, layout, fonts } from './tokens';
import typography from './typography';
import componentsOverrides from './components';

// Centralised MUI theme for the entire application.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: colors.gold, light: colors.goldLight, dark: colors.goldDeep, contrastText: colors.black },
    secondary: { main: colors.cream, contrastText: colors.black },
    background: { default: colors.black, paper: colors.charcoal },
    text: { primary: colors.textPrimary, secondary: colors.textSecondary, disabled: colors.textMuted },
    success: { main: colors.success },
    warning: { main: colors.warning },
    error: { main: colors.error },
    info: { main: colors.info },
    divider: 'rgba(255,255,255,0.08)',
  },
  typography,
  shape: { borderRadius: layout.radiusLg },
  spacing: 8,
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },
  components: componentsOverrides,
});

// Expose brand tokens through the theme so components can read them
// via the `theme` object (e.g. sx={{ background: theme.brand.gradients.gold }}).
theme.brand = { colors, gradients, shadows, glass, layout, fonts };

export default theme;
