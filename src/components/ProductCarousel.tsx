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
        breakpoints: { '(min-width: 481px)': { align: 'start' } },
        loop: true,
      }}
      className="w-full max-w-[1188px] mx-auto ">
      <CarouselContent className="-ml-1  2xl:-ml-3 pb-2 ">
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="basis-auto pl-1 2xl:pl-3 shrink-0   ">
            <ProductCard />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="carousel-arrow carousel-arrow-prev hidden md:inline-flex  left-4  2xl:left-1 " />
      <CarouselNext className="carousel-arrow carousel-arrow-next hidden md:inline-flex  right-4   2xl:right-1" />
    </Carousel>
  );
};

export default ProductCarousel;
