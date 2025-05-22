
import { Banner } from '../_common/banner';

export function PricingBanner() {
  const title = 'Boost Your Efficiency with Compl-AI';
  const description =
    'Compl-AI simplifies compliance with intelligent AI solutions, saving time and reducing effort so your team can stay focused on what matters most.';
  const ctaText = 'Get Started';
  const ctaHref = '/pricing';
  const featuresTitle = 'All Plans Include';
  const features = [
    'Enterprise Grade Security',
    'Updated Regulations',
    'Seamless Interaction',
  ];

  return (
    <Banner
      title={title}
      description={description}
      ctaText={ctaText}
      ctaHref={ctaHref}
      featuresTitle={featuresTitle}
      features={features}
    />
  );
}
