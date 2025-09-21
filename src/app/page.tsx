import Link from 'next/link';
import React from 'react'
import { FaComment, FaStar } from 'react-icons/fa';

const home = () => {

  const movies = [
    {
      "id": 1,
      "title": "Inception",
      "comment": 63,
      "rating": 9.0,
      "description": "A skilled thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into someone's mind."
    },
    {
      "id": 2,
      "title": "The Dark Knight",
      "comment": 55,
      "rating": 9.5,
      "description": "Batman faces his greatest psychological and physical test when he confronts the Joker, a criminal mastermind who thrives on chaos."
    },
    {
      "id": 3,
      "title": "Interstellar",
      "comment": 98,
      "rating": 8.8,
      "description": "A team of explorers travels through a wormhole in space to ensure humanity's survival as Earth faces environmental collapse."
    }
  ]

  const totalMovies = movies.length;
  const totalComments = movies.reduce((sum, movie) => sum + movie.comment, 0);
  const averageRatings = (
    movies.reduce((sum, movie) => sum + movie.rating, 0) / totalMovies
  ).toFixed(1);



  return (
    <div className='p-8 space-y-8 bg-gray-900 min-h-screen'>
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-4">Dashboard Overview</h2>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-white'>
          <div className='bg-gray-800 p-4 rounded-lg flex flex-col items-center '>
            <p className='text-lg font-medium'>Total movies</p>
            <p className='text-4xl font-bold'>{totalMovies}</p>
          </div>
          <div className='bg-gray-800 p-4 rounded-lg flex flex-col items-center '>
            <p className='text-lg font-medium'>Total comments</p>
            <p className='text-4xl font-bold'>{totalComments}</p>
          </div>
          <div className='bg-gray-800 p-4 rounded-lg flex flex-col items-center '>
            <p className='text-lg font-medium'>Total ratings</p>
            <p className='text-4xl font-bold'>{averageRatings}</p>
          </div>
        </div>

      </div>
      {/* movie list */}
      <h2 className='text=3xl font-semibold text-white'>Movie list   </h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {movies.map(movie => (
          <li key={movie.id} className='bg-gray-800 p-6 rounded-lg shadow-xl  hover:shadow-2xl transition-all duration-300'>
            <Link className='text-2xl font-bold text-blue-400 hover:text-blue-600' href={`/movie/${movie.id}`}>{movie.title}</Link>
            <p className='text-gray-400 text-sm mt-2'>{movie.description}</p>
            <div className='flex justify-between items-center mt-4'>
              <div className='flex items-center text-sm text-gray-300 '>
                <FaComment className="mr-1 "  />
                <span>{movie.comment}</span>
              </div>
              <div className='flex items-center text-sm text-gray-300 '>
                <FaStar className="mr-1 "  />
                <span>{movie.rating}</span>
              </div>
             
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default home