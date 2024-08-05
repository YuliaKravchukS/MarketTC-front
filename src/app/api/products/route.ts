import { ProductStatus } from '@/types/index';
import { NextResponse } from 'next/server';
import { getData } from '../getData';

export async function GET() {
  const products = await getData<ProductStatus>('products');

  return NextResponse.json(products);
}
