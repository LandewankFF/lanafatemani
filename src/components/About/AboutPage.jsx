import React from 'react'
import HeaderNav from '../ui/HeaderNav'
import CardService from '../ui/CardService'
import images from "../../assets/images/images"
import Footer from "../ui/Footer"
import About from '../Homepage/About'


const AboutPage = () => {
  return (
    <div>
        <HeaderNav
          Title="Tentang kami"
          Caption="Kami hadir untuk mengoptimalkan potensi pariwisata dan ekonomi kreatif Indonesia melalui konten visual dan strategi iklan inovatif. Dengan pendekatan yang berfokus pada teknologi informasi dan media sosial. kami membantu memperluas jangkauan produk dan destinasi, menciptakan peluang kerja, dan mendukung pertumbuhan ekonomi berbasis masyarakat lokal."
        />
        <div className="flex s:px-5 md:px-20 justify-center flex-wrap">
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
        </div>
        <About/>
        <Footer/>
    </div>
  )
}

export default AboutPage