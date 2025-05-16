'use client';

import React, { useRef } from 'react'; // Import React and useRef

// Import Radix UI ScrollArea primitives
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';

import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// Define sections for the sidebar navigation
const cookieSections = [
  { id: 'cookie-policy-intro', title: 'Cookie Policy Overview' },
  { id: 'what-are-cookies', title: '1. WHAT ARE COOKIES?' },
  { id: 'types-of-cookies', title: '2. TYPES OF COOKIES WE USE' },
  { id: 'cookies-in-use', title: '3. COOKIES IN USE' },
  { id: 'manage-cookies', title: '4. HOW TO MANAGE COOKIES' },
  { id: 'policy-updates', title: '5. UPDATES TO THIS POLICY' },
  { id: 'contact-us-cookies', title: '6. CONTACT US' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Basic ScrollBar component (reused from previous example, ensure you have this or similar)
const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Scrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.Scrollbar
    ref={ref}
    orientation={orientation}
    className={`flex touch-none select-none transition-colors ${
      orientation === 'vertical' &&
      'h-full w-2.5 border-l border-l-transparent p-[1px]'
    } ${
      orientation === 'horizontal' &&
      'h-2.5 flex-col border-t border-t-transparent p-[1px]'
    } ${className || ''}`}
    {...props}
  >
    <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-gray-300 dark:bg-gray-700" />
  </ScrollAreaPrimitive.Scrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;

export default function CookiePolicyPage() {
  const scrollableViewportRef = useRef<HTMLDivElement | null>(null);

  // Framer motion variants for individual sections (optional, for staggered animation)
  const sectionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col md:flex-row gap-10 px-6 md:px-20 lg:px-32 min-h-screen">
      {/* Sidebar TOC */}
      <nav className="w-full md:w-64 lg:w-72 flex-shrink-0 p-4 mt-24 sticky top-24 h-[calc(100vh-12rem)] overflow-y-auto hidden md:block">
        <h2 className="text-xl font-bold mb-4">Contents</h2>
        {cookieSections.map(({ id, title }) => (
          <a
            key={id}
            href={`#${id}`}
            className="block py-1 hover:underline cursor-pointer text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              const sectionElement = document.getElementById(id);
              const viewportElement = scrollableViewportRef.current;

              if (sectionElement && viewportElement) {
                const yOffset = 16; // Desired padding from the top
                const sectionRect = sectionElement.getBoundingClientRect();
                const viewportRect = viewportElement.getBoundingClientRect();
                const sectionTopRelativeToViewportVisibleArea =
                  sectionRect.top - viewportRect.top;
                const newScrollTop =
                  viewportElement.scrollTop +
                  sectionTopRelativeToViewportVisibleArea -
                  yOffset;
                viewportElement.scrollTo({
                  top: newScrollTop,
                  behavior: 'smooth',
                });
              }
            }}
          >
            {title}
          </a>
        ))}
      </nav>

      {/* Main content Scrollable Area */}
      <ScrollAreaPrimitive.Root
        className="flex-1 mt-24 relative overflow-hidden" // Removed prose classes from here
        style={{ height: `calc(100vh - 6rem)` }} // Adjust based on actual top margin/header
      >
        <ScrollAreaPrimitive.Viewport
          ref={scrollableViewportRef}
          className="h-full w-full rounded-[inherit]"
        >
          {/* Motion container for the cookie policy content */}
          <motion.article // Changed from motion.main to motion.article for semantic correctness within scroll area
            className="max-w-4xl mx-auto px-4 sm:px-6 py-12 prose prose-neutral dark:prose-invert" // Prose classes applied here
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.section
              id="cookie-policy-intro"
              variants={sectionVariants} // Use sectionVariants for individual animation
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h1 className="text-4xl font-extrabold tracking-tight mb-6">
                COOKIE POLICY
              </h1>
              <p className="font-semibold">Effective Date: 16 May 2025</p>
              <p className="font-semibold mb-6">Last Updated: 16 May 2025</p>
              <p>
                This Cookie Policy explains how Brilliant AI Ltd, trading as
                Compl-Ai, uses cookies and similar technologies to provide,
                protect, and improve your experience on our website. You can
                manage your cookie preferences at any time using your browser
                settings or by contacting us.
              </p>
              <p>
                This Cookie Policy complies with the Privacy and Electronic
                Communications Regulations 2003 (PECR) and the UK General Data
                Protection Regulation (UK GDPR). It applies when you visit our
                website{' '}
                <a
                  href="https://compl-ai.com"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://compl-ai.com
                </a>{' '}
                (”Website”).
              </p>
            </motion.section>

            <Separator className="my-8" />

            <motion.section
              id="what-are-cookies"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2>1. WHAT ARE COOKIES?</h2>
              <p>
                Cookies are small text files placed on your device when you
                visit a website. They help improve your Browse experience by
                remembering your preferences, enabling core functionality, and
                gathering analytics data.
              </p>
              <p>
                Cookies may be set by us (&rdquo;first-party cookies&rdquo;) or
                by third parties (&rdquo;third-party cookies&rdquo;) to enable
                additional features such as analytics, chat support, or secure
                payments.
              </p>
              <p>
                We display a cookie banner when you first visit our Website,
                allowing you to accept, reject, or customise cookie categories
                (excluding strictly necessary cookies). You may change your
                preferences at any time by reloading the banner or adjusting
                your browser settings.
              </p>
            </motion.section>

            <Separator className="my-8" />

            <motion.section
              id="types-of-cookies"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2>2. TYPES OF COOKIES WE USE</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cookie Type</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <strong>Strictly Necessary</strong>
                    </TableCell>
                    <TableCell>
                      Essential for the Website to function (e.g.,
                      authentication, session tokens). These cookies do not
                      require user consent and are used under our legitimate
                      interests (UK GDPR Art. 6(1)(f)).
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>Performance</strong>
                    </TableCell>
                    <TableCell>
                      Help us understand how users interact with the Website
                      (e.g., page views, bounce rate).
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>Functional</strong>
                    </TableCell>
                    <TableCell>
                      Remember choices you make (e.g., language preferences).
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <strong>Marketing</strong>
                    </TableCell>
                    <TableCell>
                      Used to deliver relevant advertisements or track campaign
                      effectiveness.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </motion.section>

            <Separator className="my-8" />

            <motion.section
              id="cookies-in-use"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2>3. COOKIES IN USE</h2>
              <p>
                We may use the following services that place cookies on your
                device:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Google Analytics – for understanding Website traffic and user
                  behaviour.
                </li>
                <li>
                  Intercom or similar tools – for customer support and user
                  messaging.
                </li>
                <li>Stripe – for secure payment processing.</li>
                <li>
                  Authentication and session management cookies – for account
                  login and navigation.
                </li>
              </ul>
              <p>Examples of cookies we use:</p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cookie Name</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead>Expiry</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>_ga</TableCell>
                    <TableCell>Google Analytics</TableCell>
                    <TableCell>Website analytics</TableCell>
                    <TableCell>2 years</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>intercom-id-*</TableCell>
                    <TableCell>Intercom</TableCell>
                    <TableCell>Chat/messaging session</TableCell>
                    <TableCell>9 months</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>__stripe_mid</TableCell>
                    <TableCell>Stripe</TableCell>
                    <TableCell>Fraud prevention</TableCell>
                    <TableCell>1 year</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>session_token</TableCell>
                    <TableCell>Compl-Ai</TableCell>
                    <TableCell>Authentication/session</TableCell>
                    <TableCell>Session</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p>
                Cookies may be stored for different durations. Some expire when
                the session ends; others persist for up to 12 months or longer
                depending on the provider.
              </p>
              <p>
                For a full and updated list of cookies in use, contact us at{' '}
                <a
                  href="mailto:privacy@compl-ai.com"
                  className="text-primary hover:underline"
                >
                  privacy@compl-ai.com
                </a>
                .
              </p>
            </motion.section>

            <Separator className="my-8" />

            <motion.section
              id="manage-cookies"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2>4. HOW TO MANAGE COOKIES</h2>
              <p>You can control and/or delete cookies as you wish:</p>
              <ul className="list-disc pl-6">
                <li>
                  Adjust your browser settings to refuse or delete cookies.
                </li>
                <li>
                  Opt-out of specific third-party cookies using their opt-out
                  tools.
                </li>
              </ul>
              <p>Browser-specific guides:</p>
              <ul className="list-disc pl-6">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Edge
                  </a>
                </li>
              </ul>
              <p>
                Please note that disabling certain cookies may impact your user
                experience or the functionality of the Website.
              </p>
            </motion.section>

            <Separator className="my-8" />

            <motion.section
              id="policy-updates"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2>5. UPDATES TO THIS POLICY</h2>
              <p>
                We may update this Cookie Policy from time to time. When we do,
                we will revise the &rdquo;Last Updated&rdquo; date. Material
                changes will be clearly communicated on our Website.
              </p>
            </motion.section>

            <Separator className="my-8" />

            <motion.section
              id="contact-us-cookies"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2>6. CONTACT US</h2>
              <p>
                If you have any questions about our use of cookies or this
                Cookie Policy, please contact us at:
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:privacy@compl-ai.com"
                  className="text-primary hover:underline"
                >
                  privacy@compl-ai.com
                </a>
              </p>
              <p>
                <strong>Address:</strong> Brilliant AI Ltd, 1 Cathedral Square,
                Blackburn, England, BB1 1FB
              </p>
              <p>
                For more information on how we process your personal data,
                please refer to our Privacy Policy.
              </p>
            </motion.section>
          </motion.article>
        </ScrollAreaPrimitive.Viewport>
        <ScrollBar orientation="vertical" />
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    </div>
  );
}
