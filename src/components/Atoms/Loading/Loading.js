import React from "react";
import "./Loading.css";

import loadingCat from "./assets/loading-cat.gif";

const Loading = () => (
  <div className="loading-wrapper">
    <img className="loading-gif" alt="loading-cat-gif" src={loadingCat} />
  </div>
);

export default Loading;
