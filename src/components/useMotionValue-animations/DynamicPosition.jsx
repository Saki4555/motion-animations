"use client";
import { motion, useMotionValue, useSpring } from "motion/react";

const DynamicPosition = () => {
  const position = useSpring(0);

  const handleRotation = () => {
    position.set(position.get() + 40);
  };
  return (
    <div className="relative ">
      {" "}
      <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Dynamic Position
      </h2>
      <motion.div
        style={{ left: position }}
        onClick={handleRotation}
        className="bg-slate-400 h-20 w-20 absolute"
      >
        Click It
      </motion.div>
    </div>
  );
};

export default DynamicPosition;
