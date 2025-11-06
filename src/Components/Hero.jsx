import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Instagram } from "lucide-react";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("src/assets/background.jpg")` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/60 to-background/80" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent leading-tight"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)))",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Katlego
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Mashigwana
            </motion.span>
          </motion.h1>

          {/* Title */}
          <motion.p
            className="text-2xl md:text-3xl text-muted-foreground font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Frontend Developer & Graphic Designer
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Front-end developer & graphic designer focused on blending
            creativity with clean code. Always learning, always building —
            currently diving deeper into TypeScript and Next.js.
          </motion.p>
        </motion.div>

        {/* CTA Buttons & Social Links */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {/* View Work Button */}
          <motion.button
            onClick={scrollToProjects}
            className="group relative inline-flex items-center gap-3 h-12 px-8 rounded-xl text-white font-bold overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)))",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: <Github className="w-6 h-6" />,
                href: "https://github.com/katlegoCodes",
                label: "GitHub",
              },
              {
                icon: <Linkedin className="w-6 h-6" />,
                href: "https://linkedin.com/in/yourprofile",
                label: "LinkedIn",
              },
              {
                icon: <Instagram className="w-6 h-6" />,
                href: "https://instagram.com/jumping_foxx",
                label: "Instagram",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                href: "mailto:katlegcodes@gmail.com",
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted/50 hover:bg-muted rounded-xl text-muted-foreground hover:text-foreground transition-all duration-300 border border-border/50 hover:border-border"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
