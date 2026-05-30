// Centralised design tokens for the AURUM brand.
// Keeping raw values here makes the palette easy to audit and re-skin.

export const colors = {
  // Core neutrals
  black: '#0A0A0B',
  obsidian: '#0E0E10',
  charcoal: '#16161A',
  charcoalSoft: '#1C1C21',
  graphite: '#2A2A30',
  ash: '#3A3A42',

  // Warm metallics — the AURUM signature
  gold: '#C8A24B',
  goldLight: '#E4C97E',
  goldBright: '#F0DCA0',
  goldDeep: '#9A7B33',

  // Warm light tones
  cream: '#F5EFE2',
  creamSoft: '#EDE6D6',
  white: '#FFFFFF',

  // Text
  textPrimary: '#F5EFE2',
  textSecondary: 'rgba(245, 239, 226, 0.66)',
  textMuted: 'rgba(245, 239, 226, 0.42)',
  textOnLight: '#1A1A1E',

  // Feedback
  success: '#7FB069',
  warning: '#E0A458',
  error: '#C75D5D',
  info: '#6B9BD1',
};

export const gradients = {
  gold: `linear-gradient(135deg, ${colors.goldLight} 0%, ${colors.gold} 45%, ${colors.goldDeep} 100%)`,
  goldSoft: `linear-gradient(135deg, ${colors.goldBright} 0%, ${colors.gold} 100%)`,
  dark: `linear-gradient(160deg, ${colors.charcoal} 0%, ${colors.black} 100%)`,
  heroOverlay:
    'linear-gradient(180deg, rgba(10,10,11,0.35) 0%, rgba(10,10,11,0.55) 45%, rgba(10,10,11,0.96) 100%)',
  cardGlass:
    'linear-gradient(145deg, rgba(40,40,46,0.55) 0%, rgba(20,20,24,0.65) 100%)',
  goldText: `linear-gradient(120deg, ${colors.goldBright} 0%, ${colors.gold} 50%, ${colors.goldLight} 100%)`,
  radialGlow:
    'radial-gradient(circle at 50% 0%, rgba(200,162,75,0.18) 0%, rgba(200,162,75,0) 60%)',
};

export const shadows = {
  soft: '0 8px 30px rgba(0, 0, 0, 0.35)',
  card: '0 18px 50px -12px rgba(0, 0, 0, 0.55)',
  cardHover: '0 30px 70px -18px rgba(0, 0, 0, 0.7)',
  gold: '0 14px 40px -10px rgba(200, 162, 75, 0.45)',
  inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
};

export const fonts = {
  display: '"Cormorant Garamond", "Times New Roman", serif',
  body: '"Jost", "Helvetica Neue", Arial, sans-serif',
};

export const layout = {
  navHeight: 84,
  maxWidth: 1320,
  radius: 4,
  radiusLg: 10,
};

// Glassmorphism helper used across cards, navbar and modals.
export const glass = {
  background: 'rgba(22, 22, 26, 0.55)',
  backdropFilter: 'blur(18px) saturate(140%)',
  border: '1px solid rgba(200, 162, 75, 0.16)',
};
