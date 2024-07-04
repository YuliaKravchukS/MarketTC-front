import React from "react";
import { LogoProps } from "../types";
import Link from "next/link";

const Logo: React.FC<LogoProps> = ({ paddingX }) => {
  return (
    <Link
      href="/"
      className={`cursor-pointer inline-block bg-black-100 py-6 px-7 rounded-3xl ${paddingX}`}
    >
      Logo
    </Link>
  );
};

export default Logo;
