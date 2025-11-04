'use client';

import { create } from 'zustand';

import { PageResponse } from '../types/content';
import axiosInstance from "../utils/axios";

interface AboutUsState {
  data: PageResponse['data'] | null;
  loading: boolean;
  error: string | null;
  fetchPage: () => Promise<void>;
  setData: (data: PageResponse['data'] | null) => void;
}

const ABOUT_US_SLUG = 'about-us';

export const useAboutUsStore = create<AboutUsState>((set) => ({
  data: null,
  loading: false,
  error: null,
  setData: (data) => set({ data }),
  fetchPage: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axiosInstance.get('/pages/about');

      if (!response || response.status !== 200) {
        set({ loading: false, error: 'Unable to load About Us content.' });
        return;
      }

      set({ data: response.data, loading: false, error: null });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to load About Us content.';
      set({ loading: false, error: message });
    }
  }
}));

