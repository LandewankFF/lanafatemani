import React from "react";
import Partner from "../../assets/images/logo/Partner"; // Import Partner.js

const Carousellogo = () => {
  const logos = Object.values(Partner); // Mengambil semua nilai (gambar) dari objek Partner
  const duplicatedLogos = [...logos, ...logos]; // Duplikat gambar agar bisa looping tanpa putus

  return (
    <div className="logos py-10 overflow-hidden mt-5 group gradient-side">
      <div className="flex gap-4 flex-nowrap animate-slide group-hover:pause-animation">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="w-28 h-28 flex-shrink-0">
            <img src={logo} alt={`Logo ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousellogo;
