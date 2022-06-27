import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {citiesOptions} from './city'

const Signup=()=>{
    
    const [name,setName]=useState('');
    const [gender,setGender]=useState('')
    const [city,setCity]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [Confirmpassword,setConfirmPassword]=useState('')


// alt+shift+i 
return(<>
<Form style={{width:'500px', margin:'20px auto'}}>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    
    <Form.Control type="text" placeholder="Name" 
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email" placeholder="Email" 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    value={Confirmpassword}
    onChange={(e)=>setConfirmPassword(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicGender">
      Gender<br></br>
      
      {['Male','Female','Other'].map((gender,index)=>(
        <Form.Check
        inline
        label={gender}
        name="group1"
        type='radio'
        id={'inline-'+index}
        onClick={()=>setGender('Male')}
      />
      ))}
      
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCity">
    <Form.Label>City</Form.Label>
    <Form.Select aria-label="Default select"
    onChange={(e)=>setCity(e.target.value)}
    >
    <option>Select</option>
    {citiesOptions.map((city,index)=>(
    <option key={index} value={city}>{city}</option>
    ))}
    </Form.Select>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Signup
  </Button>
</Form>
    </>)
}

export default Signup


/**
 *Controlled Components-
 * 1.Bind form input value to React state
 *   const [email,setEmail]=useState('ravi@gmail.com')
 *   const [password,setPassword]=useState('')

 * 2.Bind event handlers to React state handlers
 *   onChange={(e)=>setEmail(e.target.value)}

 *  */ 