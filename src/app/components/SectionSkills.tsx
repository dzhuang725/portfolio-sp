"use client";
import React from "react";
import { Icon } from "@iconify/react";

import data from "../data/skills.json";
import { Skills } from "../types";

function SectionSkills() {
  const rowItemCounts = [4, 5, 4]; // Define the number of items per row
  let startIndex = 0;

  return (
    <div
      data-aos="fade-up"
      className="card"
    >
      <div className="flex flex-col w-full h-auto gap-4">
        <h3 className="text-sm font-bold text-zinc-300 uppercase">SKILLS</h3>
      </div>

      <div className="flex flex-col w-auto h-auto gap-2 items-center">
        {rowItemCounts.map((itemCount, rowIndex) => {
          // Slice the data for this row
          const rowItems = data.slice(startIndex, startIndex + itemCount);
          startIndex += itemCount;

          return (
            <div key={rowIndex} className="flex flex-row w-auto h-auto gap-2">
              {rowItems.map((item) => (
                <div
                  key={item.id}
                  className="hover:scale-110 transition-all  rounded-full bg-zinc-600/40 hover:bg-zinc-500/40 "
                >
                  {/* Use the title attribute for the tooltip */}
                  <div title={item.title} className="h-14 w-14 flex items-center justify-between">
                    <Icon
                      aria-label={item.title}
                      icon={item.icon}
                      className="w-8 h-8 mx-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SectionSkills;
