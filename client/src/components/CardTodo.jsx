import React, { useState } from "react";
import { Col, Card, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../store/actions/todoActions";

export default function CardTodo({ todo }) {
  const dispatch = useDispatch();

  function handleDelete() {
    console.log("enter dleete handle");
    dispatch(deleteTodo(todo.id));
  }

  function handleEdit() {
    console.log("enter edit handler");
    console.log(todo.id, "<=== todo.id");
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Col xs="12" sm="6" key={todo.id}>
        {/* {JSON.stringify(todo)} */}
        <Card className="mt-3 shadow rounded">
          <Card.Header as="h5" className="bg-dark">
            {/* <Button>Done</Button> */}
          </Card.Header>
          <Card.Body className="text-center">
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
            <Button variant="success" className="mr-2">
              Done
            </Button>
            <Button className="mr-2">Edit</Button>
            <Button onClick={handleShow} variant="danger">
              Delete
            </Button>
          </Card.Body>
        </Card>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are You Sure Want to Delete?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={handleDelete}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </>
  );
}
