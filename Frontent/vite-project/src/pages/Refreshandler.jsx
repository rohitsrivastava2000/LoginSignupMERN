import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Refreshandler({setIsAuth}) {
    const location=useLocation();
    const navigate=useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('token')){
            setIsAuth(true);
            if(location.pathname==='/' || 
                 location.pathname==='/login' || 
                   location.pathname==='/signup')
               {
                    navigate('/home',{replace:false})
               }
        }
    },[location,navigate,setIsAuth])
  return (
    <div>
       
    </div>
  )
}

export default Refreshandler
