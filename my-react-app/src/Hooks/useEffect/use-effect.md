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

Explaining what useEffect() does in English: Assume we have a component that has a
count state with 5 as initial value and that the state value increases by 1 whenever a
button is clicked. Assume you want your component to render the updated value upon
every click. The primary job of your component is to calculate the state change and
display the updated state in the browser. However, let us assume you want to run a side
effect (changing the title of your document) independent of what your component
renders. This is when you use useEffect(). Your rendering logic will render your updated
count state and your logic inside useEffect() method will change the title of your
document after the component has rendered.
▪ So, what does useEffect do in short? It allows us to tell our component to
execute some side-effect logic after rendering the component.
▪ Some examples of side effects: Fetching data, updating the DOM, and timers.

UseEffect() accepts two arguments: a call back and an array containing state variables
▪ Syntax: useEffect(callback, dependencies)
▪ The first argument is a callback function: This is where you write your
side-effect logic. Please note that the callback function (your side-effect logic)
will execute after the changes are pushed to DOM (after your component
renders).
Example:

```jsx
         function UsingUseEffect() {
            const [count, setCount] = useState(0);
            useEffect(function(){
                alert ("hi")
            })
         }
```

The second argument is an optional array of dependencies/state variables:
The dependencies argument of useEffect() lets you control when the side-effect
runs. Meaning, if we use this argument, the logic in your callback (first
argument) executes only if the dependencies have changed between renderings.


Note: If you do not provide the dependency argument, then, the side
effect runs after every rendering.
```jsx
    function UsingUseEffect() {
        const [count, setCount] = useState(0);
        useEffect(function(){
            alert ("hi")
        })
    }
```