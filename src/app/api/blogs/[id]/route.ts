import { NextRequest, NextResponse } from 'next/server';
import slugify from 'slugify';

import {
  deleteBlog,
  deleteImage,
  getBlogBySlug,
  saveImage,
  updateBlog,
} from '@/lib/blog-storage';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const blog = await getBlogBySlug(id);

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}

// PUT (update) blog by ID
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: oldSlug } = await params;
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const newThumbnailFile = formData.get('thumbnail') as File | null;
    const currentThumbnailUrlFromClient =
      (formData.get('currentThumbnailUrl') as string) || '';

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    // Generate new slug from updated title
    const newSlug = slugify(title, { lower: true, strict: true });

    // Get existing blog data
    const existingBlog = await getBlogBySlug(oldSlug);
    if (!existingBlog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    let finalThumbnailUrl = existingBlog.thumbnail;

    // Handle thumbnail update
    if (newThumbnailFile && newThumbnailFile.size > 0) {
      // Delete old thumbnail if it exists
      if (existingBlog.thumbnail) {
        await deleteImage(existingBlog.thumbnail);
      }

      // Save new thumbnail
      finalThumbnailUrl = await saveImage(newThumbnailFile, newSlug);
    } else if (currentThumbnailUrlFromClient) {
      // Keep existing thumbnail if no new file uploaded
      finalThumbnailUrl = currentThumbnailUrlFromClient;
    }

    const updatedData = {
      title,
      content,
      slug: newSlug,
      thumbnail: finalThumbnailUrl,
    };

    // Update the blog
    const updatedBlog = await updateBlog(oldSlug, updatedData);

    if (!updatedBlog) {
      return NextResponse.json(
        { error: 'Failed to update blog' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Blog updated successfully', slug: newSlug },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

// DELETE blog by ID
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const success = await deleteBlog(id);

    if (!success) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(
      { message: 'Blog deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}
