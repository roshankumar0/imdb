import React from 'react'
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <h1>trending moveis</h1>
      <h1>pagination</h1>
    </div>
  )
}

export default App
