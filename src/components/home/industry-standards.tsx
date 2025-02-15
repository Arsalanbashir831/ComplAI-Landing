import LogoSlider from '../logo-slider';

export default function IndustryStandards() {
  const logos = [
    {
      name: 'Solictors Regulation Authority',
      url: './images/logos/sra_logo.svg',
    },
    {
      name: 'Legal Aid Agency',
      url: './images/logos/laa_logo.svg',
    },
    {
      name: 'Lexcel',
      url: './images/logos/lexcel_logo.svg',
    },
    {
      name: 'SQM',
      url: './images/logos/sqm_logo.svg',
    },
    {
      name: 'The Law Society',
      url: './images/logos/law_society_logo.svg',
    },
    {
      name: 'Gov.uk',
      url: './images/logos/gov_uk_logo.svg',
    },
  ];

  return (
    <LogoSlider
      title="Aligned with Industry Standards"
      logos={logos}
      titleClassName="text-xl md:text-3xl px-4 text-[#808897] hidden"
    />
  );
}
