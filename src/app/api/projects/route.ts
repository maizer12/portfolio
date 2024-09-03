import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get('categoryId');
  const include = {
    icons: true,
    technologies: true,
  };

  const categoryIdNumber = categoryId ? parseInt(categoryId, 10) : null;

  if (!categoryIdNumber) {
    const allProjects = await prisma.project.findMany({
      include,
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
    include,
  });

  return NextResponse.json(projects);
}
