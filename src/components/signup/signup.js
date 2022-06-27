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
    
    //for validation
    const [formDataErr,setFormDataErr]=useState({
        name:'',
        email:'',
        password:'',
        Confirmpassword:'',
        gender:'',
        city:'',
        tncAgreed:''
    })

    //for form submission
    const [isFormSubmitted,setIsFormSubmitted]=useState(false)

    useEffect(()=>{
    console.log('form updated')
    },[formData])


const validate=(e)=>{
    e.preventDefault() //prevent default behaviour of onsubmit like submit etc
    setIsFormSubmitted(true)

    let {name,email,password,Confirmpassword,gender,city,tncAgreed}=formData;
    
    if(name===''||name.length<3){
        setFormDataErr((formDataErr)=>({
            ...formDataErr,
            name:'Please enter valid name!'}))
    }
    else{
        setFormDataErr((formDataErr)=>({
            ...formDataErr,
            name:''}))
    }

    if(email===''|| email.startsWith('@')||!email.includes('@')){
        setFormDataErr((formDataErr)=>({
            ...formDataErr,
            email:'Please enter valid email!'}))
    }
    else{
        setFormDataErr((formDataErr)=>({
            ...formDataErr,
            email:''}))
    }

    if(password===''||password.length<=5){
        setFormDataErr((formDataErr)=>({
            ...formDataErr,
            password:'Please enter valid password!(Min. Characters: 8)'}))
    }
    else{
        setFormDataErr((formDataErr)=>({
            ...formDataErr,
            password:''}))
    }

    if(Confirmpassword===''||Confirmpassword!==password){
        setFormDataErr((formDataErr)=>({
            ...formDataErr,
            Confirmpassword:'Please enter same password!'}))
    }    
    else{
        setFormDataErr((formDataErr)=>({
            ...formDataErr,
            Confirmpassword:''}))
    }

    if(city===''||city==='select'){
        setFormDataErr((formDataErr)=>({
            ...formDataErr,
            city:'Please select a valid city'}))
    } 
    else{
        setFormDataErr((formDataErr)=>({
            ...formDataErr,
            city:''}))
    }


    if(city===''){
        setFormDataErr((formDataErr)=>({
            ...formDataErr,
            gender:'Please select a gender'}))
    } 
    else{
        setFormDataErr((formDataErr)=>({
            ...formDataErr,
            gender:''}))
    }


    if(!tncAgreed){
        setFormDataErr((formDataErr)=>({
            ...formDataErr,
            tncAgreed:'Please agree to Terms'}))
    } 
    else{
        setFormDataErr((formDataErr)=>({
            ...formDataErr,
            tncAgreed:''}))
    }

//    console.log('validate')
}


return(<>
<Form style={{width:'500px', margin:'20px auto'}}>
    <h1>Sign Up</h1>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    
    <Form.Control type="text" placeholder="Name" 
    value={formData.name}
    onChange={(e)=>setFormData({...formData,name:e.target.value})}
    />

    {isFormSubmitted && (
        <>  
        <Form.Control.Feedback
        style={formDataErr.name?{display:"none"}:{display:"block"}} >
        Looks Good</Form.Control.Feedback>

        <Form.Control.Feedback type="invalid"
        style={formDataErr.name?{display:"block"}:{display:'none'}}>
        {formDataErr.name}</Form.Control.Feedback>
        </>
    )}
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email" placeholder="Email" 
    value={formData.email}
    onChange={(e)=>setFormData({...formData,email:e.target.value})}
    />

    {isFormSubmitted && (
        <>    
        <Form.Control.Feedback
        style={formDataErr.email?{display:"none"}:{display:"block"}} >
        Looks Good</Form.Control.Feedback>

        <Form.Control.Feedback type="invalid"
        style={formDataErr.email?{display:"block"}:{display:'none'}}>
        {formDataErr.email}
        </Form.Control.Feedback>
        </>
    )}

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    value={formData.password}
    onChange={(e)=>setFormData({...formData,password:e.target.value})}
    />

    {isFormSubmitted && (
        <>  
        <Form.Control.Feedback
        style={formDataErr.password?{display:"none"}:{display:"block"}} >
        Looks Good</Form.Control.Feedback>

        <Form.Control.Feedback type="invalid"
        style={formDataErr.password?{display:"block"}:{display:'none'}}>
        {formDataErr.password}</Form.Control.Feedback>
        </>
    )}
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    value={formData.Confirmpassword}
    onChange={(e)=>setFormData({...formData,Confirmpassword:e.target.value})}    />
  
    {isFormSubmitted && (
        <>  
        <Form.Control.Feedback
        style={formDataErr.Confirmpassword?{display:"none"}:{display:"block"}} >
        Looks Good</Form.Control.Feedback>

        <Form.Control.Feedback type="invalid"
        style={formDataErr.Confirmpassword?{display:"block"}:{display:'none'}}>
        {formDataErr.Confirmpassword}
        </Form.Control.Feedback>
        </>
    )}
  
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


{isFormSubmitted && (
        <>  
        <Form.Control.Feedback
        style={formDataErr.gender?{display:"none"}:{display:"block"}} >
        Looks Good</Form.Control.Feedback>

        <Form.Control.Feedback type="invalid"
        style={formDataErr.gender?{display:"block"}:{display:'none'}}>
        {formDataErr.gender}</Form.Control.Feedback>
        </>
    )}

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
  
    {isFormSubmitted && (
        <>  
        <Form.Control.Feedback
        style={formDataErr.city?{display:"none"}:{display:"block"}} >
        Looks Good</Form.Control.Feedback>

        <Form.Control.Feedback type="invalid"
        style={formDataErr.city?{display:"block"}:{display:'none'}}>
        {formDataErr.city}</Form.Control.Feedback>
        </>
    )}
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox" 
  style={{textAlign:'left'}}>
    <Form.Check type="checkbox" label="You agree to terms and conditions" onClick={(e)=>setFormData({...formData,tncAgreed:e.target.checked})} />

    {isFormSubmitted && (
        <>  
        <Form.Control.Feedback
        style={formDataErr.tncAgreed?{display:"none"}:{display:"block"}} >
        Looks Good</Form.Control.Feedback>

        <Form.Control.Feedback type="invalid"
        style={formDataErr.tncAgreed?{display:"block"}:{display:'none'}}>
        {formDataErr.tncAgreed}
        </Form.Control.Feedback>
        </>
    )}
 </Form.Group>

  <Button 
  variant="dark"
  type="submit"
  style={{width:'100px'}}
  onClick={(e)=>validate(e)}>
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