import { create } from 'zustand';
import axiosInstance from '../utils/axios';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactState {
  submitting: boolean;
  submitSuccess: string | null;
  submitError: string | null;
  submitContactForm: (formData: ContactFormData) => Promise<{ status: boolean; data?: any; error?: string }>;
  clearSubmitStatus: () => void;
}

export const useContactusStore = create<ContactState>((set, get) => ({
  submitting: false,
  submitSuccess: null,
  submitError: null,
  submitContactForm: async (formData: ContactFormData) => {
    set({ submitting: true, submitError: null, submitSuccess: null });
    try {
      const result = await axiosInstance.post('/customers/submit', {
        name: formData.name,
        email: formData.email,
        phone: parseInt(formData.phone.replace(/\D/g, ''), 10),
        message: formData.message
      });
      
      if ([200, 201].includes(result?.data?.status)) {
        set({ 
          submitting: false, 
          submitSuccess: 'Thanks for reaching out. We will connect within the next business day.' 
        });
        return { status: true, data: result.data.data };
      } else {
        set({ 
          submitting: false, 
          submitError: result.data?.message || 'Failed to submit enquiry' 
        });
        return { status: false, error: result.data?.message || 'Failed to submit enquiry' };
      }
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || 'Failed to submit enquiry. Please try again.';
      set({ 
        submitting: false, 
        submitError: errorMessage 
      });
      return { status: false, error: errorMessage };
    }
  },
  clearSubmitStatus: () => {
    set({ submitSuccess: null, submitError: null });
  }
}));