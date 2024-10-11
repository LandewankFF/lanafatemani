import React from "react";
import { Header } from "../ui/Header";
import { TitleSection,} from "../ui/uiSmallGroup";
import CardService from "../ui/CardService";
import images from "../../assets/images/images";
import { Footer } from "../ui/Footer";
import { ButtonIcon } from "../ui/Button";


export const Homepage = () => {
  // const PackageStandard = [
  //   "30 desain feed Instagram",
  //   "3 video reels",
  //   "Unlimited foto destinasi wisata",
  //   "Ide dan Konsep dari tim kami",
  //   "Shot menggunakan Iphone 11 atau kamera",
  // ];
  // const PackageProfesional = [
  //   "50 desain feed Instagram",
  //   "10 video reels",
  //   "2 Tallent",
  //   "1 Video Promosi Menggunakan Drone",
  //   "Jangkauan audiens 10.000 orang",
  // ];
  // const PackageMedium = [
  //   "50 desain feed Instagram",
  //   "5 video reels",
  //   "Unlimited foto destinasi wisata",
  //   "1 Tallent",
  //   "Pengelolaan media sosial untuk 1 platform",
  // ];
  return (
    <>
      <Header />
      {/* Section Layanan */}
      <div className="mt-10">
        <TitleSection
          section="Layanan"
          sectionHead="Solusi Pembuatan Konten Kreatif"
          describe="Kami menyediakan layanan yang mencakup pembuatan konten kreatif dan manajemen media sosial, dirancang khusus untuk mendukung pertumbuhan Pariwisata Indonesia"
        />
        <div className="flex gap-4 flex-wrap justify-center mt-7">
          <CardService
            backgroundColor="bg-black"
            imageSrc={images.conten_creative}
            title="Konten Kreatif"
            description="Kami membantu mempromosikan sektor pariwisata dengan menciptakan konten yang menarik dan efektif untuk memikat lebih banyak pengunjung."
          />
          <CardService
            backgroundColor="bg-secondary"
            imageSrc={images.ads}
            title="Iklan Media Sosial"
            description="Layanan periklanan kami dirancang untuk menjangkau audiens yang lebih luas dengan kampanye iklan yang tepat sasaran dan efektif."
          />
          <CardService
            backgroundColor="bg-black"
            imageSrc={images.manage}
            title="Kelola Sosial Media"
            description="Layanan ini membantu Anda membangun brand awareness, meningkatkan engagement, dan mempertahankan hubungan dengan audiens secara efektif."
          />
        </div>
      </div>
      <ButtonIcon
      bgColor='bg-primary'
      icon="arrow-forward"
      text="Pesan Sekarang"
      hoverBgColor='hover:bg-hover_primary'
      ></ButtonIcon>
      {/* Section Footer */}
      <Footer/>
    </>
  );
};
