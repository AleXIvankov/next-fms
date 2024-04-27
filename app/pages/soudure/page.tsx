"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/app/components/ui/canvas-reveal-effect";

export default function Soudure() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-screen flex flex-col lg:flex-row overflow-hidden items-center justify-center w-full gap-4 mx-auto px-8 relative"
    >
      <p className="md:text-2xl text-2xl font-medium text-center text-white dark:text-slate-950 relative z-20 max-w-2xl mx-auto">
        With insomnia, nothing&apos;s real. Everything is far away. Everything
        is a copy, of a copy, of a copy
      </p>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={3}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
