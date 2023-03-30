import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
const Favourites = () => {
  const [CurGenres, SetCurGenres] = useState('Actions');
  const [favourites, setFavourites] = useState([]);
  const [search, setSearch] = useState("")
  const [genres, setGenres] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(5);
  // for Movies
  useEffect(() => {
    const oldfav = localStorage.getItem("imdb");
    if (oldfav) {
      setFavourites(JSON.parse(oldfav));
    }
  }, []);
  // for genres
  useEffect(() => {
    const temp = favourites.map((mv) => [mv.genre_ids][0])
    setGenres([...temp])
  }, [favourites])
  const remove = (movie) => {
    const newarray = favourites.filter((m) => m.id !== movie.id);
    setFavourites(newarray);
    localStorage.setItem("imdb", JSON.stringify(newarray));
  };
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const goAhead = () => {
    if (currentPage < Math.ceil(favourites.length / moviesPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }
  const goback = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = favourites.slice(indexOfFirstMovie, indexOfLastMovie);
  useEffect(() => {
    const savedCurrentPage = localStorage.getItem('currentPage');
    if (savedCurrentPage) {
      setCurrentPage(parseInt(savedCurrentPage));
    }

    const savedMoviesPerPage = localStorage.getItem('moviesPerPage');
    if (savedMoviesPerPage) {
      setMoviesPerPage(parseInt(savedMoviesPerPage));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
    localStorage.setItem('moviesPerPage', moviesPerPage);
  }, [currentPage, moviesPerPage]);

  return (
    <div>
      <div className='flex space-x-8 flex-wrap mt-8 justify-center px-2'>
        <button
          className={CurGenres === 'All Genres' ? 'text-lg  bg-blue-400 text-white rounded-xl font-bold p-1 px-2 m-2' :
            "text-lg  bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold p-1 px-2 m-2"}>
          My genres
        </button>
        <button

          className={CurGenres === 'Actions' ? 'text-lg  bg-blue-400 text-white rounded-xl font-bold p-1 px-2 m-2' :
            "text-lg  bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold p-1 px-2 m-2"}
        >Action</button>

      </div>
      <div className='text-center'>
        <input type="text" placeholder='Search' className='border border-2 p-2 m-2 text-center' value={search} onChange={(e) => setSearch(e.target.value)} />
        <input type="number" placeholder='Rows' className='border border-2 p-2 m-2 text-center' />

      </div>
      <table className="">
        <thead>
          <tr>
            <th className="px-4 py-2">NAME</th>
            <th className="px-4 py-2">RATING</th>
            <th className="px-4 py-2">POPULARITY</th>
            <th className="px-4 py-2">GENRE</th>
            <th className="px-4 py-2">REMOVE</th>
          </tr>
        </thead>

        <tbody>
          {currentMovies.filter((movie) =>
            movie.title.toUpperCase().includes(search.toUpperCase()) ||
            movie.popularity.toString().includes(search)
          ).map((movie) => (
            <tr className='border'>
              <td className=" px-4 py-2">{movie.title}</td>
              <td className=" px-4 py-2">{movie.vote_average}</td>
              <td className=" px-4 py-2">{movie.popularity}</td>
              <td className=" px-4 py-2">{movie.vote_average}</td>
              <td className=" px-4 py-2">
                <button onClick={() => {
                  const index = favourites.findIndex(m => m.id === movie.id);
                  if (index > -1) {
                    const updatedFavourites = [...favourites];
                    updatedFavourites.splice(index, 1);
                    setFavourites(updatedFavourites);
                  }
                }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>


      <div className='mt-4'>
        <Pagination goAhead={goAhead} goback={goback} page={currentPage} />
        {/* <Pagination goAhead={goAhead} goback={goback} page={currentPage} /> */}

      </div>

    </div>
  )
}

export default Favourites
