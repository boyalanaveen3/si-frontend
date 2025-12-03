import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/our-services' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Blog', href: '/blog' }
];

const socials = [
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com' },
  { icon: FaTwitter, href: 'https://twitter.com' },
  { icon: FaFacebookF, href: 'https://www.facebook.com' },
  { icon: FaInstagram, href: 'https://www.instagram.com' }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="SuccessInsight Logo" width={40} height={40} className="h-10 w-10 object-contain rounded-full border border-slate-400" />
              <span className="text-lg font-semibold text-primary">SuccessInsight</span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-slate-600">
              We empower ambitious brands with performance-driven digital marketing and immersive web experiences.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Connect</h3>
            <p className="mt-4 text-sm text-slate-600">Follow our journey and stay up to date.</p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ icon: Icon, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-primary hover:text-primary"
                  aria-label="Social link"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SuccessInsight. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
