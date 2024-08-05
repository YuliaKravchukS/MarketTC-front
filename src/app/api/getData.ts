import { API_URL } from '@/constants/index';
import axios from 'axios';

export async function getData<T>(link: string): Promise<T> {
  try {
    const data = (await axios.get(`${API_URL}${link}`)).data;
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}
