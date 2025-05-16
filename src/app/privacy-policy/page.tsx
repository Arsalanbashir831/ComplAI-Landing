'use client';

import React, { useRef } from 'react'; // Added React for useRef typing if needed

// If your ScrollArea component is the standard one from shadcn/ui,
// it exports ScrollArea (as Root) and ScrollBar. You'll need Viewport from Radix.
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';

// You'll also need the ScrollBar. If it's part of your ui components:
// import { ScrollBar } from '@/components/ui/scroll-area';
// For this example, we'll define a basic ScrollBar structure if you don't have one.

const sections = [
  { id: 'intro', title: 'Privacy Policy Overview' },
  { id: 'who-we-are', title: '1. WHO WE ARE' },
  { id: 'data-we-collect', title: '2. DATA WE COLLECT' },
  { id: 'how-we-use', title: '3. HOW WE USE YOUR DATA' },
  { id: 'legal-bases', title: '4. LEGAL BASES FOR PROCESSING' },
  { id: 'sharing-data', title: '5. SHARING YOUR DATA' },
  { id: 'cookies', title: '6. COOKIES AND TRACKING TECHNOLOGIES' },
  { id: 'data-retention', title: '7. DATA RETENTION' },
  { id: 'international-transfers', title: '8. INTERNATIONAL TRANSFERS' },
  { id: 'your-rights', title: '9. YOUR RIGHTS' },
  { id: 'security-measures', title: '10. SECURITY MEASURES' },
  { id: 'third-party-links', title: '11. THIRD-PARTY LINKS' },
  { id: 'childrens-privacy', title: "12. CHILDREN'S PRIVACY" },
  { id: 'policy-changes', title: '13. CHANGES TO THIS POLICY' },
  { id: 'contact-us', title: '14. CONTACT US' },
  { id: 'use-of-ai', title: '15. USE OF ARTIFICIAL INTELLIGENCE (AI)' },
];

// Basic ScrollBar component example (if not available from your UI library)
// This typically comes from shadcn/ui if you added scroll-area there.
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

