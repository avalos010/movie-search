import React, { useContext } from "react";
import Context from "../context/Context";
import Movie from "./Movie";

function MovieList() {
  const { state } = useContext(Context);

  return (
    <div className="media_list">
      {state.movies &&
        state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </div>
  );
}
export default MovieList;
