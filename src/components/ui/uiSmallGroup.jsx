import React from "react";
import { Link } from "react-router-dom";
import { ButtonIcon } from "./Button";

export const List = ({ icon, text }) => {
  return (
    <div className=" flex gap-4 items-center">
      <ion-icon name={icon}></ion-icon>
      <span>{text}</span>
    </div>
  );
};
export const Navigation = ({ text, path }) => {
  return (
    <div className=" flex gap-4 items-center text-basic_white">
      <ion-icon name="caret-forward-outline"></ion-icon>
      <Link to={path}>{text}</Link>
    </div>
  );
};

export const TitleSection = ({ section, sectionHead, describe }) => {
  return (
    <div className="text-center " data-aos="fade-up" data-aos-duration="1000">
      <div className="text-secondary text-xl">
        <span>{section}</span>
      </div>
      <div className="text-[40px] mb-3">
        <h2>{sectionHead}</h2>
      </div>
      <div className="text-base inline-flex s:w-[80%] md:w-[50%]">
        <blockquote className="">{describe}</blockquote>
      </div>
    </div>
  );
};

export const ListPakage = ({ icon, text }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="rounded-full bg-primary inline-flex p-1  text-2xl">
        <ion-icon name={icon}></ion-icon>
      </div>
      <span className="text-base">{text}</span>
    </div>
  );
};

// Component price
export const Price = ({ ClassBg, Title, Caption, Price, ListCard,bgButton, hoverBgColor, bgList,animationDuration }) => {
  return (
    <div
      className={`${ClassBg} text-basic_white w-80 md:h-[630px] s:h-[650px] md:py-8 s:px-5 s:py-4 rounded-2xl relative`}
      data-aos-duration={`${animationDuration}`} data-aos="fade-up" 
    >
      <div>
        <div className="flex flex-col s:gap-1 md:gap-4 h-[275px]">
          <div className="">
            <h3 className="text-3xl text-center">{Title}</h3>
          </div>
          <div className="">
            <blockquote className="text-center">{Caption}</blockquote>
          </div>
          <div className="">
            <span className="text-4xl text-center justify-center w-full flex">
              {Price}
            </span>
          </div>
          <div className={`bg-basic_white  h-[2px] md:static s:absolute s:top-[270px] left-5 right-5`}></div>
        </div>

        <div className="flex flex-col gap-3 mt-2">
          {/* List requirement package */}
          {ListCard.map((text, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div className={`rounded-full ${bgList} seco inline-flex p-1 text-2xl`}>
                <ion-icon name="checkmark-outline"></ion-icon>
              </div>
              <span className="text-base">{text}</span>
            </div>
          ))}
        </div>

        <ButtonIcon
          className={`absolute bottom-3 left-5 right-5  flex-row-reverse items-center ${bgButton} ${hoverBgColor}`}
          icon="arrow-forward"
          text="Pesan Sekarang"
          textClassName="text-lg font-bold"
        />
      </div>
    </div>
  );
};

