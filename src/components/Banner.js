import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Banner = () => {
    const [movies, setMovies] = useState({});

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=cddb112f0b930f95fcf4a1307f5285d1')
            .then(response => {
                setMovies(response.data.results[0]);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})] h-[40vh] md:h-[70vh] bg-no-repeat bg-cover bg-center flex items-end bg-center `}>
            <div className='md:text-3xl text-xl text-white bg-gray-900 w-full text-center py-4 bg-opacity-50'>{movies.title}</div>
        </div>
    )
}

export default Banner
