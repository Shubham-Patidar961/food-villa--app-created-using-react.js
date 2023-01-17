import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./componets/body";
import { Header } from "./componets/heder";
import Footer from "./componets/footer";
/*
    *header
      -logo 
      -list item
      -cart
    *body
     -serch bar
     -restorent
       - resocart(many)
        -images
        -name
        -rating 
        -prize
    *footer
      -links
      -copywrite    
    */
//jsx

// props -property //

const Appylayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading2);
root.render(<Appylayout />);
