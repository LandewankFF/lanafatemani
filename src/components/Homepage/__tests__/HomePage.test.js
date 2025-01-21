import React from "react";
import { render, screen } from "@testing-library/react";
import { Homepage } from "../Homepage";
import "@testing-library/jest-dom";

// Mock komponen yang diimpor di Homepage
jest.mock("../../ui/Header", () => () => <header data-testid="header">Header</header>);
jest.mock("../../Portfolio Video/Carousellogo", () => () => <div data-testid="carousel-logo">Carousel Logo</div>);
jest.mock("../About", () => () => <section data-testid="about-section">About Section</section>);
jest.mock("../../ui/Footer", () => () => <footer data-testid="footer">Footer</footer>);
jest.mock("../../ui/uiSmallGroup", () => ({
  TitleSection: ({ section, sectionHead }) => (
    <div data-testid={`title-section-${section}`}>
      <h2>{sectionHead}</h2>
    </div>
  ),
  Price: ({ Title, Price }) => (
    <div data-testid={`price-${Title}`}>
      <h3>{Title}</h3>
      <p>{Price}</p>
    </div>
  ),
}));
jest.mock("../../ui/CardService", () => ({ title }) => (
  <div data-testid={`card-service-${title}`}>
    <h3>{title}</h3>
  </div>
));
jest.mock("../../../assets/images/images", () => ({
  conten_creative: "content-creative.png",
  ads: "ads.png",
  manage: "manage.png",
}));

describe("Komponen Homepage", () => {
  it("menampilkan komponen Header", () => {
    render(<Homepage />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("menampilkan Carousel Logo", () => {
    render(<Homepage />);
    expect(screen.getByTestId("carousel-logo")).toBeInTheDocument();
  });

  it("menampilkan TitleSection untuk Layanan", () => {
    render(<Homepage />);
    const titleSection = screen.getByTestId("title-section-Layanan");
    expect(titleSection).toBeInTheDocument();
    expect(titleSection).toHaveTextContent("Solusi Pembuatan Konten Kreatif");
  });

  it("menampilkan komponen CardService", () => {
    render(<Homepage />);
    const cardCreative = screen.getByTestId("card-service-Konten Kreatif");
    const cardAds = screen.getByTestId("card-service-Iklan Media Sosial");
    const cardManage = screen.getByTestId("card-service-Kelola Sosial Media");
    expect(cardCreative).toBeInTheDocument();
    expect(cardAds).toBeInTheDocument();
    expect(cardManage).toBeInTheDocument();
  });

  it("menampilkan bagian About", () => {
    render(<Homepage />);
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
  });

  it("menampilkan TitleSection untuk Harga", () => {
    render(<Homepage />);
    const titleSection = screen.getByTestId("title-section-Harga");
    expect(titleSection).toBeInTheDocument();
    expect(titleSection).toHaveTextContent("Pilihan Paket Layanan Kami");
  });

  it("menampilkan komponen Price untuk semua paket", () => {
    render(<Homepage />);
    const priceStandard = screen.getByTestId("price-Standard");
    const priceProfessional = screen.getByTestId("price-Profesisonal");
    const priceMedium = screen.getByTestId("price-Medium");
    expect(priceStandard).toBeInTheDocument();
    expect(priceStandard).toHaveTextContent("Rp1.500.000");
    expect(priceProfessional).toBeInTheDocument();
    expect(priceProfessional).toHaveTextContent("Rp5.000.000");
    expect(priceMedium).toBeInTheDocument();
    expect(priceMedium).toHaveTextContent("Rp3.000.000");
  });

  it("menampilkan komponen Footer", () => {
    render(<Homepage />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
