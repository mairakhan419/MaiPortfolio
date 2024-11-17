import React from 'react';

function Navbar() {
  const navigation = [
    { name: 'Home', link: 'home' },
    { name: 'Projects', link: 'projects' },
    { name: 'Skills', link: 'skills' },
  ];
  const handleScroll = (id) => {
    console.log(id);
    const section = document.getElementById(id);
    console.log(section);
    if (id == 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="font-poppins sticky top-0 z-[100] flex justify-between bg-white px-6 py-4">
      <div className="text-lg">Maira Khan</div>
      <div className="flex gap-3">
        {navigation.map((nav, index) => {
          return (
            <div
              className="cursor-pointer transition duration-200 ease-in hover:text-rose-400"
              key={index}
              onClick={() => handleScroll(nav.link)}
            >
              {nav.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
