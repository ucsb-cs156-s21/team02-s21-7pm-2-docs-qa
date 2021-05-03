import React from "react";
import { render, waitFor } from "@testing-library/react";
import EarthquakesPage, { formatUrl } from "main/pages/EarthquakesPage";
import userEvent from "@testing-library/user-event";
import fetchMock from "jest-fetch-mock";
import earthquakeFixtures from "fixtures/earthquakeFixtures";
import { useToasts } from "react-toast-notifications";

// See: https://www.leighhalliday.com/mock-fetch-jest
fetchMock.enableMocks();

// See: https://jestjs.io/docs/bypassing-module-mocks
jest.mock("react-toast-notifications", () => ({
  useToasts: jest.fn(),
}));
const addToast = jest.fn();

const { ToastProvider } = jest.requireActual("react-toast-notifications");

describe("EarthquakesPage tests", () => {
  beforeEach(() => {
    fetch.resetMocks();
    useToasts.mockReturnValue({
      addToast: addToast,
    });
  });

  describe("tests for helper functions", () => {
    test("test formatUrl", () => {
      expect(formatUrl("300", "1.5")).toEqual(
        "/api/earthquakes/get?distance=300&minMag=1.5"
      );
    });
  });

  describe("tests for the component", () => {
    test("page renders without crashing", () => {
      render(
        <ToastProvider>
          <EarthquakesPage />
        </ToastProvider>
      );
    });

    test("The expected fields are in the form", () => {
      const { getByText, getByLabelText } = render(
        <ToastProvider>
          <EarthquakesPage />
        </ToastProvider>
      );
      const distanceField = getByLabelText("Distance in Kilometers");
      expect(distanceField).toBeInTheDocument();

      const minMagField = getByLabelText("Minimum Magnitude");
      expect(minMagField).toBeInTheDocument();

      const submitButton = getByText("Submit");
      expect(submitButton).toBeInTheDocument();
    });

    test("Filling in fields with valid values and pressing submit results in form being submitted", async () => {
      const expectedUrl = "/api/earthquakes/get?distance=300&minMag=1.5";

      fetch.mockResponseOnce(JSON.stringify(earthquakeFixtures.oneEarthquake));

      const { getByText, getByTestId, getByLabelText } = render(
        <ToastProvider>
          <EarthquakesPage />
        </ToastProvider>
      );
      const distanceField = getByLabelText("Distance in Kilometers");
      const minMagField = getByLabelText("Minimum Magnitude");
      const submitButton = getByText("Submit");

      userEvent.type(distanceField, "300");
      userEvent.type(minMagField, "1.5");
      userEvent.click(submitButton);

      await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
      expect(fetch).toHaveBeenCalledWith(expectedUrl);

      const firstId = earthquakeFixtures.oneEarthquake.features[0].id;
      const header = getByText("Id");
      expect(header).toBeInTheDocument();
      expect(getByTestId("row-0-col-0")).toHaveTextContent(firstId);
    });

    test("Submitting valid data results in toast when backend is unreachable", async () => {
      const expectedUrl = "/api/earthquakes/get?distance=300&minMag=1.5";

      fetch.mockReject(() => Promise.reject("API is down"));

      const { getByText, getByLabelText } = render(
        <ToastProvider>
          <EarthquakesPage />
        </ToastProvider>
      );
      const distanceField = getByLabelText("Distance in Kilometers");
      const minMagField = getByLabelText("Minimum Magnitude");
      const submitButton = getByText("Submit");

      userEvent.type(distanceField, "300");
      userEvent.type(minMagField, "1.5");
      userEvent.click(submitButton);

      await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
      expect(fetch).toHaveBeenCalledWith(expectedUrl);
      expect(
        addToast
      ).toHaveBeenCalledWith(
        "Error getting data from /api/earthquakes/get?distance=300&minMag=1.5: API is down",
        { appearance: "error" }
      );
    });

    test("Submitting valid data results in toast when backend return an error", async () => {
      const expectedUrl = "/api/earthquakes/get?distance=300&minMag=1.5";

      fetch.mockResponseOnce(null, {
        status: 500,
        statusText: "Internal Server Error",
      });

      const { getByText, getByLabelText } = render(
        <ToastProvider>
          <EarthquakesPage />
        </ToastProvider>
      );
      const distanceField = getByLabelText("Distance in Kilometers");
      const minMagField = getByLabelText("Minimum Magnitude");
      const submitButton = getByText("Submit");

      userEvent.type(distanceField, "300");
      userEvent.type(minMagField, "1.5");
      userEvent.click(submitButton);

      await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
      expect(fetch).toHaveBeenCalledWith(expectedUrl);
      expect(
        addToast
      ).toHaveBeenCalledWith(
        "Error getting data from /api/earthquakes/get?distance=300&minMag=1.5: Error: Response from server: 500 Internal Server Error",
        { appearance: "error" }
      );
    });
  });
});
