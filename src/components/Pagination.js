import React, { useState } from 'react'

const Pagination = () => {
  const [pageno, setPageno] = useState(1);
  const goAhead = () => {
    setPageno(pageno + 1)
  }
  const goback = () => {
    if (pageno > 1) {
      setPageno(pageno - 1)
    }
  }
  return (
    <div className='flex justify-center my-8'>
      <button className='border-2 rounded-l-xl py-2 border-r-0 px-2 text-indigo-500' onClick={goback}>Previous</button>
      <button className='border-2 bg-gray-300 py-2 px-2 text-indigo-500'>{pageno}</button>
      <button className='border-2 rounded-r-xl py-2 px-2 border-l-0 text-indigo-500' onClick={goAhead}>Next</button>
    </div>
  )
}

export default Pagination
