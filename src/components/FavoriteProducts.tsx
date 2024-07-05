import React from 'react';
import ProductCarousel from './ProductCarousel';
import { getData } from '@/lib/utils';
import { ProductStatus } from '@/types';

const FavoriteProducts: React.FC = async () => {
  const data = await getData<ProductStatus>('products');
  return (
    <section className=" favorite-section pt-9 pb-7 px-0.5">
      <h6 className="text-center">Favorite</h6>
      <div className="mt-9 flex   justify-center">
        <ProductCarousel data={data} />
      </div>
    </section>
  );
};

export default FavoriteProducts;
