import React from "react";
import { MyContext } from "./MyParent";

const ChildThree = () => {
  return (
    <div>
      <MyContext.Consumer>
        {(value) => {
          return <div>{value}</div>;
        }}
      </MyContext.Consumer>
    </div>
  );
};

export default ChildThree;
