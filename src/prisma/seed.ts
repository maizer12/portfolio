import { PrismaClient } from '@prisma/client';
import { projectCategories, projectDetails, technologiesConstants } from './constants';
import { projectsData } from './seeders/projects-seed';

const prisma = new PrismaClient();

async function cleanTables() {
  await prisma.$executeRaw`TRUNCATE TABLE "projects" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProjectCategory" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Technology" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProjectMoreDetails" RESTART IDENTITY CASCADE`;
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

  await Promise.all(
    projectsData.map(async ({ title, desc, type, categories, technologyIds }) => {
      await prisma.project.create({
        data: {
          title,
          desc,
          type,
          categories: {
            connect: categories.map((categoryId) => ({
              id: categoryId,
            })),
          },
          technologies: {
            create: technologyIds.map((techId) => ({
              technology: {
                connect: { id: techId },
              },
            })),
          },
        },
      });
    }),
  );

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
