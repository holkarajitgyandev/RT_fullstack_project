import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Moviecard from '../components/Moviecard'
import TVshowscard from '../components/Tvshowscard'
import Newscard from '../components/Newscard'
import { useSelector } from 'react-redux'


const Home = () => {
  const watchlist=useSelector(state=>state.mywatchlist);
  console.log(watchlist)

  return (
    <div>
      <Navbar/>
      <br /><br /><br />
      <Moviecard/>
      <br />
      <TVshowscard/>
      <br />
      <Newscard/>
      

      <br /><br /><br />

      <Footer/>
    </div>
  )
}

export default Home
