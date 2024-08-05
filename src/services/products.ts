import { axiosInstance } from './instance';

export const getAll = async () => {
  const { data } = await axiosInstance.get('/products');
  return data;
};
