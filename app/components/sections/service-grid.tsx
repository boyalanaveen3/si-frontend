"use client";

import { Reveal } from '../animations/reveal';
import { servicesDefaults } from '../../data/static-content';

export function ServiceGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="section-title text-center">Services engineered for growth</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-subtitle mx-auto max-w-2xl text-center">
            From strategy to execution, each service is designed to create measurable outcomes and brand equity.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesDefaults.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05}>
              <div className="card-hover h-full rounded-3xl border border-slate-200 bg-white p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-primary">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}