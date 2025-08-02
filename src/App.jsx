import "./App.css";
import Header from "./components/Header";
import RootLayout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./components/Login";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
