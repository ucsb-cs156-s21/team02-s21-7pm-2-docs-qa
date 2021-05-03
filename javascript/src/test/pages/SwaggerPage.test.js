import React from "react";
import { render } from "@testing-library/react";
import SwaggerPage from "main/pages/SwaggerPage";

describe("SwaggerPage tests", () => {
  test("renders without crashing", () => {
    render(<SwaggerPage />);
  });
});
