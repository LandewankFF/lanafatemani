import React from "react";
import images from "../../assets/images/images";
import { Navbar } from "./Navbar";

const HeaderNav = ({Title, Caption }) => {
  return (
    <header>
      <div
        className={` h-[412px] relative bg-primary text-basic_white bg-cover md:px-20 s:px-5`} style={{ backgroundImage: `url(${images.island})` }} >
        {/* Navbar */}
        <Navbar/>
        {/* Caption */}
        <div className=" flex flex-col justify-center items-center h-full ">
          <div className="z-10 flex justify-center w-1/2 mt-11" data-aos="fade-right" data-aos-duration="1500">
            <h1 className="s:text-base lg:text-3xl font-bold">{Title}</h1>
          </div>
          {/* Overlay gelap */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="z-10 s:w-full lg:w-[80%] inline-flex text-center mt-5" data-aos="fade-left" data-aos-duration="1500">
            <blockquote>{Caption}</blockquote>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
