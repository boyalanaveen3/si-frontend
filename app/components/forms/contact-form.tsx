'use client';

import { useState, useTransition } from 'react';
import { useFormStatus } from 'react-dom';

interface ContactFormProps {
  action: (formData: FormData) => Promise<void>;
}

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? 'Sending…' : label}
    </button>
  );
}

export function ContactForm({ action }: ContactFormProps) {
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleAction = async (formData: FormData) => {
    setSuccess(null);
    setError(null);

    startTransition(async () => {
      try {
        await action(formData);
        setSuccess('Thanks for reaching out. Our consultants will get in touch within 24 hours.');
      } catch (err) {
        console.error(err);
        setError('Something went wrong. Please try again or email us directly at hello@visionaryhub.com.');
      }
    });
  };

  return (
    <form action={handleAction} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-primary">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
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
            placeholder="you@company.com"
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-semibold text-primary">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Optional: +91 98765 43210"
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-semibold text-primary">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="How can we support your growth?"
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Share more about your goals, timelines, or current challenges."
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <SubmitButton label={isPending ? 'Sending…' : 'Send message'} />
      {success ? <p className="text-sm text-emerald-600">{success}</p> : null}
      {error ? <p className="text-sm text-red-500">{error}</p> : null}
    </form>
  );
}
