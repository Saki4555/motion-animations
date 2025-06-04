import * as motion from "motion/react-client";

const PulsatingEffect = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Stagger Animation
      </h2>
      <motion.button
        animate={{ scale: [1, 1.3, 1] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="px-4 py-2 block bg-slate-600 text-white"
      >
        Pulse
      </motion.button>
    </div>
  );
};

export default PulsatingEffect;
