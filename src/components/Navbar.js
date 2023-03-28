import React from 'react'
import Logo from '../logo.jpg'
const Navbar = () => {
    return (
        <div className='flex items-center space-x-8 text-blue-400 font-bold pl-12 md:text-3xl my-4 text-xl'>
            <img src={Logo} alt="" className='w-[50px] md:w-[100px]'/>
            <div className='cursor-pointer'>Movies</div>
            <div className='cursor-pointer'>Favourites</div>
        </div>
    )
}

export default Navbar
