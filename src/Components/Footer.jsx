import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export const Footer = () => {
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div>
            <h3>Katlego Mashigwana</h3>
            <p>
              Frontend Developer & Graphic Designer creating beautiful,
              functional digital experiences that blend technical expertise with
              creative vision.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
