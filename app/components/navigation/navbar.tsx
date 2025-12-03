'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { MobileNav } from './mobile-nav';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/our-services', label: 'Our Services' },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us' },
  { href: '/blog', label: 'Blog' }
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-[var(--navbar-height)] w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="SuccessInsight Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain rounded-full border border-slate-400"
            priority
          />
          <span className="text-lg font-semibold text-primary">SuccessInsight</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-underline
              className={`relative text-sm font-medium text-slate-600 transition-colors hover:text-primary ${
                isActive(link.href) ? 'active text-primary' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact-us"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-slate-900"
          >
            Request Service
          </Link>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-primary transition hover:border-primary hover:text-slate-900 md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation"
        >
          <HiOutlineMenuAlt3 className="text-2xl" />
        </button>
        <MobileNav links={NAV_LINKS} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </nav>
    </header>
  );
}
