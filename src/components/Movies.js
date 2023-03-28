import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Oval } from 'react-loader-spinner'

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=cddb112f0b930f95fcf4a1307f5285d1')
      .then(response => {
        console.table(response)
        setMovies(response.data.results);
      })
      .catch(error => {
        console.table(error);
      });
  }, []);

  return (
    <div className='mb-8'>
      <h2 className='my-8 font-bold text-bold text-2xl text-center'>Trending Movies</h2>

      {movies.length === 0 ?
        <div className="flex justify-center">
          <Oval
            height="80"
            width="80"
            radius="9"
            color="grey"
            secondaryColor='grey'
            ariaLabel="loading"
          />
        </div>
        : <div className='flex flex-wrap justify-center gap-4 px-8'>
          {movies.map((movie) => {
            return <div className={`h-[25vh] w-[100%] md:hover:scale-150 duration-300 ease-in-out bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] md:h-[35vh] bg-no-repeat bg-cover bg-center flex items-end md:w-[45%] lg:w-[21%] rounded-xl `}>
              <div className='text-2xl text-white bg-gray-900 w-full text-center py-2 rounded-b-xl'>{movie.title}</div>
            </div>
          })}
        </div>
      }
    </div>
  )
}

export default Movies
