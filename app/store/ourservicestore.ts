'use client';

import { create } from 'zustand';

import { PageResponse } from '../types/content';
import axiosInstance from "../utils/axios";
import { Iproducts } from '../interface/Iproduct';



export const useOurServicesStore = create<Iproducts>((set) => ({
  productsdata: null,
  fetchProducts: async () => {
    try {
      const response = await axiosInstance.get(process.env.NEXT_PUBLIC_API_SERVICE + '/products');
      
      if (response?.status === 200 && response.data?.data) {
        set({ productsdata: response.data.data });
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  }
}));

