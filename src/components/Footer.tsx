import React from "react";
import Logo from "./ui/logo";
import Link from "next/link";
import Socials from "./ui/socials";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-6 xl:gap-[138px] items-start h-full mx-auto pt-8 md:pt-10 pl-[26px] pb-24 md:pb-[109px] md:px-4 xl:px-20 2xl:px-[115px] xl:max-w-[1200px] 2xl:max-w-[1440px]">
      <Logo />
      <ul className="mb-4 md:grid md:grid-areas-footerTablet gap-x-8 xl:gap-x-[100px]">
        <li className="grid-in-customer footerList">
          <p>Для покупців</p>
          <ul>
            <li>
              <Link href="/">Як здійснити покупку</Link>
            </li>
            <li>
              <Link href="/">Оплата та повернення товару</Link>
            </li>
            <li>
              <Link href="/">Доставка</Link>
            </li>
            <li>
              <Link href="/">Послуги</Link>
            </li>
          </ul>
        </li>
        <li className="grid-in-seller footerList">
          <p>Для продавців</p>
          <ul>
            <li>
              <Link href="/">Умови співпраці</Link>
            </li>
            <li>
              <Link href="/">Тарифи</Link>
            </li>
            <li>
              <Link href="/">Угода про співпрацю</Link>
            </li>
            <li>
              <Link href="/">Конфіденційність</Link>
            </li>
          </ul>
        </li>
        <li className="grid-in-about footerList">
          <p>Про нас</p>
          <ul>
            <li>
              <Link href="/">Корисна інформація</Link>
            </li>
            <li>
              <Link href="/">Контакти</Link>
            </li>
          </ul>
        </li>
        <li>
          <Socials />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
