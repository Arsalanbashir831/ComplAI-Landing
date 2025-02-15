import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

import { cn } from '@/lib/utils';

export function Logo({
  href = ROUTES.HOME,
  className,
  inverted = false,
}: {
  href?: string;
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn('flex items-center justify-center', className)}
    >
      <Image
        src={inverted ? '/logo-white.svg' : '/logo.svg'}
        alt="Compl-AI"
        width={150}
        height={150}
        priority
      />
    </Link>
  );
}
