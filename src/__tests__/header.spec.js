import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/Header";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

describe("Header component test cases:", () => {
  beforeAll(() => {
    console.log("Before all");
  });

  beforeEach(() => {
    console.log("Before each");
  });

  afterAll(() => {
    console.log("After all");
  });

  afterEach(() => {
    console.log("After each");
  });

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

  it("Should load header component with contact", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const item = screen.getByText("Contact");
    expect(item).toBeInTheDocument();
  });

  it("Should shows the user name on hover profile icon", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const icon = screen.getByTestId("profile-icon");
    fireEvent.mouseEnter(icon);
    expect(screen.getByText("Guest")).toBeInTheDocument();
  });
});
