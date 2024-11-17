import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { RxHamburgerMenu } from 'react-icons/rx';
function Navbar() {
  const navigation = [
    { name: 'Home', link: 'home' },
    { name: 'Skills', link: 'skills' },

    { name: 'Projects', link: 'projects' },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 400);
  const [isHidden, setIsHidden] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  let lastScrollY = 0;

  // Handle screen size detection
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 400);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll direction to show/hide navbar

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true); // Hide when scrolling down
      } else {
        setIsHidden(false); // Show when scrolling up
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0; // Prevent negative scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);

    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mobile navigation bar
  if (isSmallScreen) {
    return (
      <div>
        <>
          <div
            className={`${
              sidebar ? 'translate-x-0' : 'translate-x-full'
            } fixed right-0 top-0 z-[999] h-screen w-full bg-white shadow-lg transition-transform duration-300 ease-in-out`}
          >
            <div className="flex items-center justify-between border-b border-gray-200 p-5">
              <div className="font-poppins text-lg font-light">Maira Khan</div>
              <div
                onClick={() => setSidebar(false)}
                className="cursor-pointer rounded-full p-2 hover:bg-gray-200"
              >
                <RxHamburgerMenu size={20} />
              </div>
            </div>
            <nav className="mt-6 flex flex-col gap-4 px-4 text-base font-medium">
              {navigation.map((nav, index) => (
                <div
                  key={index}
                  onClick={() => {
                    handleScrollToSection(nav.link);
                    setSidebar(false);
                  }}
                  className="cursor-pointer rounded-md px-3 py-2 text-gray-700 transition hover:bg-gray-100"
                >
                  {nav.name}
                </div>
              ))}
            </nav>
          </div>
        </>
        <div
          className={`absolute right-[1rem] top-0 z-[101] ${isScroll ? 'pt-[1.5rem]' : 'pt-[1rem]'} transition-all duration-500 ease-in-out`}
        >
          <div
            onClick={() => setSidebar(true)}
            className={`${isScroll && 'burger'} flex h-[2rem] w-[2rem] items-center justify-center rounded-full p-4`}
          >
            <RxHamburgerMenu size={20} className="shrink-0" />
          </div>
        </div>

        <div
          className={`mobile-nav px-4 py-6 font-poppins transition-transform duration-300 ${
            isHidden ? 'opacity-0' : 'opacity-100'
          } `}
        >
          <div className="text-lg">Maira Khan</div>
        </div>
      </div>
    );
  }

  // Default large screen navbar
  return (
    <div
      className={`sticky top-0 z-[100] flex justify-between bg-white px-6 py-4 font-poppins ${
        isScroll ? 'pt-[1.5rem]' : 'pt-4'
      } transition-all duration-500 ease-in-out`}
    >
      <div className="text-lg">Maira Khan</div>
      <div className="flex gap-3">
        {navigation.map((nav, index) => (
          <div
            className="cursor-pointer transition duration-200 ease-in hover:text-rose-400"
            key={index}
            onClick={() => handleScrollToSection(nav.link)}
          >
            {nav.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
