"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function AboutMe() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name is Weiqi Zhuang",
      "Software Develoepr at BeaconFire",
      "UX Engineer in build",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col w-auto h-auto gap-4 pb-12">
      <p className="text-xs font-normal text-zinc-400">ABOUT ME</p>
      <h1 className="text-lg lg:text-xl font-semibold px-10 text-center">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#2DD4BF" />
      </h1>
      <div className="flex flex-col w-[530px] h-auto gap-4">
        <p className="text-lg font-normal">
          I am Weiqi (Dennis) Zhuang, a passionate Software Engineer with over 2
          years of experience in developing innovative web and iOS applications.
          My expertise lies in creating stable, scalable, and accessible
          software products across various platforms.
        </p>
        <p className="text-lg font-normal">
          My experience includes roles at BeaconFire, BoardX Inc, and DTEN,
          where I have successfully led and contributed to numerous projects,
          enhancing user experiences and optimizing software performance.
        </p>
        <p className="text-lg font-normal">
          Skilled in languages like TypeScript, JavaScript, C++, Java, and
          Python, and proficient in frameworks like React, Node.js, and AWS, I
          have a track record of delivering efficient solutions in software
          development.
        </p>
        <p className="text-lg font-normal">
          I hold a B.S. in Computer Science and Brain & Behavioral Science from
          Purdue University, underlining my commitment to continuous learning
          and professional development. My journey is driven by a user-focused
          and empathetic approach, aiming to make a meaningful impact through
          technology.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
