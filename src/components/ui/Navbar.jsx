import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { ButtonIcon } from "./Button";

export const Navbar = () => {
  const navLink = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Service", path: "/service" },
    { name: "About", path: "/about" },
  ];

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Hook untuk mendapatkan lokasi (path) saat ini
  const location = useLocation();

  // Listener untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Ubah background jika scroll lebih dari 50px
      } else {
        setIsScrolled(false); // Kembali transparan jika di atas 50px
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center px-20 xl:justify-between md:px-10 md:justify-between s:px-5 s:justify-between py-4 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "lg:bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="order-2 s:hidden">
          <span className="text-2xl text-primary">Lanafa</span>
          <span className="text-2xl text-secondary">Temani</span>
        </div>
        <div className="w-12 h-auto">
          <img src={logo} alt="logo lanafa temani" />
        </div>
      </div>
      <div
  className={`font-medium absolute lg:static left-0 top-[80px] md:w-[550px] s:w-full bg-primary lg:bg-transparent transition-transform duration-300 ease-in-out ${
    toggleMenu ? "translate-x-0" : "-translate-x-full"
  } lg:translate-x-0 lg:transition-none z-[2]`}
>
  <ul className="lg:flex lg:flex-row lg:static lg:justify-center lg:items-center text-lg lg:gap-5 md:flex md:flex-col md:px-10 py-5 s:px-5">
    {navLink.map((menu) => (
      <li key={menu.name} className="mb-4 lg:mb-0 s:text-center">
        <Link
          to={menu.path}
          className={`hover:text-secondary duration-300 ease-in-out 
            ${
              location.pathname === menu.path
                ? "text-secondary" // Teks aktif
                : `text-basic_white ${isScrolled ? 'lg:text-black' : ''}` // Default putih, hitam saat di-scroll di lg
            } 
          `}
        >
          {menu.name}
        </Link>
      </li>
    ))}
    <li className="justify-center flex">
      <button className="flex gap-2 bg-primary text-white px-4 py-2 rounded-lg md:order-3 lg:hidden md:hidden relative">
        <div>
          <ion-icon name="call"></ion-icon>
        </div>
        <span>Hubungi Kami</span>
      </button>
    </li>
  </ul>
</div>


      <ButtonIcon
        className="flex bg-primary text-white px-4 py-3 rounded-full md:order-3 md:block s:hidden"
        icon="call"
        text="Hubungi Kami"
        textClassName="ml-2"
      />
      <div
        className={`lg:hidden text-3xl md:absolute left-[520px]  ${isScrolled?'text-black':'text-basic_white'} `}
        onClick={() => setToggleMenu(toggleMenu ? false : true)}
      >
        <ion-icon name={toggleMenu ? "close" : "menu"}></ion-icon>
      </div>
    </nav>
  );
};