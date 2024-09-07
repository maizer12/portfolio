import { PrismaClient } from '@prisma/client';
import { projectCategories, projectDetails, projectsArr, technologiesConstants } from './constants';

const prisma = new PrismaClient();

async function cleanTables() {
  await prisma.$executeRaw`TRUNCATE TABLE "projects" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProjectCategory" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Technology" RESTART IDENTITY CASCADE`;
}

async function main() {
  await cleanTables();

  await prisma.projectCategory.createMany({
    data: projectCategories.map((category) => ({ name: category })),
  });

  for (const tech of technologiesConstants) {
    await prisma.technology.create({
      data: {
        name: tech.label,
        icon: tech.icon,
        color: tech.fill,
      },
    });
  }

  projectsArr.map(async ({ title, desc, type, categories, technologyIds }) => {
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
        technologies: {
          connect: technologyIds.map((techId) => ({
            id: techId,
          })),
        },
      },
    });
  });

  await prisma.projectMoreDetails.create({
    data: projectDetails[0],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
