import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste react using JSX
  </h1>
);

const Heading = () => {
  return (
    <div className="container">
      {Title()}
      <Title />
      <Title></Title>
      <h1>This is Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
