"use client";
import { motion } from "motion/react";
import { useState } from "react";

const SidebarSample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center gap-4 ">
      <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text ">
        Sidebar Sample
      </h2>
      <motion.div
        initial={{ x: "-100%"}}
        animate={{ x: isOpen ? "0%" : "-100%"}}
        transition={{duration: 0.5}}
        className={`fixed p-5   bg-yellow-400 top-0 left-0 w-36 h-full ${
          isOpen && ""
        }`}
      >
        Sidebar
      </motion.div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 block  text-white  bg-blue-500 rounded-lg"
      >
        {isOpen ? "Show Sidebar" : "Hide Sidebar"}
      </button>
    </div>
  );
};

export default SidebarSample;
