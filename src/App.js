import React, { useState } from "react";
import "./styles.css";
var heading = "sadhik";
var color = "red";
var likeCounter = 0;

export default function App() {
  var [like, setlike] = useState(0);
  function clickhandler() {
    console.log("clicked", likeCounter);
    likeCounter = likeCounter + 1;
    setlike(likeCounter);
  }
  return (
    <div className="App">
      <h1>
        welcome <span style={{ color: color }}>{heading}</span>
      </h1>
      <input></input>
      <button onClick={clickhandler}>like</button>
      {like}
    </div>
  );
}
