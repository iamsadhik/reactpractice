import React, { useState } from "react";
import "./styles.css";
var heading = "sadhik";
var color = "red";
var db = {
  "🚣": "Person Rowing Boa",
  "🏕️": "Camping",
  "🏞️": "National Park",
  "🏝️": "Desert Island",
  "🌇": "Sunset",
  "🚅": "Bullet Train"
};

var database = Object.keys(db);
export default function App() {
  var [type, settype] = useState();

  function clickHandler(vijay) {
    var output = db[vijay];
    settype(output);
  }
  function inputHandler(message) {
    var userInput = message.target.value;
    var output = db[userInput];
    settype(output);
  }

  return (
    <div className="App">
      <h1>
        welcome <span style={{ color: color }}>{heading}</span>
      </h1>
      <input onChange={inputHandler}></input>
      <h3>{type}</h3>
      <h2>emojis we know:</h2>
      <div>
        {database.map(function (vijay) {
          return (
            <span
              onClick={() => clickHandler(vijay)}
              key={vijay}
              style={{ padding: "0.5rem", cursor: "pointer" }}
            >
              {vijay}
            </span>
          );
        })}
      </div>
    </div>
  );
}
