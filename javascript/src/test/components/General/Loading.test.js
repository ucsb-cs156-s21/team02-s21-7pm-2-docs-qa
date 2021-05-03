import React from "react";
import { render } from "@testing-library/react";
import Loading from "main/components/General/Loading";

describe("Loading tests", () => {
  test("it should render without crashing and show the image", () => {
    render(<Loading />);
  });
});
