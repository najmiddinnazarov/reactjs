import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import State from "./state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let info = [
  { title: "WBA", name: "IT center" },
  { title: "WBB", name: "IT center" },
  { title: "WBC", name: "IT center" },
  { title: "WBD", name: "IT center" },
  { title: "WBE", name: "IT center" },
  { title: "WBF", name: "IT center" },
];

root.render(
  <React.StrictMode>
    <App>
      <h1>Index.js</h1>
    </App>
    <State />
  </React.StrictMode>
);
