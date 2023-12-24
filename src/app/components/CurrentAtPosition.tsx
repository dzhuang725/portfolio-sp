import {
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";

function CurrentAtPosition() {
  return (
    <div className="max-w-[720px] w-full h-64 p-8 rounded-2xl bg-zinc-900">
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2">
            <div className="w-fit h-6 rounded-lg px-2 py-1 bg-teal-400">
              <p className="w-fit h-4 text-xs">Currently At</p>
            </div>
            <div className="w-fit h-6 rounded-lg px-2 py-1 border border-teal-400 ">
              <p className="w-fit h-4 text-xs text-teal-400">Full Time</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="w-fit h-fit text-xs text-zinc-600">
              July 2023 - Current
            </p>
            <p className="w-fit h-fit text-xl font-bold text-zinc-50">
              Software Developer
            </p>
            <p className="w-fit h-fit text-base text-zinc-50">BeaconFire</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-normal text-zinc-500 ">
            Design and devlop applications based on clients' need. Focused on
            frontend implementation with React or Angular. Also work on iOS
            applications with React Native and Swift.
          </p>
          <p className="text-xs font-normal text-zinc-500 ">
            Language used: JavaScript, TypeScript, Swift
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentAtPosition;
