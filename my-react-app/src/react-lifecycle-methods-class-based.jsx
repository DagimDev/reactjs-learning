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

// Render(): We are already familiar with the render method in React, each class
// component needs to contain a render method, and it is simple to understand. React
// renders HTML to the web page by using a function called render(). The purpose of the
// function is to display the specified HTML code inside the specified HTML element. In
// the render() method, we can read props and state and return our JSX code to the root
// component of our app.

// ComponentDidUpdate(): This method is not called for the initial render, but it is every
//     time the state of the component changes/gets updated. Note: componentDidMount will
//     execute only after our index.html is rendered/generated on browser. Meaning, if we have
//     componentDidMount() {alert(“hi”)}, the “hi” will display only after index.html is
//     generated and shown on browser. Note: Another thing to note here is that, if we have
//     componentDidUpdate() method called to update an initial state (assume a button is
//     clicked and a state value has changed to “hi”), even if the component renders, the “hi”
//     will not run every time we use componentDidUpdate().
// ▪ Parameters of componentDidUpdate(): The method takes previous props,
// previous state and snapshot as its three parameters. Because you have previous
// state and props values, it allows you to compare the current value with the
// previous. Inside the method we can check if a condition is met and perform an
// action based on it.
// ▪ Avoid setState() componentDidUpdate(): Never use setState() inside
// componentDidUpdate() because it would lead to infinite loop and cause extra
// re-renderong that is not visible to the user. However, if you want to call setState()
// in componentDidMount(), you must wrap it in a condition to avoid an infinite
// loop. To avoid an infinite loop, all the network requests are needed to be inside a
// conditional statement like below:
 componentDidUpdate(prevProps, prevState) {
 if (prevState.data !== this.state.data) {
 // Now fetch the new data here.
 }
 }
// ▪ Look at the counter example we did in class to explain how to use
// componentDidUpdate(). In the below example, we have tow states, the “count”
// and the “age” states. We have two buttons for each and when a count button is
// clicked, we want the count state value to increase by 1 and when the age button is
// clicked, we want the initial age state to increase by 10. Whenever value of the
// count state is changed, we also want the title of the browser document to change
// to that same value. Note that, we do not want the title of the document to change
// when age state is changed. We said we call componentDidUpdate() only after
// there is a change in state of a component. Here too, we will use
// componentDidUpdate() to change the document title only after we make sure the
// count state has changed. Please notice how a conditional statement is used under
// the componentDidUpdate() method to execute the document title update only if
// the count value changes (to avoid title update when age updates only)
class UsingClassLifeCycleComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
      age: 5,
    };
  }
  updateAge = () => {
    this.setState(() => {
      return { age: this.state.age + 10 };
    });
  };
  updateCount = () => {
    this.setState(() => {
      return { count: this.state.count + 1 };
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `Count: ( ${this.state.count} )`;
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.updateCount}>COUNT:{this.state.count}</button>
        <button OnClick={this.updateAge}>AGE: {this.state.age}</button>
      </div>
    );
  }
}



// ComponentWillUnmount(): This is the last lifecycle method, which will be called when
// the component is about to be removed from the DOM tree and destroyed. When a
// component is removed from DOM, componentWillUnmout() will be executed before it is
// unmounted. Note: We cannot call setState() during this lifecycle method because the
// component is destroyed and cannot be re-rendered. Once a component instance is
// unmounted, it will never be mounted again. A few examples are, when you get alert on
// your browser saying, “are you sure you want to leave this page”, they are telling you that
// the component you are on is about to be destroyed, unsubscribing from a website and
// other cleanup routines. Example for ComponentWillUnmount(): Assume you have a
// parent component called ExampleComp.js. In your parent component, let us say you want
// to show a header component, a child component, called “MyHeader.js”. You decided to
// show the MyHeader component in your parent component when the component is
// mounted originally. However, there is a delete button that you created to delete the
// MyHeader component from the parent component when the button is clicked.
// Parent component (ExampleComp.js)
constructor() {
super();
this.state = {
show: true,
};
}
deleteHeader = () => {
this.setState({ show: false });
};
render() {
let myHeader;
if (this.state.show) {
myHeader = <FufiChild />;
}
return (
<div>
{myHeader}
<button onClick={this.deleteHeader}>
DeleteHeader </button>
</div>
);
}
// Child component (MyHeader.js)
class MyHeader extends Component {
componentWillUnmount() {
alert("The FufiChild component is about to be unmounted.");
}
render() {
return <h1>HelloReact!</h1>;
} };