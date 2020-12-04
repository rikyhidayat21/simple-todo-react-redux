import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarHome() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow">
        <Navbar.Brand as={Link} to="/" className="text-center">
          Hello-Todo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    </>
  );
}
