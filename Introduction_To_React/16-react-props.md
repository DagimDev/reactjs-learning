React props
● Passing data between React components: Data sometimes needs to be able to move
    from children to parent, from parent to children, or between sibling components. Let us
    assume you want to change the data in a component with out actually hard coding the
    change in that component. Example: You have a component called GreetPeople that
    renders the message Hello followed by name (name that changes from one name to
    another). One way to have the greet name to change is to create different components that
    render the Hello message with different names. Another way to have the name change
    dynamically is using props
● Props: Props is just a shorter way of saying properties. They are properties that hold
    information about a component. Props are variables that get passed to the component
    from parent component (like a parameter is passed to a function). We use props in React
    to pass data from one component to another (from a parent component to a child
    component(s))
▪ Props are objects of React and contain the number of key-value pairs.
▪ Props are objects with immutable properties, meaning, we cannot change their
    value throughout the component. This is because changing value of props won’t
    make sense, it will be like changing the argument of an adder function to fixed
    parameter.
▪ Props can be available in both classes based and function-based components without any issue.
● Using props to pass data from parent to child components: This is the easiest
    direction in React to transfer data. If you have access to data in your parent component
    that you need your child component to have access to, you can pass data from parent as a
    prop to the child by initiating the prop within the parent. Let us start by defining what
    props are and how to use props in our components
▪ Note: React’s data flow between components is uni-directional (from parent to child only).
▪ Note: You can use props in both functional and class components. You can even
    use functional component for your parent component and use a class component
    for your child component while using props.

Why use props:
▪ We use props in React to pass data from one/ parent component to a child
▪ Props allow us reuse components dynamically. It is just like creating a function
    that takes an argument. Different components will have their own specific
    properties. Meaning the data will not be static as the component’s data can be
    modified to fit what we want.
● Steps to use props: 
    ▪ Step 1: Create two components; a parent and a child component
    ▪ Step 2: Import the child component in the parent component and return it.
    ▪ Step 3: Import and return the parent component in your app.js
    ▪ Step 4: Initiate/declare the props in your parent component
    ▪ Step 5: Send props into a parent component,
● By returning your props as HTML attributes:
o Example:
▪ return <ChildNavigation LinkURL="/Mac" />; or
• By returning your props as string:
▪ let urlName = "/Mac ";
▪ return <ChildNavigation LinkURL ={urlName} />;
or
• By returning your props as objects:
▪ let urlName= { theURL: "/Mac" };
▪ return <ChildNavigation LinkURL={urlName.
theURL} />;

Why use {} in JSX: Curly braces { } is special syntax in JSX. It
    is used in JSX (which is basically HTML) to instruct React to
    process the expression inside the braces as JavaScript during
    compilation. That JavaScript expression can be a variable,
    function, an object, or any code.


Using props in class components:
// Child component here
import { Component } from "react";
        class FufiChild extends Component {
            render() {
                return <h1>Hello {this.props.Name}</h1>;
            }
        }
export default FufiChild;

// Parent component here
    import React, { Component } from "react";
    import FufiChild from "./FufiChild";
        class FufiParent extends Component {
            render() {
                return <FufiChild Name="My name is Sen" />;
            }
        }
export default FufiParent;

Using props in function components:
     import React from "react";

     function FufiChild(props) {
        return (
            <h1>Hello {props.Name}</h1>
        );
     }
     export default FufiChild;


Multiple props: You can use as many props as you like. Let us see how you can
use multiple props in 2 examples below
▪ Example 1:
//Child component
import React from "react";
function FufiChild(props) {
return (
<h1>
This is {props.Name}: {props.Age} and
{props.Gender}
</h1>
);
}
export default FufiChild;
// Parent component
import React, { Component } from "react";
import FufiChild from "./FufiChild";
class FufiParent extends Component {
render() {
return <FufiChild Name="Abebe" Age="he is 55"
Gender="male" />;
}
}
export default FufiParent; 


(spread attributes): Using spread attributes to make passing
props easier. For this example, use the above child component.
// Parent component
import React, { Component } from "react";
import FufiChild from "./FufiChild";
class FufiParent extends Component {
render() {
let allProps = {
Name: "Abebe",
Age: "he is 44",
Gender: "male",
};
return <FufiChild {...allProps} />;
}
}
export default FufiParent;


Destructuring props
o Destructuring (revision): In our previous discussion about destructuring we said
    that the destructuring concept was introduced in ES6 to allow us to extract
    multiple pieces of data from an array or object and assign them to their own
    variables. Destructuring, does not change the array or the object, it makes a copy
    of the desired object or array element by assigning them in its own new variables
    so that we can use this new variable anytime.


Destructuring props in functional components: We achieve destructuring of
our props in functional components as we pass in the props argument in the
function.
▪ Notice below that destructuring our props gives us access to both the
“Name” and the “Age” properties, which we need for different children
components.
//Parent component
import React, { Component } from "react";
import ChildDestructuringProps from
"./ChildDestructuringProps";
class ParentDestructuringProps extends Component {
render() {
return (
<div >
<ChildDestructuringProps Name="Abebe" Age="is 55" />
</div>
);
}
}
//Child component
import React from "react";
function ChildDestructuringProps(props) {
const { Name, Age } = props;
return (
<div>
{Name} {Age}
</div>
);
}
export default ChildDestructuringProps;

Destructuring props in class components: When we access the props using the
“this” keyword, we have to use this/ this.props throughout the program, but by the
use of destructuring, we can discard this/ this.props by assigning them in new
variables. This is very difficult to monitor props in complex applications.
▪ So, how do we destructure props in class components? We destructure
props in the render() function under the child component by assigning all
of our props on a new variable. Please note that unlike functional
components, in class components we do not acheive destructuring when
the props are passed in in the function’s argument. We achieve the
destructuring of props in class components wherever the variables are
called.
▪ Notice below that destructuring our props gives us access to both the
“Name” and the “Age” properties, which we need for different children
components.
▪ Example:
 //Parent component
import React, { Component } from "react";
import ChildDestructuringProps from "./ChildDestructuringProps";
class ParentDestructuringProps extends Component {
render() {
return (
<div >
<ChildDestructuringProps Name="Abebe" Age="is 55" />
</div>
);
}
}
export default ParentDestructuringProps;
// Child component
import React, { Component } from "react";
class ChildDestructuringProps extends Component {
render() {
const { Name, Age } = this.props;
return (
<h1>{Name} {Age}</h1>
);
}
}
export default ChildDestructuringProps