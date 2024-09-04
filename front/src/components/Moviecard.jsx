import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import redtomato from '../assets/redtomato.png';
import greenlogo from '../assets/greenlogo.png'
import { IoPlayCircleOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import axios from 'axios';
import { API_key, base_api, Base_url, image_baseurl } from '../api/axios';
import YouTube from 'react-youtube'; // Import for embedding YouTube videos
//import './Movies.css'; // Import CSS for modal styling

const Moviecard = () => {
  const [movies, setMovies] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null); // Stores YouTube video key
  const [showTrailer, setShowTrailer] = useState(false); // Controls modal visibility

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${base_api}/movie/details`);
        setMovies(response.data.slice(0,10));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

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
     <p className='font-bold text-2xl underline'>MOVIES</p>
      <br />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
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
              <img src={movie.vote_average>6 ? redtomato : greenlogo} alt="Fresh Logo" className='w-[20px] h-[20px] rounded' />
              <IoPlayCircleOutline size={20} />
              <p>{movie.vote_average}</p>
            </div>
            <p>{movie.title}</p>
            <button className='flex items-center disabled: justify-center gap-2 border border-black rounded-md'>
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
      
    </div>
  );
};

export default Moviecard;
