'use client';

import Link from 'next/link';
import { Reveal } from '../../components/animations/reveal';
import { CtaBanner } from '../../components/sections/cta-banner';
import { CustomerForm } from '../../components/forms/customer-form';
import { contactDefaults } from '../../data/static-content';

export function ContactUsClient() {
  const contact = contactDefaults;

  return (
    <>
      <section className="section-padding hero-gradient">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <Reveal>
              <h1 className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
                Let&rsquo;s build your next growth chapter together
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="section-subtitle text-slate-600">
                Share your goals, and we&rsquo;ll craft a digital roadmap that blends marketing, design, and technology to accelerate measurable outcomes.
              </p>
            </Reveal>  
            <Reveal delay={0.2}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Prefer email?</p>
                  <p className="mt-2 text-sm text-slate-600">Drop us a line and we&rsquo;ll respond within a business day.</p>
                  <Link href={`mailto:${contact.email}`} className="mt-4 inline-flex text-sm font-semibold text-primary hover:text-slate-900">
                    {contact.email}
                  </Link>
                </div>
                <div className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Call our consultants</p>
                  <p className="mt-2 text-sm text-slate-600">Speak with a strategist about your growth targets.</p>
                  <Link href={`tel:${contact.phone}`} className="mt-4 inline-flex text-sm font-semibold text-primary hover:text-slate-900">
                    {contact.phone}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="flex-1">
            <Reveal direction="left">
              <div className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-2xl backdrop-blur">
                <h2 className="text-lg font-semibold text-primary">Tell us about your project</h2>
                <p className="mt-2 text-sm text-slate-500">
                  Our consultants will review your note and circle back with next steps.
                </p>
                <div className="mt-6">
                  <CustomerForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[3fr,2fr] lg:items-start">
          <Reveal>
            <div className="flex h-full flex-col space-y-6">
              <h2 className="section-title">Built for ambitious marketing &amp; product teams</h2>
              <p className="text-sm text-slate-600">
                Visionary Hub pairs strategy with execution. We orchestrate growth programs that join brand, product, and performance marketing so every touchpoint moves your metrics forward.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: 'Strategy squads',
                    description: 'Cross-functional teams that blend brand, UX, copy, and performance expertise.'
                  },
                  {
                    title: 'Growth loops',
                    description: 'Experimentation frameworks to continuously test, learn, and compound ROI.'
                  },
                  {
                    title: 'Experience systems',
                    description: 'Component libraries and design tokens for cohesive product &amp; marketing journeys.'
                  },
                  {
                    title: 'Analytics dashboards',
                    description: 'North-star and supporting metrics tracked in real time so we optimize decisively.'
                  }
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-sm font-semibold text-primary">{item.title}</h3>
                    <p className="mt-2 text-xs text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Visit our studio</h3>
                <p className="mt-2 text-sm text-slate-600">{contact.address}</p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                  <iframe
                    src={contactDefaults.mapEmbedUrl}
                    title="Visionary Hub office location"
                    className="h-64 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col">
              <div className="flex-1 space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-primary">What happens after you submit</h3>
              <div className="overflow-hidden rounded-2xl">
                <img 
                  src="./meeting.png" 
                  alt="Process workflow illustration" 
                  className="h-64 w-full object-cover"
                />
              </div>
              <ol className="space-y-4 text-sm text-slate-600">
                <li>
                  <span className="font-semibold text-primary">1. Intake review</span> — We assess your goals, operational context, and KPIs.
                </li>
                <li>
                  <span className="font-semibold text-primary">2. Discovery session</span> — A 45-minute call to align on opportunities, stakeholders, and readiness.
                </li>
                <li>
                  <span className="font-semibold text-primary">3. Strategic blueprint</span> — Receive a tailored plan covering marketing, design, and experimentation tracks.
                </li>
                <li>
                  <span className="font-semibold text-primary">4. Partnership kickoff</span> — We assemble the squad, define sprints, and launch your growth roadmap.
                </li>
              </ol>
              <div className="rounded-2xl bg-slate-50 p-4 text-xs text-slate-500">
                &ldquo;Within two quarters, Visionary Hub transformed our fragmented channels into a unified growth engine. Pipeline velocity doubled and customer retention improved 18%.&rdquo;
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-primary">
                Prefer immediate assistance? Email <Link href={`mailto:${contact.email}`} className="font-semibold">{contact.email}</Link> or call <Link href={`tel:${contact.phone}`} className="font-semibold">{contact.phone}</Link>.
              </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}