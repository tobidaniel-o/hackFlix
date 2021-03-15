import { useState, useEffect } from "react";
import axios from "axios";

const Catalogue = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // ater the component has mounted, make an API call
    axios({
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "8afdd130b22be86a60cb4c3e8b56a739",
        language: "en-US",
        sort_by: "popularity.desc",
        include_adult: "false",
        include_video: "false",
        page: 1,
        primary_release_year: 2020,
      },
    }).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  return (
    <div className="catalogue">
      {movies.map((movie) => {
        return (
          <div className="movie" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`Poster for ${movie.original_title}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Catalogue;
