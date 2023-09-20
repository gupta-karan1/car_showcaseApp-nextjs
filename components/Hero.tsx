"use client";

import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book and Rent a Car - Quickly and Instantly!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our online booking system.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="mt-10 rounded-full text-white bg-primary-blue "
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" fill alt="car" className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
