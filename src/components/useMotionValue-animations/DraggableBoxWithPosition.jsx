"use client";
import { motion, useMotionValue, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const DraggableBoxWithPosition = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  console.log({x, y});

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useMotionValueEvent(x, "change", (latestX) => {
    setPosition((prev) => ({ ...prev, x: latestX }));
  });

  useMotionValueEvent(y, "change", (latestY) => {
    setPosition((prev) => ({ ...prev, y: latestY }));
  });

  return (
    <div>
      <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Draggable Box With Position
      </h2>

      <motion.div
        style={{ x, y }}
        drag
        className="bg-slate-400 h-20 w-20 rounded-lg"
      />

      <p className="mt-3 text-white tracking-wider font-semibold">
        Position: ({position.x.toFixed(2)}, {position.y.toFixed(2)})
      </p>
    </div>
  );
};

export default DraggableBoxWithPosition;
