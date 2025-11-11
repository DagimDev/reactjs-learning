import React, { Component } from "react";

class ExComp extends Component {
  constructor(props) {
    super(props);
    this.sayHi = this.sayHi.bind(this);
  }

  sayHi() {
    console.log(this); //”this” refers to ExampleComp.js
  }
  render() {
    return <button onClick={this.sayHi}> Click on me</button>;
  }
}

export default ExComp;
