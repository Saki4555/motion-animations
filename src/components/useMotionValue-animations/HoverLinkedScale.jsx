"use client";
import { motion, useMotionValue } from "motion/react";

const HoverLinkedScale = () => {
  const scale = useMotionValue(1);
  return (
    <div>
      <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Hover Scale Using useMotionValue Hook
      </h2>

      <motion.button
      onHoverStart={() => scale.set(1.5)}
      onHoverEnd={() => scale.set(1)}
        style={{ scale }}
        className="px-4 block py-2 text-white bg-blue-500"
      >
        Hover It
      </motion.button>
    </div>
  );
};

export default HoverLinkedScale;
