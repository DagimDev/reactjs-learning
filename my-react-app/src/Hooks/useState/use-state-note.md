useState() is a React Hook that lets you add state to a functional component.
Before Hooks, only class components could have state using this.state. With useState(), you can store and update data directly in a function component.
```jsx
const [state, setState] = useState(initialValue);

    // state: The current value.
    // setState: A function used to update that value.
    // initialValue: The starting value of your state (can be any data type).


import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
