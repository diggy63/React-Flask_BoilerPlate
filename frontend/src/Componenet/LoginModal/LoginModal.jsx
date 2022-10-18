import React, {useState} from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function LoginModal({handleLogin, handleClose}) {
    const [message,setMessage] = useState('')
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
        }else{
          setMessage('User email or password is not valid')
        }
    }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {message === '' ? null : 
        <Alert variant='danger'>{message}</Alert>
        }
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