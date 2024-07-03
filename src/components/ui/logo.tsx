import React from "react";
import { LogoProps } from "./types";

const Logo: React.FC<LogoProps> = ({ paddingX, marginB }) => {
  return (
    <div
      className={`inline-block bg-black-100 py-6 px-7 rounded-3xl ${paddingX} ${marginB}`}
    >
      Logo
    </div>
  );
};

export default Logo;
