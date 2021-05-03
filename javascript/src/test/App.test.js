import React from "react";
import { render } from "@testing-library/react";
import App from "main/App";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("App tests", () => {
  test("renders without crashing", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    const brand = getByTestId("brand");
    expect(brand).toBeInTheDocument();
  });
});
