import React from "react";

const HeaderNav = () => {
  return (
    <nav className="grid-in-nav pr-5">
      <ul className="flex justify-between">
        <li>
          <button className="bg-black-100 p-2">1</button>
        </li>
        <li>
          <button className="bg-black-100 p-2">2</button>
        </li>
        <li>
          <button className="bg-black-100 p-2">3</button>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
