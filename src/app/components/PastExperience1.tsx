import React from "react";

function PastExperience1() {
  return (
    <div className="max-w-screen-md w-full h-auto md:h-64 p-4 md:p-8 rounded-2xl bg-zinc-900">
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="flex flex-row gap-2">
            <div className="w-fit h-6 rounded-lg px-2 py-1 border border-teal-400 ">
              <p className="w-fit h-4 text-xs  text-teal-400">Previous</p>
            </div>
            <div className="w-fit h-6 rounded-lg px-2 py-1 border border-teal-400 ">
              <p className="w-fit h-4 text-xs text-teal-400">Full Time</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="w-fit h-fit text-xs text-zinc-600">
              July 2022 - July 2023
            </p>
            <p className="w-fit h-fit text-xl font-bold text-zinc-50">
              UX Developer
            </p>
            <p className="w-fit h-fit text-base text-zinc-50">BoardX</p>
          </div>
        </div>
        <div className="flex flex-col gap-2  mt-4">
          <p className="text-xs font-normal text-zinc-500 ">
            Work with dev team and design team. Fast prototye design ideas and
            deliver to user testings. Implement FrontEnd new features.
          </p>
          <p className="text-xs font-normal text-zinc-500 ">
            Language used: JavaScript, TypeScript ; Library: React, Redux
          </p>
        </div>
      </div>
    </div>
  );
}

export default PastExperience1;
