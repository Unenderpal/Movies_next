import React from 'react'
import { FaStar } from 'react-icons/fa';

interface movieProps {
    params: {
        id: string;
    }
}

const MovieDeatils = async({ params }: movieProps) => {
    const movies = [
        {
            "id": "1",
            "title": "Inception",
            "rating": 9.0,
            "comment": 63,
            "description": "A skilled thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into someone's mind.",
            "commentList": [
                "Mind-bending and visually stunning!",
                "A masterpiece of modern cinema.",
                "Complex but rewarding story."
            ]
        },
        {
            "id": "2",
            "title": "The Dark Knight",
            "rating": 9.5,
            "comment": 55,
            "description": "Batman faces his greatest psychological and physical test when he confronts the Joker, a criminal mastermind who thrives on chaos.",
            "commentList": [
                "Best superhero movie ever made.",
                "Heath Ledger's Joker was legendary.",
                "Dark, gritty, and brilliant."
            ]
        },
        {
            "id": "3",
            "title": "Interstellar",
            "rating": 8.8,
            "comment": 98,
            "description": "A team of explorers travels through a wormhole in space to ensure humanity's survival as Earth faces environmental collapse.",
            "commentList": [
                "Beautiful blend of science and emotion.",
                "Hans Zimmer’s score is unforgettable.",
                "Visually breathtaking and emotional."
            ]
        }
    ]
    const {id} = await params
    const movie = movies.find((m) => m.id === id)
    return (
        <div className='p-8 space-y-8 bg-gray-900 min-h-screen'>
            {/* movie title & description  */}
            <div className='bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-xl shadow-lg'>
                <h2 className='text-4xl font-semibold text-white mb-4'>{movie?.title}</h2>
                <p className='text-lg text-gray-300 '>{movie?.description}</p>
            </div>

            {/* rating &comments section */}

            <div className='bg-gray-800 p-6 rounded-xl shadow-lg'>
                <div className='flex justify-between items-center mb-'>
                    <div>
                        <p className='text-xl text-gray-300'>Rating: </p>
                        <div className='flex items text-yellow-400'>
                            <FaStar className='mr-1 mt-1' />
                            <span className='text-xl font-bold'>{movie.rating}</span> /5
                        </div>
                    </div>

                    <div>
                        <p className='text-xl text-gray-300'>Comments:</p>
                        <p className='text-2xl font-semibold text-white '>{movie?.comment}</p>
                    </div>




                </div>
            </div>

            {/* comments section */}
            <div>
                <h3 className="text-3xl font-semibold text-white mb-4">Comments</h3>
                <ul className="space-y-4">
                    {movie?.commentList.map((comment , index)=>(
                        <li key={index} className='bg-gray-800 p-4 rounded-lg hover:shadow-xl transition-shadow duration-300        '>
                            <p className='text-gray-300'>{comment}</p>
                        </li>

                    ))}
                </ul>

            </div>

        </div>
    )
}

export default MovieDeatils