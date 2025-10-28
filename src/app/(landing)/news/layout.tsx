import { ReactNode } from 'react';
import { Metadata } from 'next';
import { NEWS_META_DATA } from '@/constants/meta-data';

interface NewsLayoutProps {
  children: ReactNode;
}
// layout metadata
export const metadata: Metadata = NEWS_META_DATA;

export default function NewsLayout({ children }: NewsLayoutProps) {
  return <main>{children}</main>;
}
