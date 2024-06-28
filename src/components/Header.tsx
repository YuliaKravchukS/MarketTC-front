import React from "react";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className=" max-w-screen-2xl  h-full md:py-4 2xl:py-5 xl:px-20 2xl:px-[115px] mx-auto xl:max-w-[1200px] 2xl:max-w-[1400px]">
      <div className=" grid grid-areas-mobile md:grid-areas-desktop md:grid-cols-tablet xl:grid-cols-desktop items-center gap-6 2xl:gap-20">
        <div className=" py-6  grid-in-banner bg-black-100 text-center md:rounded-xl">
          Banner
        </div>
        <div className="grid-in-logo pl-5 xl:pl-0">
          <div className="inline-block bg-black-100 py-6 px-7 2xl:px-16 rounded-3xl">
            Logo
          </div>
        </div>
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
