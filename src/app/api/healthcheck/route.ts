import { ProductStatus } from '@/types/index';
import { NextResponse } from 'next/server';
import { getData } from '../getData';

export async function GET() {
  const healthcheck = await getData<ProductStatus>('healthcheck');

  return NextResponse.json(healthcheck);
}
