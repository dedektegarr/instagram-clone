import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import AuthLayout from "./pages/Auth/AuthLayout";
import MainLayout from "./pages/MainLayout";
import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import PostDetails from "./components/Posts/PostDetails";
import { createPortal } from "react-dom";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/accounts",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: ":username",
        element: <ProfilePage />,
        children: [{ path: "post/:postId", element: <PostDetails /> }],
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {createPortal(
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />,
        document.getElementById("modal")
      )}
    </>
  );
};

export default App;
