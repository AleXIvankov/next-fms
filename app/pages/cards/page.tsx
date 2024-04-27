"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/app/components/ui/aurora-background";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Link from "next/link";

export default function Cards() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="object-contain flex flex-col sm:flex-row max-h-screen w-full"
      >
        <div className="h-full w-full p-10 overflow-y-auto hide-scroll items-center justify-center">
          <div className="w-full flex flex-wrap md:grid-row items-center justify-center gap-10 h-auto object-contain">
            <div className="">
              <CardContainer className="inter-var">
                <CardBody className="bg-gradient-to-br from-red-500 via-violet-600 to-cyan-500 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    #REF 001
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/img/gears.svg"
                      height="300"
                      width="400"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="/pages/cards/ref001"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Essayez maintenant →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="/pages/cards/ref001"
                      target="__blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Start
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
            <div>
              <CardContainer className="inter-var">
                <CardBody className="bg-gradient-to-br from-red-500 via-violet-600 to-cyan-500 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    #REF-XX
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/img/gears.svg"
                      height="300"
                      width="400"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="/pages/cards/ref001"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Essayez maintenant →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="/pages/cards/ref001"
                      target="__blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Start
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
            <div>
              <CardContainer className="inter-var">
                <CardBody className="bg-gradient-to-br from-red-500 via-violet-600 to-cyan-500 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    #REF-XX
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="/img/gears.svg"
                      height="300"
                      width="400"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-solid border-black"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="/pages/cards/ref001"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Essayez maintenant →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="/pages/cards/ref001"
                      target="__blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Start
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
