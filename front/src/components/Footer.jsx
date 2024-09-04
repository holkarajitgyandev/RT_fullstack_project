import React from 'react'
import { Link } from 'react-router-dom'
import { HiEnvelope } from "react-icons/hi2";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='flex flex-col bg-slate-800'>
      <div className='flex p-3 gap-3 justify-between'>
        <div className='flex flex-col text-white '>
          <Link to='' >HELP</Link>
          <Link to='/about'>About Rotten Tomatoes</Link>
          <Link to='/about'>what's is the Tomatometer</Link>
        </div>

        <div className='flex flex-col text-white '>
          <Link to='' >Critics Submission</Link>
          <Link to=''>Licensing</Link>
          <Link to=''>Advertise with Us</Link>
          <Link to='' >Careers</Link>
        </div>

        <div className='flex flex-col text-white items-center '>
            <div className=' flex gap-2 items-center'>
                <HiEnvelope/>
                <p className='font-bold'>JOIN THE NEWSLETTER</p>
            </div>
            <p>Get the freshest reviews, news, </p>
            <p>and more delivered right to your inbox!</p>
             <button className=' border border-gray-600 rounded bg-blue-600 p-3'>JOIN THE NEWSLETTER</button>
        </div>

        <div className='flex flex-col text-white items-start '>
            <p className='font-bold'>FOLLOW US</p>
            <div className='flex py-2 gap-2'>
             <a href="https://www.facebook.com/rottentomatoes"><RiFacebookCircleLine size={30}/></a>
             <a href="https://twitter.com/rottentomatoes"><FaXTwitter size={30}/></a>
             <a href="https://www.instagram.com/rottentomatoes/"><FaInstagram size={30}/></a>
             <a href="https://www.tiktok.com/@rottentomatoes"><FaTiktok size={30}/></a>
             <a href="https://www.youtube.com/user/rottentomatoes"><FiYoutube size={30}/></a>
            </div>
        </div>
      </div>


      <div className='flex flex-col items-center'>
          <div className='flex gap-5 text-white  '>
            <Link to=''>Privacy Policy</Link>
            <Link to=''>Terms and Policies</Link>
            <Link to=''>Cockie notice</Link>
            <Link to=''>California notice</Link>
            <Link to=''>Ad Choices</Link>
            <Link to=''>Accessibities</Link>
          </div>
          <p className='text-gray-500' >Copyright © Fandango. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
