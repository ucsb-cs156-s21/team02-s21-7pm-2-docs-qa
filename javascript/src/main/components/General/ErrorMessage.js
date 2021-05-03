import React from "react";

const ErrorMessage = ({ text, condition, testId }) => {
  const contents = condition ? text : "";
  return (
    <span className="error-message" data-testid={testId}>
      {contents}
    </span>
  );
};

export default ErrorMessage;
