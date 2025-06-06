"use client";
import { motion } from "motion/react";
import { useState } from "react";

const LongPressToChangeColor = () => {
  const [isLarge, setIsLarge] = useState(false);
  const handleLongPressStart = () => setIsLarge(true);
  const handleLongPressEnd = () => setIsLarge(false);
  return (
    <div>
      <h2 className="text-4xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Long Press to Change Size
      </h2>
      <motion.div
        onTap={handleLongPressEnd}
        onTapStart={handleLongPressStart}
        onTapCancel={handleLongPressEnd}
        className={`cursor-pointer transition-all transform duration-200 bg-slate-400 ${isLarge ? "size-40" : "size-20"}`}
      />
    </div>
  );
};

export default LongPressToChangeColor;
