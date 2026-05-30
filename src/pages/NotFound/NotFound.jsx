import { Box, Container, Typography, Button, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Eyebrow } from '@/components/common/SectionHeading';
import { fadeUp, staggerContainer } from '@/utils/motion';

const MotionBox = motion.create(Box);

// Elegant 404 fallback.
export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 600,
          height: 600,
          transform: 'translate(-50%, -50%)',
          background: (t) => t.brand.gradients.radialGlow,
          opacity: 0.4,
        },
      }}
    >
      <Container sx={{ position: 'relative' }}>
        <MotionBox variants={staggerContainer} initial="hidden" animate="visible">
          <MotionBox variants={fadeUp} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Eyebrow center>Lost the Trail</Eyebrow>
          </MotionBox>
          <MotionBox variants={fadeUp}>
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600,
                fontSize: { xs: 120, md: 200 },
                lineHeight: 1,
                background: (t) => t.brand.gradients.goldText,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              404
            </Typography>
          </MotionBox>
          <MotionBox variants={fadeUp}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              This Table Is Not Set
            </Typography>
          </MotionBox>
          <MotionBox variants={fadeUp}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 460, mx: 'auto', mb: 4 }}>
              The page you are looking for has been moved, removed, or never
              existed. Let us guide you back to the dining room.
            </Typography>
          </MotionBox>
          <MotionBox variants={fadeUp}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button variant="contained" startIcon={<HomeIcon />} onClick={() => navigate('/')}>
                Back to Home
              </Button>
              <Button variant="outlined" onClick={() => navigate('/menu')}>
                Browse the Menu
              </Button>
            </Stack>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
