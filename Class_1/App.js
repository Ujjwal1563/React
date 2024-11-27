const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 *
 * div id ="parent"
 *      div id="child"
 *          h1 Hii I am H1 tag /h1
 *      /div
 * /div
 *
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Hii I am H1 Tag")
//   )
// );

/**
 *
 * div id ="parent"
 *      div id="child"
 *          h1 Hii I am H1 tag /h1
 *          h2 Hii I am H2 tag /h2
 *      /div
 * /div
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hii I am H1 Tag"),
    React.createElement("h2", {}, "Hii I am H2 Tag"),
  ])
);

// console.log(parent);
root.render(parent);
