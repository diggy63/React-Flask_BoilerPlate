import React, {useState} from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginModal({handleLogin, handleClose}) {
    const [loginInfo,setLoginInfo] = useState({
        email: '',
        password: ''
    })

    function handleChange(e){
        setLoginInfo({
            ...loginInfo,
            [e.target.name]:e.target.value
        })
    }
    async function handleSubmit(){
        const ans = await handleLogin(loginInfo)
        console.log(ans)
        if(ans){
          handleClose()
        }
    }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} type="email" placeholder="Enter email" name="email" value={loginInfo.email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange} type="password" placeholder="Password" name="password" value={loginInfo.password}/>
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default LoginModal;