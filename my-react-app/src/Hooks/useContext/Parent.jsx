import React, { useState } from "react";
import ChildOne from "./ChildOne";
/* eslint-disable no-unused-vars */

function Parent() {
  const [user, setUser] = useState("Alem");
  return (
    <div>
      <ChildOne user={user} />
    </div>
  );
}

export default Parent;
