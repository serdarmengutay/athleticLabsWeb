import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from '../pages/About/About'
import Club from "../pages/Club/Club";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    // {
    //     path: "/about",
    //     element:  <About />
    // },
    {
        path: "/club/:id",
        element: <Club />,

    },
    {
        path: "*",
        element: <Home />,
    }
]);

export default Router;
