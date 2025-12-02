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
    const staticBlogs = [
      {
        _id: 'blog_001',
        title: 'Designing Web Experiences that Convert',
        slug: 'designing-web-experiences',
        summary: 'Create high-converting web experiences by aligning motion, UX flows, and storytelling.',
        content: 'Create high-converting web experiences by aligning motion, UX flows, and storytelling. Modern web design goes beyond aesthetics to focus on user psychology and conversion optimization.',
        author: 'SuccessInsight Team',
        category: 'Web Design',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        published: true,
        __v: 0
      },
      {
        _id: 'blog_002',
        title: 'Scaling Performance Marketing with Data',
        slug: 'scaling-performance-marketing',
        summary: 'Build experimentation loops and analytics foundations for compounding ROI.',
        content: 'Build experimentation loops and analytics foundations for compounding ROI. Data-driven marketing strategies help businesses optimize their campaigns and maximize return on investment.',
        author: 'SuccessInsight Team',
        category: 'Digital Marketing',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        published: true,
        __v: 0
      },
      {
        _id: 'blog_003',
        title: 'Brand Systems for Ambitious Startups',
        slug: 'brand-systems-for-startups',
        summary: 'Why flexible brand systems help startups stay consistent across campaigns and products.',
        content: 'Why flexible brand systems help startups stay consistent across campaigns and products. A well-designed brand system provides the foundation for scalable marketing and product development.',
        author: 'SuccessInsight Team',
        category: 'Branding',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        published: true,
        __v: 0
      }
    ];
    
    try {
      const result = await axiosInstance.get('/blogs');
      if (result?.status === 200) {
        const data = result.data?.data || result.data;
        const blogs = Array.isArray(data) ? data : [];
        set({ blogs });
        return { status: true, data: blogs };
      }
    } catch (error: any) {
      // Fallback to static data on API failure
    }
    
    set({ blogs: staticBlogs });
    return { status: true, data: staticBlogs };
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