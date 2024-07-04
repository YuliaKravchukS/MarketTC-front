import React from "react";
import Logo from "./ui/logo";
import Link from "next/link";
import Socials from "./ui/socials";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-6 md:gap-9 xl:gap-[138px] 2xl:gap-28 items-start h-full mx-auto pt-8 2xl:pt-[42px] pl-[26px] pb-[194px] md:pb-[65px] xl:pb-[94px] md:px-4  xl:px-20 2xl:px-[115px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
      <div className="md:pt-5 xl:pt-[10px] 2xl-pt-1">
        <Logo />
      </div>
      <ul className="md:w-full xl:w-auto md:flex md:gap-x-7 xl:gap-x-[100px] 2xl:gap-x-48 justify-between">
        <li className="footerList">
          <p>For buyers</p>
          <ul>
            <li>
              <Link href="/">How to make a purchase</Link>
            </li>
            <li>
              <Link href="/">Payment and return of goods</Link>
            </li>
            <li>
              <Link href="/">Delivery</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
          </ul>
        </li>
        <li className="footerList">
          <p>For sellers</p>
          <ul>
            <li>
              <Link href="/">Terms of cooperation</Link>
            </li>
            <li>
              <Link href="/">Tariffs</Link>
            </li>
            <li>
              <Link href="/">Agreement on cooperation</Link>
            </li>
            <li>
              <Link href="/">Confidentiality</Link>
            </li>
          </ul>
        </li>
        <div>
          <li className="footerList">
            <p>About us</p>
            <ul>
              <li>
                <Link href="/">Useful Information</Link>
              </li>
              <li>
                <Link href="/">Contacts</Link>
              </li>
              <li className="mt-2 md:mt-[25px]">
                <Socials />
              </li>
            </ul>
          </li>
        </div>
      </ul>
    </footer>
  );
};

export default Footer;
