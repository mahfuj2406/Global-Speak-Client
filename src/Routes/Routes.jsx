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
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import Payment from "../pages/Dashboard/Users/Pyaments/Payment";
import PaymentHistory from "../pages/Dashboard/Users/Pyaments/PaymentHistory";
import FeedbackPage from "../pages/Dashboard/ManageClasses/FeedbackPage";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path:'allClasses',
          element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path:'allUsers',
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
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
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'addClass',
          element: <AddClass></AddClass>
        },
        {
          path: 'myClasses',
          element: <MyClasses></MyClasses>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path: '/dashboard/feedback/:id',
          element: <FeedbackPage></FeedbackPage>
        }
      ]
    }
  ]);
  export default router;