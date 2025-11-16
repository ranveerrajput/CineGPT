import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {


  const movies = useSelector(store => store.movies.nowPlayingMovies);


  return ( movies && 
    
    <div className='bg-black'>

  
      <div className='relative -mt-28'> 

        <MovieList title={"Now Playing Movies"} movies={movies}/>
        <MovieList title={"Trending"} movies={movies}/>
        <MovieList title={"Upcoming"} movies={movies}/>
        <MovieList title={"Comedy"} movies={movies}/>
        <MovieList title={"Sci-Fi"} movies={movies}/>

      </div>

        </div>


  
  )
}

export default SecondaryContainer