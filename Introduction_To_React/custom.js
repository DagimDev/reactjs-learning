const parElement = React.createElement(
  "div",
  { style: { backgroundColor: "pink" } },
  "I am a div for title",
  React.createElement(
    "ul",
    { style: { backgroundColor: "red" } }, //null
    React.createElement("li", null, "First child of ul"),
    React.createElement("li", { style: { backgroundColor: "yellow" } }, "Second child of ul")
  )
);
React.createElement("div", null, "Div to hold 2nd paragraph");

ReactDOM.render(parElement, document.querySelector("#myDiv "));
