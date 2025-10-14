"use client";

import Image from 'next/image';
import { Reveal } from '../animations/reveal';
import { aboutDefaults, valuesDefaults } from '../../data/static-content';

export function Approach() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <Reveal>
            <h2 className="section-title">Our methodology blends insight, design, and performance</h2>
          </Reveal>
          {aboutDefaults.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.08}>
              <div>
                <h3 className="text-lg font-semibold text-primary">{section.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{section.description}</p>
                {section.items ? (
                  <ul className="mt-3 space-y-1 text-sm text-slate-500">
                    {section.items.map((item: string) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex-1 space-y-6">
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80"
                alt="Design workshop"
                width={720}
                height={540}
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {valuesDefaults.map((value, index) => (
              <Reveal key={value.id} delay={index * 0.08}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-primary">{value.name}</p>
                  <p className="mt-2 text-xs text-slate-600">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}