import React from "react";
import Image from "next/image";
import logoImg from "@/images/logo.png";
import logoLightImg from "@/images/logo.png";
import Link from "next/link";
import { StaticImageData } from "next/image";

export interface LogoProps {
  img?: StaticImageData;
  imgLight?: StaticImageData;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
                                     img = logoImg,
                                     imgLight = logoLightImg,
                                     className = "w-24",
                                   }) => {
  return (
      <Link
          href="/"
          className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
      >
        {/* THIS USE FOR MY CLIENT */}
        {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
        {img ? (
            <Image
                className={`block max-h-12 ${imgLight ? "dark:hidden" : ""}`}
                src={img}
                alt="Logo"
                layout="intrinsic"
                quality={100}
            />
        ) : (
            "Logo Here"
        )}
        {imgLight && (
            <Image
                className="hidden max-h-12 dark:block"
                src={imgLight}
                alt="Logo-Light"
                layout="intrinsic"
                quality={100}
            />
        )}
      </Link>
  );
};

export default Logo;
