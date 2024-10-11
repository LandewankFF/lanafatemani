import React from "react";
import { Navbar } from "../../components/ui/Navbar";
import { ButtonIcon, Button } from "../../components/ui/Button";
// import content from "../../assets/images/content.png";
import CardService  from "../../components/ui/CardService";
import images from "../../assets/images/images";
import {  Price} from "../../components/ui/uiSmallGroup";
import { Footer } from "../../components/ui/Footer";
import { Homepage } from "../../components/Homepage/Homepage";

export default function Home() {
  
  return (
    <div>
      <Homepage/>

    {/* <Price
      ClassBg ='bg-black'
      Title='Medium'  
      Caption='Untuk meningkatkan views dan interaksi yang relate dengan audiens. Ideal untuk membangun brand awareness dan menjadikan destinasi wisata semakin menarik dengan konten visual sinematik' 
      Price='Rp3.000.000'
      ListCard={PackageStandard}
    /> */}
    </div>
  );
}
