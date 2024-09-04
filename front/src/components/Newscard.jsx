import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { base_api } from '../api/axios';

const Newscard = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //  async function to fetch  news data
     const fetchNews = async () => {
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
      
      <br />
      <h1 className='font-bold text-2xl underline'>Entertainment News</h1>
       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 '>
        {news.map((article ) => (
          <div key={article.article_id} className='flex flex-col p-3'>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              
              <img src={article.image_url} alt={article.title} className='w-[400px]' />
              <h2>{article.title}</h2>
              <p>{article.pubDate}</p>
              
            </a>
          </div>
        ))}
         </div>
      <br />
      
    </div>
  );
};

export default Newscard;
