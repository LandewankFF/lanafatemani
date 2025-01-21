import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Footer";
import "@testing-library/jest-dom";

describe("Komponen Footer", () => {
  it("menampilkan logo dengan teks alt yang benar", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const logo = screen.getByAltText("Lanafa Temani Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", expect.stringContaining("logo.png"));
  });

  it("menampilkan detail kontak dengan benar", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByText("Banyumas, West Java, Indonesia")).toBeInTheDocument();
    expect(screen.getByText("lanafatemani@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("(+62) 812-2761-5859")).toBeInTheDocument();
  });

  it("menampilkan tautan navigasi di bagian 'Halaman'", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const links = ["Beranda", "Portfolio", "Service", "Tentang Kami"];
    links.forEach((linkText) => {
      expect(screen.getByText(linkText)).toBeInTheDocument();
    });
  });

  it("menampilkan tautan navigasi di bagian 'Kategori'", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const categories = ["Destinasi Wisata", "Kuliner", "Budaya", "Souvenir"];
    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it("menampilkan tautan media sosial dengan URL yang benar", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // Tes tautan WhatsApp
    const whatsappLink = screen.getByRole("link", { name: /whatsapp/i });
    expect(whatsappLink).toHaveAttribute("href", "https://wa.me/081227615859");

    // Tes tautan Instagram
    const instagramLink = screen.getByRole("link", { name: /instagram/i });
    expect(instagramLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/lanafatemani/"
    );

    // Tes tautan TikTok
    const tiktokLink = screen.getByRole("link", { name: /tiktok/i });
    expect(tiktokLink).toHaveAttribute(
      "href",
      "https://www.tiktok.com/@lanafatemani"
    );

    // Tes tautan YouTube
    const youtubeLink = screen.getByRole("link", { name: /youtube/i });
    expect(youtubeLink).toHaveAttribute(
      "href",
      "https://www.youtube.com/@LanafaTemani"
    );
  });
});