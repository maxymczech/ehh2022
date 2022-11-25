import {
  Route,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Main from '../pages/Main';
import React from 'react';
import Secondary from '../pages/Secondary';

const router = createBrowserRouter([{
  path: "/",
  element: <Main />,
}, {
  path: "secondary",
  element: <Secondary />,
}]);

export default function NavigationContainer() {
  return <RouterProvider router={router} />;
}
