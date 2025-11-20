// import Count from "./Hooks/useEffect/Count";
// import Events from "./react-events/Events";
// import ExComp from "./react-events/ExComp";
// import ExampleComp from "./react_state/ExampleComp";

import MyParent from "./Hooks/useContext/UseContextEdom/MyParent";

// import Parent from "./Hooks/useContext/Parent";

function App() {
  return (
    <div>
      {/* UseEffect Count */}
      {/* <Count /> */}

      {/* <h3>
        Example of passing data from parent to a child in a deeply nested
        component (prop drilling):
      </h3> */}
      <h3>
        2. Example of passing data from parent to child in a deeply nested-
        component (context API):
      </h3>
        <MyParent />
      {/* <Parent /> */}
    </div>
  );
}

export default App;
