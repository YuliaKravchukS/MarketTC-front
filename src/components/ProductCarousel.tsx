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
      <CarouselContent className="  -ml-1 laptop:-ml-3 desktop:-ml-3 pb-2 ">
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="basis-auto pl-1 laptop:pl-3 desktop:pl-3 shrink-0">
            <ProductCard />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="carousel-arrow carousel-arrow-prev hidden tablet:inline-flex laptop:inline-flex desktop:inline-flex left-0 tablet:left-4 laptop:left-2 desktop:left-1 " />
      <CarouselNext className="carousel-arrow carousel-arrow-next hidden tablet:inline-flex  laptop:inline-flex desktop:inline-flex right-0 tablet:right-4 laptop:right-2 desktop:right-1" />
    </Carousel>
  );
};

export default ProductCarousel;
