import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import movielogo from '../assets/movielogo.jpg'
import freshlogo from '../assets/freshlogo.jpg'
import { IoPlayCircleOutline } from "react-icons/io5";

import { CiCirclePlus } from "react-icons/ci";
import axios from 'axios';
import { API_key, Base_url,image_baseurl } from '../api/axios';


const Trending = () => {

  const [trendingshows,settrendingshows]=useState([]);   //initialising state for tv shows
  const options = {
    method: 'GET',
    
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDY5NzljZTY4MzcxNGU2NDVhMjg2OWU5ZmI4ZDdkYiIsIm5iZiI6MTcyMzQzMzY0My40MzA0NzgsInN1YiI6IjY2Yjk3ZTI2NjVhMGEwOTY4YTFhNDljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pDk3Tpl2lwmYGRbCzNjU89efrgdXsdejF8TYSnzVNHY'
    }
  };

  useEffect(()=>{
    const fetchtrendingshows= async ()=>{
     try {
      const response= await axios.get(`${Base_url}/trending/all/week`,{
        params:{
          api_key:API_key,
          language:'en-US',
          page:1
        }
      });

      settrendingshows(response.data.results);   //store the tv shows in state
      
      
     } catch (error) {
      console.error('error fetching trendings',error)
      
     }
    }
    fetchtrendingshows();   //fetch the tv shows when component loads

  },[])               //Empty array means this runs only once when the component mounts

  return (
    <div>
      <Navbar/>
      <br />
      <div className='grid grid-cols-3 gap-5   '>
      {trendingshows.map((show) => (
          <div key={show.id} className='flex flex-col  gap-2 justify-between '>
            <img 
              src={`${image_baseurl}/w780${show.poster_path}`} 
              alt={show.name} 
              className='w-150  h-[200px] ' 
            />
            <div className='flex items-center gap-2'>
              <img src={freshlogo} alt="Fresh Logo" className='w-[20px] h-[20px] rounded' />
              <IoPlayCircleOutline size={20} />
              <p>{show.vote_count}</p>
            </div>
            <p>{show.title}</p>
            <p>{show.overview}</p>
            <button className='flex items-center justify-center gap-2 border border-black rounded-md'> 
              <CiCirclePlus size={20} /> WATCHLIST
            </button>
          </div>
        ))}
      </div>
      <br />
      <Footer/>
      
    </div>
  )
}

export default Trending
