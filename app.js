import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./componets/header";
import Body from "./componets/Body";
import Footer from "./componets/footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./componets/About";
import Error from "./componets/Error";
import Contact from "./componets/Contact";
import Details from "./componets/Restodetails";
const App = () => {
  return (
    <>
      <Nav />
      {/* outlet help in nesting an router  */}
      <Outlet />
      <Footer />
    </>
  );
};
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restodetales/:id",
        element: <Details />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);
