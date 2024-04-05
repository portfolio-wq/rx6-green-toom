"use client";
import Image from "next/image";
import React, { useState } from "react";
import image from "../../public/example-project.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Reveal from "./animation/Reveal";

function Project() {
  const project = [
    {
      id: 0,
      name: "Paint.app",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      image: image,
      desc: [
        `Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.`,
        `The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.`,
        `Because this isn't real, here's some gibberish to fill space :)`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt.`,
        `Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.`,
      ],
    },
    {
      id: 1,
      name: "Paint.app",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      image: image,
      desc: [
        `Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.`,
        `The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.`,
        `Because this isn't real, here's some gibberish to fill space :)`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt.`,
        `Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.`,
      ],
    },
    {
      id: 2,
      name: "Paint.app",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      image: image,
      desc: [
        `Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.`,
        `The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.`,
        `Because this isn't real, here's some gibberish to fill space :)`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt.`,
        `Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.`,
      ],
    },
    {
      id: 3,
      name: "Paint.app",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      image: image,
      desc: [
        `Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.`,
        `The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku.`,
        `Because this isn't real, here's some gibberish to fill space :)`,
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt.`,
        `Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.`,
      ],
    },
  ];
  return (
    <section
      id="project"
      className="flex flex-col gap-3 relative bg-gray-500]  px-[21px] py-[63px] md:p-[84px] lg:mx-auto  justify-center max-w-[1150px]"
    >
      <div className="flex  justify-center items-center gap-3 mb-[2.4rem]">
        <div className="w-full h-[1px] bg-gray-700 ]"></div>{" "}
        <h1 className="text-3xl font-bold">
          Projects<span className="text-[#0aff9d] font-bold">.</span>
        </h1>
      </div>
      {/*  */}
      <div className="grid gap-4 cardsgrid">
        {project.map((item) => (
          <div key={item.id} className="transform-none" style={{ opacity: 1 }}>
            <div
              className="imgparent bg-gray-700  px-5 pt-6 rounded-md w-[100%] overflow-hidden cursor-pointer relative"
              style={{ aspectRatio: 16 / 9 }}
            >
              <motion.div
                className=""
                whileHover={{
                  rotate: 2.5,
                  transition: { duration: 0.125 },
                }}
              >
                <Image
                  src={item.image}
                  alt=""
                  width={"85%"}
                  height={"85%"}
                  className="imgrotate rounded-md"
                />
              </motion.div>
            </div>
            {/* bottom */}
            <div>
              <div className="flex justify-center items-center my-3 gap-3">
                {" "}
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <div className="w-full h-[2px] bg-gray-700 ]"></div>
                <div className="text-2xl text-gray-400">
                  <FaLinkedin />
                </div>
              </div>
              <div className="flex flex-col">
                <Reveal>
                  {" "}
                  <div className="flex gap-2 mb-2">
                    {item.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="text-sm font-[200] text-[#0aff9d]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </Reveal>
                <Reveal>
                  <p className="font-[200]">
                    {item.desc[0]}{" "}
                    <button className="text-[#0aff9d]">Learn More &gt;</button>
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
