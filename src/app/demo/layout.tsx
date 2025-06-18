import { ReactNode } from 'react';
import { Metadata } from 'next';
import { DEMO_META_DATA } from '@/constants/meta-data';

interface DemoLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = DEMO_META_DATA;

export default function DemoLayout({ children }: DemoLayoutProps) {
  return <main>{children}</main>;
}
