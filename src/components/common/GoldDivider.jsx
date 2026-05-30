import { Box } from '@mui/material';

// A slim gilded divider with a centred diamond accent.
export default function GoldDivider({ width = 120, sx }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, ...sx }}>
      <Box sx={{ width, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(200,162,75,0.6))' }} />
      <Box sx={{ width: 7, height: 7, transform: 'rotate(45deg)', bgcolor: 'primary.main' }} />
      <Box sx={{ width, height: '1px', background: 'linear-gradient(90deg, rgba(200,162,75,0.6), transparent)' }} />
    </Box>
  );
}
