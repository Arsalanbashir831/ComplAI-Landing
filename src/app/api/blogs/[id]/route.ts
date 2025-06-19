import { NextResponse } from 'next/server';
import slugify from 'slugify';

import { bucket, db } from '@/app/firebase/admin';

interface Props {
  params: {
    id: string;
  };
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const blogId = params.id;
    const blogRef = db.ref(`blogs/${blogId}`);
    const snapshot = await blogRef.once('value');
    const blog = snapshot.val();

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

export async function PUT(request: Request, { params }: Props) {
  try {
    const { id: oldSlug } = params;
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

    let thumbnailUrl = (formData.get('currentThumbnailUrl') as string) || '';

    // Generate new slug from updated title
    const newSlug = slugify(title, { lower: true, strict: true });

    // Get existing blog
    const existingSnapshot = await db.ref(`blogs/${oldSlug}`).once('value');
    if (!existingSnapshot.exists()) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Handle thumbnail replacement
    if (thumbnail) {
      // Delete old thumbnail if exists
      if (thumbnailUrl) {
        const oldFileName = thumbnailUrl.split('/').pop();
        if (oldFileName) {
          try {
            await bucket.file(`complai-blogs/${oldFileName}`).delete();
          } catch (error) {
            console.error('Error deleting old thumbnail:', error);
          }
        }
      }

      // Upload new thumbnail
      const buffer = Buffer.from(await thumbnail.arrayBuffer());
      const fileName = `complai-blogs/${newSlug}-${Date.now()}-${thumbnail.name}`;
      const file = bucket.file(fileName);

      await file.save(buffer, {
        contentType: thumbnail.type,
        public: true,
        metadata: { cacheControl: 'public, max-age=31536000' },
      });

      thumbnailUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
    }

    const updatedData = {
      title,
      content,
      slug: newSlug,
      thumbnail: thumbnailUrl,
      updatedAt: Date.now(),
      createdAt: existingSnapshot.val().createdAt || Date.now(),
    };

    // Write updated data to new slug key
    await db.ref(`blogs/${newSlug}`).set(updatedData);

    // Delete old blog entry
    if (oldSlug !== newSlug) {
      await db.ref(`blogs/${oldSlug}`).remove();
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
export async function DELETE(request: Request, { params }: Props) {
  try {
    const { id } = params;
    const blogRef = db.ref(`blogs/${id}`);

    // Get the blog data first to check if it exists and get the thumbnail URL
    const snapshot = await blogRef.once('value');
    const blog = snapshot.val();

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Delete thumbnail from storage if it exists
    if (blog.thumbnailUrl) {
      const fileName = blog.thumbnailUrl.split('/').pop();
      if (fileName) {
        try {
          await bucket.file(`complai-blogs/${fileName}`).delete();
        } catch (error) {
          console.error('Error deleting thumbnail:', error);
        }
      }
    }

    // Delete the blog entry
    await blogRef.remove();

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
