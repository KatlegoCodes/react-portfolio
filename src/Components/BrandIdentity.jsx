import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import brand_logo from "../assets/Brand Identity Design/Brand-Logo.png";
import wallpaper from "../assets/Brand Identity Design/Wallpaper.jpg";
import wallpaper_2 from "../assets/Brand Identity Design/Grey-Wallpaper.jpg";
import business_card from "../assets/Brand Identity Design/Business-Card-design.jpg";
import letterhead from "../assets/Brand Identity Design/letterhead.jpg";

export const BrandIdentity = () => {
  const tools = ["Photoshop", "Illustrator", "InDesign", "Figma"];

  return (
    <section className="min-h-screen bg-background text-white py-20 px-6">
      <div className="max-w-6xl max-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <img
            src={brand_logo}
            alt="brand logo"
            className="w-40 h-40 mx-auto rounded-full mb-6 object-cover shadow-lg"
          />
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-center max-w-3xl max-auto mb-20"
        >
          <p className="text-lg leading-relaxed mb-8">
            The brand identity was crafted to position the firm as a
            contemporary leader in the legal field, building upon its legacy of
            excellence. We developed a sophisticated visual system grounded in
            authoritative typography, clean compositions, and a refined color
            palette that communicates both integrity and forward-thinking
            clarity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
