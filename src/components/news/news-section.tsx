'use client';

import { useState } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NewsCard } from '@/components/news-card';

// Sample news data
const newsData = [
  {
    id: 1,
    category: 'Startup',
    date: 'Feb 6, 2025',
    title: 'Startup News',
    description: 'Latest in startups.',
    imageUrl: '/images/card-placeholder-img.png',
    href: '/news/1',
    avatar: {
      name: 'John Doe',
      image: 'https://github.com/shadcn.png',
    },
    readingTime: '3 min read',
  },
  {
    id: 2,
    category: 'Company',
    date: 'Feb 7, 2025',
    title: 'Company Update',
    description: 'Big moves in companies.',
    imageUrl: '/images/card-placeholder-img.png',
    href: '/news/2',
    readingTime: '5 min read',
    avatar: {
      name: 'Jane Doe',
      image: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 3,
    category: 'Tech',
    date: 'Feb 8, 2025',
    title: 'Tech Advancements',
    description: 'Latest in tech world.',
    imageUrl: '/images/card-placeholder-img.png',
    href: '/news/3',
    readingTime: '7 min read',
    avatar: {
      name: 'John Doe',
      image: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 4,
    category: 'Chatbot',
    date: 'Feb 9, 2025',
    title: 'Chatbot Trends',
    description: 'AI chatbot revolution.',
    imageUrl: '/images/card-placeholder-img.png',
    href: '/news/4',
    readingTime: '4 min read',
    avatar: {
      name: 'Jane Doe',
      image: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 5,
    category: 'Chatbot',
    date: 'Feb 9, 2025',
    title: 'Chatbot Trends',
    description: 'AI chatbot revolution.',
    imageUrl: '/images/card-placeholder-img.png',
    href: '/news/4',
    readingTime: '4 min read',
    avatar: {
      name: 'Jane Doe',
      image: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 6,
    category: 'Chatbot',
    date: 'Feb 9, 2025',
    title: 'Chatbot Trends',
    description: 'AI chatbot revolution.',
    imageUrl: '/images/card-placeholder-img.png',
    href: '/news/4',
    readingTime: '4 min read',
    avatar: {
      name: 'Jane Doe',
      image: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 7,
    category: 'Chatbot',
    date: 'Feb 9, 2025',
    title: 'Chatbot Trends',
    description: 'AI chatbot revolution.',
    imageUrl: '/images/card-placeholder-img.png',
    href: '/news/4',
    readingTime: '4 min read',
    avatar: {
      name: 'Jane Doe',
      image: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 8,
    category: 'Chatbot',
    date: 'Feb 9, 2025',
    title: 'Chatbot Trends',
    description: 'AI chatbot revolution.',
    imageUrl: '/images/card-placeholder-img.png',
    href: '/news/4',
    readingTime: '4 min read',
    avatar: {
      name: 'Jane Doe',
      image: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 9,
    category: 'Chatbot',
    date: 'Feb 9, 2025',
    title: 'Chatbot Trends',
    description: 'AI chatbot revolution.',
    imageUrl: '/images/card-placeholder-img.png',
    href: '/news/4',
    readingTime: '4 min read',
    avatar: {
      name: 'Jane Doe',
      image: 'https://github.com/shadcn.png',
    },
  },
  {
    id: 10,
    category: 'Chatbot',
    date: 'Feb 9, 2025',
    title: 'Chatbot Trends',
    description: 'AI chatbot revolution.',
    imageUrl: '/images/card-placeholder-img.png',
    href: '/news/4',
    readingTime: '4 min read',
    avatar: {
      name: 'Jane Doe',
      image: 'https://github.com/shadcn.png',
    },
  },
];

const categories = ['All', 'Startup', 'Company', 'Tech', 'Chatbot'];

export default function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter news based on selected category
  const filteredNews =
    selectedCategory === 'All'
      ? newsData
      : newsData.filter((news) => news.category === selectedCategory);

  return (
    <div className="p-6">
      {/* Tabs */}
      <Tabs defaultValue="All" onValueChange={setSelectedCategory}>
        <TabsList className="flex space-x-3 mb-6 bg-transparent">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="data-[state=active]:bg-primary data-[state=active]:text-white py-2 rounded-full bg-gray-light w-24"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* News Grid */}
        <TabsContent value={selectedCategory}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
