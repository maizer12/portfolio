import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop();

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const project = await prisma.project.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      technologies: true,
      details: true,
    },
  });

  return NextResponse.json(project);
}
