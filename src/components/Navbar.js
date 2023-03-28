import React from 'react'
import Logo from '../logo.jpg'
const Navbar = () => {
    return (
        <div className='flex items-center space-x-8 text-blue-400 font-bold pl-12 text-3xl my-4'>
            <img src={Logo} alt="" height={90} width={90} />
            <div className='cursor-pointer'>Movies</div>
            <div className='cursor-pointer'>Favourites</div>
        </div>
    )
}

export default Navbar
