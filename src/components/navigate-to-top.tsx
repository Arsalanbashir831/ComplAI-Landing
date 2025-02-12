'use client';

import { ArrowUp } from 'lucide-react';

import { Button } from './ui/button';

export default function NavigateToTop() {
  return (
    <div className="absolute top-0 right-0 flex items-start justify-center h-full">
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="rounded-full h-fit p-2 text-primary bg-white transition-colors hover:bg-gray-200"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
}
