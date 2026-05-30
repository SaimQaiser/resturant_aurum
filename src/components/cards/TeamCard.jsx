import { Card, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeUp } from '@/utils/motion';

const MotionCard = motion.create(Card);

// Team / chef profile card with image reveal on hover.
export default function TeamCard({ member, index = 0 }) {
  return (
    <MotionCard
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      sx={{
        height: '100%',
        overflow: 'hidden',
        '&:hover .member-img': { transform: 'scale(1.06)' },
        '&:hover .member-bio': { opacity: 1, maxHeight: 200 },
      }}
    >
      <Box sx={{ position: 'relative', aspectRatio: '3 / 4', overflow: 'hidden' }}>
        <Box
          component="img"
          src={member.image}
          alt={member.name}
          className="member-img"
          sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .7s ease', filter: 'grayscale(20%)' }}
        />
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 45%, rgba(10,10,11,0.95) 100%)' }} />
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 3 }}>
          <Typography variant="caption" color="primary.light" sx={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            {member.role}
          </Typography>
          <Typography variant="h5" sx={{ mt: 0.5 }}>{member.name}</Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="member-bio"
            sx={{ mt: 1.5, opacity: 0, maxHeight: 0, overflow: 'hidden', transition: 'all .5s ease' }}
          >
            {member.bio}
          </Typography>
        </Box>
      </Box>
    </MotionCard>
  );
}
