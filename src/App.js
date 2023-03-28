import React from 'react'
import './App.css';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Movies />
      <Pagination />
    </div>
  )
}

export default App
