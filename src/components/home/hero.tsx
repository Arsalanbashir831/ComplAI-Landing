'use client';

import { CTAButton } from '@/components/cta-button';

import IndustryStandards from './industry-standards';

const title = {
  start: 'AI-driven',
  middle: ' compliance for ',
  highlight: 'SRA',
  end: ' regulated law firms',
};
const subtitle =
  'Your in-house compliance partner, powered by Artificial Intelligence.';
const buttons = {
  primary: {
    text: 'Get Started',
    href: '/get-started',
  },
  secondary: {
    text: 'Learn More',
    href: '/learn-more',
  },
};

export function Hero() {
  return (
    <section className="relative pt-[8rem] px-4 md:px-0 bg-[url(/images/bg/home-hero-bg.svg)] bg-no-repeat bg-center bg-cover space-y-10 h-screen flex flex-col justify-center items-center">
      <div className="mx-auto container max-w-5xl text-center h-full flex flex-col justify-center items-center">
        <h1 className="mb-6 font-bold tracking-tight text-3xl md:text-6xl leading-[1.5]  ">
          <span className="text-primary">{title.start}</span>
          {title.middle}
          <br className="hidden md:inline" />
          <span className="text-primary">{title.highlight}</span>
          {title.end}
        </h1>

        <p className="mb-4 text-md sm:text-xl">{subtitle}</p>
        <div className="flex justify-center gap-4">
          <CTAButton
            href={buttons.primary.href}
            className="text-base font-medium px-4 py-5"
          >
            {buttons.primary.text}
          </CTAButton>
          <CTAButton
            href={buttons.secondary.href}
            variant="outline"
            className="border-blue-light text-base font-medium px-4 py-5"
          >
            {buttons.secondary.text}
          </CTAButton>
        </div>
      </div>

      <div className="justify-self-end">
        <IndustryStandards />
      </div>
    </section>
  );
}
