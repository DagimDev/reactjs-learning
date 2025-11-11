React States
1.1 Definition of state: what is the difference between state and props?
● Props (quick revision): Props stand for properties. They are JavaScript objects and are
    used to pass data from a parent component to a child component in React. In short, props
    are used to create communication between React components. You can place a piece of
    code in a function and reuse it over and over. We know that React components are
    JavaScript functions which return JSX. We also know that components are meant to be
    re-used. Think of props as parameters of a function (or parameter to your React
    component). Props are the values that are passed into components to be used. Note:
    Unlike parameters, props should not be changed. If any internal changes need to happen,
    use states.
● States: State is a built in JavaScript object that is used to contain data about a
    component’s current situation. As stated above, React components are JavaScript
    functions which return JSX. You can understand states as local variables of a function
    which can only be accessed and changed within component. A state in React Component
    is its own local state; it cannot be accessed and modified outside the component.

Why we need states: State comes in handy when you want to update and
    re-render your component based on something the user has done. Good example
    is when we have form (input) and when the user updates the form with her new
    information, we will use state to store the user’s updated value to manage the
    updated information. In short, state is used to keep track of information between
    multiple renderings of a component. Example: Tracking information about the
    component before and after clicking a button
▪ Why not just use variables than states in React: Though using state may seem
    similar to class variable, the major difference between using class variables and
    state is updating data. When you use states, you do not have to manually
    reassigning the variable, you just use the this.setState() method to change value
    of states.

        ▪ Note: A component itself can create, update and use state
        ▪ Note: Just like any variable, a component's state can change over time. When the
            state object changes, the component re-renders.
