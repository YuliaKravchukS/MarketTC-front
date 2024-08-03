import React from 'react';
import { ProductCarousel } from './ProductCarousel';
import { Api } from '@/services/api-client';

export const PromotionalProducts: React.FC = async () => {
  const data = await Api.products.getAll();

  return (
    <section className=" pt-9 pb-7 px-0.5">
      <h6 className="text-center">For you </h6>
      <div className="mt-9 flex   justify-center">
        <ProductCarousel data={data} />
      </div>
    </section>
  );
};
