import * as motion from "motion/react-client";

const SpinningIcon = () => {
  return (
    <div>
      <h2 className="text-5xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
       Spinning Icon
      </h2>
    <div className="w-4 h-4 ">
      <motion.div animate={{rotate: 360}} transition={{duration: 1, repeat: Infinity, ease: "linear"}}  className="text-white text-5xl"> |</motion.div>
    </div>
    </div>
  );
};

export default SpinningIcon;
