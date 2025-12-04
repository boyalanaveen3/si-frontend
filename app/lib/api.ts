import { cache } from 'react';
import { BlogDetail, BlogListResponse, PageResponse } from '../types/content';
import { blogDefaults } from '../data/static-content';

const API_BASE = process.env.NEXT_PUBLIC_API_SERVICE ?? 'http://localhost:4000/api';

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const url = path.startsWith('/') ? `${API_BASE}${path}` : `${API_BASE}/${path}`;
  const response = await fetch(url, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {})
    },
    next: init?.next ?? { revalidate: 60 }
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  if (response.status === 204 || response.status === 205) {
    return undefined as T;
  }

  const contentType = response.headers.get('content-type') ?? '';
  const bodyText = await response.text();

  if (!bodyText.trim()) {
    return undefined as T;
  }

  if (contentType.includes('application/json')) {
    try {
      return JSON.parse(bodyText) as T;
    } catch (error) {
      throw new Error('Failed to parse JSON response');
    }
  }

  return bodyText as unknown as T;
}

export function apiGet<T>(path: string) {
  return request<T>(path, { method: 'GET' });
}

export function apiPost<T>(path: string, body?: unknown) {
  return request<T>(path, {
    method: 'POST',
    body: body !== undefined ? JSON.stringify(body) : undefined
  });
}

export const getPageBySlug = cache(async (slug: string) => {
  return apiGet<PageResponse>(`/pages/${slug}`);
});

export const getBlogs = cache(async () => {
  try {
    return await apiGet<BlogListResponse>('/blogs');
  } catch (error) {
    console.warn('getBlogs: falling back to static data', error);
    return {
      status: 200,
      data: blogDefaults
    } satisfies BlogListResponse;
  }
});

export const getBlogBySlug = cache(async (slug: string) => {
  try {
    return await apiGet<BlogDetail>(`/blogs/${slug}`);
  } catch (error) {
    const fallback = blogDefaults.find((blog) => blog.slug === slug);

    if (!fallback) {
      console.warn(`getBlogBySlug: no fallback found for slug "${slug}"`);
      throw error instanceof Error ? error : new Error('Unable to fetch blog');
    }

    console.warn(`getBlogBySlug: using static fallback for slug "${slug}"`, error);

    return {
      status: 200,
      data: {
        _id: fallback._id,
        title: fallback.title,
        slug: fallback.slug,
        summary: fallback.summary,
        content: fallback.summary,
        author: fallback.author,
        published: true,
        bid: fallback._id,
        image: fallback.image,
        createdAt: fallback.createdAt,
        updatedAt: fallback.createdAt
      }
    } satisfies BlogDetail;
  }
});

export function submitContact(payload: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return apiPost('/contacts', payload);
}

export function submitServiceRequest(payload: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) {
  return apiPost('/customers/submit', payload);
}
