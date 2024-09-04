import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import redtomato from '../assets/redtomato.png';
import greenlogo from '../assets/greenlogo.png';
import freshlogo from '../assets/freshlogo.jpg';
import { IoPlayCircleOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import axios from 'axios';
import { API_key, base_api, Base_url, image_baseurl } from '../api/axios';
import YouTube from 'react-youtube'; 
import { add_to_list } from '../store/WatchlistSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

//import './Movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);  //stores movies
  const [trailerKey, setTrailerKey] = useState(null); // Stores YouTube video key
  const [showTrailer, setShowTrailer] = useState(false); // Controls modal visibility
  const [query, setquery]=useState('')

  const watchlist=useSelector(state=>state.mywatchlist);
  console.log(watchlist)
  
  const dispatch=useDispatch();
  
  const handleaddtowatchlist=(movie)=>{
    
      dispatch(add_to_list(movie));
  }

  const change=(e)=>{
    setquery(e.target.value);
  }
  // fetching movie based on search functionality
  const Movies = async () => {
    try {
      const response = await axios.get(`${Base_url}/search/movie`, {
        params: {
          api_key: API_key,
          query: query,  // Use the query state as the search parameter
          language: 'en-US',
          page: 1,
        },
      });
      setMovies(response.data.results);
      console.log(movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
// showingn all movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${base_api}/movie/details`, {
          params: {
            api_key: API_key,
            language: 'en-US',
            page: 1,
          },
        });
        setMovies(response.data);
        
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
   
    fetchMovies();
  }, []);
// handling input fuctionality onSubmit
  const submit=(e)=>{
    e.preventDefault();
    Movies();
   }

  // Function to handle movie frame click
  const handleMovieClick = async (movieId) => {
    try {
      const response = await axios.get(`${Base_url}/movie/${movieId}/videos`, {
        params: {
          api_key: API_key,
          language: 'en-US',
        },
      });
      const videos = response.data.results;
      // Find the trailer from the list of videos
      const trailer = videos.find(
        (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
      );

      if (trailer) {
        setTrailerKey(trailer.key);
        setShowTrailer(true);
      } else {
        alert('Trailer not available for this movie.');
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  // Function to close the trailer modal
  const handleCloseTrailer = () => {
    setTrailerKey(null);
    setShowTrailer(false);
  };

  // Options for the YouTube player
  const youtubeOpts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1, // Auto-play the video on load
    },
  };
  

  return (
    <div>
      <Navbar />
      <br />
      <div className='p-3 justify-center items-center'>
      <form action="#" onSubmit={submit}>
        <input type="text" className='border border-black rounded w-[300px] h-[40px] bg-slate-100' placeholder='search your favourite movie...' value={query} onChange={change} />
      <button type='submit' className='bg-blue-500 border rounded'>search</button>
      </form>
      </div>
      <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        {movies.map((movie) => (
          <div key={movie.id} className='flex flex-col gap-2 justify-between'>
            {/* Movie Frame */}
            <img
              src={`${image_baseurl}/w780${movie.poster_path}`}
              alt={movie.title}
              className='w-full h-[300px] border rounded cursor-pointer'
              onClick={() => handleMovieClick(movie.id)} // Click handler to fetch and show trailer
            />
            <div className='flex items-center gap-2'>
              <img id='logic' src={movie.vote_average>6 ? redtomato : greenlogo} alt="Fresh Logo" className='w-[20px] h-[20px] rounded' />
              <IoPlayCircleOutline size={20} />
              <p>{movie.vote_average}</p>
            </div>
            <p>{movie.title}</p>
            <button onClick={()=>handleaddtowatchlist(movie)}
            className='flex items-center justify-center gap-2 border border-black rounded-md  hover:bg-orange-400  transform active:scale-95 transition-transform duration-200 ease-in-out'>
              <CiCirclePlus size={20} /> WATCHLIST
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Trailer */}
      {showTrailer && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50" onClick={handleCloseTrailer}>
          <div className="bg-black p-4 rounded-lg relative" onClick={(e) => e.stopPropagation()}>
            <YouTube videoId={trailerKey} opts={youtubeOpts} />
            <button onClick={handleCloseTrailer} className="mt-4 py-2 px-4 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600">Close</button>
          </div>
        </div>
      )}

      <br />
      <Footer />
    </div>
  );
};

export default Movies;
