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
