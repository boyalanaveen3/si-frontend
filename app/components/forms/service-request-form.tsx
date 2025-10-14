'use client';

import { useState, useTransition } from 'react';
import { useFormStatus } from 'react-dom';

interface ServiceRequestFormProps {
  action: (formData: FormData) => Promise<void>;
}

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? 'Sending…' : label}
    </button>
  );
}

export function ServiceRequestForm({ action }: ServiceRequestFormProps) {
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    setSuccess(null);
    setError(null);

    startTransition(async () => {
      try {
        await action(formData);
        setSuccess('Thanks for your interest! We\'ll review your request and get back to you within 24 hours.');
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      }
    });
  };

  return (
    <form action={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-primary mb-2">
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option value="">Select a service</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="web-designing">Web Designing</option>
          <option value="seo">SEO</option>
          <option value="ui-ux-designing">UI/UX Designing</option>
          <option value="whatsapp-marketing">WhatsApp Marketing</option>
          <option value="logo-designing">Logo Designing</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your project, timeline, budget, and specific requirements..."
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <SubmitButton label={isPending ? 'Sending…' : 'Request Consultation'} />
      {success && <p className="text-sm text-emerald-600">{success}</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </form>
  );
}
