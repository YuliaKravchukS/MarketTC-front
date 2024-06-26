import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ProductCard from './ProductCard';

const ProductCarousel = () => {
  return (
    <Carousel
      opts={{
        align: 'center',
        breakpoints: { '(min-width: 768px)': { align: 'start' } },
        loop: true,
      }}
      className="w-full xl:max-w-[1035px] 2xl:max-w-[1206px] mx-auto ">
      <CarouselContent className="-ml-1 xl:-ml-5  2xl:-ml-3 pb-2 ">
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className=" basis-auto pl-1 xl:pl-5 2xl:pl-3 shrink-0   ">
            <ProductCard />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="carousel-arrow carousel-arrow-prev hidden md:inline-flex  left-3 xl:left-0  2xl:left-[13px] " />
      <CarouselNext className="carousel-arrow carousel-arrow-next hidden md:inline-flex  right-3 xl:right-0   2xl:right-[13px]" />
    </Carousel>
  );
};

export default ProductCarousel;
