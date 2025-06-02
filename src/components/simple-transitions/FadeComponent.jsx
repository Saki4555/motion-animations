"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const FadeComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Fade Animation
      </h2>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-700 text-yellow-400 w-1/2 p-5 mb-4 text-lg font-semibold"
          >
            Simple Fade Animation
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setVisible(!visible)}
        className=" bg-blue-500 text-white block px-4 py-2 rounded-lg"
      >
        {visible ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default FadeComponent;
