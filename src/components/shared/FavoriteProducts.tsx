import React from 'react';
import { ProductCarousel } from './ProductCarousel';
import { Api } from '@/services/api-client';

export const FavoriteProducts: React.FC = async () => {
  const data = await Api.products.getAll();
  return (
    <section className=" favorite-section pt-9 pb-7 px-0.5">
      <h6 className="text-center">Favorite</h6>
      <div className="mt-9 flex   justify-center">
        <ProductCarousel data={data} />
      </div>
    </section>
  );
};
