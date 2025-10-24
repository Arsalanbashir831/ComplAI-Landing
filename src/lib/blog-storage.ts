import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export interface Blog {
  id: string;
  title: string;
  content: string;
  slug: string;
  thumbnail: string; // Local path to image
  createdAt: number;
  updatedAt: number;
}

const BLOGS_FILE = path.join(process.cwd(), 'src/data/blogs.json');
const UPLOADS_DIR = path.join(process.cwd(), 'public/uploads/blogs');

// Ensure uploads directory exists
export async function ensureUploadsDir() {
  try {
    await fs.mkdir(UPLOADS_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating uploads directory:', error);
  }
}

// Read all blogs
export async function getAllBlogs(): Promise<Blog[]> {
  try {
    const data = await fs.readFile(BLOGS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading blogs:', error);
    return [];
  }
}

// Get blog by slug
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const blogs = await getAllBlogs();
  return blogs.find((blog) => blog.slug === slug) || null;
}

// Save blog
export async function saveBlog(
  blog: Omit<Blog, 'id' | 'createdAt' | 'updatedAt'>
): Promise<Blog> {
  const blogs = await getAllBlogs();
  const newBlog: Blog = {
    ...blog,
    id: uuidv4(),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  blogs.push(newBlog);

  await fs.writeFile(BLOGS_FILE, JSON.stringify(blogs, null, 2));
  return newBlog;
}

// Update blog
export async function updateBlog(
  slug: string,
  updates: Partial<Omit<Blog, 'id' | 'createdAt'>>
): Promise<Blog | null> {
  const blogs = await getAllBlogs();
  const index = blogs.findIndex((blog) => blog.slug === slug);

  if (index === -1) return null;

  blogs[index] = {
    ...blogs[index],
    ...updates,
    updatedAt: Date.now(),
  };

  await fs.writeFile(BLOGS_FILE, JSON.stringify(blogs, null, 2));
  return blogs[index];
}

// Delete blog
export async function deleteBlog(slug: string): Promise<boolean> {
  const blogs = await getAllBlogs();
  const index = blogs.findIndex((blog) => blog.slug === slug);

  if (index === -1) return false;

  // Delete associated image file
  const blog = blogs[index];
  if (blog.thumbnail) {
    try {
      const imagePath = path.join(process.cwd(), 'public', blog.thumbnail);
      await fs.unlink(imagePath);
    } catch (error) {
      console.error('Error deleting image file:', error);
    }
  }

  blogs.splice(index, 1);
  await fs.writeFile(BLOGS_FILE, JSON.stringify(blogs, null, 2));
  return true;
}

// Save uploaded image
export async function saveImage(file: File, slug: string): Promise<string> {
  await ensureUploadsDir();

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${slug}-${Date.now()}.${file.name.split('.').pop()}`;
  const filePath = path.join(UPLOADS_DIR, fileName);

  await fs.writeFile(filePath, buffer);

  return `/uploads/blogs/${fileName}`;
}

// Delete image file
export async function deleteImage(imagePath: string): Promise<void> {
  try {
    const fullPath = path.join(process.cwd(), 'public', imagePath);
    await fs.unlink(fullPath);
  } catch (error) {
    console.error('Error deleting image:', error);
  }
}
