import { Solution } from '@/types/solutions';

export const solutions: Solution[] = [
  {
    title: 'Companion',
    description: 'Your AI-powered compliance expert.',
    image: '/images/companion.svg',
    buttonLabel: 'Learn More →',
    buttonLink: '/companion',
    imageAlign: 'center',
  },
  {
    title: 'Resolve',
    description: 'Let AI handle complaints efficiently.',
    image: '/images/resolve.svg',
    buttonLabel: 'Learn More →',
    buttonLink: '/resolve',
  },
  {
    title: 'Compose',
    description: 'Create compliant policies with AI support',
    image: '/images/compose.svg',
    comingSoon: true,
  },
  {
    title: 'Review',
    description:
      'Upload your policies and let AI find and fix compliance gaps.',
    image: '/images/review.svg',
    comingSoon: true,
  },
  {
    title: 'Validate',
    description: 'Perform file reviews and identify key compliance themes',
    image: '/images/validate.svg',
    comingSoon: true,
  },
  {
    title: 'Audit',
    description:
      'Achieve audit readiness for external audits such as Lexcel, SRA and Legal Aid.',
    image: '/images/audit.svg',
    comingSoon: true,
  },
];
