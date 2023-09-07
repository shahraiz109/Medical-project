import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Services from "../Pages/Sevices"
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"
import Contact from "../Pages/Contact"
import Doctor from "../Pages/Doctor/Doctor"
import DoctorDetails from "../Pages/Doctor/DoctorDetails"

const Router = () => {
  return (
   <Routes>
    <Route path='/home' element={<Home/>}/>
      <Route path='/services' element={<Services />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/doctor' element={<Doctor />} />
      <Route path='/doctor/:id' element={<DoctorDetails />} />
   </Routes>
  )
}

export default Router
