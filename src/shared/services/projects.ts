import { ProjectCategory } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './api-routes';
import { ProjectWithRelations } from '@/@types/prisma';

export const getProjectsCategories = async (): Promise<ProjectCategory[]> => {
  const { data } = await axiosInstance.get<ProjectCategory[]>(ApiRoutes.PROJECTS_CATEGORIES);
  return data;
};

export const getProjects = async (categoryId?: number, technologyId?: number): Promise<ProjectWithRelations[]> => {
  const { data } = await axiosInstance.get<ProjectWithRelations[]>(
    ApiRoutes.PROJECTS + `?categoryId=${categoryId}&technologyId=${technologyId}`,
  );
  return data;
};

export const getProject = async (projectId: string): Promise<ProjectWithRelations> => {
  const { data } = await axiosInstance.get<ProjectWithRelations>(ApiRoutes.PROJECTS + `/${projectId}`);
  return data;
};
