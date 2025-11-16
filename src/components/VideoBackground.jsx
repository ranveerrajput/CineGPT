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
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
