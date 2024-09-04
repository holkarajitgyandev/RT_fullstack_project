import React from 'react'

import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import {Login} from './pages/Login'
import Signup from './pages/Signup'
import Movies from './pages/Movies'
import News from './pages/News'
import TVshows from './pages/TVshows'
import About from './pages/About'
import Trending from './pages/Trending'
import Trailer from './pages/Trailer'
import Watchlist from './pages/Watchlist'



const App = () => {
  return (
    <div className='px-52 py-5'>
      
      <Router>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/tvshows' element={<TVshows/>}/>
          <Route path='/trending' element={<Trending/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/trailer' element={<Trailer/>}/>
          <Route path='/watchlist' element={<Watchlist/>}/>
        </Routes>
        
      </Router>
      
    </div>
  )
}

export default App
