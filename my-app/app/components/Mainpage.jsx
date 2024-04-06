import Image from 'next/image';
import React from 'react';
import { AiOutlineDown } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export default function Mainpage() {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center md:h-[90vh] h-[80vh] ">
      <div
        className="absolute inset-0 z-0 bg-[image] bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backdropFilter: 'blur(2px)' }}
      ></div>
      <div className='flex flex-col justify-center items-center gap-5'>
        <div className="mx-auto rounded-full max-w-80 max-h-80 relative overflow-hidden z-10 ">
          <Image src="/smon.jpg" width={300} height={300} />
        </div>
        <h1 className='md:text-5xl text-3xl font-serif font-semibold'>Smon Kidane</h1>
        <h2 className='font-serif md:text-3xl text-xl'>Machine Learning Engineer</h2>
        <a href="#about" className="flex flex-col items-center justify-center animate-bounce hidden md:inline md:text-3xl mt-5 absolute bottom-3 ">
          <AiOutlineDown />
        </a>
      </div>
      <div className='md:absolute md:top-[45vh] bottom-0 md:left-8 flex md:flex-col gap-6 relative justify-center items-center w-full md:w-auto mt-10'>
        <a href="https://www.linkedin.com/in/smon-kidane/" target="_blank" rel="noreferrer " className='hover:text-blue-700'>
          <BsLinkedin size={28} />
        </a>
        <a href="https://github.com/smonkidane" target="_blank" rel="noreferrer" className='hover:text-blue-700'>
          <AiOutlineGithub size={28} />
        </a>
        <a href="https://www.instagram.com/smonkidane/" target="_blank" rel="noreferrer" className='hover:text-blue-700'>
          <AiFillInstagram  size={28}/>
        </a>
      </div>
    </div>
  );
}
