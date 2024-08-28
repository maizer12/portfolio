import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

export async function GET() {
  const projects = await prisma.project.findMany({
    include: {
      icons: true,
    },
  });
  return NextResponse.json(projects);
}
