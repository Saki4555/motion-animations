"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const DynamicList = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = {
      id: crypto.randomUUID(), // use a unique key
      label: `Item ${items.length + 1}`
    };
    setItems((prev) => [...prev, newItem]);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const itemVariants = {
    enter: { opacity: 0, y: -20, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.9 }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold leading-snug bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent inline-block bg-clip-text">
        Dynamic List
      </h2>
      <button
        onClick={addItem}
        className="px-4 py-2 block mb-4 text-white bg-blue-500 rounded-lg"
      >
        Add Item
      </button>
      <ul className="space-y-4">
        <AnimatePresence>
          {items.map((item) => (
            <motion.li
              key={item.id}
              variants={itemVariants}
              initial="enter"
              animate="animate"
              exit="exit"
              className="text-white relative p-4 max-w-52 bg-slate-700"
            >
              {item.label}
              <button
                onClick={() => removeItem(item.id)}
                className="rotate-45 absolute cursor-pointer top-0 right-0 text-3xl text-red-500"
              >
                +
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default DynamicList;
