import React from "react";
import HeaderNav from "./HeaderNav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="h-full mx-auto  md:py-4 2xl:py-5 md:px-5 xl:px-20 2xl:px-[115px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
      <div className=" grid  grid-areas-mobile md:grid-areas-desktop md:grid-cols-md xl:grid-cols-xl 2xl:grid-cols-2xl items-center gap-6 2xl:gap-[76px]">
        <div className=" py-6  grid-in-banner bg-black-100 text-center md:rounded-xl">
          Banner
        </div>
        <div className="grid-in-logo pl-5 md:pl-0">
          <Logo paddingX="2xl:px-[60px]" />
        </div>
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
