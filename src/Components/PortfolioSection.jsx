import React, { act } from "react";
import { DesignProjects } from "./DesignProjects";
import { FrontendProjects } from "./FrontendProjects";
import { Palette, Code } from "lucide-react";

export const PortfolioSection = () => {
  const [activeSection, setActiveSection] = React.useState("design");

  return (
    <section className="min-h-screen bg-background">
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center mt-10">
            <h1 className="flex text-8xl font-bold text-gray-700">
              {" "}
              My Portfolio
            </h1>
          </div>
          <div className="flex justify-center py-8">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-2 flex">
              <button
                onClick={() => setActiveSection("design")}
                className={`flex items-center px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg ${
                  activeSection === "design"
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-lg"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                <Palette size={20} />
                Graphic Design
              </button>

              <button
                onClick={() => setActiveSection("frontend")}
                className={`flex items-center px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg ${
                  activeSection === "frontend"
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-lg"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                <Code size={20} className="mr-3" />
                Frontend Development
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="transition-all duration-500">
        {activeSection === "design" && <DesignProjects />}
        {activeSection === "frontend" && <FrontendProjects />}
      </div>
    </section>
  );
};
