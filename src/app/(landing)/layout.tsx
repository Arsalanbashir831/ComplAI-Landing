import type { Metadata } from 'next';
import { HOME_META_DATA } from '@/constants/meta-data';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import NavigateToTop from '@/components/navigate-to-top';

export const metadata: Metadata = HOME_META_DATA;

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <NavigateToTop />
      <Footer />
    </>
  );
}
