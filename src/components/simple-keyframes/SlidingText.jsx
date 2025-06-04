import * as motion from "motion/react-client";
const SlidingText = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Sliding Text
      </h2>
      <motion.h1
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1.2 , type: 'spring', stiffness: 50}}
        className="text-4xl text-white font-semibold"
      >
        Coming From Left
      </motion.h1>
    </div>
  );
};

export default SlidingText;
