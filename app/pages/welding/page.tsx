"use client";

import React from "react";

import { BentoGridWelding } from "@/app/components/bentoGridWelding";
export default function Welding() {
  return (
    <div className="h-auto w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="p-5 sm:p-10">
        {" "}
        <BentoGridWelding />
      </div>
    </div>
  );
}
