import React from 'react';
import ProductCard from './ProductCard';

const FavoriteProducts = () => {
  return (
    <section className=" pt-9 pb-7">
      <h6 className="text-center">Favorite</h6>
      <div className="mt-9 pb-2 flex gap-1 desktop:gap-3 laptop:gap-2 tablet:gap-1 overflow-x-scroll desktop:overflow-hidden laptop:overflow-hidden justify-center">
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

export default FavoriteProducts;
