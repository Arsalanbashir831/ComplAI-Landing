export const ROUTES = {
  HOME: '/',
  COMPANION: '/solutions/companion',
  RESOLVE: '/solutions/resolve',
  REVIEW: '/solutions/review',
  AUDIT: '/solutions/audit',
  COMPOSE: '/solutions/compose',
  VALIDATE: '/solutions/validate',
  FEATURES: '/features',
  PRICING: '/pricing',
  ABOUT: '/about',
  NEWS: '/news',
  DEMO: '/demo',
  CONTACT: '/contact',
  PRIVACY_POLICY: '/privacy-policy',
  COOKIE_POLICY: '/cookie-policy',
  USER_AGREEMENT_POLICY: '/user-agreement',
  SIGN_IN: 'https://compl-ai-frontend.vercel.app/',
  REGISTER: 'https://compl-ai-frontend.vercel.app/',
} as const;

export const API_ROUTES = {
  GET_BLOGS: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`,
  GET_BLOGS_ID(id: string) {
    return `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}`;
  },
};
