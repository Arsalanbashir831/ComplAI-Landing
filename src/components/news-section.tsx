'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { API_ROUTES } from '@/constants/routes';
import type { NewsData } from '@/types/news';
import { NewsCard } from '@/components/news-card';

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

// Desktop slide-up + spring
const desktopItemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 60, damping: 16, mass: 0.5 },
    },
};

// Mobile fade-in only
const mobileItemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function NewsSection() {
    const [newsData, setNewsData] = useState<NewsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    // 1) Detect mobile vs desktop
    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth < 768);
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    // 2) Fetch news once
    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const res = await fetch(API_ROUTES.GET_BLOGS);
                if (!res.ok) throw new Error(res.statusText);
                const data = await res.json();
                setNewsData(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    // 3) Helper to strip HTML + truncate
    const parseText = (html: string, max = 200) => {
        if (typeof window === 'undefined') return '';
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const txt = doc.body.textContent || '';
        return txt.slice(0, max) + (txt.length > max ? '…' : '');
    };
    // 4) Helper to format date
    const fmtDate = (iso: string) =>
        new Date(iso).toLocaleDateString('en-GB', {
            day: '2-digit', month: 'short', year: 'numeric',
        });

    // 5) Scroll-into-view for mobile dots
    const scrollToCard = (idx: number) => {
        cardRefs.current[idx]?.scrollIntoView({
            behavior: 'smooth', block: 'nearest', inline: 'center',
        });
        setActiveIndex(idx);
    };

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8 flex justify-center items-center h-96">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="mt-4 text-gray-600">Loading news articles...</p>
                </div>
            </div>
        );
    }

    const blogs = newsData?.blogs || [];
    const latest = blogs
        .slice()
        .sort((a, b) => +new Date(b.uploaded_at) - +new Date(a.uploaded_at))
        .slice(0, 3);

    return (
        <section className="py-20 px-4 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-8">
                    <motion.h2
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-semibold"
                    >
                        Latest News
                    </motion.h2>

                    <Link href="/news">
                        <Button className="group font-medium transition-all duration-300 ease-in-out">
                            Browse All{' '}
                            <ArrowRight className="ml-0.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                {/* Cards container: flex+scroll on mobile, grid on lg+ */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="
            flex gap-6 overflow-x-auto overflow-y-hidden whitespace-nowrap
            lg:overflow-x-visible lg:grid lg:grid-cols-3
            py-10 px-4
          "
                >
                    {latest.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            variants={isMobile ? mobileItemVariants : desktopItemVariants}
                            whileHover={isMobile ? undefined : { scale: 1.03 }}
                            transition={isMobile ? undefined : { type: 'spring', stiffness: 300, damping: 20 }}
                            ref={(el) => {
                                cardRefs.current[idx] = el; // ← using a block so the function returns void
                            }}
                            className="flex-shrink-0 w-80 lg:w-auto h-full"
                        >
                            <NewsCard
                                id={post.id}
                                title={post.title}
                                description={parseText(post.content)}
                                imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${post.image}`}
                                date={fmtDate(post.uploaded_at)}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile navigation dots */}
                <div className="flex lg:hidden justify-center mt-6 gap-2">
                    {latest.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToCard(idx)}
                            className={`w-3 h-3 rounded-full ${activeIndex === idx ? 'bg-blue-600' : 'bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
