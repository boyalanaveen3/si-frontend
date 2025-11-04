'use client';

import { create } from 'zustand';
import { IBlog, CreateBlogPayload } from '../interface/Iblog';
import axiosInstance from '../utils/axios';

const initialState: Pick<IBlog, 'blogs' | 'blogDetails'> = {
  blogs: [],
  blogDetails: {}
};

export const useBlogStore = create<IBlog>((set) => ({
  ...initialState,
  hydrate: ({ blogs, blogDetails }) =>
    set((state) => ({
      blogs: blogs ?? state.blogs,
      blogDetails: blogDetails ?? state.blogDetails
    })),
  fetchBlogData: async () => {
    try {
      const result = await axiosInstance.get('/blogs');
      if (result?.data?.status === 200 && result.data?.data) {
        set({ blogs: result.data.data });
        return { status: true, data: result.data.data };
      }

      return { status: false, error: result.data?.message || 'Something went wrong' };
    } catch (error: any) {
      console.error('Blog fetch error:', error);
      return { status: false, error: error?.response?.data?.message || 'Something went wrong' };
    }
  },
  createBlog: async (payload: CreateBlogPayload) => {
    try {
      const result = await axiosInstance.post('/blogs/create', payload);
      if ([200, 201].includes(result?.data?.status) && result.data?.data) {
        set((state) => ({ blogs: [...state.blogs, result.data.data] }));
        return { status: true, data: result.data.data };
      }

      return { status: false, error: result.data?.message || 'Something went wrong' };
    } catch (error: any) {
      console.error('Blog create error:', error);
      return { status: false, error: error?.response?.data?.message || 'Something went wrong' };
    }
  }
}));