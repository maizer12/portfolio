import { Icon, Project, Technology } from '@prisma/client';

export type ProjectWithRelations = Project & {
  icons: Icon[];
  technologies: Technology[];
};
