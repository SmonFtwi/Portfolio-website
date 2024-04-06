import Image from 'next/image';
import React from 'react';
import { AiOutlineDown } from "react-icons/ai";

export default function Mainpage() {
  return (
    <div className="relative flex  justify-center items-center h-[90vh]">
      <div
        className="absolute inset-0 z-0 bg-[image] bg-cover bg-center bg-no-repeat opacity-20 "
        style={{ backdropFilter: 'blur(2px)' }}
      ></div>
      <div className=' flex flex-col justify-center items-center gap-5'>
      <div className="mx-auto rounded-full max-w-80 max-h-80 relative overflow-hidden z-10 opacity-80">
        <Image src="/smon.jpg" width={300} height={300} />
      </div>
      <h1 className=' text-5xl font-serif'>Smon Kidane</h1>
      <h2 className=' font-serif md:text-3xl text-2xl'>Machine Learning Engineer</h2>
      <a href="#about" className="flex flex-col items-center justify-center  animate-bounce hidden md:inline md:text-3xl mt-5">
          <AiOutlineDown />
        </a>
      </div>
    </div>
  );
}
