import React from "react";
import { render } from "@testing-library/react";
import HomePage from "main/pages/HomePage";

describe("HomePage tests", () => {
  test("renders without crashing", () => {
    render(<HomePage />);
  });
});
