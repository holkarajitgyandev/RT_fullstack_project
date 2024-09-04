import React, { useState } from 'react'
import googlelogo from '../assets/googlelogo.png'
import { IoMdMail } from "react-icons/io";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import axios from 'axios';

import { base_api } from '../api/axios';
import Navbar from '../components/Navbar.jsx';



const Signup = () => {

  const [formdata,setformdata]=useState({
    name:'',
    email:'',
    password:''
  })

  //adding user to firebase
  const adduser=async()=>{
try {
  //const{email,password}=formdata;
  //await createUserWithEmailAndPassword(auth,email,password)
  const response =axios.post(`${base_api}/user/register`,formdata)
  setformdata({
    name:'',
    email:'',
    password:''
  })
  alert("user registerd successfully")
} catch (error) {
  alert("error while registering  user")
  console.error('error while registering  user',error)
  
}
  }
   
 //showing signup form on click
  const handleclick=()=>{

    var element = document.getElementById('withemail')
    element.classList.remove('hidden')

  }
  //setting form data
  const handlechange=(event)=>{
    const {name,value}=event.target
    setformdata({...formdata,[name]:value})

  }
// handling form submission
 const handlesubmit=(e)=>{
  e.preventDefault()
  adduser();

 }


  return (
    <div>
        <Navbar/>
    <div className='flex items-center justify-center'>
      <div className='bg-white flex flex-col items-center w-1/2 gap-3 p-3'>
        <p className=' font-bold text-3xl'>Log in or sign up for</p>

          <p className=' font-bold text-3xl'> Rotten Tomatoes</p>
        <p className='text-sm'>By continuing, you agree to the Privacy Policy and the Terms and Policies, and to receive email from the </p>
        <a href="https://www.fandango.com/about-us" className='text-blue-500 underline text-sm'>Fadango media brands</a>
        <div className='flex gap-4 items-center border border-black p-2 hover:bg-slate-300'>
          <img src={googlelogo} alt="google" className='w-[40px] h-[40px]' />
          <p className='font-bold'>CONTINUE WITH GOOGLE</p>
        </div>
        <p className='text-sm'>or</p>
        <div  onClick={handleclick}  className='flex gap-4 items-center border border-black p-2 hover:bg-slate-300'>
          <IoMdMail size={40}/>
          <p className='font-bold'>CONTINUE WITH EMAIL</p>
        </div>
         
         <div className='hidden'id='withemail' >
        <form action="" onSubmit={handlesubmit} className='flex flex-col gap-3'>
           <label htmlFor="name">Name:</label>
           <input type="text" onChange={handlechange} placeholder='Enter your name' name='name' value={formdata.name} className='border rounded w-[300px]' />
          <label htmlFor="lable">Email:</label>
          <input type="email" onChange={handlechange} placeholder='Enter your email' name='email' value={formdata.email} className='border rounded w-[300px]' />
          <label htmlFor="password">Password:</label>
          <input type="password"  onChange={handlechange} name="password" id="password" value={formdata.password} placeholder='Enter Password' className='border rounded w-[300px]' />
          <button   className='bg-blue-500 m-auto py-2 px-4 border rounded'>sign in</button>
        </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup
