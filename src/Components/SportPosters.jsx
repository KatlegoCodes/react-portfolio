import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import background from "../assets/background.jpg";
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

export const SportPosters = () => {
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
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selected]);

  // Navigation functions
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

  return (
    <section
      className="relative min-h-screen bg-background py-20 px-6"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      <div className="relative max-w-6xl mx-auto text-center text-white z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Sport Posters</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of my recent Sport Posters exploring emotion,
            storytelling, and vibrant composition.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {posters.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl  cursor-pointer"
              whileHover={{ y: -8, scale: 1.03 }}
              onClick={() => setSelected(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-[480px] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay Title */}
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

      {/* Enhanced Modal / Lightbox - CLEANED UP */}
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
              {/* Enlarged Image - Clean focus on the image */}
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
                className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300 bg-black/70 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-black/90 hover:scale-110"
              >
                <X />
              </button>

              {/* Navigation Arrows */}
              {posters.length > 1 && (
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
              <div className="absolute top-6 left-6 text-white/80 text-sm bg-black/50 rounded-lg px-3 py-1 backdrop-blur-sm">
                Press ESC to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
