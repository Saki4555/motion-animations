"use client";
import { motion } from "motion/react";
import { useState } from "react";

const ColorChangeOnTap = () => {
  const colors = [
    "bg-slate-400",
    "bg-red-400",
    "bg-green-400",
    "bg-purple-400",
  ];
  const [colorIndex, setColorIndex] = useState(0);
  console.log(colorIndex);

  const handleColorChange = () => {
    setColorIndex(prev => (prev + 1) % colors.length);
  }
  return (
    <div>
         <h2 className="text-4xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Tap to change Color
      </h2>
      <motion.div
        onTap={handleColorChange}
        className={`w-20 h-20 cursor-pointer  ${colors[colorIndex]}`}
      />
    </div>
  );
};

export default ColorChangeOnTap;
