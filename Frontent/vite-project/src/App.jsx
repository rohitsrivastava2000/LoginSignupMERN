import { Navigate } from 'react-router-dom'
import { Route , Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'
import { useState } from 'react'
import Refreshandler from './pages/Refreshandler'


function App() {
  const [isAuth,setIsAuth]=useState(false);
  const PrivateRoute=({element})=>{
      return  isAuth?element: <Navigate to="/login"/>
  }

  return (
    <div className="App">
        <Refreshandler setIsAuth={setIsAuth}/>
      <Routes>
        <Route path='/' element={<Navigate to="/login"/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/home' element={<PrivateRoute element={<Home/>} />}/>
      </Routes>
   
    </div>
  )
}

export default App
