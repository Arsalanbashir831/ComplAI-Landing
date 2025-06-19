import { db, bucket } from '@/app/firebase/admin';
import { NextResponse } from 'next/server';
import slugify from 'slugify';

export async function GET() {
    try {
        const blogsRef = db.ref('blogs');
        const snapshot = await blogsRef.once('value');
        const blogs = snapshot.val();

        return NextResponse.json({ blogs }, { status: 200 });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
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
        const existing = await db.ref(`blogs/${slug}`).once('value');
        if (existing.exists()) {
            return NextResponse.json(
                { error: 'A blog with this title already exists' },
                { status: 409 }
            );
        }

        let thumbnailUrl = '';
        if (thumbnail) {
            const buffer = Buffer.from(await thumbnail.arrayBuffer());
            const fileName = `complai-blogs/${slug}-${Date.now()}-${thumbnail.name}`;
            const file = bucket.file(fileName);

            await file.save(buffer, {
                contentType: thumbnail.type,
                public: true,
                metadata: {
                    cacheControl: 'public, max-age=31536000',
                },
            });

            thumbnailUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
        }

        const blogRef = db.ref(`blogs/${slug}`);
        await blogRef.set({
            title,
            content,
            slug,
            thumbnail: thumbnailUrl,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        });

        return NextResponse.json(
            { slug, thumbnailUrl, message: 'Blog created successfully' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating blog:', error);
        return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
    }
}
