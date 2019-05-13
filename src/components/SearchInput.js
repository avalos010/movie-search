import React, { useContext, useState } from "react";
import Context from "../context/Context";
import key from "../secret/secret";

const SearchInput = () => {
  const { dispatch, state } = useContext(Context);

  const [query, setQuery] = useState("");
  const [option, setOption] = useState("movie");

  const handleQueryChange = e => {
    setQuery(e.target.value);
  };

  const handleSelectChange = e => {
    setOption(e.target.value);
  };

  const handleSearch = async e => {
    e.preventDefault();
    if (query) {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/${option}?api_key=${key}&language=en-US&include_adult=false&query=${query}`
      );
      const json = await response.json();
      dispatch({ type: `${option}Results`, payload: json.results });
      setQuery("");
    } else {
      alert("Please Enter a query");
    }
  };

  return (
    <form className="input_search">
      <div className="input_search_container">
        <input value={query} type="text" onChange={handleQueryChange} />
        <select onChange={handleSelectChange}>
          <option value="movie">Movies</option>
          <option value="tv">Tv Shows</option>
          <option value="person">People</option>
        </select>

        <input
          className="input_search_submit"
          type="submit"
          onClick={handleSearch}
          value="search"
        />
      </div>
    </form>
  );
};

export default SearchInput;
