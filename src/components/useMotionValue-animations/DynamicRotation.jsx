"use client";
import { motion,  useMotionValue } from "motion/react";

const DynamicRotation = () => {
  const rotation = useMotionValue(0);
  const handleRotation = () => {
    rotation.set(rotation.get() + 45)
  }
  return (
    <div>
      {" "}
      <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Dynamic Rotation
      </h2>
      <motion.div
        style={{ rotate: rotation }}
        onClick={handleRotation}
        className="bg-slate-400 h-20 w-20"
      >
        Click It
      </motion.div>
    </div>
  );
};

export default DynamicRotation;
