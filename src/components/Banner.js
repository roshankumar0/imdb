import React from 'react'
import Image from '../spider.jpg'
const Banner = () => {
    return (
        <div className={`bg-[url(${Image})] h-[40vh] md:h-[60vh] bg-no-repeat bg-cover bg-center flex items-end `}>
            <div className='md:text-3xl text-xl text-white bg-gray-900 w-full text-center py-4 bg-opacity-50'>Spider-Man : No Way Home</div>
        </div>
    )
}

export default Banner
