import Link from 'next/link';
import { Facebook, Linkedin, X, Youtube } from 'lucide-react';

import { siteConfig } from '@/config/site';

import { Logo } from './logo';
import NavigateToTop from './navigate-to-top';

const socialIcons = {
  linkedin: Linkedin,
  twitter: X,
  facebook: Facebook,
  youtube: Youtube,
};

export function Footer() {
  const { footer } = siteConfig;

  return (
    <footer className="border-t py-16 bg-primary">
      <div className="container grid gap-8 md:grid-cols-[2fr_1fr] mx-auto">
        {/* Logo and Social Section */}
        <div className="space-y-6">
          <Logo className="justify-start" inverted={true} />
          <p className="text-xl max-w-72 text-white">{footer.tagline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              {footer.product.title}
            </h3>
            <ul className="space-y-1">
              {footer.product.links.map((link) => (
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
          <div className="basis-1/2">
            <p className="text-3xl max-w-sm">{footer.mainText}</p>
          </div>
        </div>

        <div className="container flex items-center justify-between col-span-full">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} - Copyright
          </p>

          {/* support mail */}
          <Link
            href={`mailto:${footer.contact.email}`}
            className="text-base text-white font-medium"
          >
            {footer.contact.email}
          </Link>
        </div>
      </div>
    </footer>
  );
}
