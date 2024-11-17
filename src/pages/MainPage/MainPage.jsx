import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import Skills from './Skills';
import Projects from './Projects';

function MainPage() {
  return (
    <div className="relative">
      <Navbar />
      <div
        id="home"
        className="sticky top-0 z-10 flex h-screen items-center justify-center bg-cover bg-center"
      >
        <Hero />
      </div>
      <div className="relative z-20">
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default MainPage;
