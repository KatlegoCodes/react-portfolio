import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "./DesignProjects";

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="mb-4">Project not found.</p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-primary text-white rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[480px] object-cover rounded-xl mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-muted-foreground mb-6">{project.description}</p>

        {project.tools && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tools.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <Link
          to="/"
          className="inline-block px-4 bg-primary text-white rounded"
        >
          Back to Projects
        </Link>
      </div>
    </section>
  );
};
