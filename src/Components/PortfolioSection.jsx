import React from "react";
import { DesignProjects } from "./DesignProjects";
import { FrontendProjects } from "./FrontendProjects";
import { Palette, Code } from "lucide-react";

export const PortfolioSection = () => {
  const [activeSection, setActiveSection] = React.useState("design");

  return (
    <section id="projects" className="min-h-screen bg-background py-24">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
          My Portfolio
        </h1>

        {/* Toggle buttons */}
        <div className="inline-flex bg-muted rounded-2xl p-2">
          <button
            onClick={() => setActiveSection("design")}
            className={`flex items-center gap-2 px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg ${
              activeSection === "design"
                ? "bg-card text-card-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Palette size={20} />
            Graphic Design
          </button>

          <button
            onClick={() => setActiveSection("frontend")}
            className={`flex items-center gap-2 px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg ${
              activeSection === "frontend"
                ? "bg-card text-card-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Code size={20} />
            Frontend Development
          </button>
        </div>
      </div>

      {/* Projects section */}
      <div className="transition-all duration-500">
        {activeSection === "design" ? <DesignProjects /> : <FrontendProjects />}
      </div>
    </section>
  );
};
