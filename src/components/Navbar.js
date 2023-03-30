import React from 'react'
import Logo from '../logo.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='flex items-center space-x-8 text-blue-400 font-bold pl-12 md:text-3xl my-4 text-xl'>
           <Link to={`/`}> <img src={Logo} alt="" className='w-[50px] md:w-[100px]'/></Link>
            <Link to={`/`} className='cursor-pointer'>Movies</Link>
            <Link to={`favourites`} className='cursor-pointer'>Favourites</Link>
        </div>
    )
}

export default Navbar
 {/* <td className="border px-4 py-2">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
              </td> */}