import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

export async function GET() {
  const technologies = await prisma.technology.findMany();

  return NextResponse.json(technologies);
}
