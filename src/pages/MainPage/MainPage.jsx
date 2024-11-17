import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import Skills from './Skills';
import Projects from './Projects';
import ProjectNav from './ProjectNav';

function MainPage() {
  const [content, setContent] = useState('');
  useEffect(() => {
    const sections = document.querySelectorAll('div[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // console.log(entry);
          if (entry.isIntersecting) {
            console.log(entry.target.id);
            if (entry.target.id.startsWith('project-')) {
              console.log(entry.target.id);
              const idWithoutPrefix = entry.target.id.replace('project-', '');
              setContent(idWithoutPrefix);
            }
            // setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }, // Adjust threshold as needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= 1500) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="relative">
      <ProjectNav content={content} isScroll={isScroll} />

      {/* <div className="sticky top-0 z-[50] w-full"> */}
      <div className="fixed z-[50] w-full">
        <Navbar />
      </div>
      {/* <div
        id="home"
        className="sticky top-0 z-10 flex h-screen items-center justify-center overflow-x-hidden bg-cover bg-center"
      > */}
      <div className="hero-head">
        <Hero />
      </div>
      {/* </div> */}
      <div className="relative top-[95vh] z-20 lg:top-[100vh]">
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default MainPage;
