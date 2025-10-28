import { NEWS_META_DATA } from '@/constants/meta-data';
import { Metadata } from 'next';
import { ReactNode } from 'react';

interface NewsLayoutProps {
  children: ReactNode;
}
// layout metadataa
export const metadata: Metadata = NEWS_META_DATA;

export default function NewsLayout({ children }: NewsLayoutProps) {
  return <main>{children}</main>;
}
