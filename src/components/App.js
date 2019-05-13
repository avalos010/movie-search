import React, { useEffect, useReducer } from "react";
import "../css/App.css";
import SearchInput from "./SearchInput";
import Reducer from "../reducer/Reducer";
import Context from "../context/Context";
import MovieList from "./MovieList";
import TvList from "./TvList";
import PersonList from "./PersonList";
import "../css/App.css";
import "../css/normalize.css";

function App() {
  const [state, dispatch] = useReducer(Reducer, {
    movies: [],
    tv: [],
    person: []
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        <SearchInput />
        {/* <MovieList /> */}
        {/* <TvList /> */}
        <PersonList />
      </Context.Provider>
    </>
  );
}

export default App;
