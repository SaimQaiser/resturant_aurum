import { colors, gradients, shadows, glass, layout, fonts } from './tokens';

// Global component overrides that bake the luxury look into every MUI element.
const componentsOverrides = {
  MuiCssBaseline: {
    styleOverrides: {
      '*': { boxSizing: 'border-box' },
      html: { scrollBehavior: 'smooth', WebkitFontSmoothing: 'antialiased' },
      body: {
        backgroundColor: colors.black,
        color: colors.textPrimary,
        backgroundImage: gradients.radialGlow,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        overflowX: 'hidden',
      },
      '::selection': { background: colors.gold, color: colors.black },
      // Custom gold scrollbar
      '::-webkit-scrollbar': { width: 10, height: 10 },
      '::-webkit-scrollbar-track': { background: colors.obsidian },
      '::-webkit-scrollbar-thumb': {
        background: colors.graphite,
        borderRadius: 8,
        border: `2px solid ${colors.obsidian}`,
      },
      '::-webkit-scrollbar-thumb:hover': { background: colors.goldDeep },
      a: { color: 'inherit', textDecoration: 'none' },
    },
  },

  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: {
        borderRadius: layout.radius,
        padding: '12px 30px',
        position: 'relative',
        transition: 'transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease',
        '&:hover': { transform: 'translateY(-2px)' },
      },
      containedPrimary: {
        background: gradients.gold,
        color: colors.black,
        boxShadow: shadows.gold,
        '&:hover': { boxShadow: '0 18px 48px -8px rgba(200,162,75,0.6)' },
      },
      outlinedPrimary: {
        borderColor: 'rgba(200,162,75,0.5)',
        color: colors.gold,
        backdropFilter: 'blur(4px)',
        '&:hover': {
          borderColor: colors.gold,
          background: 'rgba(200,162,75,0.08)',
        },
      },
      text: { color: colors.textPrimary },
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        backgroundColor: colors.charcoal,
        borderRadius: layout.radiusLg,
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        backgroundImage: gradients.cardGlass,
        backgroundColor: 'transparent',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: layout.radiusLg,
        boxShadow: shadows.card,
        overflow: 'hidden',
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: layout.radius,
        backgroundColor: 'rgba(255,255,255,0.02)',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgba(255,255,255,0.14)',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgba(200,162,75,0.5)',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.gold,
          borderWidth: 1,
        },
      },
      input: { padding: '15px 16px' },
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: colors.textMuted,
        '&.Mui-focused': { color: colors.gold },
      },
    },
  },

  MuiChip: {
    styleOverrides: {
      root: {
        fontFamily: fonts.body,
        letterSpacing: '0.04em',
        borderRadius: 999,
      },
      outlined: { borderColor: 'rgba(200,162,75,0.4)' },
    },
  },

  MuiDivider: {
    styleOverrides: {
      root: { borderColor: 'rgba(255,255,255,0.08)' },
    },
  },

  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        background: colors.charcoalSoft,
        border: glass.border,
        fontFamily: fonts.body,
        fontSize: '0.75rem',
      },
    },
  },

  MuiLink: {
    defaultProps: { underline: 'none' },
    styleOverrides: {
      root: {
        transition: 'color .25s ease',
        '&:hover': { color: colors.gold },
      },
    },
  },

  MuiContainer: {
    defaultProps: { maxWidth: false },
    styleOverrides: {
      root: {
        maxWidth: layout.maxWidth,
        marginInline: 'auto',
        paddingInline: 24,
        '@media (min-width:900px)': { paddingInline: 40 },
      },
    },
  },
};

export default componentsOverrides;
