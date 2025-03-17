'use client';

import { newsData } from "@/constants/news";
import { NewsCard } from "../news-card";

// Sample news data


export default function NewsSection() {
  return (
    <div className="p-6">
      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news, index) => (
          <NewsCard key={index}
            date={news.date}
            title={news.title}
            description={news.description}
            imageUrl={news.imageUrl}
            id={news.id}
          />
        ))}
      </div>
    </div>
  );
}
