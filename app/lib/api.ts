import { cache } from 'react';
import { BlogDetail, BlogListResponse, PageResponse } from '../types/content';

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
  return apiGet<BlogListResponse>('/blogs');
});

export const getBlogBySlug = cache(async (slug: string) => {
  return apiGet<BlogDetail>(`/blogs/${slug}`);
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
