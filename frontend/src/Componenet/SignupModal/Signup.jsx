import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignupModal({ handleSignup, handleCloseSignup }) {
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    password: "",
    name:''
  });

  function handleChange(e) {
    setSignupInfo({
      ...signupInfo,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit() {
    const ans = await handleSignup(signupInfo);
    if(ans){
      handleCloseSignup()
    }

  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="text"
          placeholder="Enter name"
          name="name"
          value={signupInfo.name}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="email"
          placeholder="Enter email"
          name="email"
          value={signupInfo.email}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="password"
          placeholder="Password"
          name="password"
          value={signupInfo.password}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default SignupModal;
