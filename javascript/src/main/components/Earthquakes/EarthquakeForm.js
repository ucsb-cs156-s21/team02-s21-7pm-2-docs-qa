import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";
import ErrorMessage from "main/components/General/ErrorMessage";

const EarthquakeForm = ({ submitCallback }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const decimalNumberNoSign = /^([0-9]*[.])?[0-9]+$/i;

  return (
    <Form onSubmit={handleSubmit(submitCallback)}>
      <Form.Group as={Row} controlId="distance">
        <Col>
          <Form.Label>Distance in Kilometers</Form.Label>
        </Col>
        <Col>
          <Form.Control
            as="input"
            {...register("distance", {
              required: true,
              pattern: decimalNumberNoSign,
            })}
          />
        </Col>
        <Col>
          <ErrorMessage
            condition={errors.distance}
            text={"Distance is required and should be a decimal number"}
            testId={"distance-errors"}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="minMag">
        <Col>
          <Form.Label>Minimum Magnitude</Form.Label>
        </Col>
        <Col>
          <Form.Control
            as="input"
            {...register("minMag", {
              required: true,
              pattern: decimalNumberNoSign,
            })}
          />
        </Col>
        <Col>
          <ErrorMessage
            condition={errors.minMag}
            text={"minMag is required and should be a decimal number"}
            testId={"minMag-errors"}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col>
          <Button type="submit">Submit</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default EarthquakeForm;
