import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { base_api } from '../api/axios';

const EntertainmentNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function to fetch data
    const fetchNews = async () => {
      // const apiKey = 'pub_5077077997fd1d9e9c72d4d34f8e31560821f';
      // const url = 'https://newsdata.io/api/1/latest?apikey=pub_5077077997fd1d9e9c72d4d34f8e31560821f';
      // const params = {
      //   category: 'entertainment',  // Entertainment news category
      //   language: 'en',             // Language of the news articles
      //   apiKey: apiKey              // Your API key
      // };

      try {
        const response = await axios.get(`${base_api}/news/details`);
        setNews(response.data);
        console.log(news)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    // Call the function
    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching news: {error.message}</p>;

  return (
    <div>
      <Navbar/>
      <br />
      <h1>Entertainment News</h1>
       <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 p-2'>
        {news.map((article ) => (
          <div key={article.article_id} className='flex flex-col p-3'>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              
              <img src={article.image_url} alt={article.title} width="100%" />
              <h2>{article.title}</h2>
              <p>{article.pubDate}</p>
              
            </a>
          </div>
        ))}
         </div>
      <br />
      <Footer/>
    </div>
  );
};

export default EntertainmentNews;
