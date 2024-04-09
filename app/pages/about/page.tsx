"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { register } from "swiper/element/bundle";
import { motion } from "framer-motion";
import { LampContainer } from "@/app/components/ui/lamp";
import Image from "next/image";

register();

const About = () => {
  return (
    <Swiper
      direction="vertical"
      spaceBetween={50}
      parallax={true}
      freeMode={true}
      slidesPerView={1}
      navigation={true}
      pagination={true}
      className="md:w-full max-w-2xl h-screen ease-[cubic-bezier(0.02, 0.15, 0, 1)]"
    >
      <SwiperSlide className="w-auto h-screen bg-transparent items-center mx-auto">
        <Image
          src={"/img/about_img/layer_front1.png"}
          width={1000}
          height={1000}
          alt="layer1"
          quality={100}
          className="w-full h-full absolute z-20"
          data-swiper-parallax="27%"
        />
        <Image
          src={"/img/about_img/layer_middle1.png"}
          width={1000}
          height={1000}
          alt="layer2"
          quality={100}
          className="w-full h-full absolute z-10"
          data-swiper-parallax="23%"
        />
        <Image
          src={"/img/about_img/layer_base1.png"}
          width={1000}
          height={1000}
          alt="layer3"
          quality={100}
          className="w-full h-full absolute z-0"
          data-swiper-parallax="15%"
        />
      </SwiperSlide>
      <SwiperSlide className="w-auto h-screen bg-transparent items-center mx-auto">
        <Image
          src={"/img/about_img/layer_front1.png"}
          width={1000}
          height={1000}
          alt="layer1"
          quality={100}
          className="w-full h-full absolute z-20"
          data-swiper-parallax="27%"
        />
        <Image
          src={"/img/about_img/layer_middle1.png"}
          width={1000}
          height={1000}
          alt="layer2"
          quality={100}
          className="w-full h-full absolute z-10"
          data-swiper-parallax="23%"
        />
        <Image
          src={"/img/about_img/layer_base1.png"}
          width={1000}
          height={1000}
          alt="layer3"
          quality={100}
          className="w-full h-full absolute z-0 object-contain"
          data-swiper-parallax="15%"
        />
      </SwiperSlide>
      <SwiperSlide className="w-auto h-screen bg-transparent items-center mx-auto">
        <Image
          src={"/img/about_img/layer_front1.png"}
          width={1000}
          height={1000}
          alt="layer1"
          quality={100}
          className="w-full h-full absolute z-20"
          data-swiper-parallax="27%"
        />
        <Image
          src={"/img/about_img/layer_middle1.png"}
          width={1000}
          height={1000}
          alt="layer2"
          quality={100}
          className="w-full h-full absolute z-10"
          data-swiper-parallax="23%"
        />
        <Image
          src={"/img/about_img/layer_base1.png"}
          width={1000}
          height={1000}
          alt="layer3"
          quality={100}
          className="w-full h-full absolute z-0"
          data-swiper-parallax="15%"
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full  absolute">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-5xl"
          >
            Build lamps <br /> <i> the right way</i>
          </motion.h1>
        </LampContainer>
      </SwiperSlide>
    </Swiper>
  );
};

export default About;
