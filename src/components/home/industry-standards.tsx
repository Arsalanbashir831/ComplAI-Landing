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
      titleClassName="text-xl md:text-3xl px-4 pt-4 text-[#494C53]"
      containerClassName="before:bg-[linear-gradient(to_right,#e6eefc,rgba(255,255,255,0)_60%)] md:before:bg-[linear-gradient(to_right,#e6eefc,rgba(255,255,255,0)_100%)] after:bg-[linear-gradient(to_right,#e6eefc,rgba(255,255,255,0)_60%)] md:after:bg-[linear-gradient(to_right,#e6eefc,rgba(255,255,255,0)_100%)]"
    />
  );
}
