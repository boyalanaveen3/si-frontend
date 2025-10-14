'use client';

import { Reveal } from '../animations/reveal';
import { processDefaults } from '../../data/static-content';

export function Process() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <h2 className="section-title text-center">A structured path from insight to impact</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-subtitle mx-auto max-w-2xl text-center">
            Every engagement follows a predictable rhythm so your team stays aligned and focused on measurable outcomes.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {processDefaults.map((step, index) => (
            <Reveal key={step.id} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-primary">
                  <span>Phase {index + 1}</span>
                  {step.duration ? <span className="text-slate-500">{step.duration}</span> : null}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-primary">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}