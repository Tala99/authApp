import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/Navbar.jsx'
import Home from './component/Home.jsx'
import Login from './component/Login.jsx'
import Register from './component/Register.jsx'
import { Routes,Route } from 'react-router-dom'
export default function App() {
  

  return (
    <>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home  />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='*' element={<h2>Page Not Found</h2>}></Route>
     </Routes>
    
     
     
    </>
  )
}


