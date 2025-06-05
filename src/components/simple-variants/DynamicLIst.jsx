"use client";
import { motion, AnimatePresence, scale } from "motion/react";
import { useState } from "react";

const DynamicLIst = () => {
  const [items, setItems] = useState([]);
  console.log(items);

  const addItem = () => {
    setItems((prev) => [...prev, `Item ${items.length + 1}`]);
  };

  const removeItem = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const itemVariants = {
    enter : { opacity: 0, y: -20, scale: 0.9},
    animate: {opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.9}
  }
  return (
    <div>
      <h2 className="text-3xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text ">
        Dynamic List
      </h2>
      <button
        onClick={addItem}
        className="px-4 py-2 block  mb-4 text-white  bg-blue-500 rounded-lg"
      >
        Add Item
      </button>
     <ul className="space-y-4">
         <AnimatePresence>
        {items.map((item, index) => (
          <motion.li variants={itemVariants} initial='enter' animate="animate" exit="exit" className="text-white relative p-4 max-w-52 bg-slate-700" key={index}>{item}
          <button onClick={() => removeItem(index)} className="rotate-45 absolute cursor-pointer top-0 right-0 text-3xl text-red-500">+</button>
          </motion.li>
        ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default DynamicLIst;
