import React from "react";
import { Button } from "../ui/Button";
import VideoGallery from "./VideoGallery";

export const Video = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-10 px-5 md:px-20">
      {/* Content left */}
      <div
        className="w-full md:w-1/2"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <iframe
          className="rounded-lg overflow-hidden w-full h-60 sm:h-72 md:h-80"
          src="https://www.youtube.com/embed/Q3IsQbupN6M"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* Content right */}
      <div
        className="w-full md:w-1/2"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <div className="flex flex-col h-full justify-center">
          <div className="">
            <h2 className="text-2xl sm:text-3xl font-bold text-hover_secondary mb-5">
              Video Promosi Wisata Kabupaten Banyumas
            </h2>
          </div>
          <div className="">
            <blockquote className="text-justify mb-5">
              Lanafa Temani mempersembahkan keindahan Banyumas: sebuah karya
              visual yang menyoroti keindahan alam dan pemandangan kota dari
              Menara Teratai. Yuk, kunjungi Banyumas dan ciptakan kenangan yang
              tak terlupakan!
            </blockquote>
          </div>
          <div className="">
            <Button
              hoverBgColor="hover:bg-hover_secondary"
              text="Lihat Selengkapnya"
              bgColor="bg-secondary text-white"
              onClick={() => window.open("https://www.youtube.com/watch?v=Q3IsQbupN6M", "_blank")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const VideoSosmed = () => {
  const videoSources = [
    'https://www.tiktok.com/embed/7390328198417943815',
    'https://www.tiktok.com/embed/7393163089987915016',
    'https://www.tiktok.com/embed/7361293925224680710',
    'https://www.tiktok.com/embed/7349473315825732870',
    'https://www.instagram.com/reel/C9msSRGpR-O/embed',
    'https://www.instagram.com/reel/C9eHGkAy2Li/embed',
  ];

  return (
    <div>
      <VideoGallery sources={videoSources} />
    </div>
  )
}