import React from 'react'

const Favourites = () => {
  return (
    <div>
      <div className='flex space-x-8 flex-wrap mt-8 justify-center px-2'>
        <button className='text-lg  bg-blue-400 text-white rounded-xl font-bold p-1 px-2 m-2'>All Genres</button>
        <button className='text-lg  bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold p-1 px-2 m-2'>Action</button>
 
      </div>
      <div>inputs container</div>
      <div>tables container</div>
      <div>pagination</div>
    </div>
  )
}

export default Favourites
