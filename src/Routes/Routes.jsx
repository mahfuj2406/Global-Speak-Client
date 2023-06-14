import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllClasses from "../pages/AllClasses/AllClasses";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import MySelectedClasses from "../pages/Dashboard/Users/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/Users/MyEnrolledClasses/MyEnrolledClasses";
import Payments from "../pages/Dashboard/Users/Payments/Payments";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'classes',
            element: <AllClasses></AllClasses>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path:'allClasses',
          element: <ManageClasses></ManageClasses>
        },
        {
          path:'allUsers',
          element: <ManageUsers></ManageUsers>
        },
        {
          path: 'my-classes',
          element: <MySelectedClasses></MySelectedClasses>
        },
        {
          path: 'my-enrolled-classes',
          element: <MyEnrolledClasses></MyEnrolledClasses>
        },
        {
          path: 'paymentHistory',
          element: <Payments></Payments>
        },
        {
          path: 'addClass',
          element: <AddClass></AddClass>
        },
        {
          path: 'myClasses',
          element: <MyClasses></MyClasses>
        }
      ]
    }
  ]);
  export default router;