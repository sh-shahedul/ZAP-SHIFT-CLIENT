
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayOut from "../LayOuts/RootLayOut";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Home/FAQ/Coverage/COverage";
import AboutUs from "../Pages/Home/AboutUs/AboutUs";
import ErrorPage from "../Pages/Home/AboutUs/Error/ErrorPage";
import AuthLayout from "../LayOuts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./privateRoute";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";




export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayOut,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        Component:Home,
      },
      {
         path:'rider',
         element:<PrivateRoute><Rider></Rider></PrivateRoute>,
      },
      {
          path:'sendParcel',
          element:<PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
          loader: ()=>fetch('/serviceCenter.json').then(res=>res.json())
      },
      {
        path:'covarege',
        Component: Coverage,
        loader: ()=>fetch('/serviceCenter.json').then(res=>res.json())
      },{
        path:'about',
        Component:AboutUs,
      }
    ]

  },
   {
    path:'/',
    Component:AuthLayout,
    children: [
     {
      path:'login',
      Component:Login
     },
     {
      path:'register',
      Component:Register
     },
    
    ]
   }
]);