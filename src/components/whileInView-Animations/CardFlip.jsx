

"use client";
import { motion } from "motion/react";

import { useState } from "react";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="mt-28">
      <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent inline-block bg-clip-text ">
        Card Flip
      </h2>
      <div
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        className="w-48 h-48 perspective-[1000px]"
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full relative transform-3d"
        >
          <div className="absolute w-full h-full bg-slate-700 text-lg font-bold tracking-wide text-white flex items-center justify-center backface-hidden">
            Front
          </div>
          <div className="absolute w-full h-full bg-indigo-700 text-lg font-bold tracking-wide text-white flex items-center rotate-y-180 justify-center backface-hidden">
            Back
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardFlip;
