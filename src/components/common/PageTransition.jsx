import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { pageTransition } from '@/utils/motion';

const MotionBox = motion.create(Box);

// Wraps routed page content with enter/exit transitions.
export default function PageTransition({ children }) {
  return (
    <MotionBox
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </MotionBox>
  );
}
