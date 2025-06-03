"use client";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

const ModalSample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent inline-block bg-clip-text ">
        Modal Sample
      </h2>
    <AnimatePresence>  {isOpen && (
        <>
          {" "}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
          >
            <motion.div
              initial={{y: '-100vh'}}
              animate={{y: '0vh'}}
              transition={{duration: 0.5}}
              exit={{ y: '100vh'}}
              onClick={(e) => e.stopPropagation()}
              className="p-16 rounded-lg relative bg-slate-600 text-white"
            >
              <h3 className="text-xl font-bold tracking-wide">
                Dogs have zero grapple, brotha
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="rotate-45  cursor-pointer absolute text-red-500 top-0 right-2 text-4xl font-semibold"
              >
                +
              </button>
            </motion.div>
          </div>
        </>
      )}</AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 block bg-blue-500 text-white rounded-lg"
      >
        Show Modal
      </button>
    </div>
  );
};

export default ModalSample;
