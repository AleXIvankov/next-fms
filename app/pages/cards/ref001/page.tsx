"use client";

import { Img1, Img2, Img3 } from "@/app/components/featureCard";
import { FeatureText } from "@/app/components/featureText";
import { OtherShowImages, ShowImages } from "@/app/components/visual";
import { useFeatureStore } from "@/app/zustand/store";
import { Checkbox } from "flowbite-react";
import { stagger, useAnimate } from "framer-motion";
import React, { useEffect } from "react";
import { Button } from "flowbite-react";
import { useHidePageOverflow } from "@/app/utils/toggle-page-overflow";
import { useEscapePress } from "@/app/utils/use-escape-press";

export default function Refer001() {
  const features = [
    {
      text: `Some text`,
      id: "Step1",
      card: Img3,
      visual: ShowImages,
    },
    {
      text: "Some text..",
      id: "Step2",
      card: Img2,
      visual: ShowImages,
    },
    {
      text: "Some text..",
      id: "Step3",
      card: Img3,
      visual: OtherShowImages,
    },
    {
      text: "Some text..",
      id: "Step4",
      card: Img1,
      visual: OtherShowImages,
    },
    {
      text: "Some text..",
      id: "Step5",
      card: Img2,
      visual: OtherShowImages,
    },
    {
      text: "Some text..",
      id: "Step6",
      card: Img3,
      visual: ShowImages,
    },
  ];

  const [scope, animate] = useAnimate();
  const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);
  const lastFullScreenFeature = useFeatureStore(
    (state) => state.lastFullScreenFeature
  );

  const setFullScreenFeature = useFeatureStore(
    (state) => state.setFullScreenFeature
  );

  useHidePageOverflow(!!fullScreenFeature);

  const onEscapePress = () => {
    if (fullScreenFeature) setFullScreenFeature(null);
  };

  useEscapePress(onEscapePress);

  useEffect(() => {
    if (fullScreenFeature) {
      animate([
        [
          ".feature-text",
          { opacity: 0, x: "-200px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullScreenFeature}`,
          { opacity: 1, scale: 1, pointerEvents: "auto", zIndex: 10 },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 0, scale: 0 }, { at: "<" }],
        [".active-card .show-me-btn", { opacity: 0 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 1, y: "0px" },
          { at: "<", duration: 0.3 },
        ],
      ]);
    } else {
      animate([
        [
          ".feature-text",
          { opacity: 1, x: "0px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullScreenFeature}`,
          { opacity: 0, scale: 0.75, pointerEvents: "none", zIndex: 0 },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 1, scale: 1 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 0, y: "300px" },
          { at: "<", duration: 0.3 },
        ],
        [".active-card .show-me-btn", { opacity: 1 }],
      ]);
    }
  }, [animate, fullScreenFeature]);

  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.4] bg-grid-small-black/[0.3]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="">caractéristiques</div>
        <div ref={scope} className="">
          {features.map((feature) => (
            <feature.visual id={feature.id} key={feature.id} />
          ))}
          <Button
            pill
            size="xs"
            gradientDuoTone="purpleToBlue"
            className="back-to-site-btn fixed bottom-5 left-1/2 -translate-x-1/2 z-10 opacity-0 translate-y-[300%]"
            onClick={() => setFullScreenFeature(null)}
          >
            Retour au réglage
          </Button>
          <div className="flex w-full gap-10  items-start">
            <div className="w-full py-[50vh]">
              <ul>
                {features.map((feature) => (
                  <li key={feature.id} className="h-screen">
                    <FeatureText id={feature.id}>
                      {feature.id} <br /> {feature.text}
                    </FeatureText>

                    <Checkbox className="w-5 h-5 feature-text text-lime-500 bg-lime-50 border-lime-300 rounded focus:ring-lime-200  dark:focus:ring-gray-400 dark:ring-offset-gray-200 dark:bg-gray-700 dark:border-gray-600" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full sticky top-0 flex h-screen items-center">
              <div className="relative w-full aspect-square bg-gray-100 dark:bg-black [&:has(>_.active-card)]:bg-transparent rounded-2xl">
                {features.map((feature) => (
                  <feature.card id={feature.id} key={feature.id} />
                ))}
              </div>
            </div>
          </div>
          <div className="h-[50vh]"></div>
        </div>
      </div>
    </div>
  );
}
