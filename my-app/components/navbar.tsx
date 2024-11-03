'use client'
// components/Navbar.js
import { useState } from "react";
import Link from "next/link";

import { Menu,  X } from 'lucide-react';
import { ModeToggle } from "./theme-mode";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed top-0 w-full z-50 px-4 py-3 md:px-8 border-b-[0.5px] dark:border-gray-800 border-gray-200 bg-gray-100 dark:bg-black">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" className="text-2xl font-bold">
          Smon Kidane
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#about" className="dark:hover:text-gray-300 hover:text-gray-600">
            About
          </Link>
          <Link href="#skills" className="dark:hover:text-gray-300 hover:text-gray-600 ">
            Skills
          </Link>
          <Link href="#project" className="dark:hover:text-gray-300 hover:text-gray-600">
            Project
          </Link>
          <Link href="#contact" className="dark:hover:text-gray-300 hover:text-gray-600">
            Contact
          </Link>
          {/* Call to Action Button */}
          
        <ModeToggle/>
        </div>

        
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden flex gap-5 items-center">
        <ModeToggle/>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="dark:text-gray-200 focus:outline-none text-gray-900"
          >
            {isOpen ? (
              <span className="material-icons"><X/></span>
            ) : (
              <span className="material-icons"><Menu/></span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2">
          <Link href="#about" className="block hover:text-gray-300">
            About
          </Link>
          <Link href="#skills" className="block hover:text-gray-300">
            Skills
          </Link>
          <Link href="#project" className="block hover:text-gray-300">
            Project
          </Link>
          <Link href="#contact" className="block hover:text-gray-300">
            Contact
          </Link>
          
        </div>
      )}
    </nav>
  );
}
