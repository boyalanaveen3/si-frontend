'use client';

import Link from 'next/link';
import { Reveal } from '../../components/animations/reveal';

const commitments = [
  {
    title: 'Scope of services',
    body:
      'We deliver strategy, design, and growth services according to the proposals or statements of work shared with each client. Any change in scope, timeline, or budget must be approved in writing.'
  },
  {
    title: 'Client responsibilities',
    body:
      'SuccessInsight relies on timely access to stakeholders, brand assets, and approvals. Delays in feedback or missing assets may shift delivery dates.'
  },
  {
    title: 'Payment terms',
    body:
      'Unless otherwise stated, invoices are due within 15 days. Late payments may pause project work or incur a financing charge of 1.5% per month.'
  }
];

const legalPoints = [
  'All materials we present remain SuccessInsight intellectual property until the agreed fees are paid in full.',
  'Either party may terminate an engagement with 30 days written notice. Work completed up to the termination date must be paid for.',
  'Deliverables are provided “as is.” We do not guarantee a specific business outcome, but we commit to industry best practices and continuous iteration.',
  'We treat confidential information with care and will only share it internally on a need-to-know basis.'
];

export default function TermsOfServicePage() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto w-full max-w-4xl space-y-12">
        <header className="text-center space-y-4">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Terms of Service</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold text-slate-900">SuccessInsight engagement terms</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base text-slate-600">
              These terms explain how we collaborate with clients and prospects who interact with successinsight.com. Updated on {new
              Date().toLocaleDateString()}.
            </p>
          </Reveal>
        </header>

        <div className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-xl font-semibold text-primary">Working together</h2>
          <p className="text-sm text-slate-600">
            When you request a proposal, book a strategy call, or engage SuccessInsight, you agree to collaborate in good faith, provide
            accurate information, and respect the timelines outlined in our shared plan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {commitments.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-primary">Legal considerations</h2>
          <p className="mt-3 text-sm text-slate-600">
            These principles keep every engagement transparent and protect both your team and ours:
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {legalPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="text-xl font-semibold text-primary">Questions or special terms?</h2>
          <p className="mt-3 text-sm text-slate-600">
            Email <Link href="mailto:successinsight26@gmail.com" className="text-primary underline">successinsight26@gmail.com</Link> with your legal
            or procurement requests. We review every message within two business days.
          </p>
        </div>
      </div>
    </section>
  );
}
