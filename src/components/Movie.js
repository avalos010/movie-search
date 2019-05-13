import React from "react";
import StarRatings from "react-star-ratings";

const Movie = ({ movie }) => (
  <div className="result-container">
    <h3>{movie.title}</h3>
    <div className="result-img">
      <img
        src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={movie.title}
      />
    </div>

    <span className="result-release-date">
      release date: {movie.release_date}
    </span>
    <div className="result-overview">
      <p>{movie.overview}</p>
    </div>
    <StarRatings
      rating={movie.vote_average}
      numberOfStars={10}
      starDimension="15px"
      starSpacing="2px"
    />
  </div>
);

export default Movie;
