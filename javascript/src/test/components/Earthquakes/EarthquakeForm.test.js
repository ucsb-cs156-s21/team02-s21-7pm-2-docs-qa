import React from "react";
import { render, waitFor } from "@testing-library/react";
import EarthquakeForm from "main/components/Earthquakes/EarthquakeForm";
import userEvent from "@testing-library/user-event";

describe("EarthquakeForm tests", () => {
  const distanceErrorMsg =
    "Distance is required and should be a decimal number";
  const minMagErrorMsg = "minMag is required and should be a decimal number";

  test("it renders without crashing", () => {
    render(<EarthquakeForm />);
  });

  test("it has the expected fields", () => {
    const { getByText, getByLabelText } = render(<EarthquakeForm />);
    const distanceField = getByLabelText("Distance in Kilometers");
    expect(distanceField).toBeInTheDocument();

    const minMagField = getByLabelText("Minimum Magnitude");
    expect(minMagField).toBeInTheDocument();

    const submitButton = getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });

  test("it enforces that the two fields are both required", async () => {
    const testCallback = jest.fn();

    const { getByText, getByTestId } = render(
      <EarthquakeForm submitCallback={testCallback} />
    );

    const distanceErrorField = getByTestId(/distance-errors/i);
    const minMagErrorField = getByTestId(/minMag-errors/i);

    const submitButton = getByText("Submit");

    userEvent.click(submitButton);

    await waitFor(() =>
      expect(distanceErrorField.textContent).toBe(distanceErrorMsg)
    );
    expect(minMagErrorField.textContent).toBe(minMagErrorMsg);
  });

  test("it does not produce errors on good input and does invoke callback", async () => {
    const testCallback = jest.fn();

    const { getByText, getByTestId, getByLabelText } = render(
      <EarthquakeForm submitCallback={testCallback} />
    );

    const distanceField = getByLabelText("Distance in Kilometers");
    const minMagField = getByLabelText("Minimum Magnitude");
    const submitButton = getByText("Submit");

    userEvent.type(distanceField, "300");
    userEvent.type(minMagField, "1.5");
    userEvent.click(submitButton);

    await waitFor(() => expect(testCallback).toBeCalledTimes(1));

    const distanceErrorField = getByTestId(/distance-errors/i);
    expect(distanceErrorField.textContent).toBe("");

    const minMagErrorField = getByTestId(/minMag-errors/i);
    expect(minMagErrorField.textContent).toBe("");
  });

  test("it produces error messages on bad input and does not invoke callback", async () => {
    const testCallback = jest.fn();

    const { getByText, getByTestId, getByLabelText } = render(
      <EarthquakeForm submitCallback={testCallback} />
    );

    const distanceField = getByLabelText("Distance in Kilometers");
    const minMagField = getByLabelText("Minimum Magnitude");
    const submitButton = getByText("Submit");

    userEvent.type(distanceField, "foo");
    userEvent.type(minMagField, "bar");
    userEvent.click(submitButton);

    await waitFor(() =>
      expect(getByTestId(/distance-errors/i)).toBeInTheDocument()
    );

    const distanceErrorField = getByTestId(/distance-errors/i);
    expect(distanceErrorField.textContent).toBe(distanceErrorMsg);

    const minMagErrorField = getByTestId(/minMag-errors/i);
    expect(minMagErrorField.textContent).toBe(minMagErrorMsg);

    expect(testCallback).toBeCalledTimes(0);
  });

  test("variety of good and bad input", async () => {
    const testCallback = jest.fn();

    const { getByText, getByTestId, getByLabelText } = render(
      <EarthquakeForm submitCallback={testCallback} />
    );

    const distanceField = getByLabelText("Distance in Kilometers");
    const minMagField = getByLabelText("Minimum Magnitude");
    const submitButton = getByText("Submit");
    const distanceErrorField = getByTestId(/distance-errors/i);
    const minMagErrorField = getByTestId(/minMag-errors/i);

    userEvent.type(distanceField, "300.15");
    userEvent.click(submitButton);
    await waitFor(() => expect(distanceErrorField.textContent).toBe(""));

    userEvent.clear(distanceField);
    userEvent.type(distanceField, "bar300");
    userEvent.click(submitButton);
    await waitFor(() =>
      expect(distanceErrorField.textContent).toBe(distanceErrorMsg)
    );

    userEvent.clear(distanceField);
    userEvent.type(distanceField, ".15");
    userEvent.click(submitButton);
    await waitFor(() => expect(distanceErrorField.textContent).toBe(""));

    userEvent.clear(distanceField);
    userEvent.type(distanceField, "300.5foo");
    userEvent.click(submitButton);
    await waitFor(() =>
      expect(distanceErrorField.textContent).toBe(distanceErrorMsg)
    );

    userEvent.type(minMagField, "1.5bar");
    userEvent.click(submitButton);
    await waitFor(() =>
      expect(minMagErrorField.textContent).toBe(minMagErrorMsg)
    );

    userEvent.clear(minMagField);
    userEvent.type(minMagField, "bar300.15");
    userEvent.click(submitButton);
    await waitFor(() =>
      expect(minMagErrorField.textContent).toBe(minMagErrorMsg)
    );

    userEvent.clear(minMagField);
    userEvent.type(minMagField, "3");
    userEvent.click(submitButton);
    await waitFor(() => expect(minMagErrorField.textContent).toBe(""));

    expect(testCallback).toBeCalledTimes(0);
  });
});
