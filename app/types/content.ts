export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  statement: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    whatsapp?: string;
  };
}

export interface BlogSummary {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  author: string;
  createdAt: string;
  image: string;
}

export interface HeroContent {
  headline: string;
  subheading: string;
  ctaLabel: string;
  ctaHref: string;
  highlights: string[];
}

export interface MetricsHighlight {
  id: number;
  label: string;
  value: string;
}

export interface PageSection {
  title: string;
  description: string;
}

export interface AboutSection extends PageSection {
  items?: string[];
}

export interface CoreValue {
  id: number;
  name: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  mapEmbedUrl: string;
}

export interface CtaBanner {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  duration?: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface BlogDetail {
  status: number;
  data: {
    _id: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    author: string;
    published: boolean;
    bid: string;
    image:string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface BlogListResponse {
  status: number;
  data: BlogSummary[];
}

export interface PageResponse {
  status: number;
  data: {
    _id: string;
    slug: string;
    title: string;
    content: string;
    meta: {
      seoTitle: string;
      seoDescription: string;
      keywords?: string[];
    };
    createdAt: string;
    updatedAt: string;
  };
}

export interface ContactRequestPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ServiceRequestPayload {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface ContactSubmission {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerSubmission {
  _id: string;
  name: string;
  phone: number;
  email: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductItem {
  _id: string;
  pid: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface ContactListResponse {
  status: number;
  data: ContactSubmission[];
}

export interface CustomerListResponse {
  status: number;
  data: CustomerSubmission[];
}

export interface ProductListResponse {
  status: number;
  data: ProductItem[];
}
