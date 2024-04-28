"use client";
import React from "react";
import { Tabs } from "@/app/components/ui/tabs";
import {
  MyContent,
  MyContent1,
  MyContent2,
} from "@/app/components/diagnosticModals";
import { SparklesCore } from "@/app/components/ui/sparkles";

export default function Diagnostic() {
  const tabs = [
    {
      title: "ST1",
      value: "st1",
      content: (
        <div className="w-full overflow-hidden relative h-96 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-slate-900 via-teal-600 to-slate-900">
          <h2>ST 1</h2>
          <ul className="m-5">
            <li className="my-2 flex flex-row self-center items-end gap-5 text-lg">
              1 :
              <MyContent />
            </li>
            <li className="my-2 flex flex-row self-center items-end gap-5 text-lg">
              2 :<MyContent1 />
            </li>
            <li className="my-2 flex flex-row self-center items-end gap-5 text-lg">
              3 : <MyContent2 />
            </li>
            <li className="my-2 flex flex-row self-center items-end gap-5 text-lg">
              4 :
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "ST2",
      value: "st2",
      content: (
        <div className="w-full overflow-hidden relative h-96 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-slate-800 via-sky-800 to-slate-900">
          <h2>ST 2</h2>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      ),
    },
    {
      title: "ST3",
      value: "st3",
      content: (
        <div className="w-full overflow-hidden relative h-96 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
          <h2>ST 3</h2>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      ),
    },
    {
      title: "ST4",
      value: "st4",
      content: (
        <div className="w-full overflow-hidden relative h-96 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-slate-900 via-pink-900 to-slate-900">
          <h2>ST 4</h2>
          <ul>
            <li>1</li>

            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full inset-0 h-screen">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1}
        particleDensity={100}
        className="w-full h-full absolute inset-0"
        particleColor="#FFFFFF"
      />
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20 px-5">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
