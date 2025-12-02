'use client';

import { create } from 'zustand';

import { PageResponse } from '../types/content';
import axiosInstance from "../utils/axios";
import { Iproducts } from '../interface/Iproduct';



export const useOurServicesStore = create<Iproducts>((set) => ({
  productsdata: null,
  fetchProducts: async () => {
    const staticProducts = [
      {
        id: '1',
        pid: 'P_01',
        title: 'Digital Marketing',
        description: 'Comprehensive digital marketing strategies to grow your business online.',
        price: 10000,
        category: 'Marketing',
        icon: '📈',
        features: ['PPC & SEO', 'Content strategy', 'Social media']
      },
      {
        id: '2',
        pid: 'P_02',
        title: 'Web Development',
        description: 'Modern, responsive websites built with latest technologies.',
        price: 15000,
        category: 'Development',
        icon: '💻',
        features: ['Responsive design', 'Fast loading', 'SEO optimized']
      },
      {
        id: '3',
        pid: 'P_03',
        title: 'UI/UX Design',
        description: 'User-centered design that converts visitors into customers.',
        price: 8000,
        category: 'Design',
        icon: '🎨',
        features: ['User research', 'Prototyping', 'Testing']
      }
    ];
    
    try {
      const response = await axiosInstance.get('/products');
      if (response?.status === 200) {
        const data = response.data?.data || response.data;

        set({ productsdata: data });
        return;
      }
    } catch (error:any ) {
      // Fallback to static data on API failure
    }
    

    set({ productsdata: staticProducts });
  },
  setData: (data) => {
    set({ productsdata: data });
  }
}));

