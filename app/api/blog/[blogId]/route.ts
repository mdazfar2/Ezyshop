// /api/blog/[blogId]/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { blogId: string } }) {
  const { blogId } = params; // Extract blogId from URL parameters

  try {
    const blog = await prisma.blog.findUnique({
      where: { id: blogId },
      select: {
        id: true,
        title: true,
        content: true,
        metaDescription: true,
        image: true,
        author: true,
        createdAt: true,
        label: true
      },
    });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}
