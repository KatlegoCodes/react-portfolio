import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import brand_logo from "../assets/Brand Identity Design/original/Brand-Logo.png";
import wallpaper from "../assets/Brand Identity Design/original/Wallpaper.webp";
import wallpaper_2 from "../assets/Brand Identity Design/original/Grey-Wallpaper.webp";
import business_card from "../assets/Brand Identity Design/original/Business-Card-design.webp";
import letterhead from "../assets/Brand Identity Design/original/Letterhead.jpg";
import design_2 from "../assets/Brand Identity Design/original/3.jpg";
import design_3 from "../assets/Brand Identity Design/original/4.jpg";
import design_4 from "../assets/Brand Identity Design/original/1.jpg";
import design_5 from "../assets/Brand Identity Design/original/2.jpg";

const images = [
  wallpaper,
  design_2,
  design_4,
  design_5,
  design_3,
  brand_logo,
  wallpaper_2,
  business_card,
  letterhead,
];

export const BrandIdentity = ({ isOpen, onClose }) => {
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
            className="relative w-full max-w-5xl h-[95vh] overflow-y-auto rounded-2xl shadow-2xl bg-[#0e0e0e]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-400 z-50 bg-black/50 rounded-full p-2 backdrop-blur-sm transition-all duration-200 hover:bg-black/70 hover:scale-110"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col space-y-12 py-12">
              {images.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`Brand Identity ${index + 1}`}
                  className="w-full h-auto object-contain shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.01 }}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
