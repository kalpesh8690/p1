import React from "react";
import mypic from "../../../assets/images/mypic.png";
import { MdCall, MdFileOpen } from "react-icons/md";
import { Button } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-1 gap-5">
      <div className="text-center p-10 sm:p-0  mt-10 lg:mt-20 lg:pr-20 sm:block animate-fadeIn">
        <h1 className="text-8xl lg:text-8xl font-bold text-gray-800">Hello</h1>
        <div className="mt-6">
          <p className="text-4xl lg:text-4xl text-gray-700">
            <span>I AM </span>
            <strong>Kalpesh Chauhan</strong>
          </p>
          <p className="mt-2 text-xl lg:text-2xl text-gray-500">Full Stack Web Developer</p>
        </div>
        <div className="mt-10 flex justify-center gap-5">
          <Button rightIcon={<MdCall />} colorScheme="blue" variant="solid" aria-label="Contact Me">
            Contact Me
          </Button>
          <Button rightIcon={<MdFileOpen />} colorScheme="green" variant="solid" aria-label="Resume">
            Resume
          </Button>
        </div>
        <div className="mt-5 flex justify-center  space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-800" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="text-2xl text-gray-800 hover:text-gray-900" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-2xl text-blue-500 hover:text-blue-600" />
          </a>
        </div>
      </div>
      <div className="flex justify-center  mt-10 sm:mt-0 animate-fadeIn">
        <img className="w-2/3 md:w-1/2 sm:w-2/3" src={mypic} alt="Kalpesh Chauhan" />
      </div>
    </section>
  );
};

export default Banner;
