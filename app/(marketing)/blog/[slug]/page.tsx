import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { getBlogBySlug, getBlogs } from '../../../lib/api';
import { BlogStoreHydrator } from '../../../components/providers/page-store-hydrators';
import { Reveal } from '../../../components/animations/reveal';

type BlogDetailPageProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 300;

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const slug = decodeURIComponent(params.slug);

  try {
    const response = await getBlogBySlug(slug);

    if (!response?.data) {
      return {
        title: 'Insight | SuccessInsight',
        description: 'Latest strategies and playbooks from the SuccessInsight team.'
      };
    }

    const blog = response.data;
    return {
      title: `${blog.title} | SuccessInsight`,
      description: blog.summary,
      openGraph: {
        title: blog.title,
        description: blog.summary,
        type: 'article',
        publishedTime: blog.createdAt,
        images: blog.image ? [{ url: blog.image, alt: blog.title }] : undefined
      }
    };
  } catch {
    return {
      title: 'Insight | SuccessInsight',
      description: 'Latest strategies and playbooks from the SuccessInsight team.'
    };
  }
}

function formatDate(value?: string) {
  if (!value) return '';
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(value));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const slug = decodeURIComponent(params.slug);

  const [detailResponse, listResponse] = await Promise.all([getBlogBySlug(slug), getBlogs()]);

  const blog = detailResponse?.data;

  if (!blog) {
    notFound();
  }

  const relatedPosts = (listResponse?.data ?? [])
    .filter((post) => post.slug !== blog.slug)
    .slice(0, 3);

  const contentHasHtml = /<[^>]+>/i.test(blog.content ?? '');

  const content = contentHasHtml ? (
    <article className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
  ) : (
    <article className="prose prose-slate max-w-none space-y-5">
      {blog.content?.split('\n').filter(Boolean).map((paragraph, index) => (
        <p key={index}>{paragraph.trim()}</p>
      ))}
    </article>
  );

  return (
    <>
      <BlogStoreHydrator detail={{ slug: blog.slug, data: blog }} />

      <section className="section-padding bg-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
          <div className="space-y-6 text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Insight</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">{blog.title}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
                {blog.author ? <span>{blog.author}</span> : null}
                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline-block" />
                <span>{formatDate(blog.createdAt)}</span>
              </div>
            </Reveal>
            {blog.summary ? (
              <Reveal delay={0.15}>
                <p className="mx-auto max-w-3xl text-base text-slate-600">{blog.summary}</p>
              </Reveal>
            ) : null}
          </div>

          {blog.image ? (
            <div className="relative h-[420px] w-full overflow-hidden rounded-4xl">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              />
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="mx-auto w-full max-w-3xl space-y-10 border-t border-slate-100 pt-10 text-base leading-relaxed text-slate-700">
          {content}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
            <p className="text-lg font-semibold text-primary">Enjoyed this insight?</p>
            <p className="mt-2 text-sm text-slate-600">We share deep dives like this every week.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-slate-900"
              >
                Start a project
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                View all insights
              </Link>
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length ? (
        <section className="section-padding bg-white">
          <div className="mx-auto w-full max-w-6xl">
            <div className="text-center">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">More to explore</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-2 text-3xl font-semibold text-slate-900">Related insights</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="section-subtitle mx-auto mt-4 max-w-2xl">
                  Continue your learning with more stories from our consulting floor.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {relatedPosts.map((post) => (
                <Reveal key={post._id} delay={0.08}>
                  <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white">
                    {post.image ? (
                      <div className="relative h-48 w-full">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          unoptimized
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    ) : null}
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary">{post.author}</span>
                      <h3 className="mt-3 text-lg font-semibold text-primary">{post.title}</h3>
                      <p className="mt-3 line-clamp-3 text-sm text-slate-600">{post.summary}</p>
                      <div className="mt-auto">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:translate-x-1"
                        >
                          Read more
                          <span aria-hidden>→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
