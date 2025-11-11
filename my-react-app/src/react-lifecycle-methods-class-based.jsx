//  React component’s lifecycle methods (class based)
// ● What is a React component’s lifecycle? React component’s lifecycle is as the series of
// events that happen from the birth of a React component to its death. In short, React
// component lifecycle is the “lifetime” of a component.

//  What are the four stages a React component goes through in its lifecycle?
// ▪ Initialization: This is the stage where the component is constructed with the
// given Props and initial state. This is done in the constructor of a class component.
// ▪ Mounting: This is the stage where the component is mounted on the DOM and
// rendered for the first time on the webpage. Mounting is the stage of rendering the
// JSX returned by the render method itself. This is basically the birth of a
// component.
// ▪ Updating: Updating is the stage when the state of a component is updated, and
// the application is repainted. This is basically the growth of a component.
// ▪ Unmounting: As the name suggests unmounting is the final step of the
// component lifecycle where the component is removed from the page. This is
// basically the death of a component.

//     What are the React Life Cycle Methods? These are React’s predefined functions
// (methods) that are invoked/invoked in different stages/ lifecycles of the component’s
// existence. Note: One important thing to notice is that lifecycle methods can only be used
// in class components. In functional components we have other options (Hooks). But more
// on that in the next class. Below let us discuss the most common lifecycle methods we
// can use the different stages of a React component; ComponentDidMount(), Render(),
// ComponentDidUpdate() and ComponentWillUnmount()

//             ComponentDidMount(): As the name clearly suggests, this function is invoked as soon
// as the component is mounted on the DOM or inserted into the index.html. Meaning, this
// function gets invoked once right before the render() function is executed for the first time.
// Common tasks that are done in this method are connecting to web APIs or JavaScript
// frameworks, setting Timers using setTimeout or setInterval and adding event listeners. In
// the below example, when the component is mounting it is rendered with the stateOne
// "Abebe". When the component has been mounted, a timer changes the state, and the state
// becomes "Hana".
import React, { Component } from "react";
class Example extends Component {
  constructor() {
    super();
    this.state = {
      stateOne: "Abebe",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ stateOne: "Hana" });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>{this.state.stateOne}</h1>
      </div>
    );
  }
}

export default Example;
