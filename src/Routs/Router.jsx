import {
  createBrowserRouter,
} from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";


export const router = createBrowserRouter([
  {
    path:'/',
   Component: Root,
   children: [
    {
        index: true,
        Component: Home
    },
    {
        path: 'signin',
        Component: SignIn
    },
    {
        path: 'signup',
        Component: SignUp
    }
   ]
  }
]);