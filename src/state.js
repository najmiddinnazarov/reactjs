import React from "react";

class State extends React.Component {
  constructor(stt) {
    super(stt);

    this.state = {
      count: 0,
      title: "Typing...",
      country: "Uzb",
    };
  }

  render() {
    const plus = () => {
      if (this.state.count < 10) this.setState({ count: this.state.count + 1 });
    };

    const minus = () => {
      if (this.state.count > 1) this.setState({ count: this.state.count - 1 });
    };

    const onchange = (e) => {
      this.setState({ title: e.target.value });
    };

    const onselect = (e) => {
      this.setState({ country: e.target.value });
    };

    const checked = (e) => {
      console.log(e.target.checked);
    };

    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <button onClick={plus}>plus</button>
        <button onClick={minus}>minus</button>

        <h1>{this.state.title}</h1>
        <input onChange={onchange} type="text" />

        <h1>{this.state.country}</h1>
        <select onChange={onselect}>
          <option value="Uzb">Uzb</option>
          <option value="Eng">Eng</option>
          <option value="Rus">Rus</option>
        </select>

        <input onChange={checked} type="checkbox" />
      </div>
    );
  }
}

export default State;