export default function PrivacyPolicy() {
  const scrollableViewportRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col md:flex-row gap-10 px-6 md:px-20 lg:px-32 min-h-screen">
      {/* Sidebar TOC: Made sticky and scrollable if its content overflows */}
      <nav className="w-full md:w-64 lg:w-72 flex-shrink-0 p-4 mt-24 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto hidden md:block">
        {' '}
        {/* Adjust h-[] and top-[] as needed */}
        <h2 className="text-xl font-bold mb-4">Contents</h2>
        {sections.map(({ id, title }) => (
          <a
            key={id}
            href={`#${id}`}
            className="block py-1 hover:underline cursor-pointer text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              const sectionElement = document.getElementById(id);
              const viewportElement = scrollableViewportRef.current;

              if (sectionElement && viewportElement) {
                const yOffset = 16; // Desired padding from the top of the viewport (e.g., 1rem)

                // Position of the section's top relative to the browser viewport
                const sectionRect = sectionElement.getBoundingClientRect();
                // Position of the scrollable viewport's top relative to the browser viewport
                const viewportRect = viewportElement.getBoundingClientRect();

                // Calculate the section's top position relative to the *visible part* of the scrollable viewport
                const sectionTopRelativeToViewportVisibleArea =
                  sectionRect.top - viewportRect.top;

                // Determine the new scrollTop value for the viewport
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

      {/* Main content Scrollable: Using Radix UI primitives for explicit ref control */}
      <ScrollAreaPrimitive.Root
        className="flex-1 prose prose-lg max-w-none dark:prose-invert mt-24 relative overflow-hidden"
        style={{ height: `calc(100vh - 6rem)` }} // Assuming mt-24 is 6rem (96px). Adjust if your header/spacing is different.
        // Original was `calc(100vh - 32px)` which might be too tall if mt-24 is large.
      >
        <ScrollAreaPrimitive.Viewport
          ref={scrollableViewportRef} // Assign the ref to the Viewport
          className="h-full w-full rounded-[inherit]"
        >
          <article className="p-4 md:p-6 md:pb-0 lg:p-8 lg:pb-0">
            {' '}
            {/* Added more padding to article */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-4xl font-extrabold tracking-tight"
            >
              PRIVACY POLICY
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-1 font-semibold"
            >
              Effective Date: 16 May 2025
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-6 font-semibold"
            >
              Last Updated: 16 May 2025
            </motion.p>
            <motion.section
              id="intro"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p>
                Summary: This Privacy Policy explains how Brilliant AI Ltd,
                trading as Compl-Ai, collects, uses, and protects your personal
                data when you interact with our website and platform. We are
                committed to full compliance with UK GDPR and to maintaining
                your trust through clear, fair, and secure data practices.
              </p>
              <p>
                Brilliant AI Ltd (&rdquo;we&rdquo;, &rdquo;us&rdquo;, or
                &rdquo;our&rdquo;), trading as Compl-Ai, is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, share, and safeguard your personal data when you
                visit our website{' '}
                <a
                  href="https://compl-ai.com"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://compl-ai.com
                </a>{' '}
                (the &rdquo;Website&rdquo;) and use our services.
              </p>
            </motion.section>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11 />
            <Section12 />
            <Section13 />
            <Section14 />
            <Section15 />
          </article>
        </ScrollAreaPrimitive.Viewport>
        <ScrollBar orientation="vertical" />
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    </div>
  );
}

function Section1() {
  return (
    <motion.section
      id="who-we-are"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-2xl font-bold mb-4">1. WHO WE ARE</h2>
      <p>
        Brilliant AI Ltd is a company registered in England and Wales under
        company number 16134522. Our registered address is 1 Cathedral Square,
        Blackburn, England, BB1 1FB. We are the data controller for purposes of
        the UK General Data Protection Regulation (UK GDPR).
      </p>
      <p className="mt-4">
        For questions or concerns, contact us at:
        <br />
        <strong>Email:</strong>{' '}
        <a
          href="mailto:privacy@compl-ai.com"
          className="text-primary hover:underline"
        >
          privacy@compl-ai.com
        </a>
        <br />
        <strong>DPO Contact:</strong>{' '}
        <a
          href="mailto:dpo@compl-ai.com"
          className="text-primary hover:underline"
        >
          dpo@compl-ai.com
        </a>
      </p>
      <p className="mt-4">
        Our Data Protection Officer is registered with the Information
        Commissioner’s Office and holds relevant data protection and compliance
        credentials.
      </p>
    </motion.section>
  );
}

function Section2() {
  return (
    <motion.section
      id="data-we-collect"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-2xl font-bold mb-4">2. DATA WE COLLECT</h2>

      <h3 className="text-xl font-semibold mb-2">
        2.1 Information You Provide to Us
      </h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Contact details (name, email address, phone number)</li>
        <li>Company details (firm name, address, regulatory information)</li>
        <li>Account login details</li>
        <li>Payment and billing information</li>
        <li>Content of queries submitted through our platform</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        2.2 Information We Collect Automatically
      </h3>
      <ul className="list-disc list-inside space-y-1">
        <li>IP address, browser type, and operating system</li>
        <li>Device identifiers</li>
        <li>Usage data (e.g., pages viewed, time on site, query activity)</li>
        <li>Cookies and tracking data (see Section 6)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        2.3 Information from Third Parties
      </h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Payment processors (e.g., Stripe)</li>
        <li>Referral platforms or partners (where applicable)</li>
      </ul>
    </motion.section>
  );
}

function Section3() {
  return (
    <motion.section
      id="how-we-use"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-2xl font-bold mb-4">3. HOW WE USE YOUR DATA</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Provide, maintain, and improve our services</li>
        <li>Process payments and manage billing</li>
        <li>Respond to your queries and provide support</li>
        <li>Monitor and analyse usage trends</li>
        <li>Comply with legal obligations</li>
        <li>Improve the accuracy and effectiveness of our AI tools</li>
        <li>Market to you (with your consent)</li>
      </ul>
      <p className="mt-4">
        You may opt out of non-essential cookies, marketing emails, or
        participation in analytics tools by adjusting your account settings or
        contacting us at{' '}
        <a
          href="mailto:privacy@compl-ai.com"
          className="text-primary hover:underline"
        >
          privacy@compl-ai.com
        </a>
        .
      </p>
    </motion.section>
  );
}

function Section4() {
  return (
    <motion.section
      id="legal-bases"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-2xl font-bold mb-4">4. LEGAL BASES FOR PROCESSING</h2>
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-left">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Purpose
            </th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Legal Basis
            </th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Examples
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Provide and operate service
            </td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Contractual necessity
            </td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Account registration, AI query responses
            </td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-900">
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Improve the platform
            </td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Legitimate interests
            </td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Usage analytics, model testing
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Marketing communications
            </td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Consent
            </td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Email newsletters (opt-in only)
            </td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-900">
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Payment and billing
            </td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Contractual necessity
            </td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Stripe transactions
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Regulatory compliance
            </td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Legal obligation
            </td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              Financial record-keeping
            </td>
          </tr>
        </tbody>
      </table>
    </motion.section>
  );
}

function Section5() {
  return (
    <motion.section
      id="sharing-data"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-2xl font-bold mb-4">5. SHARING YOUR DATA</h2>
      <p>We may share your data with:</p>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>
          Sub-processors: such as OpenAI (for AI processing), Stripe (for
          payment processing), and cloud infrastructure providers
        </li>
        <li>Regulatory bodies: when required by law</li>
        <li>Professional advisers: such as auditors, lawyers, and insurers</li>
        <li>
          Third-party tools: for analytics, CRM, and support (e.g., Google
          Analytics, Intercom)
        </li>
      </ul>
      <p>
        We use OpenAI L.L.C. as a sub-processor to generate responses based on
        user-submitted queries. No personal data is intentionally shared for
        training purposes. All data transfers to OpenAI are governed by strict
        contractual safeguards, including UK-approved Standard Contractual
        Clauses.
      </p>
      <p className="mt-4 font-semibold">We never sell your personal data.</p>
    </motion.section>
  );
}

function Section6() {
  return (
    <motion.section
      id="cookies"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-2xl font-bold mb-4">
        6. COOKIES AND TRACKING TECHNOLOGIES
      </h2>
      <p>We use cookies and similar technologies to:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Remember user preferences</li>
        <li>Analyse website traffic</li>
        <li>Improve functionality and user experience</li>
      </ul>
      <p className="mt-4">
        You can manage cookie preferences through your browser settings. For
        browser-specific guidance, see:{' '}
        <a
          href="https://support.google.com/chrome/answer/95647"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Chrome
        </a>
        ,{' '}
        <a
          href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Safari
        </a>
        ,{' '}
        <a
          href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Firefox
        </a>
        ,{' '}
        <a
          href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
          className="text-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Edge
        </a>
        .
      </p>
      <p className="mt-4">
        For full details, please refer to our{' '}
        <a href="#" className="text-primary hover:underline">
          Cookie Policy
        </a>
        .
      </p>
    </motion.section>
  );
}

function Section7() {
  return (
    <motion.section
      id="data-retention"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-2xl font-bold mb-4">7. DATA RETENTION</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>For as long as your account is active</li>
        <li>
          For 36 months after account closure to support compliance
          verification, audit traceability, and analytics
        </li>
        <li>
          Anonymised usage data may be retained indefinitely for analytics
        </li>
      </ul>
      <p className="mt-4">
        You may request earlier deletion of your data unless we are required to
        retain it by law.
      </p>
    </motion.section>
  );
}

function Section8() {
  return (
    <motion.section
      id="international-transfers"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-2xl font-bold mb-4">8. INTERNATIONAL TRANSFERS</h2>
      <p>
        Some of our partners and sub-processors (e.g., OpenAI, Stripe) may
        process your data outside the UK or EEA. We ensure adequate safeguards
        such as:
      </p>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>Standard Contractual Clauses</li>
        <li>
          UK International Data Transfer Agreement (IDTA) or IDTA Addendum
        </li>
        <li>Data Processing Agreements with sub-processors</li>
      </ul>
      <p>
        Details of international transfers and safeguards are available upon
        request.
      </p>
    </motion.section>
  );
}

function Section9() {
  return (
    <motion.section
      id="your-rights"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-2xl font-bold mb-4">9. YOUR RIGHTS</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Access your personal data</li>
        <li>Rectify inaccurate data</li>
        <li>Erase your data (&rdquo;right to be forgotten&rdquo;)</li>
        <li>Restrict or object to processing</li>
        <li>Data portability</li>
        <li>Withdraw consent at any time</li>
        <li>
          Lodge a complaint with the Information Commissioner&rsquo;s Office
          (ICO)
        </li>
      </ul>
      <p className="mt-4">
        To exercise your rights, contact{' '}
        <a
          href="mailto:privacy@compl-ai.com"
          className="text-primary hover:underline"
        >
          privacy@compl-ai.com
        </a>
        .
      </p>
    </motion.section>
  );
}

function Section10() {
  return (
    <motion.section
      id="security-measures"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-2xl font-bold mb-4">10. SECURITY MEASURES</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Encryption in transit and at rest</li>
        <li>Multi-factor authentication</li>
        <li>Role-based access controls</li>
        <li>Regular security audits and penetration testing</li>
        <li>Staff training on data security and privacy</li>
      </ul>
      <p className="mt-4">
        For enhanced confidentiality, user-submitted queries are encrypted at
        rest and are not accessible to our staff except where needed for support
        or troubleshooting purposes.
      </p>
    </motion.section>
  );
}

function Section11() {
  return (
    <motion.section
      id="third-party-links"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-2xl font-bold mb-4">11. THIRD-PARTY LINKS</h2>
      <p>
        Our Website may contain links to third-party websites. We are not
        responsible for the privacy practices of those sites. We recommend
        reviewing their privacy policies.
      </p>
    </motion.section>
  );
}

function Section12() {
  return (
    <motion.section
      id="childrens-privacy"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-2xl font-bold mb-4">12. CHILDREN&apos;S PRIVACY</h2>
      <p>
        Our services are intended for users over 18 years of age. We do not
        knowingly collect data from children. If you believe a child has
        provided us with personal data, please contact us immediately.
      </p>
    </motion.section>
  );
}

function Section13() {
  return (
    <motion.section
      id="policy-changes"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-2xl font-bold mb-4">13. CHANGES TO THIS POLICY</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of material changes via email or through a notice on our Website. Please
        review it periodically.
      </p>
      <p className="mt-4">
        Last major update: Privacy Policy v1.0 – Initial version published 16
        May 2025 (includes AI processing transparency, sub-processor disclosure,
        and data retention policy).
      </p>
    </motion.section>
  );
}

function Section14() {
  return (
    <motion.section
      id="contact-us"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-2xl font-bold mb-4">14. CONTACT US</h2>
      <p>
        For questions, concerns, or to exercise your rights, contact:
        <br />
        <strong>Email:</strong>{' '}
        <a
          href="mailto:privacy@compl-ai.com"
          className="text-primary hover:underline"
        >
          privacy@compl-ai.com
        </a>
        <br />
        <strong>DPO Contact:</strong>{' '}
        <a
          href="mailto:dpo@compl-ai.com"
          className="text-primary hover:underline"
        >
          dpo@compl-ai.com
        </a>
        <br />
        <strong>Address:</strong> Brilliant AI Ltd, 1 Cathedral Square,
        Blackburn, England, BB1 1FB
      </p>
    </motion.section>
  );
}

function Section15() {
  return (
    <motion.section
      id="use-of-ai"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h2 className="text-2xl font-bold mb-4">
        15. USE OF ARTIFICIAL INTELLIGENCE (AI)
      </h2>
      <p>
        We use AI technologies, including large language models, to analyse
        user-submitted compliance queries and generate responses. These systems
        do not make decisions about individuals, and all outputs are reviewed or
        applied by human users. Where AI is used, we apply human oversight, bias
        mitigation controls, and regular model updates to improve fairness and
        accuracy.
      </p>
      <p className="mt-4">
        We do not use your personal data for automated decision-making that
        produces legal or similarly significant effects under Article 22 of the
        UK GDPR.
      </p>
      <p className="mt-4">
        While we do not use automated decision-making with legal effects, we may
        use automated profiling techniques to improve response relevance,
        understand user preferences, and optimise service performance. These
        processes are subject to human oversight and never produce legal or
        similarly significant outcomes.
      </p>
    </motion.section>
  );
}
