import React, { Component } from "react";
class HeaderComponen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header
        style={{
          backgroundColor: "#003366",
          margin:-1,
          marginTop: -1,
          marginBottom: 5,
          padding: 20,
        }}
      >
        <h1
          style={{
            color: "#fff",
            marginTop: 10,
            marginBottom: 15,
            fontSize: 35
          }}
        >
          TODO LIST 
        </h1>
        <h3
          style={{
            color: "#fff",
            marginTop: 15,
            marginBottom: 20,
            fontSize: 20
          }}
        >
          React
        </h3>
      </header>
    );
  }
}

export default HeaderComponen;
