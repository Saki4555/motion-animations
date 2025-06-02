"use client";
import { motion } from "motion/react";
import { useState } from "react";


const SkewedRectangle = () => {
  const [isSkewed, setIsSkewed] = useState(false);
  return (
    <div>
        <h2 className="text-4xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Skewed Rectangle
      </h2>
      <motion.div
      onClick={() => setIsSkewed(!isSkewed)}
        animate={{ skew: isSkewed ? 40 : 0 }}
        transition={{ duration: 0.5}}
        className="w-40 h-20 bg-slate-400"
      />
    </div>
  );
};

export default SkewedRectangle;
