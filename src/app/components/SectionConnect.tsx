"use client";
import { Icon } from "@iconify/react";
import React from "react";

import data from "../data/socials.json"
import { Socials } from "../types";

function SectionConnect() {
  return (
    <div data-aos="fade-up" className="card gap-8">
      <div className="flex flex-col w-full gap-2">
        <h3 className="text-sm font-bold text-zinc-300 uppercase">Connect </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {data.map((item: Socials) => (
          <div key={item.id} className="group px-2 py-4 w-full h-full hover:bg-zinc-500/20 rounded-xl transition-colors">
            <a href={item.url} target="_blank" className="flex flex-col sm:flex-row gap-2 items-start hover:no-underline hover:text-current">
            <Icon icon={item.icon} className="w-4 h-4 m-1" />
              <div className="flex flex-col gap-1 ">
                <h4 className="text-base font-bold text-zinc-300">{item.title}</h4>
                <p className="text-xs font-nromal text-zinc-500 group-hover:text-teal-500 transition-colors">
                  {item.body}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionConnect;
