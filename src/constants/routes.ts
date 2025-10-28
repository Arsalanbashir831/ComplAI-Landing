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
  SIGN_IN: 'https://app.compl-ai.co.uk/auth',
  REGISTER: 'https://app.compl-ai.co.uk/auth/sign-up',
  ADMIN: {
    DASHBOARD: '/admin',
    AUTH: '/admin/auth',
    BLOGS: '/admin?blogs',
    EARLY_ACCESS: '/admin/early-access',
  },
} as const;

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'https://api.compl-ai.co.uk';

export const API_ROUTES = {
  // Blog API routes - direct to backend
  GET_BLOGS: `${BACKEND_URL}/api/blogs/`,
  GET_BLOGS_ID(id: string) {
    return `${BACKEND_URL}/api/blogs/${id}/`;
  },
  GET_BLOGS_BY_SLUG(slug: string) {
    return `${BACKEND_URL}/api/blogs/by_slug/${slug}/`;
  },
  CREATE_BLOG: `${BACKEND_URL}/api/blogs/`,
  UPDATE_BLOG(id: string) {
    return `${BACKEND_URL}/api/blogs/${id}/`;
  },
  DELETE_BLOG(id: string) {
    return `${BACKEND_URL}/api/blogs/${id}/`;
  },
  FILTER_BLOGS_BY_DATE: `${BACKEND_URL}/api/blogs/filter_by_date/`,

  // Email API route - still using Next.js API
  SEND_EMAIL: `/api/send-email`,
};
