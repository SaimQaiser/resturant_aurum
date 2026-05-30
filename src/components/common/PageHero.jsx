import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Eyebrow } from '@/components/common/SectionHeading';
import { fadeUp, staggerContainer } from '@/utils/motion';

const MotionBox = motion.create(Box);

// Compact hero band used at the top of inner pages.
export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <Box
      sx={{
        position: 'relative',
        pt: { xs: 16, md: 22 },
        pb: { xs: 8, md: 12 },
        minHeight: { xs: 340, md: 460 },
        display: 'flex',
        alignItems: 'center',
        backgroundImage: image
          ? `linear-gradient(180deg, rgba(10,10,11,0.7) 0%, rgba(10,10,11,0.92) 100%), url(${image})`
          : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container sx={{ position: 'relative', textAlign: 'center' }}>
        <MotionBox
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          sx={{ maxWidth: 760, mx: 'auto' }}
        >
          {eyebrow && (
            <MotionBox variants={fadeUp} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Eyebrow center>{eyebrow}</Eyebrow>
            </MotionBox>
          )}
          <MotionBox variants={fadeUp}>
            <Typography variant="h1" sx={{ mt: 2.5, fontSize: { xs: 44, md: 76 } }}>
              {title}
            </Typography>
          </MotionBox>
          {subtitle && (
            <MotionBox variants={fadeUp}>
              <Typography
                variant="subtitle1"
                sx={{ mt: 2.5, color: 'text.secondary', maxWidth: 560, mx: 'auto' }}
              >
                {subtitle}
              </Typography>
            </MotionBox>
          )}
        </MotionBox>
      </Container>
    </Box>
  );
}
