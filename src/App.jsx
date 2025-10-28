import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./Components/Hero";
import { DesignProjects } from "./Components/DesignProjects";
import { ProjectDetails } from "./Components/ProjectDetails";
import { IllustrationsGallery } from "./Components/IllustrationsGallery";
import { SportPosters } from "./Components/SportPosters";
import { BrandIdentity } from "./Components/BrandIdentity";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <DesignProjects />
            </>
          }
        />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/illustrations" element={<IllustrationsGallery />} />
        <Route path="/posters" element={<SportPosters />} />
        <Route path="/brand-identity" element={<BrandIdentity />} />
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
      </Routes>
    </Router>
  );
};
