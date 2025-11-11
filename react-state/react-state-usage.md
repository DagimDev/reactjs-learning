Steps to add and use states in your class component
How to initialize and use states in React components:
▪ Before 2019: Up until the introduction of React Hooks in 2019, the way to use
    states was by using class components. We could not use functional components
    and take advantage of States as well. That was because the way we initialize
    states in a component was only inside a constructor function which only was
    possible if the component is Class based component.
▪ After 2019 (after Hooks): The introduction of Hooks lets us use states and other
    React features without writing a class. We will cover both ways of using states below

    
 Steps to add and use states in your class component
● How to initialize and use states in React components:
▪ Before 2019: Up until the introduction of React Hooks in 2019, the way to use
    states was by using class components. We could not use functional components
    and take advantage of States as well. That was because the way we initialize
    states in a component was only inside a constructor function which only was
    possible if the component is Class based component.
▪ After 2019 (after Hooks): The introduction of Hooks lets us use states and other
    React features without writing a class. We will cover both ways of using states below
● Steps to add and use states on your class components: While using class components,
    we create states when we create our component. States can be initialized inside the
    constructor function of the component or directly without constructor function
▪ Step 1: Create your class component
▪ Step 2: Add the constructor function in your component. As a revision, the
    constructor is a method (built in function) in a class that’s automatically called
    when we want to create an object instance from that class. When we use the
    constructor method in React class components, the constructor calls the parent
    class, called Component, and helps in constructing the state object from that class.
▪ Step 3: In your constructor, call the “super()” function. This is to set a property
    or access 'this' inside the constructor in your component. In JavaScript, super()
    function calls the parent class constructor. If we create an ES6 class or a function,
    and extend another class from it, then the child class can access the
    methods/variables of the parent class using super() method. In ES6 class
    constructors MUST call super() if they are subclasses extending from a parent
    class.
▪ Step 4: Add an object called “state” in your constructor. To do this, add
    “this.state” right after calling super() and set it equal to an empty object.
▪ Step 5: Once we have created the empty object, you can fill it with data of
    whatever key and value pair you want.
▪ Step 6: To be able to access state from the render method, we just call the value
    of the state we want to use inside the JSX returned under the render method. You
    could do that in a paragraph tag like below:
        ▪ <p>{this.state.topping}</p>