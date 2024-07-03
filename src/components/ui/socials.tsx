import Image from "next/image";
import React from "react";

const Socials = () => {
  return (
    <ul className="flex gap-4 items-center">
      <li>
        <Image
          src="/icons/twitter.svg"
          alt="twitter icon"
          width={24}
          height={24}
        ></Image>
      </li>
      <li>
        <Image
          src="/icons/facebook.svg"
          alt="facebook icon"
          width={26}
          height={26}
        ></Image>
      </li>
      <li>
        <Image
          src="/icons/instagram.svg"
          alt="instagram icon"
          width={26}
          height={26}
        ></Image>
      </li>
    </ul>
  );
};

export default Socials;
