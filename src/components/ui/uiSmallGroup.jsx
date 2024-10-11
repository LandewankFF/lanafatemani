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
    <div className="text-center">
      <div className="text-secondary text-xl">
        <span>{section}</span>
      </div>
      <div className="text-[40px] mb-3">
        <h2>{sectionHead}</h2>
      </div>
      <div className="text-base inline-flex">
        <blockquote className="w-[600px]">{describe}</blockquote>
      </div>
    </div>
  );
};

// export const ListPakage = ({ icon, text }) => {
//   return (
//     <div className="flex gap-4 items-center">
//       <div className="rounded-full bg-primary inline-flex p-1  text-2xl">
//         <ion-icon name={icon}></ion-icon>
//       </div>
//       <span className="text-base">{text}</span>
//     </div>
//   );
// };

// Component price
export const Price = ({ ClassBg, Title, Caption, Price, ListCard,bgButton, hoverBgColor }) => {
  return (
    <div
      className={`${ClassBg} text-basic_white w-96 h-auto py-8 px-5 rounded-2xl`}
    >
      <div>
        <div className="flex flex-col gap-4 h-[275px]">
          <div className="">
            <h3 className="text-3xl text-center">{Title}</h3>
          </div>
          <div className="">
            <blockquote className="text-center">{Caption}</blockquote>
          </div>
          <div className="">
            <span className="text-5xl text-center justify-center w-full flex">
              {Price}
            </span>
          </div>
          <div className="bg-basic_white w-full h-[2px]"></div>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          {/* List requirement package */}
          {ListCard.map((text, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div className="rounded-full bg-primary inline-flex p-1 text-2xl">
                <ion-icon name="checkmark-outline"></ion-icon>
              </div>
              <span className="text-base">{text}</span>
            </div>
          ))}
        </div>

        <ButtonIcon
          className={`w-full flex-row-reverse items-center ${bgButton} hover:${hoverBgColor}`}
          icon="arrow-forward"
          text="Pesan Sekarang"
          textClassName="text-lg font-bold"
        />
      </div>
    </div>
  );
};

