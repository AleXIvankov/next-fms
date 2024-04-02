"use client";
import React from "react";
import { GlobeHero } from "./components/GlobeHero";

export default function page() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.8] relative flex items-center justify-center overflow-hidden">
      <div className="p-5 maw-w-7xl flex-1">
        <GlobeHero />
      </div>
      <div className="text-left">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 py-8">
          Backgrounds
        </p>
      </div>
    </div>
  );
}
