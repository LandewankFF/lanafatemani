import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent} from "@testing-library/react";
import Header from "../Header";
import { MemoryRouter } from "react-router-dom";


jest.mock("../../../assets/images/HomeImages", () => ({
  food: "path/to/food.jpg",
  culture: "path/to/culture.jpg",
  island: "path/to/island.jpg",
}));

describe("Komponen Header", () => {
  beforeEach(() => {
    global.open = jest.fn(); // Mock untuk `window.open`
  });

  afterEach(() => {
    jest.clearAllMocks(); // Membersihkan mock setelah setiap pengujian
  });

  it("merender komponen Header dengan benar", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Test jika Navbar dirender
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    // Test teks utama
    expect(
      screen.getByText(/Selamat Datang di Lanafa Temani/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Promosi Pariwisata Kreatif dengan Konten Berkualitas/i)
    ).toBeInTheDocument();

    // Test teks deskripsi
    expect(
      screen.getByText(
        /Jasa iklan dan pembuatan konten kreatif untuk pariwisata/i
      )
    ).toBeInTheDocument();
  });

  it("merender dan berfungsi dengan benar", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const blockquoteText = screen.getByText(/Jasa iklan dan pembuatan konten kreatif untuk pariwisata/i);
    expect(blockquoteText).toBeInTheDocument();
  });

  it("merender tombol 'Hubungi Kami' dengan benar", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
// Cari tombol berdasarkan aria-label
    const button = screen.getByRole("button", { name: "hubungi-kami" });

    // Pastikan tombol ditemukan
    expect(button).toBeInTheDocument();

    // Simulasikan klik tombol dan pastikan efeknya
    fireEvent.click(button);
    expect(global.open).toHaveBeenCalledWith(
      "https://wa.me/081227615859",
      "_blank"
    );
  });
});
