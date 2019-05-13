import React, { useContext } from "react";
import Context from "../context/Context";
import Person from "./Person";

function MovieList() {
  const { state } = useContext(Context);

  return (
    <div>
      {state.person && state.person.map(p => <Person key={p.id} p={p} />)}
    </div>
  );
}
export default MovieList;
