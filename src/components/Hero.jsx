"use client";
import Image from "next/image";
import React from "react";
import Reveal from "./animation/Reveal";
function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col gap-3 relative bg-gray-500] mb-[4.8rem] md:mb-[9.6rem] px-[21px] py-[63px] md:p-[84px] lg:mx-auto max-w-[1150px] justify-center"
    >
      <Reveal>
        <h1 className="md:text-5xl text-3xl font-extrabold">
          Hey, I&apos;m Rayan<span className="text-[#0aff9d]">.</span>
        </h1>
      </Reveal>
      <Reveal>
        {" "}
        <div className="md:text-2xl text-xl">
          <span className="font-thin">I&apos;m a</span>{" "}
          <span className="text-[#0aff9d] font-bold ">Michanical enginer</span>
        </div>
      </Reveal>
      <Reveal>
        {" "}
        <p className="font-[200] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          exercitationem velit aliquam corrupti eos itaque dolore pariatur
          tempore a, temporibus non. Earum reiciendis perferendis adipisci
          reprehenderit quisquam magni, magnam nulla.
        </p>
      </Reveal>
      <Reveal>
        {" "}
        <button className="bg-[#0aff9d] w-fit text-[#111111] py-3 px-5 rounded-md">
          Contact me
        </button>
      </Reveal>
    </section>
  );
}

export default Hero;
