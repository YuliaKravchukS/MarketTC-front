import { axiosInstance } from './instance';

export const getAll = async () => {
  const { data } = await axiosInstance.get('/healthcheck');
  return data;
};
