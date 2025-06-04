'use client';
import { motion } from 'motion/react';

const ZigZag = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold leading-snug bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Zig Zag Animation
      </h2>

      <motion.div
        animate={{
          x: [0, 40, 0, -40, 0],
          y: [0, 20, 40, 20, 0],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        className="w-20 h-20 bg-slate-400 rounded-md"
      />
    </div>
  );
};

export default ZigZag;
