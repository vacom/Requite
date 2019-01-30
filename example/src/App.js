import React, { Component } from "react";

import Requite from "requite";

const Text = () => <p>Hello Text Component</p>;
const Header = () => <h1>Hello Header Component</h1>;

export default class App extends Component {
  render() {
    const Components = {
      1: Text,
      Header: Header
    };
    return (
      <div>
        <Requite list={Components} type={"Header"} />
      </div>
    );
  }
}
