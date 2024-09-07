import { Project, Technology } from '@prisma/client';

export type ProjectWithRelations = Project & {
  technologies: Technology[];
};
