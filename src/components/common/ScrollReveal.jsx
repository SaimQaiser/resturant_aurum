import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeUp } from '@/utils/motion';

const MotionBox = motion.create(Box);

// Wrap any content to fade + rise into view on scroll.
export default function ScrollReveal({ children, delay = 0, variants = fadeUp, ...props }) {
  return (
    <MotionBox
      custom={delay}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      {...props}
    >
      {children}
    </MotionBox>
  );
}
