import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import {notify} from './toast'
// import 'react-toastify/dist/ReactToastify.css';


function Signup() {
  // const [data,setdata]=useState({
  //   name:'',
  //   email:'',
  //   password:''
  // }) 
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const navigate=useNavigate();
  
  const handlesignup=async (e)=>{
     e.preventDefault();
     //setdata({name:name,email:email,password:password});
     const data={name,email,password};
     console.log(data);

    //  if(!name || !email || !password){
    //    //return handleError("All Field are mandatory");
    //    const result={success:false,message:"All Field are mandatory"}
    //    return notify(result);
    //  }
     
     try {
       const url="https://login-signup-mern-api-mu.vercel.app/user/signup";
       const response=await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

       })
       const result=await response.json();
       console.log(result);
       
       notify(result);
       if (result.success) {
        setTimeout(() => navigate("/login"), 2000); // Navigate after 2 seconds
      }

       //navigate('/login');
     } catch (error) {
       console.log(error+"error in to send the data");
     }
     
  }
  
  return (
    <div className='container' >
      <h1>Sign Up</h1>
      <form onSubmit={handlesignup} >
        <div>
             <label htmlFor="name">Name</label>
             <input type="text" name='name' autoFocus placeholder='Enter your name...' value={name} onChange={(e)=>setname(e.target.value)} />
        </div>     
        <div>
             <label htmlFor="email">Email</label>
             <input type="email" name='email' autoFocus placeholder='Enter your email...' value={email} onChange={(e)=>setemail(e.target.value)} />
        </div>
        <div>
             <label htmlFor="password">Password</label>
             <input type="password" name='password' autoFocus placeholder='Enter your password...' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        </div>
        <button>Sign Up</button>
        <span>Already have an account ? <Link to="/login">Login</Link></span>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Signup
