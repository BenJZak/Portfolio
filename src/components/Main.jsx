import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaTwitter, FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover scale-x-[-1]"
        src="https://images.unsplash.com/photo-1553696590-4b3f68898333?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="w-full h-screen absolute top-0 left-0 ">
        <div className="max-w-[700px] m-auto pt-[28%] h-[75%] flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm: text-5xl font-bold text-gray-100">I'm Benjamin Zakielarz</h1>
          <h2 className="flex sm: text-3xl pt-4 text-gray-100">
            I'm a 
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Coder",
                1500,
                "Full Stack Developer",
                2000,
                "Computer Science Student",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full text-gray-100">
            <a href="https://twitter.com/BenjaminZ456454" target="_blank">
              <FaTwitter className="cursor-pointer" size={20}/>
            </a>
            <a href="https://github.com/BenJZak" target="_blank">
              <FaGithub className="cursor-pointer" size={20}/>
            </a>
            <a href="https://www.instagram.com/ben_zakielarz/" target="_blank">
            <FaInstagram className="cursor-pointer" size={20}/>
            </a>
            <a href="https://www.linkedin.com/in/benjamin-zakielarz-92822a290/" target="_blank">
            <FaLinkedinIn className="cursor-pointer" size={20}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
