import React from "react";
import Header  from "../ui/Header";
import { TitleSection, Price } from "../ui/uiSmallGroup";
import CardService from "../ui/CardService";
import images from "../../assets/images/images";
import Footer  from "../ui/Footer";
import About from './About'
import Carousellogo from "../Portfolio Video/Carousellogo";

export const Homepage = () => {
  const PackageStandard = [
    "30 desain feed Instagram",
    "3 video reels",
    "Unlimited foto destinasi wisata",
    "Ide dan Konsep dari tim kami",
    "Shot menggunakan Iphone 11 atau kamera",
  ];
  const PackageProfesional = [
    "50 desain feed Instagram",
    "10 video reels",
    "2 Tallent",
    "1 Video Promosi Menggunakan Drone",
    "Jangkauan audiens 10.000 orang",
  ];
  const PackageMedium = [
    "50 desain feed Instagram",
    "5 video reels",
    "Unlimited foto destinasi wisata",
    "1 Tallent",
    "Pengelolaan media sosial untuk 1 platform",
  ];
  return (
    <>
      <Header />
      <Carousellogo />
      {/* Section Layanan */}
      <div className="mt-10">
        <TitleSection
          section="Layanan"
          sectionHead="Solusi Pembuatan Konten Kreatif"
          describe="Kami menyediakan layanan yang mencakup pembuatan konten kreatif dan manajemen media sosial, dirancang untuk mendukung pertumbuhan Pariwisata Indonesia"
        />
        <div className="flex gap-4 flex-wrap justify-center mt-7">
          <CardService
            backgroundColor="bg-black"
            imageSrc={images.conten_creative}
            title="Konten Kreatif"
            description="Kami membantu mempromosikan sektor pariwisata dengan menciptakan konten yang menarik dan efektif untuk memikat lebih banyak pengunjung."
            hoverBgColor="bg-primary"
            width="md:w-[397px]  s:w-[320px] s:h-auto md:h-[350px]"
            textColor="text-basic_white"
            animationDuration="500"
          />
          <CardService
            backgroundColor="bg-secondary"
            imageSrc={images.ads}
            title="Iklan Media Sosial"
            description="Layanan periklanan kami dirancang untuk menjangkau audiens yang lebih luas dengan kampanye iklan yang tepat sasaran dan efektif."
            hoverBgColor="bg-primary"
            width="md:w-[397px]  s:w-[320px] s:h-auto md:h-[350px]"
            textColor="text-basic_white"
            animationDuration="1000"
          />
          <CardService
            backgroundColor="bg-black"
            imageSrc={images.manage}
            title="Kelola Sosial Media"
            description="Layanan ini membantu Anda membangun brand awareness, meningkatkan engagement, dan mempertahankan hubungan dengan audiens secara efektif."
            hoverBgColor="bg-primary"
            width="md:w-[397px]  s:w-[320px] s:h-auto md:h-[350px]"
            textColor="text-basic_white"
            animationDuration="1500"
          />
        </div>
      </div>

      {/* Section About  */}
      <About/>

      {/*Section Price  */}
      <div className=" mt-10 w-full  md:px-20 s:px-10">
        <TitleSection
          section="Harga"
          sectionHead="Pilihan Paket Layanan Kami"
          describe="Pilih paket yang paling sesuai dengan tujuan dan anggaran Anda untuk mendapatkan hasil maksimal."
        />
  
        <div className="flex flex-wrap s:gap-3 md:gap-5 justify-center s:items-center mt-7"
        >
          <Price
            ClassBg="bg-black"
            Title="Standard"
            Caption="Paket ini dirancang memperkenalkan destinasi wisata dengan konten visual yang estetik dan menarik. untuk menarik perhatian calon pengunjung melalui gambar dan video yang menonjolkan keindahan alam."
            Price="Rp1.500.000"
            ListCard={PackageStandard}
            bgButton="bg-primary"
            hoverBgColor="hover:bg-hover_primary"
            bgList="bg-primary"
            animationDuration="500"
          />
          <Price
            ClassBg="bg-gradient-to-t from-cyan-600 to-blue-800"
            Title="Profesisonal"
            Caption="Dirancang untuk bisnis pariwisata yang ingin memperkuat brand dan meningkatkan konversi pengunjung secara signifikan. Menyajikan strategi pemasaran visual yang terarah dan kreatif."
            Price="Rp5.000.000"
            ListCard={PackageProfesional}
            bgButton="bg-secondary"
            hoverBgColor="hover:bg-hover_secondary"
            bgList="bg-secondary"
            animationDuration="1000"
          />
          <Price
            ClassBg="bg-black"
            Title="Medium"
            Caption="Untuk meningkatkan views dan interaksi yang relate dengan audiens. Ideal untuk membangun brand awareness dan menjadikan destinasi wisata semakin menarik dengan konten visual sinematik"
            Price="Rp3.000.000"
            ListCard={PackageMedium}
            bgButton="bg-primary"
            hoverBgColor="hover:bg-hover_primary"
            bgList="bg-primary"
            animationDuration="1500"
          />
        </div>
      </div>

      {/* Section Footer */}
      <Footer />
    </>
  );
};
