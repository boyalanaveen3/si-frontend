"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useHomeStore } from '../../store/homestore';
import { metricsDefaults } from '../../data/static-content';
import { Reveal } from '../animations/reveal';

export function Hero() {
  const { page } = useHomeStore();
  
  const heroContent = {
    headline: page?.title || 'Building digital experiences that convert.',
    subheading: page?.meta?.seoDescription || 'Visionary Hub blends strategy, design, and marketing execution so your brand drives measurable growth.',
    ctaLabel: 'Request a Strategy Call',
    ctaHref: '/contact-us',
    highlights: ['Full-funnel marketing', 'Human-centered design', 'Growth-focused outcomes']
  };

  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="section-padding mx-auto flex w-full max-w-6xl flex-col gap-16 lg:flex-row lg:items-center">
        <div className="max-w-2xl space-y-6">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              NP Hub
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
              {heroContent.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-slate-600">
              {heroContent.subheading}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={heroContent.ctaHref}
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-slate-900"
              >
                {heroContent.ctaLabel}
              </Link>
              <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                {heroContent.highlights.map((highlight: string, idx: number) => (
                  <span
                    key={`${highlight}-${idx}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Team collaborating"
              width={720}
              height={540}
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            className="absolute -bottom-12 left-1/2 w-full max-w-xs -translate-x-1/2 rounded-2xl bg-white p-4 shadow-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Our performance snapshot</p>
            <div className="mt-3 grid grid-cols-3 gap-3 text-center">
              {metricsDefaults.map((metric) => (
                <div key={metric.id} className="rounded-xl bg-slate-50 px-2 py-3">
                  <p className="text-lg font-semibold text-primary">{metric.value}</p>
                  <p className="text-xs text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}