import React, { Component } from "react";

class Bind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.plus = this.plus.bind(this);
    // this.minus = this.minus.bind(this);
  }
  render() {
    const plus = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      this.setState({ count: this.state.count - 1 });
    };
    return (
      <div>
        <h1>Bind</h1>
        <h1>Count {this.state.count}</h1>
        <button onClick={plus}>Plus</button>
        <button onClick={minus}>Minus</button>
      </div>
    );
  }
}
export default Bind;
