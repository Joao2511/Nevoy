import type { Variants } from 'framer-motion';

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: bezier },
  },
};
