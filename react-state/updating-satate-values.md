Updating state values in your class component: setState() method
● Why do we need to update states in a component? State can be
    updated in response to event handlers, server responses, or prop changes.
    While a React component can have initial state, the real power is in
    updating its state. After all, if we did not need to update the state, the
    component should not have any state.
● How do we update our state? The setState() method is the primary
    method we use to update the state of a class component. Note: Always
    use the setState() method to change the state object, since it will ensure
    that the component knows it has been updated and calls the render()
    method.
● The setState() method: This method is defined inside the
    React.Component. We inherit this method from the Component class
    when we call the super() in our constructor. Therefore, the method is
    available to all React components that use state. The setstate() function
    will perform a shallow merge between the new state that you provide and
    the previous state and will trigger a re-render of your component and all
    decedents.
● How does the setState() method update state? The main job of the
    setState() method is to enqueue state changes. Once it enqueues the
    changes, it then tells React that this component and its children, if any,
    need to be re-rendered with the final updated state. Meaning, the
    setState() method is a request to React to batch multiple setState() calls
    into a single update. Therefore, setState() is not an immediate command
    to update states. React may delay executing the etState() command based
    on multiple factors. One factor can be other requests it received prior to
    the current request. Therefore, updating state using the setState() method
    is asynchronous.
▪ Note: When you change a state using the setState() method,
    React updates all of the child components that receive the
    changed state.

What happens after setState() method updates our state? Once our
    state is updated, React simply merges the value of the updated state
    object into the initial state object through the process called, reconciliation.
▪ Reconciliation: Reconciliation refers to how React updates the
    DOM after a change in the component. When we call setState(),
    React creates a new virtual DOM tree containing the reactive
    elements in the component and the new state. Then React figures
    out on how to change the component by comparing the previous
    virtual DOM tree with the new virtual DOM tree using a diffing
    algorithm (way allowing React to update only the DOM portion
    that needs to be changed). After comparison process is done,
    React goes ahead and creates a new virtual DOM that has the
    new changes. Then it updates the Browser DOM with the least
    number of changes possible without rendering the entire DOM
    again

Syntax for setState() method: The method takes two parameters, the
    updater function and the optional call back function like this:
    setState(update, [callback])
▪ The first parameter of setState(), the Updater parameter:
    Updater parameter can either be an object (containing the current
    up-to-date state of the component) or a function (function that
    returns the updated value the state). Example of setState() first
    parameter with an object: It is best to use an object as the
    updater parameter of setState() if you have a static state value
    that does not depend on the previous state value. For instance, if
    your initial state was “Hi” and you want to change it to “Hello”
    upon clicking a button, the state, you can pass an object
    containing the new value directly to this.setState() like this:
    this.setState({ valueOne: "Hello" });

class ExampleComp extends Component {
    constructor() {
        super();
        this.state = {
            valueOne: "Hi",
        };
    }
    updateValue = () => {
        this.setState({ valueOne: "Hello" });
    };
    render() {
        return (
            <div>
                <button onClick {this.updateValue}>
                    Click me
                </button>
                <p>{this.state.valueOne}</p>
            </div>
            );
        }
 }


