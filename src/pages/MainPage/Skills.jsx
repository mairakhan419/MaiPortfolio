import React from 'react';
import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaLaptopCode,
  FaMobileAlt,
  FaTools,
} from 'react-icons/fa';
import { RiJavaLine } from 'react-icons/ri';
import { FaPython } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { SiFirebase, SiMongodb, SiMysql } from 'react-icons/si';
import { FaLock, FaNetworkWired, FaCogs } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
} from 'react-icons/si';

const languages = [
  { name: 'Java', icon: <RiJavaLine size={20} /> },
  { name: 'Python', icon: <FaPython size={20} /> },
  { name: 'C++', icon: <SiCplusplus size={20} /> },
];

const database = [
  { name: 'Firebase', icon: <SiFirebase size={20} /> },
  { name: 'MongoDB', icon: <SiMongodb size={20} /> },
  { name: 'SQL', icon: <SiMysql size={20} /> },
];

const webDevelopment = [
  { name: 'HTML', icon: <SiHtml5 size={20} /> },
  { name: 'CSS', icon: <SiCss3 size={20} /> },
  { name: 'JavaScript', icon: <SiJavascript size={20} /> },
  { name: 'React', icon: <SiReact size={20} /> },
  { name: 'Node.js', icon: <SiNodedotjs size={20} /> },
];

const otherSkills = [
  { name: 'Algorithms', icon: <FaCogs size={20} /> },
  { name: 'Security', icon: <FaLock size={20} /> },
  { name: 'Networks', icon: <FaNetworkWired size={20} /> },
];
function Skills() {
  return (
    <>
      <div
        id="skills"
        className="flex w-full flex-col-reverse bg-white lg:flex-row"
      >
        {/* Left Section */}
        <Fade bottom>
          <div className="h-[200vh] bg-white p-8 lg:w-1/2">
            <div className="space-y-8">
              <div className="flex flex-col space-y-6 border border-gray-200 p-4">
                {/* Header Section */}

                <div className="flex items-center space-x-4">
                  <FaCode className="text-xltext-black lg:text-4xl" />
                  <div>
                    <h2 className="text-lg font-semibold text-black lg:text-2xl">
                      Programming
                    </h2>
                    <p className="text-base text-gray-500">Proficient in:</p>
                  </div>
                </div>

                {/* Language List */}
                <div className="flex flex-col space-y-3 pl-8">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 border border-gray-200 p-2 transition-transform hover:scale-105 hover:bg-gray-50"
                    >
                      {/* Icon */}
                      <div className="text-lg text-red-500 lg:text-2xl">
                        {lang.icon}
                      </div>

                      {/* Name */}
                      <div className="text-base font-medium text-gray-800">
                        {lang.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col space-y-6 border border-gray-200 p-4">
                <div className="flex items-center space-x-4">
                  <FaDatabase className="text-xltext-black lg:text-4xl" />
                  <div>
                    <h2 className="text-lg font-semibold text-black lg:text-2xl">
                      Databases
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col space-y-3 pl-8">
                  {database.map((lang, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 border border-gray-200 p-2 transition-transform hover:scale-105 hover:bg-gray-50"
                    >
                      {/* Icon */}
                      <div className="text-lg text-red-500 lg:text-2xl">
                        {lang.icon}
                      </div>

                      {/* Name */}
                      <div className="text-base font-medium text-gray-800">
                        {lang.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col space-y-6 border border-gray-200 p-4">
                <div className="flex items-center space-x-4">
                  <FaLaptopCode className="text-xltext-black lg:text-4xl" />
                  <div>
                    <h2 className="text-lg font-semibold text-black lg:text-2xl">
                      Web Development
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col space-y-3 pl-8">
                  {webDevelopment.map((lang, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 border border-gray-200 p-2 transition-transform hover:scale-105 hover:bg-gray-50"
                    >
                      {/* Icon */}
                      <div className="text-lg text-red-500 lg:text-2xl">
                        {lang.icon}
                      </div>

                      {/* Name */}
                      <div className="text-base font-medium text-gray-800">
                        {lang.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col space-y-6 border border-gray-200 p-4">
                <div className="flex items-center space-x-4">
                  <FaTools className="text-xltext-black lg:text-4xl" />
                  <div>
                    <h2 className="text-lg font-semibold text-black lg:text-2xl">
                      Other Skills
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col space-y-3 pl-8">
                  {webDevelopment.map((lang, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 border border-gray-200 p-2 transition-transform hover:scale-105 hover:bg-gray-50"
                    >
                      {/* Icon */}
                      <div className="text-lg text-red-500 lg:text-2xl">
                        {lang.icon}
                      </div>

                      {/* Name */}
                      <div className="text-base font-medium text-gray-800">
                        {lang.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Fade>

        {/* Right Section */}
        <div className="bg-red top-0 flex h-[5rem] items-center justify-center font-poppins text-2xl font-medium text-neutral-900 sm:h-[10rem] lg:sticky lg:h-[56rem] lg:w-1/2 lg:text-5xl">
          My Skills
        </div>
      </div>
    </>
  );
}

export default Skills;
