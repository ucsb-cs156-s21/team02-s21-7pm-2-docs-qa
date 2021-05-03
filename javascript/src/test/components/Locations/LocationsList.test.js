import React from "react";
import { render, waitFor } from "@testing-library/react";
import LocationsList from "main/components/Locations/LocationsList";
import locationFixtures from "fixtures/locationFixtures";
import userEvent from "@testing-library/user-event";

import { getFirstSmallestLargest } from "main/utils/arrayUtils";

describe("LocationsList tests", () => {
  test("renders without crashing", () => {
    render(<LocationsList />);
  });

  test("Has the expected colum headers", () => {
    const { getByText } = render(
      <LocationsList data={locationFixtures.storkeTowerOne} />
    );

    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Class")).toBeInTheDocument();
    expect(getByText("Type")).toBeInTheDocument();
    expect(getByText("Lat")).toBeInTheDocument();
    expect(getByText("Lon")).toBeInTheDocument();
  });

  test("Name column is sortable", async () => {
    const { getByText, getByTestId } = render(
      <LocationsList data={locationFixtures.santaBarbaraTen} />
    );

    const locations = locationFixtures.santaBarbaraTen;

    const { first, smallest, largest } = getFirstSmallestLargest(
      locations,
      (loc) => loc.display_name
    );

    const header = getByText("Name");
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

  test("Class column is sortable", async () => {
    const { getByText, getByTestId } = render(
      <LocationsList data={locationFixtures.islaVistaTwo} />
    );

    const locations = locationFixtures.islaVistaTwo;

    const { first, smallest, largest } = getFirstSmallestLargest(
      locations,
      (loc) => loc.class
    );

    const header = getByText("Class");
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

  test("Type column is sortable", async () => {
    const { getByText, getByTestId } = render(
      <LocationsList data={locationFixtures.islaVistaTwo} />
    );

    const locations = locationFixtures.islaVistaTwo;

    const { first, smallest, largest } = getFirstSmallestLargest(
      locations,
      (loc) => loc.type
    );

    const header = getByText("Type");
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

  test("Lat column is sortable", async () => {
    const { getByText, getByTestId } = render(
      <LocationsList data={locationFixtures.santaBarbaraTen} />
    );

    const locations = locationFixtures.santaBarbaraTen;

    const { first, smallest, largest } = getFirstSmallestLargest(
      locations,
      (loc) => loc.lat
    );

    const header = getByText("Lat");
    expect(header).toBeInTheDocument();
    expect(getByTestId("row-0-col-3")).toHaveTextContent(first);

    userEvent.click(header);
    await waitFor(() =>
      expect(getByTestId("row-0-col-3")).toHaveTextContent(largest)
    );

    userEvent.click(header);
    await waitFor(() =>
      expect(getByTestId("row-0-col-3")).toHaveTextContent(smallest)
    );
  });

  test("Lon column is sortable", async () => {
    const { getByText, getByTestId } = render(
      <LocationsList data={locationFixtures.santaBarbaraTen} />
    );

    const locations = locationFixtures.santaBarbaraTen;

    const { first, smallest, largest } = getFirstSmallestLargest(
      locations,
      (loc) => loc.lon
    );

    const header = getByText("Lon");
    expect(header).toBeInTheDocument();
    expect(getByTestId("row-0-col-4")).toHaveTextContent(first);

    userEvent.click(header);
    await waitFor(() =>
      expect(getByTestId("row-0-col-4")).toHaveTextContent(largest)
    );

    userEvent.click(header);
    await waitFor(() =>
      expect(getByTestId("row-0-col-4")).toHaveTextContent(smallest)
    );
  });

  test("sort carets appear (i.e. bootstrap4=true is passed)", async () => {
    const { container, getByText } = render(
      <LocationsList data={locationFixtures.santaBarbaraTen} />
    );

    const header = getByText("Name");
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
