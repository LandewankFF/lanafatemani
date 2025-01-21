import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../About";
import "@testing-library/jest-dom";

describe("Komponen About", () => {
  it("merender komponen About tanpa error", () => {
    const { container } = render(<About />);
    expect(container).toBeInTheDocument();
  });

  it("merender tombol 'Tentang Kami'", () => {
    render(<About />);
    const buttonElement = screen.getByText("Tentang Kami");
    expect(buttonElement).toBeInTheDocument();
  });

  it("merender heading utama dengan teks 'Jasa Periklanan dan Penyedia Konten Kreatif'", () => {
    render(<About />);
    const headingElement = screen.getByText("Jasa Periklanan dan Penyedia Konten Kreatif");
    expect(headingElement).toBeInTheDocument();
  });

  it("merender deskripsi utama", () => {
    render(<About />);
    const descriptionElement = screen.getByText(
      /Meningkatkan eksposur dan daya tarik produk melalui layanan periklanan dan konten kreatif yang inovatif/i
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  it("merender tiga fitur utama", () => {
    render(<About />);

    const feature1 = screen.getByText("Pembuatan Konten Visual");
    const feature2 = screen.getByText("Tim Ahli dan Profesional");
    const feature3 = screen.getByText("Mengoptimalkan Periklanan");

    expect(feature1).toBeInTheDocument();
    expect(feature2).toBeInTheDocument();
    expect(feature3).toBeInTheDocument();
  });

  it("merender deskripsi untuk setiap fitur utama", () => {
    render(<About />);

    const description1 = screen.getByText(
      /Kami menyediakan layanan pembuatan konten visual yang mencakup fotografi, videografi, dan desain grafis/i
    );
    const description2 = screen.getByText(
      /Kami didukung oleh tim yang terdiri orang yang berpengalaman di bidang Photographer,Videographer, Editor, Social Media Specialist/i
    );
    const description3 = screen.getByText(
      /Kami mengembangkan strategi periklanan yang berbasis data dan analisis untuk mencapai hasil yang maksimal/i
    );

    expect(description1).toBeInTheDocument();
    expect(description2).toBeInTheDocument();
    expect(description3).toBeInTheDocument();
  });

  it("merender gambar tentang kami", () => {
    render(<About />);
    const imageElement = screen.getByRole("img", { name: "image-left" }); 
    expect(imageElement).toBeInTheDocument();
  });
});
