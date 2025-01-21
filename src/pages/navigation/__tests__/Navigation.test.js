import React from "react";
import { render } from "@testing-library/react";
import About from "../About";
import HomePage from "../Home";
import { Portfolio } from "../PortfolioVideo"
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Navigation Test", () => {
  it("merender komponen About tanpa error", () => {
    const { container } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    // Memastikan komponen About dirender tanpa error
    expect(container).toBeInTheDocument();
  });
  it("merender Home About tanpa error", () => {
      const { container } = render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      );
  
      // Memastikan komponen About dirender tanpa error
      expect(container).toBeInTheDocument();
    });

   it("merender portfolio tanpa error", () => {
  const { container } = render(
    <MemoryRouter>
      <Portfolio /> 
    </MemoryRouter>
  );

  expect(container).toBeInTheDocument();
});
});
