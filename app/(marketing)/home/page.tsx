'use client';

import { Hero } from '../../components/hero/hero';
import { Reveal } from '../../components/animations/reveal';
import { ServiceGrid } from '../../components/sections/service-grid';
import { Testimonials } from '../../components/sections/testimonials';
import { InsightsPreview } from '../../components/sections/insights-preview';
import { Approach } from '../../components/sections/approach';
import { CtaBanner } from '../../components/sections/cta-banner';
import { getPageBySlug, getBlogs } from '../../lib/api';
import { HomeStoreHydrator } from '../../components/providers/page-store-hydrators';
import { useOurServicesStore } from '../../store/ourservicestore';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const { fetchProducts } = useOurServicesStore();
  const [page, setPage] = useState<any>(null);
  const [blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    fetchProducts();
    
    const fetchData = async () => {
      const pageData = await getPageBySlug('home');
      const blogsResponse = await getBlogs();
      setPage(pageData as any);
      setBlogs(blogsResponse?.data ?? []);
    };
    
    fetchData();
  }, [fetchProducts]);

  return (
    <>
      <HomeStoreHydrator page={page?.data ?? null} blogs={blogs} />
      <Hero />
      <section className="section-padding bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
          <div className="max-w-xl space-y-6">
            <Reveal>
              <h2 className="section-title">Strategic digital consulting</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="section-subtitle">
                We partner with founders and marketing leaders to architect, ship, and optimize high-performing digital
                ecosystems.
              </p>
            </Reveal>
            {page?.data?.content ? (
              <Reveal delay={0.15}>
                <article
                  className="prose prose-slate max-w-none"
                  dangerouslySetInnerHTML={{ __html: page.data.content }}
                />
              </Reveal>
            ) : null}
          </div>
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-primary">Strategy Squads</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Outcome-driven pods aligning growth design, marketing experimentation, and analytics under one roadmap.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-primary">Design Accelerators</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Launch high-fidelity, conversion-focused experiences with motion-led interactions built on solid UX.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-primary">Performance Loops</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Optimize funnels with experimentation, SEO, lifecycle marketing, and retention programs that scale.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-primary">Always-On Support</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Dedicated partnerships with real-time dashboards, monthly strategy retrospectives, and agile rollout plans.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <ServiceGrid />
      <Approach />
      <Testimonials />
      <InsightsPreview />
      <CtaBanner />
    </>
  );
}
