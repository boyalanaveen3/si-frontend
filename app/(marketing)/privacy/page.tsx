'use client';

import Link from 'next/link';
import { Reveal } from '../../components/animations/reveal';

const principles = [
  {
    title: 'Information we collect',
    body:
      'Contact submissions, project inquiries, and usage data sent via our website forms or analytics tools. We only gather the data needed to respond to you or improve the experience.'
  },
  {
    title: 'How we use your information',
    body:
      'To reply to requests, schedule consultations, share requested resources, and analyze aggregated traffic trends. We never sell user data or share it without a lawful basis.'
  },
  {
    title: 'Data protection and retention',
    body:
      'All records are stored on encrypted infrastructure with role-based access. We retain data only as long as necessary to fulfill the purpose it was collected for or to comply with legal obligations.'
  }
];

const rights = [
  'Request a copy of the personal data we hold about you.',
  'Ask us to correct, update, or delete your information.',
  'Withdraw consent for marketing communications at any time.',
  'Lodge a complaint with your local data protection authority.'
];

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto w-full max-w-4xl space-y-12">
        <header className="text-center space-y-4">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Privacy Policy</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold text-slate-900">How SuccessInsight protects your data</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base text-slate-600">
              This policy explains what information we collect, why we collect it, and how you can exercise control. It was last
              updated on {new Date().toLocaleDateString()}.
            </p>
          </Reveal>
        </header>

        <div className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-xl font-semibold text-primary">What this policy covers</h2>
          <p className="text-sm text-slate-600">
            The policy applies to successinsight.com and all landing pages, forms, and digital services operated by our team. When we
            update the policy, the revision date above will change.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-primary">Your privacy rights</h2>
          <p className="mt-3 text-sm text-slate-600">
            Depending on your region, you may have one or more of the following rights. We honor every request and will respond within
            30 days.
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {rights.map((right) => (
              <li key={right} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span>{right}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="text-xl font-semibold text-primary">Need help with your data?</h2>
          <p className="mt-3 text-sm text-slate-600">
            Email us at <Link href="mailto:successinsight26@gmail.com" className="text-primary underline">successinsight26@gmail.com</Link> or
            submit a request via our <Link href="/contact-us" className="text-primary underline">contact form</Link>. We will confirm receipt and
            outline next steps.
          </p>
        </div>
      </div>
    </section>
  );
}
