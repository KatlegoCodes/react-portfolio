import React from "react";
import { Code, Palette, Database } from "lucide-react";
import { motion } from "framer-motion";

export const SkillsSection = () => {
  const skills = {
    frontend: {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      linear: "from-rose-900 to-amber-100",
      technologies: [
        { name: "HTML & CSS", level: 70 },
        { name: "JavaScript", level: 60 },
        { name: "React", level: 65 },
        { name: "Tailwind CSS", level: 75 },
        { name: "Framer Motion", level: 55 },
      ],
    },
    design: {
      title: "Graphic Design",
      icon: <Palette className="w-6 h-6" />,
      linear: "from-rose-900 to-amber-100",
      technologies: [
        { name: "Adobe Illustrator", level: 90 },
        { name: "Photoshop", level: 70 },
        { name: "InDesign", level: 65 },
        { name: "UX/UI Design", level: 70 },
        { name: "Figma", level: 80 },
      ],
    },
    backend: {
      title: "Backend & Tools",
      icon: <Database className="w-6 h-6" />,
      linear: "from-rose-900 to-amber-100",
      technologies: [
        { name: "Python", level: 50 },
        { name: "Django", level: 45 },
        { name: "Git & GitHub", level: 80 },
      ],
    },
  };

  const tools = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Framer Motion",
    "Git",
    "GitHub",
    "Figma",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe InDesign",
    "Vite",
    "Django",
    "Python",
  ];

  const toolHoverStyles = {
    JavaScript: "hover:bg-yellow-300 hover:text-black",
    Python:
      "hover:bg-linear-to-r hover:from-yellow-300 hover:to-emerald-300 hover:text-black",
    React:
      "hover:bg-linear-to-r hover:from-sky-400 hover:to-indigo-400 hover:text-white",
    "Tailwind CSS":
      "hover:bg-linear-to-r hover:from-cyan-300 hover:to-sky-400 hover:text-white",
    TypeScript: "hover:bg-blue-400 hover:text-white",
    Figma:
      "hover:bg-linear-to-r hover:from-pink-300 hover:to-violet-300 hover:text-white",
    "Adobe Illustrator":
      "hover:bg-linear-to-r hover:from-[#D5353B] hover:to-[#D7C142] hover:text-yellow-200",
    "Adobe Photoshop":
      "hover:bg-linear-to-r hover:from-sky-300 hover:to-blue-900 hover:text-blue-200",
    Django: "hover:bg-green-300 hover:text-white",
    GitHub: "hover:bg-gray-600 hover:text-white",
    Git: "hover:bg-gray-500 hover:text-white",
    HTML5: "hover:bg-red-300 hover:text-white",
    CSS3: "hover:bg-blue-300 hover:text-white",
    "Framer Motion": "hover:bg-purple-300 hover:text-white",
    Vite: "hover:bg-teal-300 hover:text-white",
    "Adobe InDesign": "hover:bg-fuchsia-300 hover:text-white",
  };

  const defaultHover = "hover:bg-accent hover:text-accent-foreground";

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A refined mix of design and development tools I use to craft
            prototypes, experiences, and deployable products.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {Object.entries(skills).map(([key, category]) => (
            <motion.div
              key={key}
              className="flex flex-col h-full bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="relative mr-4">
                  <div
                    className={`absolute inset-0 rounded-xl blur-md opacity-20 group-hover:opacity-50 transition bg-linear-to-r ${category.linear}`}
                    style={{ filter: "blur(10px)" }}
                  />
                  <div className="relative p-3 bg-gray-800 dark: rounded-xl text-primary-foreground">
                    {category.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-card-foreground">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skill Bars */}
              <div className="space-y-5 grow">
                {category.technologies.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-card-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="relative w-full bg-muted rounded-full h-3 overflow-hidden shadow-inner">
                      <motion.div
                        className={`h-full rounded-full relative overflow-hidden bg-linear-to-r ${category.linear}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.3,
                          delay: index * 0.08,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            delay: 0.6 + index * 0.08,
                          }}
                        />
                      </motion.div>

                      <span className="absolute -top-6 right-0 text-sm font-semibold text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6">
                <p className="text-sm text-muted-foreground">
                  Always learning — I prioritize clarity, maintainability and
                  polished UX.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-foreground text-center mb-6">
            Tools & Technologies
          </h3>

          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
            {tools.map((tool, idx) => {
              const hoverClass = toolHoverStyles[tool] ?? defaultHover;
              return (
                <motion.button
                  key={tool}
                  type="button"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.06, y: -3 }}
                  transition={{ duration: 0.18, delay: idx * 0.03 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-card border border-border text-card-foreground shadow-sm transition-all duration-200 ${hoverClass}`}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <span>{tool}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-4">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="btn-hero inline-flex text-sm md:text-xl items-center px-8 py-3 font-semibold rounded-2xl md:rounded-xl overflow-hidden group transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="relative">Let's Build Something Amazing</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
