import React from 'react';
import ProductCarousel from './ProductCarousel';

const FavoriteProducts = () => {
  return (
    <section className="  pt-9 pb-7 px-0.5">
      <h6 className="text-center">Favorite</h6>
      <div className="mt-9 flex   justify-center">
        <ProductCarousel />
      </div>
    </section>
  );
};

export default FavoriteProducts;
