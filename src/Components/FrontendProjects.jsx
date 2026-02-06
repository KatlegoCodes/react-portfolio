import React from "react";
import { ExternalLink, Github } from "lucide-react";
import image_1 from "../assets/frontend/design1.jpg";
import image_2 from "../assets/frontend/design2.png";
import image_3 from "../assets/frontend/design3.jpg";
import image_4 from "../assets/frontend/design4.jpg";

export const frontendProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features user authentication, product filtering, and secure payments.",
    image: image_1,
    category: "Frontend",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://unshackled-warrior.vercel.app",
    githubUrl: "https://github.com/katlegoCodes/unshackled-warrior",
    featured: true,
  },
  {
    id: 2,
    title: "Chef Claude's Recipes",
    description:
      "A recipe app that allows users to browse, search, and save their favorite recipes. Built with React and a RESTful API.",
    image: image_2,
    category: "Fullstack",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://chef-claudes-recipes.example.com",
    githubUrl: "https://github.com/katlegoCodes/Chef-Claudes-Recipes",
    featured: true,
  },
  {
    id: 3,
    title: "Tenzies Game",
    description:
      "A fun and interactive dice game built with React. Players try to roll all dice to the same number in as few rolls as possible.",
    image: image_3,
    category: "Frontend",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://tenzies-game.example.com",
    githubUrl: "https://github.com/katlegoCodes/Tenzies",
    featured: true,
  },
  {
    id: 4,
    title: "Assembly-Endgame Clone",
    description:
      "A clone of the popular Assembly-Endgame website, showcasing modern design and responsive layout using React and Tailwind CSS.",
    image: image_4,
    category: "Frontend",
    technologies: ["React", "Tailwind"],
    liveUrl: "https://assembly-endgame-clone.example.com",
    githubUrl: "https://github.com/katlegoCodes/assembly-endgame-clone",
    featured: true,
  },
];

export const FrontendProjects = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);

  return (
    <section className="py-20 bg-background text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold mb-12 text-gray-700 mx-auto">
          Frontend Development
        </h2>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-16 text-muted-foreground">
          Interactive web applications and user interfaces built with modern
          technologies. Each project focuses on performance, accessibility, and
          great user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {frontendProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-700"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6 text-left">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => {
                      return (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center flex-1 bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 md:py-2 md:px-4 rounded-md md:rounded-lg transition-colors text-sm font-medium"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center flex-1 bg-gray-800 hover:bg-gray-900 text-white py-1 px-2 md:py-2 md:px-4 rounded-md md:rounded-lg transition-colors text-xs md:text-sm font-medium"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  {selectedProject.featured && (
                    <span className="text-sm font-medium text-green-600 bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full">
                      Featured Project
                    </span>
                  )}
                </div>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => {
                      return (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Modal Action Buttons - Fixed: added flex and spacing */}
                <div className="flex space-x-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors font-medium"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    View Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg transition-colors font-medium"
                  >
                    <Github size={18} className="mr-2" />
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FrontendProjects;
