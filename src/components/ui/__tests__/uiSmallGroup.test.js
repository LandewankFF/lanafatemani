import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";


import {
    List,
    Navigation,
    TitleSection,
    ListPakage,
    Price,
} from "../uiSmallGroup";

describe("Komponen List", () => {
    it("menampilkan ikon dan teks dengan benar", () => {
        render(<List icon="home" text="Home" />);

        // Memastikan teks ditampilkan
        expect(screen.getByText("Home")).toBeInTheDocument();

        // Memastikan elemen <ion-icon> dirender
        const iconElement = document.querySelector('ion-icon[name="home"]');
        expect(iconElement).toBeInTheDocument();
    });
});

describe("Komponen Navigasi", () => {
    it("menampilkan link dan teks dengan benar", () => {
        render(
            <Router>
                <Navigation text="Go Home" path="/home" />
            </Router>
        );
        expect(screen.getByText("Go Home")).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Go Home" })).toHaveAttribute(
            "href",
            "/home"
        );
    });
});

describe("Komponen TitleSection", () => {
    it("menampilkan section, sectionHead, dan deskripsi dengan benar", () => {
        render(
            <TitleSection
                section="Judul"
                sectionHead="Selamat Datang"
                describe="Masukan deskripsi"
            />
        );
        expect(screen.getByText("Judul")).toBeInTheDocument();
        expect(screen.getByText("Selamat Datang")).toBeInTheDocument();
        expect(screen.getByText("Masukan deskripsi")).toBeInTheDocument();
    });
});

describe("Komponen ListPakage", () => {
    it("menampilkan ikon dan teks dengan benar", () => {
        render(<ListPakage icon="checkmark" text="nomer" />);

        // Memastikan teks ditampilkan
        expect(screen.getByText("nomer")).toBeInTheDocument();

        // Memastikan elemen <ion-icon> dengan atribut name="checkmark" dirender
        const iconElement = document.querySelector('ion-icon[name="checkmark"]');
        expect(iconElement).toBeInTheDocument();
    });
});

describe("Komponen Price", () => {
    const mockListCard = ["Standard", "Profesisonal", "Medium"];
    it("menampilkan detail harga dan daftar fitur dengan benar", () => {
        render(
            <Price
                ClassBg="bg-blue-500"
                Title="Basic Plan"
                Caption="konten visual yang estetik dan menarik."
                Price="Rp1,500,000"
                ListCard={mockListCard}
                bgButton="bg-green-500"
                hoverBgColor="hover:bg-green-600"
                bgList="bg-yellow-500"
                animationDuration="1000"
            />
        );

        // Test Title, Caption, dan Price rendering
        expect(screen.getByText("Basic Plan")).toBeInTheDocument();
        expect(screen.getByText("konten visual yang estetik dan menarik.")).toBeInTheDocument();
        expect(screen.getByText("Rp1,500,000")).toBeInTheDocument();

        // Test ListCard rendering
        mockListCard.forEach((item) => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });

        // Test button rendering
        expect(screen.getByText("Pesan Sekarang")).toBeInTheDocument();
    });
});
