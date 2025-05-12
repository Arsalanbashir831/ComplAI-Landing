// components/sections/SolutionsSection.tsx
import Image from 'next/image';
import { ROUTES } from '@/constants/routes';
import { solutions } from '@/data/solutions';

import { CTAButton } from '../cta-button';
import SolCard from '../sol-card';

export default function EnterprisePlan() {
  return (
    <section className="relative text-center px-4 pt-12 pb-8 flex flex-col justify-center items-center ">
      <h2 className="text-3xl md:text-6xl font-bold mb-8 md:mb-16 ">
        Available with
        <span className="bg-gradient-to-b from-[#179DFF] to-[#1754FF] bg-clip-text text-transparent  ">
          {' '}
          Enterprise Plans
        </span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 items-stretch">
        {solutions.map((card, idx) => (
          <SolCard key={idx} {...card} />
        ))}
      </div>

      <CTAButton
        href={ROUTES.DEMO}
        className="relative z-10 text-base font-medium py-5 px-12 mt-10"
      >
        Book a Demo
      </CTAButton>

      <div className="absolute bottom-0 flex items-center justify-center">
        <Image
          src="/images/bg/blur-cta-bg.svg"
          alt="background image"
          width={800}
          height={800}
          className="h-full object-cover"
        />
      </div>
    </section>
  );
}
