import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1 className="heading">Hello World From jsx</h1>;

const HeadingComponent = () => {
  return (
    <div className="container">
      {title}
      <h1 className="heading">Hello World from Functional Component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
