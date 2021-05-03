import React from "react";
import { Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015

const CollegeSubredditSelector = ({ subreddits }) => {
  return (
    <Form.Group>
      <Form.Label>College Subreddit</Form.Label>
      <Typeahead
        labelKey={"name"}
        options={subreddits}
        placeholder="Choose a subreddit..."
        id="college-subreddit-selector"
        inputProps={{ "data-testid": "college-subreddit-selector" }}
      />
    </Form.Group>
  );
};

export default CollegeSubredditSelector;
