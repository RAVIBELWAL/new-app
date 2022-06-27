import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import {citiesOptions} from './city'

const Signup=()=>{
    
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        Confirmpassword:'',
        gender:'',
        city:'',
        tncAgreed:''
    })
    

useEffect(()=>{
  console.log('form updated')
},[formData])


return(<>
<Form style={{width:'500px', margin:'20px auto'}}>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    
    <Form.Control type="text" placeholder="Name" 
    value={formData.name}
    onChange={(e)=>setFormData({...formData,name:e.target.value})}
    />

    <Form.Control.Feedback>Looks Good</Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email" placeholder="Email" 
    value={formData.email}
    onChange={(e)=>setFormData({...formData,email:e.target.value})}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    value={formData.password}
    onChange={(e)=>setFormData({...formData,password:e.target.value})}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    value={formData.Confirmpassword}
    onChange={(e)=>setFormData({...formData,Confirmpassword:e.target.value})}    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicGender">
      Gender<br></br>
      
      {['Male','Female','Other'].map((gender,index)=>(
        <Form.Check
        inline
        label={gender}
        name="gender"
        type='radio'
        id={'inline-'+index}
        onChange={(e)=>setFormData({...formData,gender:gender})}
        />
      ))}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCity">
    <Form.Label>City</Form.Label>
    <Form.Select aria-label="Default select"
    onChange={(e)=>setFormData({...formData,city:e.target.value})}    >
    <option>Select</option>
    {citiesOptions.map((city,index)=>(
    <option key={index} value={city}>{city}</option>
    ))}
    </Form.Select>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox" 
  style={{textAlign:'left'}}>
    <Form.Check type="checkbox" label="You agree to terms and conditions" onClick={(e)=>setFormData({...formData,tncAgreed:e.target.checked})} />
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