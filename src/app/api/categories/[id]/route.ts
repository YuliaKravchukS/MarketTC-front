import { ProductStatus } from '@/types/index';
import { NextResponse } from 'next/server';
import { getData } from '../../getData';
import { NextApiRequest } from 'next';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const products = await getData<ProductStatus>(`products/` + `${id}`);

  return NextResponse.json(products);
}
