import React, { Component } from "react";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>React lifecycle</h1>
        <h1>Count {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Plus
        </button>
      </div>
    );
  }

  // render yurishidan oldin yuradi
  componentWillMount() {
    console.log("componentWillMount");
  }
  // renderdan keyin yuradi
  componentDidMount() {
    console.log("componentDidMount");
  }
  // parentdan childga prop kelgan vaqtda yuradi
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  // component update qilish kerakmi yoki update qilish kerak emasmi?
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    console.log(this.state.count);
    return true;
  }
  // render yurishidan oldin va prop kelishidan keyin yuradi
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  // DOM created
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  // DOM removed element
  componentWillUnmount() {
    console.log("componentWillMount");
  }
}
export default Index;
