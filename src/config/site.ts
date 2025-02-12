import { ROUTES } from '@/constants/routes';

export const siteConfig = {
  name: 'Compl-AI',
  description:
    'Your In-house compliance partner, empowered by Artificial Intelligence.',

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
        question: 'What is Compl-AI?',
        answer:
          'Compl-AI is an advanced AI solution designed specifically for SRA-regulated law firms in England and Wales. It provides instant, precise, and actionable guidance on legal compliance, tailored to align with relevant regulations, legislations, and standards such as SRA, Lexcel, Legal Aid, and SQM requirements.',
      },
      {
        question:
          'How is Compl-AI different from general-purpose AI tools like ChatGPT?',
        answer:
          'Unlike general-purpose AI tools, Compl-AI is purpose-built for the legal sector and fine-tuned by legal professionals. It integrates a highly specialised knowledge base of regulations, legislations, and standards to deliver accurate and relevant insights specific to the compliance needs of law firms.',
      },
      {
        question:
          'Why should I choose Compl-AI over hiring compliance consultants?',
        answer:
          'Compl-AI is faster, more cost-effective, and far more reliable than traditional compliance consultants. While consultants often take time to research and prepare advice, Compl-AI provides instant results, drawing on its advanced knowledge base. This ensures timely and accurate guidance, without the delays or high costs typically associated with consultancy services.',
      },
      {
        question: 'What compliance frameworks does Compl-AI cover?',
        answer:
          'Compl-AI supports a comprehensive range of frameworks, including SRA regulations, government standards, Lexcel accreditation, Legal Aid requirements, SQM, and more.',
      },
      {
        question: 'Is Compl-AI secure?',
        answer:
          'Yes, Compl-AI is built with security as a core principle. It adheres to all relevant data protection standards, ensuring that your sensitive client information is handled with the utmost care and integrity.',
      },
      {
        question: 'How does Compl-AI ensure its guidance remains up-to-date?',
        answer:
          'Compl-AI uses advanced Retrieval-Augmented Generation (RAG) technology, which integrates a continuously updated knowledge base. This ensures that the guidance provided is always aligned with the latest regulations, legislations, and compliance standards.',
      },
      {
        question: 'Can Compl-AI handle firm-specific queries?',
        answer:
          'Yes, Compl-AI is designed to handle complex, firm-specific compliance queries. Its advanced framework ensures tailored responses based on your unique needs, helping your firm stay fully compliant in an ever-evolving regulatory environment.',
      },
      {
        question: 'How does Compl-AI save time and money?',
        answer:
          'Compl-AI eliminates the delays often associated with manual research or consultancy advice by delivering instant, precise guidance. By automating compliance processes and reducing the need for costly consultants, it helps law firms save both time and money while minimising risk.',
      },
      {
        question: 'Who can use Compl-AI?',
        answer:
          'Compl-AI is designed specifically for SRA-regulated law firms, including solicitors, compliance officers, and legal aid practitioners. It is suitable for firms of all sizes seeking to streamline their compliance processes and enhance their operational efficiency.',
      },
      {
        question: 'How do I get started with Compl-AI?',
        answer:
          "Getting started is easy. Simply register on our website, choose the plan that best suits your firm's needs, or start a free trial to explore Compl-AI's features. Our platform is designed for a seamless onboarding experience, so you can begin improving your compliance processes right away.",
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
      email: 'sales@compl-ai.co.uk',
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
