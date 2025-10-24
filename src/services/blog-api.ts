/**
 * Blog API service for communicating with the dedicated backend
 */

import { API_ROUTES } from '@/constants/routes';

export interface Blog {
  id: string;
  title: string;
  content: string;
  slug: string;
  thumbnail: string | null;
  createdAt: number;
  updatedAt: number;
}

export interface BlogListResponse {
  results: Blog[];
  pagination: {
    page: number;
    page_size: number;
    total_count: number;
    total_pages: number;
    has_next: boolean;
    has_previous: boolean;
  };
}

export interface CreateBlogResponse {
  message: string;
  data: Blog;
}

export interface UpdateBlogResponse {
  message: string;
  data: Blog;
}

export interface DeleteBlogResponse {
  message: string;
}

/**
 * Get all blogs with pagination and search
 */
export async function getAllBlogs(
  page: number = 1,
  pageSize: number = 20,
  search?: string
): Promise<BlogListResponse> {
  const params = new URLSearchParams({
    page: page.toString(),
    page_size: pageSize.toString(),
  });

  if (search) {
    params.append('search', search);
  }

  const response = await fetch(`${API_ROUTES.GET_BLOGS}?${params}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch blogs: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/**
 * Get a single blog by ID
 */
export async function getBlogById(id: string): Promise<Blog> {
  const response = await fetch(API_ROUTES.GET_BLOGS_ID(id), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Blog not found');
    }
    throw new Error(
      `Failed to fetch blog: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/**
 * Get a blog by slug
 */
export async function getBlogBySlug(slug: string): Promise<Blog> {
  const response = await fetch(API_ROUTES.GET_BLOGS_BY_SLUG(slug), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Blog not found');
    }
    throw new Error(
      `Failed to fetch blog: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/**
 * Create a new blog
 */
export async function createBlog(
  title: string,
  content: string,
  thumbnail?: File
): Promise<CreateBlogResponse> {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);

  if (thumbnail) {
    formData.append('thumbnail', thumbnail);
  }

  const response = await fetch(API_ROUTES.CREATE_BLOG, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message ||
        `Failed to create blog: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/**
 * Update a blog
 */
export async function updateBlog(
  id: string,
  title: string,
  content: string,
  thumbnail?: File
): Promise<UpdateBlogResponse> {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);

  if (thumbnail) {
    formData.append('thumbnail', thumbnail);
  }

  const response = await fetch(API_ROUTES.UPDATE_BLOG(id), {
    method: 'PUT',
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message ||
        `Failed to update blog: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/**
 * Partially update a blog
 */
export async function patchBlog(
  id: string,
  updates: Partial<{
    title: string;
    content: string;
    thumbnail: File;
  }>
): Promise<UpdateBlogResponse> {
  const formData = new FormData();

  if (updates.title) {
    formData.append('title', updates.title);
  }
  if (updates.content) {
    formData.append('content', updates.content);
  }
  if (updates.thumbnail) {
    formData.append('thumbnail', updates.thumbnail);
  }

  const response = await fetch(API_ROUTES.UPDATE_BLOG(id), {
    method: 'PATCH',
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message ||
        `Failed to update blog: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/**
 * Delete a blog
 */
export async function deleteBlog(id: string): Promise<DeleteBlogResponse> {
  const response = await fetch(API_ROUTES.DELETE_BLOG(id), {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Blog not found');
    }
    throw new Error(
      `Failed to delete blog: ${response.status} ${response.statusText}`
    );
  }

  // Handle 204 No Content response (successful deletion with no body)
  if (response.status === 204) {
    return { message: 'Blog deleted successfully' };
  }

  // Try to parse JSON for other success responses
  try {
    return await response.json();
  } catch {
    // If JSON parsing fails but status is OK, return success message
    return { message: 'Blog deleted successfully' };
  }
}

/**
 * Filter blogs by date range
 */
export async function filterBlogsByDate(
  startDate: string,
  endDate: string,
  page: number = 1,
  pageSize: number = 20
): Promise<BlogListResponse> {
  const params = new URLSearchParams({
    start_date: startDate,
    end_date: endDate,
    page: page.toString(),
    page_size: pageSize.toString(),
  });

  const response = await fetch(`${API_ROUTES.FILTER_BLOGS_BY_DATE}?${params}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to filter blogs: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}
