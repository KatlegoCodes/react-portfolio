import React from "react";
import hero_bg from "../assets/hero-bg.jpg";
import arrow_right from "../assets/arrow-right-solid-full.svg";
import github from "../assets/github-brands-solid-full.svg";
import linkedin from "../assets/square-linkedin-brands-solid-full.svg";
import instagram from "../assets/instagram-brands-solid-full.svg";
import gmail from "../assets/envelope-solid-full.svg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-5"
        style={{ backgroundImage: `url(${hero_bg})` }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 fade-in">
        <div className="space-y-6">
          <h1
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent leading-tight"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)))",
            }}
          >
            Katlego Mashigwana
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            Frontend Developer & Graphic Designer
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Front-end developer & graphic designer focused on blending
            creativity with clean code. Always learning, always building —
            currently diving deeper into TypeScript and Next.js.
          </p>
        </div>

        <div className="mt-13 flex flex-wrap items-center justify-center gap-6">
          <button
            className="h-12 px-8 inline-flex items-center gap-2 rounded-xl text-white font-bold hover:scale-110 transition-all duration- cursor- transform duration-300"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)))",
            }}
          >
            View My Work
            <img src={arrow_right} alt="Arrow Right" className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/katlegoCodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="w-10 h-10 hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-10 h-10 hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://instagram.com/jumping_foxx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="w-10 h-10 hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a href="mailto:katlegcodes@gmail.com">
              <img
                src={gmail}
                alt="Gmail"
                className="w-10 h-10 hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
