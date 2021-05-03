import React from "react";
import { render } from "@testing-library/react";
import AboutPage from "main/pages/AboutPage";

describe("AboutPage tests", () => {
  test("renders without crashing", () => {
    render(<AboutPage />);
  });
});
