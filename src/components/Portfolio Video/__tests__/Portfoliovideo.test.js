import Portfoliovideo from "../Portfoliovideo"
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Komponen VideoGallery", () => {
    it("merender title dan  caption", () => {
        render(
          <MemoryRouter>
            <Portfoliovideo />
          </MemoryRouter>
        );
    
        // Memverifikasi apakah elemen HeaderNav dirender
        const headerNav = screen.getByTestId("navbar");
        expect(headerNav).toBeInTheDocument();
    
        // Memverifikasi Title "Portfolio Vidio"
        const title = screen.getByTestId("headerNavTitle");
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent("Portfolio Vidio");
    
        // Memverifikasi Caption
        const caption = screen.getByTestId("headerNavCaption");
        expect(caption).toBeInTheDocument();
        expect(caption).toHaveTextContent(
          "Melalui portofolio kami, Anda dapat melihat bagaimana inovasi dan kreativitas menyatu untuk memperkuat sektor pariwisata dan ekonomi kreatif. Kami telah bekerja sama dengan berbagai mitra untuk mengembangkan strategi iklan yang efektif, membantu meningkatkan eksposur dan daya tarik destinasi wisata, serta membangun brand yang kuat."
        );
      });

    it("merender carousellogoTest", () => {
        render(
            <MemoryRouter>
              <Portfoliovideo />
            </MemoryRouter>
          );
    
        const Portfoliogallery = screen.getByTestId('CarousellogoTest')
        expect(Portfoliogallery).toBeInTheDocument()
    })
    
    it("merender Video", () => {
        render(
            <MemoryRouter>
              <Portfoliovideo />
            </MemoryRouter>
          );
    
        const Portfoliogallery = screen.getByTestId('Videotest')
        expect(Portfoliogallery).toBeInTheDocument()
    })
    it("merender Videososmed", () => {
        render(
            <MemoryRouter>
              <Portfoliovideo />
            </MemoryRouter>
          );
        const Portfoliogallery = screen.getByTestId('Videososmed')
        expect(Portfoliogallery).toBeInTheDocument()
    })
    it("merender Footer", () => {
        render(
            <MemoryRouter>
              <Portfoliovideo />
            </MemoryRouter>
          );
    
        const Portfoliogallery = screen.getByTestId('Footer')
        expect(Portfoliogallery).toBeInTheDocument()
    })
})