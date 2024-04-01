"use client";
import React from "react";
import { GlobeHero } from "./components/GlobeHero";
import { SideBar } from "./components/SideBar";

export default function page() {
  return (
    <div className="h-[50rem] w-full bg-black  bg-dot-white/[0.8] relative flex flex-col-2 items-center justify-center float-left gap-0 overflow-hidden">
      <div className="p-5 maw-w-7xl flex-1">
        <GlobeHero />
      </div>
      <div className="">
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-3">
          Backgrounds
        </p>
      </div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
