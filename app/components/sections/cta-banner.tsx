'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ctaDefaults } from '../../data/static-content';

export function CtaBanner() {
  return (
    <section className="section-padding">
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-4xl border border-primary/10 bg-gradient-to-r from-primary to-blue-600 p-[1px] shadow-2xl">
        <div className="relative rounded-[2rem] bg-white/95 px-8 py-16 sm:px-14">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="text-3xl font-semibold text-primary sm:text-4xl"
            >
              {ctaDefaults.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
              className="mt-4 text-base text-slate-600"
            >
              {ctaDefaults.description}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
            >
              <Link
                href={ctaDefaults.primaryHref}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-slate-900"
              >
                {ctaDefaults.primaryLabel}
              </Link>
              {ctaDefaults.secondaryHref && ctaDefaults.secondaryLabel ? (
                <Link
                  href={ctaDefaults.secondaryHref}
                  className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  {ctaDefaults.secondaryLabel}
                </Link>
              ) : null}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}