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

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
} from 'react-icons/si';

const languages = [
  { name: 'Java', icon: <RiJavaLine size={25} /> },
  { name: 'Python', icon: <FaPython size={25} /> },
  { name: 'C++', icon: <SiCplusplus size={25} /> },
];

const database = [
  { name: 'Firebase', icon: <SiFirebase size={25} /> },
  { name: 'MongoDB', icon: <SiMongodb size={25} /> },
  { name: 'SQL', icon: <SiMysql size={25} /> },
];

const webDevelopment = [
  { name: 'HTML', icon: <SiHtml5 size={25} /> },
  { name: 'CSS', icon: <SiCss3 size={25} /> },
  { name: 'JavaScript', icon: <SiJavascript size={25} /> },
  { name: 'React', icon: <SiReact size={25} /> },
  { name: 'Node.js', icon: <SiNodedotjs size={25} /> },
];

const otherSkills = [
  { name: 'Algorithms', icon: <FaCogs size={25} /> },
  { name: 'Security', icon: <FaLock size={25} /> },
  { name: 'Networks', icon: <FaNetworkWired size={25} /> },
];
function Skills() {
  return (
    <>
      <div id="skills" className="flex w-full bg-white">
        {/* Left Section */}
        <div className="h-[200vh] w-1/2 bg-white bg-gradient-to-b p-8">
          <div className="space-y-6">
            <div className="flex flex-col space-y-6 rounded-lg p-4 shadow-lg">
              {/* Header Section */}
              <div className="flex items-center space-x-4">
                <FaCode className="text-5xl text-neutral-900" />
                <div>
                  <h2 className="text-3xl font-bold text-neutral-900">
                    Programming
                  </h2>
                  <p className="text-lg text-gray-500">Proficient in:</p>
                </div>
              </div>

              {/* Language List */}
              <div className="flex flex-col space-y-3 pl-8">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex transform items-center space-x-3 rounded-md bg-white p-2 shadow-md transition-transform hover:scale-105 hover:bg-gray-100"
                  >
                    {/* Icon */}
                    <div className="text-2xl text-rose-500">{lang.icon}</div>

                    {/* Name */}
                    <div className="text-lg font-medium text-gray-800">
                      {lang.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-6 rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-4">
                <FaDatabase className="text-4xl text-neutral-900" />
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    Databases
                  </h2>
                </div>
              </div>
              <div className="flex flex-col space-y-3 pl-8">
                {database.map((lang, index) => (
                  <div
                    key={index}
                    className="flex transform items-center space-x-3 rounded-md bg-white p-2 shadow-md transition-transform hover:scale-105 hover:bg-gray-100"
                  >
                    {/* Icon */}
                    <div className="text-2xl text-rose-500">{lang.icon}</div>

                    {/* Name */}
                    <div className="text-lg font-medium text-gray-800">
                      {lang.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-6 rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-4">
                <FaLaptopCode className="text-4xl text-neutral-900" />
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    Web Development
                  </h2>
                </div>
              </div>
              <div className="flex flex-col space-y-3 pl-8">
                {webDevelopment.map((lang, index) => (
                  <div
                    key={index}
                    className="flex transform items-center space-x-3 rounded-md bg-white p-2 shadow-md transition-transform hover:scale-105 hover:bg-gray-100"
                  >
                    {/* Icon */}
                    <div className="text-2xl text-rose-500">{lang.icon}</div>

                    {/* Name */}
                    <div className="text-lg font-medium text-gray-800">
                      {lang.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-6 rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-4">
                <FaTools className="text-4xl text-neutral-900" />
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    Other Skills
                  </h2>
                </div>
              </div>
              <div className="flex flex-col space-y-3 pl-8">
                {webDevelopment.map((lang, index) => (
                  <div
                    key={index}
                    className="flex transform items-center space-x-3 rounded-md bg-white p-2 shadow-md transition-transform hover:scale-105 hover:bg-gray-100"
                  >
                    {/* Icon */}
                    <div className="text-2xl text-rose-500">{lang.icon}</div>

                    {/* Name */}
                    <div className="text-lg font-medium text-gray-800">
                      {lang.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="sticky top-0 flex h-[56rem] w-1/2 items-center justify-center bg-white font-poppins text-5xl font-light text-neutral-900">
          My Skills
        </div>
      </div>
    </>
  );
}

export default Skills;
