import React, { useEffect } from "react";
import {
  Form,
  Button,
  Container,
  Col,
  Row,
  Alert,
  Image,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../store/actions/todoActions";
import { Link, useHistory } from "react-router-dom";
import Loader from "../components/Loader";

export default function AddTodo() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const addState = useSelector((state) => state.todoCreateReducer);
  console.log(addState, "<=== use selector add state toto create reducer");

  const onSubmit = (data) => {
    console.log(data, "<==== data on submit");
    console.log("masuk on submit form");
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    console.log(data.title, "<=== title");
    console.log(data.description, "<=== description");
    console.log(formData, "<=== form data di on submit");
    dispatch(createTodo(formData));
  };

  useEffect(() => {
    if (addState.success) {
      history.push("/");
    }
  }, [addState.success]);
  return (
    <Container>
      {addState.errors && addState.errors.length ? (
        <Alert variant="danger" className="mt-2">
          {addState.errors[0]}
        </Alert>
      ) : (
        <> </>
      )}
      {addState.loading ? (
        <Loader />
      ) : (
        <>
          <h5 className="text-center mt-5">Add New Todo</h5>
          <Form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <Row>
              <Col sm="12">
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    name="title"
                    ref={register({ required: "Title is required" })}
                    isInvalid={errors.name}
                  />
                  {errors.name && (
                    <Form.Text as="div" className="text text-danger">
                      {errors.name.message}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col sm="12">
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Description"
                    name="description"
                    ref={register({ required: "Description is required" })}
                    isInvalid={errors.name}
                  />
                  {errors.name && (
                    <Form.Text as="div" className="text text-danger">
                      {errors.name.message}
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm="6">
                <Button
                  variant="danger"
                  className="w-100 rounded"
                  as={Link}
                  to={"/"}
                >
                  Cancel
                </Button>
              </Col>
              <Col cm="6">
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 rounded"
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </>
      )}
    </Container>
  );
}
