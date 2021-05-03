import React from "react";
import { render, waitFor } from "@testing-library/react";
import LocationForm from "main/components/Locations/LocationForm";
import userEvent from "@testing-library/user-event";

describe("LocationForm tests", () => {
  const locationErrorMsg = "Location is required";

  test("it renders without crashing", () => {
    render(<LocationForm />);
  });

  test("it has the expected fields", () => {
    const { getByText, getByLabelText } = render(<LocationForm />);
    const locationField = getByLabelText("Location");
    expect(locationField).toBeInTheDocument();

    const submitButton = getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });

  test("it enforces that fields is required", async () => {
    const testCallback = jest.fn();

    const { getByText, getByTestId } = render(
      <LocationForm submitCallback={testCallback} />
    );

    const locationErrorField = getByTestId(/location-errors/i);

    const submitButton = getByText("Submit");

    userEvent.click(submitButton);

    await waitFor(() =>
      expect(locationErrorField.textContent).toBe(locationErrorMsg)
    );
  });

  test("it does not produce errors on good input and does invoke callback", async () => {
    const testCallback = jest.fn();

    const { getByText, getByTestId, getByLabelText } = render(
      <LocationForm submitCallback={testCallback} />
    );

    const locationField = getByLabelText("Location");
    const submitButton = getByText("Submit");

    userEvent.type(locationField, "Isla Vista");
    userEvent.click(submitButton);

    await waitFor(() => expect(testCallback).toBeCalledTimes(1));

    const locationErrorField = getByTestId(/location-errors/i);
    expect(locationErrorField.textContent).toBe("");
  });

  test("it produces error messages on bad input and does not invoke callback", async () => {
    const testCallback = jest.fn();

    const { getByText, getByTestId } = render(
      <LocationForm submitCallback={testCallback} />
    );

    const submitButton = getByText("Submit");

    userEvent.click(submitButton);

    await waitFor(() =>
      expect(getByTestId(/location-errors/i)).toBeInTheDocument()
    );

    const locationErrorField = getByTestId(/location-errors/i);
    expect(locationErrorField.textContent).toBe(locationErrorMsg);

    expect(testCallback).toBeCalledTimes(0);
  });
});
