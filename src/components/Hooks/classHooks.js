import React, { Component } from "react";

class ClassHooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div style={{ flex: 1 }}>
        <h1>Class Component</h1>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Plus
        </button>
      </div>
    );
  }
}
export default ClassHooks;
