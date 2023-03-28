import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-center my-8'>
     <button className='border-2 rounded-l-xl py-2 border-r-0 px-2 text-indigo-500'>Previous</button>
     <button className='border-2 bg-gray-300 py-2 px-2 text-indigo-500'>0</button>
     <button className='border-2 rounded-r-xl py-2 px-2 border-l-0 text-indigo-500'>Next</button>
    </div>
  )
}

export default Pagination
