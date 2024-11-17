import React from 'react';
import projects from '../../projects/projects.json';
function Projects() {
  console.log(projects);

  return (
    <>
      {projects.map((project, ind) => {
        const images = project.images;
        console.log(ind);
        if (ind % 2 == 0) {
          return (
            <div
              key={project.id}
              className="flex w-full bg-white p-4 pt-[5rem]"
            >
              <div className="sticky top-[4rem] flex h-[25rem] w-1/2 justify-center">
                <div className="flex flex-col gap-4 p-8">
                  <div className="text-5xl tracking-widest">{project.name}</div>
                  <div className="text-xl">{project.description}</div>
                </div>
              </div>
              <div className="w-1/2">
                {images.map((img, index) => (
                  <img key={index} src={img} className="mb-2" />
                ))}
              </div>
            </div>
          );
        }
        return (
          <div key={project.id} className="flex w-full bg-white p-4 pt-[5rem]">
            <div className="w-1/2">
              {images.map((img, index) => (
                <img key={index} src={img} className="mb-2" />
              ))}
            </div>
            <div className="sticky top-[4rem] flex h-[25rem] w-1/2 justify-center">
              <div className="flex flex-col gap-4 p-8">
                <div className="text-5xl tracking-widest">{project.name}</div>
                <div className="text-xl">{project.description}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Projects;
