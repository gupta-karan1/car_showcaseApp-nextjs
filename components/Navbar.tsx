import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 ">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="CarHub Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Login"
          containerStyles=" rounded-full text-primary-blue bg-white min-w-[130px]"
          btnType="button"
        />
      </nav>
    </header>
  );
};

export default Navbar;
