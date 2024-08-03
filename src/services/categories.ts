import { axiosInstance } from './instance';

export const getAll = async () => {
  const { data } = await axiosInstance.get('/categories');
  return data;
};

export const getById = async (id: string) => {
  const { data } = await axiosInstance.get(`/categories/${id}`);
  return data;
};
