import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";
import ErrorMessage from "main/components/General/ErrorMessage";

const LocationForm = ({ submitCallback }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <Form onSubmit={handleSubmit(submitCallback)}>
      <Form.Group as={Row} controlId="location">
        <Col>
          <Form.Label>Location</Form.Label>
        </Col>
        <Col>
          <Form.Control
            as="input"
            {...register("location", {
              required: true,
            })}
          />
        </Col>
        <Col>
          <ErrorMessage
            condition={errors.location}
            text={"Location is required"}
            testId={"location-errors"}
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

export default LocationForm;
