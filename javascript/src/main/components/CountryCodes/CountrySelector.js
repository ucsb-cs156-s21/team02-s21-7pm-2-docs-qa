import React from "react";
import { Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

const CountrySelector = ({ countries }) => {
  return (
    <Form.Group>
      <Form.Label>Countries</Form.Label>
      <Typeahead
        labelKey={"name"}
        options={countries}
        placeholder="Choose a country..."
        id="country-selector"
        inputProps={{ "data-testid": "country-selector" }}
      />
    </Form.Group>
  );
};

export default CountrySelector;
