import React from "react";
import { render, waitFor } from "@testing-library/react";
import PublicHolidaysList from "main/components/PublicHolidays/PublicHolidaysList";
import publicHolidayFixtures from "fixtures/publicHolidayFixtures";
import userEvent from "@testing-library/user-event";
import { getFirstSmallestLargest } from "main/utils/arrayUtils";

describe("PublicHolidaysList tests", () => {
  test("renders without crashing", () => {
    render(<PublicHolidaysList />);
  });

  test("Has the expected colum headers", () => {
    const { getByText } = render(
      <PublicHolidaysList data={publicHolidayFixtures.oneHoliday} />
    );

    const dateHeader = getByText("Date");
    expect(dateHeader).toBeInTheDocument();

    const nameHeader = getByText("Name");
    expect(nameHeader).toBeInTheDocument();

    const localNameHeader = getByText("Local Name");
    expect(localNameHeader).toBeInTheDocument();
  });

  test("Date column is sortable", async () => {
    const holidays = publicHolidayFixtures.US2021;

    const { getByText, getByTestId } = render(
      <PublicHolidaysList data={holidays} />
    );

    const { first, smallest, largest } = getFirstSmallestLargest(
      holidays,
      (h) => h.date
    );

    const header = getByText("Date");
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

  test("Name column is sortable", async () => {
    const holidays = publicHolidayFixtures.US2021;

    const { getByText, getByTestId } = render(
      <PublicHolidaysList data={holidays} />
    );

    const { first, smallest, largest } = getFirstSmallestLargest(
      holidays,
      (h) => h.name
    );

    const header = getByText("Name");
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

  test("Local Name column is sortable", async () => {
    const holidays = publicHolidayFixtures.US2021;

    const { getByText, getByTestId } = render(
      <PublicHolidaysList data={holidays} />
    );

    const { first, smallest, largest } = getFirstSmallestLargest(
      holidays,
      (h) => h.localName
    );

    const header = getByText("Local Name");
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
    const holidays = publicHolidayFixtures.US2021;

    const { container, getByText } = render(
      <PublicHolidaysList data={holidays} />
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
