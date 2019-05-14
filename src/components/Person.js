import React from "react";
import StarRatings from "react-star-ratings";
import KnownFor from "./KnownFor";

const Movie = ({ p }) => (
  <div className="result_container">
    <h3>{p.name}</h3>
    <div className="result-img">
      <img
        src={`http://image.tmdb.org/t/p/w200/${p.profile_path}`}
        alt={p.name}
      />
    </div>
    <div className="actor_known_for">
      <h3>Popular Movies Featured</h3>
      {p.known_for &&
        p.known_for.map((act, i) => {
          if (act.media_type === "movie") return <KnownFor key={i} act={act} />;
        })}
    </div>
  </div>
);

export default Movie;
