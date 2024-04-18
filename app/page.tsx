"use client";
import React from "react";
import { GlobeHero } from "./components/GlobeHero";

export default function page() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.4] bg-dot-black/[0.8] relative flex items-center justify-center overflow-auto lg:overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
      <div className="w-full h-100% flex flex-col md:flex-row items-center justify-center">
        <div className="p-1 md:w-2/3 w-full">
          <GlobeHero />
        </div>
        <div className="md:w-1/3 w-full overflow-y-auto lg:ml-[-10%]">
          <h2 className="text-2xl text-center p-3 font-bold">
            Bienvenue sur notre site dédié à la machine #BZ-XX.
          </h2>
          <p className="text-xl md:text-lg p-5 text-center md:text-left place-content-evenly w-full font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-600 py-4 px-4">
            Explorez notre plateforme pour trouver des informations précieuses,
            des analyses approfondies et des conseils d'experts pour optimiser
            votre travail. <br />
            Que vous soyez un professionnel chevronné ou un novice curieux, nous
            sommes là pour vous accompagner dans votre exploration de la
            machine. Rejoignez-nous, alors que nous repoussons les frontières de
            l'efficacité et de la productivité industrielle.
          </p>
        </div>
      </div>
    </div>
  );
}
