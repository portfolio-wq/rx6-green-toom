"use client";
import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaSmile,
} from "react-icons/fa";
import { DiTerminal } from "react-icons/di";
import Reveal from "./animation/Reveal";
function About() {
  const atwork = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React",
    "Redux",
    "NodeJS",
    "ExpressJS",
    "Github",
    "AWS",
  ];
  const forFun = [
    "Rust",
    "Tailwind",
    "Java",
    "Spring",
    "Figma",
    "FastAPI",
    "Python",
  ];
  return (
    <section
      id="about"
      className="flex flex-col gap-3 relative bg-gray-500] px-[21px] py-[63px] md:p-[84px] m-auto max-w-[1150px] overflow-hidden"
    >
      <div className="flex  justify-center items-center gap-3 mb-[2.4rem]">
        <h1 className="text-3xl font-bold">
          About<span className="text-[#0aff9d] font-bold">.</span>
        </h1>

        <div className="w-full h-[1px] bg-gray-700 ]"></div>
      </div>
      {/*  */}
      <div className="flex flex-col md:flex-row gap-5   ">
        <div className="flex flex-col gap-4 ">
          <Reveal>
            <div className="">
              {" "}
              <p className="font-[200]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                possimus dignissimos quasi totam. Deserunt ullam,
              </p>
              <p className="font-[200]">
                minus commodi sit repudiandae reprehenderit pariatur veritatis
                nulla odit nihil rerum, odio aperiam consequuntur. Consequatur?
              </p>
              <p className="font-[200]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                possimus dignissimos quasi totam. Deserunt ullam,
              </p>
              <p className="font-[200]">
                minus commodi sit repudiandae reprehenderit pariatur veritatis
                nulla odit nihil rerum, odio aperiam consequuntur. Consequatur?
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex  items-center gap-2">
              <span className="text-[#0aff9d]">My links -&gt;</span>

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
            </div>
          </Reveal>
        </div>
        {/* right */}
        <div className=" flex flex-col gap-4 ">
          <Reveal>
            {" "}
            <div className="flex flex-col gap-4">
              {" "}
              <h1 className="text-xl font-bold flex w-fit items-center">
                <DiTerminal className="text-[#0aff9d]" /> Use at work
              </h1>
              <div className="flex flex-wrap gap-2">
                {atwork.map((item, i) => (
                  <span
                    key={i}
                    className="bg-[#232323] py-1 px-2 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/*  */}
          <Reveal>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold flex w-fit items-center gap-1">
                <FaSmile className="text-[#0aff9d]" /> For fun
              </h1>
              <div className="flex flex-wrap gap-2">
                {forFun.map((item, i) => (
                  <span
                    key={i}
                    className="bg-[#232323] py-1 px-2 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
