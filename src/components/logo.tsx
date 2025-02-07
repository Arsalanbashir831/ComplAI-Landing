import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function Logo({
  href = ROUTES.HOME,
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn('flex items-center justify-center', className)}
    >
      <Image
        src="/logo.svg"
        alt={siteConfig.name}
        width={150}
        height={150}
        priority
      />
    </Link>
  );
}
