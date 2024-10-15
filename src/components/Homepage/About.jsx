import React from "react";
import { Button } from "../ui/Button";
import images from "../../assets/images/images";

const About = () => {
  return (
    <div className=" flex gap-5 md:px-20 s:px-5 mt-10">
      {/* Image */}
      <div className="w-1/2 flex justify-center flex-wrap ">
        <div className="w-[450px]">
          <img src={images.about} alt="" />
        </div>
      </div>

      {/* Describe About */}
      <div className=" w-1/2 ">
        <div className="mb-4 ">
          <Button
            hoverBgColor="hover:bg-hover_secondary"
            text="Tentang Kami"
            bgColor="bg-secondary text-basic_white "
          />
        </div>

        <div className="mb-3">
          <h1 className="text-4xl text-hover_primary">
            Jasa Periklanan dan Penyedia Konten Kreatif
          </h1>
          <blockquote>
            Meningkatkan eksposur dan daya tarik produk  melalui layanan
            periklanan dan konten kreatif yang inovatif
          </blockquote>
        </div>

        <div className="">
          <div className="">
            <div className="flex items-start gap-4 ">
              <div className="rounded-full bg-primary inline-flex p-1  text-2xl text-basic_white">
                <ion-icon name="checkmark-outline"></ion-icon>
              </div>
              <div className="">
                <h2 className="font-semibold"> Pembuatan Konten Visual</h2>
                <blockquote>
                  Kami menyediakan layanan pembuatan konten visual yang mencakup
                  fotografi, videografi, dan desain grafis.
                </blockquote>
              </div>
            </div>
            <div className="flex items-start gap-4 ">
              <div className="rounded-full bg-primary inline-flex p-1  text-2xl text-basic_white">
                <ion-icon name="checkmark-outline"></ion-icon>
              </div>
              <div className="">
                <h2 className="font-semibold"> Tim Ahli dan Profesional</h2>
                <blockquote>
                  Kami didukung oleh tim yang terdiri orang yang berpengalaman
                  di bidang Photographer,Videographer, Editor, Social Media
                  Specialist.
                </blockquote>
              </div>
            </div>
            <div className="flex items-start gap-4 ">
              <div className="rounded-full bg-primary inline-flex p-1  text-2xl text-basic_white">
                <ion-icon name="checkmark-outline"></ion-icon>
              </div>
              <div className="">
                <h2 className="font-semibold"> Mengoptimalkan Periklanan</h2>
                <blockquote>
                  Kami mengembangkan strategi periklanan yang berbasis data dan
                  analisis untuk mencapai hasil yang maksimal.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
