import React from "react";
import design_project_1 from "../assets/design1.jpg";
import design_project_2 from "../assets/Rebrand-pc.jpg";
import Oskido from "../assets/Oskido.jpg";
import poster from "../assets/Siya.jpg";
import { Link } from "react-router-dom";

export const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    description:
      "Complete brand identity package including logo design, business cards, letterheads and brand guidelines for a modern tech start-up.",
    image: design_project_1,
    category: "Branding",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
  },
  {
    id: 2,
    title: "Football Club Rebrand",
    description:
      "A modern logo redesign for a local football club, combining heritage with a fresh visual identity.",
    image: design_project_2,
    category: "Logo Design",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
  },
  {
    id: 3,
    title: "Editorial Illustrations",
    description:
      "A series of commissioned illustrations exploring color, texture, and visual storytelling.",
    image: Oskido,
    category: "Illustrations",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    link: "/illustrations",
  },

  {
    id: 4,
    title: "Sport Posters",
    description:
      "A series of dynamic posters capturing the energy and spirit of various sports.",
    image: poster,
    category: "Poster Design",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
  },
];

export const DesignProjects = () => {
  const [selectProject, setSelectProject] = React.useState(null);

  return (
    <section className="py-20 bg-background text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-7xl font-bold mb-12 text-gray-700 ">
          Featured Work
        </h2>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-16 text-muted-foreground">
          Explore my latest projects spanning frontend development and graphic
          design Each project represents a unique challenge and creative
          solution
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => setSelectProject(project)}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Title & Category */}
              <div className="absolute bottom-4 left-4 text-left translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-white text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-accent text-sm font-medium mt-1">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
            onClick={() => setSelectProject(null)} // close when clicking outside
          >
            <div
              className="relative bg-white dark:bg-neutral-900 rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectProject.image}
                alt={selectProject.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  {selectProject.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {selectProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectProject.tools.map((tool) => {
                    return (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-sm border border-primary/20"
                      >
                        {tool}
                      </span>
                    );
                  })}
                </div>

                <button
                  onClick={() => setSelectProject(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-primary text-2xl font-bold"
                >
                  X
                </button>

                <Link
                  to={selectProject.link || `/projects/${selectProject.id}`}
                  className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
