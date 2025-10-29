import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import rebrand from "../assets/Football Club rebrand/Rebrand-pc";

const images = [rebrand];

export const Rebrand = ({ isOpen, onClose }) => {
  React.useEffect(
    (event) => {
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
    },
    [isOpen, onClose]
  );

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

            <div>
              {images.map((img, index) => {
                <motion.div
                  key={id}
                  className="w-full flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.img
                    src={img}
                    alt={`Rebrand ${index + 1}`}
                    className="rounded-xl max-w-full h-auto shadow-lg"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 120 }}
                  />
                </motion.div>;
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
