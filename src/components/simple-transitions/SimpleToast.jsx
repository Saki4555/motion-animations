"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const SimpleToast = () => {
  const [showToast, setShowToast] = useState(false);
  const ToastHandler = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  return (
    <div>
        <h2 className="text-4xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Toast Animation
      </h2>
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-600 rounded-sm shadow-xs shadow-yellow-400 p-5  fixed top-4 left-1/2 -translate-x-1/2 text-white text-lg font-bold"
          >Ai will take your JOB !</motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={ToastHandler}
        className="px-4 py-2 rounded-lg block bg-blue-500 text-white"
      >
        Show Toast
      </button>
    </div>
  );
};

export default SimpleToast;
