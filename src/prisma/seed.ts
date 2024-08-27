import { PrismaClient } from '@prisma/client';
import { cibMongodb, cibNextJs, cibNodeJs, cibReact, cibTypescript, cibVueJs } from '@coreui/icons';
import { projectCategories, projectsArr } from './constants';

const prisma = new PrismaClient();

async function cleanTables() {
  await prisma.$executeRaw`TRUNCATE TABLE "projects" RESTART IDENTITY CASCADE`;
  //await prisma.$executeRaw`TRUNCATE TABLE "Icon" RESTART IDENTITY CASCADE`;
}

async function main() {
  await cleanTables();

  await prisma.project.createMany({
    data: projectsArr.map(({ title, desc, type }) => ({
      title,
      desc,
      type,
    })),
  });

  await prisma.projectCategory.createMany({
    data: projectCategories.map((category) => ({ name: category })),
  });

  for (let i = 0; i < projectsArr.length; i++) {
    const project = projectsArr[i];
    if (project.icons) {
      await prisma.icon.createMany({
        data: project.icons.map((icon) => ({
          icon: icon.icon,
          fill: icon.fill,
          projectId: i + 1,
        })),
      });
    }
  }

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
