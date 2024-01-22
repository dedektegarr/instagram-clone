import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>
);
