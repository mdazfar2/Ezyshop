// /api/blog/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        metaDescription: true,
        image: true,
        author: true,
        createdAt: true,
        label: true
      },
    });

    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
