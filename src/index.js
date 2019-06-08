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
        bangs={3}
        questionMark={5}
        twoDash={2}
        img={"https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4578/s300/untitled.png"}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
