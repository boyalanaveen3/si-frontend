'use client';

import { useState } from 'react';
import { useContactusStore } from '../../store/contactusstore';

export function CustomerForm() {
  const { submitContactForm, submitting, submitSuccess, submitError, clearSubmitStatus } = useContactusStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearSubmitStatus();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      return;
    }

    await submitContactForm(formData);
    
    // Reset form on success
    if (!submitError) {
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-primary">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Alice Johnson"
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-primary">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="alice@example.com"
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-semibold text-primary">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          inputMode="tel"
          autoComplete="tel"
          placeholder="1234567890"
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-primary">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your goals, timelines, or questions."
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? 'Sending…' : 'Submit enquiry'}
      </button>
      {submitSuccess ? <p className="text-sm text-emerald-600">{submitSuccess}</p> : null}
      {submitError ? <p className="text-sm text-red-500">{submitError}</p> : null}
    </form>
  );
}
