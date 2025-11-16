import { Feature } from '@/types/feature';

import { FeatureCard } from '../_common/features';

const features: Feature[] = [
  {
    title: 'Efficient and Reliable Complaint Handling',
    subtitle:
      'Compl-AI goes beyond quick answers — it helps you resolve compliance issues from start to finish:',
    items: [
      'Instantly answer commonly asked questions across SMS, LAA, and more',
      'Get clear next steps — from reporting disputes to internal follow‑up',
      'Draft formal replies to regulators and challenging audit findings',
      'Review internal documents and identify compliance gaps',
      'Strengthen team knowledge through guided reasoning',
      'Stay up to date with rule changes as they happen',
    ],
    note: 'Compliance done — clearly, quickly, and with confidence.',
  },
  {
    title: 'Customize Your Responses',
    subtitle:
      "Compl-AI delivers accurate answers instantly — no waiting, no hourly fees. Whether you're handling day-to-day compliance queries or responding to high-stakes regulatory issues, it helps you resolve them faster, more efficiently, and without draining internal resources.",
    items: [
      'Resolve adapts responses to your firm’s style and compliance needs',
      'Use predefined templates or customize on the fly',
      'Integrates with legal research sources for accuracy',
      '24/7 support with no per-query costs',
      'Seamless collaboration within your team’s network',
    ],
    note: 'Smarter compliance, without the overhead.',
  },
  {
    title: 'Ideal for Busy Professionals',
    subtitle:
      "Compl-AI delivers accurate answers instantly — no waiting, no hourly fees. Whether you're handling day-to-day compliance queries or responding to high-stakes regulatory issues, it helps you resolve them faster, more efficiently, and without draining internal resources.",
    items: [
      'Focus on high‑impact tasks while Resolve handles the rest',
      'Easy setup with minimal training required',
      'Accessible via web, mobile, and email',
      'Flexible plans tailored to firm size',
    ],
    note: 'Smarter compliance, without the overhead.',
  },
  {
    title: 'Free Up Valuable Time',
    subtitle:
      'Compl-AI goes beyond quick answers — it helps you resolve compliance issues from start to finish:',
    items: [
      'Instantly answer commonly asked questions across SMS, LAA, and more',
      'Get clear next steps — from reporting disputes to internal follow‑up',
      'Draft formal replies to regulators and challenging audit findings',
      'Review internal documents and identify compliance gaps',
      'Strengthen team knowledge through guided reasoning',
      'Stay up to date with rule changes as they happen',
    ],
    note: 'Compliance done — clearly, quickly, and with confidence.',
  },
  {
    title: 'Track and Manage Complaints',
    subtitle:
      'Compl-AI goes beyond quick answers — it helps you resolve compliance issues from start to finish:',
    items: [
      'Centralized dashboard for all incoming complaints',
      'Automated categorization and tagging',
      'Real-time status updates and audit trails',
      'Custom alerts for high‑priority issues',
      'Detailed reporting and analytics',
    ],
    note: 'Compliance done — clearly, quickly, and with confidence.',
  },
];

export default function WhyResolveSection() {
  // split the array in half
  const mid = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, mid);
  const rightFeatures = features.slice(mid);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">
          Why Your Firm Needs Companion?
        </h2>
        <p className="text-2xl ">
          Focus on your real work — let Companion handle the compliance.
        </p>
      </div>

      <div className="container mx-auto px-4 flex flex-col justify-center md:flex-row gap-8">
        {/* Left column */}
        <div className="flex-1 space-y-8 max-w-md">
          {leftFeatures.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>

        {/* Right column */}
        <div className="flex-1 space-y-8 mt-12 max-w-md">
          {rightFeatures.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
