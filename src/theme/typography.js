import { fonts } from './tokens';

// A high-contrast editorial type scale: oversized serif display
// headings paired with a clean geometric sans for UI and body copy.
const typography = {
  fontFamily: fonts.body,
  htmlFontSize: 16,

  h1: {
    fontFamily: fonts.display,
    fontWeight: 500,
    fontSize: 'clamp(2.75rem, 6vw, 5.25rem)',
    lineHeight: 1.02,
    letterSpacing: '-0.015em',
  },
  h2: {
    fontFamily: fonts.display,
    fontWeight: 500,
    fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
    lineHeight: 1.08,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontFamily: fonts.display,
    fontWeight: 500,
    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
    lineHeight: 1.15,
  },
  h4: {
    fontFamily: fonts.display,
    fontWeight: 600,
    fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
    lineHeight: 1.2,
  },
  h5: {
    fontFamily: fonts.display,
    fontWeight: 600,
    fontSize: '1.4rem',
    lineHeight: 1.25,
  },
  h6: {
    fontFamily: fonts.body,
    fontWeight: 600,
    fontSize: '1.05rem',
    lineHeight: 1.3,
    letterSpacing: '0.02em',
  },

  subtitle1: {
    fontFamily: fonts.body,
    fontWeight: 400,
    fontSize: '1.125rem',
    lineHeight: 1.6,
  },
  subtitle2: {
    fontFamily: fonts.body,
    fontWeight: 500,
    fontSize: '0.95rem',
    lineHeight: 1.5,
  },

  body1: {
    fontFamily: fonts.body,
    fontWeight: 300,
    fontSize: '1rem',
    lineHeight: 1.75,
  },
  body2: {
    fontFamily: fonts.body,
    fontWeight: 300,
    fontSize: '0.9rem',
    lineHeight: 1.7,
  },

  button: {
    fontFamily: fonts.body,
    fontWeight: 500,
    fontSize: '0.82rem',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
  },

  // Custom variant used for small gold eyebrow labels.
  overline: {
    fontFamily: fonts.body,
    fontWeight: 500,
    fontSize: '0.75rem',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    lineHeight: 2,
  },

  caption: {
    fontFamily: fonts.body,
    fontWeight: 300,
    fontSize: '0.78rem',
    lineHeight: 1.5,
  },
};

export default typography;
