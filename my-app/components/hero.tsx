
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from "next/link";
//import { IconCloudDemo } from "./iconCloud";

export default function HeroSection() {
  return (
    <section id="home" className=" flex flex-col md:flex-row items-center justify-center   text-center  w-full ">
      {/* Background Overlay */}
      
      
      {/* Hero Content */}
      <div className="  flex flex-col md:flex-row items-center justify-center md:justify-start gap-10   md:py-0">
        {/* Text Section */}
        <div className="text-start md:text-left space-y-5 animate-fadeIn">
          <div className="inline-block rounded-full bg-black text-gray-100  dark:bg-white dark:text-gray-900  px-4 py-2 text-sm font-medium tracking-wide text-opacity-90">
            Software Engineer
          </div>
          <h1
            className="text-2xl md:text-5xl lg:text-6xl font-bold text-start"
           
          > 
          Smon Kidane
          </h1>

          
          {/* Social Icons */}
          <div className="flex space-x-4 animate-fadeIn">
            <Link href="https://github.com/yourusername" target="_blank">
              <FaGithub size={28} className="hover:text-gray-300 transition-colors duration-200" />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank">
              <FaLinkedin size={28} className="hover:text-gray-300 transition-colors duration-200" />
            </Link>
            <Link href="https://instagram.com/yourusername" target="_blank">
              <FaInstagram size={28} className="hover:text-gray-300 transition-colors duration-200" />
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-[300px] w-[250px] md:h-[450px] md:w-[400px] floating-image">
          
           <Image
            alt="Image"
            className=" rounded-full  shadow-lg"
            src={'/hero.jpg'}
            layout="fill"
            priority={true}
          />
        </div> 
      </div>
      
      
    </section>
  );
}
