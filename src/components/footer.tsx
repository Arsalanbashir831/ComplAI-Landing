import { ROUTES } from '@/constants/routes';
import Image from 'next/image';
import Link from 'next/link';

import { Logo } from './logo';

const footer = {
  tagline: 'Your in-house compliance partner powered by AI',
  mainText: 'AI makes compliance faster, smarter, and more efficient.',
  quickLinks: {
    title: 'Quick Links',
    links: [
      { title: 'Home', href: ROUTES.HOME },
      // { title: 'Solutions', href: `#` },
      { title: 'News', href: ROUTES.NEWS },
      { title: 'Demo', href: ROUTES.DEMO },
      { title: 'About', href: ROUTES.ABOUT },
      { title: 'Contact', href: ROUTES.CONTACT },
    ],
  },
  productLinks: {
    title: 'Products',
    links: [
      { title: 'Companion', href: ROUTES.COMPANION },
      // { title: 'Resolve', href: ROUTES.RESOLVE },
      // { title: 'Compose', href: ROUTES.COMPOSE },
      // { title: 'Review', href: ROUTES.REVIEW },
      // { title: 'Validate', href: ROUTES.VALIDATE },
      // { title: 'Audit', href: ROUTES.AUDIT },
    ],
  },
  policyLinks: {
    title: 'Policies',
    links: [
      { title: 'Privacy Policy', href: ROUTES.PRIVACY_POLICY },
      { title: 'Cookie Policy', href: ROUTES.COOKIE_POLICY },
      // { title: 'User Agreement', href: ROUTES.USER_AGREEMENT_POLICY },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { title: 'About', href: ROUTES.ABOUT },
      { title: 'Contact', href: ROUTES.CONTACT },
      { title: 'News', href: ROUTES.NEWS },
    ],
  },
  contact: {
    phone: '+1 (555) 555 55 55',
    email: 'sales@compl-ai.co.uk',
  },
  newsletter: {
    text: 'Just share us your contact email and we will contact you.',
    placeholder: 'Your email',
  },
  socialLinks: [
    {
      icon: '/images/icons/linkedin.svg',
      href: 'https://www.linkedin.com/company/compl-ai-uk/',
    },
    // { icon: '/images/icons/facebook.svg', href: 'https://facebook.com' },
    // { icon: '/images/icons/x.svg', href: 'https://x.com' },
    // { icon: '/images/icons/brain-ai.svg', href: 'https://youtube.com' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t pt-16 pb-4 bg-primary px-4 md:px-8">
      <div className="relative container grid gap-8 md:grid-cols-[1fr_1fr_1fr] mx-auto">
        {/* Logo and Social Section */}
        <div className="space-y-4">
          <Logo className="justify-start" inverted={true} />
          <p className="text-xl max-w-72 text-white">{footer.tagline}</p>
        </div>

        <div className="grid grid-cols-1 col-span-full md:grid-cols-4 gap-8 md:relative">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              {footer.quickLinks.title}
            </h3>
            <ul className="space-y-1">
              {footer.quickLinks.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-white transition-colors hover:text-gray-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              {footer.productLinks.title}
            </h3>
            <ul className="space-y-1">
              {footer.productLinks.links.map((link) => (
                <li key={link.title}>
                  {/* Only Companion is active */}
                  {link.title === 'Companion' ? (
                    <Link
                      href={link.href}
                      className="text-base text-white transition-colors hover:text-gray-300"
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <span className="text-base text-gray-400 cursor-not-allowed">
                      {link.title} (Coming Soon)
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              {footer.company.title}
            </h3>
            <ul className="space-y-1">
              {footer.company.links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-base text-white transition-colors hover:text-gray-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              {footer.policyLinks.title}
            </h3>
            <ul className="space-y-1">
              {footer.policyLinks.links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-base text-white transition-colors hover:text-gray-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="col-span-full flex justify-between">
          <div className="flex space-x-4">
            {footer.socialLinks.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="rounded-full p-3 bg-white transition-colors hover:bg-gray-300"
              >
                <Image
                  src={social.icon}
                  alt={social.icon}
                  width={32}
                  height={32}
                  className="w-4 h-4"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-full flex justify-between gap-16 text-white">
          <p className="text-3xl max-w-sm">{footer.mainText}</p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 col-span-full mb-8">
          {/* support mail */}
          <div>
            <Link
              href={`mailto:${footer.contact.email}`}
              className="relative text-base text-white font-medium col-span-full after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 after:ease-in-out after:absolute after:left-0 after:bottom-0 hover:after:w-full"
            >
              {footer.contact.email}
            </Link>
          </div>

          {/*<div className="space-y-2 flex flex-col md:items-end">
            <p className="text-xl max-w-72 text-white">A Product of</p>
            <Image
              src="/images/logos/brilliant_ai_logo.svg"
              alt="Compl-AI Logo"
              width={150}
              height={50}
              className="w-40 h-auto"
            />
          </div>*/}
        </div>

        <div className="container col-span-full mx-auto">
          <p className="text-[13px] text-white text-center">
            Copyright © {new Date().getFullYear()} Brilliant AI Ltd. All rights
            reserved. Compl-AI is a registered trademark (Trade Mark No:
            UK00004155934) and operates as a trading name of Brilliant AI Ltd
            (Company No: 16134522).
          </p>
        </div>
      </div>
    </footer>
  );
}
