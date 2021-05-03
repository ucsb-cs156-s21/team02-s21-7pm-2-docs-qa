import React from "react";
import { render, waitFor } from "@testing-library/react";
import CollegeSubredditSelector from "main/components/CollegeSubreddits/CollegeSubredditSelector";
import collegeSubredditFixtures from "fixtures/collegeSubredditFixtures";
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

describe("CollegeSubredditSelector tests", () => {
  test("renders without crashing", () => {
    render(<CollegeSubredditSelector subreddits={[]} />);
  });

  test("when given a list with just UCSB in it, UCSB can be selected", async () => {
    const { getByTestId, getByText } = render(
      <CollegeSubredditSelector subreddits={collegeSubredditFixtures.UCSB} />
    );
    const subredditSelector = getByTestId("college-subreddit-selector");
    expect(subredditSelector).toBeInTheDocument();
    userEvent.click(subredditSelector);

    await waitFor(() => {
      getByText("University of California - Santa Barbara");
    });
  });
});
