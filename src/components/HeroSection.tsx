import Image from 'next/image';
import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Search from './Search';

const HeroSection = () => {
  return (
    <section className=" pt-8 xl:max-w-[1037px] mx-auto 2xl:max-w-[1198px] mb-[37px] md:mb-9 xl:mb-3 2xl:mb-[42px]">
      <div className="flex flex-wrap mb-2 md:flex-nowrap mx-[23px]  xl:mx-0 justify-center pb-8 md:gap-5 xl:gap-[60px] 2xl:gap-[100px] ">
        <Button className="order-2 border text-background-100  max-h-[50px] font-semibold  border-primary-500  bg-primary-500 hover:bg-secondary-500 hover:border-secondary-500 active:bg-white active:text-secondary-500 h-full max-w-[234px] w-full px-6 py-[11.5px] leading-[27px] text-[18px]">
          Catalog
        </Button>
        <Search />
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
