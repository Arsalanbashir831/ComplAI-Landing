import { NextResponse } from 'next/server';
import slugify from 'slugify';

import { getAllBlogs, saveBlog, saveImage } from '@/lib/blog-storage';

export async function GET() {
  try {
    const blogs = await getAllBlogs();
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const thumbnail = formData.get('thumbnail') as File | null;

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const slug = slugify(title, { lower: true, strict: true });

    // Check for existing blog with same slug
    const existingBlogs = await getAllBlogs();
    const existing = existingBlogs.find((blog) => blog.slug === slug);
    if (existing) {
      return NextResponse.json(
        { error: 'A blog with this title already exists' },
        { status: 409 }
      );
    }

    let thumbnailUrl = '';
    if (thumbnail && thumbnail.size > 0) {
      thumbnailUrl = await saveImage(thumbnail, slug);
    }

    const newBlog = await saveBlog({
      title,
      content,
      slug,
      thumbnail: thumbnailUrl,
    });

    return NextResponse.json(
      {
        slug: newBlog.slug,
        thumbnailUrl: newBlog.thumbnail,
        message: 'Blog created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}
