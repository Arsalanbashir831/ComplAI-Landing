import type React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CTAButtonProps {
  variant?: 'default' | 'outline';
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({
  variant = 'default',
  href,
  children,
  className,
}: CTAButtonProps) {
  return (
    <Button
      asChild
      variant={variant}
      className={cn(
        'rounded-full px-8',
        variant === 'outline' && 'bg-white hover:bg-white/90',
        className
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
