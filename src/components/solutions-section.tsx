// components/sections/SolutionsSection.tsx
import { solutions } from '@/data/solutions';

import SolCard from './sol-card';

export default function SolutionsSection() {
  return (
    <section className="text-center px-4 pt-10 md:pt-20 pb-24 md:pb-32 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Our Solutions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Discover the innovative features that streamline compliance, enhance
          productivity, and provide peace of mind. Tailored for legal
          professionals, by legal professionals.
        </p>

        <div className="grid gap-9 sm:grid-cols-2 md:grid-cols-3 items-stretch">
          {solutions.map((card, idx) => (
            <SolCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
