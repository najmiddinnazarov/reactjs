import React, { Component } from "react";
import ClassHooks from "./components/Hooks/classHooks";
import FunctionHooks from "./components/Hooks/functionHooks";

class Root extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <ClassHooks />
        <FunctionHooks />
      </div>
    );
  }
}
export default Root;
