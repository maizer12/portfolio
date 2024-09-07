import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

export async function GET() {
  const technologies = await prisma.technology.findMany();

  return NextResponse.json(technologies);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, icon, color } = body;

    if (!name || !icon || !color) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const newTechnology = await prisma.technology.create({
      data: {
        name,
        icon,
        color,
      },
    });

    return NextResponse.json(newTechnology, { status: 201 });
  } catch (error) {
    console.error('Error creating technology:', error);
    return NextResponse.json({ error: 'Failed to create technology' }, { status: 500 });
  }
}
