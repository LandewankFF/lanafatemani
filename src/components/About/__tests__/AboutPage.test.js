import React from "react";
import { render, screen } from "@testing-library/react";
import AboutPage from "../AboutPage";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe("Komponen AboutPage", () => {
  it("merender HeaderNav dengan judul dan keterangan yang benar", () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );

    const titleElement = screen.getByText("Tentang kami");
    const captionElement = screen.getByText(
      /Kami hadir untuk mengoptimalkan potensi pariwisata/i
    );

    expect(titleElement).toBeInTheDocument();
    expect(captionElement).toBeInTheDocument();
  });

  it("merender semua komponen CardService", () => {
    const cardData = [
      { title: "Wisata", description: "Deskripsi untuk Wisata" },
      { title: "Kuliner", description: "Deskripsi untuk Kuliner" },
      { title: "Budaya", description: "Deskripsi untuk Budaya" },
      { title: "Souvenir", description: "Deskripsi untuk Souvenir" },
    ];
  
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );
  
    // Memeriksa apakah setiap judul CardService dirender dengan benar
    cardData.forEach((card) => {
      const cardTitles = screen.getAllByText(card.title);
      // Memastikan ada setidaknya satu elemen dengan judul card
      expect(cardTitles.length).toBeGreaterThan(0); 
    });
  });

  it("merender bagian Tentang kami", () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );
  
    // Mencari teks "Tentang kami" dalam bagian atau elemen tertentu
    const aboutSection = screen.getByRole('heading', { name: /Tentang kami/i });
    expect(aboutSection).toBeInTheDocument();
  });

  it("merender bagian Tim dengan anggota tim", () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );

    const teamSectionTitle = screen.getByText("Tim Kami");
    expect(teamSectionTitle).toBeInTheDocument();

    const teamMembers = [
      { name: "Landewank FF", title: "Konten Kreator" },
      { name: "Triana Umi M", title: "Spesialis Media Sosial" },
      { name: "Asyafa Ditra AH", title: "Spesialis IT" },
    ];

    teamMembers.forEach((member) => {
      expect(screen.getByText(member.name)).toBeInTheDocument();
      expect(screen.getByText(member.title)).toBeInTheDocument();
    });
  });
});
