import { Box, Container, Grid, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Eyebrow } from '@/components/common/SectionHeading';
import GoldDivider from '@/components/common/GoldDivider';

const MotionBox = motion.create(Box);
const chefImg =
  'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80';

export default function ChefSpotlight() {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 8, md: 16 }, position: 'relative', overflow: 'hidden' }}>
      <Container>
        <Grid container spacing={{ xs: 5, md: 10 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              sx={{ position: 'relative' }}
            >
              <Box
                component="img"
                src={chefImg}
                alt="Executive Chef Aurélie Mercer"
                sx={{
                  width: '100%',
                  aspectRatio: '4 / 5',
                  objectFit: 'cover',
                  borderRadius: 2,
                  filter: 'grayscale(15%)',
                }}
              />
              {/* Floating accent frame */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: -16,
                  border: '1px solid rgba(200,162,75,0.4)',
                  borderRadius: 2,
                  zIndex: -1,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 24,
                  right: { xs: 16, md: -32 },
                  px: 3,
                  py: 2,
                  background: (t) => t.brand.gradients.dark,
                  border: '1px solid rgba(200,162,75,0.3)',
                  borderRadius: 2,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Typography variant="h4" color="primary.light" sx={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  Aurélie Mercer
                </Typography>
                <Typography variant="caption" color="text.secondary">Executive Chef & Founder</Typography>
              </Box>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow>The Visionary</Eyebrow>
              <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
                An Obsession With the <Box component="em" sx={{ color: 'primary.light' }}>Perfect Moment</Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5 }}>
                Trained in the great kitchens of Lyon and Copenhagen, Chef Aurélie earned
                her first Michelin star at thirty-four. Her cooking marries French
                classicism with Nordic restraint — every plate a study in tension and grace.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                “Luxury is not excess,” she says. “It is attention — the discipline to make
                one flawless bite feel inevitable.”
              </Typography>
              <GoldDivider sx={{ justifyContent: 'flex-start', mb: 4 }} width={60} />
              <Button variant="contained" color="primary" endIcon={<ArrowForwardIcon />} onClick={() => navigate('/about')}>
                Meet the Team
              </Button>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
