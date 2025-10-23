import React from "react";
import illustration_1 from "../assets/Illustrations/illustration-1.jpg";
import illustration_2 from "../assets/Illustrations/illustration-2.jpg";
import illustration_3 from "../assets/Illustrations/illustration-3.jpg";
import illustration_4 from "../assets/Illustrations/illustration-4.jpg";
import illustration_5 from "../assets/Illustrations/illustration-5.jpg";
import illustration_6 from "../assets/Illustrations/illustration-6.jpg";

export const IllustrationsGallery = () => {
  const Illustrations = [
    { id: 1, src: illustration_1, title: "The Artist" },
    { id: 2, src: illustration_2, title: "The Apprentice" },
    { id: 3, src: illustration_3, title: "The Master" },
    { id: 4, src: illustration_4, title: "The Dreamer" },
    { id: 5, src: illustration_5, title: "The Explorer" },
    { id: 6, src: illustration_6, title: "The Seeker" },
  ];

  return (
    <section className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Editorial Illustrations</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent editorial illustrations exploring emotion,
            storytelling, and vibrant composition.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Illustrations.map((item) => {
            return (
              <div className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-[360px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="text-white text-lg font-medium p-4">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
