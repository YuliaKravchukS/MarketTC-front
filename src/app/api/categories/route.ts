import { NextResponse } from 'next/server';
import { getData } from '../getData';
import { CatalogStatus } from '@/types/index';

export async function GET() {
  const categories = await getData<CatalogStatus>('categories');

  return NextResponse.json(categories);
}
