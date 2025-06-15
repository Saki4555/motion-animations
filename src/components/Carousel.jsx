"use client";
import { motion } from "motion/react";
import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);

  const images = [
    "https://img.freepik.com/free-vector/gradient-speed-motion-background_52683-63725.jpg?ga=GA1.1.1914213462.1738954716&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/beautiful-strawberry-garden-sunrise-doi-ang-khang-chiang-mai-thailand_335224-761.jpg?ga=GA1.1.1914213462.1738954716&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/digital-screen-with-environment-day_23-2148884835.jpg?ga=GA1.1.1914213462.1738954716&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg?ga=GA1.1.1914213462.1738954716&semt=ais_hybrid&w=740",
  ];

  const selectSlide = (index) => {
    setCurrentIndex(index);
    setShowThumbnails(true);
    window.setTimeout(() => {
      setShowThumbnails(false);
    }, 5000);
  };

  const changeImage = (prevSlide, nextSlide) => {
    if (prevSlide) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      return;
    }
    if (nextSlide) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      return;
    }
  };

  return (
    <div className="relative w-1/2 overflow-hidden h-[420px] bg-r">
      <h2 className="text-4xl font-bold leading-snug  bg-gradient-to-r from-cyan-500 via-gray-200 to-yellow-400 mb-4 text-transparent bg-clip-text inline-block">
        Simple Carousel
      </h2>
      <motion.div
        className={`mb-2 ${
          showThumbnails || isHovered ? "opacity-100" : "opacity-0"
        } flex transition-opacity duration-300`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => selectSlide(index)}
            className={`w-20 h-10 overflow-hidden cursor-pointer border-2 ${
              currentIndex === index ? "border-blue-500" : "border-transparent"
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>

      <div
        className="relative w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex"
          initial={{ x: "-100%" }}
          animate={{ x: `${-currentIndex * 100}%` }}
          transition={{ duration: 0.4 }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

      
        <button
          onClick={() => changeImage(true, false)}
          className={`absolute left-2  bottom-1/2 -translate-y-1/2 shadow shadow-yellow-400/20 transition-opacity duration-300 text-lg font-bold size-9 rounded-full bg-slate-700 text-white ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          &lt;
        </button>
        <button
          onClick={() => changeImage(false, true)}
          className={`absolute right-2 -translate-y-1/2 bottom-1/2 shadow shadow-yellow-400/20 transition-opacity duration-300 text-lg font-bold size-9 rounded-full bg-slate-700 text-white ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
