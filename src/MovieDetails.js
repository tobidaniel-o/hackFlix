import { useState, useEffect } from "react";
import axios from "axios";

function MovieDetails(props) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const { movieID } = props.match.params;
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieID}`,
      params: {
        api_key: "8afdd130b22be86a60cb4c3e8b56a739",
        language: "en-US",
        sort_by: "popularity.desc",
        include_adult: "false",
        include_video: "false",
        page: "1",
      },
    }).then((response) => {
      setMovie(response.data);
    });
  }, []);


  const { title, tagline, overview, poster_path } = movie;
  return (
    <div className="poster">
      <div className="description">
        <h1>{title}</h1>
        <h2>{tagline}</h2>
        <p>{overview}</p>
      </div>

      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={`Movie poster for ${title}`}
        />
      </div>
    </div>
  );
}
export default MovieDetails;
