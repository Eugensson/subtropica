"use client";

import { motion } from "motion/react";

import { rectangleVariants } from "@/lib/variants";

export const Rectangle = () => {
  return (
    <>
      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#4c4c4c]"
      />
      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#5c5c5c]"
      />
      <motion.div
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#6c6c6c]"
      />
    </>
  );
};
