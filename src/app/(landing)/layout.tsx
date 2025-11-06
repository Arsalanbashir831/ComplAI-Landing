import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import NavigateToTop from '@/components/navigate-to-top';
import { HOME_META_DATA } from '@/constants/meta-data';
import type { Metadata, } from 'next';

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
