
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayOut from "../LayOuts/RootLayOut";
import Home from "../Pages/Home/Home/Home";




export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayOut,
    children:[
      {
        index:true,
        Component:Home,
      }
    ]
  },
]);