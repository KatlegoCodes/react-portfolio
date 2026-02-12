import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";

import illustration_1 from "../assets/Illustrations/Illustration-1.jpg";
import illustration_2 from "../assets/Illustrations/Illustration-2.jpg";
import illustration_3 from "../assets/Illustrations/Illustration-3.jpg";
import illustration_4 from "../assets/Illustrations/Illustration-4.jpg";
import illustration_5 from "../assets/Illustrations/Illustration-5.jpg";
import illustration_6 from "../assets/Illustrations/Illustration-6.jpg";
import illustration_7 from "../assets/Illustrations/Illustration-7.jpg";
import illustration_8 from "../assets/Illustrations/Illustration-8.jpg";
import illustration_9 from "../assets/Illustrations/Illustration-9.jpg";
import illustration_10 from "../assets/Illustrations/Illustration-10.jpg";
import illustration_11 from "../assets/Illustrations/Illustration-11.jpg";
import illustration_12 from "../assets/Illustrations/Illustration-12.jpg";

const illustrations = [
  { src: illustration_1, title: "The Artist" },
  { src: illustration_2, title: "The Apprentice" },
  { src: illustration_3, title: "The Master" },
  { src: illustration_4, title: "The Dreamer" },
  { src: illustration_5, title: "The Explorer" },
  { src: illustration_6, title: "The Seeker" },
  { src: illustration_7, title: "The Flame" },
  { src: illustration_8, title: "The Chiller" },
  { src: illustration_9, title: "The Muse" },
  { src: illustration_10, title: "The Visionary" },
  { src: illustration_11, title: "The Creator" },
  { src: illustration_12, title: "The Innovator" },
];

export const IllustrationsGallery = ({ isOpen, onClose }) => {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const isLightbox = activeIndex !== null;

  // ESC + scroll lock
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (isLightbox) setActiveIndex(null);
        else onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isLightbox, onClose]);

  const next = () => setActiveIndex((i) => (i + 1) % illustrations.length);

  const prev = () =>
    setActiveIndex(
      (i) => (i - 1 + illustrations.length) % illustrations.length,
    );

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            isLightbox ? setActiveIndex(null) : onClose();
          }
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => (isLightbox ? setActiveIndex(null) : onClose())}
          className="fixed top-6 right-6 z-50 text-white bg-black/70 rounded-2xl w-14 h-14 flex items-center justify-center"
        >
          ✕
        </button>

        <div className="min-h-screen py-20 px-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isLightbox ? (
              /* ---------------- GRID ---------------- */
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl"
              >
                {illustrations.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer overflow-hidden rounded-2xl"
                    onClick={() => setActiveIndex(index)}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-[480px] object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* ---------------- LIGHTBOX ---------------- */
              <motion.div
                key="lightbox"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative flex items-center justify-center w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={illustrations[activeIndex].src}
                  alt={illustrations[activeIndex].title}
                  className="max-w-[95vw] max-h-[95vh] object-contain"
                />

                {/* Title */}
                <div className="absolute bottom-6 left-6 text-white bg-black/50 px-4 py-2 rounded-lg">
                  {illustrations[activeIndex].title}
                </div>

                {/* Arrows */}
                <button
                  onClick={prev}
                  className="absolute left-6 text-white text-4xl"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="absolute right-6 text-white text-4xl"
                >
                  ›
                </button>

                {/* Counter */}
                <div className="absolute bottom-6 right-6 text-white/70">
                  {activeIndex + 1} / {illustrations.length}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
};
