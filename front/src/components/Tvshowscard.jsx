import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import freshlogo from '../assets/freshlogo.jpg';
import { IoPlayCircleOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import axios from 'axios';
import { API_key, base_api, Base_url, image_baseurl } from '../api/axios';
import YouTube from 'react-youtube'; 


const Tvshowscard = () => {
  const [tvshows, settvshows] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null); // Stores YouTube video key
  const [showTrailer, setShowTrailer] = useState(false); // Controls modal visibility

  useEffect(() => {
    const fetchtvshows = async () => {
      try {
        const response = await axios.get(`${base_api}/show/details`);
        settvshows(response.data.slice(0,10));
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      }
    };
    fetchtvshows();
  }, []);

  // Function to handle TV show frame click
  const handleShowClick = async (showId) => {
    try {
      const response = await axios.get(`${Base_url}/tv/${showId}/videos`, {
        params: {
          api_key: API_key,
          language: 'en-US'
        }
      });
      const videos = response.data.results;
      const trailer = videos.find(
        (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
      );

      if (trailer) {
        setTrailerKey(trailer.key);
        setShowTrailer(true);
      } else {
        alert('Trailer not available for this TV show.');
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
      autoplay: 1,
    },
  };

  return (
    <div>
    <p className='font-bold text-2xl underline'>TV SHOWS</p>
      <br />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        {tvshows.map((show) => (
          <div key={show._id} className='flex flex-col gap-2 justify-between'>
            {/* TV Show Frame */}
            <img
              src={`${image_baseurl}/w780${show.poster_path}`}
              alt={show.name}
              className='w-full h-[300px] cursor-pointer'
              onClick={() => handleShowClick(show.id)} // Click handler to fetch and show trailer
            />
            <div className='flex items-center gap-2'>
              <img src={freshlogo} alt="Fresh Logo" className='w-[20px] h-[20px] rounded' />
              <IoPlayCircleOutline size={20} />
              <p>{show.vote_count}</p>
            </div>
            <p>{show.name}</p>
            <button className='flex items-center justify-center gap-2  border border-black rounded-md'>
              <CiCirclePlus size={20} /> WATCHLIST
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Trailer */}
      {showTrailer && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50;
}
" onClick={handleCloseTrailer}>
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

export default Tvshowscard;
