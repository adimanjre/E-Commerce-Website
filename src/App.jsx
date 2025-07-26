import "./App.css";
import Header from "./components/Header";
import RootLayout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
