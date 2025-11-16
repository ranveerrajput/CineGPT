import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addMovieTrailor } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailor = (movieId) => {
  const dispatch = useDispatch();


  console.log('Movieid -->', movieId);

  const getMovieTrailor = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const jsonData = await data.json();

    console.log("jsonData-->", jsonData);

    const filterData = jsonData?.results?.filter((video) => {
      return video.type == "Trailer";
    });

    console.log("filterData->", filterData);

    const trailer =
      filterData.length > 0 ? filterData[0] : jsonData?.results?.[0];

    //now adding this trailor to store
    dispatch(addMovieTrailor(trailer));
  };

  useEffect(() => {
    getMovieTrailor();
  }, []);
};

export default useMovieTrailor;
