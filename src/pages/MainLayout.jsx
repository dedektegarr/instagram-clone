import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import PageLoader from "../components/UI/Loader/PageLoader/PageLoader";

const MainLayout = () => {
  const { user, token } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/accounts");
  }, []);

  return (
    <>
      {!user && <PageLoader />}
      {user && (
        <div className="flex">
          <div className="w-[60px] md:w-[250px] h-screen">
            <Sidebar />
          </div>
          <main className="flex-1 py-8 px-4 bg-white">
            <div className="max-w-[935px] mx-auto">
              <Outlet />
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default MainLayout;
