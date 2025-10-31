import {
  Service,
  Testimonial,
  TeamMember,
  HeroContent,
  MetricsHighlight,
  BlogSummary,
  AboutSection,
  CoreValue,
  CtaBanner,
  ContactInfo,
  ProcessStep,
  FaqItem
} from '../types/content';

// Minimal fallback data for production readiness - these will be replaced by API data
export const metricsDefaults: MetricsHighlight[] = [
  { id: 1, label: 'Projects Delivered', value: '250+' },
  { id: 2, label: 'Avg. ROI Increase', value: '3.2x' },
  { id: 3, label: 'Retention Rate', value: '92%' }
];

// export const servicesDefaults: Service[] = [
//   {
//     id: 1,
//     title: 'Digital Marketing',
//     description: 'Comprehensive digital marketing strategies to grow your business online.',
//     icon: '📈'
//   },
//   {
//     id: 2,
//     title: 'Web Designing',
//     description: 'Modern, responsive, and user-friendly web design services.',
//     icon: '💻'
//   },
//   {
//     id: 3,
//     title: 'SEO',
//     description: 'Enhance visibility and boost ranking with our SEO expertise.',
//     icon: '🔍'
//   },
//   {
//     id: 4,
//     title: 'UI/UX Designing',
//     description: 'Design engaging and intuitive user experiences.',
//     icon: '🎨'
//   },
//   {
//     id: 5,
//     title: 'WhatsApp Marketing',
//     description: 'Reach customers directly with customized WhatsApp campaigns.',
//     icon: '💬'
//   },
//   {
//     id: 6,
//     title: 'Logo Designing',
//     description: 'Unique and memorable logos tailored for your brand.',
//     icon: '🖌️'
//   },
//   {
//     id: 7,
//     title: 'SMM',
//     description: 'Effective social media management for brand growth.',
//     icon: '📱'
//   }
// ];

export const testimonialsDefaults: Testimonial[] = [
  {
    id: 1,
    name: 'Prince ',
    role: 'CMO, Lumina Tech',
    statement:
      'Visionary Hub elevated our digital footprint within 8 weeks. We saw a 140% uplift in qualified leads and a refreshed brand narrative.'
  },
  {
    id: 2,
    name: 'Pradeep',
    role: 'Founder, Apex Logistics',
    statement:
      'Their design direction and performance marketing support helped us launch a new product line with remarkable adoption.'
  },
  {
    id: 3,
    name: 'Poorna ',
    role: 'Director, Nova Clinics',
    statement:
      'From strategy workshops to execution, the team delivered an experience that made our patients trust us before they ever visited.'
  }
];

export const teamDefaults: TeamMember[] = [
  {
    id: 1,
    name: 'Prasanth kumar',
    role: 'Marketing Head',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=640&q=80',
    bio: 'Brand strategist with 12+ years crafting digital growth programs for high-velocity startups.',
    social: {
      linkedin: 'https://www.linkedin.com/',
      whatsapp: '9938629736'
    }
  },
  // {
  //   id: 2,
  //   name: 'surendra jannu',
  //   role: 'manager',
  //   avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=640&q=80',
  //   bio: 'Designs product ecosystems that blend motion, usability, and narrative for web-first brands.',
  //   social: {
  //     linkedin: 'https://www.linkedin.com/in/surendra-jannu-03bb2a242/'
  //   }
  // },
  {
    id: 3,
    name: 'Naveen boyala',
    role: 'CEO&Manager',
    avatar:
      'https://drive.google.com/uc?export=view&id=1mj2Vv61TurgJGO6Npr3dEon8qme6s7zQ',
    bio: 'Runs integrated campaigns, turning data into growth loops for commerce and B2B companies.',
    social: {
      linkedin: 'https://www.linkedin.com/in/naveen-boyala-a96a29226?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWu1E7bdVTiC%2BhkN2exQOog%3D%3D://www.linkedin.com/',
      whatsapp: '9100129823'
    }
  }
];

