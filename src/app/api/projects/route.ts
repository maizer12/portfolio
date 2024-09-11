import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get('categoryId');
  const technologyId = searchParams.get('technologyId');

  // Преобразуем параметры в числа, если они переданы
  const categoryIdNumber = categoryId ? parseInt(categoryId, 10) : null;
  const technologyIdNumber = technologyId ? parseInt(technologyId, 10) : null;

  // Условия для фильтрации проектов
  const whereConditions: any = {};

  // Проверка фильтрации по категории
  if (categoryIdNumber) {
    whereConditions.categories = {
      some: {
        id: categoryIdNumber, // Предполагаем, что у категории поле `id`
      },
    };
  }

  // Проверка фильтрации по технологии
  if (technologyIdNumber) {
    whereConditions.technologies = {
      some: {
        technologyId: technologyIdNumber, // Проверяем технологию по её id
      },
    };
  }

  // Запрос с учётом фильтрации
  const projects = await prisma.project.findMany({
    where: whereConditions,
    include: {
      technologies: {
        include: {
          technology: true, // Включаем детали технологии
        },
      },
    },
    orderBy: { id: 'asc' }, // Сортировка по id
  });

  // Формируем ответ, преобразуя формат данных
  const res = projects.map((project) => {
    return {
      ...project,
      technologies: project.technologies.map((tech) => tech.technology).sort((a, b) => a.id - b.id),
    };
  });

  return NextResponse.json(res);
}
