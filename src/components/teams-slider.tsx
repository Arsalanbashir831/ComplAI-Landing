'use client';

import { motion, Variants } from 'framer-motion';
import LogoSlider from './logo-slider';

export default function TeamsSlider({
  className,
  showSidesFade,
}: {
  className?: string;
  showSidesFade?: boolean;
}) {
  const logos = [
    { name: 'AWH Solicitors', url: '/logos/awh.png' },
    { name: 'Barings', url: '/logos/barings.png' },
    { name: 'Cartwright King', url: '/logos/ck.png' },
    { name: 'Child&Child', url: '/logos/cc.png' },
    { name: 'Fenchurch Legal', url: '/logos/fl.png' },
    { name: 'Finchley Legal', url: '/logos/finchley.png' },
    { name: 'Kaizen Law', url: '/logos/kl.png' },
    { name: 'Nera Capital', url: '/logos/nc.png' },
    { name: 'Quantuma', url: '/logos/quantuma.png' },
    { name: 'Veritas Law', url: '/logos/vs.png' },
    { name: 'Xeinadin', url: '/logos/xeinadin.png' },
  ];

  // Define a variant that uses a spring for that fluid, bouncy feel
  const reveal: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 14,
        mass: 0.6,
      },
    },
  };

  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full"
    >
      <LogoSlider
        title={
          <>
            Trusted by <span className="text-primary">Teams</span> at
          </>
        }
        logos={logos}
        titleClassName={`text-3xl font-bold md:text-5xl ${className ?? ''}`}
        showSidesFade={showSidesFade}
      />
    </motion.div>
  );
}
