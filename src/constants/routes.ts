export const ROUTES = {
    HOME: '/',
    FEATURES: '/features',
    PRICING: '/pricing',
    ABOUT: '/about',
    NEWS: '/news',
    DEMO: '/demo',
    CONTACT: '/contact',
    PRIVACY: '/privacy',
    SIGN_IN: 'https://compl-ai-frontend.vercel.app/',
    REGISTER: 'https://compl-ai-frontend.vercel.app/sign-up',
} as const;

export const API_ROUTES = {
    GET_BLOGS: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`,
    GET_BLOGS_ID(id: string) {
        return `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}`;
    },
};
