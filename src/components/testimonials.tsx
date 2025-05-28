'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
      'Compl-AI has saved us thousands and made compliance faster and easier. We spend less time on reviews and no longer rely on consultants. A smart choice for any firm.',
    author: 'Chris Marsh',
    company: 'AWH Solicitors',
  },
  {
    id: 1,
    quote:
      'What used to take days now takes seconds. Compl-AI’s speed and accuracy let us stay compliant while focusing on growing our practice.',
    author: 'Matthew Shiels',
    company: 'Cartwright King',
  },
  {
    id: 2,
    quote:
      'As a small firm, we cannot afford external consultants. Compl-AI gives us expert support whenever we need it and fits comfortably within our budget.',
    author: 'Ishtiaq Ahmed',
    company: 'Finchley Legal',
  },
  {
    id: 3,
    quote:
      'Compl-AI is easy to use and gives instant answers to our compliance questions. We act faster without wasting time searching for the right information.',
    author: 'Craig Cooper',
    company: 'Barings Law',
  },
  {
    id: 4,
    quote:
      'The time and cost savings are outstanding. Compl-AI has simplified our compliance work and helps us stay ahead without the usual stress or expense.',
    author: 'Faraz Fazal',
    company: 'Veritas Solicitors',
  },
  {
    id: 5,
    quote:
      'The instant insights from Compl-AI are a game changer. It is like having a compliance expert on hand whenever you need one.',
    author: 'Saif Ullah Khan',
    company: 'Kaizen Law',
  },
  {
    id: 6,
    quote:
      'Since using Compl-AI, we focus on the bigger picture instead of getting stuck in compliance admin. It has completely changed how we work.',
    author: 'Adrian Biles',
    company: 'Child & Child',
  },
  {
    id: 7,
    quote:
      'Compl-AI has transformed our advisory process. It is reliable, easy to use, and removes the guesswork from client compliance. We would not go back to manual methods.',
    author: 'Farook Patel',
    company: 'Xeinadin',
  },
  {
    id: 8,
    quote:
      'Helping law firms navigate complex regulations is tough, but Compl-AI makes compliance checks faster and more accurate. It is now essential for keeping my clients confident and compliant.',
    author: 'Sean Bucknall',
    company: 'Quantuma',
  },
  {
    id: 9,
    quote:
      'Compl-AI gives us peace of mind when funding, knowing the firms we support are compliant. It has streamlined our process and helps us focus on the right cases without added risk.',
    author: 'Louisa Klouda',
    company: 'Fenchurch Legal',
  },
  {
    id: 10,
    quote:
      'With Compl-AI, we lend with greater confidence knowing firms meet compliance standards. It has improved how we assess risk, saving time and guiding better decisions.',
    author: 'Grant Cumbley',
    company: 'Nera Capital',
  },
];

// A shared “fluid” spring for items
const springVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 20, mass: 0.5 },
  },
};

export default function TestimonialCarousel({
  showBadge = false,
}: {
  showBadge?: boolean;
}) {
  return (
    <section className="py-16 px-6 md:px-12 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Optional badge */}
        {showBadge && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={springVariant}
            className="inline-flex items-center justify-center px-3 py-2 mb-6 text-sm font-medium rounded-lg bg-[#F1F2F6] space-x-2"
          >
            <div className="bg-[#D5EAFF] rounded-lg px-3 py-1 text-primary">
              <Star size={12} />
            </div>
            <span>Testimonials</span>
          </motion.div>
        )}

        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={springVariant}
          className="text-center text-4xl md:text-5xl font-bold mb-10"
        >
          See <span className="text-primary">what all the talk</span>
          <br />
          is about.
        </motion.h2>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          loop
          speed={800} // slower slide for smoothness
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          grabCursor
          // pagination={{ clickable: true }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          className="pb-8"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={springVariant}
                className="max-w-[340px] mx-auto p-4 bg-[#EDF8FF] rounded-lg h-[350px] flex flex-col"
              >
                <div className="mb-4">
                  <Image
                    src="/images/icons/quote.svg"
                    width={40}
                    height={40}
                    alt="Quote icon"
                  />
                </div>
                <blockquote className="text-lg mb-6 overflow-ellipsis overflow-hidden flex-grow">
                  {t.quote}
                </blockquote>
                <footer>
                  <cite className="not-italic font-semibold">{t.author}</cite>
                  <div className="text-sm text-gray-500">{t.company}</div>
                </footer>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination + Arrows */}
        <div className="flex justify-between items-center mt-6 px-2 md:px-0">
          <div className="swiper-pagination-custom" />
          <div className="flex space-x-3">
            <button
              className="swiper-button-prev-custom p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
              aria-label="Previous"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              className="swiper-button-next-custom p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
              aria-label="Next"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
