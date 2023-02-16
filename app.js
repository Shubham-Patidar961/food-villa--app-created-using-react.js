import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./componets/header";
import Body from "./componets/Body";
const App = () => {
  return (
    <>
      {/*navigation bar
       * nav items */
      /*body *restocart *restiinfo *restocart *rating *cusin  */
      /* footer*/}
      <Nav />
      <Body />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
