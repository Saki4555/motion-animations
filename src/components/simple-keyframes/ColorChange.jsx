'use client';
import { motion } from "motion/react";

const ColorChange = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Color Change
      </h2>
      <motion.div
        animate={{ backgroundColor: ["#FF000", "#00FF00", "#0000FF", "#FF0000"] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear'}}
        className="w-28 h-28"
      />
    </div>
  );
};

export default ColorChange;
