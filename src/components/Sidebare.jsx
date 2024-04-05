"use client";
import React from "react";
import { motion } from "framer-motion";
function Sidebare() {
  const links = [
    { name: "About", link: "#about" },
    { name: "Project", link: "#project" },
    { name: "Exp.", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <nav className="bg-[#080808] h-screen  text-black top-0 left-0 sticky flex flex-col items-center overflow-y-scroll w-fit gap-2">
      <a href="#hero">
        <span className="bg-[#111111] p-3 rounded-md text-white font-[1000] text-md mt-5 w-[45px] h-[45px] flex justify-center items-center">
          B
          <span className="text-[#0aff9d] w-fit h-fit font-[1000] text-md">
            .
          </span>
        </span>
      </a>

      {links.map((link, i) => (
        <motion.a
          key={i}
          href={link.link}
          className=" text-gray-500 h-[100px] shrink-0 flex items-center justify-center w-[60px] hover:bg-[#111111] hover:border-r-[1px] hover:border-[#0aff9d] hover:text-gray-400 hover:opacity-1 transform-none"
          style={{ writingMode: "vertical-lr" }}
        >
          {link.name}
        </motion.a>
      ))}
    </nav>
  );
}

export default Sidebare;
