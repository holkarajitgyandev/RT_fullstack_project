import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { base_api } from '../api/axios'
import Navbar from '../components/Navbar.jsx'
import Cookies from "js-cookie";

const Login = () => {
  const [formData, setFormData] = useState({
    email : '',
    password : ''
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name] : value})
  }
  
const userLogin=async()=>{
  try {
    const response=await axios.post(`${base_api}/user/login`,formData);
    console.log(response);

   
    
    setFormData({
      email : '',
    password : ''
    })
    Cookies.set('user',response.data.token,{expires:7,path:"/", secure:true})
    alert("user logged in successfully")
    
  } catch (error) {
    alert("error in logging user")
    console.log("error in logging user",error)
  }
}
  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin();
    
  }
  

  
  return (
    <div>
      <Navbar/>
    <div className=' flex justify-center'>
      <div className='border border-black rounded p-4 bg-orange-100' >
        <p className='font-bold text-3xl'>Log In to</p>
        <p className='font-bold text-2xl'>Rotten Tomatoes</p>
        <br /><br />
        <form action="" className='flex flex-col gap-3  ' onSubmit={handleSubmit}>
          <label htmlFor="lable">Email:</label>
          <input type="email" placeholder='Enter your email' name='email' value={formData.email} onChange={handleInputChange} className='border rounded w-[300px]' />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange}  placeholder='Enter Password' className='border rounded w-[300px]' />
          <button  className='bg-blue-500 m-auto py-2 px-4 border rounded'>Log In</button>
        </form>
        </div>
    </div>
    </div>
  )
}

export { Login }