"use client";

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { testimonialsDefaults } from '../../data/static-content';
import { Reveal } from '../animations/reveal';

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn' }
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: 'easeOut' }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn' }
  })
};

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const activeTestimonial = useMemo(() => testimonialsDefaults[index % testimonialsDefaults.length], [index]);

  const navigate = (step: number) => {
    setDirection(step);
    setIndex((prev) => {
      const next = prev + step;
      if (next < 0) return testimonialsDefaults.length - 1;
      if (next >= testimonialsDefaults.length) return 0;
      return next;
    });
  };

  return (
    <section className="section-padding bg-slate-50">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <h2 className="section-title text-center">Client stories</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-subtitle mx-auto max-w-xl text-center">
            Trusted by growth-focused teams across SaaS, ecommerce, and service-led businesses.
          </p>
        </Reveal>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">
          <div className="relative flex flex-col gap-6">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.blockquote
                key={activeTestimonial.id}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-center text-lg leading-relaxed text-slate-600"
              >
                "{activeTestimonial.statement}"
              </motion.blockquote>
            </AnimatePresence>

            <motion.div
              key={`meta-${activeTestimonial.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: 0.1 }}
              className="text-center"
            >
              <p className="text-sm font-semibold text-primary">{activeTestimonial.name}</p>
              <p className="text-xs text-slate-500">{activeTestimonial.role}</p>
            </motion.div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => navigate(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-primary transition hover:border-primary hover:text-slate-900"
              >
                <HiOutlineChevronLeft />
              </button>
              <div className="flex gap-2">
                {testimonialsDefaults.map((testimonial, dotIndex) => (
                  <span
                    key={testimonial.id}
                    className={`h-2.5 w-2.5 rounded-full transition ${dotIndex === index ? 'bg-primary' : 'bg-slate-200'}`}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => navigate(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-primary transition hover:border-primary hover:text-slate-900"
              >
                <HiOutlineChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}