"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
const TooltipVariant = () => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };
  return (
    <div>
      <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text ">
        Tooltip
      </h2>
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="px-4 py-2 bg-blue-500 text-white"
      >
        Hover Me
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={tooltipVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={ { duration: 0.4}}
            className="bg-slate-600 p-4 max-w-xs mt-2 text-sm font-mono font-bold tracking-wider text-white shadow shadow-yellow-400/40"
          >
            Ai will replace You !
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TooltipVariant;
