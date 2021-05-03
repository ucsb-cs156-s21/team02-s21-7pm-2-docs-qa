import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <LinkContainer to={""}>
        <Navbar.Brand data-testid="brand">CMPSC156 team02</Navbar.Brand>
      </LinkContainer>
      <Nav>
        <LinkContainer to={"/about"}>
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/earthquakes"}>
          <Nav.Link>Earthquakes</Nav.Link>
        </LinkContainer>
        <LinkContainer to={"/locations"}>
          <Nav.Link>Locations</Nav.Link>
        </LinkContainer>
      </Nav>
      <Nav className="ml-auto">
        <LinkContainer to={"/swagger"}>
          <Nav.Link>Swagger</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default AppNavbar;
