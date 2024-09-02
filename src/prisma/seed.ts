import { PrismaClient } from '@prisma/client';
import { projectCategories, projectsArr } from './constants';

const prisma = new PrismaClient();

async function cleanTables() {
  await prisma.$executeRaw`TRUNCATE TABLE "projects" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProjectCategory" RESTART IDENTITY CASCADE`;
}

async function main() {
  await cleanTables();

  await prisma.projectCategory.createMany({
    data: projectCategories.map((category) => ({ name: category })),
  });

  projectsArr.map(async ({ title, desc, type, categories, icons }) => {
    await prisma.project.create({
      data: {
        title,
        desc,
        type,
        categories: {
          create: categories.map((categoryId) => ({
            category: {
              connect: { id: categoryId },
            },
          })),
        },
        icons: {
          create: icons.map((icon) => ({
            icon: icon.icon,
            fill: icon.fill,
          })),
        },
      },
    });
  });

  console.log('Icons added for each project');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
