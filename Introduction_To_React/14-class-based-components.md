Class based components
    React class component before and after ES6: When React was initially released in
    2013 and until ES6 was released in 2015. JavaScript did not have classes. Because
    JavaScript didn't have a built-in class system then, React developers used React’s
    'create-react-class' module to create class components. With ES6, React now allows you
    to implement component classes that use ES6 JavaScript classes. The result is the same,
    both ways can create a component class. But the syntax is different.

▪ Syntax of React before ES6: We do not need to use this syntax now
     let createReactClass = require('create-react-class');
        let Greeting = createReactClass({
        render: function() {
        return <h1>Hello</h1>;
     }
     });
    
Syntax of React after ES6: Creating a class component is pretty simple if you follow the following steps:
    ● Import the React and Component from React
    ● Define a class that extends Component and has a render function.
    ● Export your component to make it available for other compoents
    ● This is the syntax we now use to create class components.

        import React, { Component } from 'react';

            class YourComponent extends Component {
                render() {
                    return <h1>Hello</h1>;
                }
            }

        export default YourComponent;

● Note: The above syntax is the one that we will use to create class components

Explaining each term/keyword in class component
     import React, { Component } from 'react:

    Import React: If you have created a new react app using
    create-react-app recently, you will notice that your React app works fine
    without even importing React from “react”. We needed to import the
    “react” library because it is used to convert our JSX into vanilla
    JavaScript using the library’s createElement() method for the browser.
    However, after the release of React 17, our JSX is converted to vanilla
    JavaScript automatically without using React library’s createElement()
    method.

● Component: React has different built-in methods (called React lifecycle
    methods). These built-in methods are found under a React class called
    Component. You will need to import the Component class if you want to
    use this class in your component
▪ class YourComponent extends Component”: If you want your new component
    to inherit properties of the Component class, in addition to importing this class,
    you have to make sure that your component to extend the Component class.
▪ render(): The render () method in class-based components returns your JSX
    (then converted to HTML) that will be rendered later in our index.html
▪ export default YourComponent: This is basically making your new component
    available for other components to use it

