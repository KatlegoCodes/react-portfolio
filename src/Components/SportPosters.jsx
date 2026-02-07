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

export const SportPosters = ({ isOpen, onClose }) => {
  const [selected, setSelected] = React.useState(null);

  const posters = [
    { id: 1, src: poster_1, title: "Aphelele Fassi" },
    { id: 2, src: poster_2, title: "Dricus Du Plessis" },
    { id: 3, src: poster_3, title: "Jermaine Seopesenwe" },
    { id: 4, src: poster_4, title: "Kagiso Rabada" },
    { id: 5, src: poster_5, title: "Letsile Tebogo" },
    { id: 6, src: poster_6, title: "World Test Championship" },
    { id: 7, src: poster_7, title: "Siya Kolisi" },
    { id: 8, src: poster_8, title: "Kaizer Chiefs" },
    { id: 9, src: poster_9, title: "Serving Kant" },
    { id: 10, src: poster_10, title: "Team SA 4x100m" },
    { id: 11, src: poster_11, title: "Lions T20 Champions" },
  ];

  // Close the entire modal when ESC is pressed
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (selected) {
          setSelected(null);
        } else {
          onClose();
        }
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
  }, [isOpen, selected, onClose]);

  // Navigation functions for lightbox
  const goToNext = () => {
    const currentIndex = posters.findIndex((item) => item.id === selected.id);
    const nextIndex = (currentIndex + 1) % posters.length;
    setSelected(posters[nextIndex]);
  };

  const goToPrev = () => {
    const currentIndex = posters.findIndex((item) => item.id === selected.id);
    const prevIndex = (currentIndex - 1 + posters.length) % posters.length;
    setSelected(posters[prevIndex]);
  };

  // Don't render if not open
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
            onClose();
          }
        }}
      >
        {/* Close button for the entire modal */}
        <motion.button
          onClick={onClose}
          className="fixed top-6 right-6 z-50 text-white hover:text-white bg-black/70 rounded-2xl w-14 h-14 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-red-500/90 hover:scale-110 border border-white/10"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <X />
        </motion.button>

        <div className="min-h-screen py-20 px-4 md:px-6 relative z-10">
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto text-center text-foreground z-10">
            {/* Enhanced Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <motion.h1
                className="text-6xl md:text-7xl font-bold mb-6 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                Sport Posters
              </motion.h1>
              <motion.p
                className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Dynamic compositions capturing the intensity, emotion, and raw
                energy of athletic excellence.
              </motion.p>
            </motion.div>

            {/* Enhanced Gallery Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {posters.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.6 + index * 0.1,
                  }}
                  className="relative group overflow-hidden rounded-3xl cursor-pointer bg-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20"
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 25 },
                  }}
                  onClick={() => setSelected(item)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      whileHover={{ scale: 1.1 }}
                    />

                    {/* linear Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                      <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white text-xl font-bold mb-2">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    <motion.div
                      className="absolute top-4 right-4 bg-black/60 rounded-full p-3 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                      >
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Enhanced Modal / Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-lg p-4"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full h-full flex items-center justify-center max-w-7xl mx-auto"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0, rotateY: 10 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: -10 }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
              >
                {/* Main Image Container */}
                <motion.div
                  className="relative"
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.img
                    src={selected.src}
                    alt={selected.title}
                    className="max-w-[95vw] h-[95vh] object-contain shadow-2xl"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Page Counter Only */}
                  <motion.div
                    className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md rounded-2xl px-4 py-2 text-white transform translate-y-4 opacity-0"
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-white/70 text-sm">
                      {posters.findIndex((item) => item.id === selected.id) + 1}{" "}
                      of {posters.length}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Enhanced Close Button for Lightbox */}
                <motion.button
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 text-white hover:text-white bg-black/70 rounded-2xl w-14 h-14 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-red-500/90 hover:scale-110 border border-white/10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X />
                </motion.button>

                {/* Enhanced Navigation Arrows */}
                {posters.length > 1 && (
                  <>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        goToPrev();
                      }}
                      className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white bg-black/70 rounded-2xl w-7 h-7 md:w-14 md:h-14 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/10"
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Arrow direction="left" />
                    </motion.button>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        goToNext();
                      }}
                      className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white bg-black/70 rounded-2xl w-7 h-7 md:w-14 md:h-14 flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/10"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Arrow direction="right" />
                    </motion.button>
                  </>
                )}

                {/* Enhanced Instructions */}
                <motion.div
                  className="absolute top-6 left-6 text-white/60 text-sm bg-black/50 rounded-xl px-4 py-2 backdrop-blur-sm border border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Press ESC to close • Use arrows to navigate
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
};
