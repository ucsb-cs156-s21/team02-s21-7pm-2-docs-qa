import React from "react";
import { render, waitFor } from "@testing-library/react";
import CountrySelector from "main/components/CountryCodes/CountrySelector";
import countryCodeFixtures from "fixtures/countryCodeFixtures";
import userEvent from "@testing-library/user-event";

// This fixes the "TypeError: document.createRange is not a function" error
// https://github.com/mui-org/material-ui/issues/15726#issuecomment-493124813
global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: "BODY",
    ownerDocument: document,
  },
});

describe("CountrySelector tests", () => {
  test("renders without crashing", () => {
    render(<CountrySelector countries={[]} />);
  });

  test("when given a list with just United States in it, United States can be selected", async () => {
    const { getByTestId, getByText } = render(
      <CountrySelector countries={countryCodeFixtures.oneCountry} />
    );
    const countrySelector = getByTestId("country-selector");
    expect(countrySelector).toBeInTheDocument();
    userEvent.click(countrySelector);

    await waitFor(() => {
      getByText("United States of America");
    });
  });
});
