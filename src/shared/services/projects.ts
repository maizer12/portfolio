import { Project, ProjectCategory } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './api-routes';
import { ProjectWithRelations } from '@/@types/prisma';

export const getProjectsCategories = async (): Promise<ProjectCategory[]> => {
  const { data } = await axiosInstance.get<ProjectCategory[]>(ApiRoutes.PROJECTS_CATEGORIES);
  return data;
};

export const getProjects = async (): Promise<ProjectWithRelations[]> => {
  const { data } = await axiosInstance.get<ProjectWithRelations[]>(ApiRoutes.PROJECTS);
  return data;
};
