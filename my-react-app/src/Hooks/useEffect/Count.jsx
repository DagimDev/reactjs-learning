import React, { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const countUpdaterFunc = () => {
    setCount((count) => {
      return count + 5;
    });
  };
  useEffect(() => {
    document.title = "Count :" + count;
  }, [count]);
  return (
    <div>
      <p>
        recap all the above explanations and see how we can use useEffect():
        Below is an example where we have a count state that will increase
        whenever a button is clicked. In addition to that we want to create a
        side effect whereby the title of the document will display the current
        count state value upon click.
      </p>
      <h3>Current count is: {count}</h3>
      <button onClick={countUpdaterFunc}>ClickToIncreaseCount</button>
    </div>
  );
};

export default Count;
