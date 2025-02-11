import { ROUTES } from '@/constants/routes';

export const siteConfig = {
  name: 'Compl-AI',
  description:
    'Your In-house compliance partner, empowered by Artificial Intelligence.',
  mainNav: [
    {
      title: 'Home',
      href: ROUTES.HOME,
    },
    {
      title: 'Features',
      href: ROUTES.FEATURES,
    },
    {
      title: 'Pricing',
      href: ROUTES.PRICING,
    },
    {
      title: 'About',
      href: ROUTES.ABOUT,
    },
    {
      title: 'News',
      href: ROUTES.NEWS,
    },
    {
      title: 'Contact',
      href: ROUTES.CONTACT,
    },
  ],
  hero: {
    title: {
      start: 'AI-driven',
      middle: ' compliance for ',
      highlight: 'SRA',
      end: ' regulated law firms',
    },
    subtitle:
      'Your In-house compliance partner, empowered by Artificial Intelligence.',
    buttons: {
      primary: {
        text: 'Get Started',
        href: '/get-started',
      },
      secondary: {
        text: 'Learn More',
        href: '/learn-more',
      },
    },
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Explore the most common questions about our platform and how it helps you stay compliant.',
    questions: [
      {
        question: 'How do I get started with Compl-AI?',
        answer:
          "Getting started is easy. Simply register on our website, choose the plan that best suits your firm's needs, or start a free trial to explore Compl-AI features. Our platform is designed for a seamless onboarding experience, so you can begin managing your compliance tasks right away.",
      },
      {
        question: 'How does Compl-AI save time and money?',
        answer:
          'Compl-AI automates compliance processes, reducing manual work and potential errors. This automation leads to significant time savings and cost reduction in compliance management.',
      },
      {
        question: 'Can Compl-AI handle firm-specific queries?',
        answer:
          'Yes, Compl-AI can be customized to handle firm-specific compliance requirements and queries, ensuring relevance to your specific needs.',
      },
      {
        question: 'How does Compl-AI ensure its guidance remains up-to-date?',
        answer:
          'Our AI system continuously monitors regulatory changes and updates its guidance accordingly, ensuring you always have access to the latest compliance requirements.',
      },
      {
        question: 'Is Compl-AI secure?',
        answer:
          'Yes, Compl-AI implements enterprise-grade security measures to protect your data and ensure compliance with data protection regulations.',
      },
      {
        question: 'What compliance frameworks does Compl-AI cover?',
        answer:
          'Compl-AI covers a wide range of compliance frameworks including SRA regulations, GDPR, AML, and other relevant legal and regulatory requirements.',
      },
    ],
  },
  cta: {
    title: {
      start: 'Ready to Try ',
      highlight: 'Compl-AI?',
      end: '',
    },
    description:
      'Compl-AI delivers instant compliance insights and tools when your team needs them most. Save time, reduce costs, and stay ahead effortlessly',
    buttonText: 'Get Compl-AI Free',
    buttonHref: '/signup',
  },
  footer: {
    tagline: 'Your in-house compliance partner powered by AI',
    mainText: 'AI makes compliance faster, smarter, and more efficient.',
    product: {
      title: 'PRODUCT',
      links: [
        { title: 'Privacy', href: ROUTES.PRIVACY },
        { title: 'Pricing', href: ROUTES.PRICING },
        { title: 'Sign in', href: ROUTES.SIGN_IN },
        { title: 'Partners', href: ROUTES.PARTNERS },
        { title: 'Blog', href: ROUTES.BLOG },
        { title: 'Contacts', href: ROUTES.CONTACT },
      ],
    },
    company: {
      title: 'COMPANY',
      links: [
        { title: 'About', href: ROUTES.ABOUT },
        { title: 'Contact', href: ROUTES.CONTACT },
        { title: 'News', href: ROUTES.NEWS },
      ],
    },
    contact: {
      phone: '+1 (555) 555 55 55',
      email: 'info@compl.com',
    },
    newsletter: {
      text: 'Just share us your contact email and we will contact you.',
      placeholder: 'Your email',
    },
    socialLinks: [
      { icon: 'linkedin', href: 'https://linkedin.com' },
      { icon: 'facebook', href: 'https://facebook.com' },
      { icon: 'twitter', href: 'https://twitter.com' },
      { icon: 'youtube', href: 'https://youtube.com' },
    ],
  },
};
