import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import background from "../assets/background.jpg";
import illustration_1 from "../assets/Illustrations/illustration-1.jpg";
import illustration_2 from "../assets/Illustrations/illustration-2.jpg";
import illustration_3 from "../assets/Illustrations/illustration-3.jpg";
import illustration_4 from "../assets/Illustrations/illustration-4.jpg";
import illustration_5 from "../assets/Illustrations/illustration-5.jpg";
import illustration_6 from "../assets/Illustrations/illustration-6.jpg";
import illustration_7 from "../assets/Illustrations/illustration-7.jpg";
import illustration_8 from "../assets/Illustrations/illustration-8.jpg";
import illustration_9 from "../assets/Illustrations/illustration-9.jpg";
import illustration_10 from "../assets/Illustrations/illustration-10.jpg";

// Add a close icon component
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

export const IllustrationsGallery = () => {
  const [selected, setSelected] = React.useState(null);

  const illustrations = [
    { id: 1, src: illustration_1, title: "The Artist" },
    { id: 2, src: illustration_2, title: "The Apprentice" },
    { id: 3, src: illustration_3, title: "The Master" },
    { id: 4, src: illustration_4, title: "The Dreamer" },
    { id: 5, src: illustration_5, title: "The Explorer" },
    { id: 6, src: illustration_6, title: "The Seeker" },
    { id: 7, src: illustration_7, title: "The Flame" },
    { id: 8, src: illustration_8, title: "The Chiller" },
    { id: 9, src: illustration_9, title: "The Muse" },
    { id: 10, src: illustration_10, title: "The Visionary" },
  ];

  // Keyboard navigation and body scroll lock
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };

    if (selected) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selected]);

  // Navigation functions
  const goToNext = () => {
    const currentIndex = illustrations.findIndex(
      (item) => item.id === selected.id
    );
    const nextIndex = (currentIndex + 1) % illustrations.length;
    setSelected(illustrations[nextIndex]);
  };

  const goToPrev = () => {
    const currentIndex = illustrations.findIndex(
      (item) => item.id === selected.id
    );
    const prevIndex =
      (currentIndex - 1 + illustrations.length) % illustrations.length;
    setSelected(illustrations[prevIndex]);
  };

  return (
    <section className="min-h-screen bg-background py-20 px-6">
      <div className="absolute inset-0 max-h-full backdrop-blur-[2px]" />
      <div className="relative max-w-6xl mx-auto text-center text-foreground z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Editorial Illustrations</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of my recent editorial illustrations exploring emotion,
            storytelling, and vibrant composition.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {illustrations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl cursor-pointer bg-card"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-[480px] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay Title - FIXED GRADIENT TYPO */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <p className="text-white text-lg font-medium p-4">
                  {item.title}
                </p>
              </div>

              {/* Click hint */}
              <div className="absolute top-4 right-4 bg-black/60 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Modal / Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Enlarged Image */}
              <motion.img
                src={selected.src}
                alt={selected.title}
                className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />

              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 text-white hover:text-muted-foreground bg-black/70 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-black/90 hover:scale-110"
              >
                <X />
              </button>

              {/* Navigation Arrows */}
              {illustrations.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrev();
                    }}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white bg-black/70 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm hover:bg-black/90 transition-all duration-300 hover:scale-110 text-2xl"
                  >
                    ‹
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNext();
                    }}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white bg-black/70 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm hover:bg-black/90 transition-all duration-300 hover:scale-110 text-2xl"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Instructions */}
              <div className="absolute top-6 left-6 text-muted-foreground text-sm bg-black/50 rounded-lg px-3 py-1 backdrop-blur-sm">
                Press ESC to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
