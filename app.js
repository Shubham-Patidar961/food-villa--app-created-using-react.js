import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./componets/body.js";
import Nav from "./componets/nav.js";

const App = () => {
  return (
    <>
      <Body />
      <Nav />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
