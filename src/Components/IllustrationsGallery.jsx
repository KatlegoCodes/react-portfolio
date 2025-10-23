import React from "react";
import illustration_1 from "../assets/Illustrations/illustration-1.jpg";
import illustration_2 from "../assets/Illustrations/illustration-2.jpg";
import illustration_3 from "../assets/Illustrations/illustration-3.jpg";
import illustration_4 from "../assets/Illustrations/illustration-4.jpg";
import illustration_5 from "../assets/Illustrations/illustration-5.jpg";
import illustration_6 from "../assets/Illustrations/illustration-6.jpg";

export const IllustrationsGallery = () => {
  const illustrations = [
    illustration_1,
    illustration_2,
    illustration_3,
    illustration_4,
    illustration_5,
    illustration_6,
  ];

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {illustrations.map((img, index) => {
        return (
          <img
            key={index}
            src={img}
            alt={`Illustration ${index + 1}`}
            className="rounded-xl shadow-lg hover:scale-105 transition-transform"
          />
        );
      })}
    </div>
  );
};
