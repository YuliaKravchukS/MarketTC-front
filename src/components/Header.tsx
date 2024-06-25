import React from "react";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className=" grid grid-areas-mobile md:grid-areas-desktop items-center gap-6 auto-cols-auto">
      <div className=" py-6  grid-in-banner bg-black-100 text-center md:rounded-xl">
        Banner
      </div>
      <div className="grid-in-logo py-8 pl-5">
        <div className="inline-block bg-black-100 p-6 rounded-3xl">Logo</div>
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;
