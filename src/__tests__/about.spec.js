import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("Should load about-us component", () => {
  render(<About />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
