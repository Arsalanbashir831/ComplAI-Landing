'use client';

import Image from 'next/image';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
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

export default function TestimonialCarousel({
  showBadge = false,
}: {
  showBadge?: boolean;
}) {
  return (
    <section className="py-16 px-6 md:px-10 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {showBadge && (
          <div className="inline-flex items-center justify-center px-3 py-2 mb-6 text-sm font-medium rounded-lg bg-[#F1F2F6] space-x-2">
            <div className="bg-[#D5EAFF] rounded-lg px-3 py-1 text-primary">
              <Star size={12} />
            </div>
            <span>Testimonials</span>
          </div>
        )}

        <h2 className="text-center text-4xl md:text-6xl font-bold mb-10">
          See what all the talk
          <br />
          is about.
        </h2>

        {/* Swiper Container */}
        <Swiper
          modules={[Navigation, Pagination]}
          // Distance between slides (in px)
          spaceBetween={24}
          // Responsive slides per view
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          // Enable looping
          loop={true}
          // Custom pagination (bullets) container
          // pagination={{
          //   el: '.swiper-pagination-custom',
          //   clickable: true,
          // }}
          // Custom navigation buttons
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          className="pb-6"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="max-w-[340px] mx-auto p-6 bg-[#EDF8FF] rounded-lg shadow-lg h-[300px] flex flex-col">
                <div className="mb-4">
                  <Image
                    src="/images/icons/quote.svg"
                    width={40}
                    height={40}
                    alt="Quote icon"
                  />
                </div>
                <blockquote className="text-lg mb-6 line-clamp-6 overflow-ellipsis overflow-hidden flex-grow">
                  {testimonial.quote}
                </blockquote>
                <footer>
                  <cite className="not-italic font-semibold">
                    {testimonial.author}
                  </cite>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </footer>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination + Arrows Container */}
        <div className="flex justify-between items-center mt-6 px-2 md:px-0">
          {/* Custom pagination container */}
          <div className="swiper-pagination-custom" />

          {/* Custom arrow buttons */}
          <div className="flex space-x-3">
            <button
              className="swiper-button-prev-custom p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              aria-label="Previous"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              className="swiper-button-next-custom p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
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
