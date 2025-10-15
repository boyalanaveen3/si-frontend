import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Reveal } from '../../../components/animations/reveal';
import { getBlogBySlug, getBlogs } from '../../../lib/api';

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const blog = await getBlogBySlug(params.slug);
  
  if (!blog?.data) {
    return {
      title: 'Blog Post Not Found'
    };
  }

  return {
    title: `${blog.data.title} | Visionary Hub Blog`,
    description: blog.data.summary,
    image:blog.data.image
   
  };
}

export async function generateStaticParams() {
  const blogsResponse = await getBlogs();
  const blogs = blogsResponse?.data ?? [];

  return blogs.map((blog) => ({
    slug: blog.slug
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog?.data) {
    notFound();
  }

  const { data } = blog;
console.log(data)
  return (
    <>
      <article className="section-padding bg-white">
        <div className="mx-auto w-full max-w-4xl">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-slate-900 transition"
            >
              ← Back to blog
            </Link>
          </div>

          <header className="mb-12">
            <Reveal>
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                <span>{data.author}</span>
                <span>•</span>
                <span>{new Date(data.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl mb-6">
                {data.title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-slate-600 mb-8">
                {data.summary}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="relative aspect-video w-full overflow-hidden rounded-3xl">
                <Image
                  src={data.image || 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80'}
                  alt={data.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </header>

          <div className="prose prose-slate max-w-none">
            <Reveal delay={0.4}>
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </Reveal>
          </div>

          <footer className="mt-16 border-t border-slate-200 pt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-primary">Share this article</p>
                <p className="text-xs text-slate-500">Help others discover these insights</p>
              </div>
              <div className="flex gap-3">
                <Link
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(data.title)}&url=${encodeURIComponent(`https://sriadds.com/blog/${data.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-primary hover:text-primary"
                  aria-label="Share on Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Link>
                <Link
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://sriadds.com/blog/${data.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-primary hover:text-primary"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}
