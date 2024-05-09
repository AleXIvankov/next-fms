"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/app/components/ui/lamp";

export default function About() {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Hager Electro SAS <br />
          <br />
          <i className="text-3xl md:text-5xl">U1 - Decoupe BIHLER</i>
        </motion.h1>
      </LampContainer>
    </div>
  );
}
