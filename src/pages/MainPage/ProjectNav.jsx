import React, { useEffect, useState } from 'react';
import { MdFormatListBulleted } from 'react-icons/md';
import projects from '../../projects/projects.json';

function ProjectNav({ content, isScroll }) {
  const [currentContent, setCurrentContent] = useState(content);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [checkList, setCheckList] = useState(false);
  useEffect(() => {
    if (content !== currentContent) {
      setIsTransitioning(true); // Trigger transition out
      const timeout = setTimeout(() => {
        setCurrentContent(content); // Update the content after transition out
        setIsTransitioning(false); // Trigger transition in
      }, 300); // Match this to your CSS transition duration
      return () => clearTimeout(timeout);
    }
  }, [content, currentContent]);
  // Smooth scroll to section
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    console.log(id, section);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`${
        isScroll ? '-translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      } } box-shadow fixed bottom-0 z-[100] w-full border bg-white py-4 shadow-lg transition duration-500 ease-in`}
    >
      <div className="flex justify-between px-4 font-bold">
        <div className="flex w-full flex-col">
          <div
            className={`w-full text-lg transition-opacity duration-300 ease-in-out ${
              !checkList
                ? isTransitioning
                  ? 'opacity-0'
                  : 'opacity-100'
                : checkList
                  ? 'h-0 opacity-0'
                  : 'opacity-100'
            } `}
          >
            {currentContent}
          </div>

          {/* Checklist Section */}
          <div
            className={`w-full overflow-hidden transition-all duration-300 ease-in ${
              checkList ? 'max-h-[50vh] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {projects.map((project, index) => {
              const proj = `project-${project.name}`;
              return (
                <div
                  key={index}
                  className={`${project.name == currentContent ? 'text-rose-400' : 'text-neutral-900'} 0 px-4 py-2`}
                >
                  <span
                    onClick={() => {
                      handleScrollToSection(proj);
                    }}
                    className="cursor-pointer hover:text-rose-700"
                  >
                    {project.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <MdFormatListBulleted
          size={25}
          className="shrink-0"
          onClick={() => {
            setCheckList((prev) => !prev);
          }}
        />
      </div>
    </div>
  );
}

export default ProjectNav;
