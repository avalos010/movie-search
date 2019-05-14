import React, { useContext } from "react";
import Context from "../context/Context";
import TvShow from "./TvShow";

function TvList() {
  const { state } = useContext(Context);

  return (
    <div className="media_list">
      {state.tv && state.tv.map(tv => <TvShow key={tv.id} tv={tv} />)}
    </div>
  );
}
export default TvList;
