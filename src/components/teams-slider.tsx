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
      url: '/logos/awh.png',
    },
    {
      name: 'Barings',
      url: '/logos/barings.png',
    },
    {
      name: 'Cartwright King',
      url: '/logos/ck.png',
    },
    {
      name: 'Child&Child',
      url: '/logos/cc.png',
    },
    {
      name: 'Fenchurch Legal',
      url: '/logos/fl.png',
    },
    {
      name: 'Finchley Legal',
      url: '/logos/finchley.png',
    },
    {
      name: 'Kaizen Law',
      url: '/logos/kl.png',
    },
    {
      name: 'Nera Capital',
      url: '/logos/nc.png',
    },
    {
      name: 'Quantuma',
      url: '/logos/quantuma.png',
    },
    {
      name: 'Veritas Law',
      url: '/logos/vs.png',
    },
    {
      name: 'Xeinadin',
      url: '/logos/xeinadin.png',
    },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 50 }}
      transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
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
