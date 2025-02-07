import { siteConfig } from '@/config/site';

import { CTAButton } from './cta-button';

export default function CTASection() {
  const { cta } = siteConfig;
  return (
    <section className=" bg-blue-lightest to-muted">
      <div className="container rounded-lg px-8 py-28 md:px-12 lg:px-16 flex flex-col items-center text-center space-y-4 max-w-5xl mx-auto">
        <h3 className="text-xl font-semibold md:text-3xl lg:text-7xl">
          {cta.title.start}
          <span className="text-primary">{cta.title.highlight}</span>
          {cta.title.end}
        </h3>
        <p className="max-w-3xl md:text-xl/relaxed">{cta.description}</p>
        <CTAButton href={cta.buttonHref} className="text-base font-medium py-5">
          {cta.buttonText}
        </CTAButton>
      </div>
    </section>
  );
}
