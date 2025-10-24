'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { API_ROUTES, ROUTES } from '@/constants/routes';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Blog = {
  id: string;
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  date: string;
};

type BlogAPIResponse = {
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
};

const fetchBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(API_ROUTES.GET_BLOGS);
  if (!res.ok) return [];

  const data: BlogAPIResponse[] = await res.json();
  console.log('data', data);
  if (!Array.isArray(data)) return [];

  return data.map((blog) => ({
    id: blog.slug,
    title: blog.title ?? '',
    slug: blog.slug ?? '',
    content: blog.content ?? '',
    date: blog.createdAt
      ? new Date(Number(blog.createdAt)).toISOString().slice(0, 10)
      : '',
    thumbnail: blog.thumbnail ?? '',
  }));
};

const BlogListPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const router = useRouter();
  useEffect(() => {
    fetchBlogs().then(setBlogs);
  }, []);

  const handleEdit = (id: string) => {
    router.push(`${ROUTES.ADMIN.DASHBOARD}/${id}`);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const response = await fetch(API_ROUTES.GET_BLOGS_ID(id), {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete blog');
      }

      // Refresh the blogs list
      const updatedBlogs = await fetchBlogs();
      setBlogs(updatedBlogs);
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete blog');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Blogs</h2>
        <Button onClick={() => router.push(`${ROUTES.ADMIN.DASHBOARD}/add`)}>
          Add Blog
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Thumbnail</TableHead>
              <TableHead>Title</TableHead>

              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Image
                    width={64}
                    height={64}
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </TableCell>
                <TableCell>{blog.title}</TableCell>

                <TableCell>{blog.date}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(blog.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(blog.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BlogListPage;
