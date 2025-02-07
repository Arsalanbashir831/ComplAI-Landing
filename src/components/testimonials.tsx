'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Button } from './ui/button';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 0,
    quote:
      'As a small startup law firm, we don’t have the resources for a dedicated compliance team. Compl-AI is like having an expert on hand 24/7, and it fits perfectly within our budget',
    author: 'Ishtiaq Ahmed',
    company: 'Finchley Legal',
  },
  {
    id: 1,
    quote:
      'Advising law firms on complex regulations is challenging, but Compl-AI has made compliance checks faster, more accurate, and efficient. It’s now essential for ensuring my clients stay compliant with confidence.',
    author: 'Sean Bucknall',
    company: 'Quantuma',
  },
  {
    id: 2,
    quote:
      'Compl-AI has been a game-changer for our advisory process. It’s reliable, easy to use, and takes the guesswork out of helping our clients manage compliance. I can’t imagine going back to the old, manual methods.',
    author: 'Saif Ullah Khan',
    company: 'Kaizen Law',
  },
  {
    id: 3,
    quote:
      'The time and cost savings are phenomenal. Compl-AI has streamlined our compliance processes, helping us stay ahead of regulations without the usual stress or expense.',
    author: 'Faraz Fazal',
    company: 'Veritas Solicitors',
  },
  {
    id: 4,
    quote:
      'The time and cost savings are phenomenal. Compl-AI has streamlined our compliance processes and ensures nothing slips through the usual stress of deadlines.',
    author: 'Peter Head',
    company: 'Vertex Legal',
  },
];

export default function TestimonialCarousel() {
  const [items, setItems] = useState(testimonials);
  const focusedIndex = 2;

  const rotateItems = useCallback((direction: 'left' | 'right') => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      if (direction === 'right') {
        const lastItem = newItems.pop()!;
        newItems.unshift(lastItem);
      } else {
        const firstItem = newItems.shift()!;
        newItems.push(firstItem);
      }
      return newItems;
    });
  }, []);

  const handleClick = useCallback(
    (clickedId: number) => {
      const clickedIndex = items.findIndex((item) => item.id === clickedId);
      if (clickedIndex === focusedIndex) return;

      const direction = clickedIndex > focusedIndex ? 'left' : 'right';
      const rotations =
        direction === 'left'
          ? clickedIndex - focusedIndex
          : focusedIndex - clickedIndex;

      for (let i = 0; i < rotations; i++) {
        rotateItems(direction);
      }
    },
    [items, focusedIndex, rotateItems]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      rotateItems('left');
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(intervalId);
  }, [rotateItems]);

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
            Testimonials
          </div>
          <h2 className="text-4xl font-bold mb-4">
            See what all the talk
            <br />
            is about.
          </h2>
        </div>

        <div className="relative w-full overflow-hidden py-8">
          <div className="flex items-center justify-center gap-2">
            <AnimatePresence mode="popLayout" initial={false}>
              {items.slice(0, 5).map((item, index) => (
                <motion.div
                  key={item.id}
                  layoutId={String(item.id)}
                  className="relative cursor-pointer rounded-lg"
                  initial={{
                    opacity: 0,
                    x: index === 0 ? -100 : index === 2 ? 100 : 0,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: index === 2 ? 1 : 0.9,
                    filter: index === 2 ? 'blur(0px)' : 'blur(1.5px)',
                    backgroundColor: index === 2 ? '#D7ECFF' : '#EDF8FF',
                  }}
                  exit={{
                    opacity: 0,
                    x: index === 0 ? -100 : index === 2 ? 100 : 0,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 40,
                  }}
                  onClick={() => handleClick(item.id)}
                >
                  <div className="w-[300px] p-6 rounded-lg shadow-lg">
                    <div className="mb-4">
                      <Image
                        src="/images/icons/quote.svg"
                        width={40}
                        height={40}
                        alt="Quote icon"
                      />
                    </div>
                    <blockquote className="text-lg mb-4">
                      {item.quote}
                    </blockquote>
                    <footer>
                      <cite className="not-italic font-semibold">
                        {item.author}
                      </cite>
                      <div className="text-sm text-gray-500">
                        {item.company}
                      </div>
                    </footer>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => rotateItems('right')}
              className="p-2 rounded-full text-primary border-primary shadow-md h-fit hover:bg-gray-200 hover:text-primary"
            >
              <ArrowLeft size={24} />
            </Button>
            <Button
              onClick={() => rotateItems('left')}
              className="p-2 rounded-full bg-primary text-white shadow-md h-fit"
            >
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
