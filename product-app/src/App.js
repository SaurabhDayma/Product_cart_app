import React from "react";
import Login from "./Components/Login";
import { createBrowserRouter, Outlet, useLocation, Navigate } from 'react-router-dom'
import Home from "./Components/Home.js";
import { Header } from "./Components/Header.js";
import Sidebar from "./Components/Sidebar.js";
import { Category } from "./Components/Categoryz.js";
import Product from "./Components/Product.js";
import Categoryinfo from "./Components/Categoryinfo.js";
import SignUp from "./Components/Signup.js";
import { ProductAdd } from "./Components/ProductAdd.js";

function App() {
  const location = useLocation();

  if (location.pathname === '/') {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
     {(location.pathname !== '/login' && location.pathname !== '/signup') && <Header/>}
     <Outlet/>
     {(location.pathname !== '/login' && location.pathname !== '/signup') && <Sidebar/>}
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/categoryinfo",
        element: <Categoryinfo />,
      },
      {
        path: "/productadd",
        element: <ProductAdd />,
      },
    ],
  },
]);

export default App;
