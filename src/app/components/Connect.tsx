import React from "react";

function Connect() {
  return (
    <div className="flex flex-row max-w-[720px] w-full h-auto p-8 rounded-2xl bg-zinc-900">
      <div className="flex flex-col w-full h-auto gap-4">
        <div className="flex flex-col w-auto h-auto gap-2">
          <p className="text-xs font-normal text-zinc-400">CONNECT</p>
          <p className="text-2xl font-bold text-zinc-50">Chat with me</p>
        </div>
        <p className="text-xs font-normal text-zinc-500 ">
          I am more than happy to connect!
        </p>
      </div>
      <div className="flex flex-col w-full h-auto gap-4">
        <div></div>
      </div>
    </div>
  );
}

export default Connect;
