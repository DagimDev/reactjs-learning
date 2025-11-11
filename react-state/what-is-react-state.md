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
