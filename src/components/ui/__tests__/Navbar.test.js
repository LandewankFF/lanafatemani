import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../Navbar";
import '@testing-library/jest-dom';

describe("Komponen Navbar", () => {
    it("merender Navbar tanpa error", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        // Memastikan logo dirender
        expect(screen.getByAltText(/logo lanafa temani/i)).toBeInTheDocument();

        // Memastikan teks "Lanafa Temani" ada
        expect(screen.getByText(/lanafa/i)).toBeInTheDocument();
        expect(screen.getByText(/temani/i)).toBeInTheDocument();
    });

    it("merender tautan navigasi dengan benar", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        // Memastikan semua tautan navigasi ada
        const navLinks = ["Home", "Portfolio Vidio", "About"];
        navLinks.forEach((link) => {
            expect(screen.getByText(link)).toBeInTheDocument();
        });
    });

    it("menambahkan kelas aktif pada tautan navigasi yang aktif", () => {
        render(
            <MemoryRouter initialEntries={["/portfoliovideo"]}>
                <Navbar />
            </MemoryRouter>
        );

        // Memastikan path aktif memiliki kelas "text-secondary"
        const activeLink = screen.getByText("Portfolio Vidio");
        expect(activeLink).toHaveClass("text-secondary");
    });

    it("merender tombol 'Hubungi Kami'", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        // Memastikan logo dirender
        expect(screen.getByAltText(/logo lanafa temani/i)).toBeInTheDocument();

        // Memastikan teks "Lanafa Temani" ada
        expect(screen.getByText(/lanafa/i)).toBeInTheDocument();
        expect(screen.getByText(/temani/i)).toBeInTheDocument();

        // Cari tombol "Hubungi Kami"
        const button = screen.getByRole('button', { name: /hubungi kami/i }); 
        // Klik tombol
        fireEvent.click(button);
    });

    it("menambahkan kelas bg-white pada navbar saat di-scroll", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const navbar = screen.getByRole("navigation");

        // Sebelum scroll
        expect(navbar).not.toHaveClass("bg-white");

        // Simulasi scroll
        fireEvent.scroll(window, { target: { scrollY: 100 } });

        // Setelah scroll
        expect(navbar).toHaveClass("bg-white");
    });
});
