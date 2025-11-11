// ExampleComp.js (parent component)
import React, { Component } from "react";
import OtherExample from "./OtherExample";
class ExampleComp extends Component {
  constructor() {
    super();
    this.state = {
      state1: 0,
      state2: "Test",
    };
  }
  render() {
    return (
      <div>
        <OtherExample myData={this.state.state2} />
      </div>
    );
  }
}
export default ExampleComp;
