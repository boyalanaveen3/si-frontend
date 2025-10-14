'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const variants = {
  hidden: { opacity: 0, y: 18 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, y: -18, transition: { duration: 0.35, ease: 'easeIn' } }
};

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} initial="hidden" animate="enter" exit="exit" variants={variants}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
