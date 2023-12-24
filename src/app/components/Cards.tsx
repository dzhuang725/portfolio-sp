import React from "react";
import CurrentAtPosition from "./CurrentAtPosition";
import PastExperience1 from "./PastExperience1";
import PastExperience2 from "./PastExperience2";
import Skills from "./Skills";
import Connect from "./Connect";

function Cards() {
  return (
    <div className="flex flex-col w-[720px] h-auto gap-6 items-center">
      {/* CurrentAtPosition */}
      <CurrentAtPosition />

      {/* PastExperience */}
      <div className="flex flex-row w-full h-auto gap-6">
        <PastExperience1 />
        <PastExperience2 />
      </div>

      {/* Skills */}
      <Skills />

      {/* Connect */}
      <Connect />
    </div>
  );
}

export default Cards;
