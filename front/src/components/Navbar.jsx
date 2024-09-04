import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'


import Movies from '../pages/Movies'
import News from '../pages/News'
import Ticket_showtime from '../pages/Trending'
import TVshows from '../pages/TVshows'
import { CiSearch } from "react-icons/ci";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import About from '../pages/About';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { base_api } from '../api/axios';



const Navbar = () => {

    const navigate=useNavigate();
    const handleclick=()=>{
        navigate('/')
    }

    const handleloginclick=()=>{
        navigate('/login')
    };


    const handlesignupclick=()=>{
        navigate('/signup')
    }
    const handlelogoutclick=async()=>{
        const response= await axios.post(`${base_api}/user/logout`)
        alert("user logged out")
    }
  return (
    <div className=' flex flex-col'>
        <div className='flex flex-col md:flex-row items-center bg-red-500 justify-between px-3 h-[auto]'>
        <img src={logo} alt="logo" className='h-[100px] ' onClick={handleclick}/>
        <div className='flex  items-center'>
            <input type="text" placeholder='Search movies,shows,TV, actors, more... ' className='w-[250px] h-1/4 border rounded p-2'  />
            <CiSearch/>
        </div>
        <div className='flex flex-col gap-5'>
        <div className='flex text-white justify-between'>
            <Link to='/about' element={<About/>}>What's the tomatometer</Link>
            <div className='flex'>
            <button onClick={handleloginclick}>LOGIN/</button>
            <button onClick={handlesignupclick}>SIGNUP/</button>
            <button onClick={handlelogoutclick}>LOGOUT</button>
            </div>
        </div>
        <div className='flex gap-3 font-bold text-white'>
         <Link to='/movies' element={<Movies/>}>MOVIES</Link>
         <Link to='/tvshows' element={<TVshows/>}>TV SHOWS</Link>
         <a href="https://editorial.rottentomatoes.com/article/shop/">SHOP</a>
         <Link to='/news' element={<News/>}>NEWS</Link>
         <a href="https://www.fandango.com/movies-in-theaters?a=13036">SHOWTIME</a>
         <Link to='/watchlist'>WL</Link>
        </div>

        </div>
        </div>
        
        <div className='flex bg-slate-400 px-5 py-2 gap-2 justify-between'>
           <Link to={'trending'} className='text-yellow-200 font-bold border rounded p-2 '>TRENDING ON RT</Link>
           
           <div className='flex gap-3 text-white'>
            <a href="">Paris in Movies</a>
            <a href="">Popular Complete Series</a>
            <a href="">certified fresh in july</a>
            <a href="">Movies on Disney+</a>
            <a href="">Shows on Hulu</a>
            </div>

            <div className='flex p-2 gap-2'>
             <a href="https://www.facebook.com/rottentomatoes"><RiFacebookCircleLine/></a>
             <a href="https://twitter.com/rottentomatoes"><FaXTwitter/></a>
             <a href="https://www.instagram.com/rottentomatoes/"><FaInstagram/></a>
             <a href="https://www.tiktok.com/@rottentomatoes"><FaTiktok/></a>
             <a href="https://www.youtube.com/user/rottentomatoes"><FiYoutube/></a>

            </div>

        </div>
    </div>
  )
}

export default Navbar
