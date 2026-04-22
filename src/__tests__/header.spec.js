import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/Header";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

describe("Header component test cases:", () => {
  it("Should load header component with all links", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const items = screen.getAllByRole("link");
    expect(items.length).toBe(4);
  });
});
