import React from "react";
import Logo from "./ui/logo";
import Link from "next/link";
import Socials from "./ui/socials";

const Footer = () => {
  return (
    <footer className="h-full mx-auto pt-8 pl-[26px] pb-24 md:py-4 2xl:py-5 xl:max-w-[1200px] 2xl:max-w-[1440px]">
      <Logo marginB="mb-6" />
      <ul className="mb-4">
        <li className="footerList">
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
        <li className="footerList">
          <p>Для продавців</p>
          <ul>
            <li>
              <Link href="/">Умови співпраці</Link>
            </li>
            <li>
              <Link href="/">Тарифи</Link>
            </li>
            <li>
              <Link href="/">Угода</Link>
            </li>
            <li>
              <Link href="/">Конфіденційність</Link>
            </li>
          </ul>
        </li>
        <li className="footerList">
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
      </ul>
      <Socials />
    </footer>
  );
};

export default Footer;
