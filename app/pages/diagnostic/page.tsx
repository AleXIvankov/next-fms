"use client";

import Image from "next/image";
import { Tabs } from "@/app/components/ui/tabs";

export default function Diagnostic() {
  const tabs = [
    {
      title: "ST1",
      value: "st1",
      content: (
        <div className="w-full overflow-hidden relative h-96 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h2>ST1</h2>
          <ul>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      ),
    },
    {
      title: "ST2",
      value: "st2",
      content: (
        <div className="w-full overflow-hidden relative h-96 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h2>ST2</h2>
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
        <div className="w-full overflow-hidden relative h-96 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h2>ST3</h2>
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
        <div className="w-full overflow-hidden relative h-96 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h2>ST4</h2>
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
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
