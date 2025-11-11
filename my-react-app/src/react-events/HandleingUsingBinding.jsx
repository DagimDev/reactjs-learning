// Handling events in class components: Binding in the render()
// method (using arrow function as a callback): The use the arrow
// functions as a callback was introduced in ES6. When using this
// alternative, our event handler is automatically bound to the component
// instance, and we do not need to bind it in the constructor.
import React, { Component } from "react";
class ExampleComp extends Component {
  sayHi(greetName) {
    console.log("Hi" + " " + greetName); //prints “Hi Abebe”
  }

  render() {
    return <button onClick={() => this.sayHi("Abebe")}>Click me </button>;
  }
}
export default ExampleComp;
// ● Handling events in class components: Binding at the method
// function (using arrow function): With ES7 class properties (currently
// supported with Babel), we can do bindings at the method definition. This
// approach is probably the best way of doing bindings. It’s simple, easy to
// read, and most importantly, it works.
