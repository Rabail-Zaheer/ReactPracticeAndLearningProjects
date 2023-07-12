import React, { useState } from "react";
import ReactDOM from "react-dom/client"; /* 
import "./index.css";
import App from "./App"; */

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState("");
  return (
    <div>
      <StarRating color="blue" maxRating={5} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "fine", "good", "Excellent"]}
    />
    <StarRating maxRating={10} color="blue" className="abc" />
    <StarRating maxRating={8} color="red" className="abc" defaultRating={5} /> */}

    <Test />
  </React.StrictMode>
);
