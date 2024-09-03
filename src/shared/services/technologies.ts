import { Technology } from '@prisma/client';
import { ApiRoutes } from './api-routes';
import { axiosInstance } from './instance';

export const getTechnologies = async (): Promise<Technology[]> => {
  const { data } = await axiosInstance.get<Technology[]>(ApiRoutes.TECHNOLOGIES);
  return data;
};
