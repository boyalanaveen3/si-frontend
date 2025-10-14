import { create } from 'zustand';
import axiosInstance from '../utils/axios';

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  mapEmbedUrl: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactState {
  contactInfo: ContactInfo | null;
  loading: boolean;
  error: string | null;
  submitting: boolean;
  submitSuccess: string | null;
  submitError: string | null;
  fetchContactInfo: () => Promise<void>;
  submitContactForm: (formData: ContactFormData) => Promise<{ status: boolean; data?: any; error?: string }>;
  clearSubmitStatus: () => void;
}

export const useContactusStore = create<ContactState>((set, get) => ({
  contactInfo: null,
  loading: false,
  error: null,
  submitting: false,
  submitSuccess: null,
  submitError: null,
  fetchContactInfo: async () => {
    set({ loading: true, error: null });
    try {
      const result = await axiosInstance.get('/contacts');
      if (result?.data?.status === 200 && result.data?.data) {
        set({ contactInfo: result.data.data, loading: false });
      } else {
        set({ error: result.data?.message || 'Failed to load contact information', loading: false });
      }
    } catch (error: any) {
      set({ 
        error: error?.response?.data?.message || 'Failed to load contact information', 
        loading: false 
      });
    }
  },
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