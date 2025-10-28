'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiOutlineX } from 'react-icons/hi';

interface MobileNavProps {
  links: { href: string; label: string }[];
  isOpen: boolean;
  onClose: () => void;
}

const containerVariants = {
  hidden: { opacity: 0, x: '100%' },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, x: '100%', transition: { duration: 0.25, ease: 'easeIn' } }
};

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } }
};

export function MobileNav({ links, isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <motion.aside
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="ml-auto flex h-full w-72 flex-col bg-white px-6 py-6 shadow-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo-np.svg" alt="NP Hub logo" width={36} height={36} className="h-9 w-9" />
            <span className="text-lg font-semibold text-primary">NP Hub</span>
          </div>
          <button
            aria-label="Close navigation"
            className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:text-primary"
            onClick={onClose}
          >
            <HiOutlineX className="text-xl" />
          </button>
        </div>

        <motion.ul className="mt-10 flex flex-col gap-4" variants={listVariants}>
          {links.map((link) => (
            <motion.li key={link.href} variants={itemVariants}>
              <Link
                href={link.href}
                className="block rounded-lg px-3 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
                onClick={onClose}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-auto">
          <Link
            href="/contact-us"
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
            onClick={onClose}
          >
            Request Service
          </Link>
        </div>
      </motion.div>
    </motion.aside>
  );
}
