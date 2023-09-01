import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Main from './component/Layout/Main';
import Home from './component/Home/Home';
import Instructors from './component/Instructors/Instructors';
import Contact from './component/Contact/Contact';
import Login from './component/Login/Login';
import ErrorPage from './component/Error-page/ErrorPage';
import CourseDetail from './component/CourseDetail/CourseDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [

        {

           path : '/',
           element : <Home></Home>,
            
        },

        {

           path : '/instructors',
           element : <Instructors></Instructors>
           
        },
        {

           path : '/contact',
           element : <Contact></Contact>

        },

    ]
  },
  {
     path : '/courseDetail/:subject',
     element : <CourseDetail></CourseDetail>,
     loader : ((params)=> params.params.subject)
  },
  {

    path : '/login',
    element : <Login></Login>,
 }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
