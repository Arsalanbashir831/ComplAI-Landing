import Image from 'next/image';

import { siteConfig } from '@/config/site';
import { CTAButton } from '@/components/cta-button';

export function Hero() {
  const { title, subtitle, buttons } = siteConfig.hero;

  return (
    <>
      {/* content */}
      <section className="relative pt-24 pb-32 bg-[url(/images/bg/home-hero-bg.svg)] bg-no-repeat bg-center bg-cover">
        <div className="mx-auto container max-w-5xl text-center">
          <h1 className="mb-6 font-bold tracking-tight sm:text-5xl md:text-6xl leading-[1.5]">
            <span className="text-primary">{title.start}</span>
            {title.middle}
            <br className="hidden md:inline" />
            <span className="text-primary">{title.highlight}</span>
            {title.end}
          </h1>

          <p className="mb-12 text-lg sm:text-xl">{subtitle}</p>
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

        <div className="relative mx-auto mt-8 w-full max-w-4xl">
          {/* <div className='absolute inset-0 bg-gradient-to-tr from-primary/30 to-primary/10 rounded-lg blur-3xl opacity-50' /> */}
          <div className="relative w-full h-[800px] mx-auto bg-cover">
            <Image
              src="./images/home-hero.svg"
              alt="Compliance review interface"
              fill
              className="bg-cover ml-20"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
