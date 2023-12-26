"use client";
import { Icon } from "@iconify/react";
import React from "react";

function Connect() {
  return (
    <div className="flex flex-col max-w-screen-md w-full h-auto p-4 md:p-8 gap-1 md:gap-2 rounded-2xl bg-zinc-900">
      <div className="flex flex-col w-full h-auto gap-2 md:gap-4">
        <div className="flex flex-col w-auto h-auto gap-2">
          <p className="text-xs font-normal text-zinc-400">CONNECT</p>
          {/* <p className="text-lg md:text-2xl font-bold text-zinc-50">
            Chat with me
          </p> */}
        </div>
        <p className="text-xs font-normal text-zinc-500 ">
          I am more than happy to connect!
        </p>
      </div>
      <div className="flex flex-col w-full h-auto gap-2 md:gap-4">
        <div className="grid grid-cols-1 w-full h-auto sm:grid-cols-2 md:grid-cols-3 justify-center">
          <div className="flex flex-row w-full h-fit p-1 md:p-3 rounded-xl gap-2">
            <Icon icon="icon-park-outline:phone-call" className="w-4 h-4 m-1" />
            <div className="flex flex-col gap-1 w-fit h-fit">
              <p className="text-base font-bold text-zinc-300">Phone</p>
              <p className="text-xs font-nromal text-zinc-500">
                +1(408)854-3431
              </p>
            </div>
          </div>
          <div className="flex flex-row w-full h-fit p-1 md:p-3 rounded-xl gap-2">
            <Icon icon="icon-park-outline:mail" className="w-4 h-4 m-1" />
            <div className="flex flex-col gap-1 w-fit h-fit">
              <p className="text-base font-bold text-zinc-300">Email</p>
              <p className="text-xs font-nromal text-zinc-500">
                wzhuang.work@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-row w-full h-fit p-1 md:p-3 rounded-xl gap-2">
            <Icon icon="icon-park-outline:local" className="w-4 h-4 m-1" />
            <div className="flex flex-col gap-1 w-fit h-fit">
              <p className="text-base font-bold text-zinc-300">Location</p>
              <p className="text-xs font-nromal text-zinc-500">
                Philadelphia, PA
              </p>
            </div>
          </div>
          <div className="flex flex-row w-full h-fit p-1 md:p-3 rounded-xl gap-2">
            <Icon icon="basil:linkedin-outline" className="w-4 h-4 m-1" />
            <div className="flex flex-col gap-1 w-fit h-fit">
              <p className="text-base font-bold text-zinc-300">Linkedin</p>
              <p className="text-xs font-nromal text-zinc-500">
                linkedin.com/in/weiqi-zhuang
              </p>
            </div>
          </div>
          <div className="flex flex-row w-full h-fit p-1 md:p-3 rounded-xl gap-2">
            <Icon icon="icon-park-outline:github" className="w-4 h-4 m-1" />
            <div className="flex flex-col gap-1 w-fit h-fit">
              <p className="text-base font-bold text-zinc-300">GitHub</p>
              <p className="text-xs font-nromal text-zinc-500">
                github.com/dzhuang725
              </p>
            </div>
          </div>
          <div className="flex flex-row w-full h-fit p-1 md:p-3 rounded-xl gap-2">
            <Icon icon="icon-park-outline:twitter" className="w-4 h-4 m-1" />
            <div className="flex flex-col gap-1 w-fit h-fit">
              <p className="text-base font-bold text-zinc-300">twitter</p>
              <p className="text-xs font-nromal text-zinc-500">
                twitter.com/dennis_zhuang
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
