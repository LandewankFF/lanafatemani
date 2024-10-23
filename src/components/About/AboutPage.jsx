import React from "react";
import HeaderNav from "../ui/HeaderNav";
import CardService from "../ui/CardService";
import images from "../../assets/images/images";
import Footer from "../ui/Footer";
import About from "../Homepage/About";
import { TitleSection } from "../ui/uiSmallGroup";

const AboutPage = () => {
  return (
    <div>
      <HeaderNav
        Title="Tentang kami"
        Caption="Kami hadir untuk mengoptimalkan potensi pariwisata dan ekonomi kreatif Indonesia melalui konten visual dan strategi iklan inovatif. Dengan pendekatan yang berfokus pada teknologi informasi dan media sosial. kami membantu memperluas jangkauan produk dan destinasi, menciptakan peluang kerja, dan mendukung pertumbuhan ekonomi berbasis masyarakat lokal."
      />
      <section className="flex s:px-5 md:px-20 justify-center flex-wrap mt-10">
        <CardService
          backgroundColor="none"
          imageSrc={images.tourism}
          title="Wisata"
          description="Kami berfokus pada promosi destinasi wisata dan dan melihatkan keindahan alam serta budaya yang autentik melalui konten visual. "
          hoverBgColor=""
          width="md:w-[250px]  s:w-[320px] s:h-auto md:h-[350px]"
          textColor="text-black"
        />
        <CardService
          backgroundColor="none"
          imageSrc={images.culinary}
          title="Kuliner"
          description="Kami mendukung promosi kuliner lokal dengan konten yang menggugah selera, memperkenalkan kelezatan dan keunikan hidangan kepada wisatawan."
          hoverBgColor=""
          width="md:w-[250px]   s:w-[320px] s:h-auto md:h-[350px]"
          textColor="text-black"
        />
        <CardService
          backgroundColor="none"
          imageSrc={images.dance}
          title="Budaya"
          description="KKami mengangkat keunikan budaya lokal memperkenalkan tradisi dan kesenian kepada audiens yang lebih luas."
          hoverBgColor=""
          width="md:w-[250px] s:w-[320px] s:h-auto md:h-[350px]"
          textColor="text-black"
        />
        <CardService
          backgroundColor="none"
          imageSrc={images.souvenir}
          title="Souvenir"
          description="Kami membantu mempromosikan produk souvenir khas, memperluas jangkauan pasar dan menarik minat wisatawan dengan konten yang kreatif."
          hoverBgColor=""
          width="md:w-[250px] s:w-[320px] s:h-auto md:h-[350px]"
          textColor="text-black"
        />
      </section>

      {/* Section About */}
      <section>
        <About />
      </section>
      {/* end Section About */}

      {/* Section Team */}
      <section>
        <div className="md:px-20 s:px-5">
          <div className="mt-10">
            <TitleSection
              section="Tim Kami"
              sectionHead="Profesional di Bidangnya"
            />
          </div>

          <div className="flex gap-8 justify-center flex-wrap">
            {/* Data anggota tim */}
            {[
              {
                name: "Landewank FF",
                title: "Konten Kreator",
                image: images.teamLff,
                instagram: "https://www.instagram.com/landewank13/",
                linkedin:
                  "https://www.linkedin.com/in/landewank-fahreza-firdaus/",
              },
              {
                name: "Triana Umi M",
                title: "Spesialis Media Sosial",
                image: images.teamLff,
                instagram: "https://www.instagram.com/trianafa28/",
                linkedin: "https://www.linkedin.com/in/member2/",
              },
              {
                name: "Asyafa Ditra AH",
                title: "Spesialis IT",
                image: images.teamLff,
                instagram: "https://www.instagram.com/deetra_02/",
                linkedin: "https://www.linkedin.com/in/member3/",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="w-[300px] h-auto rounded-xl shadow-custom pb-5">
                
                <div className="w-auto h-[400px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="">
                  <div className="flex flex-col items-center">
                    <h1 className="text-xl font-bold">{member.name}</h1>
                    <span className="text-slate-400">{member.title}</span>
                  </div>
                  <div className="flex gap-3 justify-center mt-2">
                    <div className="text-2xl">
                      <a href={member.instagram}>
                        <ion-icon name="logo-instagram"></ion-icon>
                      </a>
                    </div>
                    <div className="text-2xl">
                      <a href={member.linkedin}>
                        <ion-icon name="logo-linkedin"></ion-icon>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Section Team */}

      <Footer />
    </div>
  );
};

export default AboutPage;
