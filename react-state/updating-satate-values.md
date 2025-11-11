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
