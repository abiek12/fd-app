import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

test("Should load about-us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
