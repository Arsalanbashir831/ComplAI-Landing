import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { Facebook, Linkedin, X, Youtube } from 'lucide-react';

import { Logo } from './logo';
import NavigateToTop from './navigate-to-top';

const socialIcons = {
  linkedin: Linkedin,
  twitter: X,
  facebook: Facebook,
  youtube: Youtube,
};

const footer = {
  tagline: 'Your in-house compliance partner powered by AI',
  mainText: 'AI makes compliance faster, smarter, and more efficient.',
  quickLinks: {
    title: 'Quick Links',
    links: [
      { title: 'Home', href: ROUTES.HOME },
      { title: 'Features', href: `${ROUTES.HOME}?section=features` },
      { title: 'Pricing', href: ROUTES.PRICING },
      { title: 'About', href: ROUTES.ABOUT },
      { title: 'News', href: ROUTES.NEWS },
      { title: 'Contact', href: ROUTES.CONTACT },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { title: 'Compl-AI GPT', href: '#' },
      { title: 'Dashboard', href: '#' },
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
    { icon: 'linkedin', href: 'https://linkedin.com' },
    { icon: 'facebook', href: 'https://facebook.com' },
    { icon: 'twitter', href: 'https://twitter.com' },
    { icon: 'youtube', href: 'https://youtube.com' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t py-16 bg-primary px-4 md:px-0">
      <div className="relative container grid gap-8 md:grid-cols-[2fr_1fr] mx-auto">
        {/* Logo and Social Section */}
        <div className="space-y-6">
          <Logo className="justify-start" inverted={true} />
          <p className="text-xl max-w-72 text-white">{footer.tagline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:relative">
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

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              {footer.company.title}
            </h3>
            <ul className="space-y-1">
              {footer.company.links.map((link) => (
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

          {/* Navigate to Top */}
          <NavigateToTop />
        </div>

        <div className="col-span-full flex justify-between">
          <div className="flex space-x-4">
            {footer.socialLinks.map((social) => {
              const Icon = socialIcons[social.icon as keyof typeof socialIcons];
              return (
                <Link
                  key={social.href}
                  href={social.href}
                  className="rounded-full p-2 bg-white transition-colors hover:bg-gray-300"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="col-span-full flex justify-between gap-16 text-white">
          <p className="text-3xl max-w-sm">{footer.mainText}</p>
        </div>

        <div className="container flex items-center justify-between col-span-full">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} - Copyright
          </p>

          {/* support mail */}
          <Link
            href={`mailto:${footer.contact.email}`}
            className="relative text-base text-white font-medium after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-500 after:ease-in-out after:absolute after:left-0 after:bottom-0 hover:after:w-full"
          >
            {footer.contact.email}
          </Link>
        </div>
      </div>
    </footer>
  );
}
