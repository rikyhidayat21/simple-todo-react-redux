import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listTodo } from "../store/actions/todoActions";
import { Container, Row, Button } from "react-bootstrap";
import CardTodo from "../components/CardTodo";
import { Link } from "react-router-dom";

export default function Todo() {
  const { todos, loading, errors } = useSelector(
    (state) => state.todoListReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listTodo());
  }, []);
  return (
    <Container>
      <h1 className="text-center mt-5">List Todo</h1>
      <Button className="align-items-center" as={Link} to="/add-todo">
        Add Todo
      </Button>
      <Row className="mt-2">
        {todos &&
          todos.map((todo) => {
            return <CardTodo key={todo.id} todo={todo} />;
          })}
      </Row>
    </Container>
  );
}
