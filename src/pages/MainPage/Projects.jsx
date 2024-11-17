import React, { useEffect, useState } from 'react';
import projects from '../../projects/projects.json';
import Fade from 'react-reveal/Fade';

function Projects() {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="projects" className="bg-white pb-[5rem]">
      {projects.map((project, ind) => {
        const images = project.images;
        if (ind % 2 == 0) {
          return (
            <div
              key={ind}
              id={`project-${project.name}`}
              className="relative flex w-full flex-col bg-white p-4 pt-[5rem] lg:flex-row"
            >
              <div className="flex justify-center lg:sticky lg:top-[4rem] lg:h-[25rem] lg:w-1/2">
                <div className="relative flex flex-col gap-4 lg:p-8">
                  <div className="title-gradient bg-white py-4 text-2xl font-medium tracking-widest lg:block lg:text-5xl">
                    {project.name}
                  </div>
                  <div className="mb-8 text-base font-light lg:text-xl">
                    {project.description}
                  </div>
                </div>
              </div>
              <Fade bottom>
                <div className="lg:w-1/2">
                  {images.map((img, index) => (
                    <img key={index} src={img} className="mb-2" />
                  ))}
                </div>
              </Fade>
            </div>
          );
        }
        return (
          <div
            key={ind}
            id={`project-${project.name}`}
            className="flex w-full flex-col-reverse bg-white p-4 pt-[5rem] lg:flex-row"
          >
            <Fade bottom>
              <div className="lg:w-1/2">
                {images.map((img, index) => (
                  <img key={index} src={img} className="mb-2" />
                ))}
              </div>
            </Fade>
            <div className="flex justify-center lg:sticky lg:top-[4rem] lg:h-[25rem] lg:w-1/2">
              <div className="flex flex-col gap-4 lg:p-8">
                <div className="title-gradient bg-white py-4 text-2xl font-medium tracking-widest lg:block lg:text-5xl">
                  {project.name}
                </div>
                <div className="mb-8 text-base font-light lg:text-xl">
                  {project.description}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
