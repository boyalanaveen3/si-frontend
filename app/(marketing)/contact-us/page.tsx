

import { Metadata } from 'next';
import { ContactUsClient } from './contact-us-client';

export const metadata: Metadata = {
  title: 'Contact Us - Visionary Hub Consultancy',
  description: 'Connect with Np Hub for strategic digital marketing, web design, and growth consulting. Schedule a consultation or request a project today.'
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}