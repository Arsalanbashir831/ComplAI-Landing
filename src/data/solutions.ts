import { Solution } from '@/types/solutions';

export const solutions: Solution[] = [
  {
    title: 'Companion',
    description: 'Your AI-powered compliance expert.',
    image: '/images/companion.png',
    buttonLabel: 'Learn More →',
    buttonLink: '/companion',
    imageAlign: 'center',
  },
  {
    title: 'Resolve',
    description: 'Let AI handle complaints efficiently.',
    image: '/images/resolve.png',
    buttonLabel: 'Learn More →',
    buttonLink: '/resolve',
  },
  {
    title: 'Compose',
    description: 'Create compliant policies with AI support',
    image: '/images/compose.png',
    comingSoon: true,
  },
  {
    title: 'Review',
    description:
      'Upload your policies and let AI find and fix compliance gaps.',
    image: '/images/review.png',
    comingSoon: true,
  },
  {
    title: 'Validate',
    description: 'Perform file reviews and identify key compliance themes',
    image: '/images/validate.png',
    comingSoon: true,
  },
  {
    title: 'Audit',
    description:
      'Achieve audit readiness for external audits such as Lexcel, SRA and Legal Aid.',
    image: '/images/audit.png',
    comingSoon: true,
  },
];
