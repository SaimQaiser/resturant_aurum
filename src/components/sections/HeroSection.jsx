import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Eyebrow } from '@/components/common/SectionHeading';
import { heroSlides } from '@/data/content';
import { BRAND } from '@/constants';

const MotionTypography = motion.create(Typography);

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const lineUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image with slow Ken-Burns zoom */}
      <Box
        component={motion.div}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: 'easeOut' }}
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroSlides[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Box sx={{ position: 'absolute', inset: 0, background: (t) => t.brand.gradients.heroOverlay }} />

      <Container sx={{ position: 'relative', zIndex: 2, pt: 12 }}>
        <Box
          component={motion.div}
          variants={container}
          initial="hidden"
          animate="visible"
          sx={{ maxWidth: 820 }}
        >
          <motion.div variants={lineUp}>
            <Eyebrow>Est. {BRAND.established} · Two Michelin Stars</Eyebrow>
          </motion.div>

          <Box sx={{ mt: 3, overflow: 'hidden' }}>
            <MotionTypography variant="h1" variants={lineUp} sx={{ color: 'common.white' }}>
              A Sensory
            </MotionTypography>
          </Box>
          <Box sx={{ overflow: 'hidden' }}>
            <MotionTypography
              variant="h1"
              variants={lineUp}
              sx={{
                background: (t) => t.brand.gradients.goldText,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontStyle: 'italic',
              }}
            >
              Journey
            </MotionTypography>
          </Box>

          <MotionTypography
            variant="subtitle1"
            variants={lineUp}
            sx={{ mt: 3.5, maxWidth: 520, color: 'rgba(245,239,226,0.82)' }}
          >
            {BRAND.tagline} in the heart of TriBeCa. Seasonal tasting menus, a cellar of
            rare vintages, and service composed to the last detail.
          </MotionTypography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 5 }} component={motion.div} variants={lineUp}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/reservations')}
            >
              Reserve a Table
            </Button>
            <Button variant="outlined" color="primary" size="large" onClick={() => navigate('/menu')}>
              Explore the Menu
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Scroll cue */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.6, duration: 2, repeat: Infinity }}
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          textAlign: 'center',
          color: 'rgba(245,239,226,0.6)',
        }}
      >
        <Typography variant="overline" sx={{ display: 'block', fontSize: 10 }}>Scroll</Typography>
        <KeyboardArrowDownIcon />
      </Box>
    </Box>
  );
}
