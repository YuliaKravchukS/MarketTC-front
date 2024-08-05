import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const HeaderNav = () => {
  return (
    <nav className="grid-in-nav pr-8 md:pr-0">
      <ul className="flex justify-between items-center">
        <li>
          <Link href="/">
            <Image src="/icons/account.svg" alt="" width={20} height={20}></Image>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src="/icons/heart.svg" alt="" width={20} height={20}></Image>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src="/icons/cart.svg" alt="" width={20} height={20}></Image>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
