import React from 'react'
import './App.css';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favourites from './components/Favourites';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<> <Banner /><Movies /> </>} />
        <Route path='favourites' element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
