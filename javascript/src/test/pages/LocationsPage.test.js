import React from "react";
import { render, waitFor } from "@testing-library/react";
import LocationsPage, { formatUrl } from "main/pages/LocationsPage";
import userEvent from "@testing-library/user-event";
import fetchMock from "jest-fetch-mock";
import locationFixtures from "fixtures/locationFixtures";
import { useToasts } from "react-toast-notifications";

// See: https://www.leighhalliday.com/mock-fetch-jest
fetchMock.enableMocks();

// See: https://jestjs.io/docs/bypassing-module-mocks
jest.mock("react-toast-notifications", () => ({
  useToasts: jest.fn(),
}));
const addToast = jest.fn();

const { ToastProvider } = jest.requireActual("react-toast-notifications");

describe("LocationsPage tests", () => {
  beforeEach(() => {
    fetch.resetMocks();
    useToasts.mockReturnValue({
      addToast: addToast,
    });
  });

  describe("tests for helper functions", () => {
    test("test formatUrl", () => {
      expect(formatUrl("Lompoc")).toEqual("/api/locations/get?location=Lompoc");
    });
  });

  describe("tests for the component", () => {
    test("page renders without crashing", () => {
      render(
        <ToastProvider>
          <LocationsPage />
        </ToastProvider>
      );
    });

    test("The expected fields are in the form", () => {
      const { getByText, getByLabelText } = render(
        <ToastProvider>
          <LocationsPage />
        </ToastProvider>
      );
      const locationField = getByLabelText("Location");
      expect(locationField).toBeInTheDocument();

      const submitButton = getByText("Submit");
      expect(submitButton).toBeInTheDocument();
    });

    test("Filling in fields with valid values and pressing submit results in form being submitted", async () => {
      const expectedUrl = "/api/locations/get?location=Storke Tower";

      fetch.mockResponseOnce(JSON.stringify(locationFixtures.storkeTowerOne));

      const { getByText, getByTestId, getByLabelText } = render(
        <ToastProvider>
          <LocationsPage />
        </ToastProvider>
      );
      const locationField = getByLabelText("Location");
      const submitButton = getByText("Submit");

      userEvent.type(locationField, "Storke Tower");
      userEvent.click(submitButton);

      await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
      expect(fetch).toHaveBeenCalledWith(expectedUrl);

      const name = locationFixtures.storkeTowerOne[0].display_name;
      const header = getByText("Name");
      expect(header).toBeInTheDocument();
      expect(getByTestId("row-0-col-0")).toHaveTextContent(name);
    });

    test("Submitting valid data results in toast when backend is unreachable", async () => {
      const expectedUrl = "/api/locations/get?location=Goleta";

      fetch.mockReject(() => Promise.reject("API is down"));

      const { getByText, getByLabelText } = render(
        <ToastProvider>
          <LocationsPage />
        </ToastProvider>
      );
      const locationField = getByLabelText("Location");
      const submitButton = getByText("Submit");

      userEvent.type(locationField, "Goleta");
      userEvent.click(submitButton);

      await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
      expect(fetch).toHaveBeenCalledWith(expectedUrl);
      expect(
        addToast
      ).toHaveBeenCalledWith(
        "Error getting data from /api/locations/get?location=Goleta: API is down",
        { appearance: "error" }
      );
    });

    test("Submitting valid data results in toast when backend return an error", async () => {
      const expectedUrl = "/api/locations/get?location=Goleta";

      fetch.mockResponseOnce(null, {
        status: 500,
        statusText: "Internal Server Error",
      });

      const { getByText, getByLabelText } = render(
        <ToastProvider>
          <LocationsPage />
        </ToastProvider>
      );
      const locationField = getByLabelText("Location");
      const submitButton = getByText("Submit");

      userEvent.type(locationField, "Goleta");
      userEvent.click(submitButton);

      await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
      expect(fetch).toHaveBeenCalledWith(expectedUrl);
      expect(
        addToast
      ).toHaveBeenCalledWith(
        "Error getting data from /api/locations/get?location=Goleta: Error: Response from server: 500 Internal Server Error",
        { appearance: "error" }
      );
    });
  });
});
