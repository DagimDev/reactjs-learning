useEffect() is a React Hook that lets you perform side effects in functional components.
Side effects are actions that happen outside the component’s rendering process — like fetching data, updating the DOM, setting up event listeners, or using timers.

```jsx
useEffect(() => {
  // side effect code
  return () => {
    // cleanup code (optional)
  };
}, [dependencies]);

// How it works:

//     The function inside useEffect() runs after the component renders.
//     The dependency array ([dependencies]) tells React when to re-run the effect.

// Example:
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount(c => c + 1), 1000);
    return () => clearInterval(interval); // cleanup when component unmounts
  }, []);

  return <p>Seconds passed: {count}</p>;
}

```

Key Idea:
    useEffect() combines the roles of several lifecycle methods from class components:
                        componentDidMount
                        componentDidUpdate
                        componentWillUnmount