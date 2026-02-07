import React from "react";
import { DesignProjects } from "./DesignProjects";
import { FrontendProjects } from "./FrontendProjects";
import { Palette, Code } from "lucide-react";

export const PortfolioSection = () => {
  const [activeSection, setActiveSection] = React.useState("design");

  return (
    <section
      id="projects"
      className="min-h-screen bg-background py-6 md:flex md:flex-col md:items-center"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-2 md:mb-6">
        <h1 className="text-5xl md:text-7xl text-center font-bold text-foreground mb-10">
          My Portfolio
        </h1>

        {/* Toggle buttons */}
        <div className="bg-muted md:w-lg rounded-2xl p-2 text-center flex flex-col items-center md:flex md:flex-row md:justify-center gap-4">
          <button
            onClick={() => setActiveSection("design")}
            className={`flex items-center gap-2 px-4 py-4 rounded-xl transition-all duration-300 font-semibold text-lg ${
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
            className={`flex items-center gap-2 px-4 py-4 rounded-xl transition-all duration-300 font-semibold text-lg ${
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
