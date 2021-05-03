import React from "react";
import { render, waitFor } from "@testing-library/react";
import EarthquakesList from "main/components/Earthquakes/EarthquakesList";
import earthquakeFixtures from "fixtures/earthquakeFixtures";
import userEvent from "@testing-library/user-event";
import { getFirstSmallestLargest } from "main/utils/arrayUtils";

describe("EarthquakesList tests", () => {
  test("renders without crashing", () => {
    render(<EarthquakesList />);
  });

  test("Has the expected colum headers", () => {
    const { getByText } = render(
      <EarthquakesList data={earthquakeFixtures.oneEarthquake} />
    );

    const idHeader = getByText("Id");
    expect(idHeader).toBeInTheDocument();

    const magnitudeHeader = getByText("Magnitude");
    expect(magnitudeHeader).toBeInTheDocument();

    const placeHeader = getByText("Place");
    expect(placeHeader).toBeInTheDocument();
  });

  test("Id column is sortable", async () => {
    const { getByText, getByTestId } = render(
      <EarthquakesList data={earthquakeFixtures.eightEarthquakes} />
    );

    const earthquakes = earthquakeFixtures.eightEarthquakes.features;

    const { first, smallest, largest } = getFirstSmallestLargest(
      earthquakes,
      (e) => e.id
    );

    const header = getByText("Id");
    expect(header).toBeInTheDocument();
    expect(getByTestId("row-0-col-0")).toHaveTextContent(first);

    userEvent.click(header);

    await waitFor(() =>
      expect(getByTestId("row-0-col-0")).toHaveTextContent(largest)
    );

    userEvent.click(header);

    await waitFor(() =>
      expect(getByTestId("row-0-col-0")).toHaveTextContent(smallest)
    );
  });

  test("magnitude column is sortable", async () => {
    const { getByText, getByTestId } = render(
      <EarthquakesList data={earthquakeFixtures.eightEarthquakes} />
    );

    const earthquakes = earthquakeFixtures.eightEarthquakes.features;
    const { first, smallest, largest } = getFirstSmallestLargest(
      earthquakes,
      (e) => e.properties.mag
    );

    const header = getByText("Magnitude");
    expect(header).toBeInTheDocument();
    expect(getByTestId("row-0-col-1")).toHaveTextContent(first);

    userEvent.click(header);

    await waitFor(() =>
      expect(getByTestId("row-0-col-1")).toHaveTextContent(largest)
    );

    userEvent.click(header);

    await waitFor(() =>
      expect(getByTestId("row-0-col-1")).toHaveTextContent(smallest)
    );
  });

  test("location column is sortable", async () => {
    const { getByText, getByTestId } = render(
      <EarthquakesList data={earthquakeFixtures.eightEarthquakes} />
    );

    const earthquakes = earthquakeFixtures.eightEarthquakes.features;
    const { first, smallest, largest } = getFirstSmallestLargest(
      earthquakes,
      (e) => e.properties.place
    );

    const header = getByText("Place");
    expect(header).toBeInTheDocument();
    expect(getByTestId("row-0-col-2")).toHaveTextContent(first);

    userEvent.click(header);

    await waitFor(() =>
      expect(getByTestId("row-0-col-2")).toHaveTextContent(largest)
    );

    userEvent.click(header);

    await waitFor(() =>
      expect(getByTestId("row-0-col-2")).toHaveTextContent(smallest)
    );
  });

  test("sort carets appear (i.e. bootstrap4=true is passed)", async () => {
    const { container, getByText } = render(
      <EarthquakesList data={earthquakeFixtures.eightEarthquakes} />
    );

    const header = getByText("Place");
    expect(header).toBeInTheDocument();

    // checks for presence of Bootstrap 4 sort carets
    userEvent.click(header);
    await waitFor(() =>
      expect(container.getElementsByClassName("caret-4-desc").length).toBe(1)
    );

    // checks for presence of Bootstrap 4 sort carets
    userEvent.click(header);
    await waitFor(() =>
      expect(container.getElementsByClassName("caret-4-asc").length).toBe(1)
    );
  });
});
