import React from "react";
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
function TopBare() {
  return (
    <header className="p-5  sticky top-0 z-20 backdrop-blur-sm flex  justify-between items-center ">
      <div className="flex gap-3  text-xl  text-gray-500 transition-all">
        <span className=" hover:text-[#0aff9d] cursor-pointer ">
          <FaGithub />
        </span>
        <span className=" hover:text-[#0aff9d] cursor-pointer">
          <FaLinkedin />
        </span>
        <span className=" hover:text-[#0aff9d] cursor-pointer">
          <FaInstagram />
        </span>
        <span className=" hover:text-[#0aff9d] cursor-pointer">
          <FaPinterest />
        </span>
      </div>
      <button className=" border border-[#0aff9d] py-2 rounded-md text-[#0aff9d] px-4 hover:text-[#111111] relative overflow-hidden before:content-[''] before:absolute before:-z-[1] before:h-[100%] before:w-[100%] before:-left-[100%] before:-top-[100%]  before:bg-[#0aff94] hover:before:left-0 hover:before:top-0 ">
        My Resume
      </button>
    </header>
  );
}

export default TopBare;
