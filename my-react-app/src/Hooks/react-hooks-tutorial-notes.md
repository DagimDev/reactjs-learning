What are Hooks?
React Hooks are special functions that let you use state and other React features in functional components.
Before Hooks, only class components could handle state or lifecycle methods. Hooks made functional components powerful and reusable.

When do we use a Hook?
We use Hooks inside functional components when we need to:
    Manage state (useState)
    Perform side effects like fetching data or updating the DOM (useEffect)
    Reuse logic across components (useCustomHook)
    Hooks make components cleaner and more modular.

Why use Hooks (the origin of React hooks)
React Hooks were introduced in React 16.8 to solve problems in class components, such as:
    Complex and hard-to-maintain state logic
    Code duplication across components
    Confusing this keyword handling
    Hooks made React simpler, more functional, and easier to test.

React hooks vs React classes
| Aspect           | React Hooks              | React Classes                                   |
| ---------------- | ------------------------ | ----------------------------------------------- |
| Syntax           | Functional components    | Class components                                |
| State Management | `useState`, `useReducer` | `this.state`, `setState()`                      |
| Lifecycle        | `useEffect`              | `componentDidMount`, `componentDidUpdate`, etc. |
| Code Reuse       | Custom Hooks             | Higher-Order Components, Render Props           |
| Learning Curve   | Easier                   | Harder (needs `this` binding)                   |
