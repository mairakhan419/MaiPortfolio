import React, { useEffect, useState } from 'react';
import './bird.css';
import Birds from './Birds';
import Clouds from './Clouds';
import './Navbar.css';
function Hero() {
  const [isLocked, setIsLocked] = useState(true);

  const handleScroll = () => {
    const scrollThreshold = window.innerHeight; // Full viewport height
    const scrollTop = window.scrollY;
    const scrollPoint = scrollThreshold * (1 / 4);

    if (scrollTop >= scrollPoint) {
      setIsLocked(false); // Unlock scrolling after threshold
    } else {
      setIsLocked(true); // Lock scrolling before threshold
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {' '}
      <img
        src="/hero.png"
        className="h-full w-full object-cover sm:object-cover"
        alt="Hero Image"
      />
      <div className="pointer-events-none absolute left-0 top-0 z-[500] flex h-[95vh] w-full items-center justify-center">
        <h1 className="font-poppins text-4xl font-light text-black md:text-6xl">
          Maira Khan
        </h1>
      </div>
      {/* Birds and Clouds */}
      <div className="absolute left-0 top-0 h-full w-full">
        <Birds />
        <Clouds />
      </div>
    </>
  );
}

export default Hero;
