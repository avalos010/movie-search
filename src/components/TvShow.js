import React from "react";
import StarRatings from "react-star-ratings";

const TvShow = ({ tv }) => (
  <div className="result_container">
    <h3>{tv.name}</h3>
    <div className="result_img">
      <img
        src={`http://image.tmdb.org/t/p/w200/${tv.poster_path}`}
        alt={tv.title}
      />
    </div>

    <span className="result_release_date">air date: {tv.first_air_date}</span>
    <div className="result_overview">
      <p>{tv.overview ? tv.overview : "No overview available"}</p>
    </div>
    <StarRatings
      rating={tv.vote_average}
      numberOfStars={10}
      starDimension="15px"
      starSpacing="2px"
    />
  </div>
);

export default TvShow;
