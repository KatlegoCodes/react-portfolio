import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";

// Import all posters (keep your existing imports)
import poster_1 from "../assets/Sport Posters/poster-1.jpg";
import poster_2 from "../assets/Sport Posters/poster-2.jpg";
import poster_3 from "../assets/Sport Posters/poster-3.jpg";
import poster_4 from "../assets/Sport Posters/poster-4.jpg";
import poster_5 from "../assets/Sport Posters/poster-5.jpg";
import poster_6 from "../assets/Sport Posters/poster-6.jpg";
import poster_7 from "../assets/Sport Posters/poster-7.jpg";
import poster_8 from "../assets/Sport Posters/poster-8.jpg";
import poster_9 from "../assets/Sport Posters/poster-9.jpg";
import poster_10 from "../assets/Sport Posters/poster-10.jpg";
import poster_11 from "../assets/Sport Posters/poster-11.jpg";
import poster_12 from "../assets/Sport Posters/poster-12.jpg";

// Enhanced close icon
const X = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Navigation arrow component
const Arrow = ({ direction }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    {direction === "left" ? (
      <polyline points="15 18 9 12 15 6"></polyline>
    ) : (
      <polyline points="9 18 15 12 9 6"></polyline>
    )}
  </svg>
);

const posters = [
  { src: poster_1, title: "Aphelele Fassi" },
  { src: poster_2, title: "Dricus Du Plessis" },
  { src: poster_3, title: "Jermaine Seopesenwe" },
  { src: poster_4, title: "Kagiso Rabada" },
  { src: poster_5, title: "Letsile Tebogo" },
  { src: poster_6, title: "World Test Championship" },
  { src: poster_7, title: "Siya Kolisi" },
  { src: poster_8, title: "Kaizer Chiefs" },
  { src: poster_9, title: "Serving Kant" },
  { src: poster_10, title: "Team SA 4x100m" },
  { src: poster_11, title: "Lions T20 Champions" },
  { src: poster_12, title: "South Africa's Pride" },
];

export const SportPosters = ({ isOpen, onClose }) => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const isLightbox = activeIndex !== null;

  // ESC logic
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

  const next = () => setActiveIndex((i) => (i + 1) % posters.length);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + posters.length) % posters.length);

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
        {/* CLOSE BUTTON */}
        <button
          onClick={() => (isLightbox ? setActiveIndex(null) : onClose())}
          className="fixed top-6 right-6 z-50 text-white bg-black/70 rounded-2xl w-14 h-14 flex items-center justify-center"
        >
          ✕
        </button>

        <div className="min-h-screen py-20 px-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isLightbox ? (
              /* ---------------- GRID VIEW ---------------- */
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl"
              >
                {posters.map((item, index) => (
                  <img
                    key={index}
                    src={item.src}
                    alt={item.title}
                    onClick={() => setActiveIndex(index)}
                    className="cursor-pointer rounded-2xl h-80 w-full object-cover hover:scale-105 transition"
                  />
                ))}
              </motion.div>
            ) : (
              /* ---------------- LIGHTBOX VIEW ---------------- */
              <motion.div
                key="lightbox"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative flex items-center justify-center w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={posters[activeIndex].src}
                  alt=""
                  className="max-w-[95vw] max-h-[95vh] object-contain"
                />

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
                  {activeIndex + 1} / {posters.length}
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
