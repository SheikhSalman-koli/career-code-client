import {
  createBrowserRouter,
} from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import JobDetails from "../Pages/JobDetails";
import { param } from "motion/react-client";


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
    },
    {
      path: 'details/:id',
      loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`),
      Component: JobDetails
    }
   ]
  }
]);