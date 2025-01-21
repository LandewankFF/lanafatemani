import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Video } from "../Video"; 
import "@testing-library/jest-dom"; 

describe("Komponen Video", () => {
    it("merender iframe YouTube dengan benar", () => {
      render(<Video />);
  
      // Memastikan iframe YouTube ada di dokumen
      const iframe = screen.getByTitle("YouTube video player");
      expect(iframe).toBeInTheDocument(); 
      expect(iframe).toHaveAttribute(
        "src",
        "https://www.youtube.com/embed/Q3IsQbupN6M"
      ); // Memastikan src iframe sesuai
    });
  
    it("merender tombol dengan benar dan membuka URL yang sesuai saat diklik", () => {
        // Mock window.open untuk menghindari membuka jendela baru selama pengujian
        const mockOpen = jest.fn();
        global.open = mockOpen;
    
        render(<Video />);
    
        // Cari tombol berdasarkan teks
        const button = screen.getByText("Lihat Selengkapnya");
        expect(button).toBeInTheDocument(); // Memastikan tombol ada di dokumen
    
        // Simulasikan klik pada tombol
        fireEvent.click(button);
    
        // Memastikan window.open dipanggil dengan URL yang benar
        expect(mockOpen).toHaveBeenCalledWith("https://www.youtube.com/watch?v=Q3IsQbupN6M", "_blank");
      });
  
    it("merender konten teks dengan benar", () => {
      render(<Video />);
  
      const heading = screen.getByText("Video Promosi Wisata Kabupaten Banyumas");
      expect(heading).toBeInTheDocument(); // Memastikan heading ada di dokumen
  
      const blockquote = screen.getByText(/Lanafa Temani mempersembahkan keindahan Banyumas/);
      expect(blockquote).toBeInTheDocument(); // Memastikan blokquote ada di dokumen
    });
  });