import React from "react";
import ReactDOM from "react-dom/client";

     // Create the `same element using JSX`
    //  Create a `functional component of the same with JSX`
   //  `Pass attribute` into the tag in `JSX`

// const header = React.createElement("div", { className:"title" }, [
//   React.createElement("h1", {}, "This is H1"),
//   React.createElement("h2", {}, "This is H2 Tag"),
//   React.createElement("h3", {}, "This is H3 Tag "),
// ]);

// const header = (
//   <div className="title">
//     <h1>This is H1</h1>
//     <h2>This is H2</h2>
//     <h3>This is H3</h3>
//   </div>
// );

// const Header2 = () => (
//   <div className="title">
//     {header}
//     <h1>This is H1</h1>
//     <h2>This is H2</h2>
//     <h3>This is H3</h3>
//   </div>
// );

// - Create a `Header Component` from scratch using `Functional Component` with JSX
//   - Add a `Logo on Left`
//   - Add a `search bar in middle`
//   - Add `User icon on right`
//   - Add `CSS to make it look nice`

const HeaderComponent = () => (
  <div className="container">
    <img
      src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/400w/canva-yellow-abstract-cooking-fire-free-logo-8iEUG5R0yQ4.jpg"
      className="image"
    ></img>
    <div>
      <input type="Text" className="search" name="search"></input>
      <button className="btn">Search</button>
    </div>
    <div className="user">
      <img
        src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/400w/canva-yellow-abstract-cooking-fire-free-logo-8iEUG5R0yQ4.jpg"
        className="User"
      ></img>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
