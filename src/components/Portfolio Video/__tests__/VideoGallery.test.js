import React from "react";
import { render, screen } from "@testing-library/react";
import VideoGallery from "../VideoGallery";
import "@testing-library/jest-dom";


describe("Komponen VideoGallery", () => {
  it("merender semua iframe dengan sumber video yang benar", () => {
    const videoSources = [
      "https://www.tiktok.com/embed/7390328198417943815",
      "https://www.tiktok.com/embed/7393163089987915016",
      "https://www.tiktok.com/embed/7361293925224680710",
      "https://www.tiktok.com/embed/7349473315825732870",
      "https://www.instagram.com/reel/C9msSRGpR-O/embed",
      "https://www.instagram.com/reel/C9eHGkAy2Li/embed",
    ];

    render(<VideoGallery sources={videoSources} />);

    // Memastikan semua iframe dirender dengan benar
    videoSources.forEach((source, index) => {
      const iframe = screen.getByTitle(`Portfolio Video ${index + 1}`);
      expect(iframe).toBeInTheDocument();
      expect(iframe).toHaveAttribute("src", source);
    });
  });
});