Example of setState() second parameter with a function:
    Simply stated, the updater function is a function that is passed to
    the setState() method with the updated value of the state and
    props Due to the asynchronous nature of setState, it is not
    advisable to use this.state to get the previous state within
    setState. When you want to apply subsequent/multiple updates to
    your state, you cannot rely on the value of “this.state”
    immediately after calling the setState(). Meaning, when your
    current state depends on your previous state (if for example, your
    state value increments by 2 whenever your button is clicked),
    then you cannot directly pass an object as the updater parameter
    for your setState(). In such cases, make your updater parameter
    to be a function like this: this.setState(function(prevState,
    props){stateChange})
     class ExampleComp extends Component {
     constructor() {
     super();
     this.state = {
     valueOne: 40,
     };
     }
     updateValue = () => {
     this.setState(function () {
     return { valueOne: this.state.valueOne + 2 };
     });
     };
     render() {
     return (
     <div>
     <button onClick {this.updateValue}>Click me</button>
 <p>{this.state.valueOne}</p>
 </div>
 );
 }
 }
 The second parameter of setState(), the optional callback: If you
    want your program to update the value of a state using setState() and then
    perform certain actions on the updated value of state, then you must
    specify those actions in a function which should be the second argument
    of the setState(). If we do not specify such actions in a callback function,
    the actions will be performed based on the previous value of the state,
    not the latest and updated value of the state. This is because setState()
    has asynchronous nature whereby changes to states are not guaranteed
    automatically. Let us look at the 2 examples below to explain when to
    use setState()’ second argument, the optional callback function. The
    examples will also explain why setState() is called asynchronous by
    nature.
▪ Why setState() function is asynchronous and using a callback as 2
    nd argument to guarantee we have a state indeed updated
    before using it: State updates change the virtual DOM and cause
    re-rendering which may be an expensive operation. Making state
    updates synchronous could make the browser unresponsive due
    to huge number of updates. To avoid these issues, a careful
    choice was made to make state updates asynchronous, as well as
    to batch those updates. In general, making setState() method
    was made asynchronous to make sure that the state is updated
    before we use the updated value in our component. Therefore,
    setState() will not update your state with the new state values
    right after you updated it. If you need to execute some function
    using the updated state or to generally verify if the state did
    indeed update correctly, make sure to pass a function as the
    second argument of setState() call Look at the example below.
    Below, you will see two example code. Assume you have a form
    with an input and you assign your initial value to be the value of
    your input. When your code is run, it will show “Abebe”, the
    initial state. However, you want users to update the “Abebe”
    input value to their respective names. Whenever there is a
    change of name in the input, you want that changed name value
    to be printed in your console. The correct way to handle this
    scenario is to update your state first then use a callback as second
    argument to print this updated value. In the first example you
    will see the problem with not using a second argument as
    callback and why we cannot see the updated value in the
    console. In the second example, you will see how using a
    callback guarantees the printing of the latest value of the updated
    state.
    ▪ Example 1 (Without passing the second argument to
    setState): On changing the value of the input field from “Abebe”
    to “Hana” or any name, the console window first prints the
    previous value (Abebe) than the current value of the input field.
    But the current value is not equal to the value we have typed in
    the input field (Hana). This is because we have not declared
    console.log("CurrentName " + this.state.stateOne); function
    inside the setState due to which console.log function is getting
    called on previous value of input field showing the asynchronous
    nature of setState().
//Without passing the second argument to setState
constructor() {
super();
this.state = {
stateOne: "Abebe",
};
}
updateValue = (newValue) => {
console.log("IntialName " + this.state.stateOne);
this.setState({ stateOne: newValue });
console.log("CurrentName" + this.state.stateOne);
};
render() {
return (
<div>
<input value={this.state.stateOne} onChange={(e)=>
this.updateValue(e.target.value)}/>
</div>
);
}
▪ Example 1 (Without passing the second argument to setState): On changing
    the value of the input field from “Abebe” to “Hana” the console window first
    prints the previous value then the current value of the input field. But the current
    value is not equal to the value we have typed in the input field(i.e.
    GeeksForGeeks) this happens because we have not declared console.log(“Current
    name: “+this.state.name) function inside the setState due to which console.log
    function is getting called on the previous value of input field. It shows the
    asynchronous nature of setState.
// Passing the optional second parameter to setState
constructor() {
super();
this.state = {
stateOne: "Abebe",
};
}
updateValue = (newValue) => {
console.log("BeforeStateUpdate " + this.state.stateOne);
this.setState({ stateOne: newValue }, () => {
console.log("AfterStateUpdate " + this.state.stateOne);
});
};
render() {
return (
<div>
<input
value={this.state.stateOne} onChange={(e) =>
this.updateValue(e.target.value)} />
</div>
);
}