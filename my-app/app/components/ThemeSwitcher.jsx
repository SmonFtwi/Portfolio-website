"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai"; // Import the menu icon

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [showNav, setShowNav] = useState(false); // State to manage nav list visibility
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="md:text-lg font-serif flex shadow-sm p-4 dark:text-white light:text-gray-700 align-middle md:justify-center justify-between gap-5 relative container">
      <h1 className="md:flex-initial md:w-1/3 font-bold cursor-pointer">Smon Ftwi Kidane</h1>
      {/* Toggle button for nav list on small screens */}
      <div onClick={() => setShowNav(!showNav)} className="cursor-pointer md:hidden absolute right-5">
        <AiOutlineMenu className="hover:text-blue-700" />
      </div>
      {/* Nav list */}
      <ul className={`absolute top-full right-10  mt-2 md:mt-0 md:relative md:flex md:flex-initial gap-4 font-medium ${showNav ? 'block  ' : 'hidden'} md:inline  transition-all duration-300`}>
        <li className="cursor-pointer hover:text-blue-700"> About</li>
        <li className="cursor-pointer hover:text-blue-700"> Skills</li>
        <li className="cursor-pointer hover:text-blue-700"> Experience</li>
        <li className="cursor-pointer hover:text-blue-700"> Projects</li>
        <li className="cursor-pointer hover:text-blue-700"> Resume</li>
      </ul>
      <div className=" absolute right-20 top-6">
        {/* Toggle button for dark mode */}
        {theme === "light" ? (
          <BiMoon onClick={() => setTheme("dark")} className="cursor-pointer hover:text-blue-700" />
        ) : (
          <BsSun onClick={() => setTheme("light")} className="cursor-pointer hover:text-blue-700" />
        )}
      </div>
    </div>
  );
};

export default Header;
