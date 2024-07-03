import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="h-full mx-auto pt-8 pl-[26px] md:py-4 2xl:py-5 xl:max-w-[1200px] 2xl:max-w-[1440px]">
      <Logo marginB="mb-6" />
      <ul className="mb-4">
        <li className="footerList">
          <p>Для покупців</p>
          <ul className="footerSubList">
            <li>Як здійснити покупку</li>
            <li>Оплата та повернення товару</li>
            <li>Доставка</li>
            <li>Послуги</li>
          </ul>
        </li>
        <li className="footerList">
          <p>Для продавців</p>
          <ul className="footerSubList">
            <li>Умови співпраці</li>
            <li>Тарифи</li>
            <li>Угода</li>
            <li>Конфіденційність</li>
          </ul>
        </li>
        <li className="footerList">
          <p>Про нас</p>
          <ul className="footerSubList">
            <li>Корисна інформація</li>
            <li>Контакти</li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
