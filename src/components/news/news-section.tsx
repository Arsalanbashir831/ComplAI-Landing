'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { API_ROUTES } from '@/constants/routes';
import { ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import type { NewsData } from '@/types/news';

import { BlogCard } from './blog-card';

// stagger container from SolutionsSection
const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

// springy item animation from SolutionsSection
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 60,
            damping: 16,
            mass: 0.5,
        },
    },
};

export default function NewsSection() {
    const [newsData, setNewsData] = useState<NewsData | null>(null);
    const [loading, setLoading] = useState(true);

    // extract plain text + truncate
    const parseBodyContentToText = (htmlString: string, maxLength = 200): string => {
        if (typeof window === 'undefined') return '';
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        const text = doc.body.textContent || '';
        return text.slice(0, maxLength) + (text.length > maxLength ? '…' : '');
    };

    const formatDate = (isoString: string): string =>
        new Date(isoString).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                setLoading(true);
                const res = await fetch(API_ROUTES.GET_BLOGS);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setNewsData(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchNewsData();
    }, []);

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8 flex justify-center items-center h-96">
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                    <p className="text-lg font-medium text-gray-600">Loading news articles...</p>
                </div>
            </div>
        );
    }

    if (!newsData?.blogs?.length) {
        return <div className="container mx-auto px-4 py-8">No articles found.</div>;
    }

    // sort & split
    const sorted = [...newsData.blogs].sort(
        (a, b) => new Date(b.uploaded_at).getTime() - new Date(a.uploaded_at).getTime()
    );
    const featured = sorted[0];
    const recent = sorted.slice(1);

    return (
        <div className="container mx-auto px-12 py-8 bg-white">
            {/* Featured Article */}
            {featured && (
                <div className="mb-16">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-1/2 relative h-[300px] md:h-[380px] rounded-lg overflow-hidden">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${featured.image}`}
                                alt={featured.title}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col justify-between w-full md:w-1/2 space-y-4 h-96 py-4">
                            <div className="flex items-center gap-2 text-sm text-gray-400 bg-[#E2ECFF] px-3 py-1.5 rounded-full w-max">
                                <span className="bg-blue-600 text-white px-2 py-1 rounded-full">Latest</span>
                                {Math.ceil(
                                    (new DOMParser()
                                        .parseFromString(featured.content, 'text/html')
                                        .body.textContent!.split(/\s+/).length || 0) / 200
                                )}{' '}
                                min read
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{featured.title}</h2>
                            <p className="text-gray-700">{parseBodyContentToText(featured.content, 250)}</p>
                            <Link
                                href={`/news/${featured.id}`}
                                className="group inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Read More
                                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Recent Articles */}
            <div className="mb-8">
                <h2 className="text-4xl font-bold mb-6 text-blue-700">Recent News</h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {recent.map((blog, idx) => (
                        <motion.div
                            key={blog.id || idx}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className="cursor-pointer border border-transparent border-blue-400  rounded-2xl overflow-hidden bg-white hover:border hover:border-blue-400
                            hover:shadow-[0_0_24px_rgba(96,174,255,0.5)] shadow-[0_0_24px_rgba(96,174,255,0.1)]"
                        >
                            <BlogCard
                                date={formatDate(blog.uploaded_at)}
                                title={blog.title}
                                description={parseBodyContentToText(blog.content)}
                                imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${blog.image}`}
                                id={blog.id}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Load More */}
            <div className="flex justify-center mt-8">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Load More
                </button>
            </div>
        </div>
    );
}
