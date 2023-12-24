"use client";
import React from "react";
import { Icon } from "@iconify/react";

function Skills() {
  return (
    <div className="flex flex-row max-w-[720px] w-full h-auto p-8 rounded-2xl bg-zinc-900">
      <div className="flex flex-col w-full h-auto gap-4">
        <div className="flex flex-col w-auto h-auto gap-2">
          <p className="text-xs font-normal text-zinc-400">SKILLS</p>
          <p className="text-2xl font-bold text-zinc-50">
            Proficiency Aligned with ViBibility
          </p>
        </div>
        <p className="text-xs font-normal text-zinc-500 ">
          Faucibus turpis in eu mi bibendum neque egestas. Amet mauris commodo
          quis imperdiet massa tincidunt nunc pulvinar. Sem fringilla ut morbi
          tincidunt. Faucibus vitae aliquet nec ullamcorper sit amet risus.
        </p>
      </div>
      <div className="flex flex-col w-auto h-auto gap-2 items-center">
        {/* TODO: add lazy loading for icons */}
        <div className="flex flex-row w-auto h-auto gap-2">
          <div className="h-14 w-14 rounded-full p-2 bg-white">
            <Icon icon="devicon:javascript" className=" w-10 h-10" />
          </div>
          <div className="h-14 w-14 rounded-full p-2 bg-white">
            <Icon icon="devicon:typescript" className=" w-10 h-10" />
          </div>
          <div className="h-14 w-14 rounded-full p-2 bg-white">
            <Icon icon="devicon:swift" className=" w-10 h-10" />
          </div>
          <div className="h-14 w-14 rounded-full p-2 bg-white">
            <Icon icon="devicon:cplusplus" className=" w-10 h-10" />
          </div>
        </div>
        <div className="flex flex-row w-auto h-auto gap-2">
          <div className="h-14 w-14 rounded-full p-2 bg-white">
            <Icon icon="devicon:react" className=" w-10 h-10" />
          </div>
          <div className="h-14 w-14 rounded-full p-2 bg-white">
            <Icon icon="devicon:angular" className=" w-10 h-10" />
          </div>
          <div className="h-14 w-14 rounded-full p-2 bg-white">
            <Icon icon="devicon:nextjs" className=" w-10 h-10" />
          </div>
          <div className="h-14 w-14 rounded-full p-2 bg-white">
            <Icon icon="devicon:nodejs" className=" w-10 h-10" />
          </div>
          <div className="h-14 w-14 rounded-full p-2 bg-white">
            <Icon icon="devicon:git" className=" w-10 h-10" />
          </div>
        </div>
        <div className="flex flex-row w-auto h-auto gap-2">
          <div className="h-14 w-14 rounded-full p-2 bg-white">
            <Icon icon="devicon:mongodb" className=" w-10 h-10" />
          </div>
          <div className="h-14 w-14 rounded-full p-2 bg-white">
            <Icon icon="devicon:mysql" className=" w-10 h-10" />
          </div>
          <div className="h-14 w-14 rounded-full p-2 bg-white">
            <Icon icon="devicon:docker" className=" w-10 h-10" />
          </div>
          <div className="h-14 w-14 rounded-full p-2 bg-white">
            <Icon icon="devicon:kubernetes" className=" w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
