// import React from 'react'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

function Home() {
  const [data,setdata]=useState({});
  const navigate=useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://login-signup-mern-api-mu.vercel.app/user/profile";
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const result = await response.json();
        console.log(result);
        setdata(result.info);
      } catch (error) {
        console.log(error + " error in sending the data");
      }
    };

    fetchData(); // Call the async function
  }, []);
  
  const handlButton=()=>{
    localStorage.removeItem('token');
    setTimeout(()=>{navigate('/login'),1000})
  }

  return (
    <div>
      <h1>{`Welcome ${data.name}`}</h1>
      <h2>{`ID : ${data.email}`}</h2>
      <button onClick={handlButton} >Logout</button>
    </div>
  )
}

export default Home
