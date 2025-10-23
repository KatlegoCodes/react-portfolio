import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Hero } from "./Components/Hero";
import { DesignProjects } from "./Components/DesignProjects";
import { ProjectDetails } from "./Components/ProjectDetails";
import { IllustratuinGallery } from "./Components/IllustrationsGallery";

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home route: hero + project grid */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <DesignProjects />
            </>
          }
        />

        {/* Project details route  */}
        <Route path="/projects/id" element={<ProjectDetails />} />

        {/* fallback 404 route */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <p className="text-lg">
                Page not found --{" "}
                <a href="/" className="text-primary">
                  Go Home
                </a>
              </p>
            </div>
          }
        />
        <Route path="/illustrations" element={<IllustratuinGallery />} />
      </Routes>
    </Router>
  );
};
