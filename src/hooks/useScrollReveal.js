import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Returns a ref + inView boolean for scroll-triggered reveal animations.
export default function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px', ...options });
  return [ref, inView];
}
