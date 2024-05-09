"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  WrenchScrewdriverIcon,
  BoltIcon,
  CogIcon,
} from "@heroicons/react/20/solid";
import { Button } from "flowbite-react";

export function BentoGridWelding() {
  return (
    <BentoGrid className="max-w-5xl mx-auto min-w-80">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full min-w-48 h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-500 dark:from-neutral-600 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Poste 1",
    description: (
      <Button
        size="xs"
        gradientDuoTone="purpleToBlue"
        pill
        className="w-16"
      ></Button>
    ),
    header: <Skeleton />,
    icon: <BoltIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Poste 2",
    description: (
      <Button
        size="xs"
        gradientDuoTone="purpleToBlue"
        pill
        className="w-16"
      ></Button>
    ),
    header: <Skeleton />,
    icon: <BoltIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Poste 3",
    description: (
      <Button
        size="xs"
        gradientDuoTone="purpleToBlue"
        pill
        className="w-16"
      ></Button>
    ),
    header: <Skeleton />,
    icon: <BoltIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Réglage d'intensité",
    description: (
      <Button
        size="xs"
        gradientDuoTone="purpleToBlue"
        pill
        className="w-28"
      ></Button>
    ),
    header: <Skeleton />,
    icon: <CogIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Documents utiles",
    description: (
      <Button
        size="xs"
        gradientDuoTone="purpleToBlue"
        pill
        className="w-28"
      ></Button>
    ),
    header: <Skeleton />,
    icon: <WrenchScrewdriverIcon className="h-4 w-4 text-neutral-500" />,
  },
];
