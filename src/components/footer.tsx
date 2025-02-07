import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import {
  ArrowRight,
  ArrowUp,
  AtSign,
  Facebook,
  Linkedin,
  X,
  Youtube,
} from 'lucide-react';

import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';

import { Logo } from './logo';
import { Input } from './ui/input';

const socialIcons = {
  linkedin: Linkedin,
  twitter: X,
  facebook: Facebook,
  youtube: Youtube,
};

export function Footer() {
  const { footer } = siteConfig;

  return (
    <footer className="border-t py-16">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4 mx-auto">
        {/* Logo and Social Section */}
        <div className="space-y-6">
          <Logo className="justify-start" />
          <p
            className="text-sm w-3/4
					"
          >
            {footer.tagline}
          </p>
        </div>

        {/* Product Links */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-muted-foreground">
            {footer.product.title}
          </h3>
          <ul className="space-y-3">
            {footer.product.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-foreground transition-colors hover:text-primary"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-muted-foreground">
            {footer.company.title}
          </h3>
          <ul className="space-y-3">
            {footer.company.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-foreground transition-colors hover:text-primary"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact and Newsletter */}
        <div className="space-y-4 flex flex-col items-end">
          <Button
            className="bg-black-light text-white rounded-lg"
            variant="outline"
          >
            Request a call
          </Button>
          <div className="space-y-2 text-sm">
            <p>{footer.contact.phone}</p>
            <p>{footer.contact.email}</p>
          </div>
        </div>

        <div className="col-span-full flex justify-between">
          <div className="flex space-x-4">
            {footer.socialLinks.map((social) => {
              const Icon = socialIcons[social.icon as keyof typeof socialIcons];
              return (
                <Link
                  key={social.href}
                  href={social.href}
                  className="rounded-full p-2 text-white bg-black-light transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>

          {/* To Top button */}
          <Link
            href="#"
            className="rounded-full p-2 text-white bg-black-light transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUp className="h-4 w-4" />
          </Link>
        </div>

        <div className="col-span-full flex justify-between gap-16">
          <div className="basis-1/2">
            <p className="text-3xl max-w-sm">{footer.mainText}</p>
          </div>
          <div className="space-y-2 basis-1/2">
            <p className="text-sm">{footer.newsletter.text}</p>
            <div className="flex gap-2">
              <Input
                type="email"
                label="Your Email"
                name={footer.newsletter.placeholder}
                className="border-[#1B181999] rounded-xl"
                startIcon={<AtSign className="h-4 w-4" />}
                endIcon={<ArrowRight className="h-4 w-4" />}
                startIconClassName="text-black"
                endIconClassName="text-black"
              />
            </div>
          </div>
        </div>

        <div className="container flex items-center justify-between col-span-full">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} - Copyright
          </p>
          <Link
            href={ROUTES.PRIVACY}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Privacy
          </Link>
        </div>
      </div>

      {/* Copyright */}
    </footer>
  );
}
