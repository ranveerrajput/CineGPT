import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  console.log("Movies--->", movies);

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {
        // main container
        //   video background
        //   title
        // secondary container
        //   movie section *n
        //     cards * n
      }
    </div>
  );
};

export default Browse;
