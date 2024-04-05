"use client";
import React from "react";
import Reveal from "./animation/Reveal";

function Experience() {
  const experience = [
    {
      id: 0,
      name: "Google",
      time: "2022 - present",
      role: "Software Engineer",
      place: "atlanta",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      desc: [
        `Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.`,
      ],
    },
    {
      id: 1,
      name: "Google",
      time: "2022 - present",
      role: "Software Engineer",
      place: "atlanta",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      desc: [
        `Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.`,
      ],
    },
    {
      id: 3,
      name: "Google",
      time: "2022 - present",
      role: "Software Engineer",
      place: "atlanta",
      tools: ["Flutter", "MUI", "Python", "FastAPI"],
      desc: [
        `Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.`,
      ],
    },
  ];
  return (
    <section
      id="experience"
      className="flex flex-col gap-3 relative bg-gray-500] px-[21px] py-[63px] md:p-[84px] m-auto max-w-[1150px] overflow-hidden"
    >
      <div className="flex  justify-between items-center gap-3 mb-[2.4rem]">
        <div>
          {" "}
          <h1 className="text-3xl font-bold">
            Experience<span className="text-[#0aff9d] font-bold">.</span>
          </h1>
        </div>

        <div className="w-full h-[1px] bg-gray-700 ]"></div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-3">
        {experience.map((exp) => (
          <div key={exp.id} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <Reveal>
                {" "}
                <span className="font-bold">{exp.name}</span>{" "}
              </Reveal>
              <Reveal>
                {" "}
                <span>{exp.time}</span>
              </Reveal>
            </div>
            <div className="flex justify-between items-center">
              <Reveal>
                <span className="text-[#0aff9d]">{exp.role}</span>
              </Reveal>
              <Reveal>
                <span>{exp.place}</span>
              </Reveal>
            </div>
            <Reveal>
              <p className="font-[200]">{exp.desc}</p>
            </Reveal>

            <div className="flex gap-2 mb-2">
              <Reveal>
                {exp.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="bg-[#232323] py-1 px-2 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </Reveal>
            </div>
            <div className="w-full h-[1px] bg-gray-700 ]"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
