import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get('categoryId');
  const technologyId = searchParams.get('technologyId');
  const include = {
    technologies: true,
  };

  const categoryIdNumber = categoryId ? parseInt(categoryId, 10) : null;
  const technologyIdNumber = technologyId ? parseInt(technologyId, 10) : null;

  const whereConditions: any = {};

  if (categoryIdNumber) {
    whereConditions.categories = {
      some: {
        categoryId: categoryIdNumber,
      },
    };
  }

  if (technologyIdNumber) {
    whereConditions.technologies = {
      some: {
        id: technologyIdNumber,
      },
    };
  }

  const projects = await prisma.project.findMany({
    where: whereConditions,
    include,
  });

  return NextResponse.json(projects);
}
