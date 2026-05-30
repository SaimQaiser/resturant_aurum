import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Eyebrow } from '@/components/common/SectionHeading';
import { fadeUp, staggerContainer } from '@/utils/motion';

const bg =
  'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1920&q=80';

const MotionBox = motion.create(Box);

// Full-bleed parallax-style call to action inviting guests to book a table.
export default function ReservationCTA() {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 12, md: 20 },
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(10,10,11,0.82) 0%, rgba(10,10,11,0.72) 100%)',
        },
      }}
    >
      <Container sx={{ position: 'relative', textAlign: 'center' }}>
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          sx={{ maxWidth: 760, mx: 'auto' }}
        >
          <MotionBox variants={fadeUp} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Eyebrow center>Reserve Your Table</Eyebrow>
          </MotionBox>

          <MotionBox variants={fadeUp}>
            <Typography variant="h2" sx={{ mt: 2.5, color: 'text.primary' }}>
              An Evening You Will Not Soon Forget
            </Typography>
          </MotionBox>

          <MotionBox variants={fadeUp}>
            <Typography
              variant="subtitle1"
              sx={{ mt: 3, color: 'text.secondary', maxWidth: 560, mx: 'auto' }}
            >
              Seatings are limited and our tasting menu changes with the season.
              Secure your place at the table and let us take care of the rest.
            </Typography>
          </MotionBox>

          <MotionBox variants={fadeUp}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              sx={{ mt: 5 }}
            >
              <Button
                size="large"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={() => navigate('/reservations')}
              >
                Book a Table
              </Button>
              <Button
                size="large"
                variant="outlined"
                onClick={() => navigate('/menu')}
              >
                View the Menu
              </Button>
            </Stack>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
