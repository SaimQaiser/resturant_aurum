import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeUp } from '@/utils/motion';

const MotionBox = motion.create(Box);

// Small gold "eyebrow" label with flanking rule.
export function Eyebrow({ children, center = false, sx }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        justifyContent: center ? 'center' : 'flex-start',
        ...sx,
      }}
    >
      <Box sx={{ width: 38, height: '1px', bgcolor: 'primary.main', opacity: 0.7 }} />
      <Typography variant="overline" sx={{ color: 'primary.light' }}>
        {children}
      </Typography>
      {center && (
        <Box sx={{ width: 38, height: '1px', bgcolor: 'primary.main', opacity: 0.7 }} />
      )}
    </Box>
  );
}

// Reusable section heading: eyebrow + large serif title + optional subtitle.
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  maxWidth = 640,
  sx,
}) {
  return (
    <MotionBox
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      sx={{
        textAlign: center ? 'center' : 'left',
        mx: center ? 'auto' : 0,
        maxWidth,
        mb: { xs: 5, md: 7 },
        ...sx,
      }}
    >
      {eyebrow && <Eyebrow center={center}>{eyebrow}</Eyebrow>}
      <Typography variant="h2" sx={{ mt: 2, color: 'text.primary' }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="subtitle1"
          sx={{ mt: 2.5, color: 'text.secondary', maxWidth: 560, mx: center ? 'auto' : 0 }}
        >
          {subtitle}
        </Typography>
      )}
    </MotionBox>
  );
}
