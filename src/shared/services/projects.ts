import { ProjectCategory } from '@prisma/client';
import { axiosInstance } from './instance';

export const getProjectsCategories = async (): Promise<ProjectCategory[]> => {
  const { data } = await axiosInstance.get<ProjectCategory[]>('/projects/categories');
  return data;
};
