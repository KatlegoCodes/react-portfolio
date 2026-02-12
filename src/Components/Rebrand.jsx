import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import rebrand from "../assets/Football Club rebrand/original/Rebrand-pc.jpg";
import rebrand_2 from "../assets/Football Club rebrand/original/7.jpg";
import rebrand_3 from "../assets/Football Club rebrand/original/2.jpg";
import rebrand_4 from "../assets/Football Club rebrand/original/3.jpg";
import rebrand_5 from "../assets/Football Club rebrand/original/4.webp";
import rebrand_6 from "../assets/Football Club rebrand/original/9.webp";
import rebrand_7 from "../assets/Football Club rebrand/original/8.webp";

const images = [
  rebrand,
  rebrand_2,
  rebrand_3,
  rebrand_4,
  rebrand_5,
  rebrand_6,
  rebrand_7,
];

export const Rebrand = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
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
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-6xl h-[95vh] overflow-y-auto rounded-2xl shadow-2xl bg-[#0e0e0e]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-400 bg-black/50 rounded-full p-2 backdrop-blur-sm transition-all duration-200"
              onClick={onClose}
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center space-y-8 py-10 px-4">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  className="w-full flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {/* A4 Frame */}
                  <div className="bg-neutral-900 p-6 rounded-2xl shadow-2xl">
                    <div className="relative aspect-[1/1.414] w-[min(90vw,700px)] bg-white rounded-lg overflow-hidden">
                      <motion.img
                        src={img}
                        alt={`Rebrand ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-contain"
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 120 }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
