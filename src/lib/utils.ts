import { API_URL } from '@/constants';
import axios from 'axios';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getData<T>(link: string): Promise<T> {
  try {
    const data = (await axios.get(`${API_URL}${link}`)).data;
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}
