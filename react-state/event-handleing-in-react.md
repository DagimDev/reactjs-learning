Event handlers: Event handlers determine what action is to be taken
    whenever an event is fired. This could be a button click or a change in a
    text input. Essentially, event handlers are what make it possible for users
    to interact with your React app. In vanilla JavaScript, if you want to add
    an onclick event handler on a button element, you first need to select the
    DOM element, then you need to attach an event listener with the
    .addEventListener() method. Inside this method, you can call or define
    another function that will execute when the event is triggered.

Handling events in React: The way you bind an event handler with a
    React element is very similar with how we did it when we bind
    JavaScript event handlers with HTML element, except few exceptions. In
    React, each component has its own markup and methods, and in most
    cases, there is no need to add or remove event listeners. You can simply
    declare the function to be called inside your component, and immediately
    call it inside the return() method. Below, let us compare event handling
    in vanilla JavaScript and React.
▪ Event handling in vanilla JS: <button onclick="sayHello()">Say Hello <button>
    ● Note: Unlike vanilla JavaScript (DOM) events, React events are named using lowercase
    ● Note: DOM event handlers appear as a string
    ● Note: You simply return false to avoid default behaviorin HTML
▪ Event handling in React: <button onClick={sayHello}> Say Hello <button>
    ● Note: Unlike vanilla JavaScript events, React events are
        named using camelCase (example: onClick), rather than lowercase
    ● Note: React event handlers appear inside curly braces rather than as a string
    ● Note: You in React, you must explicitly call preventDefault to avoid default behavior
    ● Note: Make sure you are not calling the event handler
        function (make sure to call the function without
        brackets) when you pass it to the component
● Steps to take when handling events in React:
    ▪ Step 1: Create a component
    ▪ Step 2: Define a JavaScript function inside your class as a method.
● Binding required for class components: In class
    components, if you want your function to access pass
    props or state from your component, you need to bind
    the function to your component. In JavaScript, class
    methods (functions in a class) are not bound to class
    instances by default. Therefore, you need to use the
    "this" key word to bind the function to the class instance
    (your component in your case). There are different ways
    of binding a class method to your class component
▪ Step 3: Return an HTML element in your component and
    execute your event handler function when an event happens on
    the HTML element.

● Handling events in React: The way you bind an event handler with a
    React element is very similar with how we did it when we bind
    JavaScript event handlers with HTML element, except few exceptions. In
    React, each component has its own markup and methods, and in most
    cases, there is no need to add or remove event listeners. You can simply
    declare the function to be called inside your component, and immediately
    call it inside the return() method. Below, let us compare event handling
in vanilla JavaScript and React.
▪ Event handling in vanilla JS: <button onclick="sayHello()"> Say Hello <button>
● Note: Unlike vanilla JavaScript (DOM) events, React
events are named using lowercase
● Note: DOM event handlers appear as a string
● Note: You simply return false to avoid default behavior
in HTML
▪ Event handling in React: <button onClick={sayHello}> Say
Hello <button>
● Note: Unlike vanilla JavaScript events, React events are
    named using camelCase (example: onClick), rather than
    lowercase
● Note: React event handlers appear inside curly braces rather than as a string
● Note: You in React, you must explicitly call
    preventDefault to avoid default behavior
● Note: Make sure you are not calling the event handler
    function (make sure to call the function without
    brackets) when you pass it to the component


                        Steps to take when handling events in React
        ▪ Step 1: Create a component
        ▪ Step 2: Define a JavaScript function inside your class as a method.
        ● Binding required for class components: In class
            components, if you want your function to access pass
            props or state from your component, you need to bind
            the function to your component. In JavaScript, class
            methods (functions in a class) are not bound to class
            instances by default. Therefore, you need to use the
            "this" key word to bind the function to the class instance
            (your component in your case). There are different ways
            of binding a class method to your class component
        ▪ Step 3: Return an HTML element in your component and
            execute your event handler function when an event happens on
            the HTML element