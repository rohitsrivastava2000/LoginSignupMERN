// import React from 'react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import {notify} from './toast'

function Login() {
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const navigate=useNavigate();
  
  const handLogin=async (e)=>{
    e.preventDefault();

    const data={email,password};
    console.log(data);
    try {
      const url="https://login-signup-mern-api-mu.vercel.app/user/login";
      const response=await fetch(url,{
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)

      })
      const result=await response.json();
      console.log(result);
      if(result.success)
       localStorage.setItem('token',result.token);
      
      notify(result);
       if (result.success) {
        setTimeout(() => navigate("/home"), 2000); // Navigate after 2 seconds
      }
      // navigate('/home');
    } catch (error) {
      console.log(error+"error in to send the data");
    }
  }

  return (
    <div className='container' >
      <h1>Login</h1>
      <form onSubmit={handLogin} >
           
        <div>
             <label htmlFor="email">Email</label>
             <input type="email" name='email' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter your email...' />
        </div>
        <div>
             <label htmlFor="password">Password</label>
             <input type="password" name='password' value={password} onChange={(e)=>setpassword(e.target.value)}  placeholder='Enter your password...' />
        </div>
        <button>Login</button>
        <span>New Registration <Link to="/signup">Sign Up</Link></span>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Login
