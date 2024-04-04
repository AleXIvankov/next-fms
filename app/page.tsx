"use client";
import React from "react";
import { GlobeHero } from "./components/GlobeHero";

export default function page() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.8] relative flex items-center justify-center overflow-hidden ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
      <div className="w-full h-full">
        <div className="relative flex lg:flex-row h-auto flex-col items-center text-left">
          <div className="p-2 w-full ">
            <GlobeHero />
          </div>
          <div className="w-full h-full justify-center">
            <p className="text-xl lg:text-xs max-w-md text-center place-content-evenly w-full h-full font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-600 py-8">
              Bienvenue sur notre site dédié à la machine FMS. <br /> <br />{" "}
              Explorez notre plateforme pour trouver des informations
              précieuses, des analyses approfondies et des conseils d'experts
              pour optimiser votre travail. <br />
              Que vous soyez un professionnel chevronné ou un novice curieux,
              nous sommes là pour vous accompagner dans votre exploration de la
              machine. Rejoignez-nous, alors que nous repoussons les frontières
              de l'efficacité et de la productivité industrielle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
