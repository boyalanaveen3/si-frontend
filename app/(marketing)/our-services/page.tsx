'use client';

import { Reveal } from '../../components/animations/reveal';
import { faqDefaults } from '../../data/static-content';
import { Process } from '../../components/sections/process';
import { CtaBanner } from '../../components/sections/cta-banner';
import {useOurServicesStore} from "../../store/ourservicestore"
import { useEffect } from 'react';

export default function OurServicesPage() {
  const { productsdata,fetchProducts } = useOurServicesStore();
  console.log(productsdata,"productsdata")
    
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <section className="section-padding hero-gradient">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:items-center">
          {/* <div className="max-w-xl space-y-6">
            <Reveal>
              <h1 className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
                {displayData.title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-slate-600">
                {displayData.description}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                {displayData.highlights?.map((highlight, idx) => (
                  <span
                    key={`${highlight}-${idx}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {highlight}
                  </span>
                ))}
              </div>
            </Reveal>
          </div> */}

          <div className="flex-1 space-y-6">
            <Reveal direction="left">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
                <h3 className="text-lg font-semibold text-primary">What we deliver</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Strategy-aligned design systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Conversion-optimized experiences
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Growth-focused marketing execution
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Performance analytics & iteration
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="section-title text-center">Our service offerings</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle mx-auto max-w-xl text-center">
              From ideation to launch, each service is crafted to drive measurable business outcomes.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productsdata?.map((service, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="card-hover h-full rounded-3xl border border-slate-200 bg-white p-6">
                  {service?.icon &&
                    // <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                      <img src={service?.icon} className='flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl'  />
                    // </div>
                  }
                  <h3 className="mt-6 text-lg font-semibold text-primary">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{service.description}</p>
                  {service?.features && service?.features?.length > 0 && (
                  <ul className="mt-4 space-y-1 text-sm text-slate-500">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <FaqSection />
      <CtaBanner />
    </>
  );
}

function FaqSection() {
  const faqs = faqDefaults;

  return (
    <section className="section-padding bg-slate-50">
      <div className="mx-auto w-full max-w-4xl">
        <Reveal>
          <h2 className="section-title text-center">Frequently asked questions</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-subtitle mx-auto max-w-xl text-center">
            Common questions about our process, pricing, and how we work with teams.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.id} delay={index * 0.05}>
              <details className="group rounded-2xl border border-slate-200 bg-white">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-sm font-semibold text-primary hover:text-slate-900">
                  {faq.question}
                  <span className="transition group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-slate-100 px-6 py-5 text-sm text-slate-600">
                  {faq.answer}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
