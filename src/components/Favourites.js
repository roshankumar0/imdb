// import React, { useEffect, useState } from 'react';
// import Pagination from './Pagination';
// const Favourites = () => {
//   const [CurGenres, SetCurGenres] = useState('Actions');
//   const [favourites, setFavourites] = useState([]);
//   const [genres, setGenres] = useState([])
//   // for Movies
//   useEffect(() => {
//     const oldfav = localStorage.getItem("imdb");
//     if (oldfav) {
//       setFavourites(JSON.parse(oldfav));
//     }
//   }, []);
//   // for genres
//   useEffect(() => {
//     const temp = favourites.map((mv) => [mv.genre_ids][0])
//     setGenres([...temp])
//   }, [favourites])
//   const remove = (movie) => {
//     const newarray = favourites.filter((m) => m.id !== movie.id);
//     setFavourites(newarray);
//     localStorage.setItem("imdb", JSON.stringify(newarray));
//   };
//   return (
//     <div>
//       <div className='flex space-x-8 flex-wrap mt-8 justify-center px-2'>
//         <button
//           className={CurGenres === 'All Genres' ? 'text-lg  bg-blue-400 text-white rounded-xl font-bold p-1 px-2 m-2' :
//             "text-lg  bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold p-1 px-2 m-2"}>
//           My genres
//         </button>
//         <button

//           className={CurGenres === 'Actions' ? 'text-lg  bg-blue-400 text-white rounded-xl font-bold p-1 px-2 m-2' :
//             "text-lg  bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold p-1 px-2 m-2"}
//         >Action</button>

//       </div>
//       <div className='text-center'>
//         <input type="text" placeholder='Search' className='border border-2 p-2 m-2 text-center' />
//         <input type="number" placeholder='Rows' className='border border-2 p-2 m-2 text-center' />

//       </div>
//       {favourites.map((mov) => (
//         <div key={mov.id}>
//           <img src={`https://image.tmdb.org/t/p/original/${mov.backdrop_path}`} alt="" />
//           <p>{mov.title}</p>
//           <p>{mov.popularity}</p>
//           <p>{mov.vote_average}</p>
//           <p>{mov.genre_ids[0]}</p>
//         </div>
//       ))}

//       <div className='mt-4'>
//         <Pagination />
//       </div>
//     </div>
//   )
// }

// export default Favourites
