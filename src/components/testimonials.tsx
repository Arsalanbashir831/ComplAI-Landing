'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

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
      'Compl-AI has saved us thousands in compliance costs. We no longer need to rely on external consultants or spend hours on manual reviews. It’s a must-have for any law firm.',
    author: 'Chris Marsh',
    company: 'AWH Solicitors',
  },
  {
    id: 1,
    quote:
      'What used to take us days now takes seconds. The speed and accuracy of Compl-AI is incredible, letting us focus on growing our practice instead of chasing compliance deadlines.',
    author: 'Matthew Shiels',
    company: 'Cartwright King',
  },
  {
    id: 2,
    quote:
      'As a small startup law firm, we don’t have the resources for a dedicated compliance team. Compl-AI is like having an expert on hand 24/7, and it fits perfectly within our budget.',
    author: 'Ishtiaq Ahmed',
    company: 'Finchley Legal',
  },
  {
    id: 3,
    quote:
      'Compl-AI is incredibly user-friendly. It delivers instant answers to compliance questions, which means we can act immediately without wasting time searching for information.',
    author: 'Craig Cooper',
    company: 'Barings Law',
  },
  {
    id: 4,
    quote:
      'The time and cost savings are phenomenal. Compl-AI has streamlined our compliance processes, helping us stay ahead of regulations without the usual stress or expense.',
    author: 'Faraz Fazal',
    company: 'Veritas Solicitors',
  },
  {
    id: 5,
    quote:
      'The instant insights Compl-AI provides are a game-changer. It’s like having a compliance expert in your pocket, ready to guide you at a moment’s notice.',
    author: 'Saif Ullah Khan',
    company: 'Kaizen Law',
  },
  {
    id: 6,
    quote:
      'Since adopting Compl-AI, our team has been able to focus on the bigger picture instead of getting bogged down by compliance admin. It’s completely changed the way we work.',
    author: 'Adrian Biles',
    company: 'Child & Child',
  },
  {
    id: 7,
    quote:
      'Compl-AI has been a game-changer for our advisory process. It’s reliable, easy to use, and takes the guesswork out of helping our clients manage compliance. I can’t imagine going back to the old, manual methods.',
    author: 'Farook Patel',
    company: 'Xeinadin',
  },
  {
    id: 8,
    quote:
      'Advising law firms on complex regulations is challenging, but Compl-AI has made compliance checks faster, more accurate, and efficient. It’s now essential for ensuring my clients stay compliant with confidence.',
    author: 'Sean Bucknall',
    company: 'Quantuma',
  },
  {
    id: 9,
    quote:
      'Compl-AI gives us the confidence to fund with peace of mind, knowing the firms we work with are fully compliant. It’s streamlined our processes and ensures we can focus on funding the right cases without unnecessary risks.',
    author: 'Louisa Klouda',
    company: 'Fenchurch Legal',
  },
  {
    id: 10,
    quote:
      'With Compl-AI, we can lend with greater confidence, knowing the firms we support are meeting compliance standards. It’s transformed how we assess risk, saving time and ensuring our decisions are backed by reliable compliance insights.',
    author: 'Grant Cumbley',
    company: 'Nera Capital',
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
    <section className="py-16 px-4 md:px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-2 py-1.5 mb-4 text-sm font-medium rounded-lg bg-[#F1F2F6] space-x-1">
            <div className="bg-[#D5EAFF] rounded-lg px-3 py-1 text-primary">
              <Star size={12} />
            </div>
            <span>Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            See what all the talk
            <br />
            is about.
          </h2>
        </div>

        <div className="relative w-full overflow-hidden py-8">
          <div className="flex items-stretch justify-center gap-2">
            <AnimatePresence mode="popLayout" initial={false}>
              {items.slice(0, 5).map((item, index) => (
                <motion.div
                  key={`${item.id}-${index}`}
                  layoutId={String(item.id)}
                  className="relative cursor-pointer rounded-lg mx-2 flex-1"
                  initial={{
                    // opacity: 0,
                    x: index === 0 ? -100 : index === 2 ? 100 : 0,
                  }}
                  animate={{
                    // opacity: 1,
                    x: 0,
                    // scale: index === 2 ? 1 : 0.9,
                    // filter: index === 2 ? 'blur(0px)' : 'blur(3px)',
                    backgroundColor: index === 2 ? '#D7ECFF' : '#EDF8FF',
                  }}
                  exit={{
                    // opacity: 0,
                    x: index === 0 ? -100 : index === 2 ? 100 : 0,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 40,
                  }}
                  onClick={() => handleClick(item.id)}
                >
                  <div className="w-[300px] p-6 rounded-lg flex-1">
                    <div className="mb-4">
                      <Image
                        src="/images/icons/quote.svg"
                        width={40}
                        height={40}
                        alt="Quote icon"
                      />
                    </div>
                    <blockquote className="text-lg mb-4 line-clamp-6 overflow-ellipsis overflow-hidden">
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
              className="p-2 rounded-full text-primary border-primary shadow-md h-fit hover:bg-gray-200 hover:text-primary transition-all duration-300 ease-in-out hover:scale-105"
            >
              <ArrowLeft size={24} />
            </Button>
            <Button
              onClick={() => rotateItems('left')}
              className="p-2 rounded-full bg-primary text-white shadow-md h-fit transition-all duration-300 ease-in-out hover:scale-105"
            >
              <ArrowRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
