import React from "react";
import ReactDOM from "react-dom";

import Hello from "./component/Hello";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Hello 
      to="Ringo"
      from="Paul"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
