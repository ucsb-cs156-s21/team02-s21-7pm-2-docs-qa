import React from "react";
import { render } from "@testing-library/react";
import ErrorMessage from "main/components/General/ErrorMessage";

describe("ErrorMessage tests", () => {
  test("When the condition is true, it will show the message", () => {
    const { getByText } = render(
      <ErrorMessage
        condition={true}
        text={"Invalid input"}
        testId={"invalid-input-message"}
      />
    );
    expect(getByText("Invalid input")).toBeInTheDocument();
  });

  test("When the condition is false, it will NOT show the message", () => {
    const { getByTestId } = render(
      <ErrorMessage
        condition={false}
        text={"Invalid input"}
        testId={"invalid-input-message"}
      />
    );
    const errorMessage = getByTestId(/invalid-input-message/i);
    expect(errorMessage).toHaveTextContent("");
  });
});
