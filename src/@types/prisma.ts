import { Icon, Project } from '@prisma/client';

export type ProjectWithRelations = Project & {
  icons: Icon[];
};
