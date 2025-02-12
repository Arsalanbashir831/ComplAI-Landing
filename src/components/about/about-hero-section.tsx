export default function AboutHeroSection() {
  return (
    <>
      <div className="absolute left-0 top-0 bottom-0 right-0 bg-gradient-to-b from-[#70a2ff36] to-[#43619900]" />
      <section className="relative overflow-hidden py-16 ">
        <div className="absolute right-0 top-10 h-[500px] w-[500px] bg-[url('/images/bg/about-hero-bg.svg')] bg-contain bg-right bg-no-repeat" />

        <div className="container relative mx-auto space-y-8">
          <div className="mx-auto space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl max-w-4xl text-black-100">
              Our mission is to harness AI to transform compliance in the legal
              industry.
            </h1>
            <p className="text-xl max-w-xl">
              The best AI-driven compliance tools and insights are here -
              we&rsquo;re making them accessible to every legal professional.
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-medium text-gray-dark max-w-xl text-xl">
              Legal teams frequently encounter delays and escalating costs due
              to their reliance on external consultants, compounded by
              challenges in researching and interpreting complex regulations.
            </p>
            <div className="flex space-x-4">
              <div className="basis-6/12 space-y-4">
                <p className="font-semibold text-black-100 text-2xl">
                  We built Compl-AI to change that.
                </p>
                <p className="font-medium text-gray-dark text-xl">
                  Our advanced, AI-powered platform provides instant,
                  regulation-specific insights, enabling prompt, accurate
                  decision-making while reducing consultancy fees and
                  streamlining compliance workflows.
                </p>
                <p className="font-medium text-gray-dark text-xl">
                  Our mission is to empower legal teams with accessible, fast,
                  and reliable compliance solutions.
                </p>
                <p className="font-medium text-xl">Join us.</p>
              </div>

              <div className="basis-6/12 border-l-4 border-primary h-fit pl-4">
                <p className="font-semibold text-black-100 text-4xl">
                  Compl-AI provides instant, cost-effective compliance insights
                  and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
