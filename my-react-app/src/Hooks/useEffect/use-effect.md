Basic React hooks: steps to implement useEffect() hook
Why useEffect(): useEffect() is a React hook that allows our functional components use
    the component lifecycle methods (such as, componentDidMount, componentDidUpdate
    and componentWillUnmount) which were, in the past, only available for class
    components. useEffect() can be used to execute actions when the component mounts, or
    when certain prop or state updates or to execute code when the component is about to unmount.
Understanding useEffect(): We now know that components are used primarily to
    compute and render outputs whenever a prop or state of the component changes.
    However, there are times when a component makes computations that do not target the
    change in state/prop value. These calculations are called side-effects. It is the useEffect()
    method that we use if we want to calculate side-effects independent from renderings.