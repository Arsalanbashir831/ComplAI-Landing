'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Logo } from './logo';
import TopNavItems from './top-nav-items';

export function MobileSideNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="block border-none p-2 h-fit md:hidden"
          aria-label="Open Mobile Menu"
        >
          <Menu className="!w-6 !h-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="p-6"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <SheetHeader>
          <SheetTitle>
            <Logo className="justify-start" />
          </SheetTitle>
        </SheetHeader>

        {/* Mobile Nav Items */}
        <div className="mt-6">
          <TopNavItems
            className="flex flex-col gap-4"
            onLinkClick={() => setOpen(false)}
          />
        </div>

        {/* Mobile Sign In / Register */}
        <div className="mt-8 flex flex-col gap-4">
          <Button variant="ghost" asChild className="text-primary">
            <Link href={ROUTES.SIGN_IN}>Sign In</Link>
          </Button>
          <Button asChild className="rounded-lg">
            <Link href={ROUTES.REGISTER}>Register</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
