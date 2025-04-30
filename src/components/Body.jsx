import React from "react";
import { Login } from "./Login";
import { Browse } from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ErrorElement from "./ErrorElement";

export const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> , errorElement: <ErrorElement />},
    { path: "/browse", element: <Browse />, errorElement: <ErrorElement /> },

]);
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
};
