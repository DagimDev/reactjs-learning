import React from "react";
import ChildOne from "./ChildOne";
export const MyContext = React.createContext();
const MyParent = () => {
  return (
    <div>
      <MyContext.Provider value="Alem">
        <ChildOne />
      </MyContext.Provider>
    </div>
  );
};

export default MyParent;
