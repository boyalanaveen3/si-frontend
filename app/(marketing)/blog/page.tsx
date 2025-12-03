'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '../../components/animations/reveal';
import { useBlogStore } from "../../store/blogstore"
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const { fetchBlogData, blogs } = useBlogStore();

  useEffect(() => {
    fetchBlogData();
  }, [fetchBlogData]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.07,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };


  return (
    <>
      <section className="section-padding hero-gradient">
        <div className="mx-auto w-full max-w-4xl text-center">
          <Reveal>
            <h1 className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
              Insights & strategies
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle mx-auto mt-6 max-w-2xl">
              Deep dives into digital marketing, web design trends, and growth tactics that move the needle for modern businesses.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto w-full max-w-6xl">
          {blogs.length > 0 ? (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogs?.map((blog, index) => (
                  <motion.article
                    key={blog?._id}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border shadow-sm bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* IMAGE */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={blog?.image}
                        alt={blog?.title ?? 'Blog cover image'}
                        unoptimized
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                        <span>{blog?.author}</span>
                        <span>•</span>
                        <span>
                          {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                          })}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-primary mb-3 leading-tight line-clamp-2">
                        <Link
                          href={`/blog/${blog?.slug}`}
                          className="transition-colors hover:text-slate-900"
                        >
                          {blog?.title}
                        </Link>
                      </h3>

                      <p className="flex-1 text-sm text-slate-600 line-clamp-3">
                        {blog?.summary}
                      </p>

                      {/* READ MORE */}
                      <Link
                        href={`/blog/${blog?.slug}`}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform duration-200 hover:translate-x-1.5"
                      >
                        Read full article
                        <span aria-hidden className="transition-transform group-hover:translate-x-1.5">
                          →
                        </span>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="mt-16 text-center">
                <p className="text-sm text-slate-500">
                  Want to stay updated? Subscribe to our newsletter for weekly insights.
                </p>
                <div className="mt-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-slate-900"
                  >
                    Subscribe to updates
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-slate-600">No blog posts available at the moment.</p>
              <p className="mt-2 text-sm text-slate-500">Check back soon for new insights and strategies.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
