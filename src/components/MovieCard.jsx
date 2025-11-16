import React from 'react'
import { TMDB_IMG_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className=" w-44 pr-2">
        <img src={`${TMDB_IMG_URL}${movie.poster_path}` } alt="movie" />
    </div>
  )
}

export default MovieCard