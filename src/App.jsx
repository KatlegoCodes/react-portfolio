import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./Components/Hero";
import { PortfolioSection } from "./Components/PortfolioSection";
import { ProjectDetails } from "./Components/ProjectDetails";
import { IllustrationsGallery } from "./Components/IllustrationsGallery";
import { SportPosters } from "./Components/SportPosters";
import { BrandIdentity } from "./Components/BrandIdentity";
import { Rebrand } from "./Components/Rebrand";
import { SkillsSection } from "./Components/SkillsSection";
import { ContactSection } from "./Components/ContactSection";
import { Footer } from "./Components/Footer";
import { ThemeProvider } from "./Components/ThemeProvider";
import { ThemeDebug } from "./Components/ThemeDebugg";

export const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <SkillsSection />
                <PortfolioSection />
                <ContactSection />
                <Footer />
              </>
            }
          />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/illustrations" element={<IllustrationsGallery />} />
          <Route path="/posters" element={<SportPosters />} />
          <Route path="/brand-identity" element={<BrandIdentity />} />
          <Route path="/rebrand" element={<Rebrand />} />
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
    </ThemeProvider>
  );
};

export default App;
