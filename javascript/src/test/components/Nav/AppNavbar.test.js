import React from "react";
import { render } from "@testing-library/react";
import AppNavbar from "main/components/Nav/AppNavbar";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("AppNavbar tests", () => {
  test("should render the correct brand text and link to home page", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <AppNavbar />
      </Router>
    );
    const brandElement = getByText(/CMPSC156 team02/);
    expect(brandElement).toBeInTheDocument();
    expect(brandElement.href).toBe("http://localhost/");
  });

  test("should have the correct links in the navbar", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <AppNavbar />
      </Router>
    );

    const userInfoLink = getByText(/About/);
    expect(userInfoLink.href).toMatch("/about");

    const earthquakesLink = getByText(/Earthquakes/);
    expect(earthquakesLink.href).toMatch("/earthquakes");

    const locationsLink = getByText(/Locations/);
    expect(locationsLink.href).toMatch("/locations");

    const swaggerLink = getByText(/Swagger/);
    expect(swaggerLink.href).toMatch("/swagger");
  });
});
