import React from 'react';
import './bird.css';
import Birds from './Birds';
import Clouds from './Clouds';
function Hero() {
  return (
    <>
      <img
        src="/hero.png"
        className="h-full w-full object-cover"
        alt="Hero Image"
      />
      <div className="absolute left-0 top-0 h-full">
        <Birds />
        <Clouds />
      </div>
      <div className="absolute flex items-center justify-center pb-[10rem]">
        <h1 className="font-poppins text-4xl font-light text-black md:text-6xl">
          Maira Khan
        </h1>
      </div>
    </>
  );
}

export default Hero;
