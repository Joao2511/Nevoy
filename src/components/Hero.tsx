'use client';

import { motion } from 'framer-motion';
import SplineViewer from '@/components/SplineViewer';

export default function Hero() {
  return (
    <main id="hero" className="pointer-events-none overflow-x-hidden text-white">
      <motion.section
        className="pointer-events-none relative mt-24 flex h-[70svh] md:h-[100svh] w-full flex-col items-center justify-center text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: 'transform, filter, opacity' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <SplineViewer />
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}