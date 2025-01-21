import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom"; 
import HeaderNav from "../HeaderNav";


jest.mock("../../../assets/images/images", () => ({
  island: "/mock-image.jpg", 
}));

describe("Komponen HeaderNav", () => {
  it("merender dengan benar dengan Judul dan Caption", () => {
    const mockTitle = "Selamat datang di Surga";
    const mockCaption = "Temukan keindahan pulau ini.";

    render(
      <BrowserRouter>
        <HeaderNav 
          Title={mockTitle} 
          Caption={mockCaption} 
        />
      </BrowserRouter>
    );

    // Assert Navbar dirender
    expect(screen.getByTestId("navbar")).toBeInTheDocument();

    // Assert Judul dirender
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(mockTitle);

    // Assert Caption dirender
    expect(screen.getByText(mockCaption)).toBeInTheDocument();
  });

  it("menerapkan style gambar latar yang benar", () => {
    render(
      <BrowserRouter>
        <HeaderNav Title="Judul Uji" Caption="Caption Uji" />
      </BrowserRouter>
    );

    // Ambil elemen navbar dengan data-testid="navbar"
    const navbarElement = screen.getByTestId("navbar");

    // Assert gambar latar diterapkan dengan benar
    expect(navbarElement).toHaveStyle(`background-image: url(/mock-image.jpg)`);
  });

  it("merender overlay dengan opasitas yang benar", () => {
    render(
      <BrowserRouter>
        <HeaderNav Title="Uji Overlay" Caption="Mengujicoba overlay" />
      </BrowserRouter>
    );

    // Assert elemen overlay ada
    const overlayElement = screen.getByRole("banner").querySelector(".bg-black");
    expect(overlayElement).toHaveClass("opacity-50");
  });
});
