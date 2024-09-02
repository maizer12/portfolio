import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get('categoryId');

  const categoryIdNumber = categoryId ? parseInt(categoryId, 10) : null;

  if (!categoryIdNumber) {
    const allProjects = await prisma.project.findMany({
      include: {
        icons: true,
      },
    });
    return NextResponse.json(allProjects);
  }

  const projects = await prisma.project.findMany({
    where: {
      categories: {
        some: {
          categoryId: categoryIdNumber,
        },
      },
    },
    include: {
      icons: true,
    },
  });

  return NextResponse.json(projects);
}
