import { Metadata } from 'next';
import { API_ROUTES } from '@/constants/routes';

function cleanAndTruncateDescription(
  text: string,
  maxLength: number = 160
): string {
  let cleanedText = text.replace(/#{1,6}\s/g, '');

  cleanedText = cleanedText.replace(/(\*\*|__)(.*?)\1/g, '$2');

  cleanedText = cleanedText.replace(/(\*|_)(.*?)\1/g, '$2');

  cleanedText = cleanedText.replace(/\n/g, ' ');

  cleanedText = cleanedText.trim();

  if (cleanedText.length > maxLength) {
    const truncated = cleanedText.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace !== -1) {
      return truncated.substring(0, lastSpace) + '...';
    }
    return truncated + '...';
  }

  return cleanedText;
}

const getNewsItem = async (id: string) => {
  try {
    if (typeof id !== 'string') return;
    const response = await fetch(API_ROUTES.GET_BLOGS_ID(id));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news data:', error);
  }
};

type Props = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
};

export async function generateMetadata(
  { params: paramsPromise }: Props
  // parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await paramsPromise;
  const blog = await getNewsItem(params.id);

  // Default/Fallback metadata if blog not found or error
  if (!blog) {
    return {
      title: 'Article Not Found | Brilliant AI',
      description:
        'The news article you are looking for does not exist or could not be loaded.',
      openGraph: {
        title: 'Article Not Found | Brilliant AI',
        description:
          'The news article you are looking for does not exist or could not be loaded.',
        url: `${process.env.NEXT_PUBLIC_LANDING_URL}/news/${params.id}`,
        siteName: 'Brilliant AI',
        images: [`${process.env.NEXT_PUBLIC_LANDING_URL}/logo.png`],
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Article Not Found | Brilliant AI',
        description:
          'The news article you are looking for does not exist or could not be loaded.',
        images: [`${process.env.NEXT_PUBLIC_LANDING_URL}/logo.png`],
      },
    };
  }

  // Generate cleaned and truncated description
  const cleanDescription = cleanAndTruncateDescription(blog.content);

  // Blog-specific metadata
  return {
    title: blog.title,
    description: cleanDescription,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_LANDING_URL}/news/${blog.id}`,
    },
    openGraph: {
      title: blog.title,
      description: cleanDescription,
      url: `${process.env.NEXT_PUBLIC_LANDING_URL}/news/${blog.id}`,
      siteName: 'Brilliant AI',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/${blog.image}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: 'article',
      // publishedTime: blog.publishedDate,
      section: 'News',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: cleanDescription,
      site: '@BrilliantAI',
      creator: '@YourCreatorHandle',
      images: [blog.thumbnailUrl],
    },
  };
}

export default function NewsArticleLayout({ children }: Props) {
  return <>{children}</>;
}
