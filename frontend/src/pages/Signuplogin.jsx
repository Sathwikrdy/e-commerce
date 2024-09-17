import React, { useState } from 'react'
import './CSS/Signuplogin.css'

export const Signuplogin = () => {
  const [state, setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:"",
  })

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:[e.target.value]})
  }

  const login = async()=>{
    console.log("Login function executed",formData);
    let responseData;
    await fetch('http://localhost:5000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData===data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/')
    }
    else{
      alert(responseData.errors)
    }
  }

  const signup = async()=>{
    console.log("Sign Up function executed",formData);
    let responseData;
    await fetch('http://localhost:5000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData===data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/")
    }
    else{
      alert(responseData.errors)
    }
  }
  return (
    <div className="signuplogin">
      <div className="signuplogin_page">
        <h1>{state}</h1>
        <div className="signuplogin_fields">
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Name'/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="e-mail" placeholder='Email Address'/>
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password'/>
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"?<p className='signuplogin-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login</span></p>:
        <p className='signuplogin-login'>Create an Account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span></p>}
        <div className="signuplogin_agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Signuplogin
