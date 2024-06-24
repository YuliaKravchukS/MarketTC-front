import React from "react";

const Header = () => {
  return (
    <header className=" grid grid-areas-mobile md:grid-areas-desktop">
      <div className=" py-6  grid-in-banner bg-black-100 text-center">
        Banner
      </div>
      <p className="grid-in-logo">test</p>
      <p className="grid-in-nav">test2</p>
    </header>
  );
};

export default Header;
