'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import type { PropsWithChildren, ElementType } from 'react';

type RevealProps = PropsWithChildren<{
  delay?: number;
  as?: ElementType;
  className?: string;
}>;

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Reveal({ children, delay = 0, as: Tag = 'div', className }: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = reduce
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.2, delay } },
      }
    : {
        hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.6, ease: bezier, delay },
        },
      };

  const MotionTag = motion(Tag as ElementType);

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ margin: '0px 0px -10% 0px', once: true }}
      variants={variants}
      className={className}
      style={{ willChange: 'transform, filter, opacity' }}
    >
      {children}
    </MotionTag>
  );
}
