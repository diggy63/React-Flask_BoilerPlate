import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/esm/Nav";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Todo Lists
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link>
                <Button> Log in </Button>
              </Nav.Link>
              <Nav.Link>
                <Button> Sign Up </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
