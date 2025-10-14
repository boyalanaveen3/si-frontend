'use client';

import { create } from 'zustand';

import { BlogListResponse, BlogSummary, PageResponse } from '../types/content';
import { apiGet } from '../lib/api';

interface HomeState {
  page: PageResponse['data'] | null;
  blogs: BlogSummary[];
  loading: boolean;
  error: string | null;
  fetchHomeData: () => Promise<void>;
  hydrate: (payload: { page?: PageResponse['data'] | null; blogs?: BlogSummary[] }) => void;
}


export const useHomeStore = create<HomeState>((set) => ({
  page: null,
  blogs: [],
  loading: false,
  error: null,
  hydrate: ({ page, blogs }) =>
    set((state) => ({
      page: page !== undefined ? page : state.page,
      blogs: blogs !== undefined ? blogs : state.blogs
    })),
  fetchHomeData: async () => {
    set({ loading: true, error: null });

    try {
      const [pageResponse, blogResponse] = await Promise.all([
        apiGet<PageResponse>('/pages/home'),
        apiGet<BlogListResponse>('/blogs')
      ]);

      if (!pageResponse || pageResponse.status !== 200) {
        set({ loading: false, error: 'Unable to load home page content.' });
        return;
      }

      const blogs = blogResponse && blogResponse.status === 200 ? blogResponse.data : [];

      set({ page: pageResponse.data, blogs, loading: false, error: null });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to load home page content.';
      set({ loading: false, error: message });
    }
  }
})
);
