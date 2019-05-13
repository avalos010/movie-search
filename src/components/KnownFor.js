import React from "react";

const KnownFor = ({ act }) => (
  <div className="actor-movies">
    <h4>{act.title}</h4>
    <img
      width={80}
      src={`http://image.tmdb.org/t/p/w200${act.poster_path}`}
      alt={act.title}
    />
  </div>
);

export default KnownFor;
