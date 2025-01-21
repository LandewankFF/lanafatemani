import Carousellogo from "../Carousellogo"; 
import { render, screen } from "@testing-library/react";
import Partner from "../../../assets/images/logo/Partner";
import "@testing-library/jest-dom";

// Mock gambar Partner
jest.mock("../../../assets/images/logo/Partner", () => ({
  Barbekuy: "path/to/Barbekuy.png",
  Niamara: "path/to/Niamara.png",
  Daisy: "path/to/Daisy.png",
  Gabut: "path/to/Gabut.png",
  Soluskill: "path/to/Soluskill.png",
  Autobricc: "path/to/Autobricc.png",
  Zendo: "path/to/Zendo.png",
  SandaranSakti: "path/to/SandaranSakti.png"
}));

describe("Komponen Carousellogo", () => {
  test("menampilkan jumlah logo yang sesuai", () => {
    render(<Carousellogo />);

    // Menghitung jumlah gambar di dalam komponen
    const images = screen.getAllByRole("img");
    
    // Pastikan ada 16 gambar, karena kita menduplikat array logo (8 * 2)
    expect(images).toHaveLength(16);
  });

  test("menampilkan logo dari objek Partner", () => {
    render(<Carousellogo />);

    // Memeriksa setiap logo berdasarkan nama yang ada di Partner
    Object.values(Partner).forEach((logo, index) => {
      expect(screen.getByAltText(`Logo ${index + 1}`)).toBeInTheDocument();
    });
  });

  test("memiliki class animasi yang benar", () => {
    const { container } = render(<Carousellogo />);
    
    // Cari div yang memiliki class animate-slide untuk memastikan animasi berjalan
    const animationContainer = container.querySelector(".animate-slide");
    expect(animationContainer).toBeInTheDocument();
    expect(animationContainer).toHaveClass("animate-slide");
  });
});
