"use client";
import React from "react";
import Reveal from "./animation/Reveal";

function Contact() {
  return (
    <section
      id="contact"
      className="flex justify-center items-center flex-col gap-3 relative bg-gray-500] px-[21px] py-[63px] md:p-[84px] m-auto max-w-[1150px] overflow-hidden  mb-[2.4rem]"
    >
      <Reveal>
        <h1 className="text-4xl lg:text-5xl font-bold">
          Contact<span className="text-[#0aff9d] font-bold">.</span>
        </h1>
      </Reveal>
      <Reveal>
        <p className="text-center font-[200]">
          Shoot me an email if you want to connect! You can also find me on
          Linkedin or Twitter if that&apos;s more your speed.
        </p>
      </Reveal>
      <Reveal>
        <span>Test@gmail.com</span>
      </Reveal>
    </section>
  );
}

export default Contact;
