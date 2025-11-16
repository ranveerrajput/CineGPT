import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

const VideoBackground = ({ movieId }) => {
  const movieTrailor = useSelector((store) => store.movies.movieTrailor);
  console.log(movieTrailor);

  useMovieTrailor(movieId);

  return (
    <div className="absolute">
      <iframe className="w-screen h-screen opacity-95"
        src={"https://www.youtube.com/embed/" + movieTrailor?.key + `?&autoplay=1&mute=1`}
        
        title="YouTube video player"
       
      ></iframe>
    </div>
  );
};

export default VideoBackground;
