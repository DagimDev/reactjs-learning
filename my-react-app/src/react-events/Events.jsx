// Handling events in class components: Handling events when your
// event handler function does not need to access the components props and
// states

import React, { Component } from "react";

class Events extends Component {
  sayHi() {
    alert("hi");
  }
  render() {
    return <button onClick={this.sayHi}>Click me </button>;
  }
}

export default Events;


// Handling events in class components: Binding event handling function
// to your class component inside the constructor by calling the .bind(this)