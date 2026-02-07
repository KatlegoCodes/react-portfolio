import React from "react";
import design_project_1 from "../assets/design1.jpg";
import design_project_2 from "../assets/Rebrand-pc.jpg";
import illustration_8 from "../assets/Illustration-8.jpg";
import poster from "../assets/Siya.jpg";
import { Link } from "react-router-dom";
import { BrandIdentity } from "./BrandIdentity";
import { Rebrand } from "./Rebrand";
import { IllustrationsGallery } from "./IllustrationsGallery"; // New component
import { SportPosters } from "./SportPosters"; // New component

export const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    description:
      "Complete brand identity package including logo design, business cards, letterheads, and brand guidelines for a modern tech start-up.",
    image: design_project_1,
    category: "Branding",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    link: "/brand-identity",
  },
  {
    id: 2,
    title: "Football Club Rebrand",
    description:
      "A modern logo redesign for a local football club, combining heritage with a fresh visual identity.",
    image: design_project_2,
    category: "Logo Design",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    link: "/rebrand",
  },
  {
    id: 3,
    title: "Editorial Illustrations",
    description:
      "A series of commissioned illustrations exploring color, texture, and visual storytelling.",
    image: illustration_8,
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
    link: "/posters",
  },
];

export const DesignProjects = () => {
  const [selectProject, setSelectProject] = React.useState(null);
  const [openBrandModal, setOpenBrandModal] = React.useState(false);
  const [openRebrandModal, setOpenRebrandModal] = React.useState(false);
  const [openIllustrationsModal, setOpenIllustrationsModal] =
    React.useState(false);
  const [openPostersModal, setOpenPostersModal] = React.useState(false);

  return (
    <section className="py-10 bg-background text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 dark:text-foreground mx-auto">
          Graphic Design
        </h2>
        <p className="text-md md:text-2xl max-w-3xl mx-auto mb-16 text-muted-foreground">
          Explore my latest projects spanning frontend development and graphic
          design. Each project represents a unique challenge and creative
          solution.
        </p>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => setSelectProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

        {/* MODAL PREVIEW */}
        {selectProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-6"
            onClick={() => setSelectProject(null)}
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
                  {selectProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-sm border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* UPDATED CONDITIONAL BUTTONS - ALL MODALS NOW */}
                {selectProject.id === 1 ? (
                  <button
                    onClick={() => {
                      setOpenBrandModal(true);
                      setSelectProject(null);
                    }}
                    className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition"
                  >
                    View Project
                  </button>
                ) : selectProject.id === 2 ? (
                  <button
                    onClick={() => {
                      setOpenRebrandModal(true);
                      setSelectProject(null);
                    }}
                    className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition"
                  >
                    View Project
                  </button>
                ) : selectProject.id === 3 ? (
                  <button
                    onClick={() => {
                      setOpenIllustrationsModal(true);
                      setSelectProject(null);
                    }}
                    className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition"
                  >
                    View Project
                  </button>
                ) : selectProject.id === 4 ? (
                  <button
                    onClick={() => {
                      setOpenPostersModal(true);
                      setSelectProject(null);
                    }}
                    className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition"
                  >
                    View Project
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        )}

        {/* BRAND IDENTITY MODAL */}
        <BrandIdentity
          isOpen={openBrandModal}
          onClose={() => setOpenBrandModal(false)}
        />

        {/* REBRAND MODAL */}
        <Rebrand
          isOpen={openRebrandModal}
          onClose={() => setOpenRebrandModal(false)}
        />

        {/* EDITORIAL ILLUSTRATIONS MODAL */}
        <IllustrationsGallery
          isOpen={openIllustrationsModal}
          onClose={() => setOpenIllustrationsModal(false)}
        />

        {/* SPORT POSTERS MODAL */}
        <SportPosters
          isOpen={openPostersModal}
          onClose={() => setOpenPostersModal(false)}
        />
      </div>
    </section>
  );
};
