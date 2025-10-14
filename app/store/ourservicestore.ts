'use client';

import { create } from 'zustand';

import { PageResponse } from '../types/content';
import axiosInstance from "../utils/axios";
interface OurServicesState {
  data: PageResponse['data'] | null;
  loading: boolean;
  error: string | null;
  fetchPage: () => Promise<void>;
  setData: (data: PageResponse['data'] | null) => void;
}


export const useOurServicesStore = create<OurServicesState>((set) => ({
  data: null,
  loading: false,
  error: null,
  setData: (data) => set({ data }),
  fetchPage: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axiosInstance(process.env.NEXT_PUBLIC_API_SERVICE+'/products');

      if (!response || response.status !== 200) {
        set({ loading: false, error: 'Unable to load Our Services content.' });
        return;
      }

      set({ data: response.data, loading: false, error: null });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to load Our Services content.';
      set({ loading: false, error: message });
    }
  }
}));

