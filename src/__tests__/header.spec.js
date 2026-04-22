import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/Header";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";

describe("Header component test cases:", () => {
  it("Should load header component with all items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  });
});