export const aboutDefaults: AboutSection[] = [
  {
    title: 'Our Mission',
    description:
      'Empower brands with digital ecosystems that drive measurable business growth and customer loyalty.',
    items: ['Conversion-first strategies', 'Unified design systems', 'Performance accountability']
  },
  {
    title: 'Our Vision',
    description: 'Be the most trusted partner for digital-first businesses scaling across global markets.'
  },
  {
    title: 'Our Approach',
    description: 'Strategy, design, and marketing squads working together as one dedicated growth unit.'
  }
];

export const valuesDefaults: CoreValue[] = [
  {
    id: 1,
    name: 'Integrity in Strategy',
    description: 'We lead with data, clarity, and honesty so every decision creates meaningful impact.'
  },
  {
    id: 2,
    name: 'Design for Humans',
    description: 'Every interaction is built to delight users while guiding them toward action.'
  },
  {
    id: 3,
    name: 'Outcome Obsessed',
    description: 'We align with your KPIs and stay agile to deliver measurable growth.'
  }
];

export const contactDefaults: ContactInfo = {
  phone: '+91 9493889736, 9100129823',
  email: 'nphub@33gmail.com',
  address: '1st Floor, Innovate Towers, Maddilapalem, Visakhapatnam, Andhra Pradesh, India',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.570905972839!2d83.31663077491918!3d17.738165283992405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943f6e0e39bef%3A0x29263db345ccfb52!2sPitapuram%20Colony%2C%20Maddilapalem%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1709271140000!5m2!1sen!2sin'
};

export const ctaDefaults: CtaBanner = {
  title: "Let's map your next growth milestone",
  description:
    'Share your goals and we will craft a roadmap blending marketing, design, and technology to help you reach them faster.',
  primaryLabel: 'Book a Strategy Call',
  primaryHref: '/contact-us',
  secondaryLabel: 'Explore Our Services',
  secondaryHref: '/our-services'
};

export const blogDefaults: BlogSummary[] = [
  {
    _id: 'blog_001',
    title: 'Designing Web Experiences that Convert',
    slug: 'designing-web-experiences',
    summary: 'Create high-converting web experiences by aligning motion, UX flows, and storytelling.',
    author: 'Np Hub Team',
    createdAt: new Date().toISOString(),
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: 'blog_002',
    title: 'Scaling Performance Marketing with Data',
    slug: 'scaling-performance-marketing',
    summary: 'Build experimentation loops and analytics foundations for compounding ROI.',
    author: 'Np Hub Team',
    createdAt: new Date().toISOString(),
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: 'blog_003',
    title: 'Brand Systems for Ambitious Startups',
    slug: 'brand-systems-for-startups',
    summary: 'Why flexible brand systems help startups stay consistent across campaigns and products.',
    author: 'Np Hub Team',
    createdAt: new Date().toISOString(),
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
  }
];

export const processDefaults: ProcessStep[] = [
  {
    id: 1,
    title: 'Discover & Align',
    description: 'Stakeholder workshops, analytics review, and opportunity mapping focused on your growth targets.',
    duration: 'Week 1'
  },
  {
    id: 2,
    title: 'Design & Prototype',
    description: 'Experience mapping, UI systems, and messaging frameworks with rapid iteration cycles.',
    duration: 'Weeks 2-4'
  },
  {
    id: 3,
    title: 'Launch & Optimize',
    description: 'Integrated go-to-market rollout, experimentation, and performance dashboards calibrated to KPIs.',
    duration: 'Weeks 5-8'
  }
];

export const faqDefaults: FaqItem[] = [
  {
    id: 1,
    question: 'How quickly can we launch a marketing campaign?',
    answer: 'Most engagements ship their first campaigns in under 30 days thanks to dedicated pods and predefined playbooks.'
  },
  {
    id: 2,
    question: 'Do you work with in-house teams?',
    answer: 'Yes, we plug into your existing marketing and product teams, augmenting them with design and growth specialists.'
  },
  {
    id: 3,
    question: 'What does onboarding look like?',
    answer: 'A 10-day onboarding sets objectives, integrates analytics, and finalizes the roadmap with your leadership team.'
  }
];

export const serviceIntroDefaults = {
  title: 'Full-stack digital marketing & web design services built to scale with you',
  description:
    'Np Hub delivers a cohesive ecosystem—from positioning and UI systems to acquisition, retention, and analytics.',
  highlights: ['Cross-functional delivery teams', 'Experimentation-first mindset', 'Motion and performance baked in']
};