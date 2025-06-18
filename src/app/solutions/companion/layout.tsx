import { ReactNode } from 'react';
import { Metadata } from 'next';
import { COMPANION_META_DATA } from '@/constants/meta-data';

interface CompanionLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = COMPANION_META_DATA;

export default function CompanionLayout({ children }: CompanionLayoutProps) {
  return <main>{children}</main>;
}
