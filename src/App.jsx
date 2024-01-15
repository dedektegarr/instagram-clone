import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import AuthLayout from "./pages/Auth/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/accounts",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
