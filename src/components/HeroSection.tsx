import Image from 'next/image';
import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className=" pt-8 xl:max-w-[1037px] mx-auto 2xl:max-w-[1198px] mb-[37px] md:mb-9 xl:mb-3 2xl:mb-[42px]">
      <div className="flex flex-wrap mb-2 md:flex-nowrap mx-[23px]  xl:mx-0 justify-center pb-8 md:gap-5 xl:gap-[60px] 2xl:gap-[100px] ">
        <Button className="order-2 border text-background-100  max-h-[50px] font-semibold  border-primary-500  bg-primary-500 hover:bg-secondary-500 hover:border-secondary-500 active:bg-white active:text-secondary-500 h-full max-w-[234px] w-full px-6 py-[11.5px] leading-[27px] text-[18px]">
          Catalog
        </Button>
        <div className="flex w-full h-[50px] gap-2 mb-6 md:order-2 md:gap-1 xl:gap-8">
          <Input
            className="order-1 border search-input-hero rounded-[5px] h-full border-primary-500  min-w-[208px] xl:pl-2.5 2xl:pl-4 focus-visible:ring-offset-0 focus-visible:ring-0"
            type="search"
            placeholder=" "
          />

          <Button className="order-1 border  text-background-100 font-semibold  border-primary-500 hover:bg-transparent hover:text-primary-500 bg-primary-500 h-full px-6 py-[11.5px] min-w-[113px] leading-[27px] text-[18px]">
            Search
          </Button>
        </div>
      </div>
      <Image
        className="  block w-full h-[143px] md:h-[184px] xl:h-[188px]  "
        src="/images/rectangle.jpg"
        alt=""
        width={375}
        height={143}></Image>
    </section>
  );
};

export default HeroSection;
