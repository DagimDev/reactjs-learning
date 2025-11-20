// import Count from "./Hooks/useEffect/Count";
// import Events from "./react-events/Events";
// import ExComp from "./react-events/ExComp";
// import ExampleComp from "./react_state/ExampleComp";

import Parent from "./Hooks/useContext/Parent";

function App() {
  return (
    <div>
      {/* UseEffect Count */}
      {/* <Count /> */}

      <h3>
        Example of passing data from parent to a child in a deeply nested
        component (prop drilling):
      </h3>
      <Parent />
    </div>
  );
}

export default App;
