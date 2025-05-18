'use client';

import { motion } from 'framer-motion';

import LogoSlider from './logo-slider';

export default function TeamsSlider({
  className,
  showSidesFade,
}: {
  className?: string;
  showSidesFade?: boolean;
}) {
  const logos = [
    {
      name: 'AWH Solicitors',
      url: '/images/logos/awh_solicitors_logo.webp',
    },
    {
      name: 'Barings',
      url: '/images/logos/barings_logo.png',
    },
    {
      name: 'Cartwright King',
      url: '/images/logos/cartwright_king_logo.png',
    },
    {
      name: 'Child&Child',
      url: '/images/logos/child_and_child_logo.jpg',
    },
    {
      name: 'Fenchurch Legal',
      url: '/images/logos/fenchurch_logo.jpeg',
    },
    {
      name: 'Finchley Legal',
      url: '/images/logos/finchley_logo.png',
    },
    {
      name: 'Kaizen Law',
      url: '/images/logos/kaizen_logo.png',
    },
    {
      name: 'Nera Capital',
      url: '/images/logos/nera_logo.png',
    },
    {
      name: 'Quantuma',
      url: '/images/logos/quantuma_logo.png',
    },
    {
      name: 'Veritas Law',
      url: '/images/logos/veritas_logo.png',
    },
    {
      name: 'Xeinadin',
      url: '/images/logos/xeinadin_logo.png',
    },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <LogoSlider
        title={
          <>
            Trusted by <span className="text-primary">teams</span> at
          </>
        }
        logos={logos}
        titleClassName={'text-3xl font-bold md:text-5xl ' + (className ?? '')}
        showSidesFade={showSidesFade}
      />
    </motion.div>
  );
}
