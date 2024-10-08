import React from "react";
import { Navbar } from "../../components/ui/Navbar";
import { ButtonIcon, Button } from "../../components/ui/Button";
// import content from "../../assets/images/content.png";
import { CardService } from "../../components/ui/CardService";
import images from "../../assets/images/images";
import { TitleSection, Service } from "../../components/ui/uiSmallGroup";
import { Footer } from "../../components/ui/Footer";

export default function Home() {
  const PackageStandard=['30 desain feed Instagram','3 video reels','Unlimited foto destinasi wisata','Ide dan Konsep dari tim kami', 'Shot menggunakan Iphone 11 atau kamera']
  return (
    <div>
      <Navbar></Navbar>
      <ButtonIcon
        className="flex bg-primary text-white px-4 py-3 rounded-full md:order-3 md:block s:hidden"
        icon="call"
        text="Hubungi Kami"
        textClassName="ml-2"
      />
      <Button
        text="Selamat Datang di Lanafa Temani"
        className="bg-secondary text-basic_white px-4 py-2 rounded-lg"
      />

      <CardService
        backgroundColor="bg-secondary"
        imageSrc={images.conten_creative}
        title="Iklan Media Sosial"
        description="Layanan periklanan kami dirancang untuk menjangkau audiens yang lebih luas dengan kampanye iklan yang tepat sasaran dan efektif."
      />

      <TitleSection
        section="Layanan"
        sectionHead="Solusi Iklan & Konten Kreatif"
        describe="Kami menyediakan layanan yang mencakup pembuatan konten kreatif, periklanan digital, dan manajemen media sosial, dirancang khusus untuk mendukung pertumbuhan Pariwisata Indonesia"
      />

    <Service
      ClassBg ='bg-black'
      Title='Medium'  
      Caption='Untuk meningkatkan views dan interaksi yang relate dengan audiens. Ideal untuk membangun brand awareness dan menjadikan destinasi wisata semakin menarik dengan konten visual sinematik' 
      Price='Rp3.000.000'
      ListCard={PackageStandard}
    />
      <Footer />
    </div>
  );
}
