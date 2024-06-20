import React from 'react';
import ProductCard from './ProductCard';

const PromotionalProducts = () => {
  return (
    <section className=" pt-9 pb-7">
      <h6 className="text-center">For you (Promotional offers)</h6>
      <div className="mt-9 pb-2 flex gap-1 desktop:gap-3 laptop:gap-2 tablet:gap-1 overflow-x-scroll  xl:overflow-hidden justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default PromotionalProducts;
