'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useHomeStore } from '../../store/homestore';
import { blogDefaults } from '../../data/static-content';
import { Reveal } from '../animations/reveal';

export function InsightsPreview() {
  const blogsFromStore = useHomeStore((state) => state.blogs);
  const blogs = blogsFromStore.length ? blogsFromStore : blogDefaults;

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="section-title text-center">Latest insights</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-subtitle mx-auto max-w-xl text-center">
            Stay ahead with strategies, case studies, and playbooks from our consulting team.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogs.slice(0, 3).map((blog, index) => (
            <Reveal key={blog._id} delay={index * 0.08}>
              <article className="card-hover flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <div className="relative h-48 w-full">
                  <img src={blog.image} alt={blog.title} className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">{blog.author}</span>
                  <h3 className="mt-3 text-lg font-semibold text-primary">{blog.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{blog.summary}</p>
                  <div className="mt-auto">
                    <motion.div whileHover={{ x: 6 }} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      <Link href={`/blog/${blog.slug}`}>Read more</Link>
                      <span aria-hidden>→</span>
                    </motion.div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
}
