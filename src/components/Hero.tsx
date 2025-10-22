'use client';

import { motion } from 'framer-motion';
import SplineViewer from '@/components/SplineViewer';
import Reveal from '@/components/Reveal';

export default function Hero() {
  return (
    <main id="hero" className="overflow-x-hidden text-white">
      <motion.section
        className="flex min-h-[80svh] flex-col items-center justify-center pb-14 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div
          className="pointer-events-none w-full pt-10 pb-12"
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
