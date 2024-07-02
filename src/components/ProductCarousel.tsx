import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ProductCard from './ProductCard';
import { ProductStatus } from '@/types';

const ProductCarousel = ({ data }: { data: ProductStatus }) => {
  return (
    <Carousel
      opts={{
        align: 'center',
        breakpoints: { '(min-width: 768px)': { align: 'start' } },
        loop: true,
      }}
      className="w-full xl:max-w-[1035px] 2xl:max-w-[1206px] mx-auto ">
      <CarouselContent className="-ml-1 xl:-ml-5  2xl:-ml-3 pb-2 ">
        {data &&
          data.result.map((product) => (
            <CarouselItem className=" basis-auto pl-1 xl:pl-5 2xl:pl-3 shrink-0   ">
              <ProductCard product={product} />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="carousel-arrow carousel-arrow-prev hidden md:inline-flex  left-3 xl:left-0  2xl:left-[13px] " />
      <CarouselNext className="carousel-arrow carousel-arrow-next hidden md:inline-flex  right-3 xl:right-0   2xl:right-[13px]" />
    </Carousel>
  );
};

export default ProductCarousel;
