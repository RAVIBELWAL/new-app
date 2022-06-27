import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Login=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

return(<>
<Form style={{width:'500px', margin:'20px auto'}}>
  <h1 className="h2">LOGIN</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    
    <Form.Control type="email" placeholder="Enter email" 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
    
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" style={{textAlign:"left"}} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
    </>)
}

export default Login


/**
 *Controlled Components-
 * 1.Bind form input value to React state
 *   const [email,setEmail]=useState('ravi@gmail.com')
 *   const [password,setPassword]=useState('')

 * 2.Bind event handlers to React state handlers
 *   onChange={(e)=>setEmail(e.target.value)}

 *  */ 