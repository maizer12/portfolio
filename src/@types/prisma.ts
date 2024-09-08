import { Project, Technology, ProjectMoreDetails } from '@prisma/client';

export type ProjectWithRelations = Project & {
  technologies: Technology[];
  details: ProjectMoreDetails;
};
