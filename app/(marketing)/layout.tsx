import { ReactNode } from 'react';
import { Navbar } from '../components/navigation/navbar';
import { PageTransition } from '../components/animations/page-transition';
import { Footer } from '../components/navigation/footer';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-[var(--navbar-height)]">{children}</main>
        <Footer />
      </div>
    </PageTransition>
  );
}
