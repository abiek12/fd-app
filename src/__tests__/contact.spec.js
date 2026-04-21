import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

describe("Contact Us Page Test Cases", () => {
  test("Should load about-us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load input name inside the contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(1);
  });
});
