import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getData<T>(link: string): Promise<T> {
  try {
    const data = await fetch(`https://proactive-flexibility-production.up.railway.app/${link}`, {
      cache: 'no-cache',
    }).then((res) => res.json());
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}
