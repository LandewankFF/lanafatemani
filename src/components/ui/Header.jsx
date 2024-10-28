import React, { useState, useEffect } from "react";
import { ButtonIcon } from "./Button";
import images from "../../assets/images/images";
import { Navbar } from "./Navbar";

const Header = () => {
  const imageSrc = [images.food, images.culture, images.island];
  const [currentImage, setCurrentImage] = useState(0);
  const [opacity, setOpacity] = useState(1); // State untuk opacity

  useEffect(() => {
    const interval = setInterval(() => {
      // Mengurangi opacity sebelum mengganti gambar
      setOpacity(0);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % imageSrc.length);
        setOpacity(1); // Mengembalikan opacity setelah gambar berganti
      }, 300); // Durasi transisi sesuai dengan durasi setInterval
    }, 5000);

    return () => clearInterval(interval);
  }, [imageSrc.length]);

  return (
    <header>
      <Navbar />

      {/* Bagian Background dengan transisi opacity */}
      <div
         className="relative flex flex-col justify-center items-center h-[500px] gap-5 bg-cover bg-center text-basic_white"
         style={{
           backgroundImage: `url(${imageSrc[currentImage]})`,
           transition: 'opacity 0.5s ease-in-out', // Transisi opacity
           opacity: opacity, // Menetapkan opacity
         }}
        
        >
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Konten di atas gambar */}
        <div className="relative z-10 inline-flex justify-center mt-20" data-aos="fade-up" data-aos-duration="1000" >
          <h3 className="s:text-base lg:text-xl text-center inline-flex bg-secondary text-white px-4 py-2 rounded-lg">
            Selamat Datang di Lanafa Temani
          </h3>
        </div>

        <div className="relative z-10 s:w-[90%] lg:w-[70%] " data-aos="fade-right" data-aos-duration="1000" >
          <h2 className="s:text-2xl lg:text-4xl font-extrabold text-center">
            Promosi Pariwisata Kreatif dengan Konten Berkualitas
          </h2>
        </div>

        <div className="relative z-10 w-[50%] text-center s:w-[90%] lg:w-[70%]" data-aos="fade-left" data-aos-duration="1000" >
          <blockquote className="text-base">
            Jasa iklan dan pembuatan konten kreatif untuk pariwisata. Promosikan
            destinasi unik, budaya otentik, dan pengalaman tak terlupakan.
            Ciptakan dampak positif dan lestarikan keindahan alam.
          </blockquote>
        </div>

        <div className="relative z-10" data-aos="fade-up" data-aos-duration="1000" >
          <ButtonIcon
            className="flex-row-reverse"
            bgColor="bg-primary"
            hoverBgColor='hover:bg-hover_primary'
            text="Hubungi Kami"
            icon="arrow-forward"
          />
        </div>
      </div>
    </header>
  );
};
export default Header