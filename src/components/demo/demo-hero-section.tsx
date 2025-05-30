'use client';

import DemoForm from './demo-form';

export default function DemoHeroSection() {
  return (
    <>
      <div className="absolute left-0 top-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] bg-[url('/images/bg/ellipse2.svg')] bg-contain bg-left bg-no-repeat " />
      <section className="relative py-10">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] md:h-[600px] md:w-[600px] bg-[url('/images/bg/ellipse.svg')] bg-contain bg-right bg-no-repeat z-[-10]" />

        <DemoForm />
      </section>
    </>
  );
}
