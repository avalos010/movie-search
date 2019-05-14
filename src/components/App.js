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
import { Switch, Route } from "react-router-dom";

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
        <div className="results_container">
          <Switch>
            <Route exact path="/movie" component={MovieList} />
            <Route exact path="/tv" component={TvList} />
            <Route exact path="/person" component={PersonList} />
          </Switch>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
