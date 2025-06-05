"use client";
import { easeIn, motion } from "motion/react";
import { type } from "os";
import { useState } from "react";
const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const switchVariants = {
    off: { x: 0 },
    on: { x: 78 },
  };
  return (
    <div>
      <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text ">
        Sidebar Sample
      </h2>

      <div
        onClick={() => setIsOn(!isOn)}
        className={`relative inline-block rounded-full w-36 h-16 ${
          isOn ? "bg-green-400" : "bg-slate-400"
        }`}
      >
        <motion.div
          variants={switchVariants}
          animate={isOn ? "on" : "off"}
          transition={{  type: 'spring', stiffness: 80}}
          className="w-14 h-14 absolute rounded-full top-1 left-1 bg-white"
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
