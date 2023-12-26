import React from "react";

function PastExperience2() {
  return (
    <div className="max-w-screen-md w-full h-auto md:h-64 p-4 md:p-8 rounded-2xl bg-zinc-900">
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="flex flex-row gap-2">
            <div className="w-fit h-6 rounded-lg px-2 py-1 border border-teal-400 ">
              <p className="w-fit h-4 text-xs text-teal-400">Previous</p>
            </div>
            <div className="w-fit h-6 rounded-lg px-2 py-1 border border-teal-400 ">
              <p className="w-fit h-4 text-xs text-teal-400">Intern</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="w-fit h-fit text-xs text-zinc-600">
              JUNE 2020 - AUG 2020
            </p>
            <p className="w-fit h-fit text-xl font-bold text-zinc-50">
              Software Engineer
            </p>
            <p className="w-fit h-fit text-base text-zinc-50">DTEN</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <p className="text-xs font-normal text-zinc-500 ">
            Conduct user research and case study to enhance performance of
            autoframing algorithm.
          </p>
          <p className="text-xs font-normal text-zinc-500 ">
            Language used: C++ ; Framework: OpenCV, YoloV3
          </p>
        </div>
      </div>
    </div>
  );
}

export default PastExperience2;
