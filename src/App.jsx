import React, { use } from "react";
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
import { ThemeProvider, useTheme } from "./Components/ThemeProvider";
import Prism from "./Components/Prism";
import DarkVeil from "./Components/DarkVeil";
import prismbg from "./assets/prism.png";

const AppContent = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Router>
      {!isDark && (
        <div
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${prismbg})` }}
        />
      )}
      {isDark && (
        <div className="fixed inset-0 z-0 transition-opacity duration-500">
          <DarkVeil
            hueShift={-155}
            noiseIntensity={0}
            scanlineIntensity={1}
            speed={1}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>
      )}

      <div className="relative z-10">
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
      </div>
    </Router>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
