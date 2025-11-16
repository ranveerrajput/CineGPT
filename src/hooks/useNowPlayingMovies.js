//custom hook to fetch now playing movies
//fethc data from TMDB api and update store

import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addNowPlayingMovies} from "../utils/movieSlice"
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
   
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};


export default useNowPlayingMovies;