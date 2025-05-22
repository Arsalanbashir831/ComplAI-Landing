
import { Banner } from '../_common/banner';

export function CompanionBanner() {
  const title = 'Boost Your Efficiency with Companion';
  const description =
    'Companion streamlines everyday compliance tasks by delivering fast, accurate answers to regulatory questions. It saves time and reduces effort, helping you focus on the work that matters most.';
  const ctaText = 'Get Companion';
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
