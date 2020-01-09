import React from "react";
import "./Loading.css";

import loadingCat from "./assets/loading-cat.gif";

const Loading: React.SFC<{}> = () => (
  <div className="loading-wrapper">
    <img className="loading-gif" alt="loading-cat-gif" src={loadingCat} />
  </div>
);

export default Loading;
