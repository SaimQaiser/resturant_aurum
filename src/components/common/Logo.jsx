import { Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { BRAND } from '@/constants';

// AURUM logomark: a gilded "A" monogram + serif wordmark.
export default function Logo({ size = 36, showText = true, to = '/' }) {
  return (
    <Box
      component={RouterLink}
      to={to}
      sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.4 }}
      aria-label={`${BRAND.name} home`}
    >
      <Box
        component="svg"
        viewBox="0 0 64 64"
        sx={{ width: size, height: size, flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="aurumGrad" x1="0" y1="0" x2="64" y2="64">
            <stop stopColor="#F0DCA0" />
            <stop offset="0.5" stopColor="#C8A24B" />
            <stop offset="1" stopColor="#9A7B33" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="14" fill="#0E0E10" stroke="rgba(200,162,75,0.3)" />
        <path
          d="M32 12 L46 50 H38 L35 41 H29 L26 50 H18 Z M30.6 35 H33.4 L32 30 Z"
          fill="url(#aurumGrad)"
        />
      </Box>

      {showText && (
        <Box sx={{ lineHeight: 1 }}>
          <Typography
            component="span"
            sx={{
              fontFamily: 'var(--display, "Cormorant Garamond", serif)',
              fontWeight: 600,
              fontSize: size * 0.62,
              letterSpacing: '0.18em',
              color: 'text.primary',
              display: 'block',
            }}
          >
            {BRAND.name}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
