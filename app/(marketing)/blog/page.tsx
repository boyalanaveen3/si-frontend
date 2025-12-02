'use client';

import Link from 'next/link';
import { Reveal } from '../../components/animations/reveal';
import { useBlogStore } from "../../store/blogstore"
import { useEffect } from 'react';

export default function BlogPage() {
  const { fetchBlogData, blogs } = useBlogStore();
  
  useEffect(() => { 
    fetchBlogData();
  }, [fetchBlogData]);

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
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog, index) => (
                  <Reveal key={blog._id} delay={index * 0.05}>
                    <article className="card-hover flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white">
                      <div className="relative h-48 w-full">
                        <img
                          src={blog?.image}
                          alt={blog.title}
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                          <span>{blog.author}</span>
                          <span>•</span>
                          <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-3 line-clamp-2">
                          <Link href={`/blog/${blog.slug}`} className="hover:text-slate-900 transition">
                            {blog.title}
                          </Link>
                        </h3>
                        <p className="flex-1 text-sm text-slate-600 line-clamp-3">
                          {blog.summary}
                        </p>
                        <div className="mt-6">
                          <Link
                            href={`/blog/${blog.slug}`}
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform duration-200 ease-out hover:translate-x-1.5"
                          >
                            Read full article
                            <span aria-hidden className="transition-transform duration-200 ease-out group-hover:translate-x-1.5">
                              →
                            </span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </Reveal>
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
