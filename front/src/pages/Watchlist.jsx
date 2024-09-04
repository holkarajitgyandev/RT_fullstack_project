import React from 'react'
import { useSelector } from 'react-redux'
import { image_baseurl } from '../api/axios';
import Navbar from '../components/Navbar';



const Watchlist = () => {
  const watchlist=useSelector(state=>state.mywatchlist);
  const tv=useSelector(state=>state.tvshow)
  return (
    <div>
      <Navbar/>
      <p className='font-bold text-3xl'>Your Watchlist</p>
    <div className=' flex gap-3'>
      
      {watchlist.map(movie=>(
        <div className=' flex flex-col gap-3'>
         <img
         src={`${image_baseurl}/w780${movie.poster_path}`}
         alt={movie.title}
         className='w-full h-[300px] border rounded cursor-pointer'
         
       />
        <p key={movie.id}>{movie.title}</p>
        </div>
      ))}
      

      {tv.map(show=>(
        <div className=' flex flex-col gap-3'>
         <img
         src={`${image_baseurl}/w780${show.poster_path}`}
         alt={show.name}
         className='w-full h-[300px] border rounded cursor-pointer'
         
       />
        <p key={show.id}>{show.name}</p>
        </div>
      ))}
      
    </div>
    </div>
  )
}

export default Watchlist
