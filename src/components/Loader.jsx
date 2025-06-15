import * as motion from "motion/react-client";

const Loader = () => {
  return (
    <div>
        <h2 className="text-4xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Simple Loader
      </h2>
      <motion.div
        animate={{
          rotate: 360,
          transition: { duration: 1, repeat: Infinity, ease: "linear" },
        }}
        className="relative border-slate-400 border-t-4 border-4  w-16 h-16 rounded-full"
      >
        <motion.div animate={{ opacity: [1, 0.5, 1]}} transition={{duration: 1, repeat: Infinity, ease: 'easeInOut'}} className="absolute inset-0 border-4 border-slate-500 border-t-transparent rounded-full" />
      </motion.div>
    </div>
  );
};

export default Loader;
