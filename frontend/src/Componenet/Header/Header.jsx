import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/esm/Nav";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import LoginModal from "../LoginModal/LoginModal";
import SignupModal from "../SignupModal/Signup";

import tokenServices from "../../Utils/tokenServices";

export default function Header({ handleLogin, handleSignup, user, userLogout }) {
  const [show, setShow] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  function logUserOut(){
    userLogout()
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            Todo Lists
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {user ? (
                <>
                  <Navbar.Text>Signed in as: {user.name}</Navbar.Text>
                  <Nav.Link>
                    <Button onClick={logUserOut}> Logout </Button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Button onClick={handleShow}> Log in </Button>
                  </Nav.Link>
                  <Nav.Link>
                    <Button onClick={handleShowSignup}> Sign Up </Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginModal handleLogin={handleLogin} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
      <Modal show={showSignup} onHide={handleCloseSignup} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignupModal handleSignup={handleSignup} handleCloseSignup={handleCloseSignup} />
        </Modal.Body>
      </Modal>
    </>
  );
}
