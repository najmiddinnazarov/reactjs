import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./components/lifecycle";
import Bind from "./components/bind";
import Root from "./root";

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
    {/* <Index /> */}
    {/* <Bind /> */}
    <Root />
  </React.StrictMode>
);
