import * as motion from "motion/react-client";

const BouncingCircle = () => {
  return (
    <div>
     <h2 className="text-4xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
       Bouncing Circle
      </h2>
    <div className="h-44 w-44 border border-yellow-400 flex justify-center items-center">
        
      <motion.div
        animate={{ y: [0, -30, 0, 30, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease:"linear"}}
        className="w-20 h-20 rounded-full bg-slate-400"
      />
    </div>
    </div>
  );
};

export default BouncingCircle;
