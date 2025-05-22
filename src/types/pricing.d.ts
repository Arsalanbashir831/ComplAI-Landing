export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  btn_redirection:string;
  message?: string;
  price: string;
  featuresHeader: string;
  comitmentText?: string;
  features: PricingFeature[];
  buttonText: string;
  secondaryButtonText?: string;
  popular?: boolean;
  badge?: string;
  footerHeading?: string;
  footerText?: string;
  color?: 'default' | 'blue';
};
