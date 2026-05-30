import { Box } from '@mui/material';
import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import { motion } from 'framer-motion';
import { gallery } from '@/data/content';

const MotionBox = motion.create(Box);

// Masonry-style gallery with hover zoom.
export default function GallerySection() {
  return (
    <Section id="gallery">
      <SectionHeading center eyebrow="The Atmosphere" title="A Room to Remember"
        subtitle="Candlelight, craft and quiet drama — moments from the AURUM dining room." />
      <Box
        sx={{
          columnCount: { xs: 2, sm: 3, md: 4 },
          columnGap: { xs: 1.5, md: 2 },
        }}
      >
        {gallery.map((g, i) => (
          <MotionBox
            key={g.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
            sx={{
              mb: { xs: 1.5, md: 2 },
              borderRadius: 2,
              overflow: 'hidden',
              breakInside: 'avoid',
              position: 'relative',
              '&:hover img': { transform: 'scale(1.08)' },
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 60%, rgba(10,10,11,0.5))',
                opacity: 0,
                transition: 'opacity .4s',
              },
              '&:hover::after': { opacity: 1 },
            }}
          >
            <Box
              component="img"
              src={g.src}
              alt={g.alt}
              loading="lazy"
              sx={{
                width: '100%',
                display: 'block',
                aspectRatio: g.span === 'tall' ? '3 / 4' : g.span === 'wide' ? '4 / 3' : '1 / 1',
                objectFit: 'cover',
                transition: 'transform .7s cubic-bezier(.22,1,.36,1)',
              }}
            />
          </MotionBox>
        ))}
      </Box>
    </Section>
  );
}
